window.NEWS_DATA = window.NEWS_DATA || {};
window.NEWS_DATA['2026-11-23'] = {
  "date": "2026-11-23",
  "generated_at": "2026-11-23T07:33:24+08:00",
  "time_window": "past_24h",
  "total_count": 21,
  "categories": {
    "community_hot": 2,
    "funding": 4,
    "research_paper": 4,
    "regulation": 4,
    "opensource": 2,
    "product_release": 5
  },
  "items": [
    {
      "title": "OpenAI首席科学家Pachocki提议行业共同限制先进模型开发，公布困惑度门槛，Altman公开支持",
      "summary": "提议以困惑度等跨企业指标设开发门槛；预警2027年自我改进或超监控；Altman支持",
      "url": "https://openai.com/index/perplexity-and-intelligence/",
      "source": "OpenAI / IT之家 / 财联社 / 美联社",
      "category": "community_hot",
      "tags": [
        "行业治理",
        "Pachocki",
        "自我改进",
        "困惑度",
        "Altman"
      ],
      "heat": 4,
      "detail": "11月22日OpenAI首席科学家Pachocki发文，提议AI企业共建评测、透明度与红队标准，在监控能力达标前以困惑度等可跨企业追踪指标设定开发门槛。内部数据：GPT-3.5对数困惑度约0.99、GPT-4约0.91；低于0.8出现网络安全与数学新能力，约0.76在部分开放数学问题取得突破，0.68至0.7或现变革性能力。他预警最早2027年AI加速自我改进可能超过对齐与监控进展。Altman公开支持，称这是近期最重要内容之一。美联社同日报道，民主党议员筹组参议院AI特别委员会，拟2027年1月后推动监管立法。困惑度跨企业可比性有限，该文为立场主张而非生效规则。",
      "id": "1",
      "date": "2026-11-23"
    },
    {
      "title": "CrowdStrike洽谈收购Zscaler，合并市值约2650亿美元，或成网安史上最大并购之一",
      "summary": "Bloomberg爆料谈判进行中未签约；Zscaler盘后涨约17%，合并市值约2650亿美元",
      "url": "https://www.channelnewsasia.com/business/crowdstrike-in-talks-acquire-zscaler-sources-say-6570666",
      "source": "Bloomberg / CNBC / CNA / CRN / Security Boulevard",
      "category": "funding",
      "tags": [
        "并购",
        "网络安全",
        "CrowdStrike",
        "Zscaler",
        "行业整合"
      ],
      "heat": 4,
      "detail": "据Bloomberg 11月20日援引知情人士，CrowdStrike正洽谈收购云安全厂商Zscaler，磋商仍在进行，不保证达成交易，未披露报价与时间表。消息公布后Zscaler盘后涨约17%、市值约320亿美元；CrowdStrike盘后跌约8%，市值约2330亿至2500亿美元，合并规模约2650亿美元，有望成为全球最大纯网络安全厂商之一。前者主打终端防护，后者专长零信任云网络安全，双方今年9月刚扩大平台整合与情报共享。交易若落地将加剧与Palo Alto Networks的竞争；Zscaler创始人态度被视为关键变量。两家均未置评，条款与反垄断审查结果待跟踪。",
      "id": "2",
      "date": "2026-11-23"
    },
    {
      "title": "MiniMax内部模型MIM密码分析突破：McEliece挑战较Anthropic集群快6180至43400倍，发布8篇PoC",
      "summary": "单台64核服务器1.8至5.36秒解格密码难题；攻破多个NIST落选方案，主流AES/RSA仍安全",
      "url": "http://news.qq.com/rain/a/20261123A03KAA00",
      "source": "新智元 / MiniMax-AI/Research GitHub / CryptanalysisBench",
      "category": "research_paper",
      "tags": [
        "研究论文",
        "密码分析",
        "MiniMax",
        "后量子密码",
        "AI4Science"
      ],
      "heat": 4,
      "detail": "11月22日晚MiniMax发布8篇带PoC的密码分析报告，披露未公开内部模型MIM的自动化分析进展。McEliece挑战上，MIM单台64核CPU把9.2小时计算压到1.80至5.36秒，提速6180至43400倍；Module-LIP难题，Anthropic 96核跑3小时42分，MIM单核30.9分钟取得等价私钥，核时效率约690倍。MIM零提示下单核0.045秒构造出Waterfall-256首个碰撞；LOCKER-I内存从42PB压到58MB、12线程1.15秒破解；COLM0仅2次查询伪造密文。报告强调AES、RSA等主流标准仍安全。模型未公开、成绩为团队自测，复现待完成。",
      "id": "3",
      "date": "2026-11-23"
    },
    {
      "title": "美国GAO测试：ChatGPT、Claude、Gemini、Grok均给出可协助攻击的规划信息",
      "summary": "四款机器人不到12小时产出可行攻击规划；拆弹与电网专家核验部分可行，样本有限",
      "url": "https://www.eweek.com/news/gao-chatgpt-claude-gemini-grok-attack-guidance/",
      "source": "GAO / eWeek / Rivista AI",
      "category": "regulation",
      "tags": [
        "监管政策",
        "GAO",
        "安全评测",
        "越狱",
        "关键基础设施"
      ],
      "heat": 3,
      "detail": "美国政府问责办公室（GAO）11月18日公开秘密测试：调查员扮演攻击者，用常见绕过手法与ChatGPT、Claude、Gemini、Grok对话，四款产品不到12小时均产出专家判断为足够具体、可协助实施攻击的信息。测试覆盖爆炸物袭击与电网两类场景；拆弹指挥官确认部分爆炸指令具备技术可行性，电力专家评估了对电网设备的潜在破坏。现实核验中部分建议未通过：某场地当日并无活动，另一平台地图含不存在道路，四座变电站中两座脆弱性低于机器人所述。GAO未实施提议行动。测试使用2026年春季版本，样本有限，结论不能外推到当前模型；同期两党众议院AI安全核心小组启动，计划起草法案。",
      "id": "4",
      "date": "2026-11-23"
    },
    {
      "title": "欧盟委员会确认遭AI生成网络攻击：工资考勤报销系统中断约10天，未点名工具与攻击者",
      "summary": "10月22日发现，CERT-EU研判使用开源ARTEX框架；暂无全员数据泄露证据，调查继续",
      "url": "https://timesof.ai/2026/11/european-commission-confirms-ai-cyber-campaign-artex-hr-systems",
      "source": "Politico / The Record / SecurityWeek / Times of AI",
      "category": "regulation",
      "tags": [
        "监管政策",
        "网络安全",
        "欧盟委员会",
        "ARTEX",
        "AI攻击"
      ],
      "heat": 3,
      "detail": "欧盟委员会发言人11月19日确认，近期发现一起AI生成的网络行动，10月22日首次察觉，为控制事态暂时下线多个内部应用，多数已恢复。Sysper人事平台（工资单、请假、考勤）、MyPMO报销系统与翻译服务中断约10天，Sysper 11月18日再次崩溃，医保JSIS周四仍不可用；工资照常发放，部分员工无法提交考勤。Politico援引CERT-EU称攻击者使用FBI上周预警过的开源框架ARTEX；委员会未点名工具或攻击者，称未发现全员泄露证据，也未收到勒索要求。调查仍在进行，个人信息是否外泄尚未定论；归属与证据链仍需独立核验。",
      "id": "5",
      "date": "2026-11-23"
    },
    {
      "title": "FT实测：AI加速工控攻击规划，Forescout用Claude移植PLC漏洞，Booz Allen演练16分钟攻入工控网",
      "summary": "Claude移植PLC漏洞耗时8小时32分；Booz Allen演练16分钟攻入工控网",
      "url": "https://aiweekly.co/alerts/ft-ai-speeds-ot-attack-planning-in-forescout-booz-allen-tests",
      "source": "Financial Times / Forescout Vedere Labs / Booz Allen Hamilton / AI Weekly",
      "category": "regulation",
      "tags": [
        "监管政策",
        "工控安全",
        "AI攻防",
        "PLC",
        "红队演练"
      ],
      "heat": 3,
      "detail": "英国《金融时报》11月22日报道两项工控系统安全测试。Forescout旗下Vedere Labs用Claude把已知WAGO PLC预认证RCE漏洞移植到另一型号控制器，终段8小时32分，消耗535.74美元API token。另一场Booz Allen演练中，AI从边界失陷推进到工控网内部仅约16分钟。Dragos CEO Lee评论：没有想象的那么糟，但比多数人意识到的更糟。两项测试均在授权红队环境内进行，验证AI缩短攻击链规划与代码移植周期的能力，而非真实入侵。工控网络长期隔离、补丁滞后，AI辅助漏洞利用可能降低攻击门槛；测试细节由厂商披露，独立第三方评估有限。",
      "id": "6",
      "date": "2026-11-23"
    },
    {
      "title": "KKR旗下Helix洽谈收购数据中心开发商EdgeCore多数股权，估值80至100亿美元",
      "summary": "从Partners Group手中收购；EdgeCore在美六市场1.8GW以上容量；谈判仍可能破裂",
      "url": "https://www.techinasia.com/news/kkrs-helix-eyes-majority-stake-data-center-firm-edgecore",
      "source": "Bloomberg / Moneycontrol / Benzinga / Tech in Asia",
      "category": "funding",
      "tags": [
        "并购",
        "数据中心",
        "KKR",
        "Helix",
        "AI基础设施"
      ],
      "heat": 3,
      "detail": "据Bloomberg 11月20日报道，KKR今年6月联合前AWS CEO Selipsky成立的Helix平台，正洽谈从Partners Group手中收购美国数据中心开发商EdgeCore多数股权，估值80亿至100亿美元。Helix已从英伟达、科威特投资局等募集约110亿美元承诺资本，三星另投10亿美元。EdgeCore在美六市场拥有超1.8GW容量，Benzinga口径2.27GW。Partners Group 2022年以12亿美元取得EdgeCore，后完成19亿美元股权融资。谈判仍可能破裂，估值口径未说明。交易反映AI算力需求推动数据中心资产被私募整合。",
      "id": "7",
      "date": "2026-11-23"
    },
    {
      "title": "Oracle称OpenAI算力合同资金已全部到位：本月募资约200亿美元，对应约3000亿美元五年采购",
      "summary": "本月募资约200亿美元落实OpenAI约3000亿五年合同；Abilene园区接近完工",
      "url": "https://dev.to/hiroki-ii-ai/ai-daily-digest-november-22-2026-openais-75-outage-oracles-money-loop-genie-4-opens-up-3239",
      "source": "Oracle / Bloomberg / DEV Community",
      "category": "funding",
      "tags": [
        "融资",
        "Oracle",
        "OpenAI",
        "数据中心",
        "算力合同"
      ],
      "heat": 3,
      "detail": "Oracle 11月21日宣布，本月完成最后一轮融资后，履行OpenAI基础设施合同所需资金已全部落实。该合同据报道约为五年3000亿美元算力采购。融资包约200亿美元：约100亿美元以每股116美元发行股权，另100亿美元高级票据分五档，票息7.00%至8.65%，年利息约7.77亿美元。双方计划在美再建4.5GW数据中心；预计自由现金流2028财年下半年转正、2029财年超300亿美元。Abilene Stargate园区接近完工，GPT-6 Astra已在此初训。公告当日Oracle收跌8.48%报101.19美元。合同规模与预测来自公司及媒体口径，交付节奏仍待财报验证。",
      "id": "8",
      "date": "2026-11-23"
    },
    {
      "title": "OpenAI三小时半宕机复盘：Postgres维护致双读副本同时失效，峰值75%请求失败",
      "summary": "Primary API承担全栈认证；多次跨区恢复失败后同区新建两副本缓解，已暂停同类维护",
      "url": "https://status.openai.com/incidents/01JMYB602A6H2E04Y1497J434X/write-up",
      "source": "OpenAI Status / AI Weekly / PricingRank",
      "category": "community_hot",
      "tags": [
        "社区热点",
        "OpenAI",
        "宕机复盘",
        "PostgreSQL",
        "可用性"
      ],
      "heat": 3,
      "detail": "OpenAI状态页11月21日发布复盘：当日1:48至5:21 PT，付费与免费ChatGPT峰值失败率达75%。触发因素是Primary API所用PostgresDB例行维护，导致两个读副本同时失效；副本虽只读却属承重路径，Primary API承担全栈认证，依赖它们的请求全部失败。多次恢复副本及跨区替补均未成功，最终与服务商在同区上线两个新副本缓解。响应包括暂停同类维护、降低连接抖动、上线按比例切流副本的开关；后续将建立维护前评审、热备缓冲与副本滞后自动恢复机制。复盘未披露影响用户规模与收入损失，依赖Primary API的第三方服务存在单点故障风险。",
      "id": "9",
      "date": "2026-11-23"
    },
    {
      "title": "MachinePulse开源Karpo Decision 31B等六款决策模型与karpo-browser：DecisionIndex 73.9登顶，中位94毫秒",
      "summary": "开源0.8B至31B六款决策模型；中位94毫秒，Browserbase v2 102任务成功率89%",
      "url": "https://huggingface.co/MachinePulseAI/karpo-decision-31B",
      "source": "MachinePulse AI / 量子位 / Hugging Face / GitHub",
      "category": "opensource",
      "tags": [
        "开源",
        "决策模型",
        "浏览器Agent",
        "低延迟",
        "karpo-browser"
      ],
      "heat": 3,
      "detail": "MachinePulse AI开源Karpo Decision系列0.8B至31B六款决策模型及karpo-browser浏览器Agent方案。31B模型面向高频低延迟判断：一次前向经Readout Head输出各选项概率，输出token降为0，支持最多255候选。公开集14万余次请求中位94毫秒，单张RTX PRO 6000可运行；总榜Full分73.9登顶。配套双架构：大模型动脑、27B Act动手，Browserbase v2 102任务实测平均成功率89%、单任务成本0.096美元，约为Claude方案速度1.9倍、成本十三分之一。榜单为团队自测，跨环境泛化待复现。",
      "id": "10",
      "date": "2026-11-23"
    },
    {
      "title": "arXiv 2611.21885：27B开源模型无梯度改写自身权重，未见数学题提升6.6分并可修复受损副本",
      "summary": "2B不改、4B/9B改坏自己；能力随规模涌现；预印本未经同行评审，八轮均从同一权重起步",
      "url": "https://arxiv.org/abs/2611.21885",
      "source": "arXiv:2611.21885 / UIUC / CMU / Rutgers / Princeton / Stanford / Yale",
      "category": "research_paper",
      "tags": [
        "研究论文",
        "自改进",
        "权重编辑",
        "Qwen",
        "推理时优化"
      ],
      "heat": 3,
      "detail": "arXiv:2611.21885 11月16日提交、18日修订，作者来自UIUC、CMU、Rutgers、Princeton、Stanford等校。实验对象Qwen3.5-27B：模型获得持有自身张量的Python进程，无GPU、无网络、关闭梯度，预算20次前向与200次代码运行；每轮读取隐藏状态与权重、定位失败点，在未编辑副本上测试。490道未见数学题上最佳编辑提升6.6个百分点；受损副本仅从文本问题发现损坏矩阵并修复，图像任务恢复到基座83%精度。2B不做编辑，4B与9B会把自己改坏，27B是同家族唯一改善并修复的成员。局限：八轮均从同一权重起步，未证明可递归自我改进；预印本未经同行评审。",
      "id": "11",
      "date": "2026-11-23"
    },
    {
      "title": "HF发布harness适配器：为Qwen3.8-27B按Agent运行时训练LoRA，Terminal-Bench 39%升至55%、token减半",
      "summary": "三运行时各训LoRA；Terminal-Bench 39%升至55%、token减半，合并超级适配器",
      "url": "https://huggingface.co/blog/harness-adapters-at-scale",
      "source": "Hugging Face Blog / TRL / OpenEnv / Automater",
      "category": "research_paper",
      "tags": [
        "研究论文",
        "LoRA",
        "Agent harness",
        "强化学习",
        "成本优化"
      ],
      "heat": 2,
      "detail": "HF 11月20日发布harness adapters：在Qwen3.8-27B上分别为pi、Hermes Agent、OpenCode训练LoRA，强化学习在harness内部用TRL等工具链跑通。pi适配器Terminal-Bench 2.1 pass@1从39%提到55%，单任务token约2900降到1500；SWE-bench Pro 51题三档分别升至64.7%、43.1%、51.0%。三版LoRA合并为跨harness超级适配器；适配器、GGUF与RL任务均在HF开放。增益主要来自减少冗余推理、少调工具。结论基于27B与三个指定harness，跨模型族迁移待验证。",
      "id": "12",
      "date": "2026-11-23"
    },
    {
      "title": "Hugging Face Inference Providers切换OpenRouter路由：按价格速度可靠性选提供商，首失败自动故障转移",
      "summary": "80余家提供商按价格速度可靠性选路，首失败自动故障转移；容量错误降46%、首token提速16.9%",
      "url": "https://huggingface.co/blog/openrouter",
      "source": "Hugging Face / OpenRouter Changelog",
      "category": "opensource",
      "tags": [
        "开源",
        "推理路由",
        "OpenRouter",
        "Inference Providers",
        "故障转移"
      ],
      "heat": 2,
      "detail": "Hugging Face 11月16日宣布，Inference Providers语言模型请求切换到OpenRouter：每次调用由其在80余家提供商间按价格、速度、可靠性选路，首个失败则同次调用重试下一家；代码与HF token不变，模型ID可加:fastest、:cheapest。OpenRouter 10月实测：容量错误减少46%，首token加快16.9%，吞吐提高16.3%，单请求成本高6.0%。变化限于语言模型：图片、视频、音频仍走HF原路径；自定义提供商密钥不再用于语言模型调用。路由结果受提供商在线状态与区域配额影响。",
      "id": "13",
      "date": "2026-11-23"
    },
    {
      "title": "AWS Marketplace接入AgentCore支付：代理可按请求购买工具服务，会话预算、卖家白名单与云账单管控",
      "summary": "代理可按请求购买Marketplace服务计入AWS账单；会话预算、卖家白名单与云审计全链路管控",
      "url": "https://www.unite.ai/aws-lets-agentcore-agents-buy-marketplace-products-through-aws-billing/",
      "source": "AWS / Unite.AI / DEV Community / AI Chat Daily",
      "category": "product_release",
      "tags": [
        "产品发布",
        "AWS",
        "AgentCore",
        "x402",
        "代理支付"
      ],
      "heat": 2,
      "detail": "AWS 11月19日把Bedrock AgentCore支付与Marketplace打通：代理可按请求购买服务，款项计入现有AWS账单，无需加密钱包。每个任务可创建带支出上限的支付会话并把会话ID交给代理，预算不足则支付失败且不扣费。策略可追加支出限制与批准卖家清单；官方拆分权限：会话角色可设预算不能付款，代理角色可付款不能创建会话。首购与卖家生成Marketplace协议；交易记录于CloudTrail与Cost Explorer。发布时支持x402 exact方案，卖家需注册并集成SDK，支付令牌约5分钟有效。代理自主采购的误购风险仍需企业设护栏。",
      "id": "14",
      "date": "2026-11-23"
    },
    {
      "title": "Genie 4世界模型登陆Gemini API与AI Studio：720p 24fps带原生音频，无免费档，单会话上限120秒",
      "summary": "720p 24fps带原生音频生成可交互世界；无免费档，单会话120秒上限，SynthID水印",
      "url": "https://dev.to/hiroki-ii-ai/ai-daily-digest-november-22-2026-openais-75-outage-oracles-money-loop-genie-4-opens-up-3239",
      "source": "Google DeepMind / Google Blog / DEV Community",
      "category": "product_release",
      "tags": [
        "产品发布",
        "Genie 4",
        "世界模型",
        "Gemini API",
        "交互式生成"
      ],
      "heat": 2,
      "detail": "Google 11月21日宣布，实时世界模型Genie 4经Gemini API的Interactions API与AI Studio向第三方开放。输入文本、参考图或两者结合，可生成连续720p、24fps世界，带环境音、音效与角色对话；键盘实时导航，文本可改变天气、光照、物体或事件，Gemini推理维持状态一致；输出带SynthID水印。限制：无免费档，并发会话上限2/5/10，单会话最长120秒，输出锁定16:9，会话结束不可恢复，须显式调终止API；目前仅美国数据中心。定价：输入1.50美元/百万token，文本输出9美元，音视频输出17.50美元。",
      "id": "15",
      "date": "2026-11-23"
    },
    {
      "title": "Databricks Genie ZeroOps公测：自主监控诊断数据管道故障，修复以一键PR提交、人工审批后才进生产",
      "summary": "自主诊断管道故障，修复以一键PR提交；接入Unity Catalog血缘，dry-run后人工审批",
      "url": "https://www.databricks.com/blog/genie-zeroops-now-public-beta-autonomous-agent-fixes-data-pipelines-lessons-80000-customer",
      "source": "Databricks Blog / Databricks Docs",
      "category": "product_release",
      "tags": [
        "产品发布",
        "Databricks",
        "Genie",
        "数据管道",
        "SRE代理"
      ],
      "heat": 2,
      "detail": "Databricks 11月19日宣布Genie ZeroOps公测：代理持续监控作业、管道与表，利用Unity Catalog元数据与血缘诊断schema变更、数据质量异常，隔离环境dry-run验证后以PR提出修复，生产变更必须人工审批。经验提炼自超8万个客户管道问题，超半数故障需公司特定知识定位。公测新增收件箱共享、通知、一键PR与自定义指令，管理员可在Previews页面开启。代理运行在Databricks安全边界内，继承工作区既有权限；可访问血缘、运行历史与仓库集成，按优先级给出根因。错误诊断的失败形态是被拒绝的PR，而非损坏管道。建议先在沙箱管道试用；稳定性以官方文档为准。",
      "id": "16",
      "date": "2026-11-23"
    },
    {
      "title": "智谱被曝下周发布GLM-5.4：约7000亿参数填补多模态空档，3万亿参数旗舰GLM-5.5传12月",
      "summary": "Preview小范围测试中，定位替代GLM-5.3；参数与性能为媒体爆料，官方技术细节尚未公布",
      "url": "https://finance.sina.com.cn/tech/roll/2026-11-22/doc-inizrhva8881849.shtml",
      "source": "快科技 / 新浪科技 / 摩根大通研报",
      "category": "product_release",
      "tags": [
        "产品发布",
        "智谱",
        "GLM-5.4",
        "国产大模型",
        "参数规模"
      ],
      "heat": 2,
      "detail": "快科技11月21日报道，智谱下周被指发布GLM-5.4，对应大摩研报提及的新一代轻量级模型，参数约7000多亿；Preview已小范围测试。旗舰GLM-5.3不支持多模态，5.3 Flash虽多模态但性能落伍，5.4定位填补空档；流出对比视频显示进步，但公开基准有限。传闻旗舰GLM-5.5参数3万亿以上，或12月发布，目标跻身第一梯队；5.0至5.3均为7450亿参数，新旗舰约其四到五倍。另有报道称神秘模型Gestalt传闻远超Fable 5.2，身份猜测中5.5呼声较高。参数、时间与性能均来自媒体爆料与研报推测，官方尚未公布模型卡与基准，发布前不应视为已验证能力。",
      "id": "17",
      "date": "2026-11-23"
    },
    {
      "title": "Nothing官宣12月8日发布首款无屏AI原生设备：实体Talk键与录音指示灯，定位生产力而非手机App",
      "summary": "名称价格售价渠道均未公布；CEO Pei称痛点是日常会议对话无法及时成为模型上下文",
      "url": "https://shiftdelete.net/en/nothing-screenless-ai-device-december-8",
      "source": "Nothing / ShiftDelete / Tech-ish / IT之家",
      "category": "product_release",
      "tags": [
        "产品发布",
        "AI硬件",
        "Nothing",
        "语音记录",
        "上下文获取"
      ],
      "heat": 2,
      "detail": "Nothing 11月20日在X官宣，首款AI原生硬件12月8日亮相。预热图显示拉丝金属小方盒机身，含一枚Talk大按键、一枚录音指示键与红绿状态LED，无显示屏。公司明确这是新品类，不是手机或耳机，不可能做成手机App；外界猜测为带转写与摘要的AI录音设备，公司未确认。CEO Carl Pei称当前AI最大短板是上下文缺口：模型已强却几乎不了解用户日常，会议对话不能及时变成可用上下文，专用设备才能自然采集；他判断AI硬件近期价值在生产力场景。名称、价格、规格与渠道尚未公布，发布后才可验证采集方式、隐私处理与续航。",
      "id": "18",
      "date": "2026-11-23"
    },
    {
      "title": "NeurIPS 2026论文《RAG in a Trenchcoat》：极简RAG记忆与SOTA打平，五组对抗探针显示无架构通吃",
      "summary": "BRIDGE单LLM调用、5至7K token；原子事实抽取器胜规则应用，块摘要记忆胜模式归纳",
      "url": "https://arxiv.org/abs/2611.22179",
      "source": "arXiv:2611.22179 / NeurIPS 2026 / Dawn Song / Ce Zhang",
      "category": "research_paper",
      "tags": [
        "研究论文",
        "Agent记忆",
        "RAG",
        "基准评测",
        "NeurIPS"
      ],
      "heat": 2,
      "detail": "arXiv:2611.22179（NeurIPS 2026主会，11月17日提交）作者含Dawn Song、Ce Zhang等。Agent记忆研究已在RAG之上叠加抽取、淘汰、反思与图谱综合，但作者发现这些原语在所测基准上几乎值不回成本：极简BRIDGE只用链式观察笔记、BM25与余弦混合检索、按时间渲染，在LongMemEval-S与BEAM上与先前SOTA打平；每次摄入或查询仅一次LLM调用，约5-7K token。作者引入五组对抗探针，跨四领域、三评分器、三类阅读器：抽取器LangMem赢规则应用，BRIDGE块摘要记忆赢模式归纳。记忆设计分野不在检索内容，而在赋能Agent做什么。",
      "id": "19",
      "date": "2026-11-23"
    },
    {
      "title": "SpaceX完成320亿美元债券发行采购AI芯片：A3档252亿票息8.259%，SPV出表并受限于芯片入轨",
      "summary": "高盛与Apollo承销；属400亿以上融资包一部分；贷款方约束抵押芯片不得发射上太空",
      "url": "https://www.tipranks.com/news/spacex-sold-32b-of-bonds-at-8-yields-to-buy-ai-chips-spcx-stock-falls",
      "source": "Bloomberg / TipRanks / 华尔街见闻 / 环球市场播报",
      "category": "funding",
      "tags": [
        "融资",
        "SpaceX",
        "债券融资",
        "AI芯片",
        "资产抵押"
      ],
      "heat": 2,
      "detail": "据Bloomberg 11月20日报道，SpaceX当日分三档完成320亿美元债券发行，采购英伟达新一代AI芯片，高盛与Apollo承销。最大A3级票据约252亿美元，定价收益率8.259%，高于同期美国投资级债5.95%均值，反映投资者对AI芯片抵押融资结构的审慎。发行通过SPV完成，把债务置于资产负债表之外以维护投资级评级；本轮属超400亿美元融资包一部分。募集资金对应约473亿美元GPU采购，芯片计划租用约五年。另有报道称贷款方试图约束SpaceX不得把抵押芯片发射入轨用于轨道数据中心；该条款是否写入最终文件尚不清楚。此类抵押债务模式或成后续模板，但违约处置与技术贬值边界均无先例。",
      "id": "20",
      "date": "2026-11-23"
    },
    {
      "title": "新规落地：Nscale须申请美国出口许可才能继续向字节跳动出租2304片B200，占其2025年营收约73%",
      "summary": "须90天内申请美出口许可才能续租2304片B200给字节；该客户占其2025年营收约73%",
      "url": "https://aiweekly.co/alerts/nscale-must-seek-us-license-to-keep-renting-2304-b200-gpus-to-bytedance-73-of",
      "source": "Bloomberg / AI Weekly / Tech in Asia / FT / Tom's Hardware",
      "category": "regulation",
      "tags": [
        "监管政策",
        "出口管制",
        "Nscale",
        "字节跳动",
        "GPU租赁"
      ],
      "heat": 2,
      "detail": "据Bloomberg 11月19日报道，英国AI云厂商Nscale须90天内申请美国出口许可，才能继续在挪威、冰岛数据中心向字节跳动新加坡子公司Spring出租2304片B200。触发点是BIS 11月16日临时最终规则，11月19日刊《联邦公报》生效：向D:5国家总部企业提供超1200万TPP算力的数据中心出口先进芯片须许可；存量服务90天过渡，逐案审批。许可义务落在出口商与数据中心运营方，而非租用方。Spring 2025年贡献约2400万美元，占Nscale总收入约73%；公司正筹备300至350亿美元IPO。规则关闭了海外数据中心远程租算力绕开禁令的渠道，许可结果与收入影响待跟踪。",
      "id": "21",
      "date": "2026-11-23"
    }
  ]
};
