import { motion } from "framer-motion";
import styles from "./AboutMe.module.scss";

const textV = {
  pop: { opacity: [0, 1], y: ["100%", "0%"], transition: { duration: 0.5 } },
};
const aboutMeV = {
  pop: { transition: { staggerChildren: 0.1 } },
};

function AboutMe() {
  return (
    <section id="aboutme" className={styles.container}>
      <motion.h2 whileInView={{ opacity: [0, 1] }} className={styles.header}>
        <span>A front end</span> developer
      </motion.h2>

      <motion.div
        variants={aboutMeV}
        whileInView={"pop"}
        className={styles.aboutme}
      >
        <motion.p variants={textV}>
          <span className={styles.trait}>Passionate </span>
          self-taught developer driven by a deep passion for web.
        </motion.p>
        <motion.p variants={textV}>
          <span className={styles.trait}>Perfectionist </span>
          constantly refining and improving his code.
        </motion.p>
        <motion.p variants={textV}>
          <span className={styles.trait}>Eager </span>
          always learning new stuff and pushing his skils.
        </motion.p>
        <motion.p variants={textV}>
          <span className={styles.trait}>Ambitious </span>
          everyday 1 step closer to achieving his goals
        </motion.p>
      </motion.div>

      <div className={styles.sideImage}>
        <motion.img
          whileInView={{ x: ["50%", "0%"], opacity: [0, 1] }}
          transition={{ delay: 0.5, duration: 0.7 }}
          src="side-image/desk.svg"
          alt=""
        />
        <motion.img
          whileInView={{
            x: ["-50%", "0%"],
            y: ["-50%", "0%"],
            opacity: [0, 1],
          }}
          transition={{ delay: 1.1, duration: 1 }}
          src="side-image/plant.svg"
          alt=""
        />
        <motion.img
          whileInView={{
            x: ["50%", "0%"],
            y: ["-50%", "0%"],
            opacity: [0, 1],
          }}
          transition={{ delay: 1, duration: 0.7 }}
          src="side-image/computer.svg"
          alt=""
        />
        <motion.img
          whileInView={{
            x: ["-50%", "0%"],
            y: ["50%", "0%"],
            opacity: [0, 1],
          }}
          transition={{ delay: 1.5, duration: 0.7 }}
          src="side-image/chair.svg"
          alt=""
        />
      </div>
    </section>
  );
}

export default AboutMe;
