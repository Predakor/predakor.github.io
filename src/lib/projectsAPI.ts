import { Project } from "../../types";

async function fetchProjects(): Promise<Project[]> {
  const url = "https://api.github.com/users/Predakor/repos";
  const headers = { Accept: "application/vnd.github.mercy-preview+json" };

  const result = await fetch(url, { headers });
  const data: Array<any> = await result.json();
  const validProjects = data.filter((project) => project.homepage);

  const projects: Project[] = validProjects.map((project) => ({
    id: project.id,
    name: project.name,
    url: project.html_url,
    description: project.description,
    homepage: project.homepage,
    topics: project.topics,
  }));
  return projects;
}

export { fetchProjects };
