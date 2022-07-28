import { Project } from "../../../types";
import Card from "../Card/Card";
import styles from "./ProjectCard.module.css";

type propsType = {
  project: Project;
};
function ProjectCard({ project }: propsType) {
  const { name, url, description, homepage, topics } = project;
  return (
    <Card className={styles.container}>
      <div>
        <h2>{name}</h2>
      </div>

      <div>
        <p>{description}</p>
        <a href={url}>source code</a>
        <a href={homepage}>demo</a>
      </div>

      <div className={styles.topicContainer}>
        {topics.map((topic, i) => (
          <div key={i}>{topic}</div>
        ))}
      </div>
    </Card>
  );
}

export default ProjectCard;
