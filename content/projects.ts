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
    featured: false,
    title: {
      en: "A-Share Analysis Toolkit",
      zh: "A 股分析工具集合"
    },
    subtitle: {
      en: "A Python toolkit collecting early experiments for Chinese A-share analysis.",
      zh: "一个 Python 工具集合，用来沉淀早期的中国 A 股分析实验。"
    },
    period: {
      en: "Aug 2025",
      zh: "2025 年 8 月"
    },
    category: {
      en: "Financial Analysis",
      zh: "金融分析"
    },
    techStack: ["Python", "Pandas", "Financial Data", "Data Analysis"],
    repo: "https://github.com/Asdzzyandzzy/AStock_Analysis",
    summary: {
      en: "This repository collects early A-share analysis scripts and ideas. It is closer to a working notebook bench than a polished app, and it shows the path from small experiments toward the later dashboard project.",
      zh: "这个仓库收集了早期 A 股分析脚本和想法。它更像一个实验工作台，而不是完整产品，也展示了从零散实验走向后续 Dashboard 项目的过程。"
    },
    motivation: {
      en: "Before building a larger dashboard, I needed a place to test what data is available, what can be cleaned reliably, and which analysis views are actually useful.",
      zh: "在做更完整的 Dashboard 之前，我需要一个地方测试哪些数据可用、哪些字段能稳定清洗，以及哪些分析视角真的有用。"
    },
    features: {
      en: [
        "Collects Python scripts for A-share data exploration.",
        "Experiments with reusable analysis patterns before productizing them.",
        "Serves as a bridge between quick research ideas and a structured dashboard."
      ],
      zh: [
        "收集用于 A 股数据探索的 Python 脚本。",
        "在产品化之前实验可复用的分析模式。",
        "作为快速研究想法和结构化 Dashboard 之间的过渡。"
      ]
    },
    contribution: {
      en: [
        "Explored data retrieval, cleaning, and analysis routines for Chinese market data.",
        "Used the repository to decide which ideas deserved a more maintainable implementation."
      ],
      zh: [
        "探索中国市场数据的获取、清洗和分析流程。",
        "通过这个仓库判断哪些想法值得做成更可维护的实现。"
      ]
    },
    learnings: {
      en: [
        "Learned that exploratory scripts are useful, but only up to the point where structure becomes necessary.",
        "Built intuition for which financial data problems need better error handling and modular design."
      ],
      zh: [
        "理解了探索性脚本很有用，但复杂度上来后必须引入结构。",
        "积累了金融数据项目中哪些地方需要异常处理和模块化设计的直觉。"
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
    slug: "bitcoin-key-recovery-risk-study",
    featured: false,
    title: {
      en: "Bitcoin Key Recovery Risk Study",
      zh: "比特币密钥恢复风险研究"
    },
    subtitle: {
      en: "A Python multiprocessing experiment framed as a security and probability study around Bitcoin key recovery.",
      zh: "一个 Python 多进程实验，从安全和概率角度研究比特币密钥恢复问题。"
    },
    period: {
      en: "Nov 2024",
      zh: "2024 年 11 月"
    },
    category: {
      en: "Security Research",
      zh: "安全研究"
    },
    techStack: ["Python", "Multiprocessing", "Cryptography Concepts", "Security Ethics"],
    repo: "https://github.com/Asdzzyandzzy/BTC-Private-Key-Finder-Multi-Process-Brute-Force-Tool-for-Bitcoin-Address-Recovery-on-macOS",
    summary: {
      en: "A security-oriented Python experiment about Bitcoin private-key search and why ownership, probability, and ethical boundaries matter. In the portfolio, I present it as a risk study rather than a recovery promise.",
      zh: "这是一个面向安全学习的 Python 实验，讨论比特币私钥搜索背后的所有权、概率和伦理边界。在作品集中，我把它呈现为风险研究，而不是“恢复承诺”。"
    },
    motivation: {
      en: "The interesting lesson is not that keys can be guessed at scale, but the opposite: cryptographic key spaces are intentionally enormous, and any tool in this area must be discussed with strict legal and ethical boundaries.",
      zh: "这个项目真正有价值的地方不是“可以暴力猜密钥”，而是反过来理解：密码学密钥空间本来就极其庞大，相关工具必须放在严格的法律和伦理边界内讨论。"
    },
    features: {
      en: [
        "Explores multiprocessing architecture in Python through a security-themed experiment.",
        "Frames key recovery as a probability and ethics discussion, not an operational promise.",
        "Includes explicit boundaries that it should only relate to addresses someone legally owns."
      ],
      zh: [
        "通过安全主题实验练习 Python 多进程架构。",
        "把密钥恢复放在概率和伦理讨论中，而不是包装成可执行承诺。",
        "明确强调只能讨论与合法拥有地址相关的场景。"
      ]
    },
    contribution: {
      en: [
        "Built the multiprocessing experiment and documented the intended legal boundary.",
        "Used the project to study performance limits and responsible security framing."
      ],
      zh: [
        "实现多进程实验，并说明项目的合法使用边界。",
        "通过项目学习性能边界和负责任的安全表达方式。"
      ]
    },
    learnings: {
      en: [
        "Learned to separate technical curiosity from unsafe or misleading product framing.",
        "Strengthened awareness that security projects need clear ethics, not just code."
      ],
      zh: [
        "学习区分技术好奇心和不安全、误导性的产品表达。",
        "强化了安全项目不仅需要代码，也需要清晰伦理边界的意识。"
      ]
    }
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
