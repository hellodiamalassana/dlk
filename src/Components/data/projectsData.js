// Images
import tourism0 from "../../Pages/Projects/images/tourism-0.png";
import rumrumCars0 from "../../Pages/Projects/images/rumrum-cars-0.png";

const projectsData = [
  {
    title: "Tourism Website",
    endDate: "24/12/2021",
    image: tourism0,
    description: [
      "A Tourism booking website made using React with useContext-Redux for the state.",
      "With a quick weather info about the touristic place.",
      "The CSS structure was made using mainly Tailwind with a bit of styled-components.",
    ],
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Redux",
      "Tailwind",
      "styled-components",
    ],
    links: {
      seeProject: "https://lautaroef.github.io/tourism-website-react-03/",
      seeCode: "https://github.com/Lautaroef/tourism-website-react-03",
    },
    id: 0,
  },
  {
    title: "RumRum Cars",
    endDate: "17/02/2022",
    image: rumrumCars0,
    description: [
      "My last project was a 'Rent a car business model', built from scratch using the MERN Stack + Sass and MaterialUI to handle the CSS structure.",
      "State management is all handled by Redux (ToolKit - Query).",
      "Used Firebase Authentication - Hosting services.",
      "Implemented Cloudinary services to handle storing high-quality images.",
    ],
    technologies: [
      "React.js",
      "Redux",
      "Sass",
      "MaterialUI",
      "MongoDB",
      "Node.js",
      "Express",
      "Firebase",
    ],
    links: {
      seeProject: "https://rumrumcars-a9207.web.app/",
      seeCode: "https://github.com/Lautaroef/RumRumCars",
    },
    id: 1,
  },
];

export default projectsData;
