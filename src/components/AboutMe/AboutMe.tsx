import styles from "./AboutMe.module.css";
import Bio from "./Bio/Bio";
import Skils from "./Skils/Skils";

function AboutMe() {
  return (
    <section className={styles.aboutMeSection}>
      <Bio />
      <Skils />
    </section>
  );
}

export default AboutMe;
