import { motion } from "framer-motion";
import { ReactNode } from "react";
import styles from "./Divider.module.scss";

interface Props {
  children?: ReactNode;
}

const line = {
  hide: { scale: 0 },
  show: {
    scale: 1,
    transition: {
      delay: 0.5,
    },
  },
};
function Divider({ children }: Props) {
  const fullLine = !children ? styles.fullLine : "";
  return (
    <span className={`${styles.divider} ${fullLine}`}>
      <motion.span
        initial={"hide"}
        whileInView={"show"}
        variants={line}
        className={styles.line}
      />
      {children}
      <motion.span
        initial={"hide"}
        whileInView={"show"}
        transition={{ repeatType: "reverse" }}
        variants={line}
        className={styles.line}
      />
    </span>
  );
}

export default Divider;
