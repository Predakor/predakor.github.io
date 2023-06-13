import { motion } from "framer-motion";
import navigationList from "../../../assets/navigationList";
import styles from "./DesktopNav.module.scss";

function DesktopMenu() {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      className={styles.desktopMenuContainer}
    >
      {navigationList.map(({ name, path }) => (
        <a
          className={`${styles.link} ${false ? styles.active : ""}`}
          href={path}
        >
          {name}
        </a>
      ))}
    </motion.nav>
  );
}

export default DesktopMenu;
