import { useState } from "react";
import { NavigationElement } from "../Nav";
import styles from "./MobileNav.module.scss";

interface Props {
  items: NavigationElement[];
}

function MobileNav({ items }: Props) {
  const [navIsOpen, setNavIsOpen] = useState(false);

  const showMenu = navIsOpen ? styles.open : "";

  return (
    <>
      <aside className={`${styles.container} ${showMenu}`}>
        <nav className={`${styles.nav}`}>
          {items.map(({ name, path }) => (
            <a href={path} key={path}>
              {name}
            </a>
          ))}
        </nav>
      </aside>
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

export default MobileNav;
