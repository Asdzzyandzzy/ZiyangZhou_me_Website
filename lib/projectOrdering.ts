import type { Project } from "@/content/projects";

const projectPriority = [
  "tencent-ai-hr-growth-quest",
  "fanqie-qwen-writing-pipeline",
  "ziyangzhou-me-website",
  "chatgpt-local-api-creator",
  "airbnb-price-modeling",
  "text-embeddings-topic-modeling",
  "recipe-clustering",
  "astock-analysis-toolkit",
  "adult-census-preprocessing-pipeline",
  "cpsc221-hash-tables",
  "cpsc221-avl-trees",
  "cpsc221-heaps",
  "cpsc221-graphs-union-find",
  "sleep-app",
  "glass-futures-trading-strategy",
  "logistic-regression-text-classification",
  "spotify-decision-tree-modeling",
  "english-letter-recognition"
];

const priorityBySlug = new Map(projectPriority.map((slug, index) => [slug, index]));

export function sortProjectsByPortfolioPriority(projectList: Project[]): Project[] {
  return [...projectList].sort((a, b) => {
    const aPriority = priorityBySlug.get(a.slug) ?? Number.MAX_SAFE_INTEGER;
    const bPriority = priorityBySlug.get(b.slug) ?? Number.MAX_SAFE_INTEGER;

    return aPriority - bPriority;
  });
}

export function getFeaturedProjects(projectList: Project[], limit = 4): Project[] {
  return sortProjectsByPortfolioPriority(projectList)
    .filter((project) => project.featured)
    .slice(0, limit);
}
