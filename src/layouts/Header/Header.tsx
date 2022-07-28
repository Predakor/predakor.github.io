import { ReactNode } from "react";
import styles from "./Header.module.css";

type HeaderProps = {
  children?: ReactNode;
};
function Header({ children }: HeaderProps) {
  return <header className={styles.container}>{children}</header>;
}

export default Header;
