import { AnimationOnScroll } from "react-animation-on-scroll";
import { animation, slide } from "../../../utils/animations";
import { PanelHeader } from "../../Headers/Headers";
import styles from "./Bio.module.css";

function Bio() {
  const age = new Date().getUTCFullYear() - 2002;
  return (
    <div className={styles.bioContainer}>
      <AnimationOnScroll animateIn={slide.right} animateOnce={true}>
        <PanelHeader>Profile</PanelHeader>
      </AnimationOnScroll>
      <AnimationOnScroll animateIn={animation("fadeInUpBig")}>
        <p>
          {age} years old aspiring front end developer Currently I'm looking for my 1st front end
          job although I don't have any commercial experience you can check my to find out what can
          I bring to Your company.
        </p>
      </AnimationOnScroll>
    </div>
  );
}

export default Bio;
