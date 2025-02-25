import React from "react";
import "./Home.scss";
import Hello from "./components/Hello";
import Lines from "../../animations/animated-lines/Animatedlines";
import Banner from "./components/Banner";
import Education from "./components/Education";
import Works from "./components/Works";
import Skills from "./components/Skills";

const Home = () => {
  return (
    <div>
      <div style={{ height: "120px", width: "100wv" }}></div>
      <Hello />
      <Lines />
      {/* <Rlines /> */}
      <hr className="opacity-25 my-0" />
      {/* <Banner /> */}
      <Banner />
      {/* <Skills /> */}
      <Skills />
      <Works />
      <hr className="opacity-25 my-0" />
      <Education />
      {/* <hr className="opacity-25 my-0" /> */}
    </div>
  );
};

export default Home;
