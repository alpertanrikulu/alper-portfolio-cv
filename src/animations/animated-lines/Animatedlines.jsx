import React from "react";
import "./Animatedlines.scss";
import Lines from "../../assets/svg/slines.svg";

const Animatedlines = () => {
  return (
    <div className="animatedLinesDiv d-none d-lg-block opacity-25">
      <img className="animatedLines" src={Lines} alt="animated lines" />
    </div>
  );
};

export default Animatedlines;
