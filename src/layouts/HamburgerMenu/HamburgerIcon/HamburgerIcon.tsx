import { FiX, FiMenu } from "react-icons/fi";
import styles from "./HamburgerIcon.module.css";

type HamburgerIconProps = {
  navExpanded: Boolean;
  onClick: Function;
};
function HamburgerIcon({ navExpanded, onClick }: HamburgerIconProps) {
  return navExpanded ? (
    <FiX className={styles.hamburgerIcon} onClick={() => onClick(false)} />
  ) : (
    <FiMenu className={styles.hamburgerIcon} onClick={() => onClick(true)} />
  );
}

export default HamburgerIcon;
