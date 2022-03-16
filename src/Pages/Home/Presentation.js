import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { StyledPresentation, TypedContainer } from "./styled-components";
import scrollReveal from "../../Components/animations/ScrollReveal";
import TypedAnimation from "../../Components/animations/TypedAnimation";
import scrollDownImg from "../../Components/Images/scrollDown.svg";
import Button from "@mui/material/Button";

export default function FirstImpression() {
  const scrollTitle = useRef(null); // For Scroll Anim
  const scrollTypedAnim = useRef(null);
  const scrollButton = useRef(null);
  const scrollGif = useRef(null);

  useEffect(() => {
    TypedAnimation();
    // Scroll Animations
    const config = {
      origin: "top", // "bottom"
      duration: 700,
      distance: "20px",
    };
    if (scrollTitle.current) {
      scrollReveal.reveal(".currently-dev", { ...config, delay: 100 });
      scrollReveal.reveal(scrollTitle.current, { ...config, delay: 200 });
      scrollReveal.reveal(scrollTypedAnim.current, { ...config, delay: 300 });
      scrollReveal.reveal(scrollButton.current, { ...config, delay: 400 });
      scrollReveal.reveal(scrollGif.current, { ...config, delay: 500 });
    }
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <StyledPresentation>
        <TypedContainer>
          <h4 className="currently-dev">Currently developing: </h4>
          <h1 ref={scrollTitle}> Front End Skills</h1>
          <div ref={scrollTypedAnim}>
            <span>Interested in learning: </span>
            <h4 className="element"></h4>
          </div>
          <div className="my-buttons">
            <Button
              component={Link}
              to="/about"
              disableElevation
              variant="contained"
              ref={scrollButton}
            >
              About Me
            </Button>
            <Button
              component={Link}
              to="/contact"
              disableElevation
              variant="contained"
              ref={scrollButton}
            >
              Contact Me
            </Button>
          </div>
        </TypedContainer>
        <lottie-player
          speed="1"
          loop
          autoplay
          ref={scrollGif}
          background="transparent"
          className="lottie-player"
          src="https://assets10.lottiefiles.com/packages/lf20_psdcolux.json"
        ></lottie-player>
      </StyledPresentation>
      <a href="/#my-projects" className="center-image">
        <img src={scrollDownImg} alt="Scroll Down" />
      </a>
    </div>
  );
}
