import Typed from "typed.js";

// Configuration for the only typed anim | Home section
function TypedAnimation() {
  var options = {
    strings: [
      "<b style='color: #3178c6'>Typescript</b> ^200",
      "More deeply <b style='color: #764abc'>Redux</b>^200",
      "<b>Next Js</b>^200",
    ],
    typeSpeed: 50, // typeSpeed in milliseconds
    startDelay: 800, // startDelay Time before typing starts in milliseconds
    backDelay: 850, // backDelay Time before backspacing in milliseconds
    backSpeed: 40, // backSpeed in milliseconds

    fadeOut: true, // fadeOut Fade out transition instead of backspace. Default false
    fadeOutClass: "custom-fade-out", // fadeOutClass Css class for fade animation
    fadeOutDelay: 900, // fadeOutDelay Fade out delay in milliseconds

    loop: true,
    loopCount: "infinite",
  };
  new Typed(".element", options);
}

export default TypedAnimation;
