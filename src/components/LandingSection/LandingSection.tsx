import { AnimationOnScroll } from "react-animation-on-scroll";
import styles from "./LandingSection.module.css";

function LandingSection() {
  const age = new Date().getUTCFullYear() - 2002;
  const animation = "animate__animated animate__";
  const up = "fadeInUp";
  const delay = "animate__delay-";
  let c = 1;
  const incrementDelay = () => `${delay + c++}s`;
  return (
    <section className={styles.landingSection}>
      <h1 className={`${styles.landingHeader} animate__animated animate__fadeInDownBig`}>
        Hi I'm Patrick
      </h1>

      <AnimationOnScroll animateIn="animate_)">
        <h2 className={`${styles.bigH2} ${animation}`}>An aspiring front end developer</h2>
      </AnimationOnScroll>
      <p className={`${animation + up} ${incrementDelay()}`}>I'am {age} years old front wannabie</p>
      <p className={`${animation + up} ${incrementDelay()}`}>
        Currently I'm looking for my first job
      </p>
      <p className={`${animation + up} ${incrementDelay()}`}>You can check my stack and projects</p>
    </section>
  );
}

export default LandingSection;
