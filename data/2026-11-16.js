window.NEWS_DATA = window.NEWS_DATA || {};
window.NEWS_DATA['2026-11-16'] = {
  "date": "2026-11-16",
  "generated_at": "2026-11-16T07:11:28+08:00",
  "time_window": "past_24h",
  "total_count": 20,
  "categories": {
    "community_hot": 2,
    "product_release": 3,
    "opensource": 5,
    "research_paper": 4,
    "regulation": 3,
    "funding": 3
  },
  "items": [
    {
      "title": "微软全球宕机持续一天半后全面恢复：网络容量升级所致，非网络攻击",
      "summary": "微软全球宕机后全面恢复，归咎网络容量升级，确认非网络攻击",
      "url": "https://m.thepaper.cn/newsDetail_forward_34480444",
      "source": "澎湃新闻 / 法新社",
      "category": "community_hot",
      "tags": [
        "微软",
        "云服务",
        "宕机",
        "M365"
      ],
      "heat": 4,
      "detail": "11月12日起，微软Microsoft 365、Outlook、Teams及Copilot等服务在全球范围大范围中断，波及70多个国家和地区的政府、企业与公共服务，故障持续约一天半以上。11月14日微软在X平台宣布已完成根源修复、全部产品恢复运行，并向客户与商业伙伴致歉。公司解释事件由一次网络容量升级操作引发，明确与网络攻击无关。事件再度引发对单一云厂商依赖风险的讨论：办公协作、邮件与代码代理工具同时不可用时，企业缺少可用的本地或多云兜底，服务健康状态页与沟通节奏成为受影响方最关心的信息。后续需关注微软是否公布容量变更流程的整改措施。",
      "id": "1",
      "date": "2026-11-16"
    },
    {
      "title": "GitHub宣布12月14日下线六款Copilot模型，五款有后继、Kimi K3待定",
      "summary": "GitHub 12月14日下线六款Copilot模型，五款指定后继，Kimi K3待定",
      "url": "https://dev.to/aheadkit/github-copilot-is-dropping-6-models-on-dec-14-heres-what-replaces-each-one-1g8c",
      "source": "GitHub Changelog / DEV Community",
      "category": "product_release",
      "tags": [
        "GitHub Copilot",
        "模型下线",
        "开发者工具",
        "迁移"
      ],
      "heat": 4,
      "detail": "GitHub于11月13日发布变更说明，六款模型将于2026年12月14日从所有Copilot场景下线，覆盖Chat、内联编辑、ask与agent模式以及代码补全。对应关系：Fable 5升5.2，Haiku 4.5升5.5（年度个人订阅例外保留4.5），Gemini 3.8 Flash替换Hydrogen，Argon替换Carbon，Grok 4.6替换4.7；Kimi K3后继未定。开发者需在一个月内排查配置、脚本与工作流中写死的模型名，否则到期会回退默认值或失效。企业版与商业版在管理员未关闭全局默认时自动启用后继，Kimi K3用户需等待GitHub进一步说明。",
      "id": "2",
      "date": "2026-11-16"
    },
    {
      "title": "Cloudflare开源Kitesurf：面向AI代理的无状态浏览器引擎，Apache 2.0可部署于Workers",
      "summary": "Cloudflare开源代理浏览器Kitesurf，Apache 2.0部署于Workers",
      "url": "https://blog.cloudflare.com/kitesurf-open-source/",
      "source": "Cloudflare Blog",
      "category": "opensource",
      "tags": [
        "Cloudflare",
        "Kitesurf",
        "代理浏览器",
        "开源"
      ],
      "heat": 4,
      "detail": "Cloudflare将面向AI代理的浏览器引擎Kitesurf以Apache 2.0许可在GitHub开源，可本地检视源码、运行并部署自有实例。引擎运行在Workers的V8隔离环境中，负责抓取页面、执行JavaScript、布局与绘制，并讲Chrome DevTools Protocol，现有工具可直接驱动；背后没有Chromium进程或容器，截图、HTML抽取等常见代理任务的CPU与内存占用显著低于Chromium。对开发者而言，这提供了许可宽松、可边缘部署的浏览器运行时，免去为每个代理自行维护无头Chrome的成本。项目仍属实验性质，复杂页面兼容性与反爬对抗能力需在实际站点验证。",
      "id": "3",
      "date": "2026-11-16"
    },
    {
      "title": "Show HN：约190行纯JAX复现DeepSeek V3核心架构，M5 MacBook上从零训练",
      "summary": "约190行纯JAX实现DeepSeek V3四项关键技术，M5 MacBook上完成训练演示",
      "url": "https://dev.to/naveenmalothu/running-deepseek-v3-in-200-lines-of-pure-jax-a-hands-on-walkthrough-149i",
      "source": "Hacker News / DEV Community",
      "category": "opensource",
      "tags": [
        "DeepSeek V3",
        "JAX",
        "MoE",
        "教学项目"
      ],
      "heat": 4,
      "detail": "Show HN项目用约190行干净JAX代码复现DeepSeek-V3核心架构，覆盖MLA多头潜在注意力、DeepSeekMoE混合专家、无辅助损失负载均衡与MTP多Token预测四项关键技术；不依赖Flax、Equinox或PyTorch，参数为普通数组字典，示例可从上到下通读。作者在一台M5芯片、24GB内存的MacBook Air上，经jax-metal后端以公有领域侦探小说为唯一语料端到端训练该教学模型。项目把MoE、MLA等常被框架封装遮住的部件拆成可读张量运算，适合教学与二次实验；复现规模远小于真实V3，重点是结构演示而非权重复刻。",
      "id": "4",
      "date": "2026-11-16"
    },
    {
      "title": "Singularity-Bench：评测“智能体自建智能体”，Opus 5.5六项任务追平人类基线",
      "summary": "Singularity-Bench基准：Opus 5.5六项任务追平人类，余者均值0.58",
      "url": "https://arxiv.org/abs/2611.16591",
      "source": "arXiv:2611.16591",
      "category": "research_paper",
      "tags": [
        "基准测试",
        "AI Agent",
        "红队",
        "OpenAI/Anthropic生态"
      ],
      "heat": 4,
      "detail": "arXiv 2611.16591提出Singularity-Bench，面向自主AI开发的开放式基准，六个端到端任务覆盖预训练、中训练、后训练、推理、代理框架与集群编排，要求代理从最小起点实现核心系统，在相同硬件上对照人类工程基线评估。研究覆盖11个代理、7个前沿模型与2套框架，并完成覆盖OWASP代理Top 10中9类的红队，暴露Harbor框架奖励作弊漏洞，提出可阻断全部测试攻击的Breakwater扩展。结果中Opus 5.5配合Claude Code六项任务全部追平或超越人类基线，指数1.25；其余代理平均仅0.58。预印本待同行评审，任务分布与基线选择会影响解读。",
      "id": "5",
      "date": "2026-11-16"
    },
    {
      "title": "姚期智、杨植麟联合署名TCSExam：30道开放猜想无一被AI独立攻破",
      "summary": "TCSExam测9个前沿模型，GPT-6 Astra定理证明70%，30道开放猜想无一独立破解",
      "url": "http://finance.sina.cn/2026-11-14/detail-iniyriip0821203.d.html",
      "source": "新浪财经 / 澎湃新闻",
      "category": "research_paper",
      "tags": [
        "TCSExam",
        "数学推理",
        "姚期智",
        "月之暗面"
      ],
      "heat": 4,
      "detail": "图灵奖得主姚期智团队与月之暗面创始人杨植麟等联合署名论文提出TCSExam基准，选取100道理论计算机科学研究题，考察大模型证明定理、写出可用求解程序或改进已有构造的能力；其中包含30道人类尚未解决的开放猜想。评测覆盖9个前沿大模型：GPT-6 Astra在研究级定理证明上取得约70%成功率，但面对30道开放猜想，没有任何模型能够独立完整攻破；论文另报告四个可独立验证的局部结果，Kimi K3在一项图论构造上刷新公开最优结果。结论显示前沿AI已能在研究级定理证明、构造优化与求解器工程上做出实质成果，但在攻克长期开放猜想上仍有明显差距。论文先在arXiv公开，分数为论文口径，跨基准比较需谨慎。",
      "id": "6",
      "date": "2026-11-16"
    },
    {
      "title": "纽约州RAISE法案定稿：2027年1月生效，重大事故72小时内报送DFS",
      "summary": "纽约RAISE法案定稿，2027年初生效，前沿实验室须72小时内报告重大安全事故",
      "url": "https://www.dreaming.press/posts/2026-11-15-founders-wire-new-york-raise-act-final-adobe-mcp-anthropic-ipo-week.html",
      "source": "Dreaming Press Founder's Wire",
      "category": "regulation",
      "tags": [
        "美国监管",
        "纽约州",
        "前沿模型",
        "安全报告"
      ],
      "heat": 4,
      "detail": "纽约州前沿AI安全相关的RAISE Act完成定稿，核心义务自2027年1月1日起生效。法案覆盖训练投入超过1亿美元的大模型开发商，要求其发布并维护安全协议；发生重大安全事故须在72小时内向纽约金融服务厅（DFS）报告，迫近风险情形须在24小时内报告并同步执法部门。处罚方面，首次违规罚款100万美元，再犯300万美元，由州总检察长负责执行。这是美国州层面前沿模型监管中少数带明确时限与罚则的立法之一，把安全披露从自愿承诺转为法定责任；其他州可能跟进类似条款，在纽约有业务或受监管机构采购的模型公司需要提前对照合规义务。",
      "id": "7",
      "date": "2026-11-16"
    },
    {
      "title": "美联航禁止未授权第三方个人AI代理订票改签，首个主要航空公司划出代理边界",
      "summary": "美联航禁止未授权第三方AI代理订票改签，成首家划出代理边界的航司",
      "url": "https://www.cbsnews.com/news/united-airlines-bans-ai-agents-booking-flights/",
      "source": "CBS News / United Newsroom",
      "category": "regulation",
      "tags": [
        "美联航",
        "AI代理",
        "账户安全",
        "行业政策"
      ],
      "heat": 4,
      "detail": "11月11日，美国联合航空宣布限制未授权的第三方个人AI代理或助手访问其服务，覆盖自有数字平台，以及通过旅行社、聚合平台进行的间接分发渠道，订票、出票与分销政策同步更新。美联航在声明中称，共享账户凭证给个人AI助手可能暴露敏感信息，代理操作可能导致非本意购买、账户变更或MileagePlus里程被挪用，并需符合FAA与交通部相关规则。银行与零售行业已有类似限制，美联航是首个在自有柜台前对代理型AI设限的主要航司。该动向预示在线服务将普遍区分“用户本人授权操作”与“第三方代理代为操作”，凭证托管与代理身份认证会成为接入合作前提。",
      "id": "8",
      "date": "2026-11-16"
    },
    {
      "title": "Adobe MAX推出Creative Cloud本地MCP服务器，四大创意软件接入第三方代理",
      "summary": "Adobe发布本地MCP服务器，把Photoshop等创意软件开放给第三方AI代理",
      "url": "https://www.dreaming.press/posts/2026-11-15-founders-wire-new-york-raise-act-final-adobe-mcp-anthropic-ipo-week.html",
      "source": "Dreaming Press / Adobe MAX",
      "category": "product_release",
      "tags": [
        "Adobe",
        "MCP",
        "创意工具",
        "Agent生态"
      ],
      "heat": 3,
      "detail": "Adobe MAX期间推出面向Creative Cloud的本地MCP服务器，将Photoshop、Illustrator、Premiere Pro与After Effects能力暴露给ChatGPT、Claude、Gemini等第三方代理调用。方案先以本地端点接入，后续再扩展云端；私有测试计划2027年初开放。创意工具开始把图层、时间线与素材体系经MCP交给代理编排，设计师可让代理批量整理素材、生成初版剪辑或排版草稿，人保留终审权。此举是Adobe把桌面软件嵌入代理工作流的入口；早期测试的能力边界、文件权限与授权条款仍待公开，代理能否读写工程文件是关键看点。",
      "id": "9",
      "date": "2026-11-16"
    },
    {
      "title": "Google Antigravity v2.29推出云端Remote Agents与语音模式，Pro/Ultra可用",
      "summary": "Antigravity v2.29上线云端远程代理与语音模式，Pro/Ultra订阅可用",
      "url": "https://9to5google.com/2026/11/06/google-antigravity-remote-agents-voice-mode/",
      "source": "9to5Google / Antigravity Changelog",
      "category": "product_release",
      "tags": [
        "Google",
        "Antigravity",
        "远程代理",
        "语音交互"
      ],
      "heat": 3,
      "detail": "Google编码代理平台Antigravity在v2.29中加入Remote Agents与语音模式：远程项目运行在隔离云端虚拟机，绑定GitHub仓库或Google Drive文件夹，笔记本关闭后仍可持续推进，并可经网页端在手机上查看控制。Remote Agents面向AI Pro与Ultra个人订阅逐步推送；语音模式基于Gemini Live，支持多音色与语速调节，可直接口述任务。新版还重排对话页、合并分支与worktree选择，调整Automations与内置浏览器。长链路编码任务不再依赖本地会话在线，代理排队、交接与跨设备查看模式正在成型。",
      "id": "10",
      "date": "2026-11-16"
    },
    {
      "title": "agentes-chat开源自托管Slack替代：团队与AI代理在频道和DM中协作",
      "summary": "开源自托管协作工具agentes-chat，团队与多模型代理在频道/DM内共事",
      "url": "https://www.libhunt.com/r/agentes-chat",
      "source": "LibHunt / AI通信",
      "category": "opensource",
      "tags": [
        "开源协作",
        "自托管",
        "AI Agent",
        "Slack替代"
      ],
      "heat": 3,
      "detail": "11月9日创建的agentes-chat/agentes-chat是一款开源、可自托管的Slack替代工具，团队成员与AI代理在频道和私信中协作。代理可运行在Claude、ChatGPT/Codex、Gemini或Grok之上，具备MCP工具调用、独立电脑与浏览器、例行任务、记忆与审批流程；提供Web、桌面与手机应用，部署方式为Docker Compose加Postgres，采用AGPL-3.0许可。与把代理塞进聊天框的插件不同，它把代理当作有身份、有记忆、可被审批的协作者纳入团队沟通结构。项目刚发布，稳定性与权限模型仍需观察；AGPL许可对SaaS二次分发有传染条款，商用前需核对合规要求。",
      "id": "11",
      "date": "2026-11-16"
    },
    {
      "title": "Lara-4-Mini-Base发布：72亿参数、0.6B激活，覆盖英语外24种欧盟语言",
      "summary": "Lara-4-Mini-Base开源基础模型，7.2B参数0.6B激活，支持24种欧盟语言",
      "url": "https://trending.llmnet.nl/en/briefing/2026-11-15",
      "source": "LLMNet Briefing / Hugging Face Model Card",
      "category": "opensource",
      "tags": [
        "开源模型",
        "多语言",
        "欧盟语言",
        "基础模型"
      ],
      "heat": 3,
      "detail": "Translated发布Lara-4-Mini-Base基础模型：总参数72亿、激活参数约0.6B，在英语之外覆盖24种欧盟语言，面向多语言嵌入与轻量化研究场景。模型以CC BY-NC-SA 4.0门控许可开放，属于基础模型而非指令跟随版本，需要自行经过指令微调与对齐后才能承担对话任务。欧洲语言覆盖一直是通用大模型的短板，非英语语种在词表、语料与评测上都处于弱势；这类小参数多语言基础模型便于区域团队本地化部署与二次训练。需要注意非商用许可限制，商用需另行联系团队；实际多语言能力以模型卡与第三方评测为准。",
      "id": "12",
      "date": "2026-11-16"
    },
    {
      "title": "Haru-4B开源语音基础模型：约53亿参数，逐帧输入输出，支持九种语言",
      "summary": "Haru-4B以Apache 2.0开源，53亿参数Qwen3.5-4B骨干，帧级语音交互九语言",
      "url": "https://trending.llmnet.nl/en/briefing/2026-11-15",
      "source": "LLMNet Briefing / higurashi-ai",
      "category": "opensource",
      "tags": [
        "语音模型",
        "开源",
        "语音到语音",
        "Haru-4B"
      ],
      "heat": 3,
      "detail": "higurashi-ai发布Haru-4B，Apache 2.0许可开放的语音基础模型，约53亿参数，基于Qwen3.5-4B骨干改造；每133毫秒输入一帧音频，同步输出一帧音频与文本，构成语音到语音的流式交互，支持九种语言，定位为研究用基础模型。语音到语音链路绕开“语音识别—文本对话—语音合成”三段式，延迟与自然度有机会改善，但同时也把韵律、打断与语气控制复杂度压进单一模型。项目面向研究与二次开发，不直接提供成品对话助手；九语言覆盖清单、实时性指标与合成音质需以模型卡和社区实测为准。",
      "id": "13",
      "date": "2026-11-16"
    },
    {
      "title": "Nominal完成2.4亿美元C轮，估值30亿美元，连接硬件测试数据与工程上下文",
      "summary": "Nominal获2.4亿美元C轮估值30亿，把测试数据接入工程上下文供代理分析",
      "url": "https://crosswalk.to/crosswalk/deals/2026-11-15",
      "source": "Crosswalk Deals",
      "category": "funding",
      "tags": [
        "Nominal",
        "C轮",
        "工业AI",
        "数据基础设施"
      ],
      "heat": 3,
      "detail": "奥斯汀公司Nominal完成2.4亿美元C轮融资，估值30亿美元，由Lightspeed与Insight领投。平台把硬件测试数据与工程上下文连接起来，供工程师和AI代理分析、测试与监控复杂系统：从芯片、设备到机械结构的测试结果可以追溯到对应设计文档、历史批次与失败案例，代理据此定位异常并生成改进建议。随着物理产品研发中仿真与实测数据量激增，能把测试数据纳入可查询工程上下文的工具成为新的基础设施层。本轮资金将用于扩展数据接入与代理能力；公司处于B2B深水区，客户留存与工程数据治理能力是估值支撑的关键。轮次金额与估值以公司官方公告为准。",
      "id": "14",
      "date": "2026-11-16"
    },
    {
      "title": "Rox完成1亿美元B轮，估值13亿美元，AI销售代理面向全球2000强生成线索",
      "summary": "Rox获1亿美元B轮估值13亿，AI销售代理自动生成线索、资格认定并安排会议",
      "url": "https://crosswalk.to/crosswalk/deals/2026-11-15",
      "source": "Crosswalk Deals",
      "category": "funding",
      "tags": [
        "Rox",
        "B轮",
        "销售代理",
        "B2B SaaS"
      ],
      "heat": 3,
      "detail": "旧金山AI销售代理公司Rox完成1亿美元B轮融资，估值13亿美元，由General Catalyst与March领投。产品面向全球2000强企业，由AI代理完成线索生成、资格认定、会议安排与交易管理，替代传统外呼销售团队的部分重复性环节。销售是代理落地中付费意愿较强的场景，线索质量、合规触达与成单转化直接决定产品价值；资本在这一赛道继续押注“代理即销售”的组织形态。本轮后Rox需要证明代理产出的线索可以达到人类销售的转化率，而不只是降低前期人力成本；多市场邮件与外呼合规边界仍是行业共同约束。融资细节来自交易汇总，最终以公司披露为准。",
      "id": "15",
      "date": "2026-11-16"
    },
    {
      "title": "BioXArena-Pro：64项研究级生物医学建模任务，22种配置最佳仅55.1分",
      "summary": "BioXArena-Pro设64项生物医学任务跨八领域，最佳配置仅55.1分，脚手架与模型同等重要",
      "url": "https://arxiv.org/abs/2611.13994",
      "source": "arXiv:2611.13994",
      "category": "research_paper",
      "tags": [
        "生物医学",
        "代理基准",
        "机器学习",
        "预印本"
      ],
      "heat": 3,
      "detail": "arXiv 2611.13994发布BioXArena-Pro，研究级生物医学机器学习代理基准，含64项研究级建模任务，覆盖八个生物医学领域，每项重建自已发表研究，多数留出整物种或队列作为泛化检验，避免信息泄漏。22种代理配置中最佳得分55.1/100；研究结论指出脚手架与模型本身几乎同等重要。对已发表方法重跑显示：原配方直接套用的任务上最佳代理与方法打平，重建任务上方法落后8.2分，说明代理价值在于适应新数据；禁用预训练模型（含生物基础模型）会使最强代理在相关任务下降9分。每个任务经过多轮AI辅助审计与最终人工复核。论文为51页预印本，结论仍需同行评审与外部复现。",
      "id": "16",
      "date": "2026-11-16"
    },
    {
      "title": "Evolving Infra预印本：KV缓存与算力解耦，多代理服务端到端延迟降4.1倍",
      "summary": "Evolving Infra解耦KV缓存与算力，端到端延迟降4.1倍，TTFT最高降14倍",
      "url": "https://arxiv.org/pdf/2611.12304",
      "source": "arXiv:2611.12304 / AI Weekly",
      "category": "research_paper",
      "tags": [
        "推理基础设施",
        "KV缓存",
        "多代理",
        "预印本"
      ],
      "heat": 3,
      "detail": "MIT、伯克利与佐治亚理工研究者发布预印本Evolving Infra（arXiv 2611.12304），代理自适应LLM服务框架：把算力分配与KV缓存管理解耦，节点可在prefill与decode阶段间高效切换；在线规划器按负载组成匹配PD拆分，分布式KV管理器依据代理上下文信号处理缓存驱逐与迁移。测试在最多256张H100上服务GLM-5.2与Kimi K2.6，覆盖编码、数学与电脑使用负载；相比Nvidia Dynamo，P95首Token延迟最高降14倍，平均端到端延迟最高降4.1倍。多代理集群阶段切换开销常计入账单，该工作针对此类混部场景；代码可用性与跨模型泛化仍待评审复现。",
      "id": "17",
      "date": "2026-11-16"
    },
    {
      "title": "菲律宾签署第131号行政令，成立国家人工智能委员会，五工作组季度直报总统",
      "summary": "菲律宾EO131成立国家AI委员会，设五个技术工作组季度向总统报告",
      "url": "https://worldngayon.com/colette-kress-ai-world-this-week/",
      "source": "WorldNgayon / Official Gazette",
      "category": "regulation",
      "tags": [
        "菲律宾",
        "AI治理",
        "国家委员会",
        "东盟"
      ],
      "heat": 3,
      "detail": "菲律宾总统于11月12日签署第131号行政令（EO 131），采用国家AI治理框架并成立国家人工智能委员会，行政部长担任主席、DEPDev部长任副主席，机构间协调体直接向总统报告；下设五个技术工作组，按季度向总统汇报。行政令文本于11月14日在官方公报刊登，公布即生效，但不新设处罚条款，各行业原有监管职责保留。这是东盟轮值主席国在马尼拉峰会前给出的制度性答案：先建跨部门协调结构，再谈专门立法。对在东南亚布局AI业务的企业而言，区域监管协调机制开始成形，后续工作组的执行细则与采购标准值得跟踪。",
      "id": "18",
      "date": "2026-11-16"
    },
    {
      "title": "联想万全混合Token工厂落地张家口：一期100MW、15000P集群，年产超2千万亿Token",
      "summary": "联想张家口Token工厂一期100MW、15000P集群，年产超2千万亿token，成本降70%",
      "url": "https://eu.36kr.com/en/p/4066221891196036",
      "source": "36氪 / Yicai Global",
      "category": "community_hot",
      "tags": [
        "联想",
        "算力基建",
        "Token工厂",
        "张家口"
      ],
      "heat": 3,
      "detail": "11月10日，联想集团在张家口发布“万全混合Token工厂”品牌，并与张家口市政府签署合作协议建设首个母本工厂。按披露计划，2027年建成15000P异构算力集群和约100兆瓦智算中心，年token产量超过2 quadrillion（千万亿级），初始运行峰值可达每秒2亿token以上，每百万token成本预计下降约70%。联想把AI算力类比为工厂、token类比为产品，混合算力模式意在提升推理效率、压低单位token成本。这是国内推理基础设施规模化向“token产能”口径计价的尝试；产能利用率、电价与国产化芯片适配决定实际经济性，集群建设进度与对外服务定价需后续验证。",
      "id": "19",
      "date": "2026-11-16"
    },
    {
      "title": "WhiteMatter（原QuilrAI）获2000万美元A轮，为每个AI代理配Guardian治理代理",
      "summary": "WhiteMatter完成2000万美元A轮，企业代理安全治理平台为每个代理配守护代理",
      "url": "https://crosswalk.to/crosswalk/deals/2026-11-15",
      "source": "Crosswalk Deals",
      "category": "funding",
      "tags": [
        "WhiteMatter",
        "A轮",
        "代理安全",
        "治理平台"
      ],
      "heat": 2,
      "detail": "WhiteMatter（原名QuilrAI）完成2000万美元A轮融资，由Blumberg Capital投资。公司定位企业级AI代理安全与治理平台，为每个运行中的业务代理配备一个Guardian守护代理，按策略执行权限检查、行为审计与越权拦截，把治理能力内嵌到代理运行时而不是事后日志审查。企业采用代理后，账号权限、数据访问与自动化操作的风险集中上升，专门的代理治理层需求随之出现；该赛道仍处早期，策略引擎通用性、与企业IAM/DLP体系对接能力是验证重点。本轮资金规模不大，反映早期项目在代理治理方向上的卡位尝试，后续客户落地案例值得跟踪。",
      "id": "20",
      "date": "2026-11-16"
    }
  ]
};
