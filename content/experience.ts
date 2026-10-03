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
    id: "shusheng-data-analyst",
    type: "work",
    title: { en: "Data Analyst Intern", zh: "数据分析实习生" },
    organization: {
      en: "Anhui Shusheng Data Technology Co., Ltd.",
      zh: "安徽数升数据科技有限公司"
    },
    period: {
      en: "May 6-31 & Aug 3-31, 2026",
      zh: "2026 年 5 月 6-31 日、8 月 3-31 日"
    },
    location: { en: "Hefei, China", zh: "中国合肥" },
    description: {
      en: [
        "Collected, cleaned, and standardized electricity sales, load, weather, holiday, and customer data for weekly and monthly consumption forecasting.",
        "Used correlation analysis to narrow more than 20 candidate features to 12, and helped build and tune models including Random Forest.",
        "Contributed to weighted model ensembles, adjusting weights through historical backtesting and comparing them with individual models.",
        "Prepared forecast charts and comparisons for project reports and client presentations."
      ],
      zh: [
        "收集、清洗并统一售电量、负荷、气象、节假日和用户属性等数据，用于周度与月度用电量预测。",
        "通过相关性分析将 20 多个候选特征筛选为 12 个核心特征，参与随机森林等模型的构建与调参。",
        "参与加权模型集成，通过历史数据回测调整权重，并与单模型结果进行比较。",
        "整理预测结果、图表与不同方案的对比，支持项目汇报和客户展示。"
      ]
    }
  },
  {
    id: "guangbo-actuarial",
    type: "work",
    title: { en: "Actuarial Department Intern", zh: "精算部实习生" },
    organization: {
      en: "Shanghai Guangbo Hi-intelligence Technology Co., Ltd.",
      zh: "上海光博高智能科技有限公司"
    },
    period: {
      en: "Jun 8 - Jul 31, 2026",
      zh: "2026 年 6 月 8 日 - 7 月 31 日"
    },
    location: { en: "Shanghai, China", zh: "中国上海" },
    description: {
      en: [
        "Used SAS to clean and standardize policy and business data, and reviewed monthly operating trends for actuarial analysis.",
        "Assisted with screening, validating, and calibrating more than 15 risk factors for GLM-based insurance pricing; compared model results across factor specifications.",
        "Independently extracted and checked rate-table factors, and co-authored a standard operating manual to make repeated checks more consistent.",
        "Selected and shared daily insurance and financial industry updates with the team."
      ],
      zh: [
        "使用 SAS 清洗、整合并标准化保单与业务数据，分析月度经营趋势，为精算分析提供数据支持。",
        "参与 GLM 在保险定价中的应用，协助筛选、验证和校准 15 个以上风险因子，比较不同因子组合下的模型结果。",
        "独立完成费率表因子的导出与校核，参与编写《费率表导出标准化操作手册》，让重复校核流程更清晰、一致。",
        "筛选并向团队分享保险与金融行业每日资讯。"
      ]
    }
  },
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
      en: "Sep 2023 - May 2027 (expected)",
      zh: "2023 年 9 月 - 2027 年 5 月（预计）"
    },
    location: {
      en: "Vancouver, Canada",
      zh: "加拿大温哥华"
    },
    description: {
      en: [
        "Coursework includes applied machine learning, algorithms and data structures, models of computation, statistics, and calculus.",
        "Dean's List, first year, 2023-24 Winter Session.",
        "Selected course marks: Basic Algorithms and Data Structures 86%; Applied Machine Learning 83%; Finding Relationships in Data 80%."
      ],
      zh: [
        "课程包括应用机器学习、算法与数据结构、计算模型、统计学和微积分。",
        "大一获 Dean's List 荣誉（2023-24 冬季学年）。",
        "部分课程成绩：基础算法与数据结构 86%，应用机器学习 83%，数据关系分析 80%。"
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
        "Used Excel and Python to organize operating data, financial metrics, and comparable-company information for internal analysis.",
        "Helped verify prospectus-related data, organize information disclosure materials, and summarize revenue structure, growth factors, and risk factors."
      ],
      zh: [
        "参与某企业北交所 IPO 项目，协助完成行业研究、财务数据整理与上市申报材料分析。",
        "使用 Excel / Python 整理企业经营数据、财务指标及行业可比公司信息，用于内部分析。",
        "协助项目组进行招股书相关数据核验与信息披露整理，并参与收入结构、成长性和风险因素总结。"
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
        "Explained calculus topics with an emphasis on multivariable integrals and structured problem solving."
      ],
      zh: [
        "提供一对一辅导与学术支持，帮助学生成绩平均超出班级 10% 以上。",
        "讲授高级微积分课程，重点讲解多元积分与复杂问题解决技巧。"
      ]
    }
  }
];
