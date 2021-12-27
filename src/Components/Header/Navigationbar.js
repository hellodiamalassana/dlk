import React, { useEffect, useRef } from "react";
import projectsData from "../data/projectsData";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import scrollReveal from "../animations/ScrollReveal";
import santa from "../Images/santa.jpeg";
import SidebarMenu from "./SidebarMenu";
import Button from "@mui/material/Button";
import {
  StyledPicture,
  StyledMenu,
  StyledNavigation,
  StyledContact,
  StyledBadge,
} from "./styled-components";

function Header() {
  const { pathname } = useLocation();
  // Scroll Animation
  const scrollNavbar = useRef();
  useEffect(() => {
    scrollReveal.reveal(scrollNavbar.current, {
      origin: "top",
      duration: 700,
      distance: "20px",
      delay: 100,
    });
  }, []);

  return (
    <StyledNavigation ref={scrollNavbar}>
      <StyledPicture to="/about" image={santa}>
        <div />
        <h3>Lautaro Figueroa</h3>
      </StyledPicture>
      <StyledMenu>
        <Link to="/" className={pathname === "/" ? "activeLink" : ""}>
          Home
        </Link>
        <a
          href="/#projectsId"
          className={pathname === "/projects" ? "activeLink" : ""}
        >
          <StyledBadge
            badgeContent={projectsData.length || "..."}
            color="primary"
          >
            Projects
          </StyledBadge>
        </a>
        <div>
          <button>
            <Link
              to="/about"
              className={pathname === "/about" ? "activeLink" : ""}
            >
              About Me
            </Link>
          </button>
        </div>
      </StyledMenu>
      {/* Contact */}
      <StyledContact>
        <Button component={Link} to="/contact">
          Contact
        </Button>
      </StyledContact>
      {/* Hamburger Menu */}
      <SidebarMenu />
    </StyledNavigation>
  );
}

export default Header;
