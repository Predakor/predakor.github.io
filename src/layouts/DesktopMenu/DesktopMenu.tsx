import { NavLink } from "react-router-dom";
import styles from "./DesktopMenu.module.css";

function DesktopMenu() {
  const setActiveLink = (isActive: Boolean) => {
    return `${styles.link} ${isActive ? styles.active : ""}`;
  };
  return (
    <nav className={styles.desktopMenuContainer}>
      <NavLink to={"/"} className={({ isActive }) => setActiveLink(isActive)}>
        Home
      </NavLink>
      <NavLink to={"projects"} className={({ isActive }) => setActiveLink(isActive)}>
        Projects
      </NavLink>
      <NavLink to={"contact"} className={({ isActive }) => setActiveLink(isActive)}>
        Contact
      </NavLink>
    </nav>
  );
}

export default DesktopMenu;
