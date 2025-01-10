import React, { useEffect, useRef, useState } from "react";
import "./App.css"

const OverlapDetector = () => {
  const hoverElementRef = useRef(null);
  const targetElementRef = useRef(null);
  const [isOverlapping, setIsOverlapping] = useState(true);

  const isHovering = (element1, element2) => {
    if (!element1 || !element2) return false;

    const rect1 = element1.getBoundingClientRect();
    const rect2 = element2.getBoundingClientRect();

    return !(
      rect1.right < rect2.left ||
      rect1.left > rect2.right ||
      rect1.bottom < rect2.top ||
      rect1.top > rect2.bottom
    );
  };

// eslint-disable-next-line
  const checkOverlapOnScroll = () => {
    const hoverElement = hoverElementRef.current;
    const targetElement = targetElementRef.current;

    if (isHovering(hoverElement, targetElement)) {
      setIsOverlapping(true);
    } else {
      setIsOverlapping(false);
    }
  };

// eslint-disable-next-line
  useEffect(() => {
    // Attach the scroll event listener
// eslint-disable-next-line
    window.addEventListener("scroll", checkOverlapOnScroll);

    // Initial check for overlap
// eslint-disable-next-line
    checkOverlapOnScroll();

    // Cleanup on component unmount
    return () => {
// eslint-disable-next-line
      window.removeEventListener("scroll", checkOverlapOnScroll);
    };
// eslint-disable-next-line
  },[]); // Dependency array empty to run only on mount/unmount

  return (
    <div>
      <div
        ref={hoverElementRef}
        className="header"
        style={{
          backgroundColor: isOverlapping ? "#ffffff00" : "rgb(51, 48, 48)",
        }}
      ><img alt="logo omen dev" src="/src/placeholder.jpg"></img>
      <a href="https://easy.gg/">support</a>
      <a href="https://easy.gg/">links</a>
      <a href="https://easy.gg/">teams</a>
      <a href="https://easy.gg/">games</a>
      </div>
      <div
        ref={targetElementRef}
        className="welcome_div"
      ></div>

      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    </div>
  );
};

export default OverlapDetector;
