import { useState } from "react";
import HamburgerElement from "./HamburgerElement/HamburgerElement";
import HamburgerIcon from "./HamburgerIcon/HamburgerIcon";
import styles from "./HamburgerMenu.module.css";

function HamburgerMenu() {
  const [navExpanded, setNavExpanded] = useState(false);

  const closeMenu = () => setNavExpanded(false);
  const classes = () => `${styles.HamburgerMenuContainer} ${navExpanded ? styles.expanded : ""}`;
  return (
    <nav className={classes()}>
      <HamburgerIcon navExpanded={navExpanded} onClick={setNavExpanded} />
      {navExpanded && (
        <>
          <HamburgerElement destination={"/"} onClick={closeMenu}>
            Home
          </HamburgerElement>
          <HamburgerElement destination={"projects"} onClick={closeMenu}>
            Projects
          </HamburgerElement>
          <HamburgerElement destination={"contact"} onClick={closeMenu}>
            Contact
          </HamburgerElement>
        </>
      )}
    </nav>
  );
}

export default HamburgerMenu;
