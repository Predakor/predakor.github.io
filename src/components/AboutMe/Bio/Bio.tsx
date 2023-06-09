import { animation, slide } from "../../../utils/animations";
import { PanelHeader } from "../../Headers/Headers";
import styles from "./Bio.module.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

function Bio() {
  const age = new Date().getUTCFullYear() - 2002;
  const selectedAnimation = animation("fadeInUpBig");
  return (
    <div className={styles.bioContainer}>
      <AnimationOnScroll animateIn={slide.right} animateOnce={true}>
        <PanelHeader>Profile</PanelHeader>
      </AnimationOnScroll>

      <AnimationOnScroll
        className={styles.bioContent}
        animateIn={selectedAnimation}
        animateOnce={true}
      >
        <p>{age} years old self taught front end developer </p>
      </AnimationOnScroll>

      <AnimationOnScroll
        className={styles.bioContent}
        animateIn={selectedAnimation}
        animateOnce={true}
        delay={200}
      >
        <p>
          Currently I'm looking for my first front end job you can check my
          other projects and github below also if you have any question feel
          free to contact me
        </p>
      </AnimationOnScroll>

      <AnimationOnScroll
        className={styles.linkContainer}
        animateIn={selectedAnimation}
        animateOnce={true}
      >
        <div className={styles.fakeButton}>work</div>
        <div className={styles.fakeButton}>contact</div>
      </AnimationOnScroll>
    </div>
  );
}

export default Bio;
