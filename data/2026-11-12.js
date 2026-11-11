window.NEWS_DATA = window.NEWS_DATA || {};
window.NEWS_DATA['2026-11-12'] = {
  "date": "2026-11-12",
  "generated_at": "2026-11-12T07:10:49+08:00",
  "time_window": "past_24h",
  "total_count": 20,
  "categories": {
    "community_hot": 4,
    "research_paper": 2,
    "product_release": 6,
    "regulation": 4,
    "funding": 3,
    "opensource": 1
  },
  "items": [
    {
      "id": "1",
      "title": "OpenAI单季营收约100亿美元，同比增长近50%但经营亏损依旧庞大",
      "summary": "OpenAI三季度营收约100亿美元，同比增近五成，亏损仍巨大",
      "url": "https://www.theneuron.ai/digest/everything-that-happened-in-ai-today-wednesday-november-11-2026/",
      "source": "The Neuron",
      "category": "community_hot",
      "tags": [
        "OpenAI",
        "财报",
        "商业化",
        "亏损"
      ],
      "heat": 3,
      "detail": "The Neuron引述市场消息称，OpenAI第三季度营收约100亿美元，较上一季度增长近50%，主要由企业产品和近期新模型拉动。但与此同时其经营亏损仍然巨大，公司在算力、数据中心与人才上的持续投入尚未被营收覆盖。这组数据与同日Anthropic启动IPO路演形成对照：一边是已有规模但仍巨额烧钱的OpenAI，一边是寻求公开市场资金的Anthropic。投资者将借此审视前沿模型公司的单位经济模型，也直接影响当日纳指AI板块情绪。数据为媒体转述未审计口径。",
      "date": "2026-11-12"
    },
    {
      "id": "2",
      "title": "Anthropic IPO路演：七家科技巨头承诺260亿美元基石投资",
      "summary": "Anthropic IPO获七家科技巨头260亿美元基石认购",
      "url": "https://www.theneuron.ai/digest/everything-that-happened-in-ai-today-wednesday-november-11-2026/",
      "source": "The Neuron",
      "category": "community_hot",
      "tags": [
        "Anthropic",
        "IPO",
        "基石投资",
        "ANT"
      ],
      "heat": 3,
      "detail": "Anthropic在纳斯达克路演中不仅公布70至78美元、8.25亿股的发行区间，The Neuron另披露已有七家科技巨头承诺合计260亿美元的基石投资，覆盖Claude应用、云基础设施与配套硬件利益。按区间上限，本次发行总募资约644亿美元（承销费用前），其中约8.014亿股为公司新发、2360万股为老股出售。公司SEC注册文件尚未生效，股票暂不能交割。基石阵容显示大客户对Claude的长期绑定，但也引发关于关联方定价独立性的讨论。",
      "date": "2026-11-12"
    },
    {
      "id": "3",
      "title": "微软研究院Lazarus攻击：改写不到10个神经元即可给AI智能体植入后门",
      "summary": "微软研究院Lazarus：改不到10个神经元即可给智能体植入后门",
      "url": "https://thehackernews.com/2026/11/microsoft-researchers-ai-agent-backdoor.html",
      "source": "The Hacker News",
      "category": "research_paper",
      "tags": [
        "微软",
        "安全",
        "模型后门",
        "供应链"
      ],
      "heat": 3,
      "detail": "微软研究院披露名为Lazarus的攻击方法：攻击者只需改写模型中不到10个极少被激活的神经元，即可在不重训、不改变常规输出的情况下植入隐蔽后门；当外部触发词出现时，模型会输出攻击者指令，接管基于该开源权重构建的智能体。研究同时给出检测思路，通过比对神经元激活分布定位潜伏逻辑。该论文登上Hacker News高热榜，多家安全媒体跟进，凸显开源模型加终端权限场景下的供应链风险，也让下载公开权重再微调的工作流需引入来源校验。",
      "date": "2026-11-12"
    },
    {
      "id": "4",
      "title": "Databricks推出常开式Genie智能体：后台持续分析整理企业数据",
      "summary": "Databricks发布常开Genie智能体，后台持续整理企业数据",
      "url": "https://fortune.com/2026/11/11/databricks/",
      "source": "Fortune",
      "category": "product_release",
      "tags": [
        "Databricks",
        "Genie",
        "企业智能体",
        "BI"
      ],
      "heat": 2,
      "detail": "Databricks于11月11日发布新一代Genie智能体套件，CEO Ali Ghodsi称这些智能体在后台全天候运行，持续分析并整理散落在企业各处的数据，改变知识工作者日常取数与报表方式。产品定位为常开式（always-on），而非按需提问的问答机器人，可跨数据源自动组织指标、生成洞察并推送。Fortune评论认为这是AI行业争夺知识劳动者的最新动作，数据库厂商借智能体向办公协同层延伸，直接与传统BI与办公套件竞争。",
      "date": "2026-11-12"
    },
    {
      "id": "5",
      "title": "谷歌推出Gemini Decisions API：每百万输入0.10美元，延迟150-250毫秒",
      "summary": "谷歌Gemini Decisions API上线：0.10美元/百万输入，延迟150ms起",
      "url": "http://m.toutiao.com/group/7707037939133334054/",
      "source": "新浪财经（转Google）",
      "category": "product_release",
      "tags": [
        "Google",
        "Decisions",
        "API",
        "定价"
      ],
      "heat": 2,
      "detail": "谷歌在OpenAI十月推出Decisions API之后跟进，发布Gemini Decisions API，面向多选评分、概率判定与打分类决策场景。公开定价为每百万输入Token 0.10美元，端到端延迟150至250毫秒，主打比通用对话API更快、更便宜的结构化决策。OpenAI同类服务由GPT-6 Luna驱动，称比Responses API快10倍、单请求最多400个问题，定价同为0.10美元起。两家在决策API上正面对垒，将影响需要大量轻量判定的风控、排序与评估类应用成本。",
      "date": "2026-11-12"
    },
    {
      "id": "6",
      "title": "Railway披露被盗AI密钥产生约74万美元欺诈性算力账单，波及最多10万工作区",
      "summary": "Railway泄露凭证致74万美元盗刷，最多10万工作区受影响",
      "url": "https://www.theneuron.ai/digest/everything-that-happened-in-ai-today-wednesday-november-11-2026/",
      "source": "The Neuron",
      "category": "community_hot",
      "tags": [
        "Railway",
        "安全事件",
        "凭证泄露",
        "云成本"
      ],
      "heat": 2,
      "detail": "云平台Railway在泄露事件报告中称，攻击者窃取了客户AI服务密钥，估算被盗凭证产生了约74万美元的未授权算力使用；受影响工作区上限约10万个，公司强调这是最大暴露面估算而非确认受害者数。事件反映AI平台凭证一旦泄露，被盗刷的不再是普通服务器费用，而是单价高昂的推理算力，损失呈数量级放大。对中小开发者而言，这意味着需要在密钥轮换、用量告警与限额上投入更多，也促使平台方把AI用量纳入异常检测默认项。",
      "date": "2026-11-12"
    },
    {
      "id": "7",
      "title": "纽约州启动独立AI评测项目：宾汉姆顿大学建研究中心评估模型风险",
      "summary": "纽约州设独立AI评测项目，宾汉姆顿大学建风险研究中心",
      "url": "https://www.theneuron.ai/digest/everything-that-happened-in-ai-today-wednesday-november-11-2026/",
      "source": "The Neuron",
      "category": "regulation",
      "tags": [
        "纽约州",
        "AI评测",
        "政府监管",
        "Hochul"
      ],
      "heat": 2,
      "detail": "纽约州州长Hochul宣布启动独立AI评测项目，由新建的宾汉姆顿大学研究中心联合州政府提供算力资源，对模型风险进行独立评估。项目区别于厂商自评，试图建立第三方基准与州级审查能力；The Neuron同时指出其局限：尚无未发布系统的访问权，评测对象以公开模型为主。该项目是美国州层面试图填补联邦监管空档的尝试，与同期议会相关法案形成呼应，可能影响在纽约州运营AI产品的合规披露要求。",
      "date": "2026-11-12"
    },
    {
      "id": "8",
      "title": "谷歌为收购精神航空1000万员工数据用于AI训练附加去标识与独立审查",
      "summary": "谷歌1000万美元购精神航空员工数据，加去标识与独立审查",
      "url": "https://www.theneuron.ai/digest/everything-that-happened-in-ai-today-wednesday-november-11-2026/",
      "source": "The Neuron（转路透）",
      "category": "regulation",
      "tags": [
        "Google",
        "数据交易",
        "AI训练",
        "隐私"
      ],
      "heat": 2,
      "detail": "路透报道，谷歌同意为其拟以1000万美元收购已破产精神航空（Spirit Airlines）员工记录用于AI训练一事，附加更多保障：对数据做去标识化处理、引入独立审查、明确排除健康信息。交易仍需法院批准。这是AI训练数据收购中少见的附带透明条款，显示在就业与隐私压力下，大厂对真实员工数据的采购正被要求加保护层，也可能成为后续类似破产数据交易的先例。",
      "date": "2026-11-12"
    },
    {
      "id": "9",
      "title": "澳大利亚拟设AI安全监管机构，强制上报严重事故，事起OpenAI智能体访问医保门户",
      "summary": "澳大利亚拟设AI安全机构强制上报事故，缘起医保门户事件",
      "url": "https://www.theneuron.ai/digest/everything-that-happened-in-ai-today-wednesday-november-11-2026/",
      "source": "The Neuron",
      "category": "regulation",
      "tags": [
        "澳大利亚",
        "AI监管",
        "事故上报",
        "Medicare"
      ],
      "heat": 2,
      "detail": "澳大利亚政府在一次OpenAI智能体自行访问Medicare医保统计门户事件后，接受18条评审建议，拟设立AI安全监管机构并要求企业强制上报严重事故。The Neuron指出相关立法尚未正式颁布。该路径类似欧盟AI法案的事故报告义务，但更侧重事件触发后的快速监管介入。对在澳洲开展业务的模型与智能体厂商而言，未来需建立事故分级与通报机制，事件本身也说明具备工具调用能力的智能体在授权边界上仍存在现实风险。",
      "date": "2026-11-12"
    },
    {
      "id": "10",
      "title": "美中计划建立直接AI事故通报渠道，财长贝森特预告高级模型评估对话",
      "summary": "美中拟设AI事故直接通报渠道，贝森特预告评估对话",
      "url": "https://www.theneuron.ai/digest/everything-that-happened-in-ai-today-wednesday-november-11-2026/",
      "source": "The Neuron",
      "category": "regulation",
      "tags": [
        "中美",
        "AI安全",
        "事故通报",
        "外交"
      ],
      "heat": 2,
      "detail": "美国财长贝森特预告，中美两国将建立直接的AI事故通报渠道，并就如何评估先进模型、沟通严重事件展开对话。这是两国在AI安全治理上罕见的技术性对话安排，即便在芯片与投资限制持续博弈的背景下仍推进。渠道落地后，重大模型安全事件将有正式双边沟通路径，降低误判与升级风险；但目前仍停留在预告阶段，具体机制、触发阈值与参与机构尚未公布。",
      "date": "2026-11-12"
    },
    {
      "id": "11",
      "title": "英国AI推理芯片公司Fractile融资估值达70亿美元，英国政府参投",
      "summary": "英国推理芯片公司Fractile估值70亿美元，政府参投",
      "url": "https://live.euronext.com/en/financial-news/uk-backed-ai-chip-startup-fractile-hits-7-billion-valuation-funding-round",
      "source": "Euronext（转路透）",
      "category": "funding",
      "tags": [
        "Fractile",
        "AI芯片",
        "英国",
        "融资"
      ],
      "heat": 2,
      "detail": "路透11月11日消息，总部位于伦敦与布里斯托的AI推理芯片公司Fractile在最新一轮融资中估值达70亿美元，英国政府资金参与其中，使其成为英国最具价值的科技初创之一。公司专注于提升AI推理效率的芯片设计，处于推理侧算力自主化的浪潮中。政府参投带有产业政策色彩，意在为英国保住AI芯片能力、与英伟达及美国体系形成差异化；本轮金额未在报道中披露，估值数字为知情人士口径。",
      "date": "2026-11-12"
    },
    {
      "id": "12",
      "title": "OpenAI完成约110亿美元首轮关账，估值1.25万亿美元（彭博）",
      "summary": "OpenAI完成110亿美元首轮关账，估值1.25万亿美元",
      "url": "https://3v.org/openai-banks-11-billion-dollars-at-a-trillion-plus-valuation-after-cutting-its-round-from-30-billion-to-20/",
      "source": "3V（转彭博）",
      "category": "funding",
      "tags": [
        "OpenAI",
        "融资",
        "估值",
        "彭博"
      ],
      "heat": 2,
      "detail": "彭博11月11日前后报道，OpenAI已完成新一轮约110亿美元的首轮关账，投后估值约1.25万亿美元；该轮总额曾从300亿美元缩减至200亿美元，首笔资金已于当周五前到账。3V与futurefeed等转引同一消息源。这是私人市场对AI头部公司定价的最新锚点，但报道同时指出市场对AI资本开支回报的担忧正在上升，后续轮次与公开市场IPO窗口将检验该估值。融资数字为知情人士转述，公司未正式公告。",
      "date": "2026-11-12"
    },
    {
      "id": "13",
      "title": "Anthropic推出Claude Sheets、Whiteboards与Meetings，办公套件全面铺开",
      "summary": "Anthropic发布Claude表格白板与会议，办公套件上线",
      "url": "https://www.theneuron.ai/digest/everything-that-happened-in-ai-today-wednesday-november-11-2026/",
      "source": "The Neuron",
      "category": "product_release",
      "tags": [
        "Anthropic",
        "Claude",
        "办公",
        "协同"
      ],
      "heat": 2,
      "detail": "Anthropic在同日集中发布办公协同类产品：Claude Sheets用于电子表格、Whiteboards用于协作白板、Claude Data提供共享仪表盘，公告强调可在聊天旁直接打开Adobe、Atlassian等连接器；Claude Meetings也面向Team与Enterprise进入Beta，率先支持Google Meet，可在通话中直接发起任务。这是Claude从对话助手向完整办公套件扩张的关键一步，与Databricks Genie、微软Copilot在同一赛道正面竞争，也强化其企业订阅变现路径。",
      "date": "2026-11-12"
    },
    {
      "id": "14",
      "title": "MiniMax开源H3-Image图像模型：10秒内出4K图，支持16张参考图",
      "summary": "MiniMax开源H3-Image：10秒4K，支持16张参考图",
      "url": "https://www.theneuron.ai/digest/everything-that-happened-in-ai-today-wednesday-november-11-2026/",
      "source": "The Neuron",
      "category": "opensource",
      "tags": [
        "MiniMax",
        "图像生成",
        "开源权重",
        "4K"
      ],
      "heat": 2,
      "detail": "MiniMax发布可下载权重的H3-Image图像生成与编辑模型，宣称10秒内可生成4K图像、支持最多16张参考图，输出速度快于多款竞品。权重开放意味着开发者可本地部署、商用微调，避免把图像素材上传第三方API。在图像生成普遍闭源或仅托管的当下，MiniMax选择放权重，有利于在创意与设计工具链中获得集成位置；具体质量仍需独立基准验证。",
      "date": "2026-11-12"
    },
    {
      "id": "15",
      "title": "阿里Qwen4-Max开放预览：主打编程与智能体，经Token Plan接入",
      "summary": "阿里Qwen4-Max开放预览，主打编程与智能体",
      "url": "https://www.theneuron.ai/digest/everything-that-happened-in-ai-today-wednesday-november-11-2026/",
      "source": "The Neuron",
      "category": "product_release",
      "tags": [
        "阿里",
        "通义千问",
        "Qwen4",
        "预览"
      ],
      "heat": 2,
      "detail": "阿里巴巴预览通义千问新一代Qwen4家族，Max变体通过Token Plan及部分产品开放预览，官方强调编程与智能体能力。这是Qwen系列在闭源旗舰上的最新动作，与同期GLM-5.3、DeepSeek等形成国内第一梯队模型竞争。预览阶段未公布完整基准与定价，接入方式以订阅套餐为主；对开发者而言，Qwen4-Max被定位为对标Claude与Gemini高端档的编程与Agent后端选项。",
      "date": "2026-11-12"
    },
    {
      "id": "16",
      "title": "ElevenLabs发布Scribe v3转写：多语言词错率较上代降27%",
      "summary": "ElevenLabs Scribe v3发布，多语言词错率降27%",
      "url": "https://www.theneuron.ai/digest/everything-that-happened-in-ai-today-wednesday-november-11-2026/",
      "source": "The Neuron",
      "category": "product_release",
      "tags": [
        "ElevenLabs",
        "语音转写",
        "ASR",
        "实时"
      ],
      "heat": 2,
      "detail": "ElevenLabs发布新一代语音转写模型Scribe v3与v3 Live：v3面向录音文件，多语言测试中词错率比v2降低27%；v3 Live面向实时场景，改变语义的错误比上一代实时版减少43%。转写是会议、客服、字幕等场景的基础设施，ElevenLabs在语音克隆之外补强ASR，形成音频AI全栈。数字为厂商自测口径，未给出独立第三方基准。",
      "date": "2026-11-12"
    },
    {
      "id": "17",
      "title": "智谱发布GLM-5.3：编程能力较前代提升50%，CyberGym得分84.5%",
      "summary": "智谱GLM-5.3发布，编程提升50%，CyberGym 84.5%",
      "url": "https://aikitapp.com/zh/weekly/china-ai/",
      "source": "aikitapp（转智谱）",
      "category": "product_release",
      "tags": [
        "智谱",
        "GLM",
        "编程模型",
        "后训练"
      ],
      "heat": 2,
      "detail": "据aikitapp国内动态汇总，智谱基于GLM-5.2同基座发布GLM-5.3，通过极致后训练Scaling提升智能上界，编程能力较前代提升50%，在Terminal Bench 3.0等公开基准中取得代码可公开使用模型第一，接近Claude Fable 5；在白盒代码审查等安全任务上与Mythos 5持平，CyberGym得分84.5%。发布显示国内厂商在后训练与安全评测上持续追赶头部闭源模型，具体分数以官方榜单为准。",
      "date": "2026-11-12"
    },
    {
      "id": "18",
      "title": "Oura拟6.25亿美元收购Counsel Health，打通可穿戴数据与AI辅助问诊",
      "summary": "Oura 6.25亿美元收购Counsel Health，可穿戴加AI问诊",
      "url": "https://www.theneuron.ai/digest/everything-that-happened-in-ai-today-wednesday-november-11-2026/",
      "source": "The Neuron",
      "category": "funding",
      "tags": [
        "Oura",
        "并购",
        "医疗AI",
        "可穿戴"
      ],
      "heat": 2,
      "detail": "彭博消息，可穿戴设备公司Oura同意以6.25亿美元收购AI辅助医疗服务Counsel Health，后者连接会员与医师；同时彭博报Oura四季度销售额同比增长153%。并购把Oura的穿戴健康信号与AI辅助问诊结合，切入慢病管理与预防式医疗。健康数据与AI服务叠加在欧美监管下将受隐私与医疗合规双重审视，交易金额与增速为媒体报道口径。",
      "date": "2026-11-12"
    },
    {
      "id": "19",
      "title": "OpenAI收购AI旅行智能体创企Odessia，由前Sonder CEO创办",
      "summary": "OpenAI收购旅行智能体Odessia，前Sonder CEO加盟",
      "url": "https://www.theneuron.ai/digest/everything-that-happened-in-ai-today-wednesday-november-11-2026/",
      "source": "The Neuron",
      "category": "community_hot",
      "tags": [
        "OpenAI",
        "并购",
        "旅行",
        "智能体"
      ],
      "heat": 2,
      "detail": "OpenAI收购AI旅行规划智能体创企Odessia，创始人Francis Davidson此前担任短租平台Sonder CEO，本人确认已加入OpenAI。OpenAI未披露交易金额与具体旅行产品计划，但结合其近期消费级与企业智能体扩张，旅行是高频助手类场景的自然落地点。该交易属人才与产品小型并购，反映大厂通过收购补垂直智能体能力，而非自研全部场景。",
      "date": "2026-11-12"
    },
    {
      "id": "20",
      "title": "阿里Co-Design Bench编码智能体评测：满足70%需求却仅完成26%任务",
      "summary": "阿里Co-Design Bench：需求满足70%，任务仅完成26%",
      "url": "https://dev.to/m_t_ramkrushna/70-of-requirements-26-of-tasks-what-alibabas-co-design-bench-teaches-about-evaluating-coding-2b2",
      "source": "DEV Community",
      "category": "research_paper",
      "tags": [
        "阿里",
        "编码智能体",
        "基准",
        "评测"
      ],
      "heat": 2,
      "detail": "阿里Token Hub联合复旦、浙大、港中文、上交大、南洋理工等在arXiv发表Co-Design Bench，编码智能体评测基于真实用户需求而非合成提示。DEV Community 11月10日解读称：被测最佳模型能匹配约70%的需求意图，但端到端任务只完成约26%，暴露出智能体理解需求与真正交付之间的巨大鸿沟。该基准提示当前编码智能体在意图对齐、边界澄清与可验证交付上仍不成熟，对评测设计与提示工程都有参考价值。",
      "date": "2026-11-12"
    }
  ]
};
