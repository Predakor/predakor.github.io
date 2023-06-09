import { animation, slide } from "../../../utils/animations";
import { PanelHeader } from "../../Headers/Headers";
import styles from "./Skils.module.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
const skilList = [
  "React",
  "Redux",
  "Javascript (ES6+)",
  "Typescript",
  "Css",
  "Sass",
  "Tailwind",
  "Git/Github",
];

function Skils() {
  const listAnimation = animation("backInDown");
  return (
    <div className={styles.skilsContainer}>
      <AnimationOnScroll animateIn={slide.left} animateOnce={true} offset={50}>
        <PanelHeader>Skils</PanelHeader>
      </AnimationOnScroll>

      <ul className={styles.skilsList}>
        {skilList.map((skil, i) => (
          <AnimationOnScroll
            animateIn={listAnimation}
            animateOnce={true}
            delay={50 * i}
            offset={100}
            key={i}
          >
            <li key={skil}>{skil}</li>
          </AnimationOnScroll>
        ))}
      </ul>
    </div>
  );
}

export default Skils;
