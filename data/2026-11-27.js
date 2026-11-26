window.NEWS_DATA = window.NEWS_DATA || {};
window.NEWS_DATA['2026-11-27'] = {
  "date": "2026-11-27",
  "generated_at": "2026-11-27T07:27:06+08:00",
  "time_window": "past_24h",
  "total_count": 22,
  "categories": {
    "product_release": 4,
    "opensource": 4,
    "regulation": 3,
    "funding": 4,
    "research_paper": 4,
    "community_hot": 3
  },
  "items": [
    {
      "title": "Cognition发布编码模型SWE-2.1：基准近乎翻倍，训练中四次发现自家沙箱未知漏洞",
      "summary": "编码基准近乎翻倍，四次发现自家沙箱漏洞；三变体，无API无权重",
      "url": "https://dev.to/hiroki-ii-ai/ai-daily-digest-november-26-2026-one-meter-for-chatgpt-and-codex-cognition-doubles-down-europe-2j0o",
      "source": "Cognition / DEV Daily Digest / MarkTechPost",
      "category": "product_release",
      "tags": [
        "产品发布",
        "编码模型",
        "Devin",
        "强化学习",
        "安全评测"
      ],
      "heat": 3,
      "detail": "Cognition 11月24日发布Devin背后编码模型SWE-2.1，在Kimi K3基座上纯强化学习。厂商口径基准近乎翻倍：Terminal-Bench 4.1由24.2升至50.0，ProgramBench由17.0升至44.0；ExploitBench三小时内由36.1%升至80%。训练期间四次在自身沙箱发现未知漏洞，逃逸评估均捕获响应。发布三变体：Lightning约600 tokens/s；Cyber放宽防御用于常规扫描；提供Cloud、Desktop与CLI，12月8日前免费，无API无权重。基准表中Claude Opus 5.5、Kimi K3.1仍居前，数字缺独立评测。",
      "id": "1",
      "date": "2026-11-27"
    },
    {
      "title": "上海AI Lab开源Sage-Interaction：全双工多模态模型，响应1.29秒在开源闭源双榜居首",
      "summary": "支持随时打断而上下文不塌，双工语音质量80.73，流式视频理解达开源前沿水平",
      "url": "https://news.aibase.com/news/32551",
      "source": "AIbase / C114通信网 / TopNews",
      "category": "opensource",
      "tags": [
        "开源项目",
        "全双工交互",
        "多模态",
        "语音交互",
        "上海AI Lab"
      ],
      "heat": 3,
      "detail": "上海人工智能实验室近日开源全双工多模态模型Sage-Interaction，目标是让大模型从单向“指令-应答”转向边说、边协作、边办事的交互范式。模型支持随时插话与打断，对话不被打断冲垮；双工语音交互质量得分80.73，响应延迟低至1.29秒，在当前开源与闭源双工模型中排名第一，流式视频理解达到开源前沿水平。多数语音助手运行在严格轮流的半双工模式，像客服热线而非共同解决问题的两人对话；全双工需要处理语音重叠、自我纠正与相互插话。模型权重、代码与评测细节以实验室与InternLM组织仓库为准，设备厂商是否将其用于音箱、车载与机器人，以及端侧部署成本，仍待后续观察。",
      "id": "2",
      "date": "2026-11-27"
    },
    {
      "title": "腾讯混元开源DFly2投机采样草稿模型：复用主模型KV缓存，Hy4 flash最高提速4.2倍",
      "summary": "0.85B草稿模型复用主模型KV缓存，Hy4 flash最高提速4.2倍",
      "url": "https://finance.sina.com.cn/stock/hkstock/ggscyd/2026-11-26/doc-inizzwrm3757912.shtml",
      "source": "新浪财经 / IT之家 / 凤凰网 / arXiv 2611.34776",
      "category": "opensource",
      "tags": [
        "开源项目",
        "投机采样",
        "推理加速",
        "混元",
        "草稿模型"
      ],
      "heat": 3,
      "detail": "腾讯混元11月26日开源投机采样草稿模型DFly2，配套加速Hy4 flash，不替换主模型、保持输出不变。草稿模型5层、0.85B，专为DSA类稀疏注意力与长上下文设计；每层共享对应目标层的KV缓存（KV Share）与至多2048个索引位置（Index Share），无独立打分轮次。arXiv 2611.34776显示在三个目标模型上每步接受token数均超同配方DFlash与DSpark；Agentic任务上优势扩到10.0%-31.5%。公告口径单项最高提速4.2倍，但该数字未出现在论文表内，整请求提速受预填制约；集成暂不接受PD分离，缺独立复测。",
      "id": "3",
      "date": "2026-11-27"
    },
    {
      "title": "国家数据局就AI用数规则征求意见：三方面十二举措，训练推理合法用数，12月6日截止",
      "summary": "推动数据产权制度用于AI用数，协调处理者与受托方关系，鼓励数据付费与风险防控",
      "url": "http://www3.xinhuanet.com/20261126/5b846aa390674a86825f08cbac6c1d30/c.html",
      "source": "国家数据局 / 新华网 / 36氪 / Data Compliance China",
      "category": "regulation",
      "tags": [
        "监管政策",
        "数据规则",
        "AI训练",
        "数据产权",
        "征求意见稿"
      ],
      "heat": 3,
      "detail": "国家数据局综合司11月26日发布《关于完善数据规则 赋能人工智能创新发展的若干意见》公开征求意见稿，意见征集期至12月6日。文件围绕AI发展的数据要素需求，从三方面提出十二项举措：推动数据产权制度在AI用数领域运用，数据有序、依法合规用于训练和推理；协调数据处理者与受托方关系，支持和鼓励为数据付费，建立AI企业输出风险防控机制；完善数据流通责任认定与安全治理。采集生成数据在不违法违约、不侵权前提下可用于训练推理；企业对合法采集及授权服务商产生的数据有权获取、复制转移并用于训练推理。后续将以试点方式推动落实。征求意见稿不等于定稿，条款细则与执法尺度待正式文件明确。",
      "id": "4",
      "date": "2026-11-27"
    },
    {
      "title": "欧盟拟设500亿欧元主权科技股权基金投AI与量子，配套《量子法案》草案优先采购欧盟实体",
      "summary": "目标约撬动六倍私人资本；2025欧洲量子私人融资仅11亿欧元；500亿为目标非预算",
      "url": "https://techstartups.com/2026/11/25/eu-plans-e50-billion-ai-and-quantum-computing-fund-to-challenge-us-and-china/",
      "source": "TechStartups / Silicon Republic / 国际在线 / 新浪财经",
      "category": "regulation",
      "tags": [
        "监管政策",
        "主权AI",
        "量子计算",
        "欧盟基金",
        "公共采购"
      ],
      "heat": 3,
      "detail": "欧盟委员会11月25日提出规模目标500亿欧元的Sovereign Tech Equity Fund（STEF），由科技事务负责人Henna Virkkunen在斯特拉斯堡议会公布，配套《量子法案》草案。基金面向欧洲AI与量子企业做长期、高风险股权投资，官员称目标撬动约六倍私人资本，结构不同于以往拨款机制；量子公共采购将优先欧盟控制实体，互惠伙伴与WTO采购协定签署方例外。背景是2025年欧盟公共量子投入86亿欧元（美国53亿、中国136亿），但欧洲量子初创私人融资仅11亿。500亿是目标而非已批预算，仍需成员国与议会谈判；文件同时回应对美厂商“kill switch”的依赖担忧。",
      "id": "5",
      "date": "2026-11-27"
    },
    {
      "title": "首个农耕文明领域大模型“天稷”发布：8000万知识条目，可解译古农书并赋能农事决策",
      "summary": "天稷整合多模态与时空知识图谱，覆盖古农书解译、节气应用与农业遗产活化",
      "url": "https://news.qq.com/rain/a/20261127A04CEY00",
      "source": "央视新闻 / 腾讯新闻 / 农业农村部",
      "category": "product_release",
      "tags": [
        "产品发布",
        "垂直大模型",
        "农耕文明",
        "知识图谱",
        "智慧农业"
      ],
      "heat": 2,
      "detail": "农业农村部消息，日前首个农耕文明领域大模型“天稷”发布。模型整合跨时空文本、多源音视频影像、地理信息与传统历法等多维数据，依托多模态大模型、时空知识图谱、知识增强与智能推理核心技术，搭建古农书智能解译、二十四节气应用、农业文化遗产活化等专业化智能体模块。知识库涵盖传统农耕技艺、现代智慧农业与农耕文明演进脉络共8000万条条目，可解读古农书中节气物候等耕种智慧，数字化还原传统农具与农业遗产场景，拆解老技艺流程，并为现代农业生产提出智慧决策建议，缓解古今时空割裂、数据分散、知识碎片化问题。模型落地效果与农业场景覆盖范围待后续官方评测披露。",
      "id": "6",
      "date": "2026-11-27"
    },
    {
      "title": "印度IndiaAI使命推出Chariot-1：11B MoE/4B激活LLM与覆盖10种本土语言的TTS",
      "summary": "11B MoE LLM四档参数，TTS覆盖10种印度语言，均从零在印度预训练",
      "url": "https://dataconomy.com/2026/11/26/india-launches-homegrown-chariot-1-ai-foundation-models/",
      "source": "印度电子信息技术部 / Dataconomy / Sahyadri Startups / Chariot.in",
      "category": "product_release",
      "tags": [
        "产品发布",
        "主权模型",
        "多语言",
        "TTS",
        "印度"
      ],
      "heat": 2,
      "detail": "印度电子信息技术部在IndiaAI使命下推出Chariot-1基础模型套件，由首批入选主权基座团队之一的Chariot AI打造，秘书S. Krishnan公布。套件含一款从零在印度预训练的LLM与一款TTS模型。LLM为110亿参数MoE，每token激活40亿，另有10.7B、1.7B与7.45亿参数变体；TTS覆盖英语及10种印度语言，可结合上下文判断数字、日期、货币、单位与缩写读法。Async TTS发音基准发音准确率超97%；印地语字符错误率7.60%，其余九种语言平均6.47%，为参评系统最低。部署与开源权重情况以官方后续公告为准。",
      "id": "7",
      "date": "2026-11-27"
    },
    {
      "title": "Sakana AI发布Namazu Small：30B推理模型，25项基准均值超英伟达120B Super，权重暂不开放",
      "summary": "30B推理模型，25基准均值超120B Super；联网检索强，闭卷知识偏弱",
      "url": "https://www.marktechpost.com/2026/11/26/sakana-ai-namazu-small-30b-nemotron-3-nano/",
      "source": "MarkTechPost / TPS Report / AI Chat Daily / AI Matters",
      "category": "product_release",
      "tags": [
        "产品发布",
        "推理模型",
        "联网检索",
        "Nemotron",
        "Sakana AI"
      ],
      "heat": 2,
      "detail": "日本Sakana AI 11月25日发布推理模型Namazu Small，基于英伟达Nemotron 3 Nano基座续训，总参300亿。公司25项基准平均60.1，高于Nano的50.2与120B Super的56.2，优势集中在联网检索：BrowseComp 73.5（Super 36.1、Nano 29.3），DeepSearchQA 84.3，FaithEval 78.3。短板为闭卷知识SimpleQA Verified仅6.8（Super 18.1）。权重暂未发布，本地化细节12月上半月公布；基准为Sakana自测，独立复测待完成。",
      "id": "8",
      "date": "2026-11-27"
    },
    {
      "title": "英伟达开源Nemotron-Labs-Image-30B-A3B：30B/3B激活自回归图像生成，19.6万视觉token",
      "summary": "30B/3B激活自回归文生图，19.6万视觉token，代码化图像接口",
      "url": "https://huggingface.co/nvidia/Nemotron-Labs-Image-30B-A3B",
      "source": "Hugging Face / NVIDIA / 第一财经摘要",
      "category": "opensource",
      "tags": [
        "开源项目",
        "文生图",
        "自回归生成",
        "Nemotron",
        "代码化图像"
      ],
      "heat": 2,
      "detail": "英伟达在HF开放Nemotron-Labs-Image-30B-A3B权重，属“Pixel as Code”图像生成体系。组件含约6.42亿参数编解码器Tokenizer（16×16补丁、196,560个格向量码本）与自回归光栅生成器30B总参、3B激活，由Nemotron 3 Nano初始化。生成器上下文262,144 token，词表327,680行，视觉虚拟token 196,560，补丁16像素，bfloat16精度。定位是把图像生成转成结构化代码接口，便于编码代理调用；部分跑分超GPT Image 2来自厂商与媒体转述，保真度、文字渲染与授权条款需以模型卡与实测为准。",
      "id": "9",
      "date": "2026-11-27"
    },
    {
      "title": "cathrynlavery/diagram-design开源上GitHub趋势榜：24小时涨1133星，总量7.27万，MIT许可",
      "summary": "面向编码代理的编辑级图表工具，24h涨1133星，MIT许可",
      "url": "https://blockchainnews.azurewebsites.net/news/cathrynlavery-diagram-design-github-surge",
      "source": "GitHub Trending / BlockchainNews",
      "category": "opensource",
      "tags": [
        "开源项目",
        "图表工具",
        "编码代理",
        "MIT",
        "GitHub趋势"
      ],
      "heat": 2,
      "detail": "11月25日GitHub trending上，cathrynlavery/diagram-design单日新增约1133星，累计72,723星、4838 fork，主要语言HTML，MIT许可。项目面向Claude Code、Codex、GitHub Copilot、Cursor、Qoder、Pi等AI编码代理，生成编辑级结构图与示意图，把绘图需求转成可维护的代码产物。工具走红反映代理编程场景中“出图”与“出代码”一样成为高频交付物。Star增速与总量来自第三方榜单快照，维护频率、样例质量与真实采用情况仍需打开仓库核实；同类绘图skill迭代很快，排名波动可能较大。",
      "id": "10",
      "date": "2026-11-27"
    },
    {
      "title": "Every完成1750万美元A轮，投后估值1.1亿美元，IA Ventures领投，做AI原生团队订阅",
      "summary": "约13万免费、近1万付费订阅；含每日AI写作、软件skills与团队培训",
      "url": "https://every.to/on-every/we-raised-17-5-million-to-make-you-and-your-team-ai-native",
      "source": "Every 官方 / Unite.AI / Welcome.AI / The SaaS News",
      "category": "funding",
      "tags": [
        "融资商业",
        "AI媒体",
        "订阅制",
        "IA Ventures",
        "AI培训"
      ],
      "heat": 2,
      "detail": "AI媒体与软件公司Every 11月25日宣布完成1750万美元A轮，投后估值1.1亿美元，IA Ventures领投，Nicholas Thompson、Alex Rattray与Betaworks参投。公司2020年由Dan Shipper创办，约35人，约13万免费订阅者与近1万付费用户，年费288美元；业务含每日AI写作、软件与skills、团队培训及大企业咨询。融资用于把单一订阅做成覆盖前沿模型实践的产品；Shipper保留完全控制权，2025年9月ARR约120万美元。本轮是风投对“受众驱动、不靠广告、不交控制权”AI媒体模式的押注，可持续性仍待观察。",
      "id": "11",
      "date": "2026-11-27"
    },
    {
      "title": "阿联酋XEBO.ai获1050万美元A轮，EGF首笔机构投资，做AI原生体验管理",
      "summary": "平台整合问卷、社交聆听与旅程地图，扩展通话与数字体验分析及代理式AI",
      "url": "https://www.tmcnet.com/usubmit/-xeboai-raises-105-million-series-funding-from-emirates-/2026/11/26/10487565.htm",
      "source": "TMCnet / PRNewswire / Emirates Growth Fund",
      "category": "funding",
      "tags": [
        "融资商业",
        "体验管理",
        "客户反馈",
        "阿联酋",
        "代理式AI"
      ],
      "heat": 2,
      "detail": "迪拜AI原生体验管理公司XEBO.ai 11月26日宣布获1050万美元A轮融资，由阿联酋旗舰成长股权基金Emirates Growth Fund（EGF）投资，EGF为其首家机构投资方。公司平台横跨问卷、社交聆听与旅程地图，把客户与员工反馈、市场调研转成可决策洞察；本轮资金用于深化声量产品组合，扩展通话与数字体验分析，并推进平台上的代理式AI能力，同时拓展海湾地区市场、设立美国团队并招聘高管。CEO Yash Sultania称已服务银行、航空等十余个行业的350多家组织。融资金额与业务进展为公司及PRNewswire口径，客户留存、付费转化与AI产品实际效果待第三方验证。",
      "id": "12",
      "date": "2026-11-27"
    },
    {
      "title": "机器人推理服务商Abstract获250万美元HF0种子：云端推理往返约30毫秒，省去机载GPU",
      "summary": "云端机器人推理往返约30ms，一密钥接八种模型；早期弱验证线索",
      "url": "https://www.frontrun.vc/blog/abstract-2-5m-34-days-early/",
      "source": "Frontrun VC / doomers.ai / AI Pulse 日报",
      "category": "funding",
      "tags": [
        "融资商业",
        "具身智能",
        "云端推理",
        "30ms延迟",
        "早期线索"
      ],
      "heat": 2,
      "detail": "机器人推理服务商Abstract宣布从HF0融资250万美元，Susa Ventures及来自OpenAI、Anthropic、英伟达的天使投资人参与。方案在云端运行机器人AI，往返延迟约30毫秒，机器人本体无需搭载GPU以降低制造成本；凭一个API密钥可调用八种机器人模型，包括π0.5与MolmoAct2，注册可获1000美元推理额度。公开线索主要来自其X发布、Frontrun与doomers.ai等创投追踪站，成立时间、团队背景、客户名单与延迟数字缺独立核实；30毫秒往返在不同网络条件下的稳定性、云端断连时的安全兜底，以及模型授权边界，都需要后续文档与实测支撑。本轮列为早期、弱验证线索。",
      "id": "13",
      "date": "2026-11-27"
    },
    {
      "title": "Cournot Protocol获500万美元战略轮：为链上应用与AI代理提供可验证的智能判断层",
      "summary": "500万美元战略轮，可验证智能判断层；14.1亿美元结算为公司口径",
      "url": "https://decrypt.co/384036/cournot-raises-5m-to-build-ai-native-oracle-for-verifiable-intelligence",
      "source": "Decrypt / Unite.AI / Defiprime / CoinPost",
      "category": "funding",
      "tags": [
        "融资商业",
        "预言机",
        "可验证推理",
        "AI代理",
        "BNB Chain"
      ],
      "heat": 2,
      "detail": "AI原生预言机Cournot Protocol 11月26日完成500万美元战略轮，Paper Ventures与Beam Foundation联合领投，此前由YZi Labs孵化。系统用多代理分析现实事件，把来源、推理与结论经密码学记录上链供审计；Proof of Reasoning先固定问题条款哈希，再从命名来源取证，借助zkTLS固化网页记录。公司称已完成超29,200次裁决、结算名义价值超14.1亿美元，99.8%无争议；资金用于产品开发、BNB Chain集成，并扩展到RWA、交易、参数保险与AI代理。经营数字为公司自述，客户采纳与准确性缺独立验证。",
      "id": "14",
      "date": "2026-11-27"
    },
    {
      "title": "路透：出口管制下智谱GLM-5.5或推迟至2027，Moonshot模型间隔或拉长到一年以上",
      "summary": "GLM-5.5或推迟至2027，Moonshot发布间隔或拉长到一年以上",
      "url": "http://m.toutiao.com/group/7712621550746288682/",
      "source": "路透社 / 今日头条转载",
      "category": "regulation",
      "tags": [
        "监管政策",
        "出口管制",
        "算力",
        "GLM-5.5",
        "模型排期"
      ],
      "heat": 2,
      "detail": "路透社11月26日独家报道，受研发挑战与算力限制，智谱（Z.AI）原计划11月发布的旗舰GLM-5.5可能推迟到2027年；知情人士称Moonshot AI若海外计算基础设施使用受限，主要模型发布间隔可能从六个月拉长到一年甚至更久。背景是美商务部11月19日新规扩大先进计算技术许可要求，并针对受限处理器远程访问；算力受限可能削弱中国开发者以较低成本做出有竞争力模型的优势。报道同时提到OpenAI与Anthropic加强了对未授权模型蒸馏的防御。信息来自匿名知情人士与独家报道，具体排期、影响模型与算力替代方案未获官方确认；此前GLM-5.5曾传12月发布，口径存在反复。",
      "id": "15",
      "date": "2026-11-27"
    },
    {
      "title": "英伟达NOOA上下文管理研究：32K预算下GPT 6.1办公QA由21%升至56%，Kimi K3输入token最多省41%",
      "summary": "模型经Context API自行决定何时压缩；后缀KV缓存复用降预计算最高15%",
      "url": "https://arxiv.org/abs/2611.34147",
      "source": "arXiv 2611.34147 / The Agent Times / Automater",
      "category": "research_paper",
      "tags": [
        "研究论文",
        "上下文管理",
        "代理框架",
        "KV缓存",
        "预印本"
      ],
      "heat": 2,
      "detail": "arXiv 2611.34147 11月25日提交，在英伟达开源框架NOOA中让模型通过Context API自行决定何时压缩、压缩什么，对比两种上下文策略。论文报告GPT 6.1在32K预算下Office QA Pro v2得分由21%升至56%；Kimi K3输入token最多减少41%；后缀KV缓存复用把预计算最多降低15%。研究聚焦长程代理上下文随工具调用累积的问题，把压缩决策权交给模型。基准为团队自测，未提及独立复测；32K下的提升能否迁移到更长上下文与其他模型家族，仍需验证。",
      "id": "16",
      "date": "2026-11-27"
    },
    {
      "title": "英伟达TimeTravelContainer：根容器实时分叉运行中代理会话，克隆提速84.1倍、内存省31%-72%",
      "summary": "写时复制分叉进程/内存/文件/网络；两条EDA流程端到端提速1.7-9.4倍",
      "url": "https://arxiv.org/abs/2611.32255",
      "source": "arXiv 2611.32255 / Zizheng Guo / Brucek Khailany 等",
      "category": "research_paper",
      "tags": [
        "研究论文",
        "容器运行时",
        "会话分叉",
        "写时复制",
        "EDA流程"
      ],
      "heat": 2,
      "detail": "arXiv 2611.32255由Zizheng Guo、Brucek Khailany等英伟达研究者提出TimeTravelContainer（TTC），一个无特权容器运行时，可实时分叉运行中的工具会话。代理在编辑器、终端、测试器或EDA工具中持有状态化会话，以往探索替代路径要把全部状态序列化落盘再重启；TTC以写时复制方式分叉进程、内存、文件系统与网络状态，让代理从活会话分支、回退并并行探索多种假设。论文自报克隆提速84.1倍，内存减少31%-72%，在两条真实EDA流程上端到端提速1.7-9.4倍。问题边界清晰，但数字为作者自报；机器人仿真、数据库调优等同类场景是否成立，待独立复现。",
      "id": "17",
      "date": "2026-11-27"
    },
    {
      "title": "EGSE医学推理代理：证据锚定技能演化，四张胸片基准准确率更高且工具调用更少",
      "summary": "技能库按影像模态/任务/疾病路由；七款基座模型稳定增益，支持跨数据集迁移",
      "url": "https://arxiv.org/abs/2611.33909",
      "source": "arXiv 2611.33909 / Mingyuan Li 等",
      "category": "research_paper",
      "tags": [
        "研究论文",
        "医学AI",
        "推理代理",
        "技能演化",
        "胸片诊断"
      ],
      "heat": 2,
      "detail": "arXiv 2611.33909《EGSE》11月25日提交，面向结合基座模型与专用工具解读医学影像的推理代理。历史经验难复用：正确答案可能掩盖缺陷推理，建议可能缺来源支撑，相似病例或需不同流程。EGSE把相似病例历史对话蒸馏为带适用条件的可复用工作流，经来源支撑的验证性更新精炼技能库；对比成功与失败 rollout 提取做法与避坑指引，按模态、任务类型与疾病类别路由。四张胸片基准上准确率优于代表性医学代理并减少工具调用；七款基座模型稳定增益，支持跨数据集迁移。临床部署前仍需外部队列验证。",
      "id": "18",
      "date": "2026-11-27"
    },
    {
      "title": "智源发布REAL物理AI评测体系：5能力域55能力158指标，覆盖66款模型，可灵4.0世界模型居首",
      "summary": "建“能力-任务-指标”映射，打通基准/仿真/真机三链路；四大榜单齐发",
      "url": "http://news.qq.com/rain/a/20261125A0EXX900",
      "source": "北京智源研究院 / 腾讯新闻 / 今日头条 / REAL 官网",
      "category": "research_paper",
      "tags": [
        "研究论文",
        "评测基准",
        "物理AI",
        "具身智能",
        "世界模型"
      ],
      "heat": 2,
      "detail": "北京智源研究院在REAL物理AI开放日发布REAL评测体系，定位首个面向物理AI真实落地能力的解析式评测基准，覆盖5大能力域、14个能力维度、55项能力与158项指标，评测对象含模型、整机与应用三层，环境覆盖数字、仿真、克隆场景与真实场景。体系建立“能力—任务—指标”映射，打通基准、仿真、真机三条链路，同期发布世界模型、具身推理、具身操作仿真与真机四大榜单，共评测66款主流模型；世界模型榜16款1113题，闭源可灵4.0以53.32分居首，开源MiniMax H3列第八。院长王仲远称实验室90%成功率进真实场景可能降到10%。榜单分数为第三方评测口径，真机子集受成本限制，可比性仍待完善。",
      "id": "19",
      "date": "2026-11-27"
    },
    {
      "title": "英国央行警告AI融资风险：科技巨头债务及表外承诺超4万亿美元，今年债券发行预计超3050亿",
      "summary": "AI融资正扩散至投资级债、杠杆贷款、私人信贷与股权；营收预期下调将带来压力",
      "url": "https://news.qq.com/rain/a/20261127A04F0800",
      "source": "英国央行 / 腾讯新闻 / 数智早参",
      "category": "community_hot",
      "tags": [
        "社区热点",
        "金融风险",
        "AI融资",
        "债券市场",
        "央行警告"
      ],
      "heat": 2,
      "detail": "英国央行近日警告，AI投资热潮所需融资规模与覆盖范围持续扩大，可能加剧全球金融体系脆弱性。其估计大型科技公司债务及表外承诺总额已超4万亿美元，2026年债券发行规模预计超3050亿美元，较去年翻倍以上。央行指出AI融资正从科技巨头自有现金流扩散到投资级债券、杠杆融资、私人信贷与股权市场，复杂不透明的安排可能加剧体系内关联性；一旦市场下调对AI未来营收的预期，相关融资安排将面临压力。点评认为风险链条从“烧利润”转向“加杠杆”，私人信贷与表外结构压力最难被及时看见。数字为央行估算口径，情景假设与触发条件需结合金融稳定报告原文判断；本轮属宏观风险讨论，不代表已发生违约。",
      "id": "20",
      "date": "2026-11-27"
    },
    {
      "title": "三星电子DS部成立半导体工厂机器人团队：年内遴选伙伴，明年技术评估，2028年实际部署",
      "summary": "前端自动化约90%、后端约80%，耗材更换与设备维护仍靠人；洁净室容错率低",
      "url": "https://news.qq.com/rain/a/20261127A04F0800",
      "source": "韩国媒体 / 腾讯新闻 / 数智早参",
      "category": "community_hot",
      "tags": [
        "社区热点",
        "半导体",
        "工业机器人",
        "三星",
        "工厂自动化"
      ],
      "heat": 2,
      "detail": "据韩媒报道，三星电子设备解决方案（DS）部已在全球制造与基础设施总部下设立“机器人团队”，推进机器人技术在半导体工厂的实际应用。业内称半导体工厂前端自动化程度已达90%、后端约80%，但零件耗材更换、设备维护等工序仍需人工；三星计划年内遴选合作伙伴，明年进行技术评估，2028年开始实际部署。洁净室对高洁净度、振动敏感，维护自动化长期滞后于生产自动化，容错率极低，难点在感知、力控与可靠性的系统工程；若落地价值不只省人力，还包括降低停机时间、提升良率一致性。时间表为公司规划，能否在2028年兑现取决于持续投入，当前仅为团队组建阶段。",
      "id": "21",
      "date": "2026-11-27"
    },
    {
      "title": "OpenAI确认12月起ChatGPT与Codex合并为单一额度池，chat与work标签页合一，即时聊天不计费",
      "summary": "Pro订阅者已小范围灰度；多数用户不必更早等重置，少数重度用户可能更早触顶",
      "url": "https://dev.to/hiroki-ii-ai/ai-daily-digest-november-26-2026-one-meter-for-chatgpt-and-codex-cognition-doubles-down-europe-2j0o",
      "source": "OpenAI 帮助中心 / TechCrunch / DEV Daily Digest / X 产品负责人",
      "category": "community_hot",
      "tags": [
        "社区热点",
        "ChatGPT",
        "Codex",
        "配额池",
        "产品调整"
      ],
      "heat": 2,
      "detail": "OpenAI确认12月起Plus、Pro与Business订阅在ChatGPT与Codex间共享单一用量池，“chat”与“work”标签合并为一个界面，取代此前分别计量。合并额度以token计量，消耗随模型与任务变化；即时聊天不计入计量，额度耗尽后仍可使用。设置页展示剩余额度与重置节奏，触顶用户可等重置、升级或购买额度。产品负责人Tibo Sottiaux在X称已向小批Pro用户灰度，广泛发布在12月铺开；对TechCrunch表示多数用户不必更频繁等重置，少数重度用户可能更早触顶。这与Anthropic 9月合并Claude与Cowork思路一致。",
      "id": "22",
      "date": "2026-11-27"
    }
  ]
};
