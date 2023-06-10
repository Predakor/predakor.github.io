import { PanelHeader } from "../../components/Headers/Headers";
import styles from "./Skils.module.scss";

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
  return (
    <section className={styles.skilsContainer}>
      <PanelHeader>Skils</PanelHeader>

      <ul className={styles.skilsList}>
        {skilList.map((skil, i) => (
          <li key={skil}>{skil}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skils;
