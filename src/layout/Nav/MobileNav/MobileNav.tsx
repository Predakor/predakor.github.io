import { useState } from "react";
import { Link } from "react-router-dom";
import navigationList from "../../../assets/navigationList";
import styles from "./MobileNav.module.scss";

function MobileNav() {
  const [navIsOpen, setNavIsOpen] = useState(false);

  const showMenu = navIsOpen ? "" : styles.menuClosed;

  return (
    <aside>
      <nav className={`${styles.container} ${showMenu}`}>
        {navigationList.map(({ name, path }) => (
          <a href={path}>{name}</a>
        ))}
      </nav>

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
    </aside>
  );
}

export default MobileNav;
