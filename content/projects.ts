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

// 这里管理所有项目。以后新增项目：
// 1. 复制一个对象；
// 2. 改 slug（会自动生成 /projects/你的-slug）；
// 3. 填写中英文标题、简介、技术栈和 GitHub 链接；
// 4. featured: true 会出现在首页精选项目里。
export const projects: Project[] = [
  {
    slug: "sleep-app",
    featured: true,
    title: {
      en: "Sleep Tracking App",
      zh: "睡眠追踪 App"
    },
    subtitle: {
      en: "A Java application for sleep goals, logs, and trend insights.",
      zh: "用于记录睡眠、设定目标并分析趋势的 Java 应用。"
    },
    period: {
      en: "Jan 2024 - May 2024",
      zh: "2024 年 1 月 - 5 月"
    },
    category: {
      en: "Application Development",
      zh: "应用开发"
    },
    techStack: ["Java", "OOP", "Data Modeling", "User Stories"],
    repo: "https://github.com/Asdzzyandzzy/sleep-app",
    summary: {
      en: "A personal application designed to help users track sleep, set targets, and understand sleep patterns through structured logs and statistics.",
      zh: "一个帮助用户记录睡眠、设置目标，并通过结构化日志和统计信息理解睡眠规律的个人应用。"
    },
    motivation: {
      en: "The project started from a personal need: building a clearer routine and understanding sleep patterns through a tool that is simple enough to use consistently.",
      zh: "项目来自真实个人需求：希望通过一个简单、可持续使用的工具建立更清晰的作息，并理解自己的睡眠模式。"
    },
    features: {
      en: [
        "Record daily sleep sessions and aggregate them over time.",
        "Set sleep goals and compare actual sleep against targets.",
        "View statistics that summarize sleep quality, patterns, and improvement areas."
      ],
      zh: [
        "记录每日睡眠并按时间累计。",
        "设定睡眠目标，并将实际睡眠与目标进行对比。",
        "生成睡眠规律、异常和改进空间相关统计信息。"
      ]
    },
    contribution: {
      en: [
        "Designed user stories and translated them into Java classes and application behavior.",
        "Implemented the core data model and interaction flow for sleep logging and statistics."
      ],
      zh: [
        "设计用户故事，并将需求转化为 Java 类和应用行为。",
        "实现睡眠记录、数据模型和统计分析的核心交互流程。"
      ]
    },
    learnings: {
      en: [
        "Practiced object-oriented design and product thinking in a small but complete application.",
        "Learned how to turn a personal problem into maintainable software behavior."
      ],
      zh: [
        "在一个完整的小型应用中练习面向对象设计和产品思维。",
        "学习如何把个人问题转化为可维护的软件行为。"
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
      en: "A collection of ML experiments covering NLP, topic modeling, and tuning.",
      zh: "涵盖 NLP、主题建模和模型调参的机器学习实践合集。"
    },
    period: {
      en: "Jan 2026 - Apr 2026",
      zh: "2026 年 1 月 - 4 月"
    },
    category: {
      en: "Machine Learning",
      zh: "机器学习"
    },
    techStack: ["Python", "Scikit-learn", "NLP", "TF-IDF", "LDA", "GloVe"],
    repo: "https://github.com/Asdzzyandzzy/machine-learning-projects",
    summary: {
      en: "A learning and practice repository for machine learning techniques, including NLP, semantic analysis, topic modeling, and hyperparameter tuning.",
      zh: "一个机器学习学习与实践仓库，包括 NLP、语义分析、主题建模和超参数调优等内容。"
    },
    motivation: {
      en: "The goal was to build hands-on intuition for how models behave on structured and unstructured data, rather than only studying algorithms conceptually.",
      zh: "目标是通过实践理解模型在结构化和非结构化数据上的表现，而不只是停留在算法概念层面。"
    },
    features: {
      en: [
        "Vectorized large text datasets using TF-IDF and word embeddings.",
        "Applied LDA topic modeling for extracting themes and keywords.",
        "Visualized topic distributions and semantic relationships."
      ],
      zh: [
        "使用 TF-IDF 和词向量对大规模文本进行向量化。",
        "使用 LDA 进行主题建模、主题提取和关键词识别。",
        "可视化主题分布和词向量语义关系。"
      ]
    },
    contribution: {
      en: [
        "Implemented preprocessing, modeling, evaluation, and visualization workflows in Python.",
        "Explored word analogy tasks and compared model outputs for interpretability."
      ],
      zh: [
        "使用 Python 完成文本预处理、建模、评估和可视化流程。",
        "实现词语类比推理任务，并比较模型输出以提升可解释性。"
      ]
    },
    learnings: {
      en: [
        "Strengthened practical understanding of NLP pipelines and unsupervised learning.",
        "Learned how preprocessing choices influence downstream model quality."
      ],
      zh: [
        "加深了对 NLP Pipeline 和无监督学习的实践理解。",
        "理解了数据预处理选择对后续模型效果的影响。"
      ]
    }
  },
  {
    slug: "astock-big-trade-analysis",
    featured: true,
    title: {
      en: "A-Share Big Trade Analyzer",
      zh: "A 股大单交易分析工具"
    },
    subtitle: {
      en: "A Streamlit data tool for filtering, aggregating, and visualizing tick-level A-share trades.",
      zh: "基于 Streamlit 的 A 股逐笔交易筛选、聚合与可视化工具。"
    },
    period: {
      en: "Aug 2025",
      zh: "2025 年 8 月"
    },
    category: {
      en: "Data Product",
      zh: "数据产品"
    },
    techStack: ["Python", "Streamlit", "AKShare", "Pandas", "Visualization"],
    repo: "https://github.com/Asdzzyandzzy/AStock-Trade-Analysis",
    summary: {
      en: "A Streamlit-based application for real-time analysis of A-share tick-level trade data, with large-order filtering and visual summaries.",
      zh: "一个基于 Streamlit 的 A 股逐笔交易数据分析应用，支持大单筛选和可视化总结。"
    },
    motivation: {
      en: "Financial data is noisy and hard to inspect manually. This tool focuses on turning raw tick data into structured views that help users quickly compare trade amount, price levels, and buy/sell behavior.",
      zh: "金融逐笔数据噪声大、人工查看效率低。这个工具旨在把原始 tick 数据转化为结构化视图，帮助用户快速比较成交金额、价格区间和买卖行为。"
    },
    features: {
      en: [
        "Fetch tick-by-tick transaction data with AKShare.",
        "Filter trades by custom amount ranges and classify large orders.",
        "Generate pivot tables, weighted average prices, charts, and CSV exports."
      ],
      zh: [
        "通过 AKShare 获取逐笔交易数据。",
        "按自定义金额区间筛选交易，并对大单进行分层统计。",
        "生成透视表、加权平均价格、图表和 CSV 导出。"
      ]
    },
    contribution: {
      en: [
        "Designed the data flow from API retrieval to filtering, aggregation, visualization, and export.",
        "Built an interactive Streamlit interface for exploring market microstructure data."
      ],
      zh: [
        "设计从 API 获取、筛选、聚合、可视化到导出的完整数据流程。",
        "搭建 Streamlit 交互界面，用于探索市场微观交易数据。"
      ]
    },
    learnings: {
      en: [
        "Practiced building data tools that are both analytical and usable.",
        "Learned how to translate market questions into filters, bins, and visual summaries."
      ],
      zh: [
        "练习构建兼具分析能力和可用性的金融数据工具。",
        "学习如何把市场问题转化为筛选条件、分层区间和可视化摘要。"
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
      en: "A Kaggle modeling project focused on feature engineering and predictive performance.",
      zh: "聚焦特征工程和预测效果的 Kaggle 建模项目。"
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
      en: "A machine learning competition project using structured data workflows for preprocessing, feature engineering, model selection, and submission preparation.",
      zh: "一个机器学习竞赛项目，使用结构化数据流程完成预处理、特征工程、模型选择和提交准备。"
    },
    motivation: {
      en: "Kaggle projects provide a compact way to practice real-world modeling decisions under measurable evaluation metrics.",
      zh: "Kaggle 项目能在明确指标下训练真实建模决策，是练习机器学习流程的有效方式。"
    },
    features: {
      en: [
        "Prepared structured competition data for modeling.",
        "Experimented with features and model choices.",
        "Organized code for repeatable training and prediction."
      ],
      zh: [
        "整理竞赛结构化数据用于建模。",
        "尝试不同特征和模型选择。",
        "组织可重复训练和预测的代码流程。"
      ]
    },
    contribution: {
      en: [
        "Handled preprocessing, feature construction, and model experimentation.",
        "Used the project to strengthen end-to-end machine learning workflow discipline."
      ],
      zh: [
        "完成数据预处理、特征构建和模型实验。",
        "通过项目强化端到端机器学习流程意识。"
      ]
    },
    learnings: {
      en: [
        "Improved comfort with structured ML competitions and evaluation-driven iteration.",
        "Learned to balance model complexity with maintainable experiment flow."
      ],
      zh: [
        "提升了结构化机器学习竞赛和基于评估指标迭代的熟练度。",
        "学习在模型复杂度和实验可维护性之间取得平衡。"
      ]
    }
  },
  {
    slug: "avocado-price-forecasting",
    featured: false,
    title: {
      en: "Avocado Price Forecasting",
      zh: "牛油果价格时间序列预测"
    },
    subtitle: {
      en: "A time-series forecasting project using lag features and Random Forest regression.",
      zh: "使用滞后特征和 Random Forest 回归完成的时间序列预测项目。"
    },
    period: {
      en: "Jan 2026 - Mar 2026",
      zh: "2026 年 1 月 - 3 月"
    },
    category: {
      en: "Forecasting",
      zh: "时间序列预测"
    },
    techStack: ["Python", "Pandas", "RandomForestRegressor", "Time Series"],
    summary: {
      en: "Built a forecasting model on 2015-2018 multi-region avocado sales data, using lag and calendar features while avoiding data leakage.",
      zh: "基于 2015-2018 年多地区牛油果销售数据构建预测模型，使用滞后特征和时间特征，并避免数据泄露。"
    },
    motivation: {
      en: "The project explored how historical price and calendar patterns can support practical forecasting.",
      zh: "项目探索历史价格和日历特征如何支持实际预测任务。"
    },
    features: {
      en: [
        "Created lag features and month/week time features.",
        "Used time-aware splits to avoid leakage.",
        "Reached a test R² of 0.787, outperforming baseline forecasts."
      ],
      zh: [
        "构建 Lag Features 与 month/week 等时间特征。",
        "使用时间序列切分避免数据泄露。",
        "测试集 R² 达到 0.787，显著优于基线预测模型。"
      ]
    },
    contribution: {
      en: ["Designed the feature pipeline and evaluated forecasting performance."],
      zh: ["设计特征工程流程并评估预测效果。"]
    },
    learnings: {
      en: ["Learned how data leakage can distort time-series model performance."],
      zh: ["理解了数据泄露对时间序列模型评估的影响。"]
    }
  },
  {
    slug: "airbnb-price-prediction",
    featured: false,
    title: {
      en: "Airbnb Price Prediction",
      zh: "Airbnb 房源价格预测"
    },
    subtitle: {
      en: "A supervised learning project on 40k+ New York Airbnb listings.",
      zh: "基于 4 万多条纽约 Airbnb 房源数据的监督学习项目。"
    },
    period: {
      en: "Jan 2026 - Feb 2026",
      zh: "2026 年 1 月 - 2 月"
    },
    category: {
      en: "Predictive Modeling",
      zh: "预测建模"
    },
    techStack: ["Python", "Scikit-learn Pipeline", "Random Forest", "GridSearchCV"],
    summary: {
      en: "Built a price prediction workflow using room type, geography, review count, preprocessing pipelines, and tuned tree-based models.",
      zh: "基于房型、地理位置、评论数量等特征构建房价预测流程，使用 Pipeline 和调参后的树模型。"
    },
    motivation: {
      en: "The project connects machine learning with an interpretable business question: what factors shape listing prices?",
      zh: "项目将机器学习与可解释的商业问题结合：哪些因素影响房源定价？"
    },
    features: {
      en: [
        "Cleaned 40k+ listing records and handled missing values and long-tail prices.",
        "Compared linear regression, Gradient Boosting, and Random Forest models.",
        "Reduced RMSE from about 248 to 216."
      ],
      zh: [
        "清洗 4 万多条房源记录，处理缺失值和长尾价格分布。",
        "比较线性回归、Gradient Boosting 和 Random Forest 等模型。",
        "将 RMSE 从约 248 降低至 216。"
      ]
    },
    contribution: {
      en: ["Implemented preprocessing, model comparison, tuning, and feature importance analysis."],
      zh: ["实现预处理、模型对比、调参与特征重要性分析。"]
    },
    learnings: {
      en: ["Improved understanding of model interpretability and feature-driven product insight."],
      zh: ["提升了对模型可解释性和特征驱动业务洞察的理解。"]
    }
  },
  {
    slug: "glass-futures-strategy",
    featured: false,
    title: {
      en: "China Glass Futures Trading Strategy",
      zh: "中国玻璃期货交易策略"
    },
    subtitle: {
      en: "A quantitative strategy exploration using Python, Pine Script, and backtesting.",
      zh: "使用 Python、Pine Script 和回测进行的量化策略探索。"
    },
    period: {
      en: "Sep 2024 - Present",
      zh: "2024 年 9 月 - 至今"
    },
    category: {
      en: "Quantitative Research",
      zh: "量化研究"
    },
    techStack: ["Python", "Pine Script", "TradingView", "Pandas", "Matplotlib"],
    summary: {
      en: "A futures strategy project for China glass futures, combining TradingView modeling, Python analysis, and ongoing live-testing preparation.",
      zh: "一个中国玻璃期货策略项目，结合 TradingView 建模、Python 分析，并正在准备 API 实盘检验。"
    },
    motivation: {
      en: "The project explores whether systematic signals can be tested across long historical windows while controlling overfitting risk.",
      zh: "项目探索系统化信号是否能在长期历史窗口中稳定检验，同时控制过拟合风险。"
    },
    features: {
      en: [
        "Built automated strategy logic in Pine Script.",
        "Analyzed historical performance with Python, pandas, and matplotlib.",
        "Working on API-based live testing and multi-timeframe validation."
      ],
      zh: [
        "使用 Pine Script 构建自动化交易模型。",
        "使用 Python、pandas、matplotlib 分析历史表现。",
        "正在加入 API 实盘检验和多周期测试，降低过拟合风险。"
      ]
    },
    contribution: {
      en: ["Designed strategy logic, backtesting workflow, and ongoing validation approach."],
      zh: ["设计策略逻辑、回测流程和持续验证方案。"]
    },
    learnings: {
      en: ["Learned the importance of robustness, validation, and avoiding overfitting in financial models."],
      zh: ["理解了金融模型中稳健性、验证流程和避免过拟合的重要性。"]
    }
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
