import { ReactNode } from "react";
import styles from "./Headers.module.css";

interface headerProps {
  children: ReactNode;
  clasName?: string;
}

export const SiteHeader = ({ children, clasName = "" }: headerProps) => {
  return <h1 className={`${styles.siteHeader} ${clasName}`}>{children}</h1>;
};
export const SectionHeader = ({ children, clasName = "" }: headerProps) => {
  return <h2 className={`${styles.sectionHeader} ${clasName}`}>{children}</h2>;
};
export const PanelHeader = ({ children, clasName = "" }: headerProps) => {
  return <h3 className={`${styles.panelHeader} ${clasName}`}>{children}</h3>;
};
