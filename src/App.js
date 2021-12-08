import React from "react";
import "./index.css";
import { Route, Routes } from "react-router-dom";
// Components
import Header from "./Components/Header";
import Footer from "./Components/Footer";
// Pages
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import AboutMe from "./Pages/AboutMe";

function App() {
  return (
    <div style={{ paddingLeft: " 1rem" }}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
