import { Project } from "../../types";
import Tags from "../Tags";
import styles from "./ProjectCard.module.css";
import ProjectImage from "./ProjectImage/ProjectImage";
import ProjectLinks from "./ProjectLinks/ProjectLinks";

function ProjectCard({ project }: { project: Project }) {
  const { name, url, description, homepage, topics } = project;

  return (
    <article className={styles.projectContainer}>
      <div className={styles.imageContainer}>
        <ProjectImage projectName={name} />
      </div>

      <div className={styles.contentContainer}>
        <div>
          <h2>{name}</h2>
        </div>

        <div className={description}>
          <p>{description}</p>
        </div>

        <Tags tags={topics} />

        <ProjectLinks repository={url} homepage={homepage} />
      </div>
    </article>
  );
}

export default ProjectCard;
