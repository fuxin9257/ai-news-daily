#!/usr/bin/env python3
"""
AI News Daily - Automated News Collection Script
Runs in GitHub Actions, collects AI news from multiple sources and generates data files.

Sources:
  - RSS feeds (TechCrunch AI, The Verge AI, Ars Technica, MIT Tech Review, VentureBeat AI)
  - HackerNews API (AI-filtered top stories)
  - GitHub Search API (trending AI/LLM repos)

Output:
  - data/YYYY-MM-DD.js (news data for the website)
  - data/manifest.js (updated date list and counts)
"""

import json
import os
import re
import sys
import datetime
import urllib.request
import urllib.parse
from collections import Counter

# ── Configuration ──────────────────────────────────────────────────────────
DATA_DIR = os.path.join(
    os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "data"
)
TZ_BEIJING = datetime.timezone(datetime.timedelta(hours=8))
TODAY = datetime.datetime.now(TZ_BEIJING).strftime("%Y-%m-%d")
MAX_ITEMS = 20

# RSS feeds: (display_name, url)
RSS_FEEDS = [
    ("TechCrunch AI", "https://techcrunch.com/category/artificial-intelligence/feed/"),
    ("The Verge AI", "https://www.theverge.com/rss/ai-artificial-intelligence/index.xml"),
    ("Ars Technica", "https://feeds.arstechnica.com/arstechnica/features"),
    ("MIT Tech Review", "https://www.technologyreview.com/feed/"),
    ("VentureBeat AI", "https://venturebeat.com/category/ai/feed/"),
]

# Category keyword mapping
CATEGORY_KEYWORDS = {
    "product_release": [
        "launch", "release", "announce", "unveil", "ship", "roll out",
        "推出", "发布", "上线", "新一代",
    ],
    "funding": [
        "funding", "raises", "seed", "series a", "series b", "series c",
        "acquire", "ipo", "valuation", "融资", "收购", "投资", "估值",
    ],
    "research_paper": [
        "paper", "research", "study", "benchmark", "model", "arxiv",
        "论文", "研究", "模型", "预印本",
    ],
    "opensource": [
        "open source", "github", "oss", "开源", "仓库", "release",
    ],
    "regulation": [
        "regulation", "policy", "law", "ban", "compliance", "executive order",
        "监管", "政策", "法律", "法规", "法案",
    ],
    "community_hot": [
        "viral", "trending", "popular", "debate", "controversy", "backlash",
        "热门", "争议", "刷屏",
    ],
}

# AI-related keywords for filtering HackerNews
AI_KEYWORDS = [
    "ai", "artificial intelligence", "llm", "gpt", "claude", "gemini",
    "openai", "anthropic", "machine learning", "deep learning", "neural",
    "transformer", "diffusion", "agent", "chatbot", "generative", "model",
    "大模型", "人工智能", "机器学习",
]

# Tag extraction terms
TAG_TERMS = [
    "AI", "LLM", "OpenAI", "Anthropic", "Google", "Meta", "Microsoft",
    "NVIDIA", "GPT", "Claude", "Gemini", "Agent", "开源", "AI安全",
    "芯片", "机器人", "自动驾驶", "多模态", "推理", "训练", "微调",
    "RAG", "MCP", "Function Calling", "编程", "编码", "监管",
]


# ── HTTP helper ────────────────────────────────────────────────────────────
def fetch_url(url, timeout=15):
    """Fetch URL content with a browser-like User-Agent."""
    req = urllib.request.Request(
        url,
        headers={
            "User-Agent": "Mozilla/5.0 (compatible; AI-News-Bot/1.0; +https://github.com/fuxin9257/ai-news-daily)",
            "Accept": "application/rss+xml, application/xml, text/xml, application/json, */*",
        },
    )
    with urllib.request.urlopen(req, timeout=timeout) as resp:
        return resp.read().decode("utf-8", errors="replace")


# ── RSS feed fetching ─────────────────────────────────────────────────────
def fetch_rss_feed(name, url):
    """Fetch and parse an RSS feed using feedparser."""
    try:
        import feedparser
    except ImportError:
        print("  [WARN] feedparser not installed, skipping RSS feeds")
        return []

    try:
        feed = feedparser.parse(url)
        items = []
        for entry in feed.entries[:10]:
            title = entry.get("title", "").strip()
            link = entry.get("link", "").strip()
            summary = re.sub(r"<[^>]+>", "", entry.get("summary", "")).strip()
            summary = re.sub(r"\s+", " ", summary)[:300]
            if title and link:
                items.append({
                    "title": title,
                    "url": link,
                    "source": name,
                    "summary": summary,
                })
        return items
    except Exception as e:
        print(f"  [WARN] Failed to fetch {name}: {e}")
        return []


# ── HackerNews fetching ────────────────────────────────────────────────────
def fetch_hackernews():
    """Fetch top AI-related stories from HackerNews API."""
    try:
        data = json.loads(fetch_url(
            "https://hacker-news.firebaseio.com/v0/topstories.json"
        ))
        items = []
        for story_id in data[:40]:
            try:
                story = json.loads(fetch_url(
                    f"https://hacker-news.firebaseio.com/v0/item/{story_id}.json",
                    timeout=8,
                ))
                if not story or story.get("type") != "story":
                    continue
                title = story.get("title", "").strip()
                text_lower = title.lower()
                if any(kw in text_lower for kw in AI_KEYWORDS):
                    score = story.get("score", 0)
                    items.append({
                        "title": title,
                        "url": story.get("url", f"https://news.ycombinator.com/item?id={story_id}"),
                        "source": "HackerNews",
                        "summary": f"HN 热度: {score} 赞 / {story.get('descendants', 0)} 评论",
                        "score": score,
                    })
            except Exception:
                continue
        items.sort(key=lambda x: x.get("score", 0), reverse=True)
        return items[:8]
    except Exception as e:
        print(f"  [WARN] Failed to fetch HackerNews: {e}")
        return []


# ── GitHub trending ───────────────────────────────────────────────────────
def fetch_github_trending():
    """Fetch recently updated AI/LLM repos from GitHub Search API."""
    try:
        since = (datetime.datetime.now() - datetime.timedelta(days=2)).strftime("%Y-%m-%d")
        query = f"topic:ai topic:llm pushed:>{since}"
        url = (
            f"https://api.github.com/search/repositories"
            f"?q={urllib.parse.quote(query)}&sort=stars&order=desc&per_page=8"
        )
        data = json.loads(fetch_url(url))
        items = []
        for repo in data.get("items", []):
            desc = repo.get("description") or "No description"
            items.append({
                "title": f"{repo['full_name']}: {desc}",
                "url": repo["html_url"],
                "source": "GitHub Trending",
                "summary": (
                    f"Stars: {repo['stargazers_count']:,} | "
                    f"Language: {repo.get('language') or 'Unknown'} | "
                    f"Updated: {repo.get('pushed_at', '')[:10]}"
                ),
                "stars": repo["stargazers_count"],
            })
        return items
    except Exception as e:
        print(f"  [WARN] Failed to fetch GitHub trending: {e}")
        return []


# ── Classification helpers ─────────────────────────────────────────────────
def classify_category(title, summary):
    text = (title + " " + summary).lower()
    for cat, keywords in CATEGORY_KEYWORDS.items():
        if any(kw.lower() in text for kw in keywords):
            return cat
    return "community_hot"


def estimate_heat(title, summary, score=0, stars=0):
    """Heuristic heat estimation (1-5 stars)."""
    heat = 3
    text_len = len(title) + len(summary)
    if text_len > 200:
        heat = 4
    if text_len > 400:
        heat = 5
    # HN score boost
    if score > 200:
        heat = max(heat, 4)
    if score > 500:
        heat = 5
    # GitHub stars boost
    if stars > 5000:
        heat = max(heat, 4)
    if stars > 20000:
        heat = 5
    # Big-name boost
    big_names = ["openai", "anthropic", "google", "meta", "microsoft", "nvidia", "deepseek"]
    if any(name in (title + summary).lower() for name in big_names):
        heat = min(5, heat + 1)
    return min(5, max(1, heat))


def extract_tags(title, summary):
    text = (title + " " + summary).lower()
    tags = [t for t in TAG_TERMS if t.lower() in text]
    return tags[:5]


# ── Main pipeline ───────────────────────────────────────────────────────────
def main():
    print(f"=== AI News Daily Collection: {TODAY} ===")
    print(f"Time: {datetime.datetime.now(TZ_BEIJING).isoformat()}")

    all_items = []

    # 1. RSS feeds
    print("\n[1/3] Fetching RSS feeds...")
    for name, url in RSS_FEEDS:
        items = fetch_rss_feed(name, url)
        print(f"  {name}: {len(items)} items")
        all_items.extend(items)

    # 2. HackerNews
    print("\n[2/3] Fetching HackerNews...")
    hn_items = fetch_hackernews()
    print(f"  HackerNews: {len(hn_items)} AI stories")
    all_items.extend(hn_items)

    # 3. GitHub trending
    print("\n[3/3] Fetching GitHub trending...")
    gh_items = fetch_github_trending()
    print(f"  GitHub: {len(gh_items)} trending repos")
    all_items.extend(gh_items)

    # Deduplicate by URL
    seen = set()
    unique = []
    for item in all_items:
        u = item.get("url", "")
        if u and u not in seen:
            seen.add(u)
            unique.append(item)

    print(f"\nTotal unique items: {len(unique)}")

    # Process into news items
    news_items = []
    for i, item in enumerate(unique[:MAX_ITEMS], 1):
        title = item["title"]
        summary = item.get("summary", "")
        tags = extract_tags(title, summary)
        category = classify_category(title, summary)
        heat = estimate_heat(
            title, summary,
            score=item.get("score", 0),
            stars=item.get("stars", 0),
        )

        # Build detail: summary + source attribution
        detail = summary[:300]
        if len(summary) > 300:
            detail = summary[:300].rsplit("。", 1)[0] + "。"
        detail += f" 来源：{item.get('source', '')}。"

        news_items.append({
            "id": str(i),
            "title": title,
            "summary": summary[:200],
            "detail": detail,
            "url": item["url"],
            "source": item.get("source", "Unknown"),
            "category": category,
            "tags": tags,
            "heat": heat,
            "date": TODAY,
        })

    # Category counts
    cat_counts = Counter(item["category"] for item in news_items)
    categories = {cat: cat_counts.get(cat, 0) for cat in
                  ["product_release", "research_paper", "funding",
                   "opensource", "regulation", "community_hot"]}

    # Build data object
    data = {
        "date": TODAY,
        "generated_at": datetime.datetime.now(TZ_BEIJING).isoformat(),
        "time_window": "past_24h",
        "total_count": len(news_items),
        "categories": categories,
        "items": news_items,
    }

    # Write data file
    os.makedirs(DATA_DIR, exist_ok=True)
    data_file = os.path.join(DATA_DIR, f"{TODAY}.js")
    with open(data_file, "w", encoding="utf-8") as f:
        f.write("window.NEWS_DATA = window.NEWS_DATA || {};\n")
        f.write(f"window.NEWS_DATA['{TODAY}'] = ")
        json.dump(data, f, ensure_ascii=False, indent=2)
        f.write(";\n")
    print(f"\nWritten: {data_file} ({len(news_items)} items)")

    # Update manifest
    manifest_file = os.path.join(DATA_DIR, "manifest.js")
    existing_dates = []
    existing_counts = {}
    if os.path.exists(manifest_file):
        with open(manifest_file, "r", encoding="utf-8") as f:
            content = f.read()
        dates_match = re.search(r"dates:\s*\[([^\]]+)\]", content)
        if dates_match:
            existing_dates = [
                d.strip().strip("'\"") for d in dates_match.group(1).split(",") if d.strip()
            ]
        counts_match = re.search(r"counts:\s*\{([^}]+)\}", content)
        if counts_match:
            for k, v in re.findall(r"'([^']+)':\s*(\d+)", counts_match.group(1)):
                existing_counts[k] = int(v)

    if TODAY not in existing_dates:
        existing_dates.append(TODAY)
    existing_dates.sort()
    existing_counts[TODAY] = len(news_items)

    with open(manifest_file, "w", encoding="utf-8") as f:
        f.write("// AI News Daily - 数据清单 (auto-updated by GitHub Actions)\n")
        f.write("window.NEWS_MANIFEST = {\n")
        f.write("  dates: [" + ", ".join(f"'{d}'" for d in existing_dates) + "],\n")
        f.write(f"  latest: '{existing_dates[-1]}',\n")
        f.write("  counts: {\n")
        for idx, d in enumerate(existing_dates):
            comma = "," if idx < len(existing_dates) - 1 else ""
            f.write(f"    '{d}': {existing_counts.get(d, 0)}{comma}\n")
        f.write("  }\n};\n")
    print(f"Updated: {manifest_file}")

    print(f"\n=== Collection complete: {len(news_items)} news items for {TODAY} ===")


if __name__ == "__main__":
    main()
