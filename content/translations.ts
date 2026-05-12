// 这里集中管理网站固定文案。以后要修改中英文按钮、标题、说明文字，优先改这个文件。
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
      viewExperience: "View Experience",
      viewProjects: "View Projects",
      viewResume: "View Resume",
      viewWriting: "View Writing",
      contactMe: "Contact Me",
      downloadResume: "Download Resume",
      viewGithub: "View GitHub",
      backProjects: "Back to Projects",
      readCaseStudy: "Read case study"
    },
    home: {
      eyebrow: "Ziyang Zhou · Personal Portfolio",
      headline: "Building practical software across machine learning, data, and product ideas.",
      subhead:
        "I am a UBC statistics student exploring software engineering, machine learning, data analysis, and product-minded tools.",
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
        "Notes on machine learning, software, data tools, and product thinking will live here soon."
    },
    resume: {
      description:
        "View or download the Chinese resume. An English version can be added later without changing the page logic."
    },
    contact: {
      intro:
        "I am open to software, data, machine learning, and product-oriented opportunities. The best way to reach me is email."
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
      viewExperience: "查看经历",
      viewProjects: "查看项目",
      viewResume: "查看简历",
      viewWriting: "查看文章",
      contactMe: "联系我",
      downloadResume: "下载简历",
      viewGithub: "查看 GitHub",
      backProjects: "返回项目列表",
      readCaseStudy: "查看项目详情"
    },
    home: {
      eyebrow: "周梓洋 · 个人作品集",
      headline: "用软件、机器学习和数据分析，把想法做成可用的产品。",
      subhead:
        "我是 UBC 统计学本科生，关注软件工程、机器学习、数据分析和产品化工具。",
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
      description: "这里会逐步整理机器学习、软件开发、数据工具和产品思考相关笔记。"
    },
    resume: {
      description: "你可以在线查看或下载中文简历。以后增加英文版时，不需要改页面逻辑。"
    },
    contact: {
      intro:
        "我对软件、数据、机器学习和产品方向的机会保持开放。最推荐通过邮箱联系我。"
    },
    footer: {
      line: "为 Ziyangzhou.me 设计和搭建的模块化个人品牌网站。"
    }
  }
} as const;

export type TranslationLanguage = keyof typeof translations;
