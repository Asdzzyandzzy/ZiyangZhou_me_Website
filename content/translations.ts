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
      viewDemo: "Open Demo",
      backProjects: "Back to Projects",
      readCaseStudy: "View project"
    },
    home: {
      eyebrow: "Ziyang Zhou · UBC Statistics · Project Portfolio",
      headline: "Applied machine learning, data analysis, and AI-assisted tools.",
      subhead:
        "I am a UBC Statistics student. This site brings together my self-written coursework, competition research, and AI-assisted projects, with the choices, experiments, and results I can explain in detail.",
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
      period: "Period",
      motivation: "Why I built it",
      features: "What it includes",
      contribution: "What I worked on",
      learning: "What I Learned",
      links: "Links",
      comingSoon: "Coming Soon",
      highlights: "Highlights",
      email: "Email"
    },
    writing: {
      description:
        "I may add short notes here later on projects, coursework, and lessons learned from building small tools."
    },
    projects: {
      description:
        "Projects range from self-written coursework to AI-assisted tools and current competition research. Each page explains the problem, the choices I made, and what I learned from the result."
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
      viewDemo: "打开 Demo",
      backProjects: "返回项目列表",
      readCaseStudy: "查看项目"
    },
    home: {
      eyebrow: "周梓洋 · UBC 统计学 · 项目作品集",
      headline: "应用机器学习、数据分析和 AI 辅助工具。",
      subhead:
        "我是 UBC 统计学本科生。这里整理了我独立完成的课程作业、比赛研究和 AI 辅助项目，并记录我能具体解释的选择、实验和结果。",
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
      email: "邮箱"
    },
    writing: {
      description: "之后可能会整理一些项目、课程和小工具迭代中的短笔记。"
    },
    projects: {
      description:
        "项目包括独立完成的课程作业、AI 辅助工具和正在进行的比赛研究。每个页面都会说明问题、我的选择以及从结果中学到的内容。"
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
