import React from "react";
import { useGlobalContext } from "../../Components/state/useContext";
import { motion } from "framer-motion";
import { learnedTechnologies } from "../../Components/data/technologiesData";
import SocialLinks from "./SocialLinks";
import pfp0 from "../../Components/Images/tono-blancon.jpeg";
import UTNCertificate from "../../Components/Images/UTN-Certificate .png";
import {
  StyledAboutMe,
  StyledTechs,
  CustomizedToolTip,
  StyledEducation,
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
            I'm Lautaro Figueroa, 21 years old, and I'm most excited about
            <span> Frontend development</span>, especially using ReactJS with
            Redux, however i'm interested in learning more deeply about Backend
            development.
          </p>
          <p>
            I specially care about how the user will experience the service and
            for delivering the best possible UI, (simple and modern).
          </p>
          <p>
            Some of the <span>technologies/languages</span> I use:
          </p>
          <StyledTechs>
            {learnedTechnologies.map((tech) => (
              <CustomizedToolTip
                key={tech.title}
                title={<img src={tech.src} width={50} />}
                placement="top"
              >
                <span key={tech.title}>{tech.title}</span>
              </CustomizedToolTip>
            ))}
          </StyledTechs>
          <p>
            <span>
              I'm looking for new and strong challenges so i can improve as a
              developer and help a business at the same time.
            </span>
          </p>
        </div>
        <img src={pfp0} alt="Lautaro Figueroa" />
      </StyledAboutMe>
      <SocialLinks />
      <StyledEducation>
        <ul>
          <h2>Education</h2>
          <h3>National Technological University of Argentina</h3>
          <h4>Professional Frontend Development</h4>
          <i> May 2021 - Nov 2021</i>
          <li>Average 88.5%</li>
        </ul>
        <img
          src={UTNCertificate}
          alt="Professional Frontend Development certificate"
        />
      </StyledEducation>
    </motion.section>
  );
}

export default Main;
