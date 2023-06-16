const IMAGE_LINKS: { [key: string]: string } = {
  tasker:
    "https://user-images.githubusercontent.com/86599904/240371998-9ed3d278-a444-4ceb-aec7-b6f226bf5ee2.png",
  typer:
    "https://user-images.githubusercontent.com/86599904/240371998-9ed3d278-a444-4ceb-aec7-b6f226bf5ee2.png",
  discofy:
    "https://user-images.githubusercontent.com/86599904/244343364-091504a2-a4dc-4ddc-8cb5-0087658a7d53.png",
};

function Image({ projectName }: { projectName: string }) {
  return <img src={IMAGE_LINKS[projectName]} alt={""} />;
}

export default Image;
