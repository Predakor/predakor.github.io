import Tag from "./Tag";
import styles from "./Tags.module.css";

function Tags({ tags }: { tags: string[] }) {
  tags = [...tags].reverse();
  return (
    <ul className={styles.tagsContainer}>
      {tags.map((topic, i) => (
        <Tag text={topic} key={i} />
      ))}
    </ul>
  );
}

export default Tags;
