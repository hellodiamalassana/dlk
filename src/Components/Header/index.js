import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../styledComponents";
import Header from "../Header/Navigationbar";

function index() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  );
}

export default index;
