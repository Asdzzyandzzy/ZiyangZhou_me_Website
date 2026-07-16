import type { LocalizedText } from "@/lib/i18n";

export type SkillGroup = {
  title: LocalizedText;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: { en: "Use Regularly", zh: "经常使用" },
    items: [
      "Python",
      "Pandas",
      "NumPy",
      "Jupyter Notebook",
      "Scikit-learn",
      "Matplotlib",
      "Git",
      "GitHub",
      "Data Cleaning",
      "EDA",
      "Feature Engineering",
      "Cross-validation"
    ]
  },
  {
    title: { en: "Coursework Foundations", zh: "课程基础" },
    items: [
      "Statistics",
      "Probability",
      "Linear Regression",
      "Classification",
      "Clustering",
      "Time Series Basics",
      "Data Structures",
      "Algorithms",
      "OOP",
      "Java",
      "C++",
      "C",
      "R"
    ]
  },
  {
    title: { en: "Used In ML Projects", zh: "机器学习项目中使用过" },
    items: [
      "Random Forest",
      "Logistic Regression",
      "LightGBM",
      "XGBoost",
      "CatBoost",
      "Optuna",
      "GroupKFold",
      "K-Means",
      "DBSCAN",
      "TF-IDF",
      "GloVe",
      "LDA",
      "UMAP",
      "PyTorch",
      "Torchvision",
      "RetinaNet"
    ]
  },
  {
    title: { en: "Data & App Tools", zh: "数据工具与应用开发" },
    items: [
      "Streamlit",
      "Plotly",
      "AKShare",
      "Tushare",
      "TypeScript",
      "JavaScript",
      "Next.js",
      "React",
      "Tailwind CSS",
      "Pygame",
      "TradingView",
      "Pine Script",
      "JUnit",
      "Pytest"
    ]
  },
  {
    title: { en: "AI-Assisted Development", zh: "AI 辅助开发" },
    items: [
      "AI-Assisted Prototyping",
      "Multi-Agent Collaboration",
      "Prompt Design",
      "Local LLMs",
      "Tool Calling",
      "Context Management",
      "ChatGPT",
      "DeepSeek",
      "Qwen",
      "Ollama"
    ]
  },
  {
    title: { en: "Currently Exploring", zh: "正在继续学习" },
    items: [
      "AI Agents",
      "Model Unlearning",
      "Object Detection",
      "Competition Experiment Design",
      "Browser Automation",
      "CLI Tooling",
      "CloudBase",
      "GitHub Actions",
      "Financial Data Workflows"
    ]
  }
];
