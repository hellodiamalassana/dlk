import VanillaTilt from "vanilla-tilt";

function TiltAnimation() {
  VanillaTilt.init(document.querySelectorAll(".box"), {
    max: 3.25, // max tilt rotation (degrees) 35 3.5
    perspective: 900, // Transform perspective, the lower the more extreme the tilt gets. 1000 - 800
    scale: 1.03,
    speed: 1500, // Speed of the enter/exit transition 300 / 2500
    glare: true,
    "max-glare": 0.05, //0.09
  });
}

export default TiltAnimation;
