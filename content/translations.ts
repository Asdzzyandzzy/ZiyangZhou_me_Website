export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      experience: "Experience",
      projects: "Projects",
      resume: "Resume",
      writing: "Writing",
      contact: "Contact"
    },
    actions: {
      viewAbout: "About Me",
      viewExperience: "View Experience",
      viewProjects: "View Projects",
      viewResume: "Open CV",
      viewWriting: "View Writing",
      contactMe: "Contact Me",
      downloadResume: "Download CV",
      viewGithub: "View GitHub",
      viewDemo: "Open Demo",
      backProjects: "Back to Projects",
      readCaseStudy: "View project"
    },
    home: {
      eyebrow: "UBC Statistics · Class of 2027",
      headline: "Ziyang Zhou",
      focus: "Statistics, applied machine learning, and data analysis.",
      subhead:
        "I am a Statistics student at UBC with internship experience in electricity forecasting and actuarial analysis. I work with data, compare models, and build tools to explore questions that interest me.",
      aboutTitle: "About",
      experienceTitle: "Experience",
      projectsTitle: "Selected Projects",
      skillsTitle: "Skills & Tools",
      resumeTitle: "Resume",
      contactTitle: "Contact",
      writingTitle: "Writing"
    },
    pages: {
      aboutTitle: "About Me",
      experienceTitle: "Experience",
      projectsTitle: "Projects",
      resumeTitle: "Resume",
      writingTitle: "Writing",
      contactTitle: "Contact"
    },
    labels: {
      selectedWork: "Selected work",
      education: "Education",
      work: "Work Experience",
      projects: "Projects",
      stack: "Tools / Tech",
      period: "Period",
      motivation: "Why I built it",
      features: "What it includes",
      contribution: "What I worked on",
      learning: "What I Learned",
      links: "Links",
      comingSoon: "Coming Soon",
      highlights: "Highlights",
      email: "Email",
      skipToContent: "Skip to content"
    },
    writing: {
      description:
        "I may add short notes here later on projects, coursework, and lessons learned from building small tools."
    },
    projects: {
      description:
        "Coursework, competition experiments, and personal tools. Each project covers the problem, my approach, and what I learned.",
      filter: "Project type",
      search: "Search projects",
      searchPlaceholder: "Title, topic, or tool",
      all: "All projects",
      coursework: "Coursework",
      competitions: "Competitions",
      "ai-tools": "AI tools",
      "data-tools": "Data & applications",
      count: "Projects: {count}",
      empty: "No projects match this search.",
      reset: "Clear filters"
    },
    resume: {
      description:
        "My latest CV, including education, internships, and selected projects.",
      format: "October 2026 · English · PDF",
      previewTitle: "Ziyang Zhou CV"
    },
    contact: {
      intro:
        "I am interested in internships and graduate opportunities in data analysis, applied machine learning, forecasting, and actuarial work. I expect to graduate in May 2027. Email is the best way to reach me."
    },
    footer: {
      line: "Personal portfolio maintained by Ziyang Zhou (周梓洋)."
    }
  },
  zh: {
    nav: {
      home: "首页",
      about: "关于我",
      experience: "经历",
      projects: "项目",
      resume: "简历",
      writing: "文章",
      contact: "联系"
    },
    actions: {
      viewAbout: "关于我",
      viewExperience: "查看经历",
      viewProjects: "查看项目",
      viewResume: "打开简历",
      viewWriting: "查看文章",
      contactMe: "联系我",
      downloadResume: "下载简历",
      viewGithub: "查看 GitHub",
      viewDemo: "打开 Demo",
      backProjects: "返回项目列表",
      readCaseStudy: "查看项目"
    },
    home: {
      eyebrow: "UBC 统计学 · 预计 2027 年毕业",
      headline: "周梓洋",
      focus: "统计学、应用机器学习与数据分析。",
      subhead:
        "我是 UBC 统计学本科生，有用电量预测和精算分析的实习经历。我喜欢处理数据、比较模型，也会搭建工具来探索自己感兴趣的问题。",
      aboutTitle: "关于我",
      experienceTitle: "经历",
      projectsTitle: "精选项目",
      skillsTitle: "技能与工具",
      resumeTitle: "简历",
      contactTitle: "联系",
      writingTitle: "文章"
    },
    pages: {
      aboutTitle: "关于我",
      experienceTitle: "经历",
      projectsTitle: "项目",
      resumeTitle: "简历",
      writingTitle: "文章",
      contactTitle: "联系"
    },
    labels: {
      selectedWork: "精选作品",
      education: "教育",
      work: "实践经历",
      projects: "项目经历",
      stack: "工具 / 技术",
      period: "时间",
      motivation: "为什么做",
      features: "包含内容",
      contribution: "我做的部分",
      learning: "收获",
      links: "链接",
      comingSoon: "即将更新",
      highlights: "亮点",
      email: "邮箱",
      skipToContent: "跳转到正文"
    },
    writing: {
      description: "之后可能会整理一些项目、课程和小工具迭代中的短笔记。"
    },
    projects: {
      description:
        "这里整理了课程作业、比赛实验和个人工具，每个项目都介绍了问题、我的思路和收获。",
      filter: "项目类型",
      search: "搜索项目",
      searchPlaceholder: "项目名称、方向或工具",
      all: "全部项目",
      coursework: "课程实践",
      competitions: "比赛项目",
      "ai-tools": "AI 工具",
      "data-tools": "数据与应用",
      count: "{count} 个项目",
      empty: "没有找到符合条件的项目。",
      reset: "清除筛选"
    },
    resume: {
      description: "最新版 CV，包含教育背景、实习经历和精选项目。",
      format: "2026 年 10 月 · 英文 · PDF",
      previewTitle: "周梓洋 CV"
    },
    contact: {
      intro:
        "我关注数据分析、应用机器学习、预测建模和精算方向的实习与应届机会，预计 2027 年 5 月毕业。欢迎通过邮箱联系我。"
    },
    footer: {
      line: "周梓洋（Ziyang Zhou）维护的个人项目作品集。"
    }
  }
} as const;

export type TranslationLanguage = keyof typeof translations;
