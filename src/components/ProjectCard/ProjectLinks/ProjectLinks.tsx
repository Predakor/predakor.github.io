import { ReactNode } from "react";
import ExternalLink from "../../ExternalLink/ExternalLink";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import styles from "./ProjectLinks.module.css";

type ProjectLinksProps = {
  repository: string;
  homepage: string;
  children?: ReactNode | ReactNode[];
};

function ProjectLinks({ repository, homepage, children }: ProjectLinksProps) {
  return (
    <div>
      <ExternalLink link={repository} aria={"link to github repository"}>
        <FiGithub className={styles.icon} />
      </ExternalLink>

      <ExternalLink link={homepage} aria={"link to project live page"}>
        <FiExternalLink className={styles.icon} />
      </ExternalLink>

      {children}
    </div>
  );
}

export default ProjectLinks;
