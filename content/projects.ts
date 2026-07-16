import type { LocalizedList, LocalizedText } from "@/lib/i18n";

export type Project = {
  slug: string;
  featured: boolean;
  title: LocalizedText;
  subtitle: LocalizedText;
  period: LocalizedText;
  category: LocalizedText;
  techStack: string[];
  repo?: string;
  relatedRepos?: Array<{
    label: LocalizedText;
    url: string;
  }>;
  demo?: string;
  summary: LocalizedText;
  motivation: LocalizedText;
  features: LocalizedList;
  contribution: LocalizedList;
  learnings: LocalizedList;
};

const mlRepo = "https://github.com/Asdzzyandzzy/machine-learning-projects";

export const projects: Project[] = [
  {
    slug: "neural-debris-removal",
    featured: true,
    title: {
      en: "Neural Debris Removal Competition",
      zh: "神经网络有害记忆移除比赛项目"
    },
    subtitle: {
      en: "An active Kaggle computer-vision project studying how to reduce a poisoned RetinaNet detector's unwanted behavior while preserving useful detections.",
      zh: "一个正在进行的 Kaggle 计算机视觉项目，研究如何减少被污染 RetinaNet 检测器的异常行为，同时尽量保留正常检测能力。"
    },
    period: {
      en: "Jul 2026 - Present",
      zh: "2026 年 7 月 - 至今"
    },
    category: {
      en: "Kaggle Computer Vision Research",
      zh: "Kaggle 计算机视觉研究"
    },
    techStack: ["Python", "PyTorch", "Torchvision", "RetinaNet", "Scikit-learn", "NumPy", "Pandas", "Pytest"],
    summary: {
      en: "A private, in-progress competition workspace for removing learned artifacts from a provided object detector. The project combines model reconstruction, controlled unlearning experiments, held-out evaluation, object-level routing, submission validation, and reproducibility checks. Detailed strategy remains private while the competition is active.",
      zh: "这是一个私有、进行中的比赛研究项目，目标是从主办方提供的目标检测模型中移除异常学习结果。项目覆盖模型复现、受控 unlearning 实验、留出评估、目标级路由、提交校验和复现检查；比赛进行期间不公开完整策略细节。"
    },
    motivation: {
      en: "I treated the task as an experimental-design problem: first reproduce the supplied model closely enough to trust local comparisons, then test one change at a time and use limited leaderboard feedback only as secondary evidence.",
      zh: "我把这个任务当作实验设计问题：先尽可能复现主办方模型，确保本地比较可信，再一次只验证一个改动，并把有限的排行榜反馈作为辅助证据，而不是唯一判断标准。"
    },
    features: {
      en: [
        "Reconstructs a RetinaNet-compatible inference path and checks local predictions against supplied reference outputs before accepting training results.",
        "Organizes full-model, classification-head, distillation, pseudo-clean, and routing experiments through versioned configurations and held-out comparisons.",
        "Validates submission schema, freezes selected artifacts with hashes, and records both successful and rejected directions in a decision log.",
        "Keeps raw competition data unchanged and separates verified competition facts from assumptions that still require evidence."
      ],
      zh: [
        "复现与 RetinaNet 兼容的推理流程，并先将本地预测和主办方参考输出对齐，再接受后续训练结果。",
        "通过版本化配置组织全模型、分类头、蒸馏、pseudo-clean 和路由实验，并使用留出结果进行比较。",
        "校验提交格式、用哈希冻结选定产物，并在决策日志中同时记录有效方向和被否决的方案。",
        "保持原始比赛数据不变，并将已验证的比赛事实与仍需证据支持的假设分开记录。"
      ]
    },
    contribution: {
      en: [
        "Defined the experimental gates, retention-versus-removal tradeoffs, comparison criteria, and the order in which candidate ideas were tested.",
        "Used AI assistance to accelerate implementation and experiment plumbing, while I reviewed the model behavior, chose follow-up experiments, interpreted failures, and decided which candidates were worth submitting.",
        "Built the workflow around reproducible evidence: cross-fitted checks, deterministic submission generation, automated tests, provenance manifests, and explicit rollback points.",
        "Tracked a substantial public-leaderboard improvement from the first submitted baseline and kept the project marked as active work."
      ],
      zh: [
        "制定实验门槛、异常移除与正常检测保留之间的取舍、比较标准，以及候选想法的验证顺序。",
        "使用 AI 辅助加速实现和实验流程搭建，但由我检查模型行为、选择后续实验、解释失败原因，并决定哪些候选值得提交。",
        "围绕可复现证据组织工作流，包括交叉拟合检查、确定性提交生成、自动测试、产物清单和明确回退点。",
        "记录了相较第一次提交基线的明显排行榜提升，并将项目保持为进行中的工作。"
      ]
    },
    learnings: {
      en: [
        "Learned why a faithful local baseline is necessary before interpreting small experimental improvements.",
        "Practiced changing direction when leaderboard evidence contradicted a local proxy instead of defending the original idea.",
        "Built stronger habits around experiment provenance, hidden-label uncertainty, and communicating incomplete competition results carefully."
      ],
      zh: [
        "理解在解释小幅实验改进之前，为什么必须先建立足够可信的本地基线。",
        "练习在排行榜证据与本地 proxy 冲突时及时改变方向，而不是为原有想法找理由。",
        "强化实验溯源、隐藏标签不确定性和谨慎表达未完成比赛结果的习惯。"
      ]
    }
  },
  {
    slug: "csi300-portfolio-modeling-challenge",
    featured: true,
    title: {
      en: "CSI 300 Portfolio Modeling Challenge",
      zh: "沪深 300 股票组合预测比赛项目"
    },
    subtitle: {
      en: "An active competition project for ranking CSI 300 candidates and assigning a five-stock portfolio with point-in-time features and walk-forward validation.",
      zh: "一个正在进行的比赛项目，使用点时特征和走步验证对沪深 300 候选股进行排序，并构建五股组合。"
    },
    period: {
      en: "Jul 2026 - Present",
      zh: "2026 年 7 月 - 至今"
    },
    category: {
      en: "Competition ML Research",
      zh: "机器学习比赛研究"
    },
    techStack: ["Python", "Pandas", "NumPy", "Scikit-learn", "LightGBM", "Tushare", "Time Series", "Pytest"],
    summary: {
      en: "A private, in-progress machine-learning project that predicts five-trading-day returns, ranks CSI 300 candidates, and produces a constrained five-stock allocation. The work emphasizes point-in-time data handling, expanding-window evaluation, feature comparison, and reproducible model selection rather than a single backtest number.",
      zh: "这是一个私有、进行中的机器学习比赛项目，用于预测未来五个交易日收益、排序沪深 300 候选股并生成受约束的五股配置。重点是点时数据处理、扩展窗口评估、特征比较和可复现模型选择，而不是只展示一个回测数字。"
    },
    motivation: {
      en: "I wanted the model-selection process to reflect how the strategy would have been evaluated at each historical point, so validation design and information timing came before adding more features or more complex allocation rules.",
      zh: "我希望模型选择过程尽量接近每个历史时点真实可用的信息，因此先确定验证设计和信息时点，再考虑增加特征或更复杂的权重分配方法。"
    },
    features: {
      en: [
        "Builds price, volume, volatility, cross-sectional, market, liquidity, and delayed fundamental features using only information available by each decision date.",
        "Uses expanding-window folds with a time gap between training and validation, while keeping the latest period separate from model and feature selection.",
        "Compares linear, gradient-boosting, LightGBM, ranking, ensemble, and allocation candidates with return, excess return, ranking, drawdown, and tail-risk measures.",
        "Keeps a reproducible training, inference, report, verification, and test workflow for the competition submission package."
      ],
      zh: [
        "只使用每个决策日之前可获得的信息，构建价格、成交量、波动率、横截面、市场、流动性和延迟基本面特征。",
        "使用带时间间隔的扩展窗口折进行验证，并将最新时期与模型和特征选择分开。",
        "比较线性模型、梯度提升、LightGBM、排序、集成和权重分配候选，并结合收益、超额收益、排序、回撤和尾部风险指标。",
        "为比赛提交工程保留可复现的训练、推理、报告、校验和测试流程。"
      ]
    },
    contribution: {
      en: [
        "Defined the prediction target, point-in-time rules, validation folds, evaluation measures, and promotion criteria before comparing candidates.",
        "Designed feature groups and ablation experiments, then kept stronger-looking candidates out of the formal result when they did not pass the full comparison criteria.",
        "Compared fixed and learned portfolio-weighting ideas instead of assuming a more complicated allocator would be better.",
        "Used AI assistance for implementation and repetitive research tooling while I directed the hypotheses, checked data timing, reviewed results, and made model-selection decisions."
      ],
      zh: [
        "在比较候选之前，先确定预测目标、点时规则、验证折、评估指标和晋级标准。",
        "设计特征分组和消融实验；即使部分新候选看起来更强，只要没有通过完整比较标准，就不替换正式结果。",
        "比较固定权重和学习型权重方法，而不是默认更复杂的 allocator 一定更好。",
        "使用 AI 辅助实现和重复性研究工具搭建，但由我提出假设、检查数据时点、复盘结果并做模型选择。"
      ]
    },
    learnings: {
      en: [
        "Learned how easily financial experiments can look stronger when time boundaries or selection periods are not kept explicit.",
        "Practiced rejecting complexity when a simpler weighting rule remained more stable under the chosen validation design.",
        "Improved at separating exploratory findings, formal candidates, and results that should remain private during an active competition."
      ],
      zh: [
        "理解如果时间边界和选择时期不清楚，金融实验很容易显得比实际更强。",
        "练习在简单权重规则在既定验证下更稳定时，拒绝没有带来足够收益的复杂方案。",
        "提升了区分探索结果、正式候选和比赛进行期间不应公开内容的能力。"
      ]
    }
  },
  {
    slug: "f1-pit-stop-prediction",
    featured: true,
    title: {
      en: "F1 Pit Stop Prediction",
      zh: "F1 进站预测比赛项目"
    },
    subtitle: {
      en: "A Kaggle tabular-ML project that predicts whether a driver will pit on the next lap, with race-aware validation and repeatable experiments.",
      zh: "一个 Kaggle 表格机器学习项目，用于预测车手下一圈是否进站，并使用比赛分组验证和可重复实验。"
    },
    period: {
      en: "May 2026",
      zh: "2026 年 5 月"
    },
    category: {
      en: "Kaggle Tabular ML",
      zh: "Kaggle 表格机器学习"
    },
    techStack: ["Python", "Pandas", "LightGBM", "XGBoost", "CatBoost", "Scikit-learn", "GroupKFold"],
    repo: "https://github.com/Asdzzyandzzy/Predicting-F1-Pit-Stops",
    summary: {
      en: "A Kaggle Playground project for predicting next-lap pit stops. I organized it as a small experiment pipeline with race-aware cross-validation, saved out-of-fold predictions, comparable configurations, and a checked submission-writing step rather than relying on one notebook run.",
      zh: "这是一个预测车手下一圈是否进站的 Kaggle Playground 项目。我把它组织成小型实验流程，包含按比赛分组的交叉验证、OOF 预测、可比较配置和提交文件检查，而不是只依赖一次 notebook 运行。"
    },
    motivation: {
      en: "Rows from the same race share context, so I focused on whether the validation split represented unseen races instead of choosing the highest score from a random split.",
      zh: "同一场比赛中的样本共享很多上下文，因此我重点检查验证切分能否代表未见过的比赛，而不是直接采用随机切分下最高的分数。"
    },
    features: {
      en: [
        "Uses Race and Year together as the grouping key for the main cross-validation setup.",
        "Builds lap, tyre, race-progress, and categorical-frequency features for tabular models.",
        "Compares LightGBM, XGBoost, CatBoost, group statistics, and target encoding under the same validation logic.",
        "Stores experiment notes, out-of-fold outputs, selected configuration, and validated submission files."
      ],
      zh: [
        "在主要交叉验证中使用 Race 和 Year 组合作为分组键。",
        "构建圈次、轮胎、比赛进度和类别频率等表格特征。",
        "在同一验证逻辑下比较 LightGBM、XGBoost、CatBoost、分组统计和 target encoding。",
        "保留实验记录、OOF 输出、选定配置和经过检查的提交文件。"
      ]
    },
    contribution: {
      en: [
        "Chose grouped validation after finding that random stratified folds produced a score that looked too optimistic for the race structure.",
        "Kept a simpler regularized LightGBM setup when additional models and feature ideas did not improve the grouped result.",
        "Used AI assistance to help organize experiment code and documentation while I selected the validation design, compared outputs, and decided which result was credible enough to keep."
      ],
      zh: [
        "发现随机分层切分对比赛结构来说可能过于乐观后，选择按比赛分组的验证方式。",
        "当额外模型和特征没有改善分组结果时，保留更简单、正则化更强的 LightGBM 方案。",
        "使用 AI 辅助整理实验代码和文档，但由我选择验证设计、比较输出，并判断哪些结果足够可信。"
      ]
    },
    learnings: {
      en: [
        "Learned that validation design can matter more than adding another model to a structured competition dataset.",
        "Practiced keeping rejected experiments in the record instead of presenting only the best run.",
        "Improved at turning a notebook-style competition task into a rerunnable workflow."
      ],
      zh: [
        "理解对结构化比赛数据来说，验证设计有时比再增加一个模型更重要。",
        "练习保留未提升的实验记录，而不是只展示最好的一次运行。",
        "提升了把 notebook 风格比赛任务整理成可重复运行流程的能力。"
      ]
    }
  },
  {
    slug: "deepseek-coding-agent",
    featured: true,
    title: {
      en: "Local DeepSeek Coding Agent",
      zh: "本地 DeepSeek Coding Agent"
    },
    subtitle: {
      en: "A Python MVP for learning how coding agents work, with a CLI, tool-calling loop, workspace file tools, shell/test execution, git diff output, and safety checks.",
      zh: "一个用于学习 coding agent 工作方式的 Python MVP，包含 CLI、工具调用循环、工作区文件工具、Shell/测试执行、git diff 输出和安全检查。"
    },
    period: {
      en: "Jun 2026",
      zh: "2026 年 6 月"
    },
    category: {
      en: "AI Agent Prototype",
      zh: "AI Agent 原型"
    },
    techStack: ["Python", "DeepSeek", "Typer", "Rich", "Tool Calling", "Pytest"],
    repo: "https://github.com/Asdzzyandzzy/deepseek-coding-agent",
    summary: {
      en: "A local DeepSeek-powered coding agent MVP built as a learning project. It connects a CLI, a tool-calling loop, workspace-aware file tools, shell/test execution, git diff inspection, and a Rich terminal UI, with local safety checks around file writes and risky commands.",
      zh: "这是一个基于 DeepSeek 的本地 coding agent MVP，定位是学习型项目。它把 CLI、工具调用循环、工作区文件工具、Shell/测试执行、git diff 检查和 Rich 终端 UI 串起来，并用本地安全检查限制文件写入和高风险命令。"
    },
    motivation: {
      en: "I built this to understand the mechanics behind coding agents: how tasks become tool calls, how observations feed back into the loop, how workspace context is reset, and how local automation can be kept under control.",
      zh: "我做这个项目是为了理解 coding agent 的内部机制：任务如何变成工具调用，观察结果如何回到循环里，工作区上下文如何重置，以及如何让本地自动化保持可控。"
    },
    features: {
      en: [
        "Implements a basic tool-calling loop where the model can plan, call tools, receive observations, edit files, run tests, check diffs, and summarize results.",
        "Provides workspace-aware tools for listing, reading, writing, editing, and searching files, plus shell/test execution and git diff output.",
        "Includes a Rich terminal UI and Typer CLI commands for run, ui, chat, diff, and test workflows.",
        "Supports configurable modes such as fast, balanced, smart, max, and custom to experiment with speed and loop-budget tradeoffs.",
        "Adds practical safety checks for workspace-only writes, sensitive-file refusal, dangerous command blocking, confirmations for destructive commands, timeouts, output limits, and repeated-tool limits."
      ],
      zh: [
        "实现基础工具调用循环：模型先规划，再调用工具、读取观察结果、编辑文件、运行测试、检查 diff，并总结结果。",
        "提供工作区感知工具，支持列文件、读文件、写文件、编辑文件、搜索文本、执行 Shell/测试命令和输出 git diff。",
        "提供 Rich 终端 UI 和 Typer CLI 命令，覆盖 run、ui、chat、diff、test 等使用方式。",
        "支持 fast、balanced、smart、max、custom 等模式，用于实验速度和循环预算之间的取舍。",
        "加入实际安全检查，包括文件写入限制在工作区内、拒绝敏感文件、阻止危险命令、破坏性命令确认、超时、输出截断和重复工具调用限制。"
      ]
    },
    contribution: {
      en: [
        "Organized the agent prototype across CLI dispatch, terminal UI, configuration loading, LLM client/tool schemas, tool execution, patch application, and safety policy.",
        "Implemented local tools for filesystem operations, unified-diff patch application, shell/test execution with command checks, and git diff inspection.",
        "Documented the build path in docs/AGENT_BUILD_GUIDE.md so the project can also serve as a learning artifact for coding-agent internals.",
        "Added tests around agent behavior, configuration, filesystem tools, LLM handling, entry points, patch parsing, safety policy, shell tools, and UI behavior."
      ],
      zh: [
        "组织 agent 原型结构，覆盖 CLI 分发、终端 UI、配置加载、LLM 客户端与工具 schema、工具执行、patch 应用和安全策略。",
        "实现本地工具，包括文件系统操作、unified diff patch 应用、带命令检查的 Shell/测试执行和 git diff 检查。",
        "编写 docs/AGENT_BUILD_GUIDE.md，让项目不仅是工具原型，也能作为理解 coding agent 内部机制的学习材料。",
        "补充测试，覆盖 agent 行为、配置、文件系统工具、LLM 处理、入口命令、patch 解析、安全策略、Shell 工具和 UI 行为。"
      ]
    },
    learnings: {
      en: [
        "Learned that even a small coding agent depends heavily on clear tool limits, useful observations, context reset, safety checks, and understandable error handling.",
        "Practiced designing local automation with explicit workspace limits instead of allowing broad file or shell access.",
        "Built a clearer understanding of the gap between a chat wrapper and a tool-using coding assistant."
      ],
      zh: [
        "理解到即使是小型 coding agent，也很依赖清楚的工具限制、观察结果、上下文重置、安全检查和可理解的错误处理。",
        "练习在明确工作区限制内设计本地自动化，而不是给模型开放过宽的文件或 Shell 权限。",
        "更清楚地区分普通聊天模型封装和会使用工具的 coding assistant。"
      ]
    }
  },
  {
    slug: "tencent-ai-hr-growth-quest",
    featured: true,
    title: {
      en: "Tencent AI-HR Growth Demo",
      zh: "腾讯 AI-HR 新人成长 Demo"
    },
    subtitle: {
      en: "An AI-assisted Tencent AI-HR demo that turns newcomer profiles into 30-60-90 day growth paths, mentor feedback, HR views, and a review-friendly walkthrough.",
      zh: "一个基于腾讯 AI-HR 场景的 demo，将新人画像转化为成长路径、导师反馈、HR 视角和可演示的产品流程。"
    },
    period: {
      en: "Jun 2026",
      zh: "2026 年 6 月"
    },
    category: {
      en: "AI-Assisted Product Demo",
      zh: "AI 辅助产品 Demo"
    },
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "CloudBase", "TokenHub"],
    repo: "https://github.com/Asdzzyandzzy/Tencent_AI-HR_project",
    demo: "https://tencent-ai-hr-project-d0f38a5b27-1438457315.tcloudbaseapp.com/",
    summary: {
      en: "A Tencent AI-HR demo project focused on 90-day newcomer growth planning. I used it to practice multi-agent collaboration, AI-assisted deployment, basic data persistence, and turning a product idea into a reviewable demo.",
      zh: "这是基于腾讯 AI-HR 场景完成的新人 90 天成长系统项目，重点实践 Multi-Agent 协作、AI 辅助网页部署、数据库接入，并将产品想法推进为可演示 demo。"
    },
    motivation: {
      en: "I wanted to turn an HR training idea into a concrete product flow for newcomers, mentors, and HR reviewers, with enough fallback behavior for a stable demo.",
      zh: "我想把 HR 培养想法转化为新人、导师和 HR 都能实际体验的产品流程，并通过回退处理让 demo 保持稳定。"
    },
    features: {
      en: [
        "Creates newcomer profiles and 30-60-90 day growth plans.",
        "Includes mentor feedback, HR review views, growth tasks, archives, and progress reminders.",
        "Provides a demo flow with mock data, AI generation, persistence, and fallback behavior."
      ],
      zh: [
        "支持新人画像录入和 30-60-90 天成长路径生成。",
        "包含导师反馈、HR 视角、成长任务、成长档案和进度提醒。",
        "支持 mock 数据、AI 生成、数据保存和异常回退，便于稳定演示。"
      ]
    },
    contribution: {
      en: [
        "Defined the Tencent AI-HR Project scenario around newcomer growth paths, mentor feedback, HR review, and growth tasks.",
        "Practiced a Codex + CodeBuddy multi-agent workflow: CodeBuddy helped with implementation and deployment debugging, while Codex helped review logic, wording, product flow, and edge cases.",
        "Used AI assistance for deployment and CloudBase integration, then manually checked whether flows were reasonable, data could be saved, errors could recover, and the demo stayed stable."
      ],
      zh: [
        "围绕腾讯 AI-HR Project 设计新人 90 天成长路径、导师反馈、HR 视角和成长任务。",
        "实践 Codex + CodeBuddy Multi-Agent 协作：CodeBuddy 辅助实现和部署调试，Codex 辅助审查、逻辑检查、表达校准和体验复盘。",
        "使用 AI 辅助网页部署和 CloudBase 接入，并人工复盘 AI 输出，确认流程合理、数据可保存、异常可回退、demo 稳定。"
      ]
    },
    learnings: {
      en: [
        "Learned how to split an AI-assisted product idea into screens, data states, and review points that can actually be checked.",
        "Practiced using agents as collaborators while keeping final judgment on product logic and language.",
        "Built better habits around demo stability, fallback behavior, and manually checking AI output."
      ],
      zh: [
        "学习如何把 AI 辅助产品想法拆成真正可检查的页面、数据状态和评审点。",
        "练习把 agent 当作协作者使用，同时保留对产品逻辑和文字表达的人工判断。",
        "强化了 demo 稳定性、异常回退和人工复盘 AI 输出的意识。"
      ]
    }
  },
  {
    slug: "fanqie-qwen-writing-pipeline",
    featured: true,
    title: {
      en: "Local Qwen Chinese Fiction Pipeline",
      zh: "本地 Qwen 中文短篇生成 Pipeline"
    },
    subtitle: {
      en: "A local Qwen writing workflow controlled by Python, built to simulate agent-like planning, memory, and continuation for fiction generation.",
      zh: "一个由 Python 控制本地 Qwen 模型的写作流程，用来模拟类似 Agent 的规划、记忆和续写能力。"
    },
    period: {
      en: "May - Jun 2026",
      zh: "2026 年 5 月 - 6 月"
    },
    category: {
      en: "AI-Assisted Writing Workflow",
      zh: "AI 辅助写作流程"
    },
    techStack: ["Python", "Qwen", "Local LLM", "Prompt Workflow", "Context Management"],
    repo: "https://github.com/Asdzzyandzzy/Fanqie_novel_with_Qianwen",
    summary: {
      en: "A local Qwen writing pipeline controlled by Python. It experiments with agent-like writing behavior where the model generates questions, answers them, records context, and uses that context for later fiction segments.",
      zh: "使用本地 Qwen 模型和 Python 流程控制，模拟 Agent 的自驱式写作能力，让模型能够自己提问、回答、记录上下文并持续生成小说。"
    },
    motivation: {
      en: "I used the project to explore prompt sequencing, lightweight memory, and long-form generation control with a local model.",
      zh: "我用这个项目探索本地模型中的 prompt 顺序、轻量记忆和长文本生成控制。"
    },
    features: {
      en: [
        "Runs a local Qwen model through a Python-controlled generation loop.",
        "Builds a fiction workflow for setting, outline, segmented continuation, context review, and draft output.",
        "Uses a lightweight memory mechanism so previous questions, answers, and story context can guide later writing, with manual review for coherence."
      ],
      zh: [
        "通过 Python 控制本地 Qwen 模型调用，而不是使用云端 API。",
        "组织小说生成流程：设定、大纲、分段续写、上下文回顾和成稿。",
        "设计轻量记忆机制，让模型此前的提问、回答和故事上下文影响后续生成，并人工检查连贯性。"
      ]
    },
    contribution: {
      en: [
        "Designed the self-questioning loop where the model asks, answers, and summarizes its own context before continuing.",
        "Built the Python control flow for prompt sequencing, context recording, and staged generation.",
        "Manually reviewed generated text for coherence and kept the project framed as a writing workflow experiment."
      ],
      zh: [
        "设计模型自问、自答、自整理上下文的流程，再进入后续续写。",
        "搭建 Python 控制流程，管理 prompt 顺序、上下文记录和分阶段生成。",
        "人工检查生成内容的连贯性，并将项目表述为写作流程实验，而不是包装成完整 Agent 系统。"
      ]
    },
    learnings: {
      en: [
        "Learned how fragile long-form generation becomes when context is not explicitly managed.",
        "Practiced designing memory and prompt steps as a workflow instead of a single prompt.",
        "Built intuition for the gap between an agent-like effect and a reliable agent system."
      ],
      zh: [
        "理解长文本生成在缺少上下文管理时很容易失控。",
        "练习把记忆和 prompt 步骤设计成流程，而不是只写一个大 prompt。",
        "更清楚地区分“类似 Agent 的效果”和可靠 Agent 系统之间的差距。"
      ]
    }
  },
  {
    slug: "ziyangzhou-me-website",
    featured: true,
    title: {
      en: "ZiyangZhou.me Portfolio Website",
      zh: "ZiyangZhou.me 个人作品集网站"
    },
    subtitle: {
      en: "A bilingual portfolio that organizes projects, GitHub links, short write-ups, resume access, and personal background.",
      zh: "一个面向招聘场景的中英双语作品集入口，集中整理项目、GitHub、项目说明、简历内容和个人经历。"
    },
    period: {
      en: "May 2026 - Present",
      zh: "2026 年 5 月 - 至今"
    },
    category: {
      en: "Personal Website",
      zh: "个人网站"
    },
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "App Router", "Cloudflare"],
    repo: "https://github.com/Asdzzyandzzy/ZiyangZhou_me_Website",
    summary: {
      en: "A personal portfolio site that organizes my projects, GitHub repositories, project write-ups, resume content, and bilingual presentation into one recruiter-facing entry point.",
      zh: "集中展示目前所有项目成果，并将作品集、GitHub 仓库、项目说明和简历内容整理成面向招聘场景的个人展示入口。"
    },
    motivation: {
      en: "I built the site to give recruiters one place to see project context, resume details, and links to the work behind each description.",
      zh: "我搭建这个网站，是为了让招聘者能在一个入口中查看项目背景、简历信息和每段描述对应的实际作品。"
    },
    features: {
      en: [
        "Shows bilingual project cards and detail pages.",
        "Links project write-ups, repositories, resume access, profile content, and contact information.",
        "Keeps content in structured files so project updates can be made without redesigning the site."
      ],
      zh: [
        "展示中英双语项目卡片和项目详情页。",
        "整合项目说明、仓库链接、简历入口、个人介绍和联系方式。",
        "使用结构化内容文件维护项目，便于更新内容而不重做网站。"
      ]
    },
    contribution: {
      en: [
        "Organized current work into a recruiter-facing information structure.",
        "Used AI assistance to refine the content hierarchy and bilingual wording while checking that the site still matched my actual projects.",
        "Kept project content in reusable data files so new work and wording corrections can be published consistently."
      ],
      zh: [
        "整理目前所有作品、GitHub、项目说明、简历内容和个人经历。",
        "使用 AI 辅助梳理信息架构和中英文表达，并人工确认内容与真实项目一致。",
        "将项目内容放在可复用的数据文件中，方便持续发布新项目并统一修正文案。"
      ]
    },
    learnings: {
      en: [
        "Learned how portfolio content needs different levels of detail for cards, detail pages, and resume links.",
        "Practiced bilingual editing that stays concrete and interview-ready.",
        "Learned that a useful portfolio needs regular content review as projects change."
      ],
      zh: [
        "学习作品集内容在卡片、详情页和简历链接中需要不同的信息密度。",
        "练习写真实、克制、能在面试中解释的中英文内容。",
        "理解作品集需要随着项目变化持续检查和更新，而不是完成一次就不再维护。"
      ]
    }
  },
  {
    slug: "chatgpt-local-api-creator",
    featured: true,
    title: {
      en: "ChatGPT API Browser Bridge",
      zh: "ChatGPT API 浏览器工具"
    },
    subtitle: {
      en: "A local API/browser bridge experiment for connecting local scripts with ChatGPT web workflows and reducing repeated context entry.",
      zh: "一个本地 API/浏览器桥接工具，用于让本地脚本和 Agent 调用更强模型能力并控制上下文。"
    },
    period: {
      en: "Feb - May 2026",
      zh: "2026 年 2 月 - 5 月"
    },
    category: {
      en: "AI-Assisted Tooling",
      zh: "AI 辅助工具"
    },
    techStack: ["Electron", "Node.js", "HTTP API", "Browser Automation", "Localhost"],
    repo: "https://github.com/Asdzzyandzzy/chatgpt-local-api-creator",
    summary: {
      en: "A local API/browser bridge experiment for connecting local scripts with ChatGPT web workflows, especially for long-form generation tasks where repeated context entry becomes inefficient.",
      zh: "一个连接本地脚本与 ChatGPT 网页工作流的 API/浏览器桥接实验，主要用于减少长文本任务中的重复上下文输入。"
    },
    motivation: {
      en: "I wanted to test whether a local tool could reduce repeated manual input and coordinate multi-step writing tasks across local scripts and ChatGPT.",
      zh: "我想测试本地工具能否减少重复手动输入，并帮助本地脚本和 ChatGPT 协作处理多步骤写作任务。"
    },
    features: {
      en: [
        "Exposes localhost-only endpoints for sending prompts and reading responses.",
        "Supports browser-based access to ChatGPT conversations and project workflows.",
        "Reduces repeated input by letting local scripts reuse context for multi-step writing and editing tasks."
      ],
      zh: [
        "提供仅 localhost 访问的接口，用于发送 prompt 和读取回复。",
        "支持通过浏览器访问 ChatGPT 对话和 Project 工作流。",
        "通过本地脚本复用上下文，减少重复输入和无效上下文占用。"
      ]
    },
    contribution: {
      en: [
        "Defined the tool as a local workflow bridge rather than a replacement for model reasoning.",
        "Designed endpoints for prompt submission, reply reading, project navigation, diagnostics, and recovery.",
        "Tested recovery and diagnostics for cases where browser state or page behavior changed."
      ],
      zh: [
        "将工具定位为本地模型工作流的桥接层，而不是替代模型推理。",
        "设计 prompt 提交、回复读取、Project 导航、诊断和刷新恢复等端点。",
        "针对浏览器状态或页面行为变化的情况，测试诊断与恢复流程。"
      ]
    },
    learnings: {
      en: [
        "Learned how local tools can coordinate model calls without overloading every step with large context.",
        "Practiced designing local workflow utilities with clear limits and local-only access.",
        "Improved my understanding of where browser automation is useful and where it becomes brittle."
      ],
      zh: [
        "学习本地工具如何协调模型调用，而不是让每一步都携带大量上下文。",
        "练习设计限制清楚、仅本地访问的 AI 工作流工具。",
        "理解浏览器自动化适合做什么，以及哪些地方容易变得脆弱。"
      ]
    }
  },
  {
    slug: "airbnb-price-modeling",
    featured: true,
    title: {
      en: "Airbnb Listing Price Modeling",
      zh: "Airbnb 房源价格预测建模"
    },
    subtitle: {
      en: "A notebook-based tabular modeling project for predicting New York City Airbnb listing prices.",
      zh: "一个基于纽约 Airbnb 房源数据的表格建模 notebook 项目。"
    },
    period: {
      en: "Jan - Apr 2026",
      zh: "2026 年 1 月 - 4 月"
    },
    category: {
      en: "Machine Learning",
      zh: "机器学习"
    },
    techStack: ["Python", "Pandas", "Scikit-learn", "Random Forest", "ColumnTransformer", "GridSearchCV"],
    repo: mlRepo,
    summary: {
      en: "A notebook-based tabular modeling project for predicting New York City Airbnb listing prices, covering task framing, train/test split, EDA, feature engineering, model training, and evaluation.",
      zh: "基于纽约 Airbnb 房源数据构建价格预测模型，完成任务定义、训练/测试集划分、探索性分析、特征工程、模型训练和评估。"
    },
    motivation: {
      en: "I used this project to practice the full supervised learning workflow on a realistic tabular dataset with mixed numerical and categorical features.",
      zh: "我用这个项目练习在真实表格数据上完成完整监督学习流程，尤其是数值特征和类别特征混合处理。"
    },
    features: {
      en: [
        "Frames listing price as a supervised regression problem.",
        "Uses preprocessing for mixed feature types and model comparison.",
        "Evaluates model behavior after feature engineering and hyperparameter search."
      ],
      zh: [
        "将房源价格建模为监督回归任务。",
        "处理数值和类别特征，并比较不同建模方案。",
        "在特征工程和参数搜索后评估模型表现。"
      ]
    },
    contribution: {
      en: [
        "Prepared train/test splits, exploratory analysis, and feature transformations in notebooks.",
        "Built a Scikit-learn workflow with ColumnTransformer and Random Forest modeling.",
        "Completed the notebook workflow myself as part of ML practice, including GridSearchCV tuning and result comparison."
      ],
      zh: [
        "完成训练/测试集划分、探索性分析和特征转换。",
        "使用 ColumnTransformer 和 Random Forest 搭建 Scikit-learn pipeline。",
        "作为机器学习练习独立完成 notebook 流程，包括 GridSearchCV 调参和结果比较。"
      ]
    },
    learnings: {
      en: [
        "Strengthened practical understanding of feature preprocessing for tabular ML.",
        "Learned how model performance depends on task framing and data quality.",
        "Practiced interpreting regression results beyond a single score."
      ],
      zh: [
        "加强了对表格机器学习中特征预处理的理解。",
        "理解模型表现与任务定义和数据质量密切相关。",
        "练习不只依赖单一分数来解释回归结果。"
      ]
    }
  },
  {
    slug: "text-embeddings-topic-modeling",
    featured: true,
    title: {
      en: "NLP Text Analysis and Topic Modeling",
      zh: "NLP 文本分析与主题建模项目"
    },
    subtitle: {
      en: "A coursework-style NLP notebook project combining embeddings, similarity analysis, preprocessing, and LDA topic modeling.",
      zh: "一个正式 NLP notebook 项目，结合词向量、相似度分析、文本预处理和 LDA 主题建模。"
    },
    period: {
      en: "Jan - Apr 2026",
      zh: "2026 年 1 月 - 4 月"
    },
    category: {
      en: "Natural Language Processing",
      zh: "自然语言处理"
    },
    techStack: ["Python", "Jupyter Notebook", "Scikit-learn", "spaCy", "Gensim", "GloVe", "LDA"],
    repo: mlRepo,
    summary: {
      en: "A coursework-style NLP notebook project combining GloVe embeddings, word similarity analysis, representation bias discussion, spaCy preprocessing, and LDA topic modeling. I completed this notebook work myself as formal ML/NLP practice.",
      zh: "这是我独立完成的正式 NLP notebook 练习，内容包括文本预处理、GloVe 词向量、词相似度、embedding bias、LDA 主题模型，以及 word-topic / document-topic 解释。"
    },
    motivation: {
      en: "I wanted to connect classic NLP ideas with hands-on notebooks: vector representations, preprocessing choices, topic-word distributions, and document-level interpretation.",
      zh: "我希望把经典 NLP 概念落实到 notebook 实践中，包括向量表示、预处理选择、主题词分布和文档层面的解释。"
    },
    features: {
      en: [
        "Explores GloVe embeddings and word similarity.",
        "Uses spaCy preprocessing before topic modeling.",
        "Builds and interprets LDA topic models through word-topic and document-topic views."
      ],
      zh: [
        "分析 GloVe 词向量和词语相似度。",
        "使用 spaCy 做文本预处理后再进行主题建模。",
        "通过 word-topic 和 document-topic 视角解释 LDA 主题模型。"
      ]
    },
    contribution: {
      en: [
        "Prepared notebook workflows for embeddings, similarity checks, preprocessing, and topic modeling myself.",
        "Discussed representation bias and limitations of embedding-based analysis.",
        "Interpreted topic model outputs rather than only reporting model artifacts."
      ],
      zh: [
        "整理词向量、相似度检查、预处理和主题建模 notebook 流程。",
        "讨论 embedding 表示偏差和向量分析的局限。",
        "解释主题模型输出，而不是只展示模型结果。"
      ]
    },
    learnings: {
      en: [
        "Learned how preprocessing decisions affect downstream NLP interpretation.",
        "Practiced connecting mathematical representations to readable explanations.",
        "Built a more cautious view of embedding similarity and topic labels."
      ],
      zh: [
        "理解文本预处理选择如何影响后续 NLP 解释。",
        "练习把数学表示转化为可读分析。",
        "对 embedding 相似度和主题命名建立了更谨慎的理解。"
      ]
    }
  },
  {
    slug: "recipe-clustering",
    featured: true,
    title: {
      en: "Recipe Text Clustering",
      zh: "Recipe 文本聚类与无监督学习分析"
    },
    subtitle: {
      en: "An unsupervised text clustering project comparing bag-of-words and sentence embeddings for recipe-name clustering.",
      zh: "一个比较 bag-of-words 和 sentence embeddings 的菜谱短文本无监督聚类项目。"
    },
    period: {
      en: "Jan - Apr 2026",
      zh: "2026 年 1 月 - 4 月"
    },
    category: {
      en: "Machine Learning",
      zh: "机器学习"
    },
    techStack: ["Python", "Scikit-learn", "K-means", "DBSCAN", "SentenceTransformer", "UMAP"],
    repo: mlRepo,
    summary: {
      en: "An unsupervised text clustering project comparing bag-of-words and sentence embeddings for recipe-name clustering, using K-means, DBSCAN, and UMAP visualization.",
      zh: "基于菜谱名称和文本信息进行无监督聚类，比较 bag-of-words 与 sentence embeddings，使用 K-means、DBSCAN 和 UMAP 分析短文本聚类效果。"
    },
    motivation: {
      en: "This project helped me test how different text representations change clustering behavior on short, noisy recipe names.",
      zh: "这个项目帮助我观察不同文本表示方式如何影响短文本、噪声文本的聚类效果。"
    },
    features: {
      en: [
        "Compares bag-of-words features with sentence embeddings.",
        "Runs K-means and DBSCAN clustering.",
        "Uses UMAP to visualize clusters and inspect whether groups are meaningful."
      ],
      zh: [
        "比较 bag-of-words 特征和 sentence embeddings。",
        "使用 K-means 和 DBSCAN 进行聚类。",
        "通过 UMAP 可视化聚类结果，并检查分组是否有意义。"
      ]
    },
    contribution: {
      en: [
        "Prepared text representations and clustering experiments.",
        "Compared algorithm behavior across sparse text features and dense embeddings.",
        "Completed the clustering notebook myself and reviewed outputs qualitatively instead of assuming labels were correct."
      ],
      zh: [
        "准备文本表示并组织聚类实验。",
        "比较稀疏文本特征和 dense embeddings 下的算法表现。",
        "独立完成聚类 notebook，并对聚类结果做人工观察，而不是默认聚类标签正确。"
      ]
    },
    learnings: {
      en: [
        "Learned why short-text clustering is sensitive to representation choices.",
        "Practiced evaluating unsupervised learning without ground-truth labels.",
        "Built intuition for when visualization helps and when it can mislead."
      ],
      zh: [
        "理解短文本聚类为什么对表示方式很敏感。",
        "练习在没有真实标签时评估无监督学习结果。",
        "更清楚地理解可视化什么时候有帮助、什么时候可能误导。"
      ]
    }
  },
  {
    slug: "astock-analysis-toolkit",
    featured: true,
    title: {
      en: "A-Share Data Analysis Tools",
      zh: "A 股数据分析工具集"
    },
    subtitle: {
      en: "Three AI-assisted Python tools for exploring A-share market data: an intraday dashboard, a broader research dashboard, and an AKShare API checker.",
      zh: "三个 AI 辅助的 Python 工具：日内成交分析、综合投研看板和 AKShare 接口巡检。"
    },
    period: {
      en: "Aug 2025 - Jun 2026",
      zh: "2025 年 8 月 - 2026 年 6 月"
    },
    category: {
      en: "AI-Assisted Data Tools",
      zh: "AI 辅助数据工具"
    },
    techStack: ["Python", "Streamlit", "AKShare", "Plotly", "Pandas", "Scikit-learn"],
    repo: "https://github.com/Asdzzyandzzy/AStock_Analysis",
    relatedRepos: [
      {
        label: {
          en: "A-Share Research Dashboard",
          zh: "A 股综合投研看板"
        },
        url: "https://github.com/Asdzzyandzzy/AStock-Trade-Analysis"
      },
      {
        label: {
          en: "AKShare API Checker",
          zh: "AKShare 接口巡检"
        },
        url: "https://github.com/Asdzzyandzzy/Akshare_API_function_checking"
      }
    ],
    summary: {
      en: "A small collection of AI-assisted A-share data tools. The two Streamlit apps organize intraday transactions, technical indicators, basic fundamentals, flow estimates, and risk views; the companion checker parses AKShare's stock documentation and tests endpoints with timeouts, retries, resume support, and structured reports.",
      zh: "一组 AI 辅助开发的 A 股数据工具。两个 Streamlit 应用整理日内成交、技术指标、基础财务信息、资金流估计和风险视图；配套巡检工具解析 AKShare 股票文档，并通过超时、重试、断点续跑和结构化报告检查接口。"
    },
    motivation: {
      en: "I used these projects to turn recurring market-data questions into reusable views and to understand how unstable upstream interfaces affect data tools. The outputs are for observation and review, not trading recommendations.",
      zh: "我用这些项目把反复出现的市场数据问题整理成可复用视图，并理解上游接口变化会怎样影响数据工具。输出用于观察和复盘，不是交易建议。"
    },
    features: {
      en: [
        "Presents intraday prices, tick transactions, large-order behavior, technical indicators, basic fundamentals, flow estimates, and risk statistics in Streamlit views.",
        "Keeps data access, field normalization, analysis, charts, and page logic in separate modules so changing an AKShare field does not require rewriting the whole app.",
        "Parses documented AKShare stock endpoints and runs each check in a separate process with timeout, retries, rate control, and resume support.",
        "Writes searchable HTML plus CSV, JSON, and XLSX reports so failed endpoints can be reviewed rather than reduced to one pass/fail count."
      ],
      zh: [
        "在 Streamlit 中展示日内价格、逐笔成交、大单行为、技术指标、基础财务信息、资金流估计和风险统计。",
        "将数据访问、字段统一、分析、图表和页面逻辑拆开，避免 AKShare 字段变化时重写整个应用。",
        "解析 AKShare 文档中的股票接口，并让每个检查在独立进程中运行，支持超时、重试、限速和断点续跑。",
        "生成可搜索 HTML 以及 CSV、JSON、XLSX 报告，便于具体检查失败接口，而不是只留下一个成功率。"
      ]
    },
    contribution: {
      en: [
        "Defined the questions each tool should answer and used AI assistance to implement and reorganize data fetching, cleaning, indicators, charts, and interface-checking workflows.",
        "Reviewed generated code and reports against real AKShare responses, including alternate field names, empty data, timeouts, upstream failures, and cached results.",
        "Separated experimental anomaly detection and classification examples from the main dashboards, and kept all financial wording at the level of observation rather than prediction."
      ],
      zh: [
        "先定义每个工具需要回答的问题，再使用 AI 辅助实现和整理数据获取、清洗、指标、图表及接口巡检流程。",
        "结合真实 AKShare 返回检查生成代码和报告，覆盖字段别名、空数据、超时、上游失败和缓存结果。",
        "把实验性的异常检测和分类示例与主要看板分开，并将金融相关表达保持在观察层面，而不是写成预测能力。"
      ]
    },
    learnings: {
      en: [
        "Learned that a data tool needs to preserve error context because an endpoint failure can come from parameters, dates, rate limits, or an upstream provider.",
        "Practiced reviewing AI-assisted modules as a connected workflow rather than accepting isolated code snippets.",
        "Improved awareness of how financial-data uncertainty should be reflected in both interface behavior and wording."
      ],
      zh: [
        "理解数据工具需要保留错误上下文，因为接口失败可能来自参数、日期、限流或上游数据源。",
        "练习把 AI 辅助生成的模块作为完整工作流审查，而不是只接受孤立代码片段。",
        "进一步理解金融数据的不确定性需要同时反映在界面行为和文字表达中。"
      ]
    }
  },
  {
    slug: "adult-census-preprocessing-pipeline",
    featured: true,
    title: {
      en: "Adult Census Preprocessing Pipeline",
      zh: "Adult Census 数据预处理与分类 Pipeline"
    },
    subtitle: {
      en: "A supervised learning pipeline project focused on preprocessing, leakage prevention, and baseline comparison.",
      zh: "一个监督学习 pipeline 项目，重点体现预处理、防止数据泄漏和基线模型比较。"
    },
    period: {
      en: "Jan - Apr 2026",
      zh: "2026 年 1 月 - 4 月"
    },
    category: {
      en: "Machine Learning",
      zh: "机器学习"
    },
    techStack: ["Python", "Scikit-learn", "ColumnTransformer", "Pipeline", "Decision Tree", "One-hot Encoding"],
    repo: mlRepo,
    summary: {
      en: "A supervised learning pipeline project on the Adult Census dataset, focused on feature type separation, imputation, encoding, scaling, leakage prevention, and baseline comparison.",
      zh: "基于 Adult Census 数据集构建监督学习 pipeline，重点体现特征类型拆分、缺失值填补、编码、标准化、防止数据泄漏和基线模型比较。"
    },
    motivation: {
      en: "I used this project to practice the less glamorous but important parts of ML: preprocessing discipline, pipeline structure, and fair evaluation.",
      zh: "我用这个项目练习机器学习中不那么显眼但很重要的部分：预处理规范、pipeline 结构和公平评估。"
    },
    features: {
      en: [
        "Separates numerical and categorical features.",
        "Uses imputation, one-hot encoding, scaling, and model steps inside a pipeline.",
        "Compares baselines while reducing leakage risk."
      ],
      zh: [
        "拆分数值特征和类别特征。",
        "在 pipeline 中完成缺失值填补、one-hot 编码、标准化和建模。",
        "比较基线模型，同时降低数据泄漏风险。"
      ]
    },
    contribution: {
      en: [
        "Designed preprocessing steps with ColumnTransformer and Pipeline.",
        "Implemented baseline classification with attention to train/test separation.",
        "Completed the notebook workflow myself and checked how preprocessing choices affect model evaluation."
      ],
      zh: [
        "使用 ColumnTransformer 和 Pipeline 设计预处理流程。",
        "实现基线分类模型，并注意训练/测试分离。",
        "独立完成 notebook 流程，并检查预处理选择如何影响模型评估。"
      ]
    },
    learnings: {
      en: [
        "Learned why pipelines are safer than ad hoc preprocessing.",
        "Practiced thinking about leakage before model scores.",
        "Practiced a more organized ML experimentation workflow."
      ],
      zh: [
        "理解为什么 pipeline 比临时预处理更可靠。",
        "练习在看模型分数前先考虑数据泄漏。",
        "建立更规范的机器学习实验习惯。"
      ]
    }
  },
  {
    slug: "cpsc221-hash-tables",
    featured: true,
    title: {
      en: "CPSC 221 Hash Tables Lab",
      zh: "CPSC 221 哈希表实验"
    },
    subtitle: {
      en: "A C++ lab implementing separate chaining and linear probing hash tables with text-analysis exercises.",
      zh: "一个 C++ 课程实验，实现 separate chaining 和 linear probing 哈希表，并结合文本分析练习。"
    },
    period: {
      en: "Mar 2025",
      zh: "2025 年 3 月"
    },
    category: {
      en: "Computer Science Coursework",
      zh: "计算机科学课程"
    },
    techStack: ["C++", "Hash Tables", "Separate Chaining", "Linear Probing", "Iterators", "Testing"],
    repo: "https://github.com/Asdzzyandzzy/CPSC221-LABS/tree/main/lab_hash",
    summary: {
      en: "A UBC CPSC 221 C++ lab focused on hash-table implementation. The folder includes separate chaining, linear probing, iterators, resizing behavior, and text-analysis applications such as word counting and anagram finding.",
      zh: "UBC CPSC 221 的 C++ 哈希表实验，目录包含 separate chaining、linear probing、iterator、扩容行为，以及 word counting 和 anagram finding 等文本分析练习。"
    },
    motivation: {
      en: "The goal was to understand how collision handling, probing, iterators, and resizing affect correctness in a compact data structure.",
      zh: "项目目标是理解冲突处理、探测、迭代器和扩容如何影响紧凑数据结构的正确性。"
    },
    features: {
      en: [
        "Implements separate chaining and linear probing hash table variants.",
        "Uses iterator code and resizing logic to maintain table behavior.",
        "Applies hash tables to word counting, character counting, and anagram-style text tasks."
      ],
      zh: [
        "实现 separate chaining 和 linear probing 两类哈希表。",
        "通过 iterator 和 resize 逻辑维护表结构行为。",
        "将哈希表应用到词频统计、字符统计和 anagram 文本任务。"
      ]
    },
    contribution: {
      en: [
        "Completed the C++ implementation myself inside the provided course scaffolding.",
        "Debugged collision handling and iterator behavior under tests.",
        "Kept the project framed as data-structure coursework rather than product development."
      ],
      zh: [
        "在课程提供的框架中独立完成 C++ 实现。",
        "结合测试调试冲突处理和 iterator 行为。",
        "将项目表述为数据结构课程实践，而不是产品开发。"
      ]
    },
    learnings: {
      en: [
        "Learned how small probing and resizing mistakes can change lookup behavior.",
        "Practiced connecting abstract hashing concepts to concrete C++ code.",
        "Built better habits around testing data-structure invariants."
      ],
      zh: [
        "理解很小的 probing 或 resizing 错误如何改变查找行为。",
        "练习把抽象哈希概念落实到具体 C++ 代码。",
        "强化了围绕数据结构不变量进行测试的习惯。"
      ]
    }
  },
  {
    slug: "cpsc221-avl-trees",
    featured: true,
    title: {
      en: "CPSC 221 AVL Trees Lab",
      zh: "CPSC 221 AVL 树实验"
    },
    subtitle: {
      en: "A C++ lab implementing a self-balancing binary search tree with rotations, insertion, removal, and tests.",
      zh: "一个 C++ 课程实验，实现带旋转、插入、删除和测试的自平衡二叉搜索树。"
    },
    period: {
      en: "Mar 2025",
      zh: "2025 年 3 月"
    },
    category: {
      en: "Computer Science Coursework",
      zh: "计算机科学课程"
    },
    techStack: ["C++", "AVL Tree", "Binary Search Tree", "Rotations", "Balancing", "Catch2"],
    repo: "https://github.com/Asdzzyandzzy/CPSC221-LABS/tree/main/lab_avl",
    summary: {
      en: "A UBC CPSC 221 C++ lab for AVL tree implementation. The folder contains avltree.cpp, avltree.h, tests, expected outputs, and tree-printing utilities for checking rotation and balancing behavior.",
      zh: "UBC CPSC 221 的 C++ AVL 树实验，目录包含 avltree.cpp、avltree.h、测试、expected outputs 和树结构打印工具，用于检查旋转和平衡行为。"
    },
    motivation: {
      en: "The lab made balancing rules concrete: insertions and removals must preserve both binary-search ordering and height balance.",
      zh: "这个实验把平衡规则变得具体：插入和删除必须同时保持二叉搜索顺序和高度平衡。"
    },
    features: {
      en: [
        "Implements AVL rotations and balance-factor maintenance.",
        "Handles insertion and removal while preserving BST ordering.",
        "Uses tests and printed tree structures to inspect correctness."
      ],
      zh: [
        "实现 AVL 旋转和 balance factor 维护。",
        "在插入和删除时保持 BST 顺序。",
        "通过测试和打印树结构检查正确性。"
      ]
    },
    contribution: {
      en: [
        "Implemented the AVL tree behavior myself in C++ within the course lab files.",
        "Reasoned through single and double rotation cases.",
        "Used expected outputs and tests to debug tree shape changes."
      ],
      zh: [
        "在课程 lab 文件中独立实现 AVL 树行为。",
        "推理单旋和双旋情况。",
        "使用 expected outputs 和测试调试树形变化。"
      ]
    },
    learnings: {
      en: [
        "Strengthened recursive reasoning around tree operations.",
        "Learned how local rotations preserve global search-tree invariants.",
        "Practiced debugging algorithms where the data structure shape matters."
      ],
      zh: [
        "加强了围绕树操作的递归推理。",
        "理解局部旋转如何保持整体搜索树不变量。",
        "练习调试结构形状本身很重要的算法。"
      ]
    }
  },
  {
    slug: "cpsc221-heaps",
    featured: true,
    title: {
      en: "CPSC 221 Heaps Lab",
      zh: "CPSC 221 堆结构实验"
    },
    subtitle: {
      en: "A C++ lab practicing array-backed heap operations, priority-queue behavior, and index arithmetic.",
      zh: "一个 C++ 课程实验，练习数组实现的堆操作、优先队列行为和索引计算。"
    },
    period: {
      en: "Mar 2025",
      zh: "2025 年 3 月"
    },
    category: {
      en: "Computer Science Coursework",
      zh: "计算机科学课程"
    },
    techStack: ["C++", "Heaps", "Priority Queues", "Heapify", "Upheap", "Downheap", "Testing"],
    repo: "https://github.com/Asdzzyandzzy/CPSC221-LABS/tree/main/lab_heaps",
    summary: {
      en: "A UBC CPSC 221 C++ lab focused on array-backed heap implementation and heap operation tests. The work centers on heapify, upheap/downheap behavior, priority-queue ordering, and index arithmetic.",
      zh: "UBC CPSC 221 的 C++ 堆结构实验，重点是数组实现的 heap、heapify、upheap/downheap、优先队列顺序和索引计算。"
    },
    motivation: {
      en: "The lab was useful for practicing how a tree-shaped invariant can be stored and maintained inside a compact array representation.",
      zh: "这个实验帮助我练习如何在紧凑数组表示中存储和维护树形不变量。"
    },
    features: {
      en: [
        "Implements heap operations on an array-backed structure.",
        "Practices heapify, upheap, downheap, and priority ordering.",
        "Uses tests to catch indexing and invariant mistakes."
      ],
      zh: [
        "在数组结构上实现堆操作。",
        "练习 heapify、upheap、downheap 和优先级顺序。",
        "通过测试发现索引和不变量错误。"
      ]
    },
    contribution: {
      en: [
        "Completed the heap implementation exercises myself in C++.",
        "Debugged parent/child index calculations and heap invariants.",
        "Connected priority-queue behavior to low-level array operations."
      ],
      zh: [
        "独立完成 C++ 堆实现练习。",
        "调试父子节点索引计算和堆不变量。",
        "把优先队列行为和底层数组操作联系起来。"
      ]
    },
    learnings: {
      en: [
        "Learned how off-by-one errors can break heap behavior.",
        "Practiced reasoning about implicit tree structures.",
        "Improved confidence with testing compact data representations."
      ],
      zh: [
        "理解 off-by-one 错误如何破坏堆行为。",
        "练习推理隐式树结构。",
        "提升了测试紧凑数据表示的熟练度。"
      ]
    }
  },
  {
    slug: "cpsc221-graphs-union-find",
    featured: true,
    title: {
      en: "CPSC 221 Graphs and Union-Find Lab",
      zh: "CPSC 221 图算法与并查集实验"
    },
    subtitle: {
      en: "A C++ lab covering graph representation, graph tools, weighted edges, and disjoint-set structures.",
      zh: "一个 C++ 课程实验，覆盖图表示、图工具、加权边和 disjoint-set 并查集结构。"
    },
    period: {
      en: "Mar 2025",
      zh: "2025 年 3 月"
    },
    category: {
      en: "Computer Science Coursework",
      zh: "计算机科学课程"
    },
    techStack: ["C++", "Graphs", "Graph Algorithms", "Union-Find", "Disjoint Sets", "Weighted Edges"],
    repo: "https://github.com/Asdzzyandzzy/CPSC221-LABS/tree/main/lab_graphs",
    summary: {
      en: "A UBC CPSC 221 C++ graph lab with graph.cpp, graph_tools.cpp, edge structures, premade graph utilities, tests, and disjoint-set files. It focuses on representation, connectivity, weighted edges, and union-find reasoning.",
      zh: "UBC CPSC 221 的 C++ 图算法实验，包含 graph.cpp、graph_tools.cpp、edge 结构、预设图工具、测试和 disjoint-set 文件，重点是图表示、连通性、加权边和并查集推理。"
    },
    motivation: {
      en: "The lab helped connect graph algorithms to implementation details such as edge storage, connectivity checks, and disjoint-set updates.",
      zh: "这个实验帮助我把图算法和边存储、连通性检查、并查集更新等实现细节联系起来。"
    },
    features: {
      en: [
        "Works with graph representation files, edge structures, and graph tools.",
        "Uses disjoint-set data structures for connectivity-oriented reasoning.",
        "Includes tests and demo files for checking graph behavior."
      ],
      zh: [
        "处理图表示文件、edge 结构和 graph tools。",
        "使用 disjoint-set 数据结构进行连通性相关推理。",
        "包含测试和 demo 文件，用于检查图行为。"
      ]
    },
    contribution: {
      en: [
        "Completed the graph and disjoint-set implementation work myself in C++.",
        "Practiced debugging behavior across multiple supporting files.",
        "Kept the description grounded in algorithms and data structures rather than product features."
      ],
      zh: [
        "独立完成 C++ 图和 disjoint-set 相关实现工作。",
        "练习在多个支撑文件之间调试行为。",
        "保持算法和数据结构课程项目表述，不写成产品功能。"
      ]
    },
    learnings: {
      en: [
        "Learned how graph correctness depends on representation choices.",
        "Practiced union-find reasoning for connectivity-style problems.",
        "Improved ability to trace algorithm behavior across related C++ modules."
      ],
      zh: [
        "理解图算法正确性与表示方式密切相关。",
        "练习用并查集推理连通性问题。",
        "提升了跨多个 C++ 模块追踪算法行为的能力。"
      ]
    }
  },
  {
    slug: "sleep-app",
    featured: true,
    title: {
      en: "Sleep Tracking App",
      zh: "睡眠追踪 App"
    },
    subtitle: {
      en: "A Java application for recording sleep, setting goals, and reviewing habits over time.",
      zh: "一个用 Java 编写的睡眠记录应用，用来记录作息、设定目标并回看习惯变化。"
    },
    period: {
      en: "Jan - May 2024",
      zh: "2024 年 1 月 - 5 月"
    },
    category: {
      en: "Application Development",
      zh: "应用开发"
    },
    techStack: ["Java", "Swing", "OOP", "JSON Persistence", "JUnit", "UML"],
    repo: "https://github.com/Asdzzyandzzy/sleep-app",
    summary: {
      en: "A small Java app built around the personal problem of recording sleep consistently, comparing it with goals, and reviewing patterns over time.",
      zh: "一个小型 Java 应用，围绕持续记录睡眠、对比个人目标和复盘长期习惯这个真实问题展开。"
    },
    motivation: {
      en: "I wanted to practice object-oriented design through an application whose data model and user stories were easy to reason about.",
      zh: "我希望通过一个数据模型和用户故事都容易理解的应用练习面向对象设计。"
    },
    features: {
      en: [
        "Records sleep sessions and personal targets.",
        "Compares actual sleep with goals.",
        "Summarizes habits so patterns can be reviewed over time."
      ],
      zh: [
        "记录睡眠时段和个人目标。",
        "对比实际睡眠和目标。",
        "汇总习惯，便于长期复盘。"
      ]
    },
    contribution: {
      en: [
        "Translated user stories into Java classes and application behavior.",
        "Designed the data model for logs, goals, summaries, and event records.",
        "Implemented JSON persistence and used JUnit tests for model and persistence behavior.",
        "Kept the scope focused on clear object-oriented practice."
      ],
      zh: [
        "把用户故事转化为 Java 类和具体应用行为。",
        "设计睡眠记录、目标、统计汇总和事件日志的数据模型。",
        "实现 JSON 持久化，并使用 JUnit 测试模型和 persistence 行为。",
        "控制项目范围，重点练习清晰的面向对象设计。"
      ]
    },
    learnings: {
      en: [
        "Practiced OOP with a complete personal-use application.",
        "Learned how product decisions appear in small class design choices.",
        "Improved comfort with Java project organization."
      ],
      zh: [
        "通过完整个人应用练习 OOP。",
        "理解产品决策也会体现在小的类设计选择中。",
        "提升了 Java 项目组织的熟练度。"
      ]
    }
  },
  {
    slug: "glass-futures-trading-strategy",
    featured: true,
    title: {
      en: "China Glass Futures Quantitative Strategy",
      zh: "中国玻璃期货量化交易策略"
    },
    subtitle: {
      en: "A trading-strategy research project focused on strategy logic, backtest review, drawdown, market regimes, and parameter stability.",
      zh: "一个期货策略研究项目，重点分析策略逻辑、回测复盘、回撤、行情阶段和参数稳定性。"
    },
    period: {
      en: "Sep 2024 - Present",
      zh: "2024 年 9 月 - 至今"
    },
    category: {
      en: "Quantitative Research",
      zh: "量化研究"
    },
    techStack: ["TradingView", "Pine Script", "Python", "Pandas", "Matplotlib", "Backtesting"],
    summary: {
      en: "A quantitative research project for China glass futures that reviews strategy logic, backtest behavior, market regimes, drawdown, trade frequency, and parameter stability instead of only highlighting returns.",
      zh: "一个中国玻璃期货量化交易策略项目，重点复盘策略逻辑、回测表现、行情阶段、回撤、交易频率和参数稳定性，而不是只突出收益数字。"
    },
    motivation: {
      en: "I used this project to practice turning a trading idea into a testable strategy while staying cautious about transaction costs, slippage, and parameter sensitivity.",
      zh: "我用这个项目练习把交易想法转化为可测试策略，同时关注手续费、滑点和参数敏感性。"
    },
    features: {
      en: [
        "Implements strategy logic in TradingView/Pine Script.",
        "Reviews performance under trends, volatile regimes, and extreme moves.",
        "Considers drawdown, trade frequency, parameter stability, transaction costs, and slippage assumptions."
      ],
      zh: [
        "使用 TradingView/Pine Script 实现策略逻辑。",
        "复盘趋势、震荡和极端行情下的表现。",
        "关注回撤、交易频率、参数稳定性、手续费和滑点假设。"
      ]
    },
    contribution: {
      en: [
        "Built and reviewed the strategy logic with backtest outputs.",
        "Analyzed market-regime behavior rather than treating one return number as the full result.",
        "Kept the project framed as research and review, not investment advice."
      ],
      zh: [
        "搭建策略逻辑并结合回测结果复盘。",
        "分析不同市场状态下的表现，而不是把单一收益数字当成全部结论。",
        "将项目定位为研究和复盘，不构成投资建议。"
      ]
    },
    learnings: {
      en: [
        "Learned to evaluate trading strategies through risk and stability, not only return.",
        "Practiced documenting assumptions around costs and slippage.",
        "Built more cautious habits for financial project communication."
      ],
      zh: [
        "学习从风险和稳定性评估策略，而不只看收益。",
        "练习记录手续费和滑点等假设。",
        "建立更谨慎的金融项目表达习惯。"
      ]
    }
  },
  {
    slug: "logistic-regression-text-classification",
    featured: false,
    title: {
      en: "Logistic Regression Text Classification",
      zh: "文本分类中的 Logistic Regression 优化"
    },
    subtitle: {
      en: "A tweet classification project moving from a dummy baseline to bag-of-words logistic regression.",
      zh: "一个推文二分类项目，从 Dummy Classifier 基线推进到 bag-of-words 与 Logistic Regression。"
    },
    period: {
      en: "Jan - Apr 2026",
      zh: "2026 年 1 月 - 4 月"
    },
    category: {
      en: "Machine Learning",
      zh: "机器学习"
    },
    techStack: ["Python", "Scikit-learn", "Logistic Regression", "CountVectorizer", "GridSearchCV", "Cross-validation"],
    repo: mlRepo,
    summary: {
      en: "A tweet text classification project that moves from a dummy baseline to logistic regression with bag-of-words features, hyperparameter tuning, and coefficient interpretation.",
      zh: "基于推文数据构建二分类文本分类模型，从 Dummy Classifier 基线开始，使用 CountVectorizer 和 Logistic Regression，并调试文本向量化与正则化参数。"
    },
    motivation: {
      en: "The goal was to practice building a defensible baseline before tuning a text classifier.",
      zh: "项目目标是先建立可解释的基线，再进行文本分类模型调参。"
    },
    features: {
      en: [
        "Starts with a dummy classifier baseline.",
        "Uses CountVectorizer and logistic regression for bag-of-words classification.",
        "Tunes vectorization and regularization settings with cross-validation."
      ],
      zh: [
        "从 Dummy Classifier 基线开始。",
        "使用 CountVectorizer 和 Logistic Regression 进行 bag-of-words 分类。",
        "通过交叉验证调试向量化和正则化参数。"
      ]
    },
    contribution: {
      en: [
        "Built baseline and logistic-regression workflows.",
        "Compared tuned parameters and interpreted model coefficients.",
        "Completed the text-classification notebook myself and used evaluation results to judge whether changes improved the classifier."
      ],
      zh: [
        "搭建基线模型和 Logistic Regression 工作流。",
        "比较调参结果并解释模型系数。",
        "独立完成文本分类 notebook，并根据评估结果判断改动是否真正提升分类器。"
      ]
    },
    learnings: {
      en: [
        "Learned why a simple baseline matters for text classification.",
        "Practiced connecting coefficients to interpretable words.",
        "Improved comfort with cross-validation and hyperparameter search."
      ],
      zh: [
        "理解简单基线在文本分类中的重要性。",
        "练习将模型系数和可解释词语联系起来。",
        "提升交叉验证和参数搜索的熟练度。"
      ]
    }
  },
  {
    slug: "spotify-decision-tree-modeling",
    featured: false,
    title: {
      en: "Spotify Decision Tree Modeling",
      zh: "Spotify 歌曲属性决策树分类"
    },
    subtitle: {
      en: "A compact decision-tree classification exercise using Spotify-style track attributes.",
      zh: "一个使用 Spotify 风格歌曲属性进行决策树分类的基础建模练习。"
    },
    period: {
      en: "Jan - Apr 2026",
      zh: "2026 年 1 月 - 4 月"
    },
    category: {
      en: "Machine Learning",
      zh: "机器学习"
    },
    techStack: ["Python", "Scikit-learn", "DecisionTreeClassifier", "Cross-validation", "Model Visualization"],
    repo: mlRepo,
    summary: {
      en: "A compact decision-tree classification exercise focused on model training, cross-validation, and readable tree visualization.",
      zh: "一个小型决策树分类练习，重点是模型训练、交叉验证和可读的树结构可视化。"
    },
    motivation: {
      en: "I used this as a focused practice case for understanding decision-tree splits and overfitting behavior.",
      zh: "我把它作为理解决策树分裂和过拟合行为的集中练习。"
    },
    features: {
      en: [
        "Trains a DecisionTreeClassifier on structured song attributes.",
        "Uses cross-validation to compare settings.",
        "Visualizes the model to inspect split logic."
      ],
      zh: [
        "基于歌曲结构化属性训练 DecisionTreeClassifier。",
        "使用交叉验证比较参数设置。",
        "可视化模型以检查分裂逻辑。"
      ]
    },
    contribution: {
      en: [
        "Prepared model inputs and trained decision-tree classifiers.",
        "Compared validation behavior under different tree settings.",
        "Completed the decision-tree notebook myself and interpreted the tree structure as part of the modeling result."
      ],
      zh: [
        "准备模型输入并训练决策树分类器。",
        "比较不同树参数下的验证表现。",
        "独立完成决策树 notebook，并将树结构解释作为建模结果的一部分。"
      ]
    },
    learnings: {
      en: [
        "Learned how tree depth affects interpretability and overfitting.",
        "Practiced using visualization as a model-debugging tool.",
        "Built intuition for simple classifier baselines."
      ],
      zh: [
        "理解树深度如何影响可解释性和过拟合。",
        "练习把可视化作为模型调试工具。",
        "建立简单分类器基线的直觉。"
      ]
    }
  },
  {
    slug: "english-letter-recognition",
    featured: false,
    title: {
      en: "Handwritten Character Recognition App",
      zh: "英文手写字符识别应用"
    },
    subtitle: {
      en: "A student computer-vision app that trains a compact PyTorch CNN on EMNIST and predicts characters drawn in a Pygame window.",
      zh: "一个学生计算机视觉项目：使用 PyTorch 在 EMNIST 上训练小型 CNN，并识别用户在 Pygame 窗口中手写的字符。"
    },
    period: {
      en: "May 2025",
      zh: "2025 年 5 月"
    },
    category: {
      en: "Computer Vision",
      zh: "计算机视觉"
    },
    techStack: ["Python", "PyTorch", "Torchvision", "CNN", "EMNIST", "Pygame", "Pillow"],
    repo: "https://github.com/Asdzzyandzzy/Large-scale-model-for-English-letter-recognition",
    summary: {
      en: "A small handwritten-character recognition application built with EMNIST and PyTorch. It separates dataset loading, CNN training, evaluation, prediction, image preprocessing, and the Pygame drawing interface, while keeping compatibility with an earlier saved model.",
      zh: "一个基于 EMNIST 和 PyTorch 的小型手写字符识别应用。项目将数据加载、CNN 训练、评估、预测、图像预处理和 Pygame 手写界面拆开，同时兼容早期保存的模型。"
    },
    motivation: {
      en: "The main practical problem was the gap between clean EMNIST training images and uneven drawings from the app. Improving the input pipeline mattered more than simply making the CNN larger.",
      zh: "项目中的主要实际问题，是干净的 EMNIST 训练图像与用户随手绘制输入之间存在差异。相比单纯增大 CNN，改进输入处理流程更重要。"
    },
    features: {
      en: [
        "Supports EMNIST byclass training for digits, uppercase letters, and lowercase letters, with an optional letters-only split.",
        "Provides separate commands for training, saved-model evaluation, and launching the drawing interface.",
        "Crops, centers, resizes, and normalizes user drawings to better match the black-background, white-stroke EMNIST format.",
        "Uses a Pygame grid for drawing, prediction, and clearing the current input."
      ],
      zh: [
        "支持 EMNIST byclass 训练，覆盖数字、大写字母和小写字母，也可使用 letters-only split。",
        "分别提供训练、保存模型评估和启动手写界面的命令。",
        "对用户手写内容进行裁剪、居中、缩放和标准化，使其更接近 EMNIST 的黑底白字输入。",
        "使用 Pygame 网格完成手写、预测和清空操作。"
      ]
    },
    contribution: {
      en: [
        "Built the original student project, then used AI assistance to reorganize a single-file version into clearer training, inference, preprocessing, and UI modules.",
        "Adjusted the drawing-to-image conversion after identifying that background color, centering, and scale did not match the training data.",
        "Kept a compact legacy CNN path for the saved weights and a separate larger CNN definition for further training experiments."
      ],
      zh: [
        "先完成原始学生项目，之后使用 AI 辅助将单文件版本整理为训练、推理、预处理和 UI 等清晰模块。",
        "发现背景颜色、字符居中和缩放方式与训练数据不一致后，调整手写网格到模型输入的转换流程。",
        "为已有权重保留小型 legacy CNN，同时提供独立的较大 CNN 定义用于后续训练实验。"
      ]
    },
    learnings: {
      en: [
        "Learned how strongly inference-time preprocessing can affect a model that works well on its original dataset.",
        "Practiced separating model code from UI and image-processing code so prediction errors are easier to trace.",
        "Built a practical foundation for later PyTorch and object-detection competition work."
      ],
      zh: [
        "理解推理阶段的预处理方式会明显影响一个在原始数据集上表现正常的模型。",
        "练习将模型、UI 和图像处理代码分开，让预测错误更容易定位。",
        "为后续 PyTorch 和目标检测比赛项目建立实践基础。"
      ]
    }
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
