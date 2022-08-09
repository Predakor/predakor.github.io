import styles from "./LandingSection.module.css";

function LandingSection() {
  const age = new Date().getUTCFullYear() - 2002;

  return (
    <section className={styles.landingSection}>
      <h1 className={styles.landingHeader}>Hi I'm Patrick</h1>
      <h2 className={styles.bigH2}>An aspiring front end developer</h2>
      <p>I'am {age} years old front end developrt wannabie</p>
      <p>Currently I'm looking for my first job</p>
      <p>You can check my stack and projects</p>
    </section>
  );
}

export default LandingSection;
