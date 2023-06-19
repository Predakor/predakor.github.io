import "./styles/global.scss";
import Layout from "./layout";
import { Hero, AboutMe, Contact, Projects, Skils } from "./sections";

function App() {
  return (
    <Layout>
      <Hero />
      <AboutMe />
      <Skils />
      <Projects />
      <Contact />
    </Layout>
  );
}

export default App;
