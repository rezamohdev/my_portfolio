import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main.js";
import Cover from "../Cover/Cover";
import Skills from "../Skills/Skills";
import Gallery from "../Gallery/Gallery";
import Footer from "../Footer/Footer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/cover" element={<Cover />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
      <Main />
    </div>
  );
}

export default App;
