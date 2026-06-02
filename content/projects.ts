import type { LocalizedList, LocalizedText } from "@/lib/i18n";

export type Project = {
  slug: string;
  featured: boolean;
  title: LocalizedText;
  subtitle: LocalizedText;
  period: LocalizedText;
  category: LocalizedText;
  techStack: string[];
  repo?: string;
  demo?: string;
  summary: LocalizedText;
  motivation: LocalizedText;
  features: LocalizedList;
  contribution: LocalizedList;
  learnings: LocalizedList;
};

const mlRepo = "https://github.com/Asdzzyandzzy/machine-learning-projects";

export const projects: Project[] = [
  {
    slug: "tencent-ai-hr-growth-quest",
    featured: true,
    title: {
      en: "Tencent AI-HR 90-Day Growth System",
      zh: "腾讯 AI-HR 新人 90 天成长系统"
    },
    subtitle: {
      en: "A Tencent AI-HR demo that turns newcomer profiles into growth paths, mentor feedback, HR views, and a stable product walkthrough.",
      zh: "一个基于腾讯 AI-HR 场景的 demo，将新人画像转化为成长路径、导师反馈、HR 视角和可演示的产品流程。"
    },
    period: {
      en: "Jun 2026",
      zh: "2026 年 6 月"
    },
    category: {
      en: "AI-Assisted Product Demo",
      zh: "AI 辅助产品 Demo"
    },
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "CloudBase", "TokenHub", "Recharts"],
    repo: "https://github.com/Asdzzyandzzy/Tencent_AI-HR_project",
    demo: "https://tencent-ai-hr-project-d0f38a5b27-1438457315.tcloudbaseapp.com/",
    summary: {
      en: "A Tencent AI-HR project focused on 90-day newcomer growth planning. The main purpose was to practice multi-agent collaboration, AI-assisted deployment, database integration, and turning a product idea into a working demo.",
      zh: "这是基于腾讯 AI-HR 场景完成的新人 90 天成长系统项目，重点实践 Multi-Agent 协作、AI 辅助网页部署、数据库接入，并将产品想法推进为可演示 demo。"
    },
    motivation: {
      en: "Project focus: I wanted to explore how an HR training idea can become a concrete product flow for newcomers, mentors, and HR reviewers instead of staying as a slide-level concept.",
      zh: "项目重点：我想探索如何把 HR 培养想法转化为新人、导师和 HR 都能实际使用的产品流程，而不是停留在概念展示。"
    },
    features: {
      en: [
        "Creates newcomer profiles and 30-60-90 day growth plans.",
        "Includes mentor feedback, HR review views, growth tasks, archives, and risk reminders.",
        "Provides a demo flow with mock data, AI generation, persistence, and fallback behavior."
      ],
      zh: [
        "支持新人画像录入和 30-60-90 天成长路径生成。",
        "包含导师反馈、HR 视角、成长任务、成长档案和风险提醒。",
        "支持 mock 数据、AI 生成、数据保存和异常回退，便于稳定演示。"
      ]
    },
    contribution: {
      en: [
        "Defined the Tencent AI-HR Project scenario around newcomer growth paths, mentor feedback, HR review, and growth tasks.",
        "Practiced a Codex + CodeBuddy multi-agent workflow: CodeBuddy handled implementation and deployment debugging, while Codex reviewed logic, wording, product flow, and edge cases.",
        "Used AI to assist webpage deployment and database integration, then manually checked whether flows were reasonable, data could be saved, errors could recover, and the demo stayed stable."
      ],
      zh: [
        "围绕腾讯 AI-HR Project 设计新人 90 天成长路径、导师反馈、HR 视角和成长任务。",
        "实践 Codex + CodeBuddy Multi-Agent 协作：CodeBuddy 负责实现和部署调试，Codex 负责审查、逻辑检查、表达校准和体验复盘。",
        "使用 AI 辅助网页部署和数据库接入，并人工检查 AI 输出，确保流程合理、数据可保存、异常可回退、demo 稳定。"
      ]
    },
    learnings: {
      en: [
        "Learned how to split an AI-assisted product idea into verifiable screens, data states, and review points.",
        "Practiced using agents as collaborators while keeping final judgment on product logic and language.",
        "Built better habits around demo stability, fallback behavior, and manual validation of AI output."
      ],
      zh: [
        "学习如何把 AI 辅助产品想法拆成可验证的页面、数据状态和评审点。",
        "练习把 agent 当作协作者使用，同时保留对产品逻辑和文字表达的人工判断。",
        "强化了 demo 稳定性、异常回退和人工校验 AI 输出的意识。"
      ]
    }
  },
  {
    slug: "fanqie-qwen-writing-pipeline",
    featured: true,
    title: {
      en: "Local Qwen Chinese Fiction Pipeline",
      zh: "本地 Qwen 中文短篇生成 Pipeline"
    },
    subtitle: {
      en: "A local Qwen writing workflow controlled by Python, built to simulate agent-like planning, memory, and continuation for fiction generation.",
      zh: "一个由 Python 控制本地 Qwen 模型的写作流程，用来模拟类似 Agent 的规划、记忆和续写能力。"
    },
    period: {
      en: "May 2026",
      zh: "2026 年 5 月"
    },
    category: {
      en: "AI-Assisted Writing Workflow",
      zh: "AI 辅助写作流程"
    },
    techStack: ["Python", "Qwen", "Local LLM", "Prompt Workflow", "Context Management"],
    repo: "https://github.com/Asdzzyandzzy/Fanqie-novel-generator",
    summary: {
      en: "A local Qwen writing pipeline controlled by Python, built to simulate agent-like writing behavior where the model asks itself questions, answers them, records context, and continues generating fiction.",
      zh: "使用本地 Qwen 模型和 Python 流程控制，模拟 Agent 的自驱式写作能力，让模型能够自己提问、回答、记录上下文并持续生成小说。"
    },
    motivation: {
      en: "Project focus: this was an exploration of prompt workflow, memory design, and long-form generation control with a local model rather than a cloud API.",
      zh: "项目重点：探索在不依赖云 API 的情况下，如何用本地模型完成 prompt 流程、记忆机制和长文本生成控制。"
    },
    features: {
      en: [
        "Runs a local Qwen model through a Python-controlled generation loop.",
        "Builds a fiction workflow for setting, outline, segmented continuation, context review, and draft output.",
        "Uses a lightweight memory mechanism so previous questions, answers, and story context can guide later writing."
      ],
      zh: [
        "通过 Python 控制本地 Qwen 模型调用，而不是使用云端 API。",
        "组织小说生成流程：设定、大纲、分段续写、上下文回顾和成稿。",
        "设计轻量记忆机制，让模型此前的提问、回答和故事上下文影响后续生成。"
      ]
    },
    contribution: {
      en: [
        "Designed the self-questioning loop where the model asks, answers, and summarizes its own context before continuing.",
        "Built the Python control flow for prompt sequencing, context recording, and staged generation.",
        "Manually reviewed generated text to keep the result coherent and to avoid overstating the system as a mature autonomous agent."
      ],
      zh: [
        "设计模型自问、自答、自整理上下文的流程，再进入后续续写。",
        "搭建 Python 控制流程，管理 prompt 顺序、上下文记录和分阶段生成。",
        "人工检查生成内容的连贯性，并将项目表述为“模拟 Agent 效果”，而不是成熟 Agent 系统。"
      ]
    },
    learnings: {
      en: [
        "Learned how fragile long-form generation becomes when context is not explicitly managed.",
        "Practiced designing memory and prompt steps as a workflow instead of a single prompt.",
        "Built intuition for the gap between an agent-like effect and a reliable agent system."
      ],
      zh: [
        "理解长文本生成在缺少上下文管理时很容易失控。",
        "练习把记忆和 prompt 步骤设计成流程，而不是只写一个大 prompt。",
        "更清楚地区分“类似 Agent 的效果”和可靠 Agent 系统之间的差距。"
      ]
    }
  },
  {
    slug: "ziyangzhou-me-website",
    featured: true,
    title: {
      en: "ZiyangZhou.com Portfolio Website",
      zh: "ZiyangZhou.com 个人作品集网站"
    },
    subtitle: {
      en: "A bilingual recruiter-facing portfolio that organizes projects, GitHub links, write-ups, resume content, and personal background.",
      zh: "一个面向招聘场景的中英双语作品集入口，集中整理项目、GitHub、项目说明、简历内容和个人经历。"
    },
    period: {
      en: "May 2026 - Present",
      zh: "2026 年 5 月 - 至今"
    },
    category: {
      en: "AI-Assisted Portfolio",
      zh: "AI 辅助作品集"
    },
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "App Router", "Cloudflare"],
    repo: "https://github.com/Asdzzyandzzy/ZiyangZhou_me_Website",
    summary: {
      en: "A personal portfolio site that organizes my projects, GitHub repositories, project write-ups, resume content, and bilingual presentation into one recruiter-facing entry point.",
      zh: "集中展示目前所有项目成果，并将作品集、GitHub 仓库、项目说明和简历内容整理成面向招聘场景的个人展示入口。"
    },
    motivation: {
      en: "Project focus: the site serves as an evidence center for my resume projects, not just a generic landing page.",
      zh: "项目重点：这个网站是简历项目的“证据中心”，不是普通 landing page。"
    },
    features: {
      en: [
        "Shows bilingual project cards and detail pages.",
        "Links project write-ups, repositories, resume access, profile content, and contact information.",
        "Keeps content in structured files so project updates can be made without redesigning the site."
      ],
      zh: [
        "展示中英双语项目卡片和项目详情页。",
        "整合项目说明、仓库链接、简历入口、个人介绍和联系方式。",
        "使用结构化内容文件维护项目，便于更新内容而不重做网站。"
      ]
    },
    contribution: {
      en: [
        "Organized current work into a recruiter-facing information structure.",
        "Used AI assistance to refine the content hierarchy and bilingual wording while checking that the site still matched my actual projects.",
        "Maintained the site as a project evidence center rather than presenting it as a complex engineering system."
      ],
      zh: [
        "整理目前所有作品、GitHub、项目说明、简历内容和个人经历。",
        "使用 AI 辅助梳理信息架构和中英文表达，并人工确认内容与真实项目一致。",
        "将网站定位为简历项目的证据中心，而不是包装成复杂工程系统。"
      ]
    },
    learnings: {
      en: [
        "Learned how portfolio content needs different levels of detail for cards, detail pages, and resume links.",
        "Practiced bilingual editing that stays concrete and interview-ready.",
        "Built a habit of treating project pages as maintained evidence instead of one-time decoration."
      ],
      zh: [
        "学习作品集内容在卡片、详情页和简历链接中需要不同的信息密度。",
        "练习写真实、克制、能在面试中解释的中英文内容。",
        "建立了把项目页面当作持续维护证据，而不是一次性装饰的习惯。"
      ]
    }
  },
  {
    slug: "chatgpt-local-api-creator",
    featured: true,
    title: {
      en: "ChatGPT API Browser Bridge",
      zh: "ChatGPT API 浏览器工具"
    },
    subtitle: {
      en: "A local API/browser bridge for letting local scripts and agents call stronger model capabilities with better context control.",
      zh: "一个本地 API/浏览器桥接工具，用于让本地脚本和 Agent 调用更强模型能力并控制上下文。"
    },
    period: {
      en: "May 2026",
      zh: "2026 年 5 月"
    },
    category: {
      en: "AI-Assisted Tooling",
      zh: "AI 辅助工具"
    },
    techStack: ["Electron", "Node.js", "HTTP API", "Browser Automation", "Localhost"],
    repo: "https://github.com/Asdzzyandzzy/chatgpt-local-api-creator",
    summary: {
      en: "A local API/browser bridge that lets local models and agents call stronger model capabilities, especially for long-form generation where token usage and context control matter.",
      zh: "让本地模型和 Agent 通过 API/浏览器工具调用更强模型能力，在长文本任务中减少 token 浪费并提升生成质量。"
    },
    motivation: {
      en: "Project focus: local models can handle task splitting and flow control, while complex generation can be delegated to a stronger model when context length and output quality matter.",
      zh: "项目重点：让本地模型负责拆任务和控制流程，把复杂生成任务交给更强模型，尤其适合长文本和上下文控制场景。"
    },
    features: {
      en: [
        "Exposes localhost-only endpoints for sending prompts and reading responses.",
        "Supports browser-based access to ChatGPT conversations and project workflows.",
        "Reduces repeated input by letting local scripts reuse context and call stronger model steps only when needed."
      ],
      zh: [
        "提供仅 localhost 访问的接口，用于发送 prompt 和读取回复。",
        "支持通过浏览器访问 ChatGPT 对话和 Project 工作流。",
        "通过本地脚本复用上下文，减少重复输入和无效上下文占用。"
      ]
    },
    contribution: {
      en: [
        "Defined the tool as a bridge for local model workflows rather than a replacement for model reasoning.",
        "Designed endpoints for prompt submission, reply reading, project navigation, diagnostics, and recovery.",
        "Kept the emphasis on token control and long-form generation quality rather than on manual login mechanics."
      ],
      zh: [
        "将工具定位为本地模型工作流的桥接层，而不是替代模型推理。",
        "设计 prompt 提交、回复读取、Project 导航、诊断和刷新恢复等端点。",
        "重点放在 token 节省、上下文控制和长文本质量提升，而不是人工登录。"
      ]
    },
    learnings: {
      en: [
        "Learned how local tools can coordinate model calls without overloading every step with large context.",
        "Practiced designing AI workflow utilities with clear boundaries and local-only access.",
        "Improved my understanding of where browser automation is useful and where it becomes brittle."
      ],
      zh: [
        "学习本地工具如何协调模型调用，而不是让每一步都携带大量上下文。",
        "练习设计边界清晰、仅本地访问的 AI 工作流工具。",
        "理解浏览器自动化适合做什么，以及哪些地方容易变得脆弱。"
      ]
    }
  },
  {
    slug: "airbnb-price-modeling",
    featured: true,
    title: {
      en: "Airbnb Listing Price Modeling",
      zh: "Airbnb 房源价格预测建模"
    },
    subtitle: {
      en: "An end-to-end tabular modeling project for predicting New York City Airbnb listing prices.",
      zh: "一个基于纽约 Airbnb 房源数据的端到端表格建模项目。"
    },
    period: {
      en: "May 2026",
      zh: "2026 年 5 月"
    },
    category: {
      en: "Machine Learning",
      zh: "机器学习"
    },
    techStack: ["Python", "Pandas", "Scikit-learn", "Random Forest", "ColumnTransformer", "GridSearchCV"],
    repo: mlRepo,
    summary: {
      en: "An end-to-end tabular modeling project for predicting New York City Airbnb listing prices, covering task framing, train/test split, EDA, feature engineering, model training, and evaluation.",
      zh: "基于纽约 Airbnb 房源数据构建价格预测模型，完成任务定义、训练/测试集划分、探索性分析、特征工程、模型训练和评估。"
    },
    motivation: {
      en: "I used this project to practice the full supervised learning workflow on a realistic tabular dataset with mixed numerical and categorical features.",
      zh: "我用这个项目练习在真实表格数据上完成完整监督学习流程，尤其是数值特征和类别特征混合处理。"
    },
    features: {
      en: [
        "Frames listing price as a supervised regression problem.",
        "Uses preprocessing for mixed feature types and model comparison.",
        "Evaluates model behavior after feature engineering and hyperparameter search."
      ],
      zh: [
        "将房源价格建模为监督回归任务。",
        "处理数值和类别特征，并比较不同建模方案。",
        "在特征工程和参数搜索后评估模型表现。"
      ]
    },
    contribution: {
      en: [
        "Prepared train/test splits, exploratory analysis, and feature transformations.",
        "Built a Scikit-learn pipeline with ColumnTransformer and Random Forest modeling.",
        "Used GridSearchCV to tune model settings and compare evaluation results."
      ],
      zh: [
        "完成训练/测试集划分、探索性分析和特征转换。",
        "使用 ColumnTransformer 和 Random Forest 搭建 Scikit-learn pipeline。",
        "通过 GridSearchCV 调参，并比较模型评估结果。"
      ]
    },
    learnings: {
      en: [
        "Strengthened practical understanding of feature preprocessing for tabular ML.",
        "Learned how model performance depends on task framing and data quality.",
        "Practiced interpreting regression results beyond a single score."
      ],
      zh: [
        "加强了对表格机器学习中特征预处理的理解。",
        "理解模型表现与任务定义和数据质量密切相关。",
        "练习不只依赖单一分数来解释回归结果。"
      ]
    }
  },
  {
    slug: "text-embeddings-topic-modeling",
    featured: true,
    title: {
      en: "NLP Text Analysis and Topic Modeling",
      zh: "NLP 文本分析与主题建模项目"
    },
    subtitle: {
      en: "A formal NLP notebook project combining embeddings, similarity analysis, preprocessing, and LDA topic modeling.",
      zh: "一个正式 NLP notebook 项目，结合词向量、相似度分析、文本预处理和 LDA 主题建模。"
    },
    period: {
      en: "May 2026",
      zh: "2026 年 5 月"
    },
    category: {
      en: "Natural Language Processing",
      zh: "自然语言处理"
    },
    techStack: ["Python", "Jupyter Notebook", "Scikit-learn", "spaCy", "Gensim", "GloVe", "LDA"],
    repo: mlRepo,
    summary: {
      en: "A formal NLP notebook project combining GloVe embeddings, word similarity analysis, representation bias discussion, spaCy preprocessing, and LDA topic modeling.",
      zh: "这是正式 NLP 项目，不是 vibe coding。内容包括文本预处理、GloVe 词向量、词相似度、embedding bias、LDA 主题模型，以及 word-topic / document-topic 解释。"
    },
    motivation: {
      en: "I wanted to connect classic NLP ideas with hands-on notebooks: vector representations, preprocessing choices, topic-word distributions, and document-level interpretation.",
      zh: "我希望把经典 NLP 概念落实到 notebook 实践中，包括向量表示、预处理选择、主题词分布和文档层面的解释。"
    },
    features: {
      en: [
        "Explores GloVe embeddings and word similarity.",
        "Uses spaCy preprocessing before topic modeling.",
        "Builds and interprets LDA topic models through word-topic and document-topic views."
      ],
      zh: [
        "分析 GloVe 词向量和词语相似度。",
        "使用 spaCy 做文本预处理后再进行主题建模。",
        "通过 word-topic 和 document-topic 视角解释 LDA 主题模型。"
      ]
    },
    contribution: {
      en: [
        "Prepared notebook workflows for embeddings, similarity checks, preprocessing, and topic modeling.",
        "Discussed representation bias and limitations of embedding-based analysis.",
        "Interpreted topic model outputs rather than only reporting model artifacts."
      ],
      zh: [
        "整理词向量、相似度检查、预处理和主题建模 notebook 流程。",
        "讨论 embedding 表示偏差和向量分析的局限。",
        "解释主题模型输出，而不是只展示模型结果。"
      ]
    },
    learnings: {
      en: [
        "Learned how preprocessing decisions affect downstream NLP interpretation.",
        "Practiced connecting mathematical representations to readable explanations.",
        "Built a more cautious view of embedding similarity and topic labels."
      ],
      zh: [
        "理解文本预处理选择如何影响后续 NLP 解释。",
        "练习把数学表示转化为可读分析。",
        "对 embedding 相似度和主题命名建立了更谨慎的理解。"
      ]
    }
  },
  {
    slug: "recipe-clustering",
    featured: true,
    title: {
      en: "Recipe Text Clustering",
      zh: "Recipe 文本聚类与无监督学习分析"
    },
    subtitle: {
      en: "An unsupervised text clustering project comparing bag-of-words and sentence embeddings for recipe-name clustering.",
      zh: "一个比较 bag-of-words 和 sentence embeddings 的菜谱短文本无监督聚类项目。"
    },
    period: {
      en: "May 2026",
      zh: "2026 年 5 月"
    },
    category: {
      en: "Machine Learning",
      zh: "机器学习"
    },
    techStack: ["Python", "Scikit-learn", "K-means", "DBSCAN", "SentenceTransformer", "UMAP"],
    repo: mlRepo,
    summary: {
      en: "An unsupervised text clustering project comparing bag-of-words and sentence embeddings for recipe-name clustering, using K-means, DBSCAN, and UMAP visualization.",
      zh: "基于菜谱名称和文本信息进行无监督聚类，比较 bag-of-words 与 sentence embeddings，使用 K-means、DBSCAN 和 UMAP 分析短文本聚类效果。"
    },
    motivation: {
      en: "This project helped me test how different text representations change clustering behavior on short, noisy recipe names.",
      zh: "这个项目帮助我观察不同文本表示方式如何影响短文本、噪声文本的聚类效果。"
    },
    features: {
      en: [
        "Compares bag-of-words features with sentence embeddings.",
        "Runs K-means and DBSCAN clustering.",
        "Uses UMAP to visualize clusters and inspect whether groups are meaningful."
      ],
      zh: [
        "比较 bag-of-words 特征和 sentence embeddings。",
        "使用 K-means 和 DBSCAN 进行聚类。",
        "通过 UMAP 可视化聚类结果，并检查分组是否有意义。"
      ]
    },
    contribution: {
      en: [
        "Prepared text representations and clustering experiments.",
        "Compared algorithm behavior across sparse text features and dense embeddings.",
        "Reviewed cluster outputs qualitatively instead of assuming labels were correct."
      ],
      zh: [
        "准备文本表示并组织聚类实验。",
        "比较稀疏文本特征和 dense embeddings 下的算法表现。",
        "对聚类结果做人工观察，而不是默认聚类标签正确。"
      ]
    },
    learnings: {
      en: [
        "Learned why short-text clustering is sensitive to representation choices.",
        "Practiced evaluating unsupervised learning without ground-truth labels.",
        "Built intuition for when visualization helps and when it can mislead."
      ],
      zh: [
        "理解短文本聚类为什么对表示方式很敏感。",
        "练习在没有真实标签时评估无监督学习结果。",
        "建立了对可视化帮助与误导边界的判断。"
      ]
    }
  },
  {
    slug: "astock-analysis-toolkit",
    featured: true,
    title: {
      en: "AI-Assisted Stock Analysis Dashboard",
      zh: "AI 股票分析与可视化工具"
    },
    subtitle: {
      en: "An AI-assisted dashboard project that turns personal A-share research questions into interactive market-data views.",
      zh: "一个 AI 辅助的数据分析 dashboard 项目，将个人 A 股投研问题转化为可交互图表。"
    },
    period: {
      en: "Aug 2025 - Present",
      zh: "2025 年 8 月 - 至今"
    },
    category: {
      en: "AI-Assisted Data Dashboard",
      zh: "AI 辅助数据看板"
    },
    techStack: ["Python", "Streamlit", "AKShare", "Plotly", "Pandas", "Scikit-learn"],
    repo: "https://github.com/Asdzzyandzzy/AStock_Analysis",
    summary: {
      en: "An AI-assisted data analysis dashboard project that turns personal stock research questions into an interactive dashboard through requirement breakdown, modularization, and visualization iteration.",
      zh: "使用 AI 辅助完成数据分析工具的需求拆解、模块整理和可视化迭代，将个人投研观察转化为可交互 Dashboard。"
    },
    motivation: {
      en: "Project focus: the dashboard is for observing intraday signals, order flow, large orders, fund-flow estimates, and data patterns. It is not a stable prediction system or trading recommendation engine.",
      zh: "项目重点：用于观察日内行情、逐笔成交、资金流、大单行为和数据模式，不是稳定预测系统，也不是交易建议系统。"
    },
    features: {
      en: [
        "Shows intraday quotes, tick transactions, large-order behavior, fund-flow estimates, and price-level changes.",
        "Separates observation indicators from trading recommendations.",
        "Includes experimental anomaly detection, classification, and clustering modules as research examples."
      ],
      zh: [
        "展示 Dashboard、行情、逐笔成交、资金流、大单行为和日内变化。",
        "明确区分“观察指标”和“交易建议”。",
        "异常检测、分类和聚类只是实验模块，不是实盘系统。"
      ]
    },
    contribution: {
      en: [
        "Used AI assistance to split data fetching, cleaning, indicator calculation, chart display, and module structure.",
        "Reviewed AI-generated code and charts manually to keep field handling, empty-data cases, and visual output understandable.",
        "Kept the project framed as exploratory analysis rather than a mature financial product."
      ],
      zh: [
        "使用 AI 辅助拆分数据获取、清洗、指标计算、图表展示和模块结构。",
        "人工审查 AI 生成代码和图表，确认字段处理、空数据情况和可视化结果可理解。",
        "将项目保持为探索性分析工具，而不是包装成成熟金融产品。"
      ]
    },
    learnings: {
      en: [
        "Learned how financial-data tools need careful wording around observation versus advice.",
        "Practiced AI-assisted modularization for data dashboards.",
        "Improved awareness of data-source instability, field changes, and visualization edge cases."
      ],
      zh: [
        "学习金融数据工具中“观察”和“建议”的表达边界。",
        "练习用 AI 辅助拆解数据 dashboard 模块。",
        "提升了对数据源不稳定、字段变化和可视化边界情况的意识。"
      ]
    }
  },
  {
    slug: "adult-census-preprocessing-pipeline",
    featured: true,
    title: {
      en: "Adult Census Preprocessing Pipeline",
      zh: "Adult Census 数据预处理与分类 Pipeline"
    },
    subtitle: {
      en: "A supervised learning pipeline project focused on preprocessing, leakage prevention, and baseline comparison.",
      zh: "一个监督学习 pipeline 项目，重点体现预处理、防止数据泄漏和基线模型比较。"
    },
    period: {
      en: "May 2026",
      zh: "2026 年 5 月"
    },
    category: {
      en: "Machine Learning",
      zh: "机器学习"
    },
    techStack: ["Python", "Scikit-learn", "ColumnTransformer", "Pipeline", "Decision Tree", "One-hot Encoding"],
    repo: mlRepo,
    summary: {
      en: "A supervised learning pipeline project on the Adult Census dataset, focused on feature type separation, imputation, encoding, scaling, leakage prevention, and baseline comparison.",
      zh: "基于 Adult Census 数据集构建监督学习 pipeline，重点体现特征类型拆分、缺失值填补、编码、标准化、防止数据泄漏和基线模型比较。"
    },
    motivation: {
      en: "I used this project to practice the less glamorous but important parts of ML: preprocessing discipline, pipeline structure, and fair evaluation.",
      zh: "我用这个项目练习机器学习中不那么显眼但很重要的部分：预处理规范、pipeline 结构和公平评估。"
    },
    features: {
      en: [
        "Separates numerical and categorical features.",
        "Uses imputation, one-hot encoding, scaling, and model steps inside a pipeline.",
        "Compares baselines while reducing leakage risk."
      ],
      zh: [
        "拆分数值特征和类别特征。",
        "在 pipeline 中完成缺失值填补、one-hot 编码、标准化和建模。",
        "比较基线模型，同时降低数据泄漏风险。"
      ]
    },
    contribution: {
      en: [
        "Designed preprocessing steps with ColumnTransformer and Pipeline.",
        "Implemented baseline classification with attention to train/test separation.",
        "Checked how preprocessing choices affect model evaluation."
      ],
      zh: [
        "使用 ColumnTransformer 和 Pipeline 设计预处理流程。",
        "实现基线分类模型，并注意训练/测试分离。",
        "检查预处理选择如何影响模型评估。"
      ]
    },
    learnings: {
      en: [
        "Learned why pipelines are safer than ad hoc preprocessing.",
        "Practiced thinking about leakage before model scores.",
        "Built stronger habits for structured ML experimentation."
      ],
      zh: [
        "理解为什么 pipeline 比临时预处理更可靠。",
        "练习在看模型分数前先考虑数据泄漏。",
        "建立更规范的机器学习实验习惯。"
      ]
    }
  },
  {
    slug: "cpsc221-labs",
    featured: true,
    title: {
      en: "CPSC 221 Labs",
      zh: "CPSC 221 课程实验"
    },
    subtitle: {
      en: "A UBC CPSC 221 coursework repository focused on C++ data structures, algorithms, memory behavior, debugging, and testing.",
      zh: "UBC CPSC 221 的 C++ 课程实验仓库，重点练习数据结构、算法、内存行为、调试和测试。"
    },
    period: {
      en: "Mar 2025",
      zh: "2025 年 3 月"
    },
    category: {
      en: "Computer Science Coursework",
      zh: "计算机科学课程"
    },
    techStack: ["C++", "Data Structures", "Algorithms", "Debugging", "Testing"],
    repo: "https://github.com/Asdzzyandzzy/CPSC221-LABS",
    summary: {
      en: "A UBC CPSC 221 coursework repository focused on C++ data structures, algorithm implementation, memory behavior, debugging, and code organization. The value is implementation discipline rather than product polish.",
      zh: "UBC CPSC 221 的 C++ 课程实验仓库，重点练习数据结构、算法实现、内存行为、调试和代码组织。这个项目不是产品展示，而是计算机基础能力的代码证据。"
    },
    motivation: {
      en: "I kept this as one coursework project because I could not reliably verify specific lab folders through the GitHub API during this update.",
      zh: "由于本次更新中无法通过 GitHub API 稳定确认具体 lab 文件夹内容，因此保留为一个课程实验总项目。"
    },
    features: {
      en: [
        "Documents C++ coursework practice rather than a product workflow.",
        "Focuses on data structures, algorithm implementation, memory behavior, debugging, and testing.",
        "Keeps code organization visible as evidence of foundational CS practice."
      ],
      zh: [
        "记录 C++ 课程实验实践，而不是产品工作流。",
        "重点是数据结构、算法实现、内存行为、调试和测试。",
        "将代码组织作为计算机基础训练的证据。"
      ]
    },
    contribution: {
      en: [
        "Completed lab implementation and debugging work as part of UBC CPSC 221.",
        "Practiced writing and organizing C++ code under course constraints.",
        "Kept the description grounded in coursework rather than AI-assisted development."
      ],
      zh: [
        "完成 UBC CPSC 221 课程实验中的实现和调试工作。",
        "在课程约束下练习 C++ 代码编写和组织。",
        "保持课程项目表述，不写成 AI-assisted 项目。"
      ]
    },
    learnings: {
      en: [
        "Built stronger habits around reasoning about data structures.",
        "Practiced debugging at a lower level than typical scripting projects.",
        "Improved awareness of implementation details behind higher-level software."
      ],
      zh: [
        "建立更扎实的数据结构推理习惯。",
        "练习比脚本项目更底层的错误排查和调试。",
        "更清楚地理解高层软件背后的实现细节。"
      ]
    }
  },
  {
    slug: "sleep-app",
    featured: true,
    title: {
      en: "Sleep Tracking App",
      zh: "睡眠追踪 App"
    },
    subtitle: {
      en: "A Java application for recording sleep, setting goals, and reviewing habits over time.",
      zh: "一个用 Java 编写的睡眠记录应用，用来记录作息、设定目标并回看习惯变化。"
    },
    period: {
      en: "May 2026",
      zh: "2026 年 5 月"
    },
    category: {
      en: "Application Development",
      zh: "应用开发"
    },
    techStack: ["Java", "OOP", "Data Modeling", "User Stories"],
    repo: "https://github.com/Asdzzyandzzy/sleep-app",
    summary: {
      en: "A small Java app built around the personal problem of recording sleep consistently, comparing it with goals, and reviewing patterns over time.",
      zh: "一个小型 Java 应用，围绕持续记录睡眠、对比个人目标和复盘长期习惯这个真实问题展开。"
    },
    motivation: {
      en: "I wanted to practice object-oriented design through an application whose data model and user stories were easy to reason about.",
      zh: "我希望通过一个数据模型和用户故事都容易理解的应用练习面向对象设计。"
    },
    features: {
      en: [
        "Records sleep sessions and personal targets.",
        "Compares actual sleep with goals.",
        "Summarizes habits so patterns can be reviewed over time."
      ],
      zh: [
        "记录睡眠时段和个人目标。",
        "对比实际睡眠和目标。",
        "汇总习惯，便于长期复盘。"
      ]
    },
    contribution: {
      en: [
        "Translated user stories into Java classes and application behavior.",
        "Designed the data model for logs, goals, and summaries.",
        "Kept the scope focused on clear object-oriented practice."
      ],
      zh: [
        "把用户故事转化为 Java 类和具体应用行为。",
        "设计睡眠记录、目标和统计汇总的数据模型。",
        "控制项目范围，重点练习清晰的面向对象设计。"
      ]
    },
    learnings: {
      en: [
        "Practiced OOP with a complete personal-use application.",
        "Learned how product decisions appear in small class design choices.",
        "Improved comfort with Java project organization."
      ],
      zh: [
        "通过完整个人应用练习 OOP。",
        "理解产品决策也会体现在小的类设计选择中。",
        "提升了 Java 项目组织的熟练度。"
      ]
    }
  },
  {
    slug: "glass-futures-trading-strategy",
    featured: true,
    title: {
      en: "China Glass Futures Quantitative Strategy",
      zh: "中国玻璃期货量化交易策略"
    },
    subtitle: {
      en: "A trading-strategy research project focused on strategy logic, backtest review, drawdown, market regimes, and parameter stability.",
      zh: "一个期货策略研究项目，重点分析策略逻辑、回测复盘、回撤、行情阶段和参数稳定性。"
    },
    period: {
      en: "2025",
      zh: "2025 年"
    },
    category: {
      en: "Quantitative Research",
      zh: "量化研究"
    },
    techStack: ["TradingView", "Pine Script", "Python", "Pandas", "Matplotlib", "Backtesting"],
    repo: "https://github.com/Asdzzyandzzy/glass-futures-trading-strategy",
    summary: {
      en: "A quantitative research project for China glass futures that reviews strategy logic, backtest behavior, market regimes, drawdown, trade frequency, and parameter stability instead of only highlighting returns.",
      zh: "一个中国玻璃期货量化交易策略项目，重点复盘策略逻辑、回测表现、行情阶段、回撤、交易频率和参数稳定性，而不是只突出收益数字。"
    },
    motivation: {
      en: "I used this project to practice turning a trading idea into a testable strategy while staying cautious about transaction costs, slippage, and parameter sensitivity.",
      zh: "我用这个项目练习把交易想法转化为可测试策略，同时关注手续费、滑点和参数敏感性。"
    },
    features: {
      en: [
        "Implements strategy logic in TradingView/Pine Script.",
        "Reviews performance under trends, volatile regimes, and extreme moves.",
        "Considers drawdown, trade frequency, parameter stability, transaction costs, and slippage assumptions."
      ],
      zh: [
        "使用 TradingView/Pine Script 实现策略逻辑。",
        "复盘趋势、震荡和极端行情下的表现。",
        "关注回撤、交易频率、参数稳定性、手续费和滑点假设。"
      ]
    },
    contribution: {
      en: [
        "Built and reviewed the strategy logic with backtest outputs.",
        "Analyzed market-regime behavior rather than treating one return number as the full result.",
        "Kept the project framed as research and review, not investment advice."
      ],
      zh: [
        "搭建策略逻辑并结合回测结果复盘。",
        "分析不同市场状态下的表现，而不是把单一收益数字当成全部结论。",
        "将项目定位为研究和复盘，不构成投资建议。"
      ]
    },
    learnings: {
      en: [
        "Learned to evaluate trading strategies through risk and stability, not only return.",
        "Practiced documenting assumptions around costs and slippage.",
        "Built more cautious habits for financial project communication."
      ],
      zh: [
        "学习从风险和稳定性评估策略，而不只看收益。",
        "练习记录手续费和滑点等假设。",
        "建立更谨慎的金融项目表达习惯。"
      ]
    }
  },
  {
    slug: "logistic-regression-text-classification",
    featured: false,
    title: {
      en: "Logistic Regression Text Classification",
      zh: "文本分类中的 Logistic Regression 优化"
    },
    subtitle: {
      en: "A tweet classification project moving from a dummy baseline to bag-of-words logistic regression.",
      zh: "一个推文二分类项目，从 Dummy Classifier 基线推进到 bag-of-words 与 Logistic Regression。"
    },
    period: {
      en: "May 2026",
      zh: "2026 年 5 月"
    },
    category: {
      en: "Machine Learning",
      zh: "机器学习"
    },
    techStack: ["Python", "Scikit-learn", "Logistic Regression", "CountVectorizer", "GridSearchCV", "Cross-validation"],
    repo: mlRepo,
    summary: {
      en: "A tweet text classification project that moves from a dummy baseline to logistic regression with bag-of-words features, hyperparameter tuning, and coefficient interpretation.",
      zh: "基于推文数据构建二分类文本分类模型，从 Dummy Classifier 基线开始，使用 CountVectorizer 和 Logistic Regression，并调试文本向量化与正则化参数。"
    },
    motivation: {
      en: "The goal was to practice building a defensible baseline before tuning a text classifier.",
      zh: "项目目标是先建立可解释的基线，再进行文本分类模型调参。"
    },
    features: {
      en: [
        "Starts with a dummy classifier baseline.",
        "Uses CountVectorizer and logistic regression for bag-of-words classification.",
        "Tunes vectorization and regularization settings with cross-validation."
      ],
      zh: [
        "从 Dummy Classifier 基线开始。",
        "使用 CountVectorizer 和 Logistic Regression 进行 bag-of-words 分类。",
        "通过交叉验证调试向量化和正则化参数。"
      ]
    },
    contribution: {
      en: [
        "Built baseline and logistic-regression workflows.",
        "Compared tuned parameters and interpreted model coefficients.",
        "Used evaluation results to decide whether changes improved the classifier."
      ],
      zh: [
        "搭建基线模型和 Logistic Regression 工作流。",
        "比较调参结果并解释模型系数。",
        "根据评估结果判断改动是否真正提升分类器。"
      ]
    },
    learnings: {
      en: [
        "Learned why a simple baseline matters for text classification.",
        "Practiced connecting coefficients to interpretable words.",
        "Improved comfort with cross-validation and hyperparameter search."
      ],
      zh: [
        "理解简单基线在文本分类中的重要性。",
        "练习将模型系数和可解释词语联系起来。",
        "提升交叉验证和参数搜索的熟练度。"
      ]
    }
  },
  {
    slug: "spotify-decision-tree-modeling",
    featured: false,
    title: {
      en: "Spotify Decision Tree Modeling",
      zh: "Spotify 歌曲属性决策树分类"
    },
    subtitle: {
      en: "A compact decision-tree classification exercise using Spotify-style track attributes.",
      zh: "一个使用 Spotify 风格歌曲属性进行决策树分类的基础建模练习。"
    },
    period: {
      en: "May 2026",
      zh: "2026 年 5 月"
    },
    category: {
      en: "Machine Learning",
      zh: "机器学习"
    },
    techStack: ["Python", "Scikit-learn", "DecisionTreeClassifier", "Cross-validation", "Model Visualization"],
    repo: mlRepo,
    summary: {
      en: "A compact decision-tree classification exercise focused on model training, cross-validation, and readable tree visualization.",
      zh: "一个小型决策树分类练习，重点是模型训练、交叉验证和可读的树结构可视化。"
    },
    motivation: {
      en: "I used this as a focused practice case for understanding decision-tree splits and overfitting behavior.",
      zh: "我把它作为理解决策树分裂和过拟合行为的集中练习。"
    },
    features: {
      en: [
        "Trains a DecisionTreeClassifier on structured song attributes.",
        "Uses cross-validation to compare settings.",
        "Visualizes the model to inspect split logic."
      ],
      zh: [
        "基于歌曲结构化属性训练 DecisionTreeClassifier。",
        "使用交叉验证比较参数设置。",
        "可视化模型以检查分裂逻辑。"
      ]
    },
    contribution: {
      en: [
        "Prepared model inputs and trained decision-tree classifiers.",
        "Compared validation behavior under different tree settings.",
        "Interpreted the tree structure as part of the modeling result."
      ],
      zh: [
        "准备模型输入并训练决策树分类器。",
        "比较不同树参数下的验证表现。",
        "将树结构解释作为建模结果的一部分。"
      ]
    },
    learnings: {
      en: [
        "Learned how tree depth affects interpretability and overfitting.",
        "Practiced using visualization as a model-debugging tool.",
        "Built intuition for simple classifier baselines."
      ],
      zh: [
        "理解树深度如何影响可解释性和过拟合。",
        "练习把可视化作为模型调试工具。",
        "建立简单分类器基线的直觉。"
      ]
    }
  },
  {
    slug: "english-letter-recognition",
    featured: false,
    title: {
      en: "English Letter Recognition Model",
      zh: "英文字符识别模型"
    },
    subtitle: {
      en: "A Python computer-vision project for recognizing English letters from image data.",
      zh: "一个 Python 计算机视觉项目，用于从图像数据中识别英文字符。"
    },
    period: {
      en: "May 2025",
      zh: "2025 年 5 月"
    },
    category: {
      en: "Computer Vision",
      zh: "计算机视觉"
    },
    techStack: ["Python", "Computer Vision", "Machine Learning", "Image Classification"],
    repo: "https://github.com/Asdzzyandzzy/Large-scale-model-for-English-letter-recognition",
    summary: {
      en: "A letter-recognition project that uses image classification to practice preparing image data, training a model, and checking where recognition succeeds or fails.",
      zh: "一个英文字符识别项目，通过图像分类练习准备图像数据、训练模型，并观察识别在哪些情况下成功或失败。"
    },
    motivation: {
      en: "Letter recognition is simple to understand but still exposes real computer-vision issues around image quality, model capacity, and evaluation.",
      zh: "字符识别直观易懂，但仍能暴露图像质量、模型容量和评估方式中的真实问题。"
    },
    features: {
      en: [
        "Works with image data for English letter recognition.",
        "Focuses on classification workflow and evaluation.",
        "Provides a concrete computer-vision practice case beyond tabular data."
      ],
      zh: [
        "处理英文字符识别所需的图像数据。",
        "重点练习分类流程和模型评估。",
        "提供一个区别于表格数据的计算机视觉实践案例。"
      ]
    },
    contribution: {
      en: [
        "Organized the recognition workflow around image classification.",
        "Connected ML concepts with visual input data.",
        "Reviewed classification behavior beyond a single accuracy score."
      ],
      zh: [
        "围绕图像分类组织字符识别流程。",
        "把机器学习概念和视觉输入数据联系起来。",
        "不只用单一准确率理解分类模型表现。"
      ]
    },
    learnings: {
      en: [
        "Learned how image data changes modeling assumptions.",
        "Practiced evaluating classification behavior through errors and examples.",
        "Built a foundation for later computer-vision projects."
      ],
      zh: [
        "学习图像数据如何改变建模假设。",
        "练习通过错误和样例评估分类表现。",
        "为后续计算机视觉项目打基础。"
      ]
    }
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
