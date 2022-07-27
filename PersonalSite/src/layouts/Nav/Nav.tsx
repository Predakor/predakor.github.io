import { Link } from "react-router-dom";
import styles from "./Nav.module.css";

function Nav() {
  return (
    <nav className={styles.container}>
      <Link to={"/"} className={styles.link}>
        home
      </Link>
      <Link to={"projects"} className={styles.link}>
        projects
      </Link>
      <Link to={"contact"} className={styles.link}>
        contact
      </Link>
    </nav>
  );
}

export default Nav;
