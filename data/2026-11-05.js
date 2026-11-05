window.NEWS_DATA = window.NEWS_DATA || {};
window.NEWS_DATA['2026-11-05'] = {
  "date": "2026-11-05",
  "generated_at": "2026-11-05T16:27:51.088607+08:00",
  "time_window": "past_24h",
  "total_count": 20,
  "categories": {
    "product_release": 5,
    "opensource": 1,
    "funding": 6,
    "research_paper": 4,
    "regulation": 2,
    "community_hot": 2
  },
  "items": [
    {
      "id": "1",
      "title": "OpenAI发布Images 2.6：文本或照片一键生成动画GIF，跨ChatGPT/Codex/API",
      "summary": "OpenAI基于Images 2.6推出GIF生成，文本或照片均可，可调速逐帧编辑",
      "detail": "据The Decoder、The Verge及OpenAI官方11月4-5日报道，OpenAI向所有ChatGPT和Codex用户推送新功能：可由文本提示词或照片生成动画GIF，覆盖网页、桌面和移动端。功能运行在新图像模型Images 2.6之上，用户可调动画速度、逐帧编辑；输出是一组略有差异的翻页帧，要求角色跨帧可识别，新模型在一致性上表现稳定。OpenAI披露每周经ChatGPT和API生成图片超40亿张，较9月增加约10亿，两个月内从约30亿涨到40亿以上，标志图像模型从单图生成迈向序列场景生成。",
      "url": "https://www.dailyaithread.com/en/archive/2026-11-05",
      "source": "The Decoder / OpenAI",
      "category": "product_release",
      "tags": [
        "OpenAI",
        "Images 2.6",
        "GIF",
        "图像生成",
        "多模态",
        "ChatGPT"
      ],
      "heat": 5,
      "date": "2026-11-05"
    },
    {
      "id": "2",
      "title": "腾讯发布Hy4大模型：新增视觉理解与计算机操作能力，可驱动命令行和图形界面",
      "summary": "腾讯发布Hy4，新增视觉理解与computer-use，可操作CLI/GUI，API先行",
      "detail": "据dosa.dev今日简报援引腾讯官方，腾讯发布最新大模型Hy4，在语言能力外加入视觉理解和计算机操作能力，可驱动命令行和图形界面完成自动化。目前Hy4已通过API开放，模型权重和系统卡承诺数日内公布。开发者当下即可调用其GUI/CLI自动化能力，但计划私有化部署需等权重上线。这是混元系列Q4又一次迭代，方向上与Codex、Claude Computer Use等海外Agent工具对齐，把模型从对话助手推向可操作系统的执行体；权重许可、上下文长度和基准表现尚待系统卡披露。",
      "url": "https://ai.dosa.dev/blog/today-in-ai-2026-11-05",
      "source": "dosa.dev / Tencent",
      "category": "product_release",
      "tags": [
        "腾讯",
        "Hy4",
        "混元",
        "视觉理解",
        "computer-use",
        "Agent"
      ],
      "heat": 5,
      "date": "2026-11-05"
    },
    {
      "id": "3",
      "title": "Moonshot开源Kimi K3.1 Pro权重：2.8万亿参数稀疏MoE，100万token上下文",
      "summary": "月之暗面开源Kimi K3.1 Pro权重，2.8万亿参数MoE，百万token上下文",
      "detail": "据dosa.dev简报援引Neural Brew，Moonshot AI已将Kimi K3.1 Pro完整权重上传Hugging Face。该模型为2.8万亿参数稀疏混合专家（MoE），上下文窗口100万token，采用宽松许可但对大规模商用保留限制条款。万亿参数开放模型配百万上下文，给基础设施团队提供了可对标头部闭源模型的基准对象，落地前需先核算硬件成本，2.8万亿参数MoE对推理显存和调度仍是高门槛。这是继DeepSeek开源框架、R1登Nature后中国开源大模型又一次权重级发布。",
      "url": "https://ai.dosa.dev/blog/today-in-ai-2026-11-05",
      "source": "Neural Brew / Moonshot AI",
      "category": "opensource",
      "tags": [
        "Moonshot",
        "Kimi K3.1 Pro",
        "开源权重",
        "稀疏MoE",
        "2.8万亿参数",
        "百万上下文"
      ],
      "heat": 4,
      "date": "2026-11-05"
    },
    {
      "id": "4",
      "title": "Together AI推出Together Compiler：Agent团队通宵重写GPU代码，超手写专家2.6倍",
      "summary": "Together Compiler用Agent团队自动重写GPU代码，超手写专家代码2.6倍",
      "detail": "据Together AI官方及dosa.dev简报，Together AI发布Together Compiler，由一组AI Agent通宵协作重写所服务模型背后的GPU代码。官方称其实验量是现有Agent系统的252倍，性能最高比手写专家代码快2.6倍。实际意义在于：新开源模型可在Together云端自动提速，客户无需改动，缩短了模型从发布到廉价可服务的时间差。它把传统依赖资深GPU工程师手工调优的编译优化交给Agent团队自动完成，是AI在基础设施内部的自我优化；推理效率优化已成为模型厂商和云厂商共同焦点。",
      "url": "https://ai.dosa.dev/blog/today-in-ai-2026-11-05",
      "source": "Together AI / dosa.dev",
      "category": "product_release",
      "tags": [
        "Together AI",
        "Together Compiler",
        "GPU代码",
        "Agent优化",
        "推理效率"
      ],
      "heat": 4,
      "date": "2026-11-05"
    },
    {
      "id": "5",
      "title": "Google发布GKE Workspaces：在K8s集群上提供持久化GPU/TPU笔记本环境",
      "summary": "Google发布GKE Workspaces，基于Kubeflow，提供持久化GPU/TPU笔记本",
      "detail": "据Google开源博客及dosa.dev简报，Google发布GKE Workspaces，基于开源Kubeflow Workspaces项目，是面向GKE的自托管AI/ML开发平台。它提供Web仪表盘，可选择IDE及GPU或TPU机型，在共享加速器上获得持久化Notebook，无需手写YAML；平台团队可控制允许的镜像和硬件。产品定位介于公有云Notebook服务和自建K8s训练集群之间，解决企业GPU/TPU资源池的按需分配与隔离，延续了Google底层开源、上层商业化封装的路线。",
      "url": "https://ai.dosa.dev/blog/today-in-ai-2026-11-05",
      "source": "Google Open Source Blog",
      "category": "product_release",
      "tags": [
        "Google",
        "GKE Workspaces",
        "Kubeflow",
        "Kubernetes",
        "GPU/TPU",
        "ML平台"
      ],
      "heat": 3,
      "date": "2026-11-05"
    },
    {
      "id": "6",
      "title": "虎鲸文娱「鲸锐AI」平台上线：集成50余视频模型，无限画布支持百人实时创作",
      "summary": "虎鲸文娱上线鲸锐AI平台，集成50余视频模型，支持千级节点百人协作",
      "detail": "据搜狐网11月5日报道，虎鲸文娱的行业首个AI影视制作与管理平台「鲸锐AI」于11月4日上线。平台聚焦制作可控、银幕级成片、成本可管理三目标，集成50余个主流AI视频模型与10余个自研模型，无限画布支持千级节点排布和百人实时协作。这类把多模型接入、流程管理、协作和成本核算整合在同一画布的产品，是2026年AI视频从单模型出片走向工业化制片管线的代表。随着Sand.ai等视频基础模型密集融资，AI影视工具链和模型层都在快速成熟。",
      "url": "https://m.sohu.com/a/1097597599_121627717/",
      "source": "搜狐网 / 虎鲸文娱",
      "category": "product_release",
      "tags": [
        "鲸锐AI",
        "虎鲸文娱",
        "AI视频",
        "影视制作",
        "协同创作"
      ],
      "heat": 3,
      "date": "2026-11-05"
    },
    {
      "id": "7",
      "title": "三呆科技Sand.ai完成2亿美元A+轮：10个月累计3亿美元，跻身视频生成独角兽",
      "summary": "Sand.ai完成2亿美元A+轮，10个月累计3亿美元，跻身视频生成独角兽",
      "detail": "据腾讯新闻、36氪、新京报贝壳财经11月5日报道，Sand.ai（三呆科技）完成2亿美元A+轮（约13.34亿元），为2026年第三轮融资，10个月累计3亿美元（约20.01亿元），跻身独角兽。本轮由基石资本、网宿科技（300017.SZ）联合领投，时代资本、磐霖资本、东证资本等参投，浦东创投及上海国资等参与。资金将用于视频基础模型研发、训练推理基建、产品迭代和全球拓展，公司未公布估值。这是Q4国内视频生成赛道继MiniMax后又一笔大额融资。",
      "url": "https://news.qq.com/rain/a/20261105A0A49E00",
      "source": "腾讯新闻 / 36氪 / 投资界",
      "category": "funding",
      "tags": [
        "Sand.ai",
        "三呆科技",
        "A+轮",
        "2亿美元",
        "视频生成",
        "独角兽"
      ],
      "heat": 5,
      "date": "2026-11-05"
    },
    {
      "id": "8",
      "title": "MiniMax完成20亿美元新一轮融资：超额认购7倍，吸引亚欧美100余家投资者",
      "summary": "MiniMax完成20亿美元融资，超额认购7倍，投向基建、研发与全球扩张",
      "detail": "据AI D-A-M-N 11月5日报道，MiniMax完成新一轮融资，规模160亿港元（超20亿美元），超额认购7倍，吸引亚欧美100余家投资者。资金将补充储备，支撑AI基础设施、前沿模型研发和全球商业扩张。MiniMax是国内少数在大模型、视频生成、语音合成均有产品落地的厂商，本轮规模在2026年国内一级市场位居前列。结合同日Sand.ai的2亿美元A+轮，视频生成和多模态仍是资本主线，但投资者对算力成本、商业化和估值回报的审视也在趋严。",
      "url": "https://ai-damn.com/minimax-raises-2b-in-funding-round-oversubscribed-7-times-1783897411036",
      "source": "AI D-A-M-N",
      "category": "funding",
      "tags": [
        "MiniMax",
        "20亿美元",
        "超额认购7倍",
        "基础设施",
        "全球化",
        "多模态"
      ],
      "heat": 4,
      "date": "2026-11-05"
    },
    {
      "id": "9",
      "title": "加拿大Cohere完成E轮首期7.155亿美元：Schwarz Group领投，英伟达与加拿大政府参投",
      "summary": "加拿大Cohere完成E轮首期7.155亿美元，英伟达与加拿大政府参投",
      "detail": "据IBL News 11月5日报道，加拿大Cohere宣布E轮首期关闭，目标最高募资7.155亿美元，Schwarz Group领投，Bell Ventures、Inovia、NVIDIA、Prosperity7及加拿大政府等新老股东参与。Cohere定位美中之外的前沿AI公司，主攻企业级RAG、企业搜索和定制部署。在大模型格局高度集中于中美厂商的背景下，欧加中东资本持续为「第三极」注资，保留主权AI和企业合规部署的独立选项；英伟达同时作为芯片供应商和战投参与本轮。",
      "url": "https://iblnews.org/story/canadian-cohere-raises-another-715-5-to-build-a-frontier-ai-company-outside-the-u-s-and-china",
      "source": "IBL News",
      "category": "funding",
      "tags": [
        "Cohere",
        "E轮",
        "7.155亿美元",
        "加拿大",
        "英伟达",
        "企业AI"
      ],
      "heat": 4,
      "date": "2026-11-05"
    },
    {
      "id": "10",
      "title": "OpenAI收购开发者工具初创Pierre Computer：开源库已支撑Codex，对标微软GitHub",
      "summary": "OpenAI收购工具初创Pierre Computer，开源库已接入Codex，对标GitHub",
      "detail": "据SiliconANGLE、dosa.dev 11月4-5日报道，OpenAI宣布收购开发者工具初创Pierre Computer Company，金额未披露。Pierre运营存储Agent编写代码的云服务，宣称性能优于同类，曾帮Lovable把代码搜索延迟降约70%；其开源库Trees和Diffs已支撑Codex接口，收购后仍保持开源，付费托管功能并入Codex。外界解读为对标微软GitHub。此前OpenAI公布Pando引擎加速内部Git环境，收购Pierre后将打通Agent贯穿分支、评审、合并的完整流程，交易仍需监管批准。",
      "url": "https://www.dailyaithread.com/en/archive/2026-11-05",
      "source": "SiliconANGLE / OpenAI",
      "category": "funding",
      "tags": [
        "OpenAI",
        "Pierre Computer",
        "收购",
        "Codex",
        "Git工具",
        "GitHub"
      ],
      "heat": 3,
      "date": "2026-11-05"
    },
    {
      "id": "11",
      "title": "Nooks获General Catalyst 5亿美元承诺：收益分成结构融资，推出Revenue Agent平台",
      "summary": "Nooks获5亿美元承诺，按收益分成融资，推出销售Revenue Agent平台",
      "detail": "据Reuters及dosa.dev简报，Nooks从General Catalyst旗下Customer Value Fund获5亿美元承诺，支撑销售与市场扩张，并推出Revenue Agent Platform。本轮结构特殊：基金不占传统股权，按资本产生的收益分成。报道指出Agent初创正越来越多以收益分成条款融资，签约前需理解其对后续股权和退出的影响。Nooks做销售场景AI Agent，承担外呼、线索跟进和转化，这一案例既是Agent商业化样本，也反映市场对能直接带来收入的Agent公司给予更激进资金支持。",
      "url": "https://ai.dosa.dev/blog/today-in-ai-2026-11-05",
      "source": "Reuters / dosa.dev",
      "category": "funding",
      "tags": [
        "Nooks",
        "5亿美元",
        "General Catalyst",
        "收益分成",
        "销售Agent"
      ],
      "heat": 3,
      "date": "2026-11-05"
    },
    {
      "id": "12",
      "title": "SambaNova完成3.5亿美元E轮：放弃被Intel收购，选择保持独立",
      "summary": "SambaNova完成3.5亿美元E轮，放弃被Intel收购，选择保持独立",
      "detail": "据Tinta Tech 11月5日报道，AI芯片初创SambaNova取消与Intel的被收购谈判，转而完成3.5亿美元E轮融资，选择保持独立而非并入半导体巨头。公司宁愿保留独立性也要走自研路线。SambaNova主打面向大模型训练推理的自研加速硬件与软件栈，是美国少数坚持全栈AI芯片的初创。这一选择反映AI芯片赛道分化：一边被大厂并购整合，一边独立融资挑战英伟达；独立保留长期上行空间，但也要独自承担与英伟达、AMD及云厂商自研芯片正面竞争的风险。",
      "url": "https://tintatech.com/articulo/sambanova-elude-la-compra-de-intel-y-apuesta-por-su-propio-capital",
      "source": "Tinta Tech",
      "category": "funding",
      "tags": [
        "SambaNova",
        "E轮",
        "3.5亿美元",
        "AI芯片",
        "Intel",
        "独立发展"
      ],
      "heat": 3,
      "date": "2026-11-05"
    },
    {
      "id": "13",
      "title": "Stanford复现50项著名LLM研究：44%结论不再成立，谄媚与裁判偏见依旧顽固",
      "summary": "Stanford复现50项LLM研究，44%不再成立，谄媚与裁判偏见依旧顽固",
      "detail": "据dosa.dev简报援引Neural Brew，Stanford研究者Owen Queen和James Zou在20个近期模型上复现50项知名LLM实验，结果44%原始结论不再成立：幻觉引用等能力缺陷随迭代快速消退，而谄媚（迎合用户）和裁判模型偏爱自身输出的问题持续存在。现实意义在于：一两年前某项基准研究若被用来论证选模型，现在应在实际上线模型上重跑，历史结论不能直接沿用；裁判偏见和谄媚属行为对齐问题，比事实准确性更难靠规模扩张自动解决。",
      "url": "https://ai.dosa.dev/blog/today-in-ai-2026-11-05",
      "source": "Neural Brew / Stanford",
      "category": "research_paper",
      "tags": [
        "Stanford",
        "复现性",
        "LLM基准",
        "谄媚",
        "裁判模型偏见"
      ],
      "heat": 4,
      "date": "2026-11-05"
    },
    {
      "id": "14",
      "title": "帝国理工联合Ai2提出byteification：把现有LLM转为字节级系统，改善跨语言",
      "summary": "帝国理工联合Ai2提出字节化方法，把现有LLM转为字节级，改善跨语言",
      "detail": "据帝国理工学院官网11月3日报道，该校研究者联合Allen Institute for AI（Ai2）发布研究：通过byteification（字节化）流程，把现有LLM转换为字节级系统，直接处理文本底层数字表示，同时保留领先模型大部分能力。这种灵活性有望改善跨语言表现——传统子词分词器对多语言、罕见字符和代码存在盲区，字节级处理可绕开词表限制。研究属于架构与表征层改进，无需从零预训练，而是对已有模型做转换，落地成本相对可控。",
      "url": "https://www.imperial.ac.uk/news/articles/engineering/computing/2026/imperial-researcher-helps-overcome-long-standing-barrier-in-ai-language-models/",
      "source": "Imperial College London / Ai2",
      "category": "research_paper",
      "tags": [
        "帝国理工",
        "Ai2",
        "字节化",
        "分词器",
        "跨语言",
        "模型架构"
      ],
      "heat": 3,
      "date": "2026-11-05"
    },
    {
      "id": "15",
      "title": "西湖大学Pinal登上Nature：用自然语言提示直接设计蛋白质序列",
      "summary": "西湖大学Pinal登Nature，用自然语言提示生成蛋白质序列，可稳定达成目标",
      "detail": "据SingularityHub 11月2日报道，西湖大学团队在《自然》发表AI系统Pinal：可用自然语言描述目标蛋白质功能，Pinal据此生成蛋白质序列。模型会输出较多不合格产物，但实验室测试表明尝试次数足够多时能稳定达成目标。几十年来蛋白质设计高度依赖结构生物专家和复杂建模，自然语言交互显著降低了进入门槛。这是AI for Science中国团队又一成果，与近期AI辅助药物、RNA结构预测一起，把生物大分子设计从专家手艺推向可规模化的工程流程。",
      "url": "https://singularityhub.com/2026/11/02/scientists-can-now-ask-ai-to-design-proteins-using-plain-language/",
      "source": "SingularityHub / Nature",
      "category": "research_paper",
      "tags": [
        "西湖大学",
        "Pinal",
        "蛋白质设计",
        "自然语言",
        "Nature",
        "AI for Science"
      ],
      "heat": 3,
      "date": "2026-11-05"
    },
    {
      "id": "16",
      "title": "中科大开源StructRFM RNA基础模型登Nature，九章四号光量子原型机同期受关注",
      "summary": "中科大开源RNA模型StructRFM登Nature，九章四号光量子原型机同期受关注",
      "detail": "据AI Cup 11月5日报道，中科大发布开源RNA序列基础模型StructRFM，成果登Nature，为该校2026年第16篇CNS一作或通讯论文。RNA参与蛋白质合成、基因调控和剪接，功能与序列及折叠结构紧密相关；基础模型可在序列层学习RNA结构规律，辅助功能预测和设计。另据合肥日报，潘建伟、陆朝阳团队「九章四号」光量子原型机同期受关注，具备1024个量子压缩态输入、8176模式，成果今年5月发表于Nature。",
      "url": "https://aicup.vip/news/2026-11-05-ustc-open-sources-structrfm-rna-foundation-model",
      "source": "AI Cup / 合肥日报",
      "category": "research_paper",
      "tags": [
        "中科大",
        "StructRFM",
        "RNA",
        "基础模型",
        "开源",
        "九章四号"
      ],
      "heat": 3,
      "date": "2026-11-05"
    },
    {
      "id": "17",
      "title": "2026乌镇峰会闭幕：首次发布《携手构建全球开放人工智能行动倡议》，四方面18条",
      "summary": "乌镇峰会闭幕，首提《全球开放AI行动倡议》，四方面共18条行动",
      "detail": "据新华网11月5日报道，2026世界互联网大会乌镇峰会闭幕。秘书长任贤良介绍，主论坛围绕「开源开放」设乌镇对话，并首次发布《携手构建全球开放人工智能行动倡议》，从开放发展、安全可信、对话治理、互利包容四方面提出18条行动倡议。本届主题为「开源开放 共建共享」，AI开放与治理贯穿全程。这份倡议是多边层面开放AI合作的集体表态，后续落地要看各国在模型开放、数据流通、安全评估和包容性部署上的具体行动。",
      "url": "http://www.xinhuanet.com/20261105/17dfbf4604f14ddc8ce41be818763986/c.html",
      "source": "新华网",
      "category": "regulation",
      "tags": [
        "乌镇峰会",
        "闭幕",
        "开放AI行动倡议",
        "18条",
        "多边治理",
        "开源开放"
      ],
      "heat": 4,
      "date": "2026-11-05"
    },
    {
      "id": "18",
      "title": "欧盟法院顾问意见：AI聊天机器人未经许可摘要新闻可侵权，训练或受数据挖掘例外覆盖",
      "summary": "欧盟法院顾问：AI摘要新闻特定条件下可侵权，训练或受数据挖掘例外覆盖",
      "detail": "据AI Times、WSJ 11月4日报道，欧盟法院高级法律顾问就匈牙利出版商Like Company诉谷歌Gemini案发表意见：AI聊天机器人抓取新闻并在回答中复用，特定条件下可能侵权。情形包括绕开付费墙、可辨识复述原文，或答案完整到读者不必读原文；单纯传达事实不受保护。意见认为用文章训练或可受文本数据挖掘例外覆盖，即在训练与回答复用之间划线：训练相对开放，面向用户的复用受限。意见无约束力但ECJ通常采纳，最终裁决归匈牙利法院。",
      "url": "https://www.dailyaithread.com/en/archive/2026-11-05",
      "source": "AI Times / ECJ",
      "category": "regulation",
      "tags": [
        "欧盟",
        "ECJ",
        "版权",
        "AI聊天机器人",
        "Gemini",
        "新闻摘要"
      ],
      "heat": 3,
      "date": "2026-11-05"
    },
    {
      "id": "19",
      "title": "Google AI变现困境：Q3搜索收入增速降至12%，AI Mode单位收入低于传统搜索",
      "summary": "Google Q3搜索收入增速降至12%，AI Mode单位收入更低，基建投入约2000亿",
      "detail": "据The Verge、Daily AI Thread 11月4-5日报道，Alphabet Q3搜索收入同比增12%，低于上季约17%；付费点击增速从13%降至8%。搜索查询量五年最快增长，但首席商务官称AI Mode查询增长快、单位收入低于传统搜索，汇率也是放缓推手。Alphabet今年拟投入约2000亿美元基建，财报后股价跌约14%。若AI回答减少广告点击，巨额投资回报周期将被拉长；尚不清楚低收入是广告逐步投放的阶段性结果，还是AI搜索植入广告存在结构性难题，有分析师称这是Google核心业务数十年首次重大冲击。",
      "url": "https://www.dailyaithread.com/en/archive/2026-11-05",
      "source": "The Verge / Daily AI Thread",
      "category": "community_hot",
      "tags": [
        "Google",
        "Alphabet",
        "AI变现",
        "搜索收入",
        "AI Mode",
        "基础设施"
      ],
      "heat": 4,
      "date": "2026-11-05"
    },
    {
      "id": "20",
      "title": "OpenAI披露：ChatGPT搜索量已达Google的20%，政策官呼吁2028大选前定AI规则",
      "summary": "OpenAI称ChatGPT搜索量达Google两成；政策官呼吁2028大选前定AI规则",
      "detail": "据The Verge及日本AI气道11月5日报道，OpenAI称ChatGPT搜索量已达Google的20%，被视为对话式AI分流传统搜索的重要信号。配合Google AI Mode单位收入偏低、搜索增速放缓，搜索竞争格局生变：用户从关键词取链接转向直接提问，广告触点被重构。另据TechCrunch，OpenAI政策官Chris Lehane撰文称2028大选是AI决定性时刻，提出工人保护、教育、安全、数据中心等优先项，并呼吁可关停AI系统的kill switch、独立评估和公众监督；AI Now Institute批评其安全立场不真诚，认为缺防收入集中和工人分享收益的硬约束。",
      "url": "https://ai-kidou.jp/ainews-20261105/?billing_code=325&code=325",
      "source": "The Verge / AI气道 / TechCrunch",
      "category": "community_hot",
      "tags": [
        "OpenAI",
        "ChatGPT搜索",
        "Google",
        "搜索竞争",
        "2028大选",
        "AI政策"
      ],
      "heat": 3,
      "date": "2026-11-05"
    }
  ]
};
