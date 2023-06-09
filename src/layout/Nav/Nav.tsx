import DesktopMenu from "../DesktopMenu/DesktopMenu";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import styles from "./Nav.module.css";
import { useMediaQuery } from "react-responsive";

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
