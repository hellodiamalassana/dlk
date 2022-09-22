// Images
import tourism0 from "../../Pages/Projects/images/tourism-0.png";
import makerlf1 from "../../Pages/Projects/images/MakerLF-1.png";
import rumrumCars0 from "../../Pages/Projects/images/rumrum-cars-0.png";
import bookingSoftwareDashboard from "../../Pages/Projects/images/booking-software-dashboard.png";
// import bookingSoftwareUsersTable from "../../Pages/Projects/images/booking-software-users-table.png";

const projectsData = [
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
    title: "RumRum Cars | MERN Stack",
    endDate: "17/02/2022",
    image: rumrumCars0,
    description: [
      "My last project was a 'Rent a car business model', built from scratch using the MERN Stack + Sass and MaterialUI to handle the CSS structure.",
      "Used Firebase Authentication - Hosting services.",
      "State management is all handled by Redux (ToolKit - Query).",
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
  {
    title: "Booking software | Typescript - Next.js - MySQL",
    image: bookingSoftwareDashboard,
    description: [
      "Currently developing a booking software for the Tourism Industry, using mainly Typescript, Next.js and MySQL.",
      "The main goal is to create a Full-Stack app that can be used by any tourism business to manage their 360° needs in a single platform.",
    ],
    technologies: [
      "Sass",
      "React.js",
      "Typescript",
      "Next.js",
      "NextAuth",
      "Prisma",
      "MySQL - PlanetScale",
    ],
    links: {
      private: true,
      seeProject: "#",
      seeCode: "https://github.com/LautaroFigueroa/",
    },
    id: 2,
  },
];

export default projectsData;
