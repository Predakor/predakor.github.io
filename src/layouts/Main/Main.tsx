import { ReactNode } from "react";
import styles from "./Main.module.css";

type MainProps = {
  children?: ReactNode;
};
function Main({ children }: MainProps) {
  return <main className={styles.container}>{children}</main>;
}

export default Main;
