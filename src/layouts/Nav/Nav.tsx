import { useMediaQuery } from "react-responsive";
import DesktopMenu from "../DesktopMenu/DesktopMenu";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";

function Nav() {
  const isDesktop = useMediaQuery({
    query: "(min-width:992px)",
  });

  return <>{isDesktop ? <DesktopMenu /> : <HamburgerMenu />}</>;
}

export default Nav;
