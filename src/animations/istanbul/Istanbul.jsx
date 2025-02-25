import React from "react";
import "./Istanbul.css";

import Bikebwheel from "./svg/bisiklet/arka-tekerlek.svg";
import Bikefwheel from "./svg/bisiklet/on-tekerlek.svg";
import Bikeframe from "./svg/bisiklet/bisiklet-govde.svg";
import Umbrella from "./svg/bisiklet/semsiye.svg";
import Hatman from "./svg/bisiklet/hatman.svg";
import Lamba from "./svg/lambaa.svg";
import Sittingcat from "./svg/oturankedi.svg";
import Walkingcat from "./svg/yuruyenkedii.svg";
import Lookingcat from "./svg/bakankedi.svg";
import Galata from "./svg/galata.svg";
import Hazerfen from "./svg/hazerfen.svg";
import Bayrak from "./svg/bayrak.svg";

const Istanbul = () => {
  return (
    <div className="street z-n3">
      <div className="bikeframediv position-absolute z-n3 opacity-25">
        <img className="bikebwheel" src={Bikebwheel} alt="" />
        <img className="bikeframe" src={Bikeframe} alt="" />
        <img className="bikefwheel" src={Bikefwheel} alt="" />
        <img className="umbrella" src={Umbrella} alt="" />
        {/* <img className="hatman" src={Hatman} alt="" /> */}
      </div>
      <div className="galatacat">
        <img className="galata opacity-25" src={Galata} alt="" />
      </div>
      <img className="walkingcat opacity-25" src={Walkingcat} alt="" />
      <div className="rightlamb">
        <img className="sittingcat opacity-25" src={Sittingcat} alt="" />
        <img className="lookingcat opacity-25" src={Lookingcat} alt="" />
        <img className="lambar opacity-25" src={Lamba} alt="" />
      </div>
      <img className="lambal opacity-25" src={Lamba} alt="" />
      <hr className="ip opacity-25" />
      <img className="hazerfen" src={Hazerfen} alt="hazerfen ahmet çelebi" />
      <img
        className="bayrak opacity-25"
        src={Bayrak}
        alt="The Flag of Turkiye"
      />
    </div>
  );
};

export default Istanbul;
