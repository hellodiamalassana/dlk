import React from "react";
import { useGlobalContext } from "../../Components/state/useContext";
import { motion } from "framer-motion";
import Presentation from "./Presentation";
import Projects from "../Projects/Main";

function Main() {
  const { pageVariants, pageTransitions } = useGlobalContext();

  return (
    <motion.div
      exit="off"
      animate="on"
      initial="off"
      variants={pageVariants}
      transition={pageTransitions}
    >
      <Presentation />
      <Projects />
    </motion.div>
  );
}

export default Main;
