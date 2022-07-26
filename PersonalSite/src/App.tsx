import { Route, Routes } from "react-router-dom";
import { Home, Projects, Contact } from "./pages/Index";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <nav></nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
