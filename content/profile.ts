import type { LocalizedList, LocalizedText } from "@/lib/i18n";

export const profile = {
  name: "Ziyang Zhou",
  chineseName: "周梓洋",
  role: {
    en: "UBC Statistics student working on ML, data analysis, and AI-assisted project prototypes",
    zh: "UBC 统计学本科生，主要做机器学习、数据分析和 AI 辅助项目原型"
  } satisfies LocalizedText,
  location: {
    en: "Vancouver, Canada",
    zh: "加拿大温哥华"
  } satisfies LocalizedText,
  summary: {
    en: "A portfolio of coursework, personal projects, and AI-assisted prototypes in machine learning, data analysis, NLP, financial data tools, and small software applications.",
    zh: "这里整理了我的课程项目、个人项目和 AI 辅助原型，方向包括机器学习、数据分析、NLP、金融数据工具和小型软件应用。"
  } satisfies LocalizedText,
  about: {
    en: [
      "I study Statistics at the University of British Columbia and use this site to keep a clear record of the projects I can discuss in interviews.",
      "My strongest work is in hands-on ML coursework and data analysis: cleaning data, building features, comparing baselines, checking model behavior, and explaining results with clear limitations.",
      "I also build personal and AI-assisted prototypes, including local LLM workflows, coding-agent experiments, financial-data dashboards, and small web tools. For those projects, I focus on design decisions, manual checking, and what I learned from the process."
    ],
    zh: [
      "我就读于英属哥伦比亚大学统计学专业，这个网站用来清楚记录我能在面试中解释的项目。",
      "我比较扎实的部分是机器学习课程项目和数据分析：清洗数据、构建特征、比较基线、检查模型表现，并说明结果的局限。",
      "我也会做个人项目和 AI 辅助原型，包括本地 LLM 流程、coding agent 实验、金融数据 dashboard 和小型 Web 工具。这类项目更强调设计思路、人工复盘和从迭代中学到的东西。"
    ]
  } satisfies LocalizedList,
  highlights: {
    en: [
      "UBC Statistics BSc, expected 2027",
      "CS GPA: 3.75 / 4.33",
      "Coursework and self-directed projects across ML, NLP, data analysis, Java/C++ labs, and AI-assisted tools",
      "Most comfortable with Python notebooks and data workflows; have also used TypeScript, Java, C++, C, and R"
    ],
    zh: [
      "UBC 统计学理学学士，预计 2027 年毕业",
      "CS GPA：3.75 / 4.33",
      "课程项目和个人项目覆盖机器学习、NLP、数据分析、Java/C++ 实验和 AI 辅助工具",
      "最常使用 Python notebook 和数据分析流程，也使用过 TypeScript、Java、C++、C、R"
    ]
  } satisfies LocalizedList
};
