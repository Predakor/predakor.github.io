import { useEffect, useState } from "react";
import { fetchProjects } from "../lib/projectsAPI";
import { Project } from "../../types";
import ProjectList from "../components/ProjectList/ProjectList";

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
      <ProjectList list={projects} />
    </section>
  );
}
export default Projects;
