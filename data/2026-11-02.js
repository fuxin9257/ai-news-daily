window.NEWS_DATA = window.NEWS_DATA || {};
window.NEWS_DATA['2026-11-02'] = {
  "date": "2026-11-02",
  "generated_at": "2026-11-02T07:02:38.413158+08:00",
  "time_window": "past_24h",
  "total_count": 20,
  "categories": {
    "product_release": 4,
    "research_paper": 3,
    "funding": 5,
    "opensource": 3,
    "regulation": 2,
    "community_hot": 3
  },
  "items": [
    {
      "id": "1",
      "title": "GPT-6.2 Astra被Codex抓包曝光：6.1因安全测试翻车回炉，直接跳级6.2",
      "summary": "11月1日晚开发者Salio调试Codex时抓包发现前端仍挂GPT-6 Astra但API已返回gpt-6.2-astra（占用量19.8%）；原计划6.1因安全测试失败回炉重炼一个月，Codex团队28天连夜重做底层让AI能起子进程连续工作数小时。",
      "detail": "据新浪财经、网易科技、AInvest、FourWeekMBA 11月1日晚至11月2日报道，开发者Salio在调试Codex时抓包发现：前端界面仍显示GPT-6 Astra，但底层API返回数据包里模型真身已换成gpt-6.2-astra。多位Pro订阅用户在用量统计面板翻到账单证据——Token Gremlin晒出的明细中gpt-6.2-astra占19.8%、gpt-6-astra占80%、gpt-6-luna占比<0.1%。OpenAI官方尚未发布任何公告。据知情人士，原计划冲刺的GPT-6.1因安全测试「翻车」被迫回炉，闭关重炼一个月后直接跳级6.2；为配合新模型，OpenAI Codex团队28天连夜重做底层，让AI能自己拉起子进程、连续工作几小时。同期Pliny the Liberator公开的GPT-6 Astra系统提示词（33万字符）也证实Codex已具备在共享工作区自主操作权限的能力。这是继10月27日GPT-6.1 Terra上线ChatGPT Work/Codex/API后，OpenAI下一代模型的首次灰度泄露。",
      "url": "http://finance.sina.cn/2026-11-02/detail-inixhwzc2372024.d.html",
      "source": "新浪财经 / AInvest / FourWeekMBA",
      "category": "community_hot",
      "tags": [
        "OpenAI",
        "GPT-6.2 Astra",
        "Codex",
        "抓包泄露",
        "灰度发布",
        "自主Agent",
        "子进程"
      ],
      "heat": 5,
      "date": "2026-11-02"
    },
    {
      "id": "2",
      "title": "Chainalysis遭offensive agentic techniques攻击：客户姓名邮箱泄露，加密分析公司首次被AI Agent攻破",
      "summary": "The Block/CoinDesk 10-31：区块链分析公司Chainalysis发布安全通报，外部攻击者使用攻击性智能体技术（offensive agentic techniques）未经授权访问其内部工具，泄露用户ID、姓名、邮箱、组织角色；强调与近期Binance黑客事件无关；2026年Agent操作已占加密黑客损失89%。",
      "detail": "据The Block 10月31日、CoinDesk、链捕手、BeInCrypto报道，区块链分析公司Chainalysis发布安全事件通知：本月发现外部攻击者利用攻击性智能体技术（offensive agentic techniques）未经授权访问其系统及内部工具。根据目前掌握证据，泄露数据包括非敏感客户信息——用户ID、姓名、邮箱和组织角色；Chainalysis强调尚未发现调查内容（包括图表、钱包聚类报告、可疑地址标签）被访问。公司提醒用户警惕异常密码重置请求和认证弹窗，并强调此事与近期Binance大型黑客事件无关。CoinDesk援引CoinGape数据：2026年Agent操作已占报告加密黑客损失近89%（2021年仅约15%）。这是Chainalysis自身——长期追踪加密黑客的公司——首次被「AI Agent攻击」正面攻破，与10月31日Forever Security披露的EMBRACE五工具浏览器逃逸漏洞、10月31日Claude Code扩展被植入SSH后门，共同构成10月底AI Agent安全三连击。",
      "url": "https://www.theblock.co/news/business/2026-10-31-chainalysis-says-hacker-using-offensive-agentic-techniques-accessed-its-customers-names-and-emails-432244",
      "source": "The Block / CoinDesk / 链捕手",
      "category": "community_hot",
      "tags": [
        "Chainalysis",
        "offensive agentic",
        "AI攻击",
        "数据泄露",
        "Web3安全",
        "89%黑客损失",
        "Binance"
      ],
      "heat": 5,
      "date": "2026-11-02"
    },
    {
      "id": "3",
      "title": "Claude订阅大改：Max 20x更名Ultra($200)，已验证账号取消5小时滚动窗口",
      "summary": "Anthropic 11-1官宣：消费订阅重排为Free/Pro/Max($100)/Ultra($200)四档；原Max 5x变Max、Max 20x变Ultra；Ultra已验证账号不再设5小时滚动使用窗口，可在每周额度内连续使用；新账号验证前仍保留临时限制。",
      "detail": "据新浪科技、36氪、Techotales、Clauding 11月1日报道，Anthropic于周六（11月1日）重排消费订阅档位：原Max 5x（$100/月）更名为Claude Max，原Max 20x（$200/月）更名为Claude Ultra，价格不变；官方定价页同步改成Free、Pro、Max、Ultra四档，老用户无需任何操作。核心变化是Ultra档位对已验证账号取消5小时滚动使用窗口——此前Claude用量按滚动5小时窗口重置，付费档再叠每周上限；现在Ultra账号可在每周额度内连续使用，不再被5小时时钟打断。新账号在完成验证前仍保留临时限制。这一调整直接回应开发者社区长期抱怨：Claude Code在长任务（整库重构、多文件调试）中频繁撞5小时墙被迫中断。结合同日Anthropic新版Usage Policy 11月12日生效、Claude Mythos 5.5传闻预热，Anthropic正在S-1 IPO前同步刷新产品矩阵。",
      "url": "https://finance.sina.com.cn/tech/roll/2026-11-01/doc-inixeyiz3196328.shtml",
      "source": "新浪科技 / 36氪 / Anthropic",
      "category": "product_release",
      "tags": [
        "Anthropic",
        "Claude Ultra",
        "订阅改名",
        "5小时限制",
        "Max",
        "$200",
        "Claude Code"
      ],
      "heat": 5,
      "date": "2026-11-02"
    },
    {
      "id": "4",
      "title": "Google宣布12月31日关闭Jules异步编码Agent，经验全部折叠进Antigravity",
      "summary": "Google 10-29官宣：2024年12月发布的异步编码Agent Jules将于11月11日后转只读、12月31日彻底关停；Jules经验并入新一代agent-first开发平台Antigravity，实现「后台自主任务+agent-first IDE」统一体验。",
      "detail": "据Times of AI、Crypto Briefing、The Verge、WangDou 10月29-30日报道，Google宣布异步编码Agent Jules将于2026年12月31日彻底关停。时间线：11月11日后Jules不再接受新会话，11月12日起转只读，12月31日服务完全下线。Jules官方账号声明：「我们正在把Jules的经验带入Antigravity，让你们同时拥有后台自主远程任务执行和agent-first开发环境的最佳体验。」Jules于2024年12月作为实验发布——连接GitHub仓库后自动克隆代码、异步改PR，毕业到GA后运营不到两年。同期Google在Gemini at Work 2026上推的Antigravity是新一代agent-first开发平台，把Jules的后台异步能力与IDE前台合并。这一关停意味着Google编码Agent产品线从「多实验并行」收敛到「Antigravity单主线」，与GitHub Copilot/Cursor/Anthropic Claude Code三足鼎立格局重新洗牌。",
      "url": "https://timesof.ai/2026/10/google-jules-shutdown-december-31-antigravity",
      "source": "Times of AI / The Verge / Crypto Briefing",
      "category": "product_release",
      "tags": [
        "Google",
        "Jules",
        "Antigravity",
        "编码Agent",
        "关停",
        "异步编程",
        "产品整合"
      ],
      "heat": 5,
      "date": "2026-11-02"
    },
    {
      "id": "5",
      "title": "商汤开源SenseNova-Loop-9B-Preview：32层权重跑56次前向，9B参数等效14.6B推理",
      "summary": "商汤10-30开源：保留首尾各4层，中间24层（第4-27层）用同一份权重连跑两遍，形成56层等效深度；双流mHC（流形约束超连接）+20次Sinkhorn归一化；Apache 2.0，支持262K上下文，长文档/编程/工具交互，文字+图像输入。",
      "detail": "据新浪财经、Pandaily、MindStudio、Solo独立开发者社区10月30日至11月1日报道，商汤科技开源SenseNova-Loop-9B-Preview预览模型。核心创新是循环Transformer结构：32层解码器中保留首尾各4层跑一次，中间第4-27层共24层用同一份权重连续跑两遍——每次前向实际执行56次层计算，但只存储32套层权重；总参数约9B，官方称推理等效约14.6B参数。循环段引入双流mHC（Manifold-Constrained Hyper-Connections，流形约束超连接），通过20次Sinkhorn归一化约束两条残差流之间的混合映射，管理循环段内部信息流。模型定位长文档理解、编程及外部工具交互，接受文字和图像输入、输出文字，位置编码上限262,144 token，Apache 2.0协议。这是继10月DeepSeek Super-agent开源、DeepInfer推理引擎后，中国大模型公司在「用计算换参数」架构探索上的重要开源——通过循环权重复用，在不增加存储的前提下扩展推理深度。",
      "url": "http://finance.sina.cn/2026-10-30/detail-iniwziir8135422.d.html",
      "source": "商汤科技 / 新浪财经 / Pandaily",
      "category": "opensource",
      "tags": [
        "商汤",
        "SenseNova Loop",
        "循环Transformer",
        "9B",
        "14.6B等效",
        "mHC",
        "Apache 2.0",
        "开源"
      ],
      "heat": 4,
      "date": "2026-11-02"
    },
    {
      "id": "6",
      "title": "Anthropic新版Usage Policy 11月12日生效：武器/监控/自主硬件划红线",
      "summary": "Anthropic 10-8公布、11-12生效：重写Usage Policy，明确禁止开发武器系统（目标/火控/交战）、武器化无人机/车辆、大规模国内监控；新增Model Hardware Standard——连接能自主物理动作的硬件时必须有合格操作员观察并能紧急停止，Claude断链时设备须保持安全态。",
      "detail": "据Anthropic官方newsroom《2026 Usage Policy update》、AIToolsRecap 11月1日、官方PDF，新版Usage Policy将于2026年11月12日正式生效。关键变化：(1)武器红线明确——禁止开发或操作武器系统测试/软件组件（含目标、火控、交战功能）、禁止把武器化整合到无人机/车辆/无人平台或开发武器投送系统、禁止非法获取销售转让武器或绕过出口管制；(2)高风险用例要求更清晰——列明哪些建议被覆盖、哪些不被覆盖；(3)新增Model Hardware Standard配套要求——当Claude连接能执行自主物理动作且可能造成伤害的硬件时，必须有合格操作员能观察设备并在需要时停止，且设备在Claude断连时必须能保持安全状态。这一政策与2月Anthropic与五角大楼对峙事件（拒绝自主武器目标和大规模国内监控两条红线）一脉相承，也是Anthropic S-1 IPO前对监管与公众关系的重要梳理。",
      "url": "https://www.anthropic.com/news/2026-usage-policy-update",
      "source": "Anthropic / AIToolsRecap",
      "category": "regulation",
      "tags": [
        "Anthropic",
        "Usage Policy",
        "11月12日",
        "武器红线",
        "监控",
        "Model Hardware Standard",
        "自主硬件",
        "S-1合规"
      ],
      "heat": 4,
      "date": "2026-11-02"
    },
    {
      "id": "7",
      "title": "MiniMax完成160亿港元（约20亿美元）新融资：超额认购7倍，100+投资者来自亚欧美",
      "summary": "MiniMax 11-1官宣：新融资轮160亿港元（超20亿美元）正式关账，超额认购7倍；吸引来自亚洲、欧洲、美国100+投资者；资金用于AI基础设施、研发与全球扩张。",
      "detail": "据AI D-A-M-N 11月1日报道，中国AI独角兽MiniMax正式完成新一轮160亿港元（约20亿美元）融资关账，本轮超额认购达7倍。MiniMax今日宣布：本轮吸引来自亚洲、欧洲、美国的100+家投资者，资金将用于AI基础设施投入、研发和全球扩张。这是继10月30日Moonshot Kimi F轮35亿美元（估值350亿，Pre-IPO G轮500亿估值）、10月31日可灵AI选定港股IPO承销、10月DeepSeek完成1055亿人民币B轮后，中国大模型公司2026年Q4又一笔大额融资。MiniMax此前已在港股递表，此轮关账为其IPO前最后一轮私募定价。",
      "url": "https://ai-damn.com/minimax-raises-2b-in-funding-round-oversubscribed-7-times-1783897411036",
      "source": "AI D-A-M-N / MiniMax",
      "category": "funding",
      "tags": [
        "MiniMax",
        "160亿港元",
        "20亿美元",
        "超额认购7倍",
        "港股IPO",
        "AI基础设施",
        "中国大模型"
      ],
      "heat": 4,
      "date": "2026-11-02"
    },
    {
      "id": "8",
      "title": "Anthropic预热Claude Mythos 5.5：继Opus 5.5后新旗舰传闻浮出",
      "summary": "TestingCatalog 11-1：Anthropic准备发布Claude Mythos 5.5模型，页面已出现对Claude Mythos 5.5的引用；与9月22日发布的Opus 5.5（agentic coding领先、成本比Opus 5低40%）形成新旗舰矩阵。",
      "detail": "据TestingCatalog 11月1日tag页报道，Anthropic准备发布Claude Mythos 5.5模型——其页面已出现对Claude Mythos 5.5的引用，但官方尚未正式发布。当前Anthropic旗舰矩阵：Claude Opus 5.5（9月22日发布，agentic coding和知识工作领先，典型工作负载成本比Opus 5低40%；10月15日Fast mode出研究预览不再需要beta header）、Claude Haiku 5.5（最快最小模型）。Mythos命名（神谱）若属实，将是Anthropic首次跳出Opus/Sonnet/Haiku星座/诗歌命名体系，引入全新档位代号。结合11月1日Claude Ultra订阅改版、11月12日Usage Policy生效、10月26日S-1提交，Anthropic正在IPO前密集刷新产品组合。",
      "url": "https://www.testingcatalog.com/tag/ai/",
      "source": "TestingCatalog / Anthropic",
      "category": "product_release",
      "tags": [
        "Anthropic",
        "Claude Mythos 5.5",
        "新模型传闻",
        "Opus 5.5",
        "S-1"
      ],
      "heat": 4,
      "date": "2026-11-02"
    },
    {
      "id": "9",
      "title": "OpenAI中期选举后发动公关战：把数据中心重新包装为「AI算力园区」",
      "summary": "IT之家 11-2：OpenAI拟在中期选举后加强公众沟通，计划制定AI发展速度限制、推动美国参与全球标准制定，并通过「AI算力园区」新说法重塑数据中心形象；此前亚马逊和微软已承诺不再用保密协议推进相关项目。",
      "detail": "据IT之家微博11月2日消息，OpenAI计划在中期选举后加强公众沟通，发起新一轮公关宣传。具体动作包括：(1)制定AI发展速度限制（self-imposed speed limits）；(2)推动美国参与全球AI标准制定；(3)通过「AI算力园区」（AI Compute Campus）这一新说法重塑数据中心在公众中的形象——此前数据中心因占地、用水、输电争议在地方社区遭遇强烈反对。报道指出，此前亚马逊和微软已承诺不再用保密协议（NDA）推进相关项目，行业整体开始转向更透明的社区沟通。这一公关战与OpenAI同期砍融资目标（$300亿→$200亿）、GPT-6.2 Astra灰度泄露形成对照——一级市场遇冷的同时，公司也在重新校准公众叙事。",
      "url": "https://m.weibo.cn/detail/5360699842232759",
      "source": "IT之家",
      "category": "community_hot",
      "tags": [
        "OpenAI",
        "公关战",
        "AI算力园区",
        "数据中心",
        "中期选举",
        "全球标准",
        "NDA"
      ],
      "heat": 4,
      "date": "2026-11-02"
    },
    {
      "id": "10",
      "title": "arXiv 2610.39620：让AI自己提研究问题——自主研究Agent全流程实验",
      "summary": "arXiv 10-29：论文研究让AI自行提出研究问题，每次运行都公开报告；给现成编码Agent一份指令文档和两个技能——一个用于从近期技术发散到其他领域问题、筛选已知失败模式并获取另一Agent批评；另一个用于执行。",
      "detail": "据arXiv 2610.39620《Letting AI Formulate the Research Question: Autonomous Research Agents》（10月29日提交），作者系统研究让AI自己提出研究问题本身这一实验，并公开报告每一次运行结果。系统设计：给一个现成编码Agent一份指令文档和两个技能——技能A用于formulating the question，让Agent从近期技术发散到其他领域问题，筛选候选问题中已知的失败模式，并从另一个不同Agent获取批评；技能B用于执行研究。这一工作延续了10月26日Infinity Machine（三循环自改进研究Agent）、10月27日Skill∞（递归自改进元技能）、10月31日The Trinity三角色框架的研究主线——学界正在从「AI帮人做研究」走向「AI自己决定研究什么」，研究选题这一 traditionally 人类科学家的核心职责开始被自动化。",
      "url": "https://arxiv.org/pdf/2610.39620",
      "source": "arXiv",
      "category": "research_paper",
      "tags": [
        "自主研究Agent",
        "AI自提问题",
        "arXiv",
        "2610.39620",
        "编码Agent",
        "元研究"
      ],
      "heat": 3,
      "date": "2026-11-02"
    },
    {
      "id": "11",
      "title": "arXiv S-Agent 2.0：给通用编码Agent加CLI感知工具包做空间推理",
      "summary": "arXiv 10-20（trending #10）：S-Agent 2.0给现成通用编码Agent配上命令行感知工具包，界面设计围绕一个原则——帮助VLM闭合证据环：获取场景证据、推理、再获取下一条证据；把空间推理从视觉模型内嵌能力外置为工具循环。",
      "detail": "据arXiv 2610.28354《S-Agent 2.0: Spatial Reasoning with a General Coding Agent》（10月20日提交，alphaXiv trending #10），作者提出S-Agent 2.0——一个空间推理Agent，把一个现成通用编码Agent配上命令行感知工具包。界面设计围绕单一原则：帮助视觉语言模型闭合证据环——获取场景证据、推理、再获取下一条证据。S-Agent 2.0把空间推理从VLM内嵌能力外置为一个工具调用循环，让编码Agent（原本擅长文本/代码）通过反复调用CLI感知工具获得场景几何信息。这一思路与10月31日Apple公布的8B UI Agent在线RL管线形成互补——端侧小模型通过工具循环而非更大模型来完成复杂空间任务。",
      "url": "https://www.alphaxiv.org/abs/2610.28354",
      "source": "arXiv / alphaXiv",
      "category": "research_paper",
      "tags": [
        "S-Agent 2.0",
        "空间推理",
        "编码Agent",
        "CLI工具包",
        "VLM证据环",
        "arXiv"
      ],
      "heat": 3,
      "date": "2026-11-02"
    },
    {
      "id": "12",
      "title": "Hermes Agent（Nous Research）GitHub星达25.9万：2026增长最快开源自托管Agent",
      "summary": "Nous Research 2月发布、MIT协议：自托管自主AI Agent，跨会话持久记忆、cron调度离线触发、技能系统自动保存可复用流程；47个内置工具，CLI/Telegram/Discord/邮件多通道；11月1日GitHub星259,257，社区Web UI另19.2k星。",
      "detail": "据Hermes Atlas指南、AI Wiki、Hermes Agent官网11月1日数据，Nous Research于2026年2月25日发布的开源自主AI Agent Hermes Agent，截至11月1日GitHub星已达259,257，是2026年增长最快的开源Agent项目。MIT协议，完全开源可自审；可跑在笔记本或VPS上，跨会话持久记忆，cron调度可在用户离线时触发任务，技能系统自动保存可复用流程。支持Linux/macOS/WSL2，47个内置工具；通过CLI、Telegram、Discord、邮件等多个消息通道对话；数据全部留在用户机器，无遥测、无追踪、无云锁定。社区另建Web UI（GitHub 19.2k星，非官方）。与10月31日DeepSeek Super-agent开源、Replica原型工具、Mika Android后台助手形成10月底-11月初开源Agent矩阵——自托管+持久记忆成为新一波开源Agent的标配。",
      "url": "https://hermesatlas.com/guide",
      "source": "Nous Research / Hermes Atlas / AI Wiki",
      "category": "opensource",
      "tags": [
        "Hermes Agent",
        "Nous Research",
        "开源Agent",
        "MIT",
        "自托管",
        "持久记忆",
        "cron",
        "25.9万星"
      ],
      "heat": 3,
      "date": "2026-11-02"
    },
    {
      "id": "13",
      "title": "zhayujie/CowAgent：开源个人AI助手与Agent Harness，登上GitHub AI工具趋势#2",
      "summary": "GHTrending 10月底：zhayujie/CowAgent登上GitHub AI工具趋势榜第2名，Python开源个人AI助手与Agent Harness——规划任务、运行工具，是继Hermes Agent后又一个本土背景开源个人Agent项目。",
      "detail": "据GHTrending 10月28日更新的AI工具趋势榜，zhayujie/CowAgent以Python实现开源个人AI助手与Agent Harness，定位「规划任务、运行工具」，登上榜单第2名。这是继10月31日独立开发者王赞开源Mika Android后台助手后，又一个华人开发者背景的开源个人Agent项目——与Hermes Agent（Nous Research）走相似路线：把任务规划、工具调用、长期记忆打包成自托管Harness，让用户在自己机器上跑个人AI助手。同期上榜的还有ToolJet/ToolJet（开源企业应用生成平台，支持Claude Code/Codex/Cursor over MCP）。",
      "url": "https://www.ghtrending.com/ai-tools",
      "source": "GHTrending / GitHub",
      "category": "opensource",
      "tags": [
        "CowAgent",
        "zhayujie",
        "开源",
        "个人AI助手",
        "Agent Harness",
        "Python",
        "GitHub趋势"
      ],
      "heat": 3,
      "date": "2026-11-02"
    },
    {
      "id": "14",
      "title": "Quad四国（美日印澳）推出8500万美元可信AI计划，经Quad AI Accelerator渠道投放",
      "summary": "Industries News 11-1：美国务卿Rubio、印度外长苏杰生、日本外相-motegi、澳外长黄英贤出席Quad外长会，联合声明宣布8500万美元可信AI援助，通过Quad AI Accelerator等合作框架投放；美方另承诺1000万美元用于印度矿产回收。",
      "detail": "据Industries News.Net 11月1日报道，美国、日本、印度、澳大利亚Quad四国在最新外长会后发布联合声明，宣布启动一项8500万美元的「可信AI」援助计划。出席会议的包括美国国务卿Marco Rubio、印度外长S·Jaishankar、日本外相Toshimitsu Motegi、澳大利亚外长Penny Wong。根据联合声明，四国计划通过Quad AI Accelerator等合作框架渠道投放这笔AI援助，强调AI治理与技术标准协同；美方另承诺1000万美元用于印度矿产回收项目。这是继美国白宫6月EO《Promoting Advanced AI Innovation and Security》后，西方阵营在印太地区AI外交的具体落地——把AI援助与供应链（矿产回收）捆绑，与中国「一带一路」AI合作形成对标。",
      "url": "https://shipping.industriesnews.net/news/279406125/quad-unveils-85-million-trusted-ai-initiative-us-vows-10-million-for-india-minerals-recycling",
      "source": "Industries News.Net / Quad联合声明",
      "category": "regulation",
      "tags": [
        "Quad",
        "美日印澳",
        "可信AI",
        "8500万美元",
        "AI外交",
        "Quad AI Accelerator",
        "印太"
      ],
      "heat": 3,
      "date": "2026-11-02"
    },
    {
      "id": "15",
      "title": "Dynamo推出Kubernetes分布式推理新基建：优化云上推理模型生产环境",
      "summary": "eguweb 11-1：Dynamo发布推理型AI模型的云生产效率优化平台，基于Kubernetes分布式推理架构；同期AWS Bedrock推出成本控制与多云部署能力，推理基础设施进入精细化运营阶段。",
      "detail": "据日本eguweb 11月1日报道，Dynamo推出一套基于Kubernetes的分布式推理平台，目标是把推理型AI模型的云上生产环境效率大幅提升——把推理调度、GPU利用率、多租户隔离、自动扩缩容打包成K8s原生方案。同期AWS Bedrock推出成本控制与多云部署能力，让企业在Bedrock上跑模型时可以更精细地按项目/团队分摊成本，并跨云部署。这两个动作标志着AI推理基础设施从「能跑」进入「精细化运营」阶段——随着10月底Baseten估值300亿美元、趋境科技13亿B轮、DeepSeek开源DeepInfer推理引擎，推理层成为2026 Q4 AI Infra最热赛道。",
      "url": "https://eguweb.jp/ai/81679/",
      "source": "eguweb / Dynamo / AWS",
      "category": "product_release",
      "tags": [
        "Dynamo",
        "Kubernetes",
        "分布式推理",
        "AI Infra",
        "Bedrock",
        "成本控制",
        "多云"
      ],
      "heat": 3,
      "date": "2026-11-02"
    },
    {
      "id": "16",
      "title": "AI Token服务商B轮融资超13亿元，新浪投融周报盘点本周AI融资",
      "summary": "新浪财经投融周报 11-1：一家AI Token服务商完成B轮超13亿元；同期深圳超球面科技完成数亿元天使轮（君联/中科创星/商汤国香/华山/庚辛FA）；超进化智能完成数亿元天使轮（蓝驰领投，联想之星/商汤国香跟投）。",
      "detail": "据新浪财经11月1日《一家AI Token服务商，B轮融资超13亿丨投融周报》，本周AI赛道融资焦点：一家AI Token服务商完成B轮融资超13亿元（Token即模型调用量计费，是AI推理商业化的核心中间层）。其他焦点：深圳超球面科技完成数亿元天使轮，由君联资本、某超一线美元基金、中科创星、商汤国香资本、华山资本WestSummit、庚辛资本中国共同投资，庚辛资本中国担任独家兼长期战略财务顾问；超进化智能宣布完成数亿元人民币天使轮，由蓝驰创投领投，联想之星、商汤国香资本跟投。一周内两家天使轮都有商汤国香资本出现，显示商汤系在早期AI项目上的密集布局。",
      "url": "https://finance.sina.com.cn/roll/2026-11-01/doc-inixeyiz3155017.shtml",
      "source": "新浪财经 / 投融周报",
      "category": "funding",
      "tags": [
        "AI Token",
        "B轮13亿",
        "超球面科技",
        "超进化智能",
        "君联",
        "蓝驰",
        "商汤国香",
        "天使轮"
      ],
      "heat": 3,
      "date": "2026-11-02"
    },
    {
      "id": "17",
      "title": "深圳超球面科技完成数亿元天使轮：君联/中科创星/商汤国香/华山联合投资",
      "summary": "新浪投融周报 11-1：深圳超球面科技完成数亿元天使轮，投资方包括君联资本、某超一线美元基金、中科创星、商汤国香资本、华山资本WestSummit Capital、庚辛资本中国；庚辛资本中国担任独家兼长期战略财务顾问。",
      "detail": "据新浪财经11月1日投融周报，深圳超球面科技有限公司完成数亿元天使轮融资。本轮投资方阵容豪华：君联资本、某超一线美元基金、中科创星、商汤国香资本、华山资本WestSummit Capital、庚辛资本中国共同投资，庚辛资本中国担任独家兼长期战略财务顾问。超球面科技方向未在通稿中明确披露，但「超球面」命名与非欧几何/高维空间相关，市场推测可能与具身智能或3D视觉基础模型有关。这是10月底-11月初北京/深圳早期AI项目密集融资的代表——国资金（中科创星）+市场化VC（君联/蓝驰）+产业CVC（商汤国香）+美元基金的组合已成标配。",
      "url": "https://finance.sina.com.cn/roll/2026-11-01/doc-inixeyiz3155017.shtml",
      "source": "新浪财经",
      "category": "funding",
      "tags": [
        "超球面科技",
        "深圳",
        "天使轮",
        "君联资本",
        "中科创星",
        "商汤国香",
        "华山资本",
        "庚辛"
      ],
      "heat": 3,
      "date": "2026-11-02"
    },
    {
      "id": "18",
      "title": "超进化智能完成数亿元天使轮：蓝驰创投领投，联想之星/商汤国香跟投",
      "summary": "新浪投融周报 11-1：超进化智能宣布完成数亿元人民币天使轮融资，由蓝驰创投领投，联想之星、商汤国香资本等跟投；方向未在通稿披露。",
      "detail": "据新浪财经11月1日投融周报，超进化智能宣布完成数亿元人民币天使轮融资，由蓝驰创投领投，联想之星、商汤国香资本等跟投。「超进化」命名与AI自我进化/递归改进方向呼应——结合10月底arXiv密集出现的Infinity Machine、Skill∞、The Trinity等自改进Agent论文，市场推测该公司可能聚焦自改进Agent或世界模型方向。与同周报中深圳超球面科技天使轮一起，构成本周早期AI项目双响炮。",
      "url": "https://finance.sina.com.cn/roll/2026-11-01/doc-inixeyiz3155017.shtml",
      "source": "新浪财经",
      "category": "funding",
      "tags": [
        "超进化智能",
        "天使轮",
        "蓝驰创投",
        "联想之星",
        "商汤国香",
        "自改进Agent"
      ],
      "heat": 3,
      "date": "2026-11-02"
    },
    {
      "id": "19",
      "title": "arXiv EvoBrowseComp：400英文+400中文无污染搜索Agent基准，三Agent协作实时爬取",
      "summary": "arXiv：EvoBrowseComp是一个不断演化的搜索Agent基准，含400英文+400中文无污染复杂问题，通过实时Web遍历合成；三Agent协作框架——QA合成Agent从实时网取新知识合成问答对、信息过滤Agent按可信度/流行度过滤阻断参数捷径、第三个Agent负责基准演化。",
      "detail": "据arXiv 2606.13120《EvoBrowseComp: Benchmarking Search Agents on Evolving Knowledge》，作者提出EvoBrowseComp——一个不断演化的搜索Agent基准，包含400个英文和400个中文无污染复杂问题，全部通过实时Web遍历合成。为收集这些问题，作者设计三Agent协作框架：(1) QA合成Agent从实时Web获取新鲜知识来合成问答对；(2) 信息过滤Agent按可信度和流行度过滤检索到的知识，阻断参数捷径（即模型从训练记忆中直接答出而非真的搜索）；(3) 第三个Agent负责基准随时间演化。这一基准解决了传统搜索/浏览Agent测试集「一经发布就被模型污染」的老问题——中英双语对中国搜索Agent（如秘塔、天工、Kimi探索版）也提供了公平评测。",
      "url": "https://arxiv.org/pdf/2606.13120",
      "source": "arXiv",
      "category": "research_paper",
      "tags": [
        "EvoBrowseComp",
        "搜索Agent",
        "基准",
        "中英双语",
        "无污染",
        "实时爬取",
        "三Agent框架",
        "arXiv"
      ],
      "heat": 3,
      "date": "2026-11-02"
    },
    {
      "id": "20",
      "title": "俄媒：DeepSeek为Super-agent项目投入1000亿人民币（约150亿美元），明年计划IPO",
      "summary": "Bzzz.News 11-1：DeepSeek为自主代码Super-agent项目分配约1000亿人民币（约150亿美元）研发资金，是中国最大规模AI项目之一；计划明年在公开市场首次发行股票。这是10月31日Super-agent开源背后的资金背景。",
      "detail": "据俄罗斯Bzzz.News 11月1日援引俄媒Vesti报道，DeepSeek为其自主代码Super-agent项目分配了约1000亿人民币（约合150亿美元）研发资金，规模成为中国最大AI项目之一；与项目配套，DeepSeek计划明年在公开市场进行首次公开募股。这是10月31日DeepSeek Harness团队开源Super-agent架构（Router+Worker两层，GitHub deepseek-ai/dsh-superagent-prototype）背后的资金背景——此前已知DeepSeek于10月30日完成1055亿人民币B轮融资（估值860亿美元），创始人梁文锋个人另投资机器人公司Winverse AI。结合10月30日Moonshot Kimi Pre-IPO轮500亿估值、10月31日可灵AI选定港股IPO承销、11月1日MiniMax 160亿港元关账，中国头部大模型公司2027年IPO潮正式成型。",
      "url": "https://bzzz.news/news/2026/11/1/21545",
      "source": "Bzzz.News / Vesti",
      "category": "funding",
      "tags": [
        "DeepSeek",
        "Super-agent",
        "1000亿人民币",
        "150亿美元",
        "2027 IPO",
        "中国大模型"
      ],
      "heat": 3,
      "date": "2026-11-02"
    }
  ]
};
