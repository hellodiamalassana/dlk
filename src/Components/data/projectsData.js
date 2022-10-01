// Images
import tourism from "../../Pages/Projects/images/tourism-0.png";
import rumrumCars from "../../Pages/Projects/images/rumrum-cars-cars-2.png";
import tourismAgencySingleDestination from "../../Pages/Projects/images/tourism-agency-single-destination-2.png";
import bookingSoftwareDashboard from "../../Pages/Projects/images/booking-software-dashboard.png";
// import bookingSoftwareUsersTable from "../../Pages/Projects/images/booking-software-users-table.png";

const projectsData = [
  // {
  //   title: "Tourism Website | React - Redux ",
  //   endDate: "24/12/2021",
  //   image: tourism,
  //   description: [
  //     "A Tourism booking website made using React with useContext-Redux for the state.",
  //     "Worked with 2 APIs, it has a quick weather info about the touristic place that can be seen from the navigation bar.",
  //     "The CSS structure was made using mainly Tailwind with a bit of styled-components.",
  //   ],
  //   technologies: [
  //     "HTML",
  //     "CSS",
  //     "JavaScript",
  //     "React.js",
  //     "Redux",
  //     "Tailwind",
  //     "styled-components",
  //   ],
  //   links: {
  //     seeProject: "https://lautaroef.github.io/tourism-website-react-03/",
  //     seeCode: "https://github.com/Lautaroef/tourism-website-react-03",
  //   },
  //   id: 0,
  // },
  {
    title: "RumRum Cars | MERN Stack",
    endDate: "March 2022",
    image: rumrumCars,
    description: [
      "This project aims to simulate a 'Rent a car business model', built from scratch using the MERN stack + Sass and MaterialUI for the UI.",
      // "My second project of 2022 was a 'Rent a car business model', built from scratch using the MERN Stack + Sass and MaterialUI to handle the CSS structure.",
      "State management handled by Redux (ToolKit - Query).",
      "Implemented Cloudinary services to handle the storage and retrieval of high quality images.",
      "Used Firebase Authentication - Hosting services.",
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
    title: "Tourism Agency | TypeScript - Next.js - MongoDB",
    endDate: "July 2022",
    image: tourismAgencySingleDestination,
    description: [
      "This project is production ready, with a fully functional front-end and back-end.",
      "It's aims to be a solution for my family business, a travel agency, as we have been working in the tourism industry for more than 10 years.",
      "It has integrations with PayPal, MercadoPago, and Google Maps.",
    ],
    technologies: [
      "React.js",
      "Redux",
      "Next.js",
      "TypeScript",
      "Sass",
      "MaterialUI",
      "MongoDB",
      "Node.js",
      "Vercel",
    ],
    links: {
      seeProject: "https://local-tourism-agency.vercel.app/",
      seeCode: "https://github.com/Lautaroef/lausof-tourism-agency",
    },
    id: 2,
  },
  {
    title: "Booking software | Typescript - Next.js - MySQL",
    image: bookingSoftwareDashboard,
    description: [
      "Currently building a Full-Stack booking software for the Tourism Industry, using mainly Typescript, Next.js and MySQL.",
      "This project for tour operators and travel agencies will make it easier for them to manage their bookings, customers, and their accounting.",
      "It is in development mode and already has a database schema with some data, but with a lot of Frontend work to do.",
      // "The main goal is to create a app that can be used by any tourism business to manage their 360° needs in a single platform.",
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
    id: 3,
  },
];

export default projectsData;
