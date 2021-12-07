import React, { useState } from "react";
import markZuck from "../Images/mark.jpg";
import {
  Picture,
  Menu,
  HamburgerNav,
  NavigationBar,
  ContactLi,
} from "../styledComponents";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import UseWindowSize from "../useWindowSize";
import { Button } from "@mui/material";

function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const windowWidth = UseWindowSize();
  const { pathname } = useLocation();

  const hamburgerMenu = () => {
    setToggleMenu(() => !toggleMenu);
  };

  return (
    <NavigationBar>
      <Picture image={markZuck}>
        <div />
        <h3 style={{ fontFamily: "Quite Magical", fontSize: "28px" }}>
          Lautaro Figueroa
        </h3>
      </Picture>
      <Menu>
        <Link to="/" className={pathname === "/" ? "activeLink" : ""}>
          Home
        </Link>
        <Link
          to="/projects"
          className={pathname === "/projects" ? "activeLink" : ""}
        >
          Projects
        </Link>
        <div className="skewedDiv">
          <button>
            <Link
              to="/about"
              className={pathname === "/about" ? "activeLink" : ""}
            >
              About Me
            </Link>
          </button>
        </div>
      </Menu>
      <ContactLi>
        <Button component={Link} to="/contact">
          Contact
        </Button>
      </ContactLi>
      <i className="fas fa-hamburger fa-2x" onClick={() => hamburgerMenu()}></i>
    </NavigationBar>
  );
}

export default Header;
