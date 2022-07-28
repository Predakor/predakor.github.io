import { Project } from "../../../types";
import ProjectCard from "../ProjectCard/ProjectCard";
import styles from "./ProjectList.module.css";

function ProjectList({ list }: { list: Project[] }) {
  return (
    <div className={styles.container}>
      {list.map((project, i) => (
        <ProjectCard project={project} key={i} />
      ))}
    </div>
  );
}

export default ProjectList;
