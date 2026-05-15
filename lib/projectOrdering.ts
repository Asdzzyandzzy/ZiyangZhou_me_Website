import type { Project } from "@/content/projects";

const projectPriority = [
  "astock-trade-analysis",
  "astock-analysis-toolkit",
  "machine-learning-projects",
  "kaggle-fertilizer-competition",
  "english-letter-recognition",
  "predicting-f1-pit-stops",
  "ziyangzhou-me-website",
  "sleep-app",
  "cpsc221-labs",
  "bitcoin-private-key-recovery-tool"
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
