import LandingSection from "../components/LandingSection/HeroSection";
import { Skils } from "../sections";
import AboutMe from "../sections/AboutMe/AboutMe";

function Homepage() {
  return (
    <>
      <LandingSection />
      <AboutMe />
      <Skils />
    </>
  );
}
export default Homepage;
