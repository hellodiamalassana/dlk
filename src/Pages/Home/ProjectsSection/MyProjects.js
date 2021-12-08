import React from "react";
import { ProjectsSection } from "../styled-components";
import SingleProject from "./SingleProject";
import iphoneApp from "../iphone-app1.png";

function MyProjects() {
  const projectsData = [
    {
      title: "Weather Application",
      image: iphoneApp,
      description: "",
      id: 2,
    },
    {
      title: "University Project (Tourism app)",
      image: "",
      description: "",
      id: 1,
    },
    { title: "Tourism Website", image: "", description: "", id: 3 },
  ];

  return (
    <>
      <ProjectsSection>
        <h2>my projects</h2>
        <hr />
        <div>
          {projectsData.map((project) => {
            return <SingleProject key={project.id} {...project} />;
          })}
        </div>
      </ProjectsSection>
    </>
  );
}

export default MyProjects;
