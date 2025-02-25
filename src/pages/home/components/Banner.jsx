import React, { useState, useEffect, useRef } from "react";
import "./styles/Banner.scss";
// import Rlines from "../../../animations/animated-rlines/Animatedrlines";
import Rlines from "../../../assets/svg/rlines.svg";
import Lamp from "../../../animations/genie-lamp/Lamp";
import Platform from "../../../assets/svg/platform.svg";
import Stickman from "../../../animations/stickman/Stickman";

const Banner1 = () => {
  const containerRef1 = useRef(null);
  const containerRef2 = useRef(null);
  const containerRef3 = useRef(null);
  const containerRef4 = useRef(null);

  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const [isVisible4, setIsVisible4] = useState(false);

  const callbackFunction = (entries) => {
    entries.forEach((entry) => {
      if (entry.target === containerRef1.current) {
        setIsVisible1(entry.isIntersecting);
      }
      if (entry.target === containerRef2.current) {
        setIsVisible2(entry.isIntersecting);
      }
      if (entry.target === containerRef3.current) {
        setIsVisible3(entry.isIntersecting);
      }
      if (entry.target === containerRef4.current) {
        setIsVisible4(entry.isIntersecting);
      }
    });
  };

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.8,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    if (containerRef1.current) observer.observe(containerRef1.current);
    if (containerRef2.current) observer.observe(containerRef2.current);
    if (containerRef3.current) observer.observe(containerRef3.current);
    if (containerRef4.current) observer.observe(containerRef4.current);

    return () => {
      if (containerRef1.current) observer.unobserve(containerRef1.current);
      if (containerRef2.current) observer.unobserve(containerRef2.current);
      if (containerRef3.current) observer.unobserve(containerRef3.current);
      if (containerRef4.current) observer.unobserve(containerRef4.current);
    };
  }, [containerRef1, containerRef2, containerRef3, containerRef4, options]);

  return (
    <div
      className="py-5 px-5 position-relative"
      style={{ minHeight: "110vh", backgroundColor: "rgb(29, 38, 89)" }}
    >
      <img
        className="animatedRLines position-absolute z-0 opacity-25"
        src={Rlines}
        alt="animated rlines"
      />
      {/* <Rlines /> */}
      <div className="row px-5 justify-content-around">
        <div
          className="col-12 col-lg-7 text-center order-2 order-lg-1"
          ref={containerRef1}
        >
          <h4
            className={`textResponsive2 ${
              isVisible1 ? "animationTextIn" : "animationTextOut"
            }`}
          >
            LET'S CREATE
          </h4>
        </div>
        <div className="col-12 col-lg-4 d-flex justify-content-center align-items-center order-1 order-lg-2 position-relative z-0">
          {/* <img
            className="rounded-pill"
            src={Vplace}
            alt="Place holder for the video"
          /> */}
          <Lamp />
        </div>
      </div>
      <div className="row px-5">
        <div className="col-12" ref={containerRef2}>
          <h4
            className={`textResponsive2 text-center ${
              isVisible2 ? "animationTextIn" : "animationTextOut"
            }`}
          >
            SOMETHING GREAT
          </h4>
        </div>
      </div>
      <div className="row px-5 justify-content-around">
        <div className="col-12 col-lg-4 d-flex justify-content-center align-items-center order-2 order-lg-1 position-relative z-0">
          <img
            className="z-n3"
            src={Platform}
            alt="A placeholder for the video"
            style={{
              overflow: "visible",
              pointerEvents: "none", // Tıklanamaz yapar
              userSelect: "none", // Seçilemez yapar
            }}
          />
          <Stickman />
        </div>
        <div className="col-12 col-lg-7 order-1 order-lg-2" ref={containerRef3}>
          <h4
            className={`textResponsive2 text-center ${
              isVisible3 ? "animationTextIn" : "animationTextOut"
            }`}
          >
            TOGETHER
          </h4>
        </div>
      </div>
      <div className="row" ref={containerRef4}>
        <h4
          className={`textResponsive2 text-center ${
            isVisible4 ? "animationTextIn" : "animationTextOut"
          }`}
        >
          WE’LL DEBUG THE REST!
        </h4>
      </div>
    </div>
  );
};

export default Banner1;
