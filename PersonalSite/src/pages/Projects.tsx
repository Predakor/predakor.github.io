import { getProjects } from "../lib/projectsAPI";

function Projects() {
  return (
    <section>
      <h1>My Projects</h1>
      <button onClick={getProjects}>Api test</button>
    </section>
  );
}
export default Projects;
