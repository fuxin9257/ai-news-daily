# AI News Daily

> 每日AI新闻聚合 — 纯静态、数据驱动的AI新闻展示网站

自动收集过去24小时AI领域新闻、论文进展、开源项目、融资动态，按热度排序，结构化展示。每条新闻支持展开查看详情，一键跳转原文出处。

## 功能特性

- **每日自动更新**：每天 07:00 (UTC+8) 自动收集、处理、发布
- **热度排序**：1-5星热度评级，重大事件优先展示
- **多维筛选**：按分类（产品发布/研究论文/融资商业/开源项目/监管政策/社区热点）、热度、标签、关键词筛选
- **可展开详情**：点击新闻卡片展开查看关键数据点、背景信息、影响分析
- **历史归档**：支持切换查看过往任意一天的新闻
- **深色/浅色模式**：自动记忆用户偏好
- **响应式设计**：适配桌面、平板、手机
- **纯静态部署**：无后端依赖，支持 Vercel / Netlify / GitHub Pages 等

## 文件结构

```
ai-news-daily/
├── index.html              # 主页面（唯一入口）
├── css/
│   └── style.css           # 样式表（含深色/浅色主题、响应式、展开动画）
├── js/
│   └── app.js              # 应用逻辑（数据加载、筛选、展开卡片、主题切换）
├── data/
│   ├── manifest.js         # 数据清单（列出所有可用日期，最新日期放最后）
│   ├── 2026-09-02.js      # 每日新闻数据（window.NEWS_DATA 格式）
│   ├── 2026-09-03.js
│   ├── ...
│   └── 2026-09-22.js
├── assets/                 # 图片等静态资源（可选）
├── CRON_CONFIG.md          # 定时任务配置说明
└── README.md               # 本文件
```

## 数据格式说明

### manifest.js

```javascript
window.NEWS_MANIFEST = {
  dates: ['2026-09-02', '2026-09-03', '...', '2026-09-22'],
  latest: '2026-09-22'
};
```

- `dates`：所有可用日期数组，按时间升序排列
- `latest`：最新日期，网站默认加载此日期

### 每日数据文件 (YYYY-MM-DD.js)

```javascript
window.NEWS_DATA = window.NEWS_DATA || {};
window.NEWS_DATA['2026-09-22'] = {
  "date": "2026-09-22",
  "generated_at": "2026-09-22T07:00:00+08:00",
  "total_count": 20,
  "categories": {
    "product_release": 6,
    "research_paper": 1,
    "funding": 2,
    "opensource": 4,
    "regulation": 4,
    "community_hot": 3
  },
  "items": [
    {
      "id": "1",
      "title": "新闻标题",
      "summary": "一句话摘要（不超过80字）",
      "detail": "详细内容（150-300字），包含关键数据点、背景信息、影响分析。点击卡片展开显示。",
      "url": "https://example.com/article",
      "source": "来源名称",
      "category": "product_release",
      "tags": ["LLM", "Agent"],
      "heat": 5,
      "date": "2026-09-22"
    }
  ]
};
```

### 字段定义

| 字段 | 类型 | 说明 |
|---|---|---|
| `id` | string | 当日内唯一编号 |
| `title` | string | 新闻标题 |
| `summary` | string | 一句话摘要，不超过80字 |
| `detail` | string | 详细内容，150-300字，含数据点/背景/影响分析 |
| `url` | string | 原文链接（HTTPS） |
| `source` | string | 来源媒体名称 |
| `category` | string | 分类，见下方分类定义 |
| `tags` | string[] | 标签数组 |
| `heat` | number | 热度1-5，5为最高 |
| `date` | string | 事件发生日期 YYYY-MM-DD |

### 分类定义

| category | 中文标签 | 说明 |
|---|---|---|
| `product_release` | 产品发布 | 新产品、新模型、新功能发布 |
| `research_paper` | 研究论文 | 学术论文、技术突破、研究成果 |
| `funding` | 融资商业 | 融资、并购、IPO、商业合作 |
| `opensource` | 开源项目 | 开源项目发布、更新、热门趋势 |
| `regulation` | 监管政策 | 法律法规、政策出台、监管动态 |
| `community_hot` | 社区热点 | 社区热议、病毒传播事件、行业观点 |

### 热度评级标准

| 星级 | 标准 |
|---|---|
| ⭐⭐⭐⭐⭐ | 多家权威媒体报道 + 社区病毒传播 + 技术/行业重大影响 |
| ⭐⭐⭐⭐ | 多家媒体报道 + 较高社区关注度 + 一定影响力 |
| ⭐⭐⭐ | 有一定报道量和讨论度的常规新闻 |
| ⭐⭐ | 单一来源报道的小众新闻 |
| ⭐ | 资讯类短消息 |

## 本地运行

由于使用动态JS数据加载，通过本地HTTP服务器预览：

```bash
# Python 3
python -m http.server 8080

# Node.js
npx serve .

# 然后访问 http://localhost:8080
```

> 注意：直接用 `file://` 协议打开 index.html 也可以正常运行（数据通过 `<script>` 标签加载，不依赖 fetch）。

## 部署

### Vercel（推荐）

```bash
# 安装 Vercel CLI
npm install -g vercel

# 部署
vercel --prod
```

或直接将GitHub仓库导入 Vercel，无需配置，自动识别静态站点。

### Netlify

1. 访问 [netlify.com](https://netlify.com)
2. 选择 "Add new site" → "Import an existing project"
3. 连接GitHub仓库 `ai-news-daily`
4. 无需构建配置，直接部署

### GitHub Pages

1. 仓库已为 Public
2. 进入 Settings → Pages
3. Source 选择 "Deploy from a branch"
4. Branch 选择 `main`，目录选择 `/ (root)`
5. 保存，等待部署完成
6. 访问 `https://<username>.github.io/ai-news-daily/`

### 其他静态托管

任何支持静态文件托管的服务均可：Cloudflare Pages、阿里云OSS、腾讯云COS、Nginx等。将整个目录上传即可。

## 数据更新机制

### 每日自动更新（定时任务）

通过定时任务每天 07:00 (UTC+8) 自动执行完整流程：

1. **新闻收集**：多维度搜索（周报聚合、社区热度、产品发布、融资商业、研究突破、监管政策、GitHub热门）
2. **结构化处理**：去重、分类、打标签、热度评分、撰写详情
3. **生成数据文件**：输出 `data/YYYY-MM-DD.js` 和 JSON 备份
4. **更新清单**：将新日期追加到 `data/manifest.js`
5. **推送GitHub**：将新增/修改的文件推送到仓库
6. **发送邮件**：向指定邮箱发送运行报告和Top新闻摘要

定时任务的完整配置见 [CRON_CONFIG.md](CRON_CONFIG.md)。

### 手动新增一天数据

1. 创建 `data/YYYY-MM-DD.js`，按上述数据格式填入新闻
2. 编辑 `data/manifest.js`，将新日期追加到 `dates` 数组，更新 `latest`
3. 提交并推送到GitHub
4. 完成，无需修改其他文件

## 技术栈

- **纯原生 HTML / CSS / JavaScript**，无框架、无构建工具
- 数据通过 `window.NEWS_DATA` 全局变量加载（兼容 file:// 协议）
- CSS 变量实现深色/浅色主题切换
- CSS transition 实现卡片展开/收起平滑动画
- 响应式 Grid/Flex 布局

## 数据来源

数据通过自动化搜索收集，来源包括但不限于：
- 主流科技媒体（TechCrunch、The Verge、Ars Technica、36氪、量子位等）
- AI公司官方博客（OpenAI、Anthropic、Google DeepMind、Meta AI等）
- 学术论文（arXiv等）
- GitHub热门项目趋势
- 社区讨论（Reddit、Hacker News等）
- 周报/Newsletter聚合（The Batch、AI Weekly等）

所有内容链接至原始出处，版权归原作者所有。

## License

MIT
