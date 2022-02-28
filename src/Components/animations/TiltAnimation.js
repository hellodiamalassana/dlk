import VanillaTilt from "vanilla-tilt";

function TiltAnimation() {
  VanillaTilt.init(document.querySelectorAll(".box"), {
    max: 1.2, // max tilt rotation (degrees) 35 3.25
    perspective: 900, // Transform perspective, the lower the more extreme the tilt gets. 1000 - 800
    scale: 1.015,
    speed: 1000, // Speed of the enter/exit transition 300 / 1500
    glare: true,
    "max-glare": 0.07, // 0.09
  });
}

export default TiltAnimation;
