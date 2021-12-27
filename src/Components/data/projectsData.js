// Images
import utnProject from "../../Pages/Projects/images/utn-project-0.png";
import weatherApp1 from "../../Pages/Projects/images/weather-app-1.png";
import screenTourismProject12 from "../../Pages/Projects/images/screen-tourism-project-1-2.png";

const projectsData = [
  {
    title: "University Project (Spanish)",
    image: utnProject,
    description: `Simple web application where some places are displayed for touristic services purposes. \n
      At the end a functional box where the user can choose a destiny to travel and also a date to book. Inspired in despegar.com`,
    technologies: ["HTML", "CSS", "JavaScript"],
    links: {
      seeProject:
        "https://wheelockarg.000webhostapp.com/JavaScript_UTN/JavaScriptAvanzado_LautaroFigueroa/",
      seeCode: "https://github.com/Lautaroef/tourism-website-html-css-js-01",
    },
    id: 1,
  },
  {
    title: "Weather mobile Application",
    image: weatherApp1,
    description:
      "A mobile oriented weather app where you enter a city and it returns full live weather description, all buttons are functional.",
    technologies: ["ReactJS", "HTML", "CSS", "JavaScript", "Tailwind"],
    links: {
      seeProject: "https://theweatherapp-lautaro-figueroa.netlify.app/",
      seeCode: "https://github.com/Lautaroef/mobile-weather-app-02",
    },
    id: 2,
  },
  {
    title: "Tourism Website",
    image: screenTourismProject12,
    description:
      "A Tourism booking website i created using React in combination with useContext-Redux for the state. More detailed info on Github. Inspired in barlantravel.com",
    technologies: [
      "React",
      "Redux",
      "HTML",
      "CSS",
      "JavaScript",
      "styled-components",
      "Tailwind",
    ],
    links: {
      seeProject: "https://lautaroef.github.io/tourism-website-react-03/",
      seeCode: "https://github.com/Lautaroef/tourism-website-react-03",
    },
    id: 3,
  },
  { id: 4 }, // Portfolio website
];

export default projectsData;
