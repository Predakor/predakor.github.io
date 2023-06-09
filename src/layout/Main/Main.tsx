import styles from "./Main.module.css";
import { ReactNode } from "react";

type MainProps = {
  children?: ReactNode;
};
function Main({ children }: MainProps) {
  return <main className={styles.container}>{children}</main>;
}

export default Main;
