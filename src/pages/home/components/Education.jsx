import React, { useRef, useEffect, useState } from "react";
import "./styles/Education.scss";
import Logouu from "../../../assets/svg/logouu.svg";
import Logogtu from "../../../assets/svg/logogtu.svg";
import Hatmanhome from "../../../animations/hatmanhome/Hatmanhome";

const Education = () => {
  const [selected, setSelected] = useState("c1");
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

  const handleChange = (event) => {
    setSelected(event.target.id); // Seçilen radio butonunun id'sini state olarak güncelliyoruz
  };

  return (
    <div
      className="pt-5 mb-0 position-relative"
      id="education"
      style={{ minHeight: "125vh" }}
    >
      <Hatmanhome />
      <h2
        className={`display-3 text-center mt-5 mb-0 ${
          isVisible1 ? "journeyTtitleIn" : "journeyTtitleOut"
        }`}
        ref={containerRef1}
      >
        Education
      </h2>
      <div className="education-wrapper d-flex justify-content-center align-items-center">
        <div className="education-container pb-5">
          {/* İlk radio butonu */}
          <input
            type="radio"
            name="slide"
            id="c1"
            checked={selected === "c1"} // Eğer selected state'i "c1" ise bu radio butonu seçili olacak
            onChange={handleChange} // Değişim olduğunda handleChange fonksiyonu çalışacak
          />
          <label className="education-card" htmlFor="c1">
            <div className="education-row">
              <div className="education-icon">
                <img src={Logouu} alt="Uludag University Logo" />
              </div>
              <div className="education-description">
                <h4 className="fs-2 fw-bold ffRoboto text-black">
                  Uludağ University
                </h4>
                <p className="ffRoboto text-black fs-5">
                  Faculty of Arts and Sciences (2017-2021) <br />
                  Bachelor of Molecular Biology and Genetics
                </p>
                <ul className="ffRoboto text-black">
                  <li>GPA: 3.61</li>
                  <li>
                    Earned 3rd Place in the Department, Graduated with
                    Distinction
                  </li>
                </ul>
              </div>
            </div>
          </label>

          {/* İkinci radio butonu */}
          <input
            type="radio"
            name="slide"
            id="c2"
            checked={selected === "c2"}
            onChange={handleChange}
          />
          <label className="education-card" htmlFor="c2">
            <div className="education-row">
              <div className="education-icon">
                <img src={Logogtu} alt="Gebze Technical University Logo" />
              </div>
              <div className="education-description ffRoboto text-black">
                <h4 className="fs-2 fw-bold">Gebze Technical University</h4>
                <p className="fs-5 text-black">
                  Institute of Science (2023-Ongoing) <br />
                  Master of Bioinformatics and System Biology
                </p>
                <ul>
                  <li>GPA: 3.21</li>
                </ul>
              </div>
            </div>
          </label>

          {/* Üçüncü radio butonu */}
          {/* <input
            type="radio"
            name="slide"
            id="c3"
            checked={selected === "c3"}
            onChange={handleChange}
          />
          <label className="education-card" htmlFor="c3">
            <div className="education-row">
              <div className="education-icon"></div>
              <div className="education-description">
                <Stack />
                <h4>Experiences</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellendus, numquam.
                </p>
              </div>
            </div>
          </label> */}
        </div>
      </div>
      <hr className="opacity-25 mt-0 mb-5" />
      <div style={{ height: "200px" }}></div>
    </div>
  );
};

export default Education;
