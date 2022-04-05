// Images
import tourism0 from "../../Pages/Projects/images/tourism-0.png";
import makerlf1 from "../../Pages/Projects/images/MakerLF-1.png";
import rumrumCars0 from "../../Pages/Projects/images/rumrum-cars-0.png";

const projectsData = [
  {
    title: "Landing Page | SasS oriented",
    endDate: "20/11/2021",
    image: makerlf1,
    description: [
      "A static SasS landing page i built with React, styled-components, react-router, and react hooks.",
      "This is a static landing page usually used for marketing of products.",
      "All the components are reusable and can be used for any dynamic content.",
    ],
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.JS",
      "styled-components",
    ],
    links: {
      seeProject: "https://first-saas-landing-page.netlify.app/",
    },
    id: 0,
  },
  {
    title: "Tourism Website | React - Redux ",
    endDate: "24/12/2021",
    image: tourism0,
    description: [
      "A Tourism booking website made using React with useContext-Redux for the state.",
      "Worked with 2 APIs, it has a quick weather info about the touristic place that can be seen from the navigation bar.",
      "The CSS structure was made using mainly Tailwind with a bit of styled-components.",
    ],
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.JS",
      "Redux",
      "Tailwind",
      "styled-components",
    ],
    links: {
      seeProject: "https://lautaroef.github.io/tourism-website-react-03/",
      seeCode: "https://github.com/Lautaroef/tourism-website-react-03",
    },
    id: 1,
  },
  {
    title: "RumRum Cars | MERN App",
    endDate: "17/02/2022",
    image: rumrumCars0,
    description: [
      "My last project was a 'Rent a car business model', built from scratch using the MERN Stack + Sass and MaterialUI to handle the CSS structure.",
      "Used Firebase Authentication - Hosting services.",
      "State management is all handled by Redux (ToolKit - Query).",
      "Implemented Cloudinary services to handle storing high-quality images.",
    ],
    technologies: [
      "React.JS",
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
    id: 2,
  },
];

export default projectsData;
