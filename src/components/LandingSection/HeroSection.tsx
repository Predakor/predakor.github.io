import { motion } from "framer-motion";
import styles from "./LandingSection.module.scss";

const variants = {
  hidden: (y = "-100%") => ({ y: y, opacity: 0 }),
  slideIn: { y: 0, opacity: 1 },
};
function LandingSection() {
  return (
    <section id={"homepage"} className={styles.landingSection}>
      <motion.h1
        variants={variants}
        animate="slideIn"
        initial={variants.hidden()}
        transition={{ duration: 0.5, type: "tween" }}
        className={`${styles.landingHeader}`}
      >
        Hi I'm Patrick
      </motion.h1>

      <motion.div
        variants={variants}
        initial={variants.hidden("-50%")}
        animate={variants.slideIn}
        transition={{ duration: 0.5, delay: 0.5 }}
        className={styles.scrollHint}
      >
        {/* rome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
        <motion.svg
          fillOpacity={0}
          width={100}
          height={100}
          viewBox={"-10 0 250 50"}
          animate={{ y: ["-20%", "0%"] }}
          transition={{
            delay: 1,
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <motion.path d="M0,50 L50,100 100,50" />
          <motion.path initial={{ y: "-100%" }} d="M0,50 L50,100 100,50" />
        </motion.svg>
      </motion.div>
    </section>
  );
}

export default LandingSection;
