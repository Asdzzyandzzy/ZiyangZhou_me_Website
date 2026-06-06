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
      viewResume: "View Resume",
      viewWriting: "View Writing",
      contactMe: "Contact Me",
      downloadResume: "Download Resume",
      viewGithub: "View GitHub",
      backProjects: "Back to Projects",
      readCaseStudy: "View project"
    },
    home: {
      eyebrow: "Ziyang Zhou · Statistics student and project portfolio",
      headline: "Machine learning, data analysis, and AI-assisted prototypes.",
      subhead:
        "I am a UBC Statistics student building a portfolio of coursework, personal projects, and AI-assisted experiments. The goal is to show what I have tried, how I think through problems, and what I am learning from each project.",
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
      work: "Work",
      projects: "Projects",
      stack: "Tools / Tech",
      motivation: "Why I built it",
      features: "What it includes",
      contribution: "What I worked on",
      learning: "What I Learned",
      links: "Links",
      comingSoon: "Coming Soon",
      highlights: "Highlights"
    },
    writing: {
      description:
        "I may add short notes here later on projects, coursework, and lessons learned from building small tools."
    },
    resume: {
      description:
        "View or download the bilingual English and Chinese resume."
    },
    contact: {
      intro:
        "I am open to internship, research, and early-career opportunities related to data, machine learning, AI tools, and software projects. Email is the best way to reach me."
    },
    footer: {
      line: "Personal portfolio maintained by Ziyang Zhou."
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
      viewResume: "查看简历",
      viewWriting: "查看文章",
      contactMe: "联系我",
      downloadResume: "下载简历",
      viewGithub: "查看 GitHub",
      backProjects: "返回项目列表",
      readCaseStudy: "查看项目"
    },
    home: {
      eyebrow: "周梓洋 · 统计学本科生与项目作品集",
      headline: "机器学习、数据分析和 AI 辅助项目原型。",
      subhead:
        "我是 UBC 统计学本科生，这个网站整理了我的课程项目、个人项目和 AI 辅助实验。重点是展示我实际做过什么、如何思考问题，以及每个项目让我学到了什么。",
      aboutTitle: "关于我",
      experienceTitle: "经历",
      projectsTitle: "项目选择",
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
      motivation: "为什么做",
      features: "包含内容",
      contribution: "我做的部分",
      learning: "收获",
      links: "链接",
      comingSoon: "即将更新",
      highlights: "亮点"
    },
    writing: {
      description: "之后可能会整理一些项目、课程和小工具迭代中的短笔记。"
    },
    resume: {
      description: "你可以在线查看或下载中英双语简历。"
    },
    contact: {
      intro:
        "我对数据、机器学习、AI 工具和软件项目相关的实习、研究和早期职业机会保持开放。最推荐通过邮箱联系我。"
    },
    footer: {
      line: "周梓洋维护的个人项目作品集。"
    }
  }
} as const;

export type TranslationLanguage = keyof typeof translations;
