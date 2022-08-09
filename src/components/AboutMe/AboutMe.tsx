import { Link } from "react-router-dom";
import styles from "./AboutMe.module.css";

function AboutMe() {
  const age = new Date().getUTCFullYear() - 2002;

  return (
    <section className={styles.aboutMeSection}>
      <h2 className={`${styles.sectionHeader} ${styles.highlight}`}>About me</h2>

      <div className={styles.profileContainer}>
        <h3>Profile</h3>
        <p>{age} years old aspiring front end developer</p>

        <p>
          Currently I'm looking for my 1st front end job although I don't have any commercial
          experience you can check my <ProjectsLink /> to find out what can I bring to Your company.
        </p>
      </div>

      <div className={styles.skilsContainer}>
        <h3>Skils</h3>
        <ul className={styles.skilsList}>
          <li>React</li>
          <li>Javascript (ES6+)</li>
          <li>Typescript</li>
          <li>Css</li>
          <li>Html</li>
          <li>Git/Github</li>
        </ul>
      </div>
    </section>
  );
}

function ProjectsLink() {
  return (
    <Link to="/projects" className={styles.highlight}>
      projects
    </Link>
  );
}

export default AboutMe;
