import type { LocalizedText } from "@/lib/i18n";

export type SkillGroup = {
  title: LocalizedText;
  items: string[];
};

// 这里管理技能分组。新增技能时，只需要往对应 items 数组里加字符串。
export const skillGroups: SkillGroup[] = [
  {
    title: { en: "Programming", zh: "编程语言" },
    items: ["Python", "JavaScript", "TypeScript", "Java", "C++", "C", "R"]
  },
  {
    title: { en: "Data Analysis", zh: "数据分析" },
    items: ["Pandas", "NumPy", "Matplotlib", "ggplot", "EDA", "Data Cleaning"]
  },
  {
    title: { en: "Machine Learning", zh: "机器学习" },
    items: [
      "Scikit-learn",
      "Regression",
      "Classification",
      "Random Forest",
      "Gradient Boosting",
      "XGBoost",
      "GridSearchCV"
    ]
  },
  {
    title: { en: "NLP & Unsupervised Learning", zh: "NLP 与无监督学习" },
    items: ["TF-IDF", "LDA", "GloVe", "Topic Modeling", "K-Means", "DBSCAN"]
  },
  {
    title: { en: "Tools & Product", zh: "工具与产品" },
    items: ["Git", "GitHub", "Streamlit", "TradingView", "Pine Script", "OOP"]
  }
];
