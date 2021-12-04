import React from "react";
import markZuck from "../Images/mark.jpg";
import { ContactLi, Menu, NavigationBar, Picture } from "../styledComponents";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

function Header() {
  const { pathname } = useLocation();

  return (
    <NavigationBar>
      <Picture image={markZuck}>
        <div />
        <h3>Lautaro Figueroa</h3>
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
        <Link to="/contact">Contact</Link>
      </ContactLi>
    </NavigationBar>
  );
}

export default Header;
