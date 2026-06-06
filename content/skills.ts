import type { LocalizedText } from "@/lib/i18n";

export type SkillGroup = {
  title: LocalizedText;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: { en: "Programming & CS", zh: "编程与计算机基础" },
    items: ["Python", "TypeScript", "JavaScript", "Java", "C++", "C", "R", "OOP", "Algorithms", "Data Structures", "Pytest"]
  },
  {
    title: { en: "Data & Visualization", zh: "数据与可视化" },
    items: ["Pandas", "NumPy", "AKShare", "Plotly", "Matplotlib", "Jupyter Notebook", "Data Analysis", "Data Cleaning", "EDA"]
  },
  {
    title: { en: "Machine Learning", zh: "机器学习" },
    items: [
      "Scikit-learn",
      "Regression",
      "Classification",
      "Random Forest",
      "IsolationForest",
      "K-Means",
      "Feature Engineering",
      "Model Evaluation"
    ]
  },
  {
    title: { en: "LLM & Generative AI", zh: "大语言模型与生成式 AI" },
    items: [
      "Generative AI",
      "Local LLM",
      "ChatGPT",
      "DeepSeek",
      "Qwen",
      "Ollama",
      "AI Agents",
      "Tool Calling",
      "ReAct",
      "Prompt Engineering",
      "Prompt Orchestration",
      "Context Handoff"
    ]
  },
  {
    title: { en: "NLP & Computer Vision", zh: "NLP 与计算机视觉" },
    items: ["NLP", "TF-IDF", "LDA", "GloVe", "Topic Modeling", "Computer Vision", "Image Classification"]
  },
  {
    title: { en: "Web & Product", zh: "Web 与产品" },
    items: ["Next.js", "React", "Node.js", "Electron", "HTTP API", "Tailwind CSS", "Streamlit", "App Router", "Cloudflare", "Data Modeling", "User Stories"]
  },
  {
    title: { en: "Financial Data", zh: "金融数据" },
    items: [
      "Intraday Tick Analysis",
      "Order Flow",
      "VWAP",
      "Technical Indicators",
      "Risk Disclosure",
      "Sports Analytics",
      "TradingView"
    ]
  },
  {
    title: { en: "Security & Systems", zh: "安全与系统" },
    items: ["Browser Automation", "CLI Tooling", "Workspace Safety", "Multiprocessing", "CPU Optimization", "Cryptography Concepts", "Debugging", "macOS", "Git", "GitHub"]
  }
];
