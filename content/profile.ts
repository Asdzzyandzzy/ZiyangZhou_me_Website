import type { LocalizedList, LocalizedText } from "@/lib/i18n";

export const profile = {
  name: "Ziyang Zhou",
  chineseName: "周梓洋",
  role: {
    en: "UBC Statistics student working on applied ML, data analysis, and AI-assisted tools",
    zh: "UBC 统计学本科生，主要做应用机器学习、数据分析和 AI 辅助工具"
  } satisfies LocalizedText,
  location: {
    en: "Vancouver, Canada",
    zh: "加拿大温哥华"
  } satisfies LocalizedText,
  summary: {
    en: "A portfolio of self-written coursework, competition research, personal projects, and AI-assisted tools across machine learning, data analysis, NLP, computer vision, and software development.",
    zh: "这里整理了我独立完成的课程作业、比赛研究、个人项目和 AI 辅助工具，方向包括机器学习、数据分析、NLP、计算机视觉和软件开发。"
  } satisfies LocalizedText,
  about: {
    en: [
      "I study Statistics at the University of British Columbia and use this site to keep a clear record of the projects I can discuss in interviews.",
      "My strongest foundation comes from hands-on ML coursework and data analysis: cleaning data, building features, choosing validation splits, comparing baselines, checking model behavior, and explaining limitations.",
      "I wrote my CPSC 330 machine-learning work and CPSC 221 data-structure labs myself. In newer prototypes and competition projects, I often use AI to speed up implementation, while I set the problem, choose experiments, review outputs, and decide what to change next."
    ],
    zh: [
      "我就读于英属哥伦比亚大学统计学专业，这个网站用来清楚记录我能在面试中解释的项目。",
      "我比较扎实的基础来自机器学习课程和数据分析实践：清洗数据、构建特征、选择验证切分、比较基线、检查模型表现，并说明结果局限。",
      "CPSC 330 机器学习作业和 CPSC 221 数据结构实验由我独立完成。较新的原型和比赛项目会使用 AI 加快实现，但问题定义、实验选择、结果检查和下一步判断由我负责。"
    ]
  } satisfies LocalizedList,
  highlights: {
    en: [
      "UBC Statistics BSc, expected 2027",
      "CS GPA: 3.75 / 4.33",
      "Current work includes tabular ML and computer-vision competitions, alongside coursework and personal tools",
      "Use Python most often; have also worked with TypeScript, Java, C++, C, and R"
    ],
    zh: [
      "UBC 统计学理学学士，预计 2027 年毕业",
      "CS GPA：3.75 / 4.33",
      "目前同时进行表格机器学习与计算机视觉比赛项目，也持续整理课程和个人工具项目",
      "最常使用 Python，也使用过 TypeScript、Java、C++、C 和 R"
    ]
  } satisfies LocalizedList
};
