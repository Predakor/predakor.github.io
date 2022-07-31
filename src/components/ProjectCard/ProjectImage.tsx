const IMAGE_LINKS: { [key: string]: string } = {
  Tasker: "https://i.imgur.com/ETjSrUMl.png",
  Typer: "https://i.imgur.com/7peB9vRl.png",
};

function Image({ projectName }: { projectName: string }) {
  return (
    <img src={IMAGE_LINKS[projectName]} alt={`picture showing ${projectName} project preview`} />
  );
}

export default Image;
