# AI News Daily - 定时任务配置

## 任务说明

每日早上 7:00（北京时间 UTC+8）自动执行完整的 AI 新闻聚合流程。

## Cron 表达式

```
schedule_type: cron
schedule: 0 7 * * *
timezone: Asia/Shanghai (UTC+8)
```

## 任务参数

```
title: 每日AI新闻聚合
enable: true
```

## 任务 Query（触发时执行的完整指令）

```
本次由「每日AI新闻聚合」定时任务到时触发。

执行以下完整流程：

1. **新闻收集**：使用 ai-news-collector 技能，对过去24小时AI领域进行多维度分层搜索（至少10次搜索，覆盖6个维度：周报聚合、社区热度、产品发布、融资商业、研究突破、监管政策），同时搜索GitHub热门AI项目。交叉验证、去重合并，按热度1-5星评分，输出15-25条新闻。

2. **结构化数据**：将收集到的新闻整理为JSON格式，字段包括：id, title, summary, detail, url, source, category, tags, heat, date。保存到 E:\AI\news-backup\YYYY-MM-DD\news.json，同时生成 summary.md 和 report.json。

3. **更新网站数据**：将当天JSON转换为JS格式（window.NEWS_DATA['YYYY-MM-DD'] = {...}），保存到 E:\AI\ai-news-website\data\YYYY-MM-DD.js。更新 E:\AI\ai-news-website\data\manifest.js，将新日期追加到dates数组并更新latest字段。

4. **推送GitHub**：使用 github-remote 工具将当天新增的数据文件（data/YYYY-MM-DD.js）和更新后的 manifest.js 推送到 GitHub 仓库 fuxin9257/ai-news-daily 的 main 分支。

5. **发送邮件报告**：通过 Agent Mail 向 kasedfinding@foxmail.com 发送HTML格式邮件，包含：运行报告（收录数量、搜索次数、覆盖维度、分类统计）、当日Top10新闻摘要（按热度排序，每条含标题、摘要、原文链接）、网站与数据文件位置信息。邮件主题格式：【AI News Daily】YYYY-MM-DD 运行报告与Top10新闻摘要。

6. **验证**：确认所有文件已正确写入，网站数据可正常加载，GitHub推送成功。
```

## 关键路径

- 网站目录：E:\AI\ai-news-website\
- 数据目录：E:\AI\ai-news-website\data\
- 备份目录：E:\AI\news-backup\YYYY-MM-DD\
- 收件邮箱：kasedfinding@foxmail.com
- GitHub仓库：fuxin9257/ai-news-daily

## 注意事项

- 任务执行时间约 5-10 分钟（含搜索、数据处理、邮件发送）
- 7:00-8:00 为任务高峰期，可能因排队略有延迟
- 邮件发送需走两阶段确认流程
- 如遇搜索限流，自动换关键词重试
- 所有链接必须为真实可访问的HTTPS链接