import type { LocalizedList, LocalizedText } from "@/lib/i18n";

// 这里管理个人基础信息和关于我文案。以后个人定位变化，主要改这个文件。
export const profile = {
  name: "Ziyang Zhou",
  chineseName: "周梓洋",
  role: {
    en: "Statistics student at the University of British Columbia",
    zh: "英属哥伦比亚大学统计学本科生"
  } satisfies LocalizedText,
  location: {
    en: "Vancouver, Canada",
    zh: "加拿大温哥华"
  } satisfies LocalizedText,
  summary: {
    en: "A personal portfolio for Ziyang Zhou — a builder exploring software, machine learning, data, and product ideas.",
    zh: "周梓洋的个人作品集，展示软件、机器学习、数据分析和产品想法相关探索。"
  } satisfies LocalizedText,
  about: {
    en: [
      "I study Statistics at the University of British Columbia and build projects across software engineering, machine learning, and data analysis.",
      "My work often starts from practical questions: how to analyze market behavior, how to turn raw data into product insight, and how to build tools that people can actually use.",
      "I enjoy connecting quantitative thinking with product execution, from Python notebooks and Streamlit apps to Java applications and web interfaces."
    ],
    zh: [
      "我就读于英属哥伦比亚大学统计学专业，长期探索软件工程、机器学习与数据分析方向。",
      "我的项目通常从实际问题出发：如何分析市场行为，如何把原始数据转化为产品洞察，以及如何做出真正可用的工具。",
      "我喜欢把定量分析和产品实现结合起来，从 Python Notebook、Streamlit 应用，到 Java 应用和网页界面。"
    ]
  } satisfies LocalizedList,
  highlights: {
    en: [
      "UBC Statistics BSc, expected 2027",
      "CS GPA: 3.75 / 4.33",
      "Experience across Python, JavaScript, Java, C++, C, and R",
      "Project focus: ML, NLP, data visualization, finance data tools, and application development"
    ],
    zh: [
      "UBC 统计学理学士，预计 2027 年毕业",
      "CS GPA：3.75 / 4.33",
      "掌握 Python、JavaScript、Java、C++、C、R 等语言",
      "项目方向包括机器学习、NLP、数据可视化、金融数据工具和应用开发"
    ]
  } satisfies LocalizedList
};
