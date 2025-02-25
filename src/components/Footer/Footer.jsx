import React, { useState, useEffect, useRef } from "react";
import "./Footer.scss";
import Istanbul from "../../animations/istanbul/Istanbul";
import Darrow from "../../assets/svg/darrow.svg";
import Contact from "../../pages/home/components/Contact";
import Cv from "../../assets/CV-en-fd-Alper_tanrikulu.pdf";
import { Link } from "react-router-dom";

const Footer = () => {
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
    threshold: 0.7,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    if (containerRef1.current) observer.observe(containerRef1.current);

    return () => {
      if (containerRef1.current) observer.unobserve(containerRef1.current);
    };
  }, [containerRef1, options]);

  return (
    <div className="Footer position-relative">
      <div className="d-none">
        <Contact />
      </div>
      <div className="z-n1" style={{ minHeight: "300px" }}>
        <Istanbul />
      </div>
      <div className="px-5 position-absolute top-0 pt-5">
        <div className="row px-5">
          <div className="col-12 col-xl-9" ref={containerRef1}>
            <h3
              className={`textResponsive3 z-1 ${
                isVisible1 ? "visionAnimationIn" : ""
              }`}
            >
              Your Vision,
              <br /> My Code <br /> Let’s Create!
            </h3>
          </div>
          <div className="col-12 col-xl-3 d-flex justify-content-center align-items-center">
            <div
              className="text-center text-lg-end ffRoboto"
              style={{ width: "100%" }}
            >
              <a href={Cv} download="CV-en-fd-Alper_tanrikulu.pdf">
                <button
                  className={`myButton my-3 mx-3 ${
                    isVisible1 ? "leftSlideAnimation1" : "rightSlideAnimation1"
                  }`}
                >
                  <span className="fs-5 fw-200">Download my CV </span>
                  <img
                    src={Darrow}
                    style={{ width: "16px", height: "auto" }}
                    alt="Download my cv"
                  />
                </button>
              </a>

              <Link href="https://alper-portfolio-1ewg6djpo-alper-tanrikulus-projects.vercel.app/contact">
                <button
                  className={`myButton my-3 mx-3 ${
                    isVisible1 ? "leftSlideAnimation1" : "rightSlideAnimation1"
                  }`}
                >
                  <span className="fs-5 fw-200">Send me an email</span>
                </button>
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-4 order-2 order-xl-1 d-flex align-items-center justify-content-center opacity-50 my-md-3">
              <p className="ffRoboto m-0">Copyright © 2025 Alper Tanrıkulu</p>
            </div>
            <div className="col-12 col-md-8 order-1 order-xl-2 d-flex justify-content-around">
              <div className="row text-center">
                <div className="col-6 col-md-3">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.youtube.com/"
                    className="text-decoration-none myButton2 fs-5 fs-3 fw-5 px-3 py-0 ffRoboto"
                  >
                    YouTube
                  </a>
                </div>
                <div className="col-6 col-md-3">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/alpertanrikulu"
                    className="text-decoration-none myButton2 fs-5 fs-3 fw-5 px-3 py-0 ffRoboto"
                  >
                    GitHub
                  </a>
                </div>
                <div className="col-6 col-md-3">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/alper-tanr%C4%B1kulu-85488817a/"
                    className="text-decoration-none myButton2 fs-5 fs-3 fw-5 px-3 py-0 ffRoboto"
                  >
                    LinkedIn
                  </a>
                </div>
                <div className="col-6 col-md-3">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.youtube.com/"
                    className="text-decoration-none myButton2 fs-5 fs-3 fw-5 px-3 py-0 ffRoboto"
                  >
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
