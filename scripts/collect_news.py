#!/usr/bin/env python3
"""
AI News Daily - Automated News Collection Script
Runs in GitHub Actions. Collects AI news, fetches article content for
detailed summaries, translates to Chinese, generates data files.
"""

import json, os, re, time, datetime, urllib.request, urllib.parse
from collections import Counter

DATA_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "data")
TZ = datetime.timezone(datetime.timedelta(hours=8))
TODAY = datetime.datetime.now(TZ).strftime("%Y-%m-%d")
MAX_ITEMS = 20

CHINESE_RSS = [
    ("量子位", "https://www.qbitai.com/feed"),
    ("机器之心", "https://www.jiqizhixin.com/rss"),
    ("36氪", "https://36kr.com/feed"),
    ("极客公园", "https://www.geekpark.net/rss"),
]
ENGLISH_RSS = [
    ("TechCrunch AI", "https://techcrunch.com/category/artificial-intelligence/feed/"),
    ("The Verge AI", "https://www.theverge.com/rss/ai-artificial-intelligence/index.xml"),
    ("Ars Technica AI", "https://arstechnica.com/ai/feed/"),
    ("MIT Tech Review", "https://www.technologyreview.com/feed/"),
]

AI_STRICT = [
    "ai","artificial intelligence","llm","gpt","claude","gemini","openai","anthropic",
    "machine learning","deep learning","neural","transformer","diffusion","agent",
    "chatbot","generative","model","robot","芯片","大模型","人工智能","机器学习",
    "深度学习","智能体","推理","训练","微调","多模态","编程","编码","qwen",
    "deepseek","千问","通义","豆包","文心","混元","英伟达","nvidia","gpu","算力",
]
BAD_SUMMARIES = ["点击查看原文","查看原文","read more","continue reading","..."]

CATEGORY_KEYWORDS = {
    "product_release": ["launch","release","announce","unveil","ship","roll out","推出","发布","上线","新一代","开源","首发"],
    "funding": ["funding","raises","seed","series a","series b","series c","acquire","ipo","valuation","融资","收购","投资","估值","亿元"],
    "research_paper": ["paper","research","study","benchmark","arxiv","论文","研究","模型","预印本","实验","新架构"],
    "opensource": ["open source","github","oss","开源","仓库"],
    "regulation": ["regulation","policy","law","ban","compliance","监管","政策","法律","法规","法案","安全"],
    "community_hot": ["viral","trending","popular","debate","controversy","热门","争议","刷屏","爆火"],
}
TAG_TERMS = ["AI","LLM","OpenAI","Anthropic","Google","Meta","Microsoft","NVIDIA","GPT","Claude","Gemini","Agent","开源","AI安全","芯片","机器人","自动驾驶","多模态","推理","训练","微调","RAG","MCP","编程","编码","监管","大模型","DeepSeek","千问"]

def fetch_url(url, timeout=12):
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 (compatible; AI-News-Bot/1.0)", "Accept": "*/*"})
    with urllib.request.urlopen(req, timeout=timeout) as r:
        return r.read().decode("utf-8", errors="replace")

def is_ai_related(title):
    t = title.lower()
    return any(kw in t for kw in AI_STRICT)

def is_bad_summary(s):
    s = s.strip()
    if len(s) < 20: return True
    return any(bad in s for bad in BAD_SUMMARIES)

def translate_to_chinese(text):
    if not text or not text.strip(): return text
    chinese = len(re.findall(r"[\u4e00-\u9fff]", text))
    if chinese > len(text) * 0.3: return text
    try:
        chunk = text[:480]
        enc = urllib.parse.quote(chunk)
        url = "https://api.mymemory.translated.net/get?q=" + enc + "&langpair=en|zh-CN"
        result = json.loads(fetch_url(url, timeout=10))
        translated = result.get("responseData", {}).get("translatedText", "")
        if translated and translated != chunk: return translated
    except: pass
    return text

def extract_article_content(url, max_chars=400):
    try:
        html = fetch_url(url, timeout=10)
        html = re.sub(r"<script[^>]*>.*?</script>", "", html, flags=re.DOTALL|re.IGNORECASE)
        html = re.sub(r"<style[^>]*>.*?</style>", "", html, flags=re.DOTALL|re.IGNORECASE)
        paragraphs = re.findall(r"<p[^>]*>(.*?)</p>", html, re.DOTALL|re.IGNORECASE)
        texts = []
        for p in paragraphs:
            t = re.sub(r"<[^>]+>", "", p).strip()
            t = re.sub(r"\s+", " ", t)
            if len(t) > 40 and not any(skip in t.lower() for skip in ["subscribe","newsletter","cookie","copyright","advertisement"]):
                texts.append(t)
            if sum(len(x) for x in texts) >= max_chars: break
        if texts:
            content = " ".join(texts)[:max_chars]
            for punct in ["。","！","？",".","!","?"]:
                idx = content.rfind(punct)
                if idx > 100:
                    content = content[:idx+1]
                    break
            return content
    except: pass
    return ""

def fetch_rss(name, url, lang="zh"):
    try: import feedparser
    except: return []
    try:
        feed = feedparser.parse(url)
        items = []
        for entry in feed.entries[:15]:
            title = entry.get("title","").strip()
            link = entry.get("link","").strip()
            summary = re.sub(r"<[^>]+>", "", entry.get("summary","")).strip()
            summary = re.sub(r"\s+", " ", summary)[:300]
            if not title or not link: continue
            if not is_ai_related(title): continue
            if lang == "en":
                title = translate_to_chinese(title)
                time.sleep(0.2)
            items.append({"title": title, "url": link, "source": name, "rss_summary": summary, "lang": lang})
        return items
    except Exception as e:
        print("  [WARN] " + name + ": " + str(e))
        return []

def fetch_hackernews():
    try:
        data = json.loads(fetch_url("https://hacker-news.firebaseio.com/v0/topstories.json"))
        items = []
        for sid in data[:50]:
            try:
                s = json.loads(fetch_url("https://hacker-news.firebaseio.com/v0/item/" + str(sid) + ".json", timeout=8))
                if not s or s.get("type") != "story": continue
                title = s.get("title","").strip()
                score = s.get("score", 0)
                if not is_ai_related(title.lower()): continue
                t_title = translate_to_chinese(title)
                items.append({"title": t_title, "url": s.get("url","https://news.ycombinator.com/item?id="+str(sid)), "source": "HackerNews", "rss_summary": "HN热度" + str(score) + "赞/" + str(s.get("descendants",0)) + "评论", "score": score, "lang": "en"})
                time.sleep(0.2)
            except: continue
        items.sort(key=lambda x: x.get("score", 0), reverse=True)
        return items[:6]
    except Exception as e:
        print("  [WARN] HN: " + str(e))
        return []

def fetch_github():
    try:
        since = (datetime.datetime.now() - datetime.timedelta(days=3)).strftime("%Y-%m-%d")
        q = "topic:ai topic:llm pushed:>" + since
        url = "https://api.github.com/search/repositories?q=" + urllib.parse.quote(q) + "&sort=stars&order=desc&per_page=6"
        data = json.loads(fetch_url(url))
        items = []
        for repo in data.get("items", []):
            desc = repo.get("description") or "No description"
            t_desc = translate_to_chinese(desc)
            items.append({"title": repo["full_name"] + ": " + t_desc, "url": repo["html_url"], "source": "GitHub Trending", "rss_summary": "Star " + format(repo["stargazers_count"], ",") + " | " + (repo.get("language") or "?") + " | " + repo.get("pushed_at","")[:10], "stars": repo["stargazers_count"], "lang": "en"})
            time.sleep(0.1)
        return items
    except Exception as e:
        print("  [WARN] GitHub: " + str(e))
        return []

def classify(title, summary):
    text = (title + " " + summary).lower()
    for cat, kws in CATEGORY_KEYWORDS.items():
        if any(kw.lower() in text for kw in kws): return cat
    return "community_hot"

def heat_score(title, summary, score=0, stars=0):
    h = 3
    tl = len(title) + len(summary)
    if tl > 100: h = 4
    if tl > 200: h = 5
    if score > 200: h = max(h, 4)
    if score > 500: h = 5
    if stars > 5000: h = max(h, 4)
    if stars > 20000: h = 5
    big = ["openai","anthropic","google","meta","microsoft","nvidia","deepseek","qwen"]
    if any(n in (title+summary).lower() for n in big): h = min(5, h+1)
    return min(5, max(1, h))

def extract_tags(title, summary):
    text = (title + " " + summary).lower()
    return [t for t in TAG_TERMS if t.lower() in text][:5]

def main():
    print("=== AI News Daily: " + TODAY + " ===")
    all_items = []
    print("\n[1/4] Chinese RSS...")
    for name, url in CHINESE_RSS:
        items = fetch_rss(name, url, "zh")
        print("  " + name + ": " + str(len(items)))
        all_items.extend(items)
    print("\n[2/4] English RSS (translating)...")
    for name, url in ENGLISH_RSS:
        items = fetch_rss(name, url, "en")
        print("  " + name + ": " + str(len(items)))
        all_items.extend(items)
    print("\n[3/4] HackerNews...")
    hn = fetch_hackernews()
    print("  HN: " + str(len(hn)))
    all_items.extend(hn)
    print("\n[4/4] GitHub...")
    gh = fetch_github()
    print("  GitHub: " + str(len(gh)))
    all_items.extend(gh)

    seen = set()
    unique = []
    for it in all_items:
        u = it.get("url","")
        if u and u not in seen:
            seen.add(u)
            unique.append(it)
    print("\nUnique AI items: " + str(len(unique)))

    news_items = []
    for item in unique[:MAX_ITEMS*2]:
        if len(news_items) >= MAX_ITEMS: break
        title = item["title"]
        rss_sum = item.get("rss_summary", "")
        if is_bad_summary(rss_sum) and item.get("source") not in ["HackerNews","GitHub Trending"]:
            print("  Fetching: " + title[:40] + "...")
            content = extract_article_content(item["url"])
            time.sleep(0.3)
            if content and len(content) > 80:
                summary = content[:200]
                detail = content[:400]
                if item.get("lang") == "en":
                    summary = translate_to_chinese(summary)
                    detail = translate_to_chinese(detail)
                    time.sleep(0.2)
            else:
                continue
        else:
            summary = rss_sum[:200]
            if len(rss_sum) < 100 and item.get("source") not in ["HackerNews","GitHub Trending"]:
                print("  Fetching detail: " + title[:40] + "...")
                content = extract_article_content(item["url"])
                time.sleep(0.3)
                if content and len(content) > 80:
                    detail = content[:400]
                    if item.get("lang") == "en":
                        detail = translate_to_chinese(detail)
                        time.sleep(0.2)
                else:
                    detail = rss_sum[:300] + " 来源：" + item.get("source","") + "。"
            else:
                detail = rss_sum[:300] + " 来源：" + item.get("source","") + "。"
        tags = extract_tags(title, summary)
        cat = classify(title, summary)
        heat = heat_score(title, summary, item.get("score",0), item.get("stars",0))
        news_items.append({"id": str(len(news_items)+1), "title": title, "summary": summary[:200], "detail": detail, "url": item["url"], "source": item.get("source",""), "category": cat, "tags": tags, "heat": heat, "date": TODAY})

    cat_counts = Counter(x["category"] for x in news_items)
    cats = {c: cat_counts.get(c, 0) for c in ["product_release","research_paper","funding","opensource","regulation","community_hot"]}
    data = {"date": TODAY, "generated_at": datetime.datetime.now(TZ).isoformat(), "time_window": "past_24h", "total_count": len(news_items), "categories": cats, "items": news_items}

    os.makedirs(DATA_DIR, exist_ok=True)
    data_file = os.path.join(DATA_DIR, TODAY + ".js")
    with open(data_file, "w", encoding="utf-8") as f:
        f.write("window.NEWS_DATA = window.NEWS_DATA || {};\n")
        f.write("window.NEWS_DATA['" + TODAY + "'] = ")
        json.dump(data, f, ensure_ascii=False, indent=2)
        f.write(";\n")
    print("\nWritten: " + data_file + " (" + str(len(news_items)) + " items)")

    mf = os.path.join(DATA_DIR, "manifest.js")
    dates, counts = [], {}
    if os.path.exists(mf):
        c = open(mf, "r", encoding="utf-8").read()
        m = re.search(r"dates:\s*\[([^\]]+)\]", c)
        if m: dates = [d.strip().strip("'\"") for d in m.group(1).split(",") if d.strip()]
        m2 = re.search(r"counts:\s*\{([^}]+)\}", c)
        if m2:
            for k, v in re.findall(r"'([^']+)':\s*(\d+)", m2.group(1)):
                counts[k] = int(v)
    if TODAY not in dates: dates.append(TODAY)
    dates.sort()
    counts[TODAY] = len(news_items)
    with open(mf, "w", encoding="utf-8") as f:
        f.write("// AI News Daily - auto-updated by GitHub Actions\n")
        f.write("window.NEWS_MANIFEST = {\n")
        f.write("  dates: [" + ", ".join("'" + d + "'" for d in dates) + "],\n")
        f.write("  latest: '" + dates[-1] + "',\n")
        f.write("  counts: {\n")
        for i, d in enumerate(dates):
            f.write("    '" + d + "': " + str(counts.get(d,0)) + ("," if i < len(dates)-1 else "") + "\n")
        f.write("  }\n};\n")
    print("Done: " + str(len(news_items)) + " items")

if __name__ == "__main__":
    main()