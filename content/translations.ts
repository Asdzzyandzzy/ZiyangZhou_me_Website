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
      viewAbout: "View About",
      viewExperience: "View More Experience",
      viewProjects: "View More Projects",
      viewResume: "View Resume",
      viewWriting: "View Writing",
      contactMe: "Contact Me",
      downloadResume: "Download Resume",
      viewGithub: "View GitHub",
      backProjects: "Back to Projects",
      readCaseStudy: "Read case study"
    },
    home: {
      eyebrow: "Ziyang Zhou · Statistics, Machine Learning, and AI",
      headline: "Exploring machine learning through data, models, and applied research projects.",
      subhead:
        "I am a Statistics student at the University of British Columbia with a strong interest in machine learning and AI. This site collects my projects in modeling, data analysis, financial data systems, and software tools as part of my preparation for graduate study.",
      aboutTitle: "About",
      experienceTitle: "Experience",
      projectsTitle: "Featured Projects",
      skillsTitle: "Core Skills",
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
      work: "Work",
      projects: "Projects",
      stack: "Stack",
      motivation: "Motivation",
      features: "Core Features",
      contribution: "My Contribution",
      learning: "What I Learned",
      links: "Links",
      comingSoon: "Coming Soon",
      highlights: "Highlights"
    },
    writing: {
      description:
        "Notes on machine learning, AI, software, data tools, and product thinking will live here soon."
    },
    resume: {
      description:
        "View or download the bilingual English and Chinese resume."
    },
    contact: {
      intro:
        "I am open to machine learning, AI, data, software, and product-oriented opportunities. The best way to reach me is email."
    },
    footer: {
      line: "Designed and built as a modular personal portfolio for Ziyangzhou.me."
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
      viewAbout: "查看关于我",
      viewExperience: "查看更多经历",
      viewProjects: "查看更多项目",
      viewResume: "查看简历",
      viewWriting: "查看文章",
      contactMe: "联系我",
      downloadResume: "下载简历",
      viewGithub: "查看 GitHub",
      backProjects: "返回项目列表",
      readCaseStudy: "查看项目详情"
    },
    home: {
      eyebrow: "周梓洋 · 统计学、机器学习与 AI",
      headline: "通过数据、模型和应用研究项目探索机器学习。",
      subhead:
        "我是英属哥伦比亚大学统计学本科生，对机器学习和 AI 有持续兴趣。这个网站整理了我在建模、数据分析、金融数据系统和软件工具方面的项目，也是我准备申请研究生项目过程中的作品展示。",
      aboutTitle: "关于我",
      experienceTitle: "经历",
      projectsTitle: "精选项目",
      skillsTitle: "核心技能",
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
      stack: "技术栈",
      motivation: "项目动机",
      features: "核心功能",
      contribution: "我的贡献",
      learning: "收获",
      links: "链接",
      comingSoon: "即将更新",
      highlights: "亮点"
    },
    writing: {
      description: "这里会逐步整理机器学习、AI、软件开发、数据工具和产品思考相关笔记。"
    },
    resume: {
      description: "你可以在线查看或下载中英双语简历。"
    },
    contact: {
      intro:
        "我对机器学习、AI、数据、软件和产品方向的机会保持开放。最推荐通过邮箱联系我。"
    },
    footer: {
      line: "为 Ziyangzhou.me 设计和搭建的模块化个人作品集网站。"
    }
  }
} as const;

export type TranslationLanguage = keyof typeof translations;
