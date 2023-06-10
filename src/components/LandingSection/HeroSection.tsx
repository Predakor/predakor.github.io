import { animation, delay } from "../../utils/animations";
import styles from "./LandingSection.module.scss";

import { motion } from "framer-motion";

function LandingSection() {
  const h1Animation = `${animation("fadeInDownBig")}`;
  const h2Animation = `${animation("fadeInUp")} ${delay(1)}`;

  return (
    <section className={styles.landingSection}>
      <motion.h1
        animate={{ y: 0, opacity: 1 }}
        initial={{ y: "-100%", opacity: 0 }}
        transition={{ duration: 0.5, type: "tween" }}
        className={`${styles.landingHeader}`}
      >
        Hi I'm Patrick
      </motion.h1>

      <motion.h2
        animate={{ scale: 1, opacity: 1 }}
        initial={{ scale: 0, opacity: 0 }}
        transition={{ delay: 0.5, type: "tween" }}
        className={`${styles.bigH2}`}
      >
        An aspiring front end developer
      </motion.h2>
    </section>
  );
}

export default LandingSection;
