import styles from "./ProjectImage.module.css";

const IMAGE_LINKS: { [key: string]: string } = {
  Tasker: "https://i.imgur.com/ETjSrUMl.png",
  Typer: "https://i.imgur.com/7peB9vRl.png",
};

function Image({ projectName }: { projectName: string }) {
  return (
    <img
      src={IMAGE_LINKS[projectName]}
      alt={`showing ${projectName} project preview`}
      className={styles.projectImage}
    />
  );
}

export default Image;
