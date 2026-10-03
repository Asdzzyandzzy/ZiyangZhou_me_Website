import type { LocalizedText } from "@/lib/i18n";

export type SkillGroup = {
  title: LocalizedText;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: { en: "Use Regularly", zh: "经常使用" },
    items: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Jupyter Notebook", "Git", "Data Cleaning", "EDA"]
  },
  {
    title: { en: "Applied In Internships", zh: "实习中实践过" },
    items: ["SAS", "GLM", "Feature Selection", "Time-Series Forecasting", "Random Forest", "Weighted Ensembles", "Backtesting", "Data Visualization"]
  },
  {
    title: { en: "Coursework Foundations", zh: "课程基础" },
    items: ["Statistics", "Probability", "Regression", "Cross-validation", "Data Structures", "Algorithms", "OOP", "Java", "C++", "R"]
  },
  {
    title: { en: "Used In ML Projects", zh: "机器学习项目中使用过" },
    items: ["LightGBM", "XGBoost", "CatBoost", "GridSearchCV", "GroupKFold", "K-Means", "DBSCAN", "GloVe", "LDA", "PyTorch"]
  },
  {
    title: { en: "Used To Build Tools", zh: "工具项目中使用过" },
    items: ["Streamlit", "Plotly", "AKShare", "Tushare", "TypeScript", "Next.js", "React", "Tailwind CSS", "Pytest", "JUnit"]
  },
  {
    title: { en: "Learning Through Projects", zh: "通过项目继续学习" },
    items: ["LLM Tool Calling", "Context Management", "Local Qwen / Ollama", "AI-Assisted Development", "Model Unlearning", "Object Detection", "Browser Automation"]
  }
];
