import React from "react";
import styled from "styled-components";

function index() {
  return (
    <StyledFooter>
      <div>
        <small>
          Made with <del>love</del> &nbsp;by
        </small>
        <br />
        <small style={{ fontSize: "13px" }}> &copy; Lautaro Figueroa</small>
      </div>
    </StyledFooter>
  );
}

export default index;

// ---- Styling ---- //
const StyledFooter = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 90px;
  color: rgba(255, 255, 255, 0.5); //0.55
  background-color: #202135;
  text-align: center;

  div {
    width: 100%;
    margin-top: 1.8rem;
    del {
      position: relative;

      &::after {
        content: " a keyboard";
        position: absolute;
        bottom: 80%;
        left: 50%;
        width: max-content;
        transform: rotate(6deg);
      }
    }
  }
`;
