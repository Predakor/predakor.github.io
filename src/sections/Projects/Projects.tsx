import ProjectCard from "../../components/ProjectCard/ProjectCard";
import useProjects from "../../hooks/useProjects";
import styles from "./Projects.module.scss";

function Projects() {
  const projects = useProjects();

  return (
    <section id="projects" className={styles.container}>
      <h2 className={styles.header}>My Projects</h2>
      <div className={styles.projectsContainer}>
        {projects.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </div>
    </section>
  );
}
export default Projects;
