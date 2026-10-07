import type { LocalizedList, LocalizedText } from "@/lib/i18n";

export const profile = {
  name: "Ziyang Zhou",
  chineseName: "周梓洋",
  role: {
    en: "Applied Machine Learning · Statistical Modeling | UBC Statistics",
    zh: "应用机器学习 · 统计建模 | UBC 统计学"
  } satisfies LocalizedText,
  location: { en: "Vancouver, Canada", zh: "加拿大温哥华" } satisfies LocalizedText,
  summary: {
    en: "Machine learning is my focus. Statistics is the foundation. I bring them together through predictive modeling, disciplined validation and practical AI systems.",
    zh: "以机器学习为核心，以统计学为基础，将预测建模、严谨的模型验证与 AI 应用开发连接起来。"
  } satisfies LocalizedText,
  about: {
    en: [
      "I'm Ziyang Zhou (周梓洋), a fourth-year Statistics undergraduate at the University of British Columbia (UBC), expecting to graduate in May 2027. My strengths are applied machine learning, statistical modeling and model evaluation. I work across the modeling process: defining prediction tasks, engineering features, training models and testing how well they generalize.",
      "My core toolkit is Python, scikit-learn and gradient-boosted trees, including LightGBM. I apply these methods to forecasting and financial prediction, with particular attention to information leakage, temporal validation and the value of each new feature. In industry, I worked on electricity consumption forecasting at Shusheng Data and GLM-based insurance pricing support at Guangbo.",
      "Beyond tabular modeling, I explore computer vision, model unlearning and LLM-based tools. My projects include CSI 300 stock ranking, RetinaNet model experiments and a local coding assistant. I use AI-assisted development for implementation while taking responsibility for experiment design, model selection and result review; my CPSC 330 machine-learning coursework and CPSC 221 data-structure labs were independently written."
    ],
    zh: [
      "我是周梓洋（Ziyang Zhou），英属哥伦比亚大学（UBC）统计学专业大四本科生，预计于 2027 年 5 月毕业。我擅长应用机器学习、统计建模与模型评估，实践覆盖预测任务定义、特征工程、模型训练及泛化能力验证。",
      "我的核心技术栈包括 Python、scikit-learn 及 LightGBM 等梯度提升树模型，重点应用于时间序列预测和金融预测。我重视信息泄漏检查、时间验证及特征的实际增益，曾在数升数据参与用电量预测，在光博参与基于 GLM 的保险定价支持工作。",
      "在表格建模之外，我持续探索计算机视觉、模型遗忘与大语言模型应用，项目包括沪深 300 股票排序、RetinaNet 模型实验和本地编程助手。项目实现中使用 AI 辅助开发，由我负责实验设计、模型选择与结果复核；CPSC 330 机器学习课程作业及 CPSC 221 数据结构实验由我独立编写。"
    ]
  } satisfies LocalizedList,
  highlights: {
    en: [
      "UBC BSc in Statistics, expected May 2027",
      "Dean's List, 2023-24 Winter Session",
      "Applied ML: feature engineering, tree ensembles and model validation",
      "Forecasting and GLM modeling applied in 2026 industry internships",
      "Mandarin (native) and English"
    ],
    zh: [
      "UBC 统计学理学学士，预计 2027 年 5 月毕业",
      "Dean's List，2023-24 冬季学年",
      "应用机器学习：特征工程、树模型集成与模型验证",
      "在 2026 年实习中应用预测建模与 GLM 方法",
      "普通话（母语）与英语"
    ]
  } satisfies LocalizedList
};
