import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import Divider from "../../components/Divider/Divider";
import EmailForm from "../../components/EmailForm/EmailForm";
import Socials from "../../components/Socials/Socials";
import styles from "./Contact.module.scss";
function Contact() {
  const isLargeScreen = useMediaQuery({ minWidth: "1024px" });
  return (
    <section id="contact" className={styles.container}>
      <h2 className={styles.header}>Reach Me</h2>

      <div className={styles.otherContainer}>
        <motion.div
          whileInView={{ y: isLargeScreen ? ["0%", "15%"] : "0%" }}
          transition={{ delay: 0.2, type: "tween" }}
          className={styles.emailContainer}
        >
          {isLargeScreen && (
            <motion.h3 className={styles.subHeader}>Email</motion.h3>
          )}
          <EmailForm />
        </motion.div>

        {!isLargeScreen && (
          <button className={`${styles.resumeButton} button`} type="button">
            Get resume
          </button>
        )}

        {isLargeScreen ? <hr /> : <Divider />}

        <motion.div
          whileInView={{ y: isLargeScreen ? ["0%", "-15%"] : "0%" }}
          transition={{ delay: 0.2, type: "tween" }}
          className={styles.socialsContainer}
        >
          {isLargeScreen && <h3 className={styles.subHeader}>Socials</h3>}
          <Socials />
          {isLargeScreen && (
            <button className={`${styles.resumeButton} button`} type="button">
              Get resume
            </button>
          )}
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
