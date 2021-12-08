import { Button } from "@mui/material";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Typed from "typed.js";
import { TypedContainer } from "./styled-components";

function FirstImpression() {
  useEffect(() => {
    var options = {
      strings: ["Typescript ^200", "More deeply Redux^200", "Node Js^200"],
      typeSpeed: 50, // typeSpeed Type speed in milliseconds
      startDelay: 800, // startDelay Time before typing starts in milliseconds
      backDelay: 1100, // backDelay Time before backspacing in milliseconds
      backSpeed: 40, // backSpeed Backspacing speed in milliseconds

      fadeOut: true, // fadeOut Fade out transition instead of backspace. Default false
      fadeOutClass: "typed-fade-out1", // fadeOutClass Css class for fade animation
      fadeOutDelay: 900, // fadeOutDelay Fade out delay in milliseconds

      loop: true, // loop Loop the strings. Default false
      loopCount: "infinite", // loopCount Amount of loops. Default "infinite"

      showCursor: true, // showCursor Show cursor. Default true
      cursorChar: "|", // cursorChar Character for cursor. Default "|"
      autoInsertCss: true, // AutoInsertCss insert CSS for cursor and fadeOut into HTML <head>
    };
    new Typed(".element", options);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "8rem",
      }}
    >
      <TypedContainer>
        <h4 className="currently-dev">Currently developing: </h4>
        <h1> Front End Skills</h1>
        <div>
          <span>Interested in learning: </span>
          <h4 className="element"></h4>
        </div>
        <Button component={Link} to={"/"} variant="contained">
          Contact Me
        </Button>
      </TypedContainer>
      <lottie-player
        src="https://assets3.lottiefiles.com/packages/lf20_mbmwrx21.json"
        background="transparent"
        speed="1"
        style={{ width: "50%", height: "max-content" }}
        loop
        autoplay
      ></lottie-player>
    </div>
  );
}

export default FirstImpression;