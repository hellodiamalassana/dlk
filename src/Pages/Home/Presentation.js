import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import TypedAnimation from "../../Components/animations/TypedAnimation";
import scrollReveal from "../../Components/animations/ScrollReveal";
import { StyledPresentation, TypedContainer } from "./styled-components";

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
    <StyledPresentation>
      <TypedContainer>
        <h4 className="currently-dev">Currently developing: </h4>
        <h1 ref={scrollTitle}> Front End Skills</h1>
        <div ref={scrollTypedAnim}>
          <span>Interested in learning: </span>
          <h4 className="element"></h4>
        </div>
        <Button
          component={Link}
          to="/contact"
          variant="contained"
          ref={scrollButton}
        >
          Contact Me
        </Button>
      </TypedContainer>
      <lottie-player
        ref={scrollGif}
        src="https://assets10.lottiefiles.com/packages/lf20_psdcolux.json"
        background="transparent"
        speed="1"
        style={{ width: "50%", height: "max-content" }}
        loop
        autoplay
      ></lottie-player>
    </StyledPresentation>
  );
}
