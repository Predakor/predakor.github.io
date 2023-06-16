import { FiExternalLink, FiGithub } from "react-icons/fi";
import ExternalLink from "../../ExternalLink/ExternalLink";
import styles from "./ProjectLinks.module.scss";

type ProjectLinksProps = {
  repository: string;
  homepage: string;
};

function ProjectLinks({ repository, homepage }: ProjectLinksProps) {
  return (
    <>
      <ExternalLink link={repository} aria={"link to github repository"}>
        <FiGithub className={styles.icon} />
      </ExternalLink>

      <ExternalLink link={homepage} aria={"link to project live page"}>
        <FiExternalLink className={styles.icon} />
      </ExternalLink>
    </>
  );
}

export default ProjectLinks;
