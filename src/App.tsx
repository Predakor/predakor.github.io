import LandingSection from "./components/LandingSection/HeroSection";
import "./global.scss";
import Layout from "./layout";
import { AboutMe, Contact, Projects, Skils } from "./sections";

function App() {
  return (
    <Layout>
      <LandingSection />
      <AboutMe />
      <Skils />
      <Projects />
      <Contact />
    </Layout>
  );
}

export default App;
