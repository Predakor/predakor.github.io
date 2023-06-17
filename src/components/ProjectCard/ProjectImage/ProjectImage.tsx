const IMAGE_LINKS: { [key: string]: string } = {
  tasker: "/project/tasker.webp",
  typer: "/project/typer.webp",
  discofy: "/project/discofy.webp",
};

function Image({ projectName }: { projectName: string }) {
  return <img src={IMAGE_LINKS[projectName]} alt={""} loading={"lazy"} />;
}

export default Image;
