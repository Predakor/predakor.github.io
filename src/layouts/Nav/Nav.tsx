import { useMediaQuery } from "react-responsive";
import DesktopMenu from "../DesktopMenu/DesktopMenu";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import styles from "./Nav.module.css";

function Nav() {
  const isDesktop = useMediaQuery({
    query: "(min-width:992px)",
  });

  return (
    <header className={styles.navigationContainer}>
      {isDesktop ? <DesktopMenu /> : <HamburgerMenu />}
    </header>
  );
}

export default Nav;
