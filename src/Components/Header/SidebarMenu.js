import React, { useState } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

function HamburgerMenu() {
  const [openMenu, setOpenMenu] = useState(false);
  const menuItems = [
    { title: "Home", to: "/" },
    { title: "Projects", to: "/" },
    { title: "About Me", to: "/about" },
    { title: "Contact", to: "/contact" },
  ];

  return (
    <>
      <i
        className="fas fa-hamburger fa-2x"
        onClick={() => setOpenMenu(true)}
      ></i>
      <SwipeableDrawer
        anchor="right"
        open={openMenu}
        onOpen={() => setOpenMenu(true)}
        onClose={() => setOpenMenu(false)}
      >
        <div style={{ width: "200px" }}>
          <Box textAlign={"center"} p={2}>
            Menu
          </Box>
          <Divider />
          <List>
            {menuItems.map((item) => {
              return (
                <ListItem
                  as={Link}
                  to={item.to}
                  key={item.title}
                  style={{ color: "rgba(0, 0, 0, 0.87)" }}
                  onClick={() => setOpenMenu(false)}
                >
                  <ListItemText>{item.title}</ListItemText>
                </ListItem>
              );
            })}
          </List>
        </div>
      </SwipeableDrawer>
    </>
  );
}

export default HamburgerMenu;
