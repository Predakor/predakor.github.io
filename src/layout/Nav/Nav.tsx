import { useMediaQuery } from "react-responsive";
import DesktopNav from "./DesktopNav/DesktopNav";
import MobileNav from "./MobileNav/MobileNav";

export type NavigationElement = {
  name: string;
  path: string;
};

const navigationList: NavigationElement[] = [
  { name: "Home", path: "#" },
  { name: "About", path: "#aboutme" },
  { name: "Skils", path: "#skils" },
  { name: "Projects", path: "#projects" },
  { name: "Contact", path: "#contact" },
];

function Nav() {
  const isDesktop = useMediaQuery({
    query: "(min-width:1024px)",
  });

  return isDesktop ? (
    <DesktopNav items={navigationList} />
  ) : (
    <MobileNav items={navigationList} />
  );
}
export default Nav;
