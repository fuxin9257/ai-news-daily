window.NEWS_DATA = window.NEWS_DATA || {};
window.NEWS_DATA['2026-10-31'] = {
  "date": "2026-10-31",
  "generated_at": "2026-10-31T07:11:17.823023+08:00",
  "time_window": "past_24h",
  "total_count": 20,
  "categories": {
    "product_release": 3,
    "research_paper": 4,
    "funding": 5,
    "opensource": 2,
    "regulation": 2,
    "community_hot": 4
  },
  "items": [
    {
      "id": "1",
      "title": "OpenAI/Google/Microsoft/Anthropic联合支持统一robots.txt AI训练opt-out：一行代码退出四大厂",
      "summary": "OpenAI官方博客/MadRobot/FourWeekMBA 10-30：四大厂同日宣布尊重robots.txt中新policy token；Anthropic已实施，OpenAI数月内，Google/Microsoft 2027年初生效。",
      "detail": "据OpenAI官方博客《Making it easier for websites to express AI training preferences》、MadRobot、AI Parabellum、FourWeekMBA 10月30日报道，OpenAI、Google、Microsoft、Anthropic同日宣布支持一个共享的robots.txt policy token——网站运营者只需在robots.txt中添加一行新声明，即可同时向四家AI厂商表达「不要用我的内容训练基础模型」的意愿，不再需要逐一封锁每家爬虫。该信号来自Anthropic研究员Kevin Kelley撰写的Internet-Draft。四家实施节奏不同：Anthropic称已开始支持其爬虫；OpenAI称未来数月内为基础生成式AI训练尊重该信号，同时保留既有爬虫规则；Google称将把该opt-out视同站点已封锁Google-Extended（除非站点直接设置Google-Extended），2027年初生效；Microsoft承诺2027年2月1日生效。这是AI训练数据版权争议爆发多年后，头部厂商首次在「自愿opt-out」标准上达成一致，对新闻出版、版权方与AI训练数据产业格局有深远影响。",
      "url": "https://openai.com/index/helping-websites-express-ai-training-preferences/",
      "source": "OpenAI / MadRobot / AI Parabellum",
      "category": "regulation",
      "tags": [
        "robots.txt",
        "AI训练opt-out",
        "OpenAI",
        "Google",
        "Microsoft",
        "Anthropic",
        "版权",
        "数据治理"
      ],
      "heat": 5,
      "date": "2026-10-31"
    },
    {
      "id": "2",
      "title": "官方Claude Code VS Code扩展2.1.313被植入SSH后门：最多5000台开发者机器受影响",
      "summary": "BleepingComputer/The Hacker News/StepSecurity/Corgea/Cursor 10-29~30：恶意版本在Cursor Marketplace分发11小时，持久化SSH后门；Anthropic 10-30发布2.1.314修复。",
      "detail": "据BleepingComputer、The Hacker News、StepSecurity、Corgea、Cursor官方安全公告10月29-30日报道，官方Claude Code VS Code扩展anthropic.claude-code的2.1.313版本被植入木马（trojanized），在Cursor扩展市场于10月29日09:27至20:35约11小时窗口内分发，最多在5000台开发者机器上种植持久化SSH后门。StepSecurity分析称，恶意版本在开发者机器上持久化SSH访问通道，攻击者可远程执行命令、窃取代码与凭证。Cursor安全公告披露其与托管商合作将恶意C2服务器下线以阻断攻击；Anthropic于10月30日发布2.1.314版本修复，并同步到Open VSX与VS Code Marketplace。Corgea建议开发者检查是否安装/更新到2.1.313，立即升级并轮换SSH密钥、审查authorized_keys。这是继10月23日OpenAI Agents关闭安全监控、php2shell事件后，AI编码工具供应链安全的又一重大警钟——AI编码扩展本身正在成为攻击面。",
      "url": "https://www.bleepingcomputer.com/news/security/malicious-claude-code-extension-on-cursor-planted-ssh-backdoors/",
      "source": "BleepingComputer / The Hacker News / StepSecurity / Cursor",
      "category": "community_hot",
      "tags": [
        "Claude Code",
        "SSH后门",
        "供应链攻击",
        "Cursor Marketplace",
        "VS Code扩展",
        "AI安全",
        "Corgea"
      ],
      "heat": 5,
      "date": "2026-10-31"
    },
    {
      "id": "3",
      "title": "DeepSeek二轮融资1055亿元（约158亿美元）：估值6155亿，近30家投资方，国资占比从2%升至27%",
      "summary": "The Information/IT之家/新浪财经 10-30：DeepSeek二轮募集1055亿人民币（$158亿），投后估值6155亿（$860亿）；腾讯/宁德时代/长鑫存储/中芯国际/美团/vivo参投，国资占27%。",
      "detail": "据The Information、IT之家、新浪财经10月30日报道，DeepSeek第二轮融资具体细节曝光：本轮共募集1055亿元人民币（约158亿美元），吸引近30家投资者，投后估值6155亿元人民币（约860亿美元）。投资方阵容包括腾讯、宁德时代、长鑫存储、中芯国际（中芯聚源）、美团、吉利控股、IDG资本、君联资本、CPE源峰、石溪资本、Monolith砺思资本、拾象科技等；vivo是唯一参与的手机厂商，出资10-30亿元。一个关键结构变化：国资出资占比约27%，较首轮融资的2%大幅提升——这意味着DeepSeek从「民间明星创业公司」进一步带上国家战略资本色彩。天眼查显示DeepSeek已于2026年完成B轮，交易金额1055亿。这轮融资发生在10月21日美国对DeepSeek限制、字节/阿里/腾讯300万张英伟达5500备货的背景下，是中国大模型赛道迄今最大单轮融资之一。",
      "url": "https://www.ithome.com/1/020/251.htm",
      "source": "The Information / IT之家 / 新浪财经",
      "category": "funding",
      "tags": [
        "DeepSeek",
        "1055亿",
        "二轮融资",
        "860亿估值",
        "腾讯",
        "宁德时代",
        "vivo",
        "国资27%"
      ],
      "heat": 5,
      "date": "2026-10-31"
    },
    {
      "id": "4",
      "title": "Google发布Gemini 4 Carbon：Artificial Analysis智能指数59分登顶，力压Claude Opus 5.5与GPT-6 Astra",
      "summary": "Google官方博客/电子工程专辑/SHAttered 10-28：Gemini 4 Carbon发布，第三方Artificial Analysis Index v5.0以59分排名第一；SEC-bench Pro 88.2%，主打网络安全与长程任务。",
      "detail": "据Google官方博客The Keyword、Google DeepMind、电子工程专辑、SHAttered 10月28日报道，Google DeepMind发布新一代旗舰模型Gemini 4 Carbon——仅在Gemini 4 Argon（10月13日）两周之后。在第三方评测机构Artificial Analysis最新公布的Intelligence Index v5.0榜单中，Carbon以59分排名第一，超过Anthropic Claude Opus 5.5（58分）与OpenAI GPT-6 Astra，重夺全球大模型榜首。Google称Carbon是其「最强模型」，在网络安全与长程horizon任务上达到SOTA；SHAttered数据显示其SEC-bench Pro得分88.2%。这是Google在10月模型密集发布窗口（Claude Opus 5.5、GPT-6 Sol/Luna、GPT-6.1 Terra、Mistral Large 4）中的一次反攻。微博评论指出：技术层面Carbon交出亮眼答卷，但资本市场对AI巨额投入回报的质疑并未因此消散——Alphabet同期Q3 Search收入低于预期。",
      "url": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-carbon/",
      "source": "Google The Keyword / Artificial Analysis / SHAttered",
      "category": "product_release",
      "tags": [
        "Gemini 4 Carbon",
        "Google DeepMind",
        "Artificial Analysis",
        "59分",
        "网络安全",
        "SEC-bench",
        "SOTA"
      ],
      "heat": 5,
      "date": "2026-10-31"
    },
    {
      "id": "5",
      "title": "AI推理基础设施Baseten以约300亿美元估值推进新融资：分260亿/300亿两档，Sands Capital领投",
      "summary": "Bloomberg/FourWeekMBA/AInvest 10-30：Baseten拟融约20亿美元，估值从6月的130亿翻倍至约300亿；分两档定价（$26B/$30B），Sands Capital领投。",
      "detail": "据Bloomberg 10月30日报道（FourWeekMBA、AInvest、Headliner转载），AI推理基础设施公司Baseten正在推进新一轮约20亿美元融资，估值将较6月的130亿美元翻倍至约300亿美元。交易结构采用两档定价（two tranches）：第一档估值260亿美元，第二档300亿美元；现有投资方Sands Capital拟领投。Baseten 6月22日刚完成15亿美元Series F（Altimeter/Conviction/Spark领投，Sands/Wellington联合领投），估值130亿；9月与OpenAI达成合作（通过Codex与Responses API提供开放模型推理），并与NVIDIA OpenShell/Blaxel合作安全Agentic基础设施。neuealchemy评论称：300亿估值意味着「推理与编排正被定价为核心云原语，而非开发工具」——基础托管将加速商品化，竞争压力将转向工作流、治理与垂直深度。这是继Tenstorrent 15亿E轮（62亿估值）、Daytona 6000万B轮之后，AI Infra赛道Q4又一重量级融资。",
      "url": "https://fourweekmba.com/ai-baseten-set-for-a-30-billion-valuation-2-3x-its-june-mark/",
      "source": "Bloomberg / FourWeekMBA / AInvest",
      "category": "funding",
      "tags": [
        "Baseten",
        "300亿估值",
        "AI推理",
        "两档定价",
        "Sands Capital",
        "AI Infra",
        "OpenAI合作"
      ],
      "heat": 4,
      "date": "2026-10-31"
    },
    {
      "id": "6",
      "title": "快手可灵AI完成198亿元（约29.8亿美元）增资交割：估值180亿美元",
      "summary": "每经/SHAttered/网易 10-30晚：快手视频生成大模型可灵AI宣布本轮增资全部交割，投资人已支付认购款约198亿元（$29.8亿）；估值约$180亿，覆盖国家级产业基金与BAT。",
      "detail": "据每日经济新闻、网易、SHAttered 10月30日晚报道，快手发布公告称旗下视频生成大模型可灵AI（北京可灵）已完成本轮增资的全部交割，所有投资人已就其认购金额支付增资款，认购事项已交割。交割后所有投资者支付的增资款总额约198亿元人民币，约合29.8亿美元；SHAttered援引Reuters数据称估值约180亿美元。本轮融资覆盖国家级及地方产业基金、BAT等相关科技公司。这是中国视频生成AI赛道迄今最大单笔融资，与DeepSeek 1055亿、趋境科技13亿B轮共同构成10月底中国AI创业公司融资密集窗口。可灵AI是快手面向创作者与企业客户的视频生成产品，直接对标OpenAI Sora、Google Veo、Runway等。",
      "url": "https://shattered.io/kuaishou-kling-ai-2-98-billion-funding-round-18b-valuation-2026/",
      "source": "每日经济新闻 / Reuters / SHAttered",
      "category": "funding",
      "tags": [
        "快手",
        "可灵AI",
        "198亿",
        "29.8亿美元",
        "视频生成",
        "180亿估值",
        "Sora"
      ],
      "heat": 4,
      "date": "2026-10-31"
    },
    {
      "id": "7",
      "title": "Reddit CEO炮轰Google AI Mode：每周减少超100万引荐流量，Reddit股价暴跌",
      "summary": "ITECH POST/The Verge/Orange 10-30：Reddit财报电话会上CEO称Google AI Mode使每周搜索引荐减少100万+；Reddit仍是Google高频搜索词，但Google从Reddit取数据而不导流，股价承压。",
      "detail": "据ITECH POST、The Verge、Orange、TEN Brief 10月30日报道，Reddit在Q3财报电话会上，CEO Steve Huffman公开批评Google AI Mode：10月以来Reddit来自Google搜索的引荐流量平均每周减少超过100万次。他指出一个矛盾现象：Reddit仍然是Google搜索中的高频词，Google也仍像以前一样大量抓取Reddit内容——但AI Mode在搜索结果页直接给出AI生成摘要，用户不再点击进入Reddit。Reddit股价因此承压。这一事件与Alphabet同期Q3 Search收入633.5亿美元（同比+12%但低于市场预期648.5亿）、YouTube广告112亿（同比+9%略低于预期）形成对照。Google管理层在财报会上称搜索查询量同比增速达五年来最高，商业查询也在增长，但AI Mode与AI Overview带来的广告收入目前仍低于传统搜索。这是「AI搜索 vs 内容网站流量分配」矛盾的最新标志性事件。",
      "url": "https://www.itechpost.com/articles/237687/20261030/reddit-ceo-slams-google-ai-mode-over-traffic-decline-lost-search-referrals.htm",
      "source": "ITECH POST / The Verge / Orange",
      "category": "community_hot",
      "tags": [
        "Reddit",
        "Google AI Mode",
        "流量分配",
        "AI搜索",
        "财报",
        "内容网站",
        "股价"
      ],
      "heat": 4,
      "date": "2026-10-31"
    },
    {
      "id": "8",
      "title": "OpenAI发布GPT-6.1 Terra：$1/M输入、$5/M输出，主打规模化computer use",
      "summary": "OpenAI官方/IT时代网/通信世界 10-26：GPT-6.1 Terra发布，快速高效模型，强图像分析与计算机操作能力；定价每百万输入$1、输出$5，已在ChatGPT Work和Codex推出。",
      "detail": "据OpenAI官方Announcement、OpenAI Help Center release notes、IT时代网、通信世界10月26-27日报道，OpenAI发布GPT-6.1 Terra——GPT-6系列最新模型，定位「快速且高效的高量级专业工作」，强图像分析与computer use能力。在Agents' Last Exam（专业任务benchmark，含将建筑图纸转3D模型）上测量其computer use能力。定价每百万输入token 1美元、输出5美元——相较上一代GPT-5.6 Terra明显降价。该模型已在ChatGPT Work和Codex中推出，擅长起草方案、解读工程图纸、填写表单、剪辑视频等「填充工作日的沟通与操作类任务」。这是OpenAI在10月模型密集发布窗口（9月22日GPT-6 Sol/Luna、10月7日Haiku 5.5、10月26日GPT-6.1 Terra）中的又一次产品下沉——把旗舰能力以更低价格推向高频日常任务，与Google Gemini 4 Carbon、Claude Opus 5.5形成三档价位竞争。",
      "url": "https://openai.com/index/gpt-6-1-terra/",
      "source": "OpenAI / IT时代网 / 通信世界",
      "category": "product_release",
      "tags": [
        "GPT-6.1 Terra",
        "OpenAI",
        "computer use",
        "$1/M",
        "Codex",
        "ChatGPT Work",
        "图像理解"
      ],
      "heat": 4,
      "date": "2026-10-31"
    },
    {
      "id": "9",
      "title": "Mistral开源Mistral Large 4「Le Chonk」：1万亿参数MoE，可自托管，欧洲最强开源",
      "summary": "DEV/Selectel/Anadolu 10-29：法国Mistral AI开放Mistral Large 4全部权重，内部昵称「Le Chonk（胖墩）」；1万亿参数MoE架构，依托4000块NVIDIA Grace Blackwell在欧洲自有数据中心训练两个月。",
      "detail": "据DEV Community、Selectel、Anadolu Agency 10月29-30日报道，法国Mistral AI正式开放新一代模型Mistral Large 4（内部昵称「Le Chonk/胖墩」）的全部开源权重。该模型总参数量达1万亿，采用Mixture of Experts（MoE）架构以保持推理效率；Mistral称其为公司迄今最大、最强模型，并表示可与最强中国开源系统竞争。训练依托4000块NVIDIA Grace Blackwell显卡，在Mistral位于欧洲的自有数据中心历时两个月完成——这也是欧洲在AI算力主权上的标志性动作。10月6日Mistral曾宣布ML4面向开发者、网络安全负责人与政府机构开放预览；10月29日全量开源权重后，企业可自托管部署，对数据敏感的政府与金融客户尤其有吸引力。这是Mistral在与Meta Llama、中国Qwen/DeepSeek竞争开源前沿模型的最新一步。",
      "url": "https://dev.to/976905690/mistral-releases-open-weights-for-its-1-trillion-parameter-large-4-le-chonk-30mf",
      "source": "Mistral AI / DEV / Selectel",
      "category": "opensource",
      "tags": [
        "Mistral Large 4",
        "Le Chonk",
        "1万亿参数",
        "MoE",
        "开源权重",
        "自托管",
        "欧洲AI主权"
      ],
      "heat": 4,
      "date": "2026-10-31"
    },
    {
      "id": "10",
      "title": "arXiv 2610.28286：Local Work, Global Progress——多Agent协作的收敛理论",
      "summary": "arXiv 10-20：论文将协作问题求解形式化为块优化——每个Agent改进共享解的一部分，协调者检查全局目标并合并不冲突提案；证明线性收敛到误差地板。",
      "detail": "据arXiv 2610.28286（10月20日提交，cs.AI），论文《Local Work, Global Progress: A Convergence Theory of AI Agent Collaboration》为多Agent协作提供了首个严格的收敛性理论。作者将协作问题求解形式化为块优化（block optimization）：每个Agent在本地目标引导下改进共享解的一部分，同时修正自身改动对其他部分的影响；一个协调者（coordinator）检查每个提案是否违反全局目标，并合并不相互干扰的提案。论文证明：当修正项精确时，系统线性收敛到一个随修正精度消失的误差地板；相互干扰的提案在组合被检查后也可合并，并给出收敛速率。这一理论框架对当前多Agent系统（如MetaGPT、AutoGen、ChatGPT多Agent模式、OpenAI Agents SDK）从「工程拼装」走向「可证明收敛」具有基础意义——尤其在企业级长任务、代码协作、研究Agent等场景。",
      "url": "https://arxiv.org/abs/2610.28286",
      "source": "arXiv",
      "category": "research_paper",
      "tags": [
        "多Agent协作",
        "收敛理论",
        "块优化",
        "arXiv",
        "协调者"
      ],
      "heat": 3,
      "date": "2026-10-31"
    },
    {
      "id": "11",
      "title": "arXiv 2610.01939：GPT-6 Astra机器人Agent成功率+14%但token消耗减65%",
      "summary": "arXiv 10月论文：用GPT-6 Astra high reasoning effort做planner，在自有最小agent loop中以Python代码行动，预算100次LLM调用；相比baseline成功率提升14%而token减少65%。",
      "detail": "据arXiv 2610.01939v2《Fewer Tokens, Better Action: GPT-6 Astra Robot Agents with 14% Higher Success Rate but 65% Fewer Tokens》，研究者在机器人操作（robot agents）场景中，以GPT-6 Astra high reasoning effort作为planner（权重冻结、无demonstrations），在OpenAI兼容端点外自建一个最小agent loop，让模型只通过Python代码行动，每episode预算100次LLM调用。结果显示：相比baseline，任务成功率提升14%，而总token消耗减少65%。这一工作的意义在于：通过「让模型写代码而非直接输出动作」+「最小循环而非复杂框架」，可以在不损失甚至提升性能的前提下大幅压缩推理成本——与10月23日HybridAgent（latent+文本混合token减54.7%）、PORA（学习何时多推理值得）共同构成10月「Agent效率」研究主线，对机器人/物理AI场景的成本落地有直接价值。",
      "url": "https://arxiv.org/pdf/2610.01939v2",
      "source": "arXiv",
      "category": "research_paper",
      "tags": [
        "GPT-6 Astra",
        "机器人Agent",
        "token效率",
        "Python行动",
        "最小agent loop",
        "arXiv"
      ],
      "heat": 3,
      "date": "2026-10-31"
    },
    {
      "id": "12",
      "title": "趋境科技完成超13亿元B轮融资：2026年累计融资24亿元，商汤跟投",
      "summary": "中关村在线 10-26：趋境科技完成B轮超13亿元，浙财资本/萧山资本/工银投资联合领投，商汤科技跟投；2026年累计融资达24亿元。",
      "detail": "据中关村在线10月26日报道，趋境科技于10月26日宣布完成B轮融资，规模超过13亿元人民币。本轮由浙财资本、萧山资本及工银投资联合领投，商汤科技参与跟投，原有股东尚势资本等继续加注。至此趋境科技2026年内累计获得融资达24亿元人民币。趋境科技聚焦AI推理与系统优化（throughtput/serving方向），与Baseten（$300亿估值）、StartLux Prism开源推理引擎、DeepInfer等共同构成10月底「AI推理基础设施」融资密集赛道——在国产大模型参数规模持续扩大、推理成本成为商业化瓶颈的背景下，推理优化公司成为资本新宠。",
      "url": "https://ai.zol.com.cn/1265/12655114.html",
      "source": "中关村在线",
      "category": "funding",
      "tags": [
        "趋境科技",
        "13亿B轮",
        "AI推理",
        "商汤",
        "工银投资",
        "国产AI Infra"
      ],
      "heat": 3,
      "date": "2026-10-31"
    },
    {
      "id": "13",
      "title": "月之暗面Kimi完成F轮35亿美元：估值350亿美元，超额认购3倍提前关闭",
      "summary": "AI D-A-M-N/科技日报 10-30：Moonshot AI旗舰Kimi完成F轮35亿美元，投后估值350亿美元；需求超目标3倍，提前关闭；Pre-IPO轮也即将结束。",
      "detail": "据AI D-A-M-N援引科技日报10月30日报道，Moonshot AI（月之暗面）旗舰产品Kimi完成F轮融资，募集超过35亿美元，投后估值达350亿美元。该轮超额认购——需求超过目标3倍——因此提前关闭。上海证券报此前7月报道月之暗面F轮与Pre-IPO轮同步推进，K3大模型发布后估值快速增长。这轮融资使月之暗面与DeepSeek（860亿美元估值）、智谱、MiniMax等并列中国大模型第一梯队，也让其IPO路径进一步清晰。这是10月底中国大模型融资潮的一部分：DeepSeek 1055亿、可灵AI 198亿、趋境13亿、月之暗面35亿美元——一个月内中国AI公司融资密度创历史新高。",
      "url": "https://ai-damn.com/moonshot-ai-s-kimi-raises-3-5b-now-valued-at-35b-1785366027704",
      "source": "AI D-A-M-N / 科技日报",
      "category": "funding",
      "tags": [
        "月之暗面",
        "Kimi",
        "F轮",
        "35亿美元",
        "350亿估值",
        "Pre-IPO",
        "K3"
      ],
      "heat": 3,
      "date": "2026-10-31"
    },
    {
      "id": "14",
      "title": "苹果官宣Apple Intelligence接入阿里千问：中国区iPhone AI落地路径落定",
      "summary": "每经/网易 10-31早参：苹果宣布Apple Intelligence接入阿里巴巴通义千问；同期苹果股价周五下跌但反超英伟达登顶全球市值榜。",
      "detail": "据每日经济新闻10月31日早参（网易转载），苹果正式宣布Apple Intelligence接入阿里巴巴通义千问——这意味着中国区iPhone/iPad/Mac用户的Apple Intelligence功能将由通义千问提供大模型能力。这与此前传闻一致：苹果因中国监管与数据合规要求，选择与本地大模型厂商合作而非直接使用OpenAI。同期，苹果股价周五下跌但仍反超英伟达登顶全球公司市值榜——AI叙事虽热，市场对AI巨额投入回报的质疑也在累积。这一合作对阿里是重大背书（通义千问进入全球最大消费电子平台），对苹果是中国AI功能落地的关键拼图，也标志着全球大模型竞争从「云端API」延伸到「手机系统级集成」。",
      "url": "http://m.163.com/dy/article/LAI4UV9L0512B07B.html",
      "source": "每日经济新闻 / 网易",
      "category": "product_release",
      "tags": [
        "苹果",
        "Apple Intelligence",
        "阿里",
        "通义千问",
        "中国区",
        "系统级AI",
        "iPhone"
      ],
      "heat": 3,
      "date": "2026-10-31"
    },
    {
      "id": "15",
      "title": "OpenAI被曝运行拦截机制：对判定「风险」的网页阻止ChatGPT浏览访问",
      "summary": "TEN Brief 10-31：OpenAI正在运行一个功能，阻止ChatGPT浏览它判定为「风险」的网页；10月26日那周开始被开发者与网站主观察到。",
      "detail": "据TEN Brief 10月31日报道，OpenAI被曝正在运行一个功能：对ChatGPT浏览中判定为「风险（risky）」的网页进行拦截，阻止模型实际访问该URL。这一行为从10月26日那周开始被开发者与网站主观察到——部分网站主发现他们的站点在ChatGPT Browse中被「软封锁」，模型会声称无法访问或拒绝总结内容。报道未披露OpenAI使用的具体判定标准，但这与10月30日四大厂联合支持robots.txt opt-out形成对照：一方面OpenAI尊重网站主动声明的退出信号，另一方面也在主动用模型/规则判断哪些网页「不安全」。这引发两个问题：判定标准透明度、以及可能的过度拦截（误伤合法技术博客、安全研究站点等）。",
      "url": "https://tenbrief.com/en/2026/10/31/reddit-stock-plunge-google-ai-mode/",
      "source": "TEN Brief",
      "category": "community_hot",
      "tags": [
        "OpenAI",
        "ChatGPT Browse",
        "风险网页拦截",
        "内容审核",
        "透明度"
      ],
      "heat": 3,
      "date": "2026-10-31"
    },
    {
      "id": "16",
      "title": "Alphabet Q3财报：Search收入633.5亿低于预期，AI Mode广告收入仍偏低",
      "summary": "Alphabet财报会/微博 10-30：Google Search Q3收入633.5亿美元同比+12%但低于市场预期648.5亿；YouTube广告112亿同比+9%略低；管理层称查询量增速五年最高，但AI Mode广告收入尚低。",
      "detail": "据Alphabet投资者关系2025 Q4 Earnings Call（实际为2026 Q3财报会）、微博财经博主10月31日汇总，Google母公司Alphabet发布Q3财报：Search广告收入633.50亿美元，同比增长12%，但低于市场预期的约648.5亿美元；YouTube广告收入112.07亿美元，同比增长9%，也略低于预期。管理层在电话会上强调：搜索查询量同比增速达到五年来最高，商业查询也在增长；Gemini 3已集成到Search的AI Mode，AI Overviews也升级到Gemini 3。但承认：AI Mode与AI Overview带来的广告收入目前仍低于传统搜索结果页——这是市场对「AI搜索是否会吃掉Google核心广告生意」担忧的直接数据印证，也是Reddit CEO公开炮轰AI Mode不导流的大背景。",
      "url": "https://abc.xyz/investor/events/event-details/2026/2025-Q4-Earnings-Call-2026-Dr_C033hS6/default.aspx",
      "source": "Alphabet IR / 微博财经",
      "category": "community_hot",
      "tags": [
        "Alphabet",
        "Google财报",
        "Search广告",
        "AI Mode",
        "Gemini 3",
        "YouTube",
        "Q3"
      ],
      "heat": 3,
      "date": "2026-10-31"
    },
    {
      "id": "17",
      "title": "Meta TreeFlex：9B RL Agent把SWE-bench Verified推到54.9%",
      "summary": "FourWeekMBA 10-15：Meta AI 10月14日在arXiv发布TreeFlex框架——Agent把进度存为搜索树并自主决定下一工作分支；9B RL模型SWE-bench Verified达54.9%（vs FoldAgent 43.3%）。",
      "detail": "据FourWeekMBA 10月15日报道，Meta AI于10月14日在arXiv发布TreeFlex框架：AI Agent把任务进度保存为一棵搜索树，自主决定下一步在哪个分支上继续工作。在SWE-bench Verified上，一个仅9B参数、用强化学习训练的模型通过TreeFlex解决了54.9%的任务——相比同模型用FoldAgent方法训练的43.3%提升超过11个百分点。这一工作的意义在于：通过「搜索树+自主分支选择」的简单结构，小模型（9B）在软件工程任务上逼近甚至超过大模型（70B+）的表现，与OpenAI o1/R1类「test-time scaling」方向互补——不只是更长推理，更是更聪明的推理组织方式。这与10月23日PRIME（可验证证据接地）、Librarian Agents（主动策展）共同推动编码Agent从「能写代码」走向「会规划、会回溯、会探索」。",
      "url": "https://fourweekmba.com/ai-metas-treeflex-lifts-a-9b-agent-to-54-9-on-swe-bench/",
      "source": "FourWeekMBA / Meta AI",
      "category": "research_paper",
      "tags": [
        "Meta",
        "TreeFlex",
        "SWE-bench",
        "9B",
        "强化学习",
        "搜索树",
        "编码Agent"
      ],
      "heat": 3,
      "date": "2026-10-31"
    },
    {
      "id": "18",
      "title": "GitHub十月AI趋势：OpenClaw 39.2万星居首，Hermes Agent 25.4万星，Firecrawl 19.2万星",
      "summary": "DEV/ClawdBytes/AI D-A-M-N 10月汇总：10月开源AI焦点从「追模型」转向「Agent基础设施」；OpenClaw 39.2万星个人Agent运行时居首，NousResearch Hermes Agent 25.4万星第二，Firecrawl 19.2万星第三。",
      "detail": "据DEV Community《Trending Open Source AI Projects October 2026》、ClawdBytes、AI D-A-M-N 10月下旬汇总，10月GitHub AI趋势显示明显从「追模型」转向「Agent基础设施」：OpenClaw以392,126星领先个人助手类别，远超NousResearch Hermes Agent的254,122星；Firecrawl（Web数据抓取）以191,908星位居第三。ClawdBytes评论：这不只是原始热度对比，而是向「本地优先自动化」的转移——OpenClaw是TypeScript运行时，在用户自己OS上执行任务；Hermes Agent则聚焦随时间积累技能与上下文。AI Hippo Agent排行榜显示ECC（OSS agent framework）综合分89.2、29.2万星、30天792 commits。这一格局与10月24日wshobson/agents（4.1万星插件管道）、OpenViking（4万星上下文数据库）共同构成10月Agent基础设施层的开源爆发。",
      "url": "https://dev.to/rosgluk/trending-open-source-ai-projects-on-github-october-2026-4d42",
      "source": "DEV Community / ClawdBytes / AI Hippo",
      "category": "opensource",
      "tags": [
        "OpenClaw",
        "Hermes Agent",
        "Firecrawl",
        "GitHub Trending",
        "Agent基础设施",
        "本地优先",
        "开源"
      ],
      "heat": 3,
      "date": "2026-10-31"
    },
    {
      "id": "19",
      "title": "欧盟AI Act：欧委会2026年请求标准化组织制定高风险AI能耗与资源报告标准",
      "summary": "欧盟数字战略FAQ 10-20更新：2026年欧委会将请求欧洲标准化组织制定AI系统资源绩效报告标准，覆盖高风险AI全生命周期能耗与GPAI能效开发。",
      "detail": "据欧盟委员会数字战略官网《Navigating the AI Act》FAQ 10月20日更新，欧盟在AI Act框架下新增环境可持续性维度：2026年委员会计划请求欧洲标准化组织（ESO）制定一份标准化交付物，规范AI系统资源绩效（resource performance）的报告与文档流程——包括高风险AI系统在全生命周期中的能源与其他资源消耗减少，以及通用目的AI模型（GPAI）的能效开发。委员会还被要求就标准化交付物进展提交进度报告。这是继10月20日AI Office与成员国执法权8月2日生效、10月21日首个协调标准EN 18286（AI质量管理体系）发布之后，欧盟AI Act在环境维度的最新推进。在OpenAI/Google/Microsoft/Anthropic算力军备竞赛与Baseten 300亿估值背景下，AI能耗报告合规将成为2027年高风险AI系统合规的新增成本项。",
      "url": "https://digital-strategy.ec.europa.eu/en/faqs/navigating-ai-act",
      "source": "欧盟委员会数字战略",
      "category": "regulation",
      "tags": [
        "欧盟AI Act",
        "环境可持续性",
        "能耗报告",
        "标准化",
        "GPAI",
        "高风险AI"
      ],
      "heat": 3,
      "date": "2026-10-31"
    },
    {
      "id": "20",
      "title": "arXiv 2610.09590：情境条件思维策略——长期LLM Agent学会「何时该想什么」",
      "summary": "arXiv 10-7：论文提出情境条件思维记忆框架，把历史推理经验转成轻量策略，预测当前情境该思考什么；细节推理仍交给大模型，情境可表示时间/时空演化。",
      "detail": "据arXiv 2610.09590（10月7日提交，cs.AI），论文《Learning Situation-Conditioned Thinking Policies for Long-Term LLM Agents》指出现有Agent记忆机制主要是检索、总结或压缩过去内容，但不直接学习「在特定情境下应该激活哪类思考」，也不能从时间分散的经验中发现新的思考知识。作者提出情境条件思维记忆（situation-conditioned thinking memory）框架：把历史推理经验转化为一个轻量策略，预测在当前情境下应该思考什么，而把详细推理仍交给大语言模型；情境可表示时间或时空演化，而不仅是当前快照。这一工作与10月20日PORA（学习何时多推理值得）、10月20日Local Work Global Progress（多Agent收敛理论）共同构成10月Agent「元认知（metacognition）」研究方向——Agent不仅要会做，还要学会判断「现在该怎么想、想多久、和谁一起想」。",
      "url": "https://arxiv.org/abs/2610.09590",
      "source": "arXiv",
      "category": "research_paper",
      "tags": [
        "情境条件",
        "思维策略",
        "长期Agent",
        "记忆",
        "元认知",
        "arXiv"
      ],
      "heat": 3,
      "date": "2026-10-31"
    }
  ]
};
