import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
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
        <NavLink
          className={({ isActive }) =>
            `${styles.link} ${isActive ? styles.active : ""}`
          }
          to={path}
        >
          {name}
        </NavLink>
      ))}
    </motion.nav>
  );
}

export default DesktopMenu;
