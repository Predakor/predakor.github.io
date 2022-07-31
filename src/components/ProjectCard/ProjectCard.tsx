import { Project } from "../../../types";
import Card from "../Card/Card";
import Tag from "../Tag/Tag";
import ProjectImage from "./ProjectImage";
import styles from "./ProjectCard.module.css";

function ProjectCard({ project }: { project: Project }) {
  const { name, url, description, homepage, topics } = project;

  return (
    <Card className={styles.projectContainer}>
      <div className={styles.projectImage}>
        <ProjectImage projectName={name} />
      </div>

      <div className={styles.projectContent}>
        <div>
          <h2>{name}</h2>
        </div>

        <div className={description}>
          <p>{description}</p>
        </div>

        <div>
          <a href={url}>source code</a>
          <a href={homepage}>demo</a>
        </div>

        <div className={styles.TagsContaier}>
          {topics.map((topic, i) => (
            <Tag tagName={topic} key={i} />
          ))}
        </div>
      </div>
    </Card>
  );
}

export default ProjectCard;
