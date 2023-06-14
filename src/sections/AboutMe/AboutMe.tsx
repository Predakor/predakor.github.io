import { motion } from "framer-motion";
import MotionSVG from "../../components/MotionSVG";
import styles from "./AboutMe.module.scss";

const traits = [
  {
    trait: "Passionate",
    description: "to craft all his websites with love and passion.",
  },
  {
    trait: "Tenacious",
    description: "to constantly learn and improve his knowledge.",
  },
  {
    trait: "Independent",
    description: "in learning everything on his own.",
  },
  {
    trait: "Ready",
    description: "to bring your next big project to life.",
  },
];

function AboutMe() {
  return (
    <section id="aboutme" className={styles.container}>
      <h2 className={styles.header}>
        <span>A front end</span> developer
      </h2>

      <div>
        <h3 className={styles.subHeader}>Who is</h3>

        <div className={styles.traitsContainer}>
          {traits.map(({ trait, description }) => (
            <motion.p
              initial={{ y: "300%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className={styles.trait}
              key={trait}
            >
              <span>{trait}</span> {description}
            </motion.p>
          ))}
        </div>
      </div>

      <div className={styles.left}>
        {/* rome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
        <MotionSVG />
      </div>
    </section>
  );
}

export default AboutMe;
