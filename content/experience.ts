import type { LocalizedList, LocalizedText } from "@/lib/i18n";

export type ExperienceItem = {
  id: string;
  type: "education" | "work";
  title: LocalizedText;
  organization: LocalizedText;
  period: LocalizedText;
  location?: LocalizedText;
  description: LocalizedList;
};

// 这里管理教育和实践经历。以后新增经历：复制一个对象，修改 id/title/period/description 即可。
export const experiences: ExperienceItem[] = [
  {
    id: "ubc-statistics",
    type: "education",
    title: {
      en: "BSc in Statistics",
      zh: "统计学理学士"
    },
    organization: {
      en: "University of British Columbia",
      zh: "英属哥伦比亚大学"
    },
    period: {
      en: "Sep 2023 - Jun 2027",
      zh: "2023.09 - 2027.06"
    },
    location: {
      en: "Vancouver, Canada",
      zh: "加拿大温哥华"
    },
    description: {
      en: [
        "Coursework includes software engineering principles, data analysis with R and Python, data structures and algorithms, machine learning, web development, NLP, Java application development, and stochastic processes.",
        "CS GPA: 3.75 / 4.33."
      ],
      zh: [
        "主修课程包括软件工程原理、R/Python 数据分析、数据结构与算法、机器学习、网页开发、NLP、Java 应用程序开发和随机过程分析。",
        "CS GPA：3.75 / 4.33。"
      ]
    }
  },
  {
    id: "guotai-haitong-ipo",
    type: "work",
    title: {
      en: "IPO Intern",
      zh: "IPO 项目组实习生"
    },
    organization: {
      en: "Guotai Haitong Securities IPO Project Team",
      zh: "国泰海通证券 IPO 项目组"
    },
    period: {
      en: "Jul 2025 - Aug 2025",
      zh: "2025 年 7 月 - 8 月"
    },
    description: {
      en: [
        "Supported an IPO project for the Beijing Stock Exchange by assisting with industry research, financial data organization, and listing material analysis.",
        "Used Excel and Python to analyze operating data, financial metrics, and comparable companies, improving data handling efficiency and accuracy.",
        "Helped verify prospectus-related data and organize information disclosure materials for the listing process."
      ],
      zh: [
        "参与某企业北交所 IPO 项目，协助完成行业研究、财务数据整理与上市申报材料分析。",
        "使用 Excel / Python 分析企业经营数据、财务指标及行业可比公司，提高数据处理效率与准确性。",
        "协助项目组进行招股书相关数据核验与信息披露整理，支持上市材料准备流程。"
      ]
    }
  },
  {
    id: "speedup-math-teacher",
    type: "work",
    title: {
      en: "Part-time Mathematics Teacher",
      zh: "兼职数学教师"
    },
    organization: {
      en: "SpeedUp Education",
      zh: "SpeedUp 教育机构"
    },
    period: {
      en: "Jan 2025 - May 2025",
      zh: "2025 年 1 月 - 5 月"
    },
    description: {
      en: [
        "Provided one-on-one academic support and helped students score more than 10% above class average.",
        "Explained advanced calculus topics with an emphasis on multivariable integrals and structured problem solving."
      ],
      zh: [
        "提供一对一辅导与学术支持，帮助学生成绩平均超出班级 10% 以上。",
        "讲授高级微积分课程，重点讲解多元积分与复杂问题解决技巧。"
      ]
    }
  }
];
