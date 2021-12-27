import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { theme } from "../../Components/Header/styled-components";

function index() {
  return (
    <div
      style={{ position: "relative", maxWidth: theme.maxWidth, margin: "auto" }}
    >
      <lottie-player
        src="https://assets2.lottiefiles.com/packages/lf20_kfwqdqdq.json"
        background="transparent"
        speed="1"
        style={{
          width: "100%",
          height: "max-content",
        }}
        loop
        autoplay
      ></lottie-player>
      <Button
        as={Link}
        to="/"
        variant="contained"
        style={{
          position: "absolute",
          left: "17rem",
          top: "75%",
          textDecoration: "none",
        }}
      >
        Back to Home
      </Button>
    </div>
  );
}

export default index;
