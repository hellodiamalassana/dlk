import { useState } from "react";

function useDistanceToTop(distanceToTop) {
  const [scrollYDistance, setScrollYDistance] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY > distanceToTop) {
      setScrollYDistance(true);
    } else {
      setScrollYDistance(false);
    }
  });
  return scrollYDistance;

  // need to add performance improvements
}

export default useDistanceToTop;
