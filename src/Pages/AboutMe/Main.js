import React from "react";
import { useGlobalContext } from "../../Components/state/useContext";
import { motion } from "framer-motion";
import { learnedTechnologies } from "../../Components/data/technologiesData";
import SocialLinks from "./SocialLinks";
import MichaelScott from "../../Components/Images/MichaelScott.jpg";
import {
  StyledAboutMe,
  StyledTechs,
  CustomizedToolTip,
} from "./styled-components";

function Main() {
  const { pageVariants, pageTransitions } = useGlobalContext();

  return (
    <motion.section
      exit="off"
      animate="on"
      initial="off"
      variants={pageVariants}
      transition={pageTransitions}
    >
      <StyledAboutMe>
        <div>
          <p>
            I'm Lautaro Figueroa and I'm most
            <span> excited about Frontend development</span>, especially using
            ReactJS with Redux, however i am interested in learning databases
            and Backend skills as well.
          </p>
          <p>
            Some of the <span>skills/languages</span> I use:
          </p>
          <StyledTechs>
            {learnedTechnologies.map((tech) => (
              <CustomizedToolTip
                key={tech.title}
                title={<img src={tech.src} width={45} />}
                placement="top"
              >
                <span key={tech.title}>{tech.title}</span>
              </CustomizedToolTip>
            ))}
          </StyledTechs>
          <p>
            <span>
              I'm looking for new challenges so i can improve as a developer day
              by day and help a business at the same time.
            </span>
          </p>
        </div>
        <img src={MichaelScott} alt="Michael Scott" />
      </StyledAboutMe>
      <SocialLinks />
    </motion.section>
  );
}

export default Main;
