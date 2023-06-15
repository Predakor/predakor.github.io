import { motion, useScroll } from "framer-motion";
import MotionSVG from "../../components/MotionSVG";
import styles from "./AboutMe.module.scss";

const cubeV = {
  pop: { y: ["50%", "0%"] },
};

function AboutMe() {
  const { scrollYProgress } = useScroll();
  return (
    <section id="aboutme" className={styles.container}>
      <h2 className={styles.header}>
        <span>A front end</span> developer
      </h2>

      <motion.div
        whileInView={{ y: ["-50%", "0%"] }}
        transition={{ duration: 0.7 }}
        className={styles.aboutme}
      >
        I am a self-taught front-end developer with two years of experience
        creating websites and web applications. My passion for front-end and
        programming drives me to never stop learning and strive for perfection.
        In the future, I aspire to transition into full-stack or game
        development.
      </motion.div>

      <div className={styles.sideImage}>
        <motion.img
          drag
          whileInView={{ x: ["50%", "0%"], opacity: [0, 1] }}
          transition={{ delay: 0.5, duration: 0.7 }}
          src="side-image/desk.svg"
          alt=""
        />
        <motion.img
          drag
          whileInView={{ x: ["-50%", "0%"], opacity: [0, 1] }}
          transition={{ delay: 0.5, duration: 0.7 }}
          src="side-image/layer.svg"
          alt=""
        />
        <motion.img
          drag
          whileInView={{ y: ["50%", "0%"], opacity: [0, 1] }}
          transition={{ delay: 0.5, duration: 0.7 }}
          src="side-image/computer.svg"
          alt=""
        />
        <motion.img
          drag
          whileInView={{ y: ["-50%", "0%"], opacity: [0, 1] }}
          transition={{ delay: 0.5, duration: 0.7 }}
          src="side-image/chair.svg"
          alt=""
        />
      </div>
    </section>
  );
}

export default AboutMe;
