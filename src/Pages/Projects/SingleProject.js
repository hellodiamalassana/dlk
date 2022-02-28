import React from "react";
import { StyledSingleProject } from "./styled-components";

function SingleProject({ title, image, description, technologies, links }) {
  return (
    <>
      {title ? (
        <StyledSingleProject data-tilt imageSrc={image}>
          <div className="box">
            <h3>{title}</h3>
            <a href={links.seeProject} target="_blank">
              <div
                className="project-image"
                style={{ backgroundImage: `url(${image})` }}
              />
            </a>
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
        </StyledSingleProject>
      ) : null}
    </>
  );
}

export default SingleProject;
