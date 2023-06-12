import { useMediaQuery } from "react-responsive";
import DesktopNav from "./DesktopNav/DesktopNav";
import MobileNav from "./MobileNav/MobileNav";
import styles from "./Nav.module.css";

function Nav() {
  const isDesktop = useMediaQuery({
    query: "(min-width:768px)",
  });

  return (
    <header className={styles.navigationContainer}>
      {isDesktop ? <DesktopNav /> : <MobileNav />}
    </header>
  );
}

export default Nav;
