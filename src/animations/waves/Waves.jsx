import React from "react";
import "./waves.scss";

const Waves = () => {
  return (
    <div className="waves position-absolute z-n5 d-flex align-items-center justify-content-center">
      <div className="wave" style={{ animationDelay: "1s" }}></div>
      <div className="wave" style={{ animationDelay: "2s" }}></div>
      <div className="wave" style={{ animationDelay: "3s" }}></div>
      <div className="wave" style={{ animationDelay: "4s" }}></div>
      <div className="wave" style={{ animationDelay: "5s" }}></div>
      <div className="wave" style={{ animationDelay: "6s" }}></div>
      <div className="wave" style={{ animationDelay: "7s" }}></div>
      <div className="wave" style={{ animationDelay: "8s" }}></div>
      <div className="wave" style={{ animationDelay: "9s" }}></div>
      <div className="wave" style={{ animationDelay: "10s" }}></div>
      <div className="wave" style={{ animationDelay: "11s" }}></div>
      <div className="wave" style={{ animationDelay: "12s" }}></div>
      <div className="wave" style={{ animationDelay: "13s" }}></div>
      <div className="wave" style={{ animationDelay: "14s" }}></div>
    </div>
  );
};

export default Waves;
