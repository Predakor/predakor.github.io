import styles from "./Tags.module.css";

function Tag({ text }: { text: string }) {
  return <li className={styles.tag}>{text}</li>;
}

export default Tag;
