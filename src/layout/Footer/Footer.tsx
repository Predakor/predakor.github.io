import ExternalLink from "../../components/ExternalLink/ExternalLink";
import styles from "./Footer.module.css";

function Footer() {
  return null;
  return (
    <footer className={styles.container}>
      <ExternalLink
        link={"https://github.com/Predakor"}
        aria={"Link to my Github page"}
      >
        <p className={styles.githubLink}>Created by Patryk Buśko</p>
      </ExternalLink>
    </footer>
  );
}

export default Footer;
