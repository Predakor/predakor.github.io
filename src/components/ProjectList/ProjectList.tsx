import { useState, useEffect } from "react";
import { fetchProjects } from "../../lib/projectsAPI";
import { Project } from "../../../types";
import ProjectCard from "../ProjectCard/ProjectCard";
import styles from "./ProjectList.module.css";

function ProjectList() {
  const [projects, setProjects] = useState(Array<Project>);

  useEffect(() => {
    (async () => {
      setProjects(await fetchProjects());
    })();
  }, []);

  return (
    <div className={styles.container}>
      {projects.map((project, i) => (
        <ProjectCard project={project} key={i} />
      ))}
    </div>
  );
}

export default ProjectList;
