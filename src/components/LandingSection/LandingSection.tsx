import { animation, delay } from "../../utils/animations";
import styles from "./LandingSection.module.css";

function LandingSection() {
  const age = new Date().getUTCFullYear() - 2002;
  let c = 3;

  const incrementDelay = () => delay(c++);
  const pAnimation = () => `${animation("fadeInUp")} ${incrementDelay()}`;

  const h1Animation = `${animation("fadeInDownBig")}`;
  const h2Animation = `${animation("fadeInUp")} ${delay(1)}`;

  return (
    <section className={styles.landingSection}>
      <h1 className={`${styles.landingHeader} ${h1Animation}`}>Hi I'm Patrick</h1>

      <h2 className={`${styles.bigH2} ${h2Animation}`}>An aspiring front end developer</h2>

      <p className={pAnimation()}>I'am {age} years old front wannabie</p>
      <p className={pAnimation()}>Currently I'm looking for my first job</p>
      <p className={pAnimation()}>You can check my stack and projects</p>
    </section>
  );
}

export default LandingSection;
