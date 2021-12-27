import React, { useEffect, useRef } from "react";
import { StyledSingleProject } from "./styled-components";
import scrollReveal from "../../Components/animations/ScrollReveal";

function SingleProject({
  title,
  image,
  description,
  technologies = [],
  links = [""],
}) {
  const scrollImage = useRef();

  useEffect(() => {
    if (scrollImage.current) {
      scrollReveal.reveal(scrollImage.current, {
        origin: "right", // "bottom"
        distance: "50px",
        reset: true,
        duration: 900,
        viewOffSet: {
          bottom: "-50px", //"-50px"
        },
      });
    }
  }, []);

  return (
    <>
      {title ? (
        <StyledSingleProject data-tilt>
          <div className="box">
            <div className="container-div">
              <h3>{title}</h3>
              <p>{description}</p>
              <div className="technologies">
                {technologies.map((tech, index) => (
                  <span key={index} className="spans">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="links-buttons">
                <a href={links.seeProject} target="_blank">
                  Live
                </a>
                <a href={links.seeCode} target="_blank">
                  Github
                </a>
              </div>
            </div>
            <a href={links.seeProject} target="_blank">
              <img src={image} ref={scrollImage} />
            </a>
          </div>
        </StyledSingleProject>
      ) : null}
    </>
  );
}

export default SingleProject;
