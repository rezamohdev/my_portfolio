import { useRef } from "react";
import "./App.css";
import Header from "../Header/Header";
import Cover from "../Cover/Cover";
import Skills from "../Skills/Skills";
import Gallery from "../Gallery/Gallery";
import Footer from "../Footer/Footer";
import { Routes, Route } from "react-router-dom";

function App() {
  const coverRef = useRef(null);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/cover" element={<Cover />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
      <Cover />
      <Skills />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
