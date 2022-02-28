import React from "react";
import "./index.css";
import { Route, Routes, useLocation } from "react-router-dom";
// Components
import Header from "./Components/Header";
import Footer from "./Components/Footer";
// Pages
import Home from "./Pages/Home/Main";
import Contact from "./Pages/Contact/Main";
import AboutMe from "./Pages/AboutMe";
import Error from "./Pages/Error";
// Page transitions
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <>
      <Header />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;
