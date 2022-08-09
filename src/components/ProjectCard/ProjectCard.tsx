import { Project } from "../../../types";
import Tags from "../Tags";
import ProjectLinks from "./ProjectLinks/ProjectLinks";
import ProjectImage from "./ProjectImage/ProjectImage";
import styles from "./ProjectCard.module.css";

function ProjectCard({ project }: { project: Project }) {
  const { name, url, description, homepage, topics } = project;

  return (
    <div className={styles.projectContainer}>
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
    </div>
  );
}

export default ProjectCard;
