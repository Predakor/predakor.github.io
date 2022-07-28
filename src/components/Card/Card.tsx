import { MouseEventHandler, ReactNode } from "react";
import styles from "./Card.module.css";
type Card = {
  children?: ReactNode | ReactNode[];
  onClick?: MouseEventHandler;
  className?: string;
};
function Card({ children, onClick, className }: Card) {
  className = className ? className : "";
  return (
    <div className={styles.card + " " + className} onClick={onClick}>
      {children}
    </div>
  );
}

export default Card;
