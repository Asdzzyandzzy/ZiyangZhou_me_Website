import type { LocalizedList, LocalizedText } from "@/lib/i18n";

export const profile = {
  name: "Ziyang Zhou",
  chineseName: "周梓洋",
  role: {
    en: "UBC Statistics student interested in machine learning, AI, and applied data research",
    zh: "UBC 统计学本科生，关注机器学习、AI 与应用数据研究"
  } satisfies LocalizedText,
  location: {
    en: "Vancouver, Canada",
    zh: "加拿大温哥华"
  } satisfies LocalizedText,
  summary: {
    en: "A project portfolio for Ziyang Zhou, focused on machine learning, AI, applied data analysis, and software tools for research-oriented problems.",
    zh: "周梓洋的项目作品集，重点展示机器学习、AI、应用数据分析，以及面向研究问题的软件工具。"
  } satisfies LocalizedText,
  about: {
    en: [
      "I study Statistics at the University of British Columbia and am preparing for graduate study in areas related to machine learning, AI, and applied data science.",
      "My projects focus on the full path from data to model to interpretation: collecting and cleaning data, building features, comparing models, evaluating limitations, and presenting results clearly.",
      "The work here includes NLP and computer vision experiments, financial data dashboards, A-share tick analysis, sports analytics, and software systems that support data-driven research."
    ],
    zh: [
      "我就读于英属哥伦比亚大学统计学专业，正在准备申请机器学习、AI 和应用数据科学相关的研究生项目。",
      "我的项目通常围绕从数据到模型再到解释的完整过程：收集与清洗数据、构建特征、比较模型、评估局限，并清楚地呈现结果。",
      "这里的项目包括 NLP 与计算机视觉实验、金融数据 Dashboard、A 股逐笔分析、体育数据分析，以及支持数据研究的软件系统。"
    ]
  } satisfies LocalizedList,
  highlights: {
    en: [
      "UBC Statistics BSc, expected 2027",
      "CS GPA: 3.75 / 4.33",
      "Hands-on projects across ML, AI, NLP, computer vision, financial data, and web products",
      "Experience with Python, TypeScript, Java, C++, C, and R"
    ],
    zh: [
      "UBC 统计学理学学士，预计 2027 年毕业",
      "CS GPA：3.75 / 4.33",
      "项目方向覆盖机器学习、AI、NLP、计算机视觉、金融数据和 Web 产品",
      "使用 Python、TypeScript、Java、C++、C、R 等语言进行开发"
    ]
  } satisfies LocalizedList
};
