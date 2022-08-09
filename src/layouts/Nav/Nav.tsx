import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";

function Nav() {
  const { link, activeLink } = styles;
  const setActive = (isActive: boolean) => (isActive ? activeLink : link);
  return (
    <nav className={styles.container}>
      <NavLink to={"/"} className={({ isActive }) => setActive(isActive)}>
        Home
      </NavLink>
      <NavLink to={"projects"} className={({ isActive }) => setActive(isActive)}>
        Projects
      </NavLink>
      <NavLink to={"contact"} className={({ isActive }) => setActive(isActive)}>
        Contact
      </NavLink>
    </nav>
  );
}

export default Nav;
