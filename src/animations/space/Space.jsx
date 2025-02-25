import React from "react";
import "./space.css";
import Hatman from "./svg/hatman.svg";
import Saturn from "./svg/saturn.svg";
import Portal from "./svg/portal.svg";
import Kidnap from "./svg/kidnap.svg";
import Hatmans from "./svg/hatmans.svg";
import Alien from "./svg/alien.svg";

const Space = () => {
  return (
    <div>
      <img draggable="false" className="hatman" src={Hatman} alt="" />
      <img
        draggable="false"
        className="opacity-25 saturn"
        src={Saturn}
        alt=""
      />
      <img
        draggable="false"
        className="opacity-25 portal"
        src={Portal}
        alt=""
      />
      <img draggable="false" className="kidnap" src={Kidnap} alt="" />
      <img draggable="false" className="hatmans" src={Hatmans} alt="" />
      <img draggable="false" className="alien" src={Alien} alt="" />
    </div>
  );
};

export default Space;
