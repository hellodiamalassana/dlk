import React from "react";
import styled from "styled-components";
import useDistanceToTop from "./useDistanceToTop";

export default function ScrollToTop() {
  const showArrow = useDistanceToTop(400); // if 400 from top => show

  return (
    <>
      {showArrow ? (
        <StyledArrowUp onClick={() => window.scrollTo(0, 0)}>
          <i className="fas fa-arrow-up"></i>
        </StyledArrowUp>
      ) : null}
    </>
  );
}

/*===== Style =====*/
const StyledArrowUp = styled.div`
  position: fixed;
  bottom: 20px;
  left: 95%;
  z-index: 99;
  width: min-content;
  padding: 5px 10px;
  color: #fff;
  background-color: #5d48b9;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.15);
  font-size: 20px;
  cursor: pointer;

  i {
    animation: arrowUp 0.7s infinite alternate;
  }

  @keyframes arrowUp {
    0% {
      transform: translateY(1px);
    }
    100% {
      transform: translateY(-3px);
    }
  }
`;
