import React from "react";
import Waves from "../../../animations/waves/Waves";
import Avataralper from "../../../assets/images/alperavatar.png";
import Darrow from "../../../assets/svg/darrow.svg";
import Cv from "../../../assets/CV-en-fd-Alper_tanrikulu.pdf";
import "./styles/Hello.scss";

const Hello = () => {
  return (
    <div className="position-relative px-5" style={{ minHeight: "90vh" }}>
      <div className="row text-center text-md-start px-5">
        <div className="col-12 col-md-6 col-xl-6 mt-5">
          <div className="row">
            <div className="col-12 col-lg-6 order-1 order-lg-2 ">
              <div
                className="text-center text-lg-end ffRoboto"
                style={{ width: "100wv" }}
              >
                <a href={Cv} download="CV-en-fd-Alper_tanrikulu.pdf">
                  <button className="myButton leftSlideAnimation">
                    <span className="fs-5 fw-200">Download my CV </span>
                    <img
                      src={Darrow}
                      style={{ width: "16px", height: "auto" }}
                      alt="Download my cv"
                    />
                  </button>
                </a>
              </div>
            </div>
            <div className="col-12 col-lg-6 order-2 order-lg-1">
              <p className="fs-1 fw-bold mb-0">Hello 👋, I'm</p>
            </div>
          </div>
          <h1 className="textResponsive">Alper Tanrıkulu</h1>
          <h2 className="ffRoboto opacity-75 fw-normal fs-4 my-5 pb-5 py-md-3">
            I craft dynamic web experiences using React, creating animated
            websites and functional application interfaces with clean,
            responsive designs
          </h2>
        </div>
        <div className="col-12 col-md-6 col-xl-5 position-relative d-flex justify-content-start align-items-end">
          <div className="bottom-0 d-flex justify-content-center align-items-center">
            <Waves />
            <img
              className=""
              src={Avataralper}
              alt="Alper Tanrikulu hello page avatar"
              style={{ transform: "translateX(-15%)" }}
            />
          </div>
        </div>
        <div className="col-xl-1 d-none d-xl-flex flex-column align-items-center justify-content-start order-xl-3">
          <button
            className="myButton2 fs-5 fw-5 my-5 px-3 py-0 ffRoboto"
            style={{
              transform: "rotate(270deg)",
            }}
            onClick={() => window.open("https://www.youtube.com/", "_blank")}
          >
            YouTube
          </button>
          <button
            className="myButton2 fs-5 fw-5 my-5 ffRoboto"
            style={{ transform: "rotate(270deg)" }}
            onClick={() =>
              window.open(
                "https://www.instagram.com/alp.ertanrikulu/",
                "_blank"
              )
            }
          >
            Instagram
          </button>
          <button
            className="myButton2 fs-5 fw-5 my-5 ffRoboto"
            style={{ transform: "rotate(270deg)" }}
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/alper-tanr%C4%B1kulu-85488817a/",
                "_blank"
              )
            }
          >
            LinkedIn
          </button>
          <button
            className="myButton2 fs-5 fw-5 mt-5 ffRoboto"
            style={{ transform: "rotate(270deg)" }}
            onClick={() =>
              window.open("https://github.com/alpertanrikulu", "_blank")
            }
          >
            GitHub
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hello;
