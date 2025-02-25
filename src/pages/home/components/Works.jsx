import React, { useRef, useEffect, useState } from "react";
import Stack from "../../../animations/stack/Stack";
import Ship from "../../../animations/ship/Ship";

const Works = () => {
  const containerRef1 = useRef(null);
  const [isVisible1, setIsVisible1] = useState(false);

  const callbackFunction = (entries) => {
    entries.forEach((entry) => {
      if (entry.target === containerRef1.current) {
        setIsVisible1(entry.isIntersecting);
      }
    });
  };

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    if (containerRef1.current) observer.observe(containerRef1.current);

    return () => {
      if (containerRef1.current) observer.unobserve(containerRef1.current);
    };
  }, [containerRef1]);

  return (
    <div
      className="px-5 pt-5"
      style={{ minHeight: "110vh" }}
      id="workExperiences"
    >
      <h2
        className={`display-2 text-center py-5 ${
          isVisible1 ? "journeyTtitleIn" : "journeyTtitleOut"
        }`}
        ref={containerRef1}
      >
        Work Experinces
      </h2>
      <Stack />
      <Ship />
    </div>
  );
};

export default Works;
