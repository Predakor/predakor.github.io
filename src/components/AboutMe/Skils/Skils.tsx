import { AnimationOnScroll } from "react-animation-on-scroll";
import { animation, slide } from "../../../utils/animations";
import { PanelHeader } from "../../Headers/Headers";
import styles from "./Skils.module.css";
const skilList = [
  "React",
  "Redux",
  "Javascript (ES6+)",
  "Typescript",
  "Sass",
  "Tailwind",
  "Git/Github",
];

function Skils() {
  const listAnimation = animation("fadeInDownBig");
  return (
    <div className={styles.skilsContainer}>
      <AnimationOnScroll animateIn={slide.left} animateOnce={true} offset={50}>
        <PanelHeader>Skils</PanelHeader>
      </AnimationOnScroll>

      <ul className={styles.skilsList}>
        {skilList.map((skil, i) => (
          <AnimationOnScroll animateIn={listAnimation} delay={50 * i} key={i}>
            <li key={skil}>{skil}</li>
          </AnimationOnScroll>
        ))}
      </ul>
    </div>
  );
}

export default Skils;
