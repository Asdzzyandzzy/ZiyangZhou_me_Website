import type { LocalizedList, LocalizedText } from "@/lib/i18n";

export const profile = {
  name: "Ziyang Zhou",
  chineseName: "周梓洋",
  role: {
    en: "UBC Statistics student | Data analysis & applied machine learning",
    zh: "UBC 统计学本科生 | 数据分析与应用机器学习"
  } satisfies LocalizedText,
  location: { en: "Vancouver, Canada", zh: "加拿大温哥华" } satisfies LocalizedText,
  summary: {
    en: "Statistics coursework, forecasting and actuarial internships, and personal projects in machine learning and AI tools.",
    zh: "从统计学课程，到预测与精算实习，再到机器学习和 AI 工具的个人项目。"
  } satisfies LocalizedText,
  about: {
    en: [
      "I study Statistics at the University of British Columbia and expect to graduate in May 2027. I enjoy working through a data problem from the first messy table to a result that someone else can understand and use.",
      "In 2026, I worked on electricity consumption forecasting at Shusheng Data and insurance pricing support at Guangbo. These internships gave me practice with data preparation, feature selection, model comparison, and explaining results in a business setting.",
      "My personal work includes ML competitions, a local coding assistant, and a Chinese fiction generation workflow. I use AI tools to help implement and iterate on many of these projects, with particular attention to the problem, the workflow, and how to check the output. I wrote my CPSC 330 machine-learning coursework and CPSC 221 data-structure labs myself."
    ],
    zh: [
      "我就读于英属哥伦比亚大学统计学专业，预计 2027 年 5 月毕业。我喜欢从整理一张杂乱的数据表开始，逐步把问题分析清楚，再把结果解释给需要使用它的人。",
      "2026 年，我在数升数据参与用电量预测，在光博参与保险定价支持工作。这两段实习让我把数据整理、特征筛选和模型比较用到了实际业务中，也练习了如何向他人说明分析结果。",
      "课外项目包括机器学习比赛、本地编程助手和中文小说生成流程。其中不少项目使用 AI 辅助实现和迭代，我重点关注问题定义、使用流程和结果检查。CPSC 330 机器学习课程作业与 CPSC 221 数据结构实验由我独立编写。"
    ]
  } satisfies LocalizedList,
  highlights: {
    en: [
      "UBC BSc in Statistics, expected May 2027",
      "Dean's List, 2023-24 Winter Session",
      "2026 internships in electricity forecasting and actuarial analysis",
      "Python for data work; SAS used in insurance pricing support",
      "Mandarin (native) and English"
    ],
    zh: [
      "UBC 统计学理学学士，预计 2027 年 5 月毕业",
      "Dean's List，2023-24 冬季学年",
      "2026 年参与用电量预测与精算分析实习",
      "使用 Python 处理数据，在保险定价支持工作中使用过 SAS",
      "普通话（母语）与英语"
    ]
  } satisfies LocalizedList
};
