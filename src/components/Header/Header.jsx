import React, { useEffect, useState } from "react";
import Logo from "../../assets/svg/logo.svg";
// import { Link } from "react-router-dom";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top py-2 px-5  ${
        scrolled && "frostedBg"
      }`}
    >
      <div className="container-fluid px-5">
        <a className="" href="/">
          <img src={Logo} alt="My homepage logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {/* <li className="nav-item mx-3">
              <a className="nav-link" aria-current="page" href="#">
                Home
              </a>
            </li> */}
            <li className="nav-item mx-3">
              <a className="nav-link" aria-current="page" href="/#summary">
                Summary
              </a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link" aria-current="page" href="/#skills">
                Skills
              </a>
            </li>
            <li className="nav-item mx-3">
              <a
                className="nav-link"
                aria-current="page"
                href="/#workExperiences"
              >
                Work experiences
              </a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link" aria-current="page" href="/#education">
                Education
              </a>
            </li>
            <li className="nav-item mx-3">
              <a href="https://alper-portfolio-1ewg6djpo-alper-tanrikulus-projects.vercel.app/contact">
                <button className="myButton ">
                  <span className="fs-5 fw-200 ffRoboto">Send me an email</span>
                </button>
              </a>
            </li>
            {/* <li className="nav-item dropdown mx-3">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                About me
              </a>
              <ul className="dropdown-menu mt-3" style={{ zIndex: "1100" }}>
                <li>
                  <a className="dropdown-item" href="#summary">
                    Summary
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#skills">
                    Skills
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#education">
                    Education
                  </a>
                </li>
              </ul>
            </li> */}
            {/* <li className="nav-item dropdown mx-3">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                My apps
              </a>
              <ul className="dropdown-menu mt-3">
                <li>
                  <a className="dropdown-item" href="#">
                    Olric's Word
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    My blog
                  </a>
                </li>
              </ul>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
