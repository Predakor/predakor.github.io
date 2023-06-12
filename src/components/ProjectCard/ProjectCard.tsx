import { motion } from "framer-motion";
import { Project } from "../../types";
import Tags from "../Tags";
import styles from "./ProjectCard.module.scss";
import ProjectImage from "./ProjectImage/ProjectImage";
import ProjectLinks from "./ProjectLinks/ProjectLinks";

function ProjectCard({ project }: { project: Project }) {
  const { name, url, description, homepage, topics } = project;

  return (
    <motion.article
      initial={{ opacity: 0 }}
      whileInView={{ y: ["30%", "0%"], opacity: [0, 1] }}
      transition={{ delay: 0.2, duration: 0.6 }}
      className={styles.project}
    >
      <motion.h3>{name}</motion.h3>
      <ProjectImage projectName={name} />

      <div className={styles.contentContainer}>
        <p>{description}</p>

        <Tags tags={topics} />

        <ProjectLinks repository={url} homepage={homepage} />
      </div>
    </motion.article>
  );
}

export default ProjectCard;
