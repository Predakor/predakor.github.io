import { useState } from "react";
import { Link } from "react-router-dom";
import navigationList from "../../assets/navigationList";
import styles from "./HamburgerMenu.module.css";

function HamburgerMenu() {
  const [navIsOpen, setNavIsOpen] = useState(false);

  const showMenu = navIsOpen ? "" : styles.menuClosed;

  const navigationItems = navigationList.map(({ name, path }) => (
    <Link to={path}>{name}</Link>
  ));

  return (
    <>
      <nav className={`${styles.container} ${showMenu}`}>{navigationItems}</nav>
      <label
        className={styles.hamburgerMenu}
        aria-label="toogle hamburger menu"
      >
        <input
          id={styles.hamburgerCheckbox}
          type="checkbox"
          onClick={(e) => setNavIsOpen(e.currentTarget.checked)}
        />
        <span className={styles.hamburgerBars}>
          <span id={styles.topBar} />
          <span id={styles.middleBar} />
          <span id={styles.bottomBar} />
        </span>
      </label>
    </>
  );
}

export default HamburgerMenu;
