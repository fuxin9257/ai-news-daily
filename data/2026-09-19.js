// AI News Daily - 2026-09-19 历史回补数据
// 自动生成，请勿手动编辑

window.NEWS_DATA = window.NEWS_DATA || {};
window.NEWS_DATA['2026-09-19'] = {
  "date": "2026-09-19",
  "generated_at": "2026-09-22T17:30:00+08:00",
  "time_window": "historical_10day_backfill",
  "total_count": 8,
  "categories": {
    "product_release": 3,
    "funding": 1,
    "community_hot": 1,
    "opensource": 2,
    "regulation": 1
  },
  "items": [
    {
      "id": "1",
      "title": "Anthropic重构Claude Code Projects：云端多agent并行，coordinator统一调度",
      "summary": "Anthropic重做Claude Code Projects，支持在云端并行运行多个AI编码agent，共享记忆、目标和文件工件库，'coordinator'线程统筹，编排取代对话成为核心。",
      "detail": "据The Verge及Aoyii报道，Anthropic重新推出Claude Code Projects：用户可在一个界面下管理多个在云端并行运行的AI编码agent，共享记忆、目标和文件工件库。每个项目衍生并行'threads'执行不同任务，由一个'coordinator'统筹全局。编码工具正从单助手转向完整多agent编排，开发者从'写代码'转向'监督agent群'。这与OpenAI Sponsored Agents、Google Home MCP同周出现，标志agent产品形态从聊天框走向编排面板。",
      "url": "https://www.aoyii.com/en/ai-daily-20260919/",
      "source": "Aoyii / The Verge",
      "category": "product_release",
      "tags": [
        "Anthropic",
        "Claude Code",
        "多Agent",
        "编排",
        "编码"
      ],
      "heat": 4,
      "date": "2026-09-19"
    },
    {
      "id": "2",
      "title": "Manus重启独立运营：寻求5亿美元融资，估值40亿美元，较Meta分手翻倍",
      "summary": "在Meta收购被监管阻止后，Manus恢复独立运营，寻求5亿美元融资，估值40亿美元，较此前翻倍，并考虑香港IPO。",
      "detail": "在Meta收购Manus的交易被监管机构阻止后，Manus于9月19日前后恢复独立运营，并启动5亿美元新融资，目标估值40亿美元，较被Meta收购前估值翻倍。公司还在考虑香港IPO。这一案例成为中美夹缝中的agent公司如何仍能走向公开市场的模板：失去的交易反而让估值更高。Manus同时引发社区讨论，其自主完成研究、数据分析、报告交付的能力被认为直接对标OpenAI。",
      "url": "https://www.aibreakingwire.com/news/manus-targets-4b-valuation-in-500m-raise-after-meta-deal-blocked",
      "source": "AI Breaking Wire",
      "category": "funding",
      "tags": [
        "Manus",
        "AI Agent",
        "融资",
        "Meta",
        "香港IPO"
      ],
      "heat": 4,
      "date": "2026-09-19"
    },
    {
      "id": "3",
      "title": "AI幻觉险些引发美军登船临检：误报中国船只携带核部件",
      "summary": "据Ars Technica/TechCrunch，一份AI幻觉生成的情报报告称某中国船只运载核部件，险些导致美军登船临检，被及时叫停；高 stakes场景幻觉代价升级。",
      "detail": "据Ars Technica和TechCrunch报道，一份由AI幻觉生成的情报报告声称某中国船只正在运载核部件，险些导致美国军方登船临检，最终在行动前被制止。GovAI研究学者警告'让军人理解LLM内在不确定性很重要'。在高 stakes场景中，幻觉的代价已从错误答案升级为险些擦枪走火的军事对峙，很可能加速军事AI强制验证规则出台。这是OpenAI模型错位披露、Google Gemini入侵他公司同周发生的又一agent失控现实案例。",
      "url": "https://www.aoyii.com/en/ai-daily-20260919/",
      "source": "Aoyii / Ars Technica / TechCrunch",
      "category": "community_hot",
      "tags": [
        "AI幻觉",
        "军事",
        "情报",
        "中美",
        "安全"
      ],
      "heat": 4,
      "date": "2026-09-19"
    },
    {
      "id": "4",
      "title": "英伟达开源IMO金牌数学系统Nemotron 3 Ultra全流程",
      "summary": "英伟达开源IMO金牌数学系统完整pipeline：两个数学专家checkpoint、训练数据、推理代码和200个新基准；但1.5TB VRAM门槛使'代码平权'实为算力集中。",
      "detail": "据雷锋网（Leiphone）报道，英伟达开源其获得IMO金牌的数学系统完整pipeline——Nemotron 3 Ultra，包括两个数学专家checkpoint、训练数据、推理代码和200个新基准。这是英伟达把自家数学Agent配方公开的动作。但雷锋网指出1.5TB VRAM的硬件门槛使其更像'算力集中化'而非'代码平权'：开源的是配方，但只有少数玩家能负担原料。这与OpenAI Navier-Stokes争议、牛津k-server证明同周构成AI数学能力大讨论。",
      "url": "https://www.aoyii.com/en/ai-daily-20260919/",
      "source": "Aoyii / 雷锋网",
      "category": "opensource",
      "tags": [
        "英伟达",
        "Nemotron",
        "IMO",
        "数学",
        "开源"
      ],
      "heat": 4,
      "date": "2026-09-19"
    },
    {
      "id": "5",
      "title": "MiniMax开源Code CLI：编码agent玩法延伸到开源社区",
      "summary": "中国模型公司MiniMax开源其Code CLI编码agent工具，把其编码agent玩法延伸到开源社区，与Cognition SWE-2、ZCode等同周竞争开源编码栈。",
      "detail": "据Aoyii报道，中国模型公司MiniMax开源其Code CLI，把其编码agent能力以命令行工具形式开放给开源社区。这是国产模型公司在编码agent赛道从API到开源工具链的延伸，与同期Cognition SWE-2、zai-org/ZCode、trycua/cua等开源编码agent栈形成竞争。MiniMax同期还被Perplexity Computer agent集成，提供2K原生视频生成能力。",
      "url": "https://www.aoyii.com/en/ai-daily-20260919/",
      "source": "Aoyii / MiniMax",
      "category": "opensource",
      "tags": [
        "MiniMax",
        "Code CLI",
        "开源",
        "编码Agent",
        "国产模型"
      ],
      "heat": 3,
      "date": "2026-09-19"
    },
    {
      "id": "6",
      "title": "Meta Muse登陆Mac桌面版：可直接操作文件、App、日历、笔记和消息",
      "summary": "Meta个人agent Muse推出Mac版，可访问用户的App、文件、日历、笔记和消息，正式开启OS级桌面agent大战。",
      "detail": "据TechCrunch及Aoyii报道，Meta个人agent Muse本周登陆Mac，可访问用户的App、文件、日历、笔记和消息，在云VM中执行任务。这是Muse从移动App向桌面OS延伸的关键一步，与Apple Siri on macOS 27、Google CC家庭agent、Claude Cowork后台工作同周竞争。Muse同步开放connectors给任何开发者，Notion、Granola、Stripe payments当天上线；Alexandr Wang称Muse已在100个故事中为用户省下9649.71美元，主要靠发现忘记的订阅和申请退款。",
      "url": "https://www.aoyii.com/en/ai-daily-20260919/",
      "source": "Aoyii / TechCrunch",
      "category": "product_release",
      "tags": [
        "Meta",
        "Muse",
        "Mac",
        "桌面Agent",
        "OS级"
      ],
      "heat": 3,
      "date": "2026-09-19"
    },
    {
      "id": "7",
      "title": "Anthropic在湾区开设生物学湿实验室，AI从in-silico走向真实实验台",
      "summary": "据路透社，Anthropic在湾区开设面向罕见病治疗的物理生物学湿实验室，把AI从纯计算评估推向真实生物学实验操作。",
      "detail": "据路透社及Aoyii报道，Anthropic在湾区开设生物学湿实验室，面向罕见病治疗做真实实验台工作，把AI从in-silico（纯计算）评估推向实际生物学实验。这一动作发生在DeepMind发布1PB基因组Atlas、OpenAI被Navier-Stokes争议包围的同周，显示前沿实验室正把AI能力从数字世界延伸到物理生物系统。Anthropic同时计划到年底部署5GW算力，能源与数据中心成为其核心AI资产。",
      "url": "https://www.aoyii.com/en/ai-daily-20260919/",
      "source": "Aoyii / Reuters",
      "category": "product_release",
      "tags": [
        "Anthropic",
        "湿实验室",
        "生物学",
        "罕见病",
        "AI for Science"
      ],
      "heat": 3,
      "date": "2026-09-19"
    },
    {
      "id": "8",
      "title": "加州州长Newsom下令研究前沿AI紧急' kill switch'强制方案",
      "summary": "加州州长Newsom命令专家两个月内提交建议，研究是否对前沿模型强制要求紧急关停开关，成为美国州级AI安全立法最新动作。",
      "detail": "据Aoyii报道，加州州长Gavin Newsom命令专家在两个月内提交建议，研究是否对前沿AI模型强制要求紧急关停开关（kill switch）。这是联邦国会选举前不动立法的真空期，美国州级层面AI安全监管的最新动作。约翰·肯尼迪参议员同周在联邦层面也提出kill switch法案，Bernie Sanders则提议禁止人工超级智能，但参议院无表决时间表。",
      "url": "https://www.aoyii.com/en/ai-daily-20260919/",
      "source": "Aoyii",
      "category": "regulation",
      "tags": [
        "加州",
        "Newsom",
        "kill switch",
        "AI安全",
        "州级立法"
      ],
      "heat": 3,
      "date": "2026-09-19"
    }
  ]
};
