import { useEffect, useState } from "react";
import { fetchProjects } from "../lib/projectsAPI";
import { Project } from "../../types";
import ProjectCard from "../components/ProjectCard/ProjectCard";

function Projects() {
  const [projects, setProjects] = useState(Array<Project>);
  async function getProjects() {
    setProjects(await fetchProjects());
  }
  useEffect(() => {
    getProjects();
  }, []);

  return (
    <section>
      <button onClick={getProjects}>test</button>
      <h1>My Projects</h1>
      {projects.length > 0 ? (
        projects.map((project) => <ProjectCard project={project} key={project.id} />)
      ) : (
        <p>loading</p>
      )}
    </section>
  );
}
export default Projects;
