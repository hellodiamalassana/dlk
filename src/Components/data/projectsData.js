// Images
import tourism0 from "../../Pages/Projects/images/tourism-0.png";
import rumrumCars0 from "../../Pages/Projects/images/rumrum-cars-0.png";

const projectsData = [
  {
    title: "Tourism Website",
    image: tourism0,
    description:
      "A Tourism booking website made using React with useContext-Redux for the state. With a quick weather info about the touristic place. Inspired in barlantravel.com",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
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
    image: rumrumCars0,
    description:
      "My last project was a 'Rent a car business model', which i build using MERN stack + Redux for the state and Sass for the styling. And for storing images i used Cloudinary.",
    technologies: ["Sass", "React", "Redux", "MongoDB", "Express", "NodeJs"],
    links: {
      seeProject: "https://rumrumcars-a9207.web.app/",
      seeCode: "https://github.com/Lautaroef/RumRumCars",
    },
    id: 1,
  },
];

export default projectsData;
