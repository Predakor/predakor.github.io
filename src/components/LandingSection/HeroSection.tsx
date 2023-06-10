import { motion } from "framer-motion";
import styles from "./LandingSection.module.scss";

function LandingSection() {
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

      <div className={styles.scrollHint}>
        {/* rome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
        <motion.svg
          fillOpacity={0}
          stroke="var(--tertiary-color)"
          strokeWidth={"0.25em"}
          width={100}
          height={100}
          animate={{ y: ["-25%", "0%"] }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "mirror" }}
        >
          <motion.path d="M10,40 L50,90 L90,40" />
          <motion.path initial={{ y: "-30%" }} d="M10,40 L50,90 L90,40" />
        </motion.svg>
      </div>
    </section>
  );
}

export default LandingSection;
