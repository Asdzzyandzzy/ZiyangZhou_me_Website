import type { LocalizedText } from "@/lib/i18n";

export const focusAreas: Array<{
  title: LocalizedText;
  description: LocalizedText;
  methods: string;
  href: string;
}> = [
  {
    title: { en: "Predictive machine learning", zh: "机器学习与预测建模" },
    description: {
      en: "Build features and compare tree ensembles for forecasting, stock ranking and structured prediction tasks.",
      zh: "围绕预测、股票排序及结构化数据任务构建特征，比较梯度提升树与集成模型。"
    },
    methods: "Python · scikit-learn · LightGBM",
    href: "/projects/csi300-portfolio-modeling-challenge/"
  },
  {
    title: { en: "Validation & statistical modeling", zh: "模型验证与统计建模" },
    description: {
      en: "Design temporal and grouped validation, check information leakage and use statistical reasoning to interpret model behavior.",
      zh: "设计时间与分组验证、检查信息泄漏，以统计学方法判断模型表现及结果的可靠性。"
    },
    methods: "Cross-validation · Backtesting · GLM",
    href: "/experience/"
  },
  {
    title: { en: "Applied AI systems", zh: "AI 应用与模型实验" },
    description: {
      en: "Explore computer vision and model unlearning, and build LLM tools with explicit workflows and inspectable outputs.",
      zh: "探索计算机视觉与模型遗忘，开发具有清晰工作流、输出可检查的大语言模型工具。"
    },
    methods: "PyTorch · RetinaNet · LLM tools",
    href: "/projects/neural-debris-removal/"
  }
];
