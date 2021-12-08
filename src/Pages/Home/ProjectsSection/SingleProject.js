import React, { useEffect } from "react";
import styled from "styled-components";
import { Button } from "@mui/material";
import VanillaTilt from "vanilla-tilt";

function SingleProject({ title, image, description, id }) {
  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll(".box"), {
      reverse: false, // reverse the tilt direction false
      max: 8, // max tilt rotation (degrees) 35
      startX: 0, // the starting tilt on the X axis, in degrees. 0
      startY: 0, // the starting tilt on the Y axis, in degrees. 0
      perspective: 5000, // Transform perspective, the lower the more extreme the tilt gets. 1000
      scale: 1, // 2 = 200%, 1.5 = 150%, etc.. 1
      speed: 400, // Speed of the enter/exit transition 300
      glare: false, // if it should have a "glare" effect false
      "max-glare": 1, // the maximum "glare" opacity (1 = 100%, 0.5 = 50%) 1
      "glare-prerender": false, // false = VanillaTilt creates the glare elements for you, otherwise false
      // you need to add .js-tilt-glare>.js-tilt-glare-inner by yourself
      "mouse-event-element": null, // css-selector or link to HTML-element what will be listen mouse events null
      // you need to add .js-tilt-glare>.js-tilt-glare-inner by yourself
    });
  }, []);

  return (
    <>
      <StyledSingleProject data-tilt id={id}>
        <div className="box">
          <h3 className="name">{title}</h3>
          <Button variant="contained" as={"a"} href="#" className="code-link">
            See Project
          </Button>
          <Button
            variant="contained"
            as={"a"}
            href="#"
            className="project-link"
          >
            View Code
          </Button>
          <img
            src={
              image ||
              "https://i.picsum.photos/id/807/200/300.jpg?hmac=9ZZk1Nj28qIecGuVvozSN7I4LW0zotTPqeYfdGR3YdE"
            }
            className="product"
          />
        </div>
      </StyledSingleProject>
    </>
  );
}

export default SingleProject;

const StyledSingleProject = styled.div.attrs((props) => ({
  as: "picture",
  id: props.id,
}))`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  transform-style: preserve-3d;

  .box {
    position: relative;
    width: 700px;
    height: 450px;
    margin: 40px 0;
    background: #232323;
    transform-style: preserve-3d;

    &::before {
      content: "#01";
      position: absolute;
      top: 35px;
      left: 20px;
      font-size: 6em;
      font-weight: 900;
      color: #fff;
      font-style: italic;
      opacity: 0.04;
      transition: 0.5s;
    }
    &::after {
      content: "PROJECT";
      position: absolute;
      bottom: 35px;
      left: 20px;
      font-size: 5em;
      font-weight: 900;
      color: #fff;
      font-style: italic;
      opacity: 0.04;
      transition: 0.5s;
    }

    .name {
      position: absolute;
      top: 20px;
      left: 0;
      text-align: center;
      color: #fff;
      width: 100%;
      transform-style: preserve-3d;
      transition: 0.5s;
      z-index: 10;
      transform: translate3d(0, 0, 0px);
    }

    .code-link,
    .project-link {
      position: absolute;
      bottom: 15px;
      left: 15%;
      width: max-content;
      padding: 5px 16px;
      background-color: #1976d2;
      border-radius: 10px;
      font-size: 12px;
      text-decoration: none;
      z-index: 15;
      transform-style: preserve-3d;
      transition: 0.5s;
      transform: translate3d(-50%, 0, 60px);
    }

    .project-link {
      left: 37.3%;
    }

    .product {
      position: absolute;
      top: 50%;
      left: 80%;
      height: 70%;
      transition: 0.7s;
      z-index: 10;
      transform-style: preserve-3d;
      transform: translate3d(-50%, -50%, 0px) /*rotate(-15deg)*/;
    }

    &:hover .product {
      transform: translate3d(-50%, -50%, 60px) /*rotate(-15deg)*/;
    }
  }
`;
