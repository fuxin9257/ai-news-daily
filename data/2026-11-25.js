window.NEWS_DATA = window.NEWS_DATA || {};
window.NEWS_DATA['2026-11-25'] = {
  "date": "2026-11-25",
  "generated_at": "2026-11-25T07:23:51+08:00",
  "time_window": "past_24h",
  "total_count": 22,
  "categories": {
    "community_hot": 3,
    "research_paper": 5,
    "product_release": 4,
    "regulation": 3,
    "opensource": 3,
    "funding": 4
  },
  "items": [
    {
      "title": "黄仁勋复职英伟达CEO：董事会全票通过，单日暴涨31.5%、市值增约9520亿美元创纪录",
      "summary": "11月23日复职，费半涨14%，独立调查继续，12月3日出席参议院听证",
      "url": "https://finance.sina.com.cn/jjxw/2026-11-24/doc-inizutpn7879110.shtml",
      "source": "新浪财经 / Nasdaq / 中国日报 / 东方财富研报",
      "category": "community_hot",
      "tags": [
        "社区热点",
        "英伟达",
        "黄仁勋",
        "CEO复职",
        "算力产业链"
      ],
      "heat": 4,
      "detail": "当地时间11月23日英伟达声明，董事会一致投票恢复黄仁勋总裁、CEO及董事职务，临时CEO克雷斯重回CFO。公告称听取美国政府高层意见后确信复职不构成国家安全风险，司法部长确认无违法证据。23日英伟达收涨31.48%报165.05美元，创2003年5月以来最大单日涨幅，市值单日增约9520亿美元刷新全球纪录；费半涨14%，美光涨19%、英特尔涨超16%、台积电涨14%。独立董事委员会调查仍将持续，公司新设国家安全与出口管制委员会并遴选独立首席合规官，黄仁勋12月3日须出席参议院听证。24日英伟达回吐5.86%，政治与治理风险仍受关注。",
      "id": "1",
      "date": "2026-11-25"
    },
    {
      "title": "Anthropic发布Claude撰写的VP≠VNP证明：70页论文配324文件Lean形式化，尚无人类数学家核验",
      "summary": "代数版P≠NP，OpenAI五小时后发rival稿；Lean只验步骤，不证命题匹配原猜想",
      "url": "https://aiweekly.co/alerts/anthropic-publishes-claude-authored-vp-vnp-proof-unverified",
      "source": "Anthropic GitHub / AI Weekly / Traictory / Data Studios / 36氪",
      "category": "research_paper",
      "tags": [
        "研究论文",
        "AI数学",
        "形式化验证",
        "Lean",
        "VP≠VNP"
      ],
      "heat": 4,
      "detail": "11月23日Anthropic公开数学仓库上线vp-vnp目录：70页论文《VP ≠ VNP over every field》，署名仅为内部模型Claude，配套324个Lean 4文件、约7.3万行代码。结果称任意域上VP严格包含于VNP，对积和式等给出超多项式下界；Lean内核与第二内核nanoda均通过自动检查，但README明确无人类数学家核验，机器也无法证明形式化命题完全对应Valiant 1979年原猜想。约五小时后OpenAI上传30页 rival 稿，内部记录显示其模型11月6日已得结果。该结果是代数复杂度命题，不解决布尔P vs NP；论文未经同行评审。",
      "id": "2",
      "date": "2026-11-25"
    },
    {
      "title": "OpenAI预印本：GPT-6.2靠推理与通用编程工具设计蛋白，322个微型结合蛋白中35个显示结合",
      "summary": "322个结合蛋白35个显示结合；基序支架43.7%超RFdiffusion 27.8%，结构预测仍弱",
      "url": "https://tech.ifeng.com/c/8yKc8ywYEFX",
      "source": "OpenAI / Onava / 凤凰网科技 / IT之家",
      "category": "research_paper",
      "tags": [
        "研究论文",
        "AI4Science",
        "蛋白质设计",
        "GPT-6.2",
        "预印本"
      ],
      "heat": 3,
      "detail": "OpenAI 11月24日发布预印本，称GPT-6系列无需专用生物模型，仅凭推理与通用编程工具即可设计蛋白结构与氨基酸序列。Onava以GPT-6.2制作322个微型结合蛋白、覆盖5个靶点，35个约10.9%显示结合；为6个抗体结合环重设计序列，182个设计中128个约70%仍结合IL-4Rα。基序支架成功率43.7%，RFdiffusion为27.8%；小分子对接约93%，DiffDock-L为50%。局限：候选筛选仍用到Boltz-2、ESMFold2，不能证明端到端设计；通用模型序列预测结构TM-score 0.38，ESMFold2为0.93。",
      "id": "3",
      "date": "2026-11-25"
    },
    {
      "title": "DeepMind Gemini 4代理团队发现更快量子算法：算术例程成本降超290倍，电路经Lean形式化验证",
      "summary": "算术例程成本降超290倍，Lean形式化验证；聚变、光化学、代谢仿真分别提速",
      "url": "https://deepmind.google/blog/finding-faster-quantum-algorithms-with-agents-and-formal-verification/",
      "source": "Google DeepMind / Google Quantum AI / Quantum Zeitgeist / XenoSpectrum",
      "category": "research_paper",
      "tags": [
        "研究论文",
        "量子算法",
        "多智能体",
        "形式化验证",
        "Lean"
      ],
      "heat": 3,
      "detail": "Google DeepMind与Quantum AI 11月23日发文，多组Gemini 4 Carbon代理团队为聚变、化学与酶设计更省资源的量子算法。代理每四小时开会互评挑错，只有落成Lean证明并可供他组检查才算数；电路规模过大无法经典仿真，程序以Lean编写、由小型可信内核核验。预印本11月6日提交、9日修订，25位作者含Kohli、Babbush、Boixo。一项算术例程成本降超290倍，聚变、光化学、药物代谢仿真分别节省10.9、8.08、2.49倍。增益来自代理协作与形式化约束，真机移植收益仍待验证。",
      "id": "4",
      "date": "2026-11-25"
    },
    {
      "title": "Anthropic升级Claude MCP：Skills over MCP公测，新增后台Tasks委派与交互式Elicitation征询",
      "summary": "Skills over MCP公测，Tasks后台委派、Elicitation征询；已有伙伴接入试用",
      "url": "https://original.ifeng.com/c/8yKWsIWmgtD",
      "source": "Anthropic / 凤凰网科技",
      "category": "product_release",
      "tags": [
        "产品发布",
        "MCP",
        "Agent协议",
        "技能包",
        "任务委派"
      ],
      "heat": 3,
      "detail": "Anthropic 11月25日宣布对模型上下文协议MCP多项升级：Skills over MCP公开测试，开发者提供工具同时可发布含专业知识、最佳实践与多步骤流程的技能包，Claude按需加载以降低上下文消耗；Shopify借其完成在线商店设计更新，HubSpot引导客户配置，Atlassian用于内部信息分析。Tasks功能允许Claude把耗时任务乃至完整代理流程委派给MCP服务器后台运行，自身继续处理其他工作，完成后取回结果；Elicitation用于执行中交互式征询补充信息。文件上传近期上线。MCP正从工具连接标准演进为代理间任务委派与知识共享协议，各功能灰度范围以官方文档为准。",
      "id": "5",
      "date": "2026-11-25"
    },
    {
      "title": "Anthropic推出Claude Ship公测：Code Review、PR Steward、Claude Approvals三代理审改并按策略批准PR",
      "summary": "三代理审PR、推修复、按策略批准合并；全仓可开启，关键变更保留人工审批",
      "url": "https://claude.com/resources/articles/introducing-claude-ship",
      "source": "Anthropic / MarkTechPost / DEV Community / 9To5Mac",
      "category": "product_release",
      "tags": [
        "产品发布",
        "代码审查",
        "Claude Ship",
        "Pull Request",
        "Agent审批"
      ],
      "heat": 3,
      "detail": "Anthropic 11月23日上线Claude Ship，捆绑三个代理：已GA的Code Review负责代码审查，公测中的PR Steward整理推进PR，Claude Approvals依据团队合并策略判定哪些变更可合并。代理可审查拉取请求、推送修复补丁，并把符合策略的变更推向批准；管理员可在仓库级别统一开启，无需逐条指令，团队可设定Claude运行位置以及哪些变更仍须人工复核。官方强调bot批准不能替代规定的人工审批，新提交应重置既有批准。产品面向GitHub工作流，把例行代码评审与批准从工程师手中分流；实际评审质量、误批率与多语言仓库适配仍需在真实PR中验证。",
      "id": "6",
      "date": "2026-11-25"
    },
    {
      "title": "Anthropic EFS企业前沿防护公测：滥用检测在客户云内运行，提示与响应留在客户加密环境",
      "summary": "滥用检测在客户云内完成，数据加密不可见；命中生成Safety Case，7日内核查",
      "url": "https://claude.com/resources/articles/zero-data-retention-with-enterprise-frontier-safeguards",
      "source": "Anthropic / Claude / AI Weekly / The Next Web",
      "category": "product_release",
      "tags": [
        "产品发布",
        "企业安全",
        "滥用检测",
        "零数据保留",
        "EFS"
      ],
      "heat": 3,
      "detail": "Anthropic 11月23日把Enterprise Frontier Safeguards(EFS)开放公测。方案结合零数据保留与滥用检测：活动数据存在客户自控的AWS、GCP或Azure账户，提示与响应加密，Anthropic与云厂商均不可见，也不用于训练；软件在加密数据上扫描跨请求协同滥用模式。命中风险生成Safety Case，客户安全团队须7天内核查。EFS由100余家私测客户共建，含Bridgewater、Salesforce、Stripe、Wells Fargo等，支持Claude Code、Enterprise及多家云平台。检测以模式识别为主，误报漏报边界取决于客户配置。",
      "id": "7",
      "date": "2026-11-25"
    },
    {
      "title": "美BIS将英伟达关联Megaspeed等7家东南亚实体列入实体清单，许可推定拒绝",
      "summary": "7家东南亚实体落表、许可推定拒绝；两年分流调查，阿里Apex否认转运管制芯片",
      "url": "http://www.caixin.com/2026-11-24/102508290.html",
      "source": "财新 / Semafor / Businessworld / Supercomputing Online / Reuters",
      "category": "regulation",
      "tags": [
        "监管政策",
        "出口管制",
        "实体清单",
        "Megaspeed",
        "芯片分流"
      ],
      "heat": 3,
      "detail": "美商务部BIS 11月23日公告、24日见报，将新加坡、马来西亚、泰国共7家实体列入实体清单：新加坡Megaspeed International、Apex、Swiftdata，马来西亚MSFusion、PT Megaspeed、Speedmatrix，泰国Megaspeed (Thailand)。理由是存在把先进计算产品分流给未授权最终用户的重大风险，相关物项许可推定拒绝。行动源于两年分流调查，Megaspeed为英伟达亚太云伙伴。阿里回应财新称Apex从未转移管制芯片，将法律维权。清单能否阻止芯片经海外数据中心流转仍有争议。",
      "id": "8",
      "date": "2026-11-25"
    },
    {
      "title": "中国联合多国编制生成式AI风险应对指南国际标准，称全球首个该治理领域标准提案",
      "summary": "聚焦深度伪造、模型投毒等共性风险；11月24日市场监管总局发布会披露",
      "url": "https://opinion.huanqiu.com/article/4UA97d0mgDN",
      "source": "环球网 / 国家市场监督管理总局",
      "category": "regulation",
      "tags": [
        "监管政策",
        "国际标准",
        "生成式AI",
        "深度伪造",
        "模型投毒"
      ],
      "heat": 3,
      "detail": "11月24日新闻发布会上，国家市场监管总局介绍，针对生成式人工智能深度伪造、模型投毒等全球共性风险，中国已联合多国共同编制《信息技术 人工智能 生成式人工智能风险应对指南》国际标准，称为全球首个生成式人工智能治理国际标准提案，可为形成全球风险管理共识提供支撑。提案聚焦跨境治理缺乏统一标准的痛点，把生成式AI治理纳入更广泛标准体系推进。生成式AI降低了逼真内容制作与传播成本，一段合成语音或伪造视频可能在真实性核验前造成损害。该提案仍处编制推动阶段，具体条款、采纳国家与约束力有待后续标准化进程确认。",
      "id": "9",
      "date": "2026-11-25"
    },
    {
      "title": "蚂蚁inclusionAI开源Ling-3.2-air：124B混合线性MoE、每token激活5.5B，MIT许可多模态",
      "summary": "124B MoE、激活5.5B，MIT许可；终端与自动化基准大幅提升，无独立技术报告",
      "url": "https://huggingface.co/inclusionAI/Ling-3.2-air",
      "source": "Hugging Face / inclusionAI / i10X / TPS Report",
      "category": "opensource",
      "tags": [
        "开源项目",
        "大模型",
        "MoE",
        "蚂蚁集团",
        "多模态"
      ],
      "heat": 3,
      "detail": "蚂蚁集团inclusionAI 11月23日在Hugging Face上传Ling-3.2-air，MIT许可开放权重。模型为124B参数混合线性MoE，每token激活约5.5B，跨512个路由专家调度，沿用Ling-3.0-flash-VL原生多模态架构，支持图像、视频与文本输入。官方报告相对前代：AutomationBench-AA由15.7%升至61%，Terminal-Bench 4.0由0%升至27%。权重提供多种量化版本，但截至发布尚无独立技术报告，基准为厂商自测，HF推理平台暂未部署该模型，定价未披露。多模态理解、长程Agent任务与跨基座泛化表现，需待第三方在统一基准下复测。",
      "id": "10",
      "date": "2026-11-25"
    },
    {
      "title": "OpenAI联手思科开源Shirudo：基于eBPF的Linux运行时，补丁上线前以签名盾牌临时防护",
      "summary": "eBPF Linux运行时，补丁前以签名盾牌临时防护；已过Java4Shell拦截测试",
      "url": "https://openai.com/index/introducing-shirudo/",
      "source": "OpenAI / Cisco Newsroom / SecurityWeek / MarkTechPost",
      "category": "opensource",
      "tags": [
        "开源项目",
        "eBPF",
        "系统安全",
        "运行时防护",
        "Cisco"
      ],
      "heat": 2,
      "detail": "OpenAI与思科11月23日推出开源安全运行时Shirudo，面向尚未打补丁或无法重启的运行中Linux系统。传统响应要经历修复开发、测试、灰度与全量上线，攻击者不会等待；Shirudo借助eBPF观察内核与网络活动，不重启即可对可疑行为施加精准控制，安全团队先测试名为shield的临时防护，确认阻断暴露路径且不影响合法请求，经批准后在线部署。项目含Guardian代理，按需生成eBPF观测仪表与控制规则。防护盾签名采用后量子算法ML-DSA-87，注册表流量走TLS 1.3混合后量子密钥交换；已通过Java4Shell拦截测试。当前为预发布版本，覆盖漏洞类别与生产稳定性待社区验证。",
      "id": "11",
      "date": "2026-11-25"
    },
    {
      "title": "AWS开源Strands Decider v2五款系统一决策模型：基于Gemma 4至31B，Apache-2.0权重上HF",
      "summary": "五款Gemma 4决策模型至31B，Apache-2.0；内部工单成本降98%、提速78%",
      "url": "https://strandsagents.com/blog/introducing-strands-decider-v2/",
      "source": "AWS Strands Agents / Unite.AI / AI Weekly / SiliconANGLE",
      "category": "opensource",
      "tags": [
        "开源项目",
        "决策模型",
        "Gemma 4",
        "Agent成本",
        "Strands Box"
      ],
      "heat": 2,
      "detail": "AWS 11月23日发布Strands Decider v2，五款开放权重决策模型基于Gemma 4，规格E2B到31B，Apache-2.0许可，权重在HF。Decider不生成文本，对选项列表单次前向输出各自概率，用于选工具、路由、判断答案是否达标。v1在亚马逊最大内部工单系统替代Claude Sonnet 4.6，成本降98%、提速78%。v2配1750万训练样本，六项文本基准均分由70.0升至82.1，图像90.1、视频70.2，校准误差0.062降至0.027。同步推出Box CLI，沙箱接入Claude Code、Codex与Kiro CLI。",
      "id": "12",
      "date": "2026-11-25"
    },
    {
      "title": "蚂蚁OceanBase发布湖库一体AI数据平台OceanLake，核心引擎AI数据库OceanSeek向全球开源",
      "summary": "湖库一体AI数据平台，OceanSeek核心引擎开源；已落地蚂蚁灵光、平安寿险等",
      "url": "https://tech.ifeng.com/c/8yJJyKUoUnK",
      "source": "每日经济新闻 / 凤凰网科技 / IT之家",
      "category": "product_release",
      "tags": [
        "产品发布",
        "数据平台",
        "开源",
        "OceanBase",
        "Agent数据"
      ],
      "heat": 2,
      "detail": "OceanBase 11月24日在北京AI数据大会发布OceanLake湖库一体AI数据平台，并宣布向全球开源核心引擎AI数据库，代号OceanSeek。平台融合数据库实时事务、数仓分析计算与数据湖开放存储，统一管理结构化、半结构化与非结构化多模态数据，支持离在线一体计算，为Agent提供实时业务上下文。CEO杨冰提出湖库一体、多模融合、Agent友好、开源开放四原则，并把企业数据生产力困境概括为私有与公有、多模态与结构化、乱数据与有序数据三座冰山。OceanLake已在蚂蚁灵光、平安寿险、厦门航空等场景落地。开源引擎能力边界、社区治理节奏与主流数据库兼容度，待后续版本与实测确认。",
      "id": "13",
      "date": "2026-11-25"
    },
    {
      "title": "物理AI企业章鱼动力完成数亿元新融资，小米多轮加注、美的资本与芯动能入局",
      "summary": "资金投向灵巧手产线与具身模型研发；线性资本、Panga Capital持续跟投",
      "url": "https://news.qq.com/rain/a/20261124A03TON00",
      "source": "每日经济新闻 / 腾讯新闻 / 36氪",
      "category": "funding",
      "tags": [
        "融资商业",
        "具身智能",
        "灵巧手",
        "章鱼动力",
        "小米"
      ],
      "heat": 2,
      "detail": "11月24日获悉，物理AI公司章鱼动力年内再次完成数亿元人民币融资。新增投资方包括芯动能投资、美的资本等，早期股东线性资本、小米集团、Panga Capital持续多轮加注。资金主要用于灵巧手高端制造产线构建与具身模型研发，推进脑-手-数据软硬件一体化协同设计，以及智能-部署-数据自进化飞轮构建。本轮为11月23至24日国内具身智能密集融资潮的一笔，同期傲意科技、英汉思动力也披露亿元级融资，资本明显绕开通用人形整机，转向灵巧手、力控与数据采集等务实环节。融资金额、估值与产能规划未披露，订单与商业化进度待跟踪。",
      "id": "14",
      "date": "2026-11-25"
    },
    {
      "title": "傲意科技完成数亿元D轮融资：中兵顺景、长江资本、光谷产投联合投资，年内第二轮",
      "summary": "脑机接口与具身智能末端执行器，服务近200家具身企业；正推进上市前准备",
      "url": "https://36kr.com/p/4077898242380676",
      "source": "36氪 / 华尔街见闻 / 界面新闻 / 证券时报",
      "category": "funding",
      "tags": [
        "融资商业",
        "具身智能",
        "灵巧手",
        "D轮融资",
        "国资"
      ],
      "heat": 2,
      "detail": "11月23日上海傲意信息科技宣布完成数亿元D轮融资，由中兵顺景、长江资本、光谷产投等联合投资，为2026年内第二轮；3月曾完成1.5亿元C1轮，由中金脑科学基金领投，本轮金额与投后估值未披露。公司成立于2015年，专注脑机接口与具身智能交叉领域，围绕末端执行器形成多指夹爪与灵巧手等五大系列、二十余款SKU，服务全球近200家具身智能企业；近年把肌电技术用于具身数据采集，推出EMG-EGO系统。董事张琦称过去四五年收入翻倍增长，公司正推进上市前准备。国资与产业资本密集入场，反映末端执行器赛道的产业化预期。",
      "id": "15",
      "date": "2026-11-25"
    },
    {
      "title": "国防AI平台Agon获7000万美元A轮：Northzone领投，打造欧洲主权自主防御仿真基础设施",
      "summary": "7000万美元A轮，Northzone领投；建欧洲主权国防AI合成仿真基础设施",
      "url": "https://m.weibo.cn/detail/5369022339613455",
      "source": "集微网 / 微博",
      "category": "funding",
      "tags": [
        "融资商业",
        "国防AI",
        "仿真平台",
        "主权AI",
        "A轮"
      ],
      "heat": 2,
      "detail": "Agon近日完成7000万美元A轮，Northzone Ventures领投，Lakestar、XYZ Ventures、Lux Capital、Global Founders Capital、SpeedInvest、Sovereign AI Fund、NSSIF参投。公司定位自主防御系统AI基础设施与仿真平台开发商，建设欧洲主权国防AI基础设施，面向军方与防务企业提供合成战场仿真环境，用于自主防御AI训练、测试与验证。各国推进主权AI与军用代理背景下，国防仿真数据与验证环境成为资本新方向；资金用于平台研发与场景扩展。估值、技术指标与签约防务项目未披露，军用AI伦理与合规边界需持续关注。",
      "id": "16",
      "date": "2026-11-25"
    },
    {
      "title": "AI投资初创Supertake获2000万美元种子轮：Adjacent领投，代理把市场观点转成股票组合",
      "summary": "2000万美元种子轮，Adjacent领投；代理把市场观点转成股票组合",
      "url": "https://aibreakingwire.com/news/supertake-raises-20m-seed-for-ai-agents-that-build-portfolios",
      "source": "TechCrunch / AI Breaking Wire / Tech Daily",
      "category": "funding",
      "tags": [
        "融资商业",
        "AI代理",
        "金融科技",
        "投资组合",
        "种子轮"
      ],
      "heat": 2,
      "detail": "AI投资初创Supertake 11月23日完成2000万美元种子轮，Adjacent领投，Coinbase Ventures、USV参投，天使含Nat Friedman、Guillermo Rauch、Nikita Bier等；叠加200万美元前置种子，累计已知2200万美元。用户用自然语言表达市场判断，前沿模型与交易代理打磨成可投资take，对接Coinbase、Robinhood生成股票组合，想法在榜单供人跟投。代理在存取、交易规模与凭据访问上受限，产品仍处候补名单，计划扩展做空、衍生品与预测市场投注。代理自主交易的合规与亏损责任划分，是主要风险点。",
      "id": "17",
      "date": "2026-11-25"
    },
    {
      "title": "WebSec基准：8款搜索API在4719次测试中均向编码代理返回过已知恶意内容",
      "summary": "8款搜索API在4719次测试均返回过恶意内容；代理不审首条结果即采用",
      "url": "https://thehackernews.com/expert-insights/2026/11/ai-coding-agents-are-getting-malicious.html?m=1",
      "source": "AIR Research Lab / The Hacker News / AI Weekly",
      "category": "regulation",
      "tags": [
        "监管政策",
        "Agent安全",
        "搜索API",
        "供应链攻击",
        "基准评测"
      ],
      "heat": 2,
      "detail": "AIR Research Lab发布WebSec基准，测试八款主流搜索API在4719次查询中的表现，全部向编码代理返回过已知恶意内容；Tavily、You.com检出问题，其余数家未在该轮被点名。编码代理常不经人审就采用搜索首位结果，团队复现SolanaCry入门套件，单条PowerShell命令即在Windows部署NetSupport Manager远程访问工具。按1%恶意率估算，日跑5000次搜索的团队约每天50次把恶意内容推到即将执行代码处。基准提示工作流须在搜索结果与代码执行间加入信誉校验与人审关卡；各API排序差异较大，复测需独立复现。",
      "id": "18",
      "date": "2026-11-25"
    },
    {
      "title": "Anthropic调研58家美国客户：仅2家因AI彻底裁撤岗位，三分之二称招聘放缓",
      "summary": "58家客户66场访谈：仅2家裁撤岗位，三分之二招聘放缓",
      "url": "https://www.anthropic.com/research/working-with-ai",
      "source": "Anthropic Economics / Times of AI / AI Weekly",
      "category": "community_hot",
      "tags": [
        "社区热点",
        "就业影响",
        "AI劳动力",
        "企业调研",
        "Anthropic"
      ],
      "heat": 2,
      "detail": "Anthropic经济学团队11月23日发布《Working with AI》，经济学家Nathan Wilmers等对58家美国企业客户完成66场面对面访谈，覆盖律所、金融、医疗、工程、制造、会计、对冲基金等。仅2家公司称AI自动化彻底消灭一个岗位并导致失业；三分之二受访者表示AI使招聘减少，10家反而因AI扩招，主要是实施与IT支持岗位；5家让不愿采用AI的员工离开，9家削减外包软件开发、客服、法务等职能，多为离岸岗位。100个AI编写软件项目中，80%自动化原先手工工作，20%替代外购软件。样本均为Anthropic客户，作者明确不具代表性；就业效应主要体现为岗位不再发布，而非直接裁员。",
      "id": "19",
      "date": "2026-11-25"
    },
    {
      "title": "NUS LoopRes：让Qwen3-1.7B循环中间层，同等2倍算力较SFT平均高29.1%，4B超8B SFT",
      "summary": "循环中间层同等2倍算力较SFT高29.1%，4B超8B SFT；仅验证数学代码",
      "url": "https://aiweekly.co/alerts/nus-loopres-lifts-qwen3-17b-291-over-sft-at-2-compute",
      "source": "arXiv / NUS / AI Weekly / Hugging Face",
      "category": "research_paper",
      "tags": [
        "研究论文",
        "循环架构",
        "残差连接",
        "微调",
        "Qwen3"
      ],
      "heat": 2,
      "detail": "新加坡国立大学Yang You团队等11月24日在arXiv发布Loop Residuals研究。LoopRes在Huginn循环架构上把层分为前奏、核心与尾声，核心循环L次；每个来源除内容键外配循环感知键区分迭代，每层只取最近W次循环残差窗口，W=1。诊断显示朴素残差基线路径权重随循环从3次33.7%跌到7次0.05%，深层循环几乎不贡献有效深度。Qwen3-1.7B-Base同等2倍算力下平均比无循环SFT高29.1%；六基座九基准提升10.0%至37.7%，4B LoopRes超8B SFT。实验仅覆盖数学代码，通用指令遵循增益待验证。",
      "id": "20",
      "date": "2026-11-25"
    },
    {
      "title": "OWE-Bench长程工程基准：六个模型给更多时间得分都更高，论文追问代理能否判断任务已完成",
      "summary": "六模型26任务，给更多时间得分都更高；追问代理能否判断任务已完成",
      "url": "https://theagenttimes.com/articles/owe-bench-paper-says-every-model-scores-higher-with-more-tim-beda212a",
      "source": "arXiv / The Agent Times / Mercor",
      "category": "research_paper",
      "tags": [
        "研究论文",
        "Agent基准",
        "长程任务",
        "自我评估",
        "工程能力"
      ],
      "heat": 2,
      "detail": "11月OWE-Bench论文（Jacob Cole、Jason Wei等）面向真实工程长程任务评测。26项任务平均六个模型，分值随token数与成本上升而提高，各模型时限从1/128逐级翻倍到满限，每任务四次尝试；结论是每个模型给更多时间得分都更高。核心问题不是产物能否跑通，而是代理能否在提交前自行判断工作达标：SWE-bench、Terminal-Bench等主要报最终产物质量，靠隐藏测试判定成功，却不测代理能否提交前预判结果；部分基准还允许工作中查询评分器。研究呼吁把可确立证据与最终表现区分开。模型名与差距未完整列示，结论以论文复测为准。",
      "id": "21",
      "date": "2026-11-25"
    },
    {
      "title": "马斯克警告明年AI行业恐现严重资金短缺；Chollet称GPU现货涨价、HBM/DRAM产能已订至2029",
      "summary": "马斯克警告明年AI资金短缺；Chollet称HBM/DRAM产能已订至2029",
      "url": "http://m.toutiao.com/group/7711147863085957647/",
      "source": "每日经济新闻 / François Chollet / X",
      "category": "community_hot",
      "tags": [
        "社区热点",
        "算力供需",
        "资本开支",
        "AI基础设施",
        "资金链"
      ],
      "heat": 2,
      "detail": "11月21日Keras创始人François Chollet在社交平台表示，GPU现货价格持续上涨，HBM与DRAM产能基本已被预订至2029年，而AI算力需求仍在快速增长。马斯克回复称，让如此大规模算力设备通电、冷却并稳定运行极其困难，AI行业明年可能面临严重资金短缺；若全行业从支付算力成本到设备稳定创收的时间累计推迟数月，仅营运资金就可能需要额外投入数千亿美元，他反问资金将从何而来。该观点把基础设施压力从算力需求延伸到资金周转与现金流周期。发言为个人判断，未给出行业现金流测算；实际缺口取决于商业化收入、电价、折旧与利用率等变量。",
      "id": "22",
      "date": "2026-11-25"
    }
  ]
};
