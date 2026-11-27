window.NEWS_DATA = window.NEWS_DATA || {};
window.NEWS_DATA['2026-11-28'] = {
  "date": "2026-11-28",
  "generated_at": "2026-11-28T07:29:34+08:00",
  "time_window": "past_24h",
  "total_count": 22,
  "categories": {
    "product_release": 3,
    "funding": 6,
    "regulation": 3,
    "research_paper": 4,
    "opensource": 4,
    "community_hot": 2
  },
  "items": [
    {
      "title": "Anthropic 把 Messages API 从 Python 全量重写为 Rust：Claude 写超 80% 合并代码，CPU 降约 70%",
      "summary": "全量迁 Rust 9 月切流；CPU 降约 70%、内存降超 80%、首 token 延迟降 20%",
      "url": "https://www.anthropic.com/research/migrating-api-to-rust",
      "source": "Anthropic Engineering / MadRobot / FreakyJolly / AgentConn",
      "category": "product_release",
      "tags": [
        "产品发布",
        "API架构",
        "Rust",
        "工程迁移",
        "Anthropic"
      ],
      "heat": 3,
      "detail": "Anthropic 11 月 25 日博客披露，调用 Claude 的主入口 Messages API 从 Python 全量迁移到 Rust。该接口起初用 Python 搭建；2024 年初至 2026 年秋流量增长约 1800 倍，对象创建与内存占用成为瓶颈。先把输出解析器用 Rust 重写，省 8%–10% CPU；随后全量迁移，团队起初无 Rust 工程师。核心路径首版由 Claude 约一周写出，合并代码超 80% 由 Claude 完成。迁移不停机，9 月流量切到 Rust；实测每请求 CPU 约降 70%、内存降超 80%，首 token 延迟降约 20%。数字为博客口径。",
      "id": "1",
      "date": "2026-11-28"
    },
    {
      "title": "xAI 三位联合创始人创办 Epochal：张国栋个人出资 1 亿美元，Time Portal 归档万亿页历史网页训练预测",
      "summary": "xAI 三创始人创办，张国栋个人出资 1 亿美元；万亿页时间沙箱，0.98 自报基准",
      "url": "https://epochal.com/blog/introducing-epochal",
      "source": "Epochal 官方 / Bloomberg / Dealroom / ZAKER / Sulat",
      "category": "funding",
      "tags": [
        "融资商业",
        "预测AI",
        "xAI",
        "历史网页归档",
        "时间泄露"
      ],
      "heat": 3,
      "detail": "11 月 24 日，三位 xAI 联合创始人张国栋、戴子航与 Manuel Kroiss 创办 Epochal AI。据 Bloomberg，张国栋个人出资 1 亿美元，未披露其他投资方。首款产品 Time Portal 是时间闸门沙箱：索引超 1 万亿个带时间戳历史网页，跨度 30 余年，快变页面到分钟级；沙箱时钟、Linux 镜像、包镜像与网络冻结到历史时点，解决模型识别自己在回放历史的时间泄露问题。公司在 347 道 Kalshi、Polymarket 题上回放，错误与现场运行相关系数 0.98；数字为自报基准，检验环境保真度而非预测准确率。",
      "id": "2",
      "date": "2026-11-28"
    },
    {
      "title": "Neuralink 获 FDA 批准启动 LINK 关键性临床试验：美国首个植入式脑机接口关键试验，面向 ALS 重度瘫痪患者",
      "summary": "LINK 获 FDA 批准关键临床试验，美国首个植入式 BCI 关键试验，面向 ALS 重度瘫痪",
      "url": "https://neuralink.com/updates/neuralink-receives-fda-approval-to-launch-link-pivotal-study/",
      "source": "Neuralink 官方 / 澎湃新闻 / Engadget / Securities.io",
      "category": "regulation",
      "tags": [
        "监管政策",
        "脑机接口",
        "FDA",
        "ALS",
        "Neuralink"
      ],
      "heat": 3,
      "detail": "Neuralink 宣布 LINK 植入式脑机接口获 FDA 批准启动关键性临床试验，是美国首个进入关键试验阶段的植入式 BCI。试验面向 ALS 重度瘫痪患者，早期参与者在 30 余人基础上推进，随访约 24 个月。关键试验是器械走向注册批准前的核心阶段，主要验证安全性与有效性；批准试验不等于设备上市，LINK 仍属研究性器械。澎湃、Engadget、Securities.io 媒体互证。BCI 运动恢复价值受关注，但周期长、样本有限，电极与脑组织兼容性、感染风险、数据安全与伦理边界，仍需长期随访验证。",
      "id": "3",
      "date": "2026-11-28"
    },
    {
      "title": "FCC 有条件批准 SpaceX Starmind 轨道数据中心星座：最多 100 万颗卫星，分阶段部署至 2040 年",
      "summary": "FCC 有条件批准 Starmind 最多 100 万颗轨道数据中心卫星，分阶段部署至 2040",
      "url": "https://eu-assets.contentstack.com/v3/assets/blt23eb5bbc4124baa6/bltf4cdf2af47159e12/6b071c5f5506bb38bca5b0ec/FCC_report_and_order_on_SpaceX_Starmind_AI_constellation_11-25-2026.pdf",
      "source": "FCC 命令 DA 26-1273 / AAS / NewsOnAir / IT之家",
      "category": "regulation",
      "tags": [
        "监管政策",
        "太空算力",
        "卫星星座",
        "FCC",
        "SpaceX"
      ],
      "heat": 3,
      "detail": "FCC 11 月 25 日发布命令（DA 26-1273），有条件批准 SpaceX Starmind AI 轨道数据中心星座，最多 100 万颗 NGSO 卫星；下行 18.8–19.3GHz、上行 28.6–29.1GHz。里程碑：2033 年 11 月前首发，2035 年 11 月前达 10 万颗，2038 年 11 月前一半，2040 年 11 月前全部署。构想是把算力搬上轨道，依托太阳能与星间光链路，但百万颗规模带来轨道拥挤、碎片风险、频段协调与地面干扰等问题，批准附带条件与分期节点，未达标可能影响后续许可。星座能否按节点兑现待披露，当前有条件批准不等于全部获准发射。",
      "id": "4",
      "date": "2026-11-28"
    },
    {
      "title": "Google Cogentic：Gemini 4 数学研究代理自主完成 6 篇预印本共 274 页，除初始提示外无人类数学家介入",
      "summary": "Gemini 4 数学代理完成 6 篇共 274 页预印本；Lean 证明未公开，非 RSA 破解",
      "url": "https://36kr.com/p/4085948825676164",
      "source": "36氪 / Traictory / Product Watch / SHAttered / Times of AI / 钛媒体",
      "category": "research_paper",
      "tags": [
        "研究论文",
        "数学Agent",
        "Gemini4",
        "整数分解",
        "形式化验证"
      ],
      "heat": 3,
      "detail": "11 月 25 日 Google 上传 6 篇共 274 页预印本，介绍基于 Gemini 4 的数学研究代理 Cogentic；除初始提示外无人类数学家介入。架构为编排器加并行 prover、对抗性 verifier 与持久台账。成果含两篇整数分解（常数约 105；确定性亚指数常数极大，目前仅具理论意义）、离散对数、近似纳什均衡 1/5、对数秩猜想与边重构等。多家分析指出：Lean 形式化证明尚未公开，分解结论不等于 RSA 被破解，常数规模与可实现性需独立数学界复核；对抗验证与持久台账提升自我纠错能力。预印本未经同行评审，证明链完整性待第三方数学家与形式化工具验证。",
      "id": "5",
      "date": "2026-11-28"
    },
    {
      "title": "沃尔沃根特工厂训练 Hexagon AEON 人形机器人：模仿学习上手，2027 年中目标真实生产",
      "summary": "首座试用机器人的沃尔沃工厂；首任务零件装夹具，2027 上半年试点、年中上岗",
      "url": "https://www.volvocars.com/en-ca/media/press-releases/B89F1B00B09B5127/",
      "source": "Volvo Cars 官方 / Hexagon Robotics / Robotics & Automation News / Infobae",
      "category": "product_release",
      "tags": [
        "产品发布",
        "人形机器人",
        "汽车制造",
        "模仿学习",
        "Hexagon"
      ],
      "heat": 2,
      "detail": "11 月 26 日，沃尔沃宣布在比利时根特工厂引入 Hexagon Robotics 的 AEON 人形机器人，在真实工业任务上训练验证，目标承担重复且工效要求高的工序。根特是第一座试用机器人的沃尔沃工厂；训练由沃尔沃团队与 Hexagon 协作完成，采用模仿学习，机器人复制工人动作掌握任务，首个任务是把零件高精度放入两个夹具，随后逐步处理多零件、厂区移动并对接自动化系统。当前训练为 2027 上半年工厂试点打基础，届时更多 AEON 运抵根特，目标 2027 年中进入真实生产。AEON 身高约 1.65 米、重约 60 公斤。当前仍处训练试点，量产节拍、故障率与经济性待实测披露。",
      "id": "6",
      "date": "2026-11-28"
    },
    {
      "title": "联想成全球首家在部分 Win11 商用电脑预装 ChatGPT 的 PC 厂商，企业每席位最高 100 美元额度",
      "summary": "部分 Win11 商用机型预装 ChatGPT；企业席位最高 100 美元额度，60 天内使用",
      "url": "https://www.ithome.com/1/033/777.htm",
      "source": "IT之家 / Windows Latest / OpenAI 帮助中心",
      "category": "product_release",
      "tags": [
        "产品发布",
        "ChatGPT",
        "PC预装",
        "联想",
        "企业软件"
      ],
      "heat": 2,
      "detail": "11 月 28 日消息，联想成为全球首家在部分 Win11 商用电脑上预装 ChatGPT 桌面应用的 PC 厂商，形态接近出厂自带软件。OpenAI 面向企业客户推出额度激励：每席位最高 100 美元，需 60 天内使用；桌面应用版本要求不低于 26.1117.31558。合作反映大模型从浏览器、移动端向 PC 出厂镜像渗透，PC 厂商借预装绑定 AI 入口，OpenAI 借硬件渠道触达用户。但预装类似可移除捆绑软件，系统负担、卸载路径与隐私数据处理方式需看后续机型清单与许可条款；首批机型、区域与额度申领规则以官方公告为准，目前中英文媒体互证，独立评测尚少。",
      "id": "7",
      "date": "2026-11-28"
    },
    {
      "title": "mdiri-ai/SoduWork 周增 5.3k 星：多 harness、多智能体自托管团队引擎，总量约 8k",
      "summary": "适配多 harness 并行，自托管多代理团队引擎，7 日 +5.3k 星，总量约 8k",
      "url": "https://upstar.dev/t/ai-agents",
      "source": "Upstar 周榜（Nov 19–25）/ GitHub",
      "category": "opensource",
      "tags": [
        "开源项目",
        "AI编程",
        "多智能体",
        "自托管",
        "GitHub趋势"
      ],
      "heat": 2,
      "detail": "周榜（11 月 19–25 日）显示，mdiri-ai/SoduWork 一周新增约 5.3k 星，累计约 8k 星，JavaScript 实现。项目定位多 harness、多智能体自托管团队引擎，可在本地或私有环境组织多个 AI 编码代理并行协作，适配不同命令行 harness 与前端，避免工作流被单一云平台锁定。走红反映代理编程从单会话工具走向可编排的多代理团队，开发者同时关注数据自持、成本可控与流程可审计。Star 增速与总量来自第三方榜单快照，维护频率、文档完整度、harness 兼容性与真实采用情况需打开仓库核实；同类项目迭代快，排名波动可能较大。",
      "id": "8",
      "date": "2026-11-28"
    },
    {
      "title": "google-research/paper-orchestra：多智能体自动论文写作框架，周增 2.3k 星、总量 6.4k",
      "summary": "编排器调度多代理完成论文初稿，Python，7 日 +2.3k 星、总量 6.4k",
      "url": "https://upstar.dev/t/ai-agents",
      "source": "Upstar 周榜（Nov 19–25）/ GitHub",
      "category": "opensource",
      "tags": [
        "开源项目",
        "多智能体",
        "科研写作",
        "Google Research",
        "GitHub趋势"
      ],
      "heat": 2,
      "detail": "google-research/paper-orchestra 进入本周 AI Agent 榜单，一周新增约 2.3k 星，累计约 6.4k 星，Python 实现。框架用编排器协调多个专职代理协作完成科研论文写作，覆盖选题、检索、论证组织、草稿撰写与修订，把单人写作流程拆成可分工的代理角色。项目来自 Google Research，吸引科研自动化关注。需谨慎看待边界：自动生成的是初稿与结构草稿，实验设计、数据可靠性、结论正确性与署名规范仍需研究者把关；引用准确性、方法复现度与评审接受度待实测。Star 数据为周榜快照，代码成熟度、许可证与使用案例以 GitHub 仓库为准。",
      "id": "9",
      "date": "2026-11-28"
    },
    {
      "title": "pierridotite/mobile-agent-testers：20 个 AI 测试器并行跑手机模拟器，周增 2.1k 星",
      "summary": "20 个测试代理并行跑 iOS/Android 模拟器，找流程、翻译、布局与无障碍缺陷",
      "url": "https://upstar.dev/t/ai-agents",
      "source": "Upstar 周榜（Nov 19–25）/ GitHub",
      "category": "opensource",
      "tags": [
        "开源项目",
        "AI测试",
        "移动应用",
        "模拟器",
        "GitHub趋势"
      ],
      "heat": 2,
      "detail": "pierridotite/mobile-agent-testers 周榜一周新增约 2.1k 星，累计约 2.1k 星，Python 实现。方案用 20 个 AI 测试代理并行跑在 GitHub 免费 runner 的 iOS 与 Android 模拟器上，由 Claude Code 代理浏览界面，主动寻找流程断点、翻译缺失、布局错乱与无障碍问题，把移动 App 手工探索性测试转成可重复的代理巡检。代理发现的缺陷需人工复核，模拟器与真机在性能、权限、机型差异上仍有差距；并发对 runner 时长与稳定性的影响需看文档与实测。Star 数为第三方周榜快照。",
      "id": "10",
      "date": "2026-11-28"
    },
    {
      "title": "grape-dev/grape：一键把任意 Git 项目转成 AI 驱动开发工作流，周增 1.2k 星",
      "summary": "AI Native DevOps，一键把 Git 项目接入代理流水线，Python，+1.2k 星",
      "url": "https://upstar.dev/t/ai-agents",
      "source": "Upstar 周榜（Nov 19–25）/ GitHub",
      "category": "opensource",
      "tags": [
        "开源项目",
        "AI Native DevOps",
        "Git",
        "代理编程",
        "GitHub趋势"
      ],
      "heat": 2,
      "detail": "grape-dev/grape 周榜一周新增约 1.2k 星，累计约 1.2k 星，Python 实现。项目定位 AI Native DevOps，宣称可一键把任意 Git 项目转成 AI 代理驱动的开发工作流：接入现有仓库后自动组织任务拆解、代码修改、测试反馈与迭代循环，存量项目不必重写即可进入代理协作。降低代理编程接入成本是主要吸引力，但周榜信号混合，部分用户反馈配置复杂度与依赖版本问题。生产落地仍需关注权限边界、代码审查门禁、测试覆盖与回滚机制，避免代理在未受控的存量仓库直接改动关键模块。Star 增速为榜单快照，成熟度以仓库 README、issue 与近期提交为准。",
      "id": "11",
      "date": "2026-11-28"
    },
    {
      "title": "LiblibAI 母公司演语科技完成近 2 亿美元 C 轮，投资方未披露",
      "summary": "AI 绘画社区 LiblibAI 母公司演语科技近 2 亿美元 C 轮，投资方未披露",
      "url": "https://www.iyiou.com/data/202611281147484",
      "source": "亿欧 / 腾讯新闻 / 科创板日报",
      "category": "funding",
      "tags": [
        "融资商业",
        "AI绘画",
        "AIGC平台",
        "星流",
        "LibTV"
      ],
      "heat": 2,
      "detail": "11 月 27 日至 28 日，中文创投媒体披露，LiblibAI 母公司演语科技完成约 2 亿美元 C 轮，本轮投资方未公开。产品线包括 LiblibAI 模型与作品社区、设计 Agent 星流、视频平台 LibTV，覆盖图像、设计与视频三类 AIGC 场景。历史融资：2025 年 10 月 B 轮红杉中国、CMC 投资，2026 年 6 月 B+ 轮引入 Granite Asia、腾讯、顺为。本轮显示图像与视频生成平台继续获资本关注，但金额、估值、资金用途与盈利情况未获官方公告确认；AIGC 社区竞争激烈，模型同质化与版权争议是长期变量。本轮为媒体披露口径，待官方通稿与审计数据佐证。",
      "id": "12",
      "date": "2026-11-28"
    },
    {
      "title": "以色列 AI 连接芯片公司 Altair Semiconductor 获 1 亿美元 A 轮，Maverick Silicon 领投",
      "summary": "AI 连接芯片公司 Altair 获 1 亿美元 A 轮，Maverick Silicon 领投",
      "url": "https://techstartups.com/2026/11/27/startup-funding-news-today-november-27-2026-altair-semiconductor-zerith-vector-singularity-more/",
      "source": "TechStartups 融资汇总",
      "category": "funding",
      "tags": [
        "融资商业",
        "AI芯片",
        "连接模组",
        "以色列",
        "Maverick Silicon"
      ],
      "heat": 2,
      "detail": "TechStartups 11 月 27 日融资汇总显示，以色列 AI 设备连接芯片公司 Altair Semiconductor 完成 1 亿美元 A 轮，Maverick Silicon 领投，Pitango 跟投。公司 2026 年 4 月脱离索尼独立，独立以来累计披露融资约 1.5 亿美元。产品面向 AI 终端与边缘设备的低功耗连接 modem，ALT1550 计划 2027 年量产，解决穿戴、边缘硬件与传感器持续联网的功耗与带宽需求。但公告以融资汇总站为主，量产时间表、客户订单、功耗指标与良率待官方材料确认；1 亿美元 A 轮在半导体早期项目中偏高，后续流片进度需跟踪。",
      "id": "13",
      "date": "2026-11-28"
    },
    {
      "title": "向量奇点科技完成数亿元 A 轮，阿里巴巴首次投资量子计算：中性原子路线，2027 上半年出原型机",
      "summary": "向量奇点数亿元 A 轮，阿里首次投量子计算；中性原子路线，2027 上半年出原型",
      "url": "https://techstartups.com/2026/11/27/startup-funding-news-today-november-27-2026-altair-semiconductor-zerith-vector-singularity-more/",
      "source": "TechStartups / 亿欧",
      "category": "funding",
      "tags": [
        "融资商业",
        "量子计算",
        "中性原子",
        "阿里巴巴",
        "QAgent"
      ],
      "heat": 2,
      "detail": "TechStartups 11 月 27 日汇总与亿欧披露，向量奇点科技（Vector Singularity）完成数亿元人民币 A 轮，是阿里巴巴首次投资量子计算公司。公司走中性原子路线，布局铷与镱两条体系，计划 2027 上半年推出原型机与 QAgent；2026 年 8 月天使轮已超 1 亿元。中性原子以光镊囚禁原子阵列，在可扩展性与相干时间上被视为候选方向，云厂商首次出手量子初创，显示对后摩尔时代路线的前瞻布局。数亿元金额与估值未细化，比特数、相干时间与纠错进展仍处早期；QAgent 形态与指标待发布。本轮为媒体口径，官方通稿与交割细节待确认。",
      "id": "14",
      "date": "2026-11-28"
    },
    {
      "title": "Nebius 收购以色列 AI 初创 Inferize，估值 1 亿–1.5 亿美元：成立仅 10 个月、团队 17 人",
      "summary": "收购以色列 Inferize，估值 1 亿–1.5 亿美元；初创仅 10 个月、17 人，条款未披露",
      "url": "https://thecryptonews.eu/nebius-nbis-inventory-company-buys-israeli-ai-startup-inferize-in-150-million-deal/",
      "source": "TheCryptoNews.eu",
      "category": "funding",
      "tags": [
        "融资商业",
        "并购",
        "GPU利用率",
        "AI基础设施",
        "以色列"
      ],
      "heat": 2,
      "detail": "11 月 27 日消息，AI 云厂商 Nebius 收购以色列初创 Inferize，估值估计 1 亿至 1.5 亿美元，双方未披露正式条款。Inferize 技术用于模型上线与推理需求剧烈波动时降低 GPU 空闲时间，帮助运营商在负载起伏下提高资源利用率；收购时公司成立约 10 个月，团队 17 人。AI 基础设施需求增长下，云厂商通过收购小团队补齐调度与利用率优化能力，早期高估值并购反映 GPU 成本压力下效率工具的稀缺性。但估值为媒体估算，技术栈、客户基础与并表安排未披露，10 个月即被收购的协同效应待观察；本轮单一来源，待 Nebius 官方公告佐证。",
      "id": "15",
      "date": "2026-11-28"
    },
    {
      "title": "Eight Capital 以 600 万欧元股份互换收购主权 AI 软件公司 Kairyx 60% 股权",
      "summary": "Eight Capital 600 万欧元换股收购主权 AI 软件 Kairyx 60%",
      "url": "https://startupwired.com/2026/11/27/eight-capital-acquires-60-stake-in-ai-startup-kairyx/",
      "source": "StartupWired",
      "category": "funding",
      "tags": [
        "融资商业",
        "主权AI",
        "并购",
        "股份互换",
        "企业软件"
      ],
      "heat": 2,
      "detail": "11 月 27 日，Eight Capital 通过股份互换收购主权 AI 软件初创 Kairyx 60% 股权，交易估值 600 万欧元；以股份作为对价而非全部现金，换股比例与股权结构未公开。Kairyx 技术允许企业在自有受控系统与基础设施内使用 AI，数据留在本地，面向隐私、安全与合规要求较高的场景；首个应用部署在 Eight Capital 自身业务中，先在真实经营环境验证价值。本轮反映企业不愿完全依赖外部公共平台，私有化与主权 AI 工具获传统集团关注；但估值规模较小，产品成熟度、客户名单与收入未披露，单一来源待公司公告佐证，列为弱线索。",
      "id": "16",
      "date": "2026-11-28"
    },
    {
      "title": "俄勒冈、弗吉尼亚两州起诉 SpaceX/Grok：未阻拦非自愿露骨图像与涉未成年人内容，Spicy 模式被指产品设计",
      "summary": "两州诉 SpaceX/Grok 未阻拦露骨图像与涉未成年内容，Spicy 模式被指产品设计",
      "url": "https://www.doj.state.or.us/media-home/news-media-releases/ag-rayfield-takes-legal-action-against-grok-for-failing-to-block-child-exploitation/",
      "source": "俄勒冈司法部 / 弗吉尼亚 AG / Reuters / AP / 中新经纬 / 澎湃",
      "category": "regulation",
      "tags": [
        "监管政策",
        "深度伪造",
        "未成年人保护",
        "消费者保护",
        "SpaceX"
      ],
      "heat": 2,
      "detail": "11 月 23 日，俄勒冈 AG Dan Rayfield 与弗吉尼亚 AG Jay Jones 分别起诉吸收 xAI 的 SpaceX，指控 Grok 未采取行业标准防护，生成非自愿亲密图像与深度伪造性内容，包括涉未成年人材料，并误导消费者，两州援引消费者保护法。诉状引用反数字仇恨中心研究：Grok 在 X 上生成发布数百万张性化图像，超 2 万张涉未成年；链条含 2025 年 8 月 Spicy 模式、2026 年 1 月允许未经同意编辑任意图像。这是首批针对 Grok 深度伪造管线的州级行动；结果与是否进入联邦监管仍待审理。",
      "id": "17",
      "date": "2026-11-28"
    },
    {
      "title": "OpenAI 研究员 83 页预印本量子化四维真空引力：因果菱形构造，黑洞熵对数修正系数 106/45 复现 Sen 2013",
      "summary": "真空引力量子化预印本：系数 106/45 复现 Sen 2013，协作耗 4 亿 token",
      "url": "http://m.toutiao.com/group/7712649610514235923/",
      "source": "新智元 / arXiv 2611.34924",
      "category": "research_paper",
      "tags": [
        "研究论文",
        "量子引力",
        "预印本",
        "AI辅助科研",
        "arXiv"
      ],
      "heat": 2,
      "detail": "11 月 26 日 arXiv 2611.34924 上线 83 页论文，唯一署名 OpenAI 推理团队物理学家 Chandrasekaran。论文对四维时空真空纯引力量子化：把时空切成因果菱形，只在光锥表面记录引力数据并量子化，再沿边界缝回时空。第一项先汇总全部路径再求解得有限闭式振幅，替代展开导致的对数发散；第二项算出黑洞熵对数修正系数 106/45，与 Sen 2013 年结果一致。致谢列 15 位讨论学者，并注明若干证明和 GPT-6 Astra 协作完成，约 4 亿 token。论文仅覆盖真空纯引力，物质与另外三力尚未纳入；署名学者只是讨论初稿，不等于背书；预印本未经同行评审。",
      "id": "18",
      "date": "2026-11-28"
    },
    {
      "title": "Google Research Fuse：多智能体社交盲区模拟评估框架，开源 21K 样本数据集，12 个 LLM 识别隐藏动机均未达人类 88%",
      "summary": "Fuse 多智能体社交盲区框架，开源 21K 样本；12 个 LLM 识别动机未达人类 88%",
      "url": "https://www.tmtpost.com/8219678.html",
      "source": "钛媒体日报",
      "category": "research_paper",
      "tags": [
        "研究论文",
        "多智能体",
        "社交推理",
        "基准数据集",
        "Google Research"
      ],
      "heat": 2,
      "detail": "Google Research 提出多智能体社交模拟框架 Fuse，开源约 2.1 万样本数据集，测试模型在社交交互中识别隐藏动机的能力。研究让 12 个 LLM 在设定情境中多轮互动：人类首条消息识别率 88%，模型首条未超 81%，多轮后无一达到 88%，显示当前模型社交意图推理存在明显盲区。框架把单轮问答扩展到多轮模拟，贴近真实沟通中线索分散、语气隐晦的特点。局限包括双智能体设定、英语与美国文化语境，跨语言、跨文化与多人复杂场景适用性待验证；结果为单一中文媒体转述，实验细节与基准构成以论文原文为准。",
      "id": "19",
      "date": "2026-11-28"
    },
    {
      "title": "DeepMind：智能体已调度部分算力运行下一代 Gemini 实验；训练不奖励思维链以保留可审查意图",
      "summary": "智能体调度部分算力运行下一代 Gemini 实验；训练不奖励思维链，递归自我改进仍很远",
      "url": "http://news.qq.com/rain/a/20261126A06QSL00",
      "source": "腾讯新闻 / AI Weekly / AIsa Studio / Dataist / The Decoder",
      "category": "research_paper",
      "tags": [
        "研究论文",
        "DeepMind",
        "代理研发",
        "思维链",
        "组织变革"
      ],
      "heat": 2,
      "detail": "11 月 26 日，DeepMind 研究副总裁、Gemini 负责人 Koray Kavukcuoglu 在播客披露，智能体如今可调度部分算力预算，自行运行下一代 Gemini 的部分实验。组织上不再为专项分别组队，而用通用算法同时推进科研与产品；每代 Gemini 按需求单独打造，多支团队并行研发后续版本。安全设计上，训练刻意不奖励内部思维链：奖励内部推理会让模型为优化信号修饰思路；不奖励则意图在执行前保持自然语言，便于人工审查。他同时划界：模型能视觉准确呈现流体与碰撞，不等于理解底层物理；距完全递归自我改进仍很远，代理掌控的算力份额未量化。",
      "id": "20",
      "date": "2026-11-28"
    },
    {
      "title": "Anthropic 上市首周反弹 10.98% 收 91.88 美元收复 83 美元发行价，周累涨 3.34%；12 月 15 日另有 3.03 亿股解禁",
      "summary": "ANT 收 91.88 美元涨 10.98% 收复发行价；12-15 另有 3.03 亿股解禁",
      "url": "https://m.weibo.cn/detail/5370115966108321",
      "source": "财联社 / 微博",
      "category": "community_hot",
      "tags": [
        "社区热点",
        "Anthropic",
        "股价",
        "IPO解禁",
        "Claude"
      ],
      "heat": 2,
      "detail": "11 月 27 日收盘，Anthropic（ANT）报 91.88 美元，涨 10.98%，收复 83 美元发行价；本周累涨 3.34%。此前股价曾在上市后抛售中跌破发行价，本轮反弹伴随市场对 Claude Code 商业化的关注，年化营收折算口径约 810 亿美元；公司同时被提及 2045 年前承诺累计支出近 9010 亿美元。需注意 12 月 15 日另有 3.03 亿股解禁，流通盘变化可能带来新抛压；营收折算为媒体口径，季度现金流、利润与估值倍数待公开财报验证。本轮为前期 IPO 与抛售报道的反弹跟进，不重复收录发行基础信息；股价受情绪与消息驱动波动大，不构成投资建议。",
      "id": "21",
      "date": "2026-11-28"
    },
    {
      "title": "本周 GitHub AI Agent 榜：515 个仓库共增 12.83 万星，环比少约 10%；编码代理与移动测试项目居前",
      "summary": "GitHub Agent 榜 515 仓增 12.83 万星，环比少 10%；编码代理与测试项目居前",
      "url": "https://upstar.dev/t/ai-agents",
      "source": "Upstar 周榜（Nov 19–25）",
      "category": "community_hot",
      "tags": [
        "社区热点",
        "GitHub趋势",
        "AI Agent",
        "星标增速",
        "周榜"
      ],
      "heat": 2,
      "detail": "Upstar 本周 AI Agent 榜单（11 月 19–25 日更新）汇总 515 个仓库，一周共新增约 12.83 万星，环比减少约 10%，赛道热度仍在但扩张边际放缓。增速前列包括移动并行测试器 mobile-agent-testers、多 harness 自托管引擎 SoduWork、论文写作框架 paper-orchestra、DevOps 工具 grape-dev/grape；选题集中在多代理编排、自托管、代码与测试自动化。周榜反映社区注意力分布，Star 数受刷榜、发布节奏与社交传播影响，不等于生产采用率；环比口径来自第三方统计，维护质量与落地案例需逐仓核实。",
      "id": "22",
      "date": "2026-11-28"
    }
  ]
};
