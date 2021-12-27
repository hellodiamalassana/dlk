import React from "react";
import Presentation from "./Presentation";
import MyProjects from "../Projects/Main";
import { useGlobalContext } from "../../Components/state/useContext";
import { motion } from "framer-motion";

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
      <MyProjects />
    </motion.div>
  );
}

export default Main;
