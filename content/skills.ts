import type { LocalizedText } from "@/lib/i18n";

export type SkillGroup = {
  title: LocalizedText;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: { en: "Comfortable With", zh: "相对熟悉" },
    items: ["Python", "Pandas", "NumPy", "Jupyter Notebook", "Scikit-learn", "Matplotlib", "Git", "GitHub", "Data Cleaning", "EDA"]
  },
  {
    title: { en: "Coursework Foundations", zh: "课程基础" },
    items: ["Statistics", "Linear Regression", "Classification", "Clustering", "Data Structures", "Algorithms", "OOP", "Java", "C++", "C", "R"]
  },
  {
    title: { en: "ML / NLP Practice", zh: "机器学习与 NLP 练习" },
    items: [
      "Random Forest",
      "Decision Tree",
      "Logistic Regression",
      "KNN",
      "XGBoost",
      "K-Means",
      "DBSCAN",
      "TF-IDF",
      "GloVe",
      "LDA",
      "Feature Engineering",
      "Cross-validation"
    ]
  },
  {
    title: { en: "Have Used In Projects", zh: "项目中使用过" },
    items: ["TypeScript", "JavaScript", "Next.js", "React", "Tailwind CSS", "Streamlit", "Plotly", "AKShare", "TradingView", "Pine Script", "JUnit", "Pytest"]
  },
  {
    title: { en: "AI-Assisted Workflows", zh: "AI 辅助工作流" },
    items: [
      "Vibe Coding",
      "Multi-Agent Collaboration",
      "Prompt Engineering",
      "Local LLM",
      "ChatGPT",
      "DeepSeek",
      "Qwen",
      "Ollama",
      "Tool Calling",
      "Context Management"
    ]
  },
  {
    title: { en: "Learning / Exploring", zh: "正在学习和探索" },
    items: [
      "AI Agents",
      "Browser Automation",
      "CLI Tooling",
      "Workspace Safety",
      "CloudBase",
      "TokenHub",
      "GitHub Actions",
      "Time Series",
      "Financial Dashboards",
      "Financial Data Review"
    ]
  }
];
