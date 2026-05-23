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

export const projects: Project[] = [
  {
    slug: "ziyangzhou-me-website",
    featured: true,
    title: {
      en: "ZiyangZhou.me Personal Website",
      zh: "ZiyangZhou.me 个人网站"
    },
    subtitle: {
      en: "A bilingual personal website built with Next.js, TypeScript, Tailwind CSS, and Cloudflare Pages.",
      zh: "使用 Next.js、TypeScript、Tailwind CSS 和 Cloudflare Pages 构建的中英双语个人网站。"
    },
    period: {
      en: "May 2026 - Present",
      zh: "2026 年 5 月 - 至今"
    },
    category: {
      en: "Personal Site",
      zh: "个人网站"
    },
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "App Router", "Cloudflare"],
    repo: "https://github.com/Asdzzyandzzy/ZiyangZhou_me_Website",
    summary: {
      en: "This site is both my portfolio and a small product system: projects, writing, experience, resume, contact, and language switching are separated into reusable content and components.",
      zh: "这个网站既是我的作品集，也是一个小型内容产品：项目、文章、经历、简历、联系页面和语言切换都拆成了可维护的内容与组件。"
    },
    motivation: {
      en: "I wanted a home base that feels more personal than a resume PDF and more structured than a link list. The site gives each project room to explain the problem, my role, and what I learned.",
      zh: "我希望有一个比简历 PDF 更立体、比链接列表更有结构的个人主页。每个项目都能讲清楚问题、我的工作和学到的东西。"
    },
    features: {
      en: [
        "Supports English by default with a Chinese language switch stored locally.",
        "Uses content files for projects, experience, profile copy, and fixed translations.",
        "Exports static pages for Cloudflare deployment, including individual project detail pages."
      ],
      zh: [
        "默认英文展示，并支持中文切换，语言选择会保存在本地。",
        "将项目、经历、个人介绍和固定文案拆分到内容文件中维护。",
        "支持静态导出并部署到 Cloudflare，包括每个项目的详情页。"
      ]
    },
    contribution: {
      en: [
        "Designed the information structure and implemented the site with the Next.js App Router.",
        "Built reusable components for navigation, hero, project cards, detail pages, and language switching."
      ],
      zh: [
        "设计网站信息结构，并使用 Next.js App Router 实现页面。",
        "搭建导航、Hero、项目卡片、项目详情页和语言切换等可复用组件。"
      ]
    },
    learnings: {
      en: [
        "Learned how to keep a personal site maintainable as project content grows.",
        "Practiced designing bilingual content so it reads naturally in both languages."
      ],
      zh: [
        "学习如何让个人网站在项目数量增加后依然好维护。",
        "练习写中英文都自然的作品集内容，而不是逐字翻译。"
      ]
    }
  },
  {
    slug: "predicting-f1-pit-stops",
    featured: true,
    title: {
      en: "Predicting F1 Pit Stops",
      zh: "F1 进站策略预测"
    },
    subtitle: {
      en: "An early-stage motorsport analytics project exploring how race context can inform pit stop timing.",
      zh: "一个早期赛车数据分析项目，探索如何用比赛上下文判断 F1 进站时机。"
    },
    period: {
      en: "May 2026 - Present",
      zh: "2026 年 5 月 - 至今"
    },
    category: {
      en: "Sports Analytics",
      zh: "体育数据分析"
    },
    techStack: ["Python", "Data Analysis", "Feature Engineering", "Machine Learning"],
    repo: "https://github.com/Asdzzyandzzy/Predicting-F1-Pit-Stops",
    summary: {
      en: "A motorsport analytics project focused on the question every F1 race quietly revolves around: when is the right moment to pit? The work frames pit stop timing as a data problem shaped by laps, tire life, gaps, safety cars, and race position.",
      zh: "这是一个围绕 F1 进站策略的数据分析项目：什么时候进站才合适？项目把圈数、轮胎寿命、时间差、安全车和排名位置等因素组织成可分析的问题。"
    },
    motivation: {
      en: "Pit strategy is a nice intersection of data and judgment. I wanted to practice building features from event-like sports data while keeping the result understandable to people who actually watch races.",
      zh: "进站策略很适合练习数据分析，因为它既有模型空间，也有人的判断。我想用这个项目练习从赛事事件数据里构造特征，同时让结果能被真正看比赛的人读懂。"
    },
    features: {
      en: [
        "Frames pit stop timing as a prediction and decision-support problem.",
        "Plans features around tire age, lap context, position, race gaps, and strategy windows.",
        "Leaves room for both model evaluation and race-by-race explanation."
      ],
      zh: [
        "把进站时机转化为预测和决策辅助问题。",
        "围绕轮胎年龄、圈数上下文、排名、时间差和策略窗口设计特征。",
        "兼顾模型评估和单场比赛层面的可解释分析。"
      ]
    },
    contribution: {
      en: [
        "Set up the project direction and repository for an interpretable racing analytics workflow.",
        "Outlined a feature-driven approach instead of treating the model as a black box."
      ],
      zh: [
        "确定项目方向和仓库结构，面向可解释的赛车数据分析流程。",
        "采用以特征为中心的思路，而不是只追求黑箱预测结果。"
      ]
    },
    learnings: {
      en: [
        "Practicing how to turn a real-world strategy question into measurable features.",
        "Learning to keep sports analytics grounded in race context, not just model scores."
      ],
      zh: [
        "练习把真实策略问题拆成可度量的特征。",
        "学习让体育数据分析回到比赛语境，而不只是看模型分数。"
      ]
    }
  },
  {
    slug: "sleep-app",
    featured: true,
    title: {
      en: "Sleep Tracking App",
      zh: "睡眠记录 App"
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
      en: "A small but complete Java app built around a simple personal problem: sleep is easier to improve when it is recorded consistently and reviewed honestly.",
      zh: "这是一个小而完整的 Java 应用，围绕一个真实个人问题展开：睡眠只有被持续记录、诚实复盘，才更容易改善。"
    },
    motivation: {
      en: "The project started from the wish to make routines visible. Instead of overcomplicating health tracking, it focuses on the core loop of logging, comparing, and noticing patterns.",
      zh: "项目动机是让作息变得可见。它没有把健康追踪做得很复杂，而是聚焦记录、对比和发现规律这个核心循环。"
    },
    features: {
      en: [
        "Records daily sleep sessions in a structured format.",
        "Compares actual sleep against personal targets.",
        "Summarizes habits so users can notice patterns rather than rely on memory."
      ],
      zh: [
        "用结构化方式记录每天的睡眠情况。",
        "将实际睡眠与个人目标进行对比。",
        "汇总睡眠习惯，让用户依靠数据而不是记忆来复盘。"
      ]
    },
    contribution: {
      en: [
        "Translated user stories into Java classes and application behavior.",
        "Designed the core data model for logs, goals, and summary statistics."
      ],
      zh: [
        "把用户故事转化为 Java 类和具体应用行为。",
        "设计睡眠记录、目标和统计汇总的核心数据模型。"
      ]
    },
    learnings: {
      en: [
        "Practiced object-oriented design through a complete personal-use application.",
        "Learned how product decisions show up even in small class design choices."
      ],
      zh: [
        "通过一个完整的个人应用练习面向对象设计。",
        "理解了产品思考也会体现在很小的类设计选择里。"
      ]
    }
  },
  {
    slug: "machine-learning-projects",
    featured: true,
    title: {
      en: "Machine Learning Projects",
      zh: "机器学习项目合集"
    },
    subtitle: {
      en: "A notebook collection covering NLP, topic modeling, embeddings, tuning, and applied ML practice.",
      zh: "一个机器学习 Notebook 合集，涵盖 NLP、主题建模、词向量、调参和应用建模练习。"
    },
    period: {
      en: "May 2026",
      zh: "2026 年 5 月"
    },
    category: {
      en: "Machine Learning",
      zh: "机器学习"
    },
    techStack: ["Python", "Jupyter Notebook", "Scikit-learn", "NLP", "LDA", "GloVe"],
    repo: "https://github.com/Asdzzyandzzy/machine-learning-projects",
    summary: {
      en: "A hands-on machine learning repository where I used notebooks to work through the full rhythm of applied ML: cleaning data, building features, training models, tuning parameters, and interpreting results.",
      zh: "这是一个以 Notebook 为主的机器学习练习仓库，完整走过数据清洗、特征构建、模型训练、参数调优和结果解释的应用 ML 流程。"
    },
    motivation: {
      en: "The goal was to move beyond reading about algorithms and actually feel where models succeed, fail, and become hard to explain.",
      zh: "项目目标不是只停留在理解算法概念，而是亲手感受模型什么时候有效、什么时候失效，以及什么时候变得难以解释。"
    },
    features: {
      en: [
        "Uses TF-IDF, embeddings, and classic ML workflows on text-heavy datasets.",
        "Explores topic modeling and semantic relationships through interpretable notebooks.",
        "Documents experiments in a way that is easy to rerun and compare."
      ],
      zh: [
        "在文本数据上使用 TF-IDF、词向量和经典机器学习流程。",
        "通过可解释的 Notebook 探索主题建模和语义关系。",
        "用便于复现和对比的方式组织实验。"
      ]
    },
    contribution: {
      en: [
        "Implemented preprocessing, modeling, evaluation, and visualization workflows.",
        "Compared model behavior across different feature representations."
      ],
      zh: [
        "实现数据预处理、建模、评估和可视化流程。",
        "比较不同特征表示方式下的模型表现。"
      ]
    },
    learnings: {
      en: [
        "Strengthened practical understanding of NLP pipelines and unsupervised learning.",
        "Learned how preprocessing decisions can matter as much as model choice."
      ],
      zh: [
        "加深了对 NLP Pipeline 和无监督学习的实践理解。",
        "理解了预处理选择有时和模型选择一样重要。"
      ]
    }
  },
  {
    slug: "fanqie-qwen-writing-pipeline",
    featured: true,
    title: {
      en: "Fanqie Short Story Pipeline with Local Qwen",
      zh: "本地 Qwen 番茄短篇生成 Pipeline"
    },
    subtitle: {
      en: "A local LLM writing pipeline for structured Chinese short-story generation with Qwen/Ollama, prompt orchestration, context handoff, and reproducible model settings.",
      zh: "一个基于本地 Qwen/Ollama 的中文短篇生成 Pipeline，包含故事规划、提示词编排、上下文交接和可复现模型配置。"
    },
    period: {
      en: "May 2026 - Present",
      zh: "2026 年 5 月 - 至今"
    },
    category: {
      en: "LLM Systems",
      zh: "大语言模型系统"
    },
    techStack: ["Python", "Qwen", "Ollama", "Local LLM", "Prompt Engineering", "Generative AI"],
    repo: "https://github.com/Asdzzyandzzy/Fanqie_novel_with_Qianwen",
    summary: {
      en: "A structured local LLM pipeline for Chinese short-story generation. Instead of relying on a single prompt, the project separates planning, prompt orchestration, target-word generation, context handoff, progress logging, and model configuration so long-form drafts are easier to inspect and reproduce.",
      zh: "一个用于中文短篇生成的本地 LLM Pipeline。项目不是依赖单条提示词，而是把故事规划、提示词编排、目标字数生成、上下文交接、进度日志和模型配置拆开，让长文本生成过程更可检查、可复现。"
    },
    motivation: {
      en: "Simple LLM writing workflows often lose continuity, shorten the story, forget relationships, or drift away from the intended emotional rhythm. I built this project to treat those failures as engineering problems: what should be planned, what should be logged, and how should context move between generation segments?",
      zh: "简单的 LLM 写作流程很容易出现断上下文、篇幅不足、人物关系漂移或情绪节奏失控等问题。我做这个项目，是想把这些失败当作工程问题来处理：哪些内容应该提前规划，哪些信息应该被记录，上下文应该如何在生成片段之间传递。"
    },
    features: {
      en: [
        "Builds a structured story outline with title, premise, character roles, emotional arc, reversals, and beat planning.",
        "Converts the story plan into execution prompts for a local Qwen model through an OpenAI-compatible endpoint.",
        "Generates drafts by target word count and segment size rather than fixed chapters.",
        "Feeds previous generated context into later segments to improve continuity.",
        "Writes outlines, final prompts, generation logs, draft segments, merged novels, and metadata into local output folders."
      ],
      zh: [
        "生成包含标题、设定、人物关系、情绪弧线、反转和节奏节点的结构化故事大纲。",
        "将故事计划转化为面向本地 Qwen 模型的执行提示词，并通过 OpenAI-compatible 接口调用。",
        "按目标字数和片段长度生成草稿，而不是按传统章节硬切分。",
        "把前文生成内容回传给后续片段，改善长文本连续性。",
        "在本地保存大纲、最终提示词、生成日志、片段草稿、合并成稿和 metadata，方便复盘。"
      ]
    },
    contribution: {
      en: [
        "Designed the planning-to-generation workflow and separated story presets, prompt templates, model profiles, and pipeline code.",
        "Implemented a command-line entry point for prompt-only mode and full generation mode.",
        "Added generation logging and local artifact structure so model behavior can be inspected after a run."
      ],
      zh: [
        "设计从故事规划到文本生成的工作流，并拆分故事 preset、提示词模板、模型配置和 pipeline 代码。",
        "实现命令行入口，支持只生成提示词和完整连续生成两种模式。",
        "加入生成日志和本地 artifact 结构，让每次生成后的模型行为可以被检查和复盘。"
      ]
    },
    learnings: {
      en: [
        "Learned that long-form LLM generation is a systems problem as much as a prompting problem.",
        "Practiced making local model workflows reproducible through explicit configuration and saved artifacts.",
        "Explored how planning, context handoff, and logging can reduce the manual trial-and-error of creative generation."
      ],
      zh: [
        "理解了长文本 LLM 生成不只是提示词问题，也是系统设计问题。",
        "练习通过显式配置和保存生成产物，让本地模型工作流更可复现。",
        "探索故事规划、上下文交接和日志如何减少创作型生成中的反复手动试错。"
      ]
    }
  },
  {
    slug: "chatgpt-local-api-creator",
    featured: true,
    title: {
      en: "ChatGPT Local API Creator",
      zh: "ChatGPT 本地 API 封装工具"
    },
    subtitle: {
      en: "An Electron and Node.js tool that exposes a local HTTP API for a logged-in ChatGPT web session, with visible-browser control, chat/project navigation, and localhost-only access.",
      zh: "一个基于 Electron 和 Node.js 的本地工具，将已登录的 ChatGPT Web 会话封装为本地 HTTP API，支持可见浏览器控制、聊天/Project 导航和仅 localhost 访问。"
    },
    period: {
      en: "May 2026 - Present",
      zh: "2026 年 5 月 - 至今"
    },
    category: {
      en: "AI Tooling",
      zh: "AI 工具系统"
    },
    techStack: ["JavaScript", "Electron", "Node.js", "HTTP API", "Browser Automation", "ChatGPT"],
    repo: "https://github.com/Asdzzyandzzy/chatgpt-local-api-creator",
    summary: {
      en: "A local automation and API wrapper around the visible ChatGPT web app. The project opens chatgpt.com in Electron, preserves the user's local login session, and exposes a localhost-only HTTP service so local scripts can send prompts, read replies, open chats, and work with ChatGPT Projects.",
      zh: "一个围绕可见 ChatGPT Web App 构建的本地自动化与 API 封装工具。项目通过 Electron 打开 chatgpt.com，保留用户本地登录状态，并暴露仅监听 localhost 的 HTTP 服务，让本机脚本可以发送 prompt、读取回复、打开聊天并操作 ChatGPT Projects。"
    },
    motivation: {
      en: "The project explores a practical systems question: how can a web-based AI workflow be made scriptable while still keeping the real browser visible, preserving human control, and avoiding hidden login or private endpoint behavior?",
      zh: "这个项目探索的是一个实际系统问题：如何让基于网页的 AI 工作流变得可脚本化，同时保持真实浏览器可见、保留人工控制，并避免隐藏登录或私有端点行为。"
    },
    features: {
      en: [
        "Runs a local HTTP server on 127.0.0.1 for status checks, prompt sending, last-message reading, refresh, new chat, and chat navigation.",
        "Supports ChatGPT Projects workflows, including listing visible Projects, opening Projects, reading Project chats, and opening Project chats by URL, title, ID, or index.",
        "Keeps the Electron browser window visible so sign-in, CAPTCHA, or other human actions are handled directly by the user.",
        "Parses current page IDs such as chatId, projectId, and projectChatId for safer navigation and debugging.",
        "Uses Electron security settings including disabled node integration, context isolation, sandboxing, and default web security."
      ],
      zh: [
        "在 127.0.0.1 上运行本地 HTTP 服务，支持状态检查、发送 prompt、读取最后回复、刷新、新建聊天和聊天导航。",
        "支持 ChatGPT Projects 工作流，包括读取可见 Projects、打开 Project、读取 Project 内聊天，以及通过 URL、标题、ID 或 index 打开 Project chat。",
        "保持 Electron 浏览器窗口可见，登录、验证码或其它需要人工处理的步骤都由用户直接完成。",
        "解析当前页面中的 chatId、projectId、projectChatId 等 ID，提升导航和调试的可靠性。",
        "使用 Electron 安全设置，包括关闭 node integration、启用 context isolation、sandbox 和默认 Web security。"
      ]
    },
    contribution: {
      en: [
        "Built the Electron shell, local HTTP API, and browser-control flow around a real visible ChatGPT session.",
        "Designed endpoints for chat operations, project navigation, project-chat discovery, diagnostics, and recovery actions such as refresh.",
        "Documented Windows cmd, PowerShell, Node.js, and Python usage examples so the local service can be called from different workflows."
      ],
      zh: [
        "围绕真实可见的 ChatGPT 会话搭建 Electron 外壳、本地 HTTP API 和浏览器控制流程。",
        "设计聊天操作、Project 导航、Project chat 发现、诊断和刷新恢复等端点。",
        "补充 Windows cmd、PowerShell、Node.js、Python 调用示例，让本地服务可以接入不同脚本工作流。"
      ]
    },
    learnings: {
      en: [
        "Practiced turning a browser-based AI workflow into a local service interface while keeping user control explicit.",
        "Learned how fragile web automation can be when DOM structure changes, and why diagnostics and visible state matter.",
        "Strengthened awareness of local security boundaries, session storage, and the difference between supported APIs and browser automation."
      ],
      zh: [
        "练习把基于浏览器的 AI 工作流封装成本地服务接口，同时明确保留用户控制。",
        "理解了 Web 自动化在 DOM 结构变化时的脆弱性，以及诊断信息和可见状态的重要性。",
        "强化了对本地安全边界、会话存储，以及官方 API 与浏览器自动化差异的理解。"
      ]
    }
  },
  {
    slug: "astock-trade-analysis",
    featured: true,
    title: {
      en: "A-Share Research Dashboard",
      zh: "A 股个人投研 Dashboard"
    },
    subtitle: {
      en: "A Streamlit dashboard for A-share research, combining market data, indicators, fundamentals, sentiment, signals, scoring, and risk ranges.",
      zh: "基于 Streamlit 的 A 股投研 Dashboard，整合行情、技术指标、基本面、资金情绪、技术信号、综合评分和风险区间。"
    },
    period: {
      en: "Aug 2025 - Present",
      zh: "2025 年 8 月 - 至今"
    },
    category: {
      en: "Financial Data Product",
      zh: "金融数据产品"
    },
    techStack: ["Python", "Streamlit", "AKShare", "Plotly", "Pandas"],
    repo: "https://github.com/Asdzzyandzzy/AStock-Trade-Analysis",
    summary: {
      en: "A personal A-share investment research platform built with AKShare, Streamlit, and Plotly. It organizes quotes, technical indicators, fundamentals, fund flow, sentiment signals, scoring, and cautious volatility-based risk estimates into a maintainable dashboard.",
      zh: "一个基于 AKShare、Streamlit 和 Plotly 构建的 A 股个人投研平台，把行情、技术指标、基本面、资金流向、情绪信号、综合评分和基于历史波动率的谨慎风险区间组织成可维护的 Dashboard。"
    },
    motivation: {
      en: "The goal is not to build a toy that claims to predict price spikes, but to create a structured research workflow for learning, review, and decision support.",
      zh: "项目目标不是做“预测股价暴涨”的玩具，而是搭建一个用于学习、研究和个人复盘的结构化投研流程。"
    },
    features: {
      en: [
        "Supports common A-share code formats such as 600519, 000001, sh600519, and sz000001.",
        "Displays market overview, major indices, industry heat, price, turnover, market cap, and volume metrics.",
        "Provides K-line charts, volume, MA5/10/20/60, EMA, MACD, RSI, BOLL, and KDJ indicators.",
        "Includes risk statistics such as support and resistance, volatility, return distribution, and maximum drawdown.",
        "Combines fundamentals, fund flow, Dragon Tiger List observations, technical signals, and a four-part research score."
      ],
      zh: [
        "兼容 600519、000001、sh600519、sz000001 等常见 A 股代码格式。",
        "展示首页概览、主要指数、行业热度、最新价、成交额、市值、换手率等指标。",
        "提供 K 线、成交量、MA5/10/20/60、EMA、MACD、RSI、BOLL、KDJ 等技术指标。",
        "包含支撑位、压力位、波动率、收益率分布和最大回撤等风险统计。",
        "整合基本面、资金流向、龙虎榜观察、技术信号和四维综合评分。"
      ]
    },
    contribution: {
      en: [
        "Designed a modular architecture separating data access, analysis, UI, formatting, and logging.",
        "Wrapped AKShare interfaces with caching, field cleaning, and exception handling.",
        "Built interactive Streamlit and Plotly views for research, review, and cautious risk estimation."
      ],
      zh: [
        "设计模块化架构，将数据层、分析层、UI 层、格式化和日志拆分维护。",
        "统一封装 AKShare 接口，加入缓存、字段清洗和异常处理。",
        "使用 Streamlit 和 Plotly 构建交互式投研界面，支持复盘和谨慎风险区间估计。"
      ]
    },
    learnings: {
      en: [
        "Learned how to design a financial data product around maintainability.",
        "Practiced separating research questions into reusable data, analysis, signal, and scoring modules.",
        "Strengthened risk disclosure: the project is for research and review, not investment advice."
      ],
      zh: [
        "学习如何围绕可维护性设计金融数据产品。",
        "练习把金融研究问题拆成可复用的数据、分析、信号和评分模块。",
        "强化风险披露意识：项目用于学习、研究和复盘，不构成投资建议。"
      ]
    }
  },
  {
    slug: "astock-analysis-toolkit",
    featured: true,
    title: {
      en: "A-Share Intraday Tick Analysis",
      zh: "A 股日内逐笔分析工具"
    },
    subtitle: {
      en: "A Python and Streamlit research app for intraday A-share tick data, large orders, order flow, behavior signals, alerts, and optional ML examples.",
      zh: "一个基于 Python 和 Streamlit 的 A 股日内逐笔研究应用，覆盖大单、买卖流、行为信号、异常提醒和可选机器学习示例。"
    },
    period: {
      en: "Aug 2025 - Present",
      zh: "2025 年 8 月 - 至今"
    },
    category: {
      en: "Financial Data Research",
      zh: "金融数据研究"
    },
    techStack: ["Python", "Streamlit", "AKShare", "Plotly", "Pandas", "Scikit-learn"],
    repo: "https://github.com/Asdzzyandzzy/AStock_Analysis",
    summary: {
      en: "A Streamlit-based research tool for observing intraday A-share tick behavior. It combines AKShare data fetching, field normalization, intraday indicators, large-order analysis, active buy/sell flow, estimated main-fund movement, price-level distribution, behavior signals, anomaly alerts, and optional machine learning examples.",
      zh: "一个基于 Streamlit 的 A 股日内逐笔研究工具，整合 AKShare 数据获取、字段标准化、日内指标、大单分析、主动买卖流、主力资金估算、价格档位分布、行为信号、异常提醒和可选机器学习示例。"
    },
    motivation: {
      en: "The project grew from several standalone scripts into a more maintainable research application. The refactor separates data fetching, cleaning, indicators, visualization, configuration, logging, and optional ML so intraday market questions can be explored without turning the codebase into one large script.",
      zh: "这个项目从几个独立脚本升级成了更可维护的研究应用。重构后把数据获取、字段清洗、指标计算、可视化、配置、日志和可选机器学习拆开，让日内市场问题可以被持续探索，而不是堆成一个大脚本。"
    },
    features: {
      en: [
        "Fetches A-share intraday and tick data through AKShare interfaces such as stock_zh_a_tick_tx_js and stock_intraday_em.",
        "Normalizes changing upstream fields into a standard schema for time, price, volume, amount, and buy/sell direction.",
        "Calculates intraday high/low, VWAP, average price, turnover, volume change, and price-level transaction distribution.",
        "Analyzes large orders, super-large orders, active buy/sell amount, estimated main-fund net inflow, and buy/sell strength.",
        "Detects tick-level behavior signals and alerts such as price lift, heavy sell pressure, possible accumulation/distribution, dense large-order activity, and sudden volume spikes.",
        "Includes optional ML examples for anomaly detection, short-term direction classification, clustering, and feature explanation."
      ],
      zh: [
        "通过 AKShare 的 stock_zh_a_tick_tx_js、stock_intraday_em 等接口获取 A 股日内和逐笔数据。",
        "将上游接口可能变化的字段统一清洗成时间、价格、成交量、成交金额、买卖方向等标准结构。",
        "计算日内高低点、VWAP、均价、成交额、成交量变化和价格档位成交分布。",
        "分析大单、超大单、主动买入/卖出金额、主力资金净流入估算和买卖强度对比。",
        "识别拉升、重卖压、疑似吸筹/派发、密集大单、脉冲式放量等逐笔行为信号和异常提醒。",
        "提供可选机器学习示例，包括异常检测、短期方向分类、交易行为聚类和特征解释。"
      ]
    },
    contribution: {
      en: [
        "Refactored the project from root-level standalone scripts into a package-style structure with app.py, config.yaml, pyproject.toml, requirements.txt, and an astock_analysis module.",
        "Built separate modules for AKShare fetchers, field cleaning, intraday indicators, tick-pattern detection, Plotly charts, logging, and optional ML workflows.",
        "Kept legacy Streamlit and command-line entry points for compatibility while making app.py the recommended unified entry point."
      ],
      zh: [
        "将项目从根目录脚本重构为更清晰的包结构，包含 app.py、config.yaml、pyproject.toml、requirements.txt 和 astock_analysis 模块。",
        "拆分 AKShare 数据获取、字段清洗、日内指标、逐笔行为信号、Plotly 图表、日志和可选 ML 工作流。",
        "保留旧版 Streamlit 与命令行入口以兼容历史用法，同时将 app.py 作为推荐的统一入口。"
      ]
    },
    learnings: {
      en: [
        "Learned how quickly financial data scripts need structure once field compatibility, caching, empty-data handling, and charts enter the project.",
        "Practiced turning tick-level market observations into reusable indicators, rule-based alerts, and explainable ML features.",
        "Strengthened risk-awareness: tick direction, fund-flow estimates, and behavior labels are data observations, not trading advice."
      ],
      zh: [
        "理解了金融数据脚本一旦涉及字段兼容、缓存、空数据处理和图表，就需要尽早引入结构。",
        "练习把逐笔市场观察转化为可复用指标、规则提醒和可解释的机器学习特征。",
        "强化风险意识：逐笔方向、资金流估算和行为标签只是数据观察，不构成交易建议。"
      ]
    }
  },
  {
    slug: "kaggle-fertilizer-competition",
    featured: true,
    title: {
      en: "Kaggle Fertilizer Competition",
      zh: "Kaggle 肥料预测竞赛"
    },
    subtitle: {
      en: "A Kaggle modeling project focused on feature engineering, model comparison, and submission workflow.",
      zh: "一个 Kaggle 建模项目，重点练习特征工程、模型比较和提交流程。"
    },
    period: {
      en: "Jun 2025",
      zh: "2025 年 6 月"
    },
    category: {
      en: "ML Competition",
      zh: "机器学习竞赛"
    },
    techStack: ["Python", "Pandas", "Scikit-learn", "Feature Engineering"],
    repo: "https://github.com/Asdzzyandzzy/Kaggle_FertilizerCompetition",
    summary: {
      en: "A compact competition project where I practiced building a clean modeling loop: inspect the data, prepare features, compare models, generate predictions, and keep the submission process reproducible.",
      zh: "这是一个紧凑的竞赛项目，用来练习完整建模循环：理解数据、准备特征、比较模型、生成预测，并让提交过程可复现。"
    },
    motivation: {
      en: "Kaggle is useful because the feedback is concrete. This project helped me practice making modeling decisions under a metric instead of relying on vague impressions.",
      zh: "Kaggle 的好处是反馈很具体。这个项目帮助我在明确指标下做建模决策，而不是只凭感觉判断效果。"
    },
    features: {
      en: [
        "Prepared structured competition data for modeling.",
        "Experimented with features and model choices.",
        "Organized code for repeatable prediction and submission."
      ],
      zh: [
        "整理竞赛结构化数据用于建模。",
        "尝试不同特征和模型选择。",
        "组织可重复运行的预测与提交流程。"
      ]
    },
    contribution: {
      en: [
        "Handled preprocessing, feature construction, and model experimentation.",
        "Used the project to strengthen end-to-end competition workflow discipline."
      ],
      zh: [
        "完成数据预处理、特征构建和模型实验。",
        "通过项目强化端到端竞赛建模流程。"
      ]
    },
    learnings: {
      en: [
        "Improved comfort with evaluation-driven iteration.",
        "Learned to balance model complexity with a workflow that stays easy to rerun."
      ],
      zh: [
        "提升了基于评估指标迭代模型的熟练度。",
        "学习在模型复杂度和可复现实验流程之间取得平衡。"
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
      en: "A letter-recognition project that uses image classification as a practical way to learn the full computer-vision workflow: preparing image data, training a model, and checking where recognition succeeds or fails.",
      zh: "这是一个英文字符识别项目，通过图像分类练习完整计算机视觉流程：准备图像数据、训练模型，并观察识别在哪些情况下成功或失败。"
    },
    motivation: {
      en: "Letter recognition is simple enough to understand quickly but still rich enough to expose the real problems of image data, model capacity, and evaluation.",
      zh: "字符识别足够直观，适合快速理解；同时又能暴露图像数据、模型容量和评估方式中的真实问题。"
    },
    features: {
      en: [
        "Works with image data for English letter recognition.",
        "Focuses on classification workflow and model evaluation.",
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
        "Built the recognition workflow and organized the model experiment around image classification.",
        "Used the project to connect ML concepts with visual input data."
      ],
      zh: [
        "搭建字符识别流程，并围绕图像分类组织模型实验。",
        "通过项目把机器学习概念和视觉输入数据联系起来。"
      ]
    },
    learnings: {
      en: [
        "Learned how image data changes the assumptions of a modeling pipeline.",
        "Practiced evaluating classification behavior beyond a single accuracy number."
      ],
      zh: [
        "学习图像数据如何改变建模流程中的假设。",
        "练习不只用单一准确率来理解分类模型表现。"
      ]
    }
  },
  {
    slug: "cpsc221-labs",
    featured: false,
    title: {
      en: "CPSC 221 Labs",
      zh: "CPSC 221 课程实验"
    },
    subtitle: {
      en: "A C++ lab repository from UBC CPSC 221, focused on data structures and algorithmic implementation.",
      zh: "UBC CPSC 221 的 C++ 实验仓库，重点练习数据结构和算法实现。"
    },
    period: {
      en: "Mar 2025",
      zh: "2025 年 3 月"
    },
    category: {
      en: "Computer Science Coursework",
      zh: "计算机科学课程"
    },
    techStack: ["C++", "Data Structures", "Algorithms", "Debugging"],
    repo: "https://github.com/Asdzzyandzzy/CPSC221-LABS",
    summary: {
      en: "A coursework repository for CPSC 221 at the University of British Columbia. The value here is not a flashy product, but disciplined practice with C++ data structures, memory, testing, and algorithmic thinking.",
      zh: "这是英属哥伦比亚大学 CPSC 221 的课程实验仓库。它不是一个炫技产品，而是对 C++ 数据结构、内存、测试和算法思维的扎实训练。"
    },
    motivation: {
      en: "The labs gave me a stronger foundation for understanding how higher-level software depends on lower-level implementation choices.",
      zh: "这些实验帮助我更扎实地理解：高层软件能力背后，往往依赖底层实现选择。"
    },
    features: {
      en: [
        "Implements course lab exercises in C++.",
        "Practices data structures, algorithms, memory behavior, and debugging.",
        "Keeps coursework organized as a reference for later projects."
      ],
      zh: [
        "使用 C++ 完成课程实验。",
        "练习数据结构、算法、内存行为和调试。",
        "将课程代码整理成后续项目可参考的基础材料。"
      ]
    },
    contribution: {
      en: [
        "Completed lab implementations and debugging work as part of the course.",
        "Used the repository to reinforce code organization in C++."
      ],
      zh: [
        "完成课程实验中的实现和调试工作。",
        "通过仓库强化 C++ 代码组织能力。"
      ]
    },
    learnings: {
      en: [
        "Built stronger habits around reasoning about data structures.",
        "Practiced reading errors and debugging at a lower level than typical scripting projects."
      ],
      zh: [
        "建立了更扎实的数据结构推理习惯。",
        "练习比脚本项目更底层的错误排查和调试。"
      ]
    }
  },
  {
  slug: "bitcoin-private-key-recovery-tool",
  featured: false,

  title: {
    en: "Bitcoin Private Key Recovery Tool",
    zh: "比特币私钥恢复工具"
  },

  subtitle: {
    en: "A Python multiprocessing tool designed for Bitcoin private-key recovery workflows with optimized CPU utilization on macOS.",
    zh: "一个基于 Python 多进程的比特币私钥恢复工具，针对 macOS 的 CPU 利用率进行了优化。"
  },

  period: {
    en: "Nov 2024",
    zh: "2024 年 11 月"
  },

  category: {
    en: "Security Tooling",
    zh: "安全工具"
  },

  techStack: [
    "Python",
    "Multiprocessing",
    "macOS",
    "CPU Optimization",
    "Cryptography Concepts"
  ],

  repo: "https://github.com/Asdzzyandzzy/BTC-Private-Key-Finder-Multi-Process-Brute-Force-Tool-for-Bitcoin-Address-Recovery-on-macOS",

  summary: {
    en: "A Python-based Bitcoin private-key recovery tool built for users who lost access to their wallets. The project focuses on multiprocessing performance, CPU optimization on macOS, and large-scale key-space exploration workflows.",
    zh: "一个基于 Python 的比特币私钥恢复工具，面向遗失钱包访问权限的用户。项目重点在于多进程性能、macOS CPU 优化以及大规模密钥空间搜索流程。"
  },

  motivation: {
    en: "The project started as an exploration into how multiprocessing and CPU-intensive workloads can be optimized on macOS. I was also interested in understanding how cryptographic key recovery workflows are structured at scale.",
    zh: "这个项目最初源于我对 macOS 下多进程与高 CPU 负载优化的兴趣，同时也希望深入理解大规模密码学密钥恢复流程的实现方式。"
  },

  features: {
    en: [
      "Built a multiprocessing architecture for parallel private-key search tasks.",
      "Optimized CPU usage and workload distribution for macOS environments.",
      "Implemented scalable task execution for large key-space exploration.",
      "Designed lightweight recovery workflows with configurable process control."
    ],

    zh: [
      "构建了用于并行私钥搜索任务的多进程架构。",
      "针对 macOS 环境优化 CPU 利用率与任务分配。",
      "实现面向大规模密钥空间探索的可扩展任务执行。",
      "设计了支持可配置进程控制的轻量级恢复流程。"
    ]
  },

  contribution: {
    en: [
      "Designed and implemented the multiprocessing engine and recovery workflow.",
      "Optimized process scheduling and CPU utilization on Apple Silicon/macOS systems.",
      "Tested scalability and benchmarked performance under different workloads."
    ],

    zh: [
      "设计并实现多进程引擎与恢复流程。",
      "针对 Apple Silicon/macOS 系统优化进程调度与 CPU 利用率。",
      "测试不同负载下的扩展性并完成性能基准分析。"
    ]
  },

  learnings: {
    en: [
      "Strengthened understanding of multiprocessing architecture and performance tuning in Python.",
      "Learned practical optimization strategies for CPU-bound workloads on macOS.",
      "Improved experience in building experimental cryptography-related tooling."
    ],

    zh: [
      "强化了对 Python 多进程架构与性能调优的理解。",
      "学习了 macOS 下 CPU 密集型任务的实际优化策略。",
      "提升了构建密码学相关实验型工具的经验。"
    ]
  }
}
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
