import { Link } from "react-router-dom";
import styles from "./Nav.module.css";

function Nav() {
  return (
    <nav className={styles.container}>
      <Link to={"/"}>home</Link>
      <Link to={"projects"}>projects</Link>
      <Link to={"contact"}>contact</Link>
    </nav>
  );
}

export default Nav;
