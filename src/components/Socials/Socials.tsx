import { motion } from "framer-motion";
import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import styles from "./Socials.module.scss";

const list = {
  show: {
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const items = {
  show: { y: ["50%", "0%"] },
};

function Socials() {
  return (
    <motion.ul
      className={styles.socialsList}
      whileInView={"show"}
      variants={list}
    >
      <motion.li variants={items}>
        <a
          href="https://www.linkedin.com/in/patryk-bu%C5%9Bko/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      </motion.li>

      <motion.li variants={items}>
        <a
          href="https://github.com/Predakor"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </motion.li>

      <motion.li variants={items}>
        <a
          href="https://discordapp.com/users/315505312805289984"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaDiscord />
        </a>
      </motion.li>

      <motion.li variants={items}>
        <a
          href="mailto:patrykbusko@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MdEmail />
        </a>
      </motion.li>
    </motion.ul>
  );
}

export default Socials;
