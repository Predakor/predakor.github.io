import { Route, Routes } from "react-router-dom";
import { Home, Projects, Contact } from "./pages/Index";
import Layout from "./layouts";
import "./App.css";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  );
}

export default App;
