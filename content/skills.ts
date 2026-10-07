import type { LocalizedText } from "@/lib/i18n";

export type SkillGroup = {
  title: LocalizedText;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: { en: "Machine Learning", zh: "机器学习" },
    items: ["Python", "Scikit-learn", "LightGBM", "XGBoost", "CatBoost", "Random Forest", "Feature Engineering", "Weighted Ensembles"]
  },
  {
    title: { en: "Model Evaluation & Forecasting", zh: "模型评估与预测" },
    items: ["Cross-validation", "Temporal Validation", "GroupKFold", "Backtesting", "Feature Selection", "Time-Series Forecasting", "GridSearchCV"]
  },
  {
    title: { en: "Statistical Foundations", zh: "统计学基础" },
    items: ["Statistics", "Probability", "Regression", "GLM", "SAS", "R", "K-Means", "DBSCAN"]
  },
  {
    title: { en: "AI Project Experience", zh: "AI 项目实践" },
    items: ["PyTorch", "RetinaNet", "Model Unlearning", "GloVe", "LDA", "LLM Tool Calling", "Context Management", "Local Qwen / Ollama"]
  },
  {
    title: { en: "Experiment & Data Tooling", zh: "实验与数据工具" },
    items: ["Pandas", "NumPy", "Jupyter Notebook", "Matplotlib", "Plotly", "Tushare", "Git", "Pytest"]
  },
  {
    title: { en: "Software & Applications", zh: "软件与应用开发" },
    items: ["Data Structures", "Algorithms", "Java", "C++", "TypeScript", "Next.js", "React", "Streamlit", "AI-Assisted Development"]
  }
];
