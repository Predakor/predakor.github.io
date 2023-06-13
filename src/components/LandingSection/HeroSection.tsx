import { motion } from "framer-motion";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import styles from "./LandingSection.module.scss";

const animationOrder = {
  headerSlide: 0.3,
  scrollHint: 0.7,
};

const arrowV = {
  hidden: (y = "-100%") => ({ y: y, opacity: 0 }),
  slideIn: { y: 0, opacity: 1 },
};

function LandingSection() {
  return (
    <section id={"homepage"} className={styles.landingSection}>
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: [0, 0.3, 1],
          y: ["-120%", "40%"],
        }}
        transition={{
          delay: animationOrder.headerSlide,
          duration: 0.5,
        }}
        viewport={{ once: true }}
        className={`${styles.landingHeader}`}
      >
        Hi I'm Patrick
      </motion.h1>

      <motion.a
        href="#aboutme"
        whileInView={{ opacity: [0, 0.5, 1], y: ["0%", "50%"] }}
        transition={{
          delay: animationOrder.scrollHint,
          duration: 1,
          repeat: Infinity,
          repeatType: "mirror",
        }}
        className={styles.scrollHint}
      >
        <MdOutlineKeyboardDoubleArrowDown />
      </motion.a>
    </section>
  );
}

export default LandingSection;
