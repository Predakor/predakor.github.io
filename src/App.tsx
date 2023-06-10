import "./global.scss";
import Layout from "./layout";
import { Hero } from "./pages";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import { Route, Routes } from "react-router-dom";

function App() {
  //remember to remove unused libraried eg. react-on-scroll
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  );
}

export default App;
