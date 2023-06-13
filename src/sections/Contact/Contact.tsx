import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import Divider from "../../components/Divider/Divider";
import Email from "../../components/Email/Email";
import Socials from "../../components/Socials/Socials";
import styles from "./Contact.module.scss";

function Contact() {
  const isMobile = useMediaQuery({ maxWidth: "1024px" });
  return (
    <section id="contact" className={styles.container}>
      <h2 className={styles.header}>Reach Me</h2>

      <div className={styles.otherContainer}>
        <motion.div
          whileInView={{ y: isMobile ? "0%" : "20%" }}
          transition={{ delay: 0.2, type: "tween" }}
          className={styles.emailContainer}
        >
          <motion.h3 className={styles.subHeader}>Email</motion.h3>
          <Email />
        </motion.div>

        <button className={styles.resumeButton} type="button">
          Get resume
        </button>

        <Divider />

        <motion.div
          whileInView={{ y: isMobile ? "0%" : "-20%" }}
          transition={{ delay: 0.2, type: "tween" }}
          className={styles.socialsContainer}
        >
          <h3 className={styles.subHeader}>Socials</h3>
          <Socials />
          <button className={styles.resumeButton} type="button">
            Get resume
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
