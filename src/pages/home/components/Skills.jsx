import React, { useRef, useEffect, useState } from "react";
import Darrow from "../../../assets/svg/darrow.svg";
import "./styles/Skills.scss";
import Universe from "../../../animations/universe/Universe";
import Pangea from "../../../animations/pangea/Pangea";
import Cv from "../../../assets/CV-en-fd-Alper_tanrikulu.pdf";

// import "bootstrap/dist/js/bootstrap.bundle";

const Skills = () => {
  const containerRef1 = useRef(null);
  const containerRef2 = useRef(null);
  const containerRef3 = useRef(null);
  const containerRef4 = useRef(null);
  const containerRef5 = useRef(null);

  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const [isVisible4, setIsVisible4] = useState(false);
  const [isVisible5, setIsVisible5] = useState(false);

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
      if (entry.target === containerRef5.current) {
        setIsVisible5(entry.isIntersecting);
      }
    });
  };

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  useEffect(() => {
    // Tüm popover butonlarını seç
    const popoverButtons = document.querySelectorAll(
      "[data-bs-toggle='popover']"
    );
    popoverButtons.forEach((button) => {
      // Bootstrap Popover başlat
      new bootstrap.Popover(button, {
        // content: "Hello popover content!", // Popover içeriği
        // title: "Popover Title", // Başlık
        trigger: "click", // Tetikleme türü
      });
    });

    // Temizleme işlemi (componentWillUnmount)
    return () => {
      popoverButtons.forEach((button) => {
        const popoverInstance = bootstrap.Popover.getInstance(button);
        if (popoverInstance) {
          popoverInstance.dispose();
        }
      });
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    if (containerRef1.current) observer.observe(containerRef1.current);
    if (containerRef2.current) observer.observe(containerRef2.current);
    if (containerRef3.current) observer.observe(containerRef3.current);
    if (containerRef4.current) observer.observe(containerRef4.current);
    if (containerRef5.current) observer.observe(containerRef5.current);

    return () => {
      if (containerRef1.current) observer.unobserve(containerRef1.current);
      if (containerRef2.current) observer.unobserve(containerRef2.current);
      if (containerRef3.current) observer.unobserve(containerRef3.current);
      if (containerRef4.current) observer.unobserve(containerRef4.current);
      if (containerRef5.current) observer.unobserve(containerRef5.current);
    };
  }, [
    containerRef1,
    containerRef2,
    containerRef3,
    containerRef4,
    containerRef5,
    options,
  ]);

  return (
    <div style={{ minHeight: "110vh" }}>
      {/* <pointer-particles
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 2, // En arka plana yerleştirir
        }}
      ></pointer-particles> */}
      <div className="container d-flex justify-content-center">
        <div className="pt-5 col-11 text-center" id="summary">
          <div ref={containerRef1} className="row pt-5">
            <div className="col-xl-7">
              <h2
                className={`display-3 text-xl-start ${
                  isVisible1 ? "journeyTtitleIn" : "journeyTtitleOut"
                }`}
              >
                This Is My Little Journey To Getting Here
              </h2>
            </div>
            <div className="col-xl-1"></div>
            <div className="col-xl-4">
              <div
                className="text-end ffRoboto text-center pt-5"
                style={{ width: "100wv" }}
              >
                <a href={Cv} download="CV-en-fd-Alper_tanrikulu.pdf">
                  <button
                    className={`myButton ${
                      isVisible1 ? "journeyTtitleIn" : "journeyTtitleOut"
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
              </div>
            </div>
            <div className="row">
              <div ref={containerRef2} className="col-12">
                <p
                  className={`pt-5 fs-4 text-xl-start ffRoboto mb-0 ${
                    isVisible2 ? "journeyTtitleIn" : "journeyTtitleOut"
                  }`}
                >
                  <span className="opacity-50">
                    I am someone who loves both technology and biology. I am
                    pursuing a career in bioinformatics, where computational
                    approaches are developed for biological systems. I also take
                    pleasure in enhancing my programming abilities, specifically
                    as a hobbyist creating web applications using Django.
                    Additionally, I work on educational projects to stay updated
                    and store them on my GitHub account. I thrive in workflows
                    and enjoy fast-paced evolving processes. I am responsible
                    and well-suited for teamwork.
                  </span>
                </p>
              </div>
              <div id="skills"></div>
            </div>
          </div>
        </div>
      </div>
      <Universe />
      {/* <h2 className="text-center display-3 my-5">Skills</h2> */}
      <hr className="my-0 opacity-25 border-2" />
      <Pangea />
      <div
        className={`container d-flex flex-column align-items-center skillOpacity py-4 ${
          isVisible3 ? "journeyTtitleIn" : "journeyTtitleOut"
        }`}
        ref={containerRef3}
      >
        <div className="row col-11">
          <div className="col-12 text-center">
            <h3 className="display-3 my-5">Frontend Technologies</h3>
          </div>
        </div>
        <div className="row col-10 mx-auto fs-2">
          <div className="my-1 col-6 col-md-3 text-center">
            <button
              type="button"
              className="ffRoboto myButton2"
              data-bs-toggle="modal"
              data-bs-target="#bootstrapModal"
            >
              Bootstrap
            </button>
          </div>
          <div className="my-1 col-6 col-md-3 text-center">
            <button
              type="button"
              className="ffRoboto myButton2"
              data-bs-toggle="modal"
              data-bs-target="#materialuiModal"
            >
              Material UI
            </button>
          </div>
          <div className="my-1 col-6 col-md-3 text-center">
            <button
              type="button"
              className="ffRoboto myButton2"
              data-bs-toggle="modal"
              data-bs-target="#reactModal"
            >
              React
            </button>
          </div>
          <div className="my-1 col-6 col-md-3 text-center">
            <button
              type="button"
              className="ffRoboto myButton2"
              data-bs-toggle="modal"
              data-bs-target="#nextjsModal"
            >
              Next.JS
            </button>
          </div>
        </div>
      </div>
      <div
        className={`container d-flex flex-column align-items-center skillOpacity py-4 ${
          isVisible4 ? "journeyTtitleIn" : "journeyTtitleOut"
        }`}
        ref={containerRef4}
      >
        <div className="row col-11">
          <div className="col-12 text-center">
            <h3 className="display-3 my-5">Backend Technologies</h3>
          </div>
        </div>
        <div className="row col-10 mx-auto fs-2">
          <div className="my-1 col-6 col-md-3 text-center">
            <button
              type="button"
              className="ffRoboto myButton2"
              data-bs-toggle="modal"
              data-bs-target="#fastapiModal"
            >
              Fast Api
            </button>
          </div>
          <div className="my-1 col-6 col-md-3 text-center">
            <button
              type="button"
              className="ffRoboto myButton2"
              data-bs-toggle="modal"
              data-bs-target="#flaskModal"
            >
              Flask
            </button>
          </div>
          <div className="my-1 col-6 col-md-3 text-center">
            <button
              type="button"
              className="ffRoboto myButton2"
              data-bs-toggle="modal"
              data-bs-target="#djangoModal"
            >
              Django
            </button>
          </div>
          <div className="my-1 col-6 col-md-3 text-center">
            <button
              type="button"
              className="ffRoboto myButton2"
              data-bs-toggle="modal"
              data-bs-target="#sanityModal"
            >
              Sanity
            </button>
          </div>
        </div>
      </div>
      <div
        className={`container d-flex flex-column align-items-center skillOpacity py-4 ${
          isVisible5 ? "journeyTtitleIn" : "journeyTtitleOut"
        }`}
        ref={containerRef5}
      >
        <div className="row col-11">
          <div className="col-12 text-center">
            <h3 className="display-3 my-5">Tools & Platforms</h3>
          </div>
        </div>
        <div className="row col-10 mx-auto fs-2">
          <div className="my-1 col-6 col-md-3 text-center">
            <button
              type="button"
              className="ffRoboto myButton2"
              data-bs-toggle="modal"
              data-bs-target="#figmaModal"
            >
              Figma
            </button>
          </div>
          <div className="my-1 col-6 col-md-3 text-center">
            <button
              type="button"
              className="ffRoboto myButton2"
              data-bs-toggle="modal"
              data-bs-target="#githubModal"
            >
              Git & Git Hub
            </button>
          </div>
          <div className="my-1 col-6 col-md-3 text-center">
            <button
              type="button"
              className="ffRoboto myButton2"
              data-bs-toggle="modal"
              data-bs-target="#tsqlModal"
            >
              T-SQL
            </button>
          </div>
          <div className="my-1 col-6 col-md-3 text-center">
            <button
              type="button"
              className="ffRoboto myButton2"
              data-bs-toggle="modal"
              data-bs-target="#jiraModal"
            >
              Jira
            </button>
          </div>
        </div>
      </div>

      {/* Frontend Modals */}
      <div
        className="modal fade ffRoboto"
        id="bootstrapModal"
        tabIndex="-1"
        aria-labelledby="bootstrapModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-1" id="bootstrapModalLabel">
                What is Bootstrap?
              </h1>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body fs-4">
              Bootstrap is a powerful and widely used open-source front-end
              framework that helps developers create responsive and mobile-first
              websites quickly. It provides a collection of pre-designed
              components, including grids, buttons, forms, and modals, along
              with a flexible CSS and JavaScript framework. With Bootstrap,
              developers can ensure cross-browser compatibility and streamline
              their workflow by leveraging its extensive documentation and
              customization options.
            </div>
            <div className="modal-footer">
              <a
                href="https://getbootstrap.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="myButton2">
                  Go To Page
                </button>
              </a>
              <button
                type="button"
                className="myButton"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade ffRoboto"
        id="materialuiModal"
        tabIndex="-1"
        aria-labelledby="materialuiModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-1 fs-5" id="materialuiModalLabel">
                What is Material UI?
              </h1>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body fs-4">
              Material UI (MUI) is a popular React component library that
              implements Google's Material Design principles. It provides a set
              of pre-styled, customizable components such as buttons, cards,
              dialogs, and form elements, making it easier to create modern,
              responsive, and visually appealing web applications. With built-in
              theming, accessibility support, and performance optimizations, MUI
              helps developers build consistent and scalable user interfaces
              efficiently.{" "}
            </div>
            <div className="modal-footer">
              <a
                href="https://mui.com/material-ui/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="myButton2">
                  Go To Page
                </button>
              </a>
              <button
                type="button"
                className="myButton"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade ffRoboto"
        id="reactModal"
        tabIndex="-1"
        aria-labelledby="reactModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-1 fs-5" id="reactModalLabel">
                What is React?
              </h1>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body fs-4">
              React is a popular open-source JavaScript library for building
              user interfaces, primarily for single-page applications (SPAs).
              Developed by Facebook, it allows developers to create reusable UI
              components and manage the application's state efficiently using a
              virtual DOM. React follows a component-based architecture and
              supports features like hooks, props, and context API, making it a
              powerful tool for creating dynamic and interactive web
              applications.
            </div>
            <div className="modal-footer">
              <a
                href="https://react.dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="myButton2">
                  Go To Page
                </button>
              </a>
              <button
                type="button"
                className="myButton"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade ffRoboto"
        id="nextjsModal"
        tabIndex="-1"
        aria-labelledby="nextjsModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-1 fs-5" id="nextjsModalLabel">
                What is Next.js?
              </h1>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body fs-4">
              Next.js is a powerful React framework that enables server-side
              rendering (SSR), static site generation (SSG), and client-side
              rendering (CSR) for building high-performance web applications.
              Developed by Vercel, it offers features like automatic routing,
              API routes, built-in image optimization, and improved SEO
              capabilities. With its hybrid rendering approach and support for
              full-stack development, Next.js is widely used for modern web
              applications, including e-commerce, blogs, and enterprise
              solutions.{" "}
            </div>
            <div className="modal-footer">
              <a
                href="https://nextjs.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="myButton2">
                  Go To Page
                </button>
              </a>
              <button
                type="button"
                className="myButton"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Backend Modals */}
      <div
        className="modal fade ffRoboto"
        id="fastapiModal"
        tabIndex="-1"
        aria-labelledby="fastapiModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-1 fs-5" id="fastapiModalLabel">
                What is FastAPI?
              </h1>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body fs-4">
              FastAPI is a high-performance web framework for building APIs with
              Python. It supports asynchronous programming, making it fast and
              scalable. With automatic OpenAPI and Swagger documentation
              generation, it simplifies API development and testing. FastAPI
              also provides built-in validation using Python type hints,
              ensuring robust and efficient applications.
            </div>
            <div className="modal-footer">
              <a
                href="https://flask.palletsprojects.com/en/stable/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="myButton2">
                  Go To Page
                </button>
              </a>
              <button
                type="button"
                className="myButton"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade ffRoboto"
        id="flaskModal"
        tabIndex="-1"
        aria-labelledby="flaskModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-1 fs-5" id="flaskModalLabel">
                What is Flask?
              </h1>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body fs-4">
              Flask is a lightweight and flexible web framework for Python,
              designed for building web applications and APIs. It follows a
              minimalistic approach, providing essential tools while allowing
              developers to extend functionality with third-party libraries.
              Flask is easy to learn, making it a great choice for beginners,
              yet powerful enough for complex applications. It supports Jinja2
              templating, routing, and middleware integration, making web
              development simple and efficient.
            </div>
            <div className="modal-footer">
              <a
                href="https://flask.palletsprojects.com/en/stable/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="myButton2">
                  Go To Page
                </button>
              </a>
              <button
                type="button"
                className="myButton"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade ffRoboto"
        id="djangoModal"
        tabIndex="-1"
        aria-labelledby="djangoModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-1 fs-5" id="djangoModalLabel">
                What is Django?
              </h1>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body fs-4">
              Django is a high-level Python web framework that promotes rapid
              development and clean, pragmatic design. It follows the
              "batteries-included" philosophy, providing built-in features like
              authentication, database management with ORM, and an admin panel.
              Django follows the Model-View-Template (MVT) architecture, making
              it easy to develop scalable and secure web applications. With its
              strong community support and robust security features, Django is
              widely used for building everything from simple websites to
              complex web applications.
            </div>
            <div className="modal-footer">
              <a
                href="https://www.django-rest-framework.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="myButton2">
                  Go To Page
                </button>
              </a>
              <button
                type="button"
                className="myButton"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade ffRoboto"
        id="sanityModal"
        tabIndex="-1"
        aria-labelledby="sanityModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-1 fs-5" id="sanityModalLabel">
                What is Sanity CMS?
              </h1>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body fs-4">
              Sanity CMS is a headless content management system designed for
              flexibility and real-time collaboration. It allows developers to
              structure content using a customizable schema and provides an
              intuitive, customizable editing interface. With its GROQ query
              language and API-first approach, Sanity enables seamless
              integration with modern web frameworks like React, Next.js, and
              Vue. Its real-time capabilities and structured content approach
              make it a powerful choice for dynamic and scalable applications.
            </div>
            <div className="modal-footer">
              <a
                href="https://www.sanity.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="myButton2">
                  Go To Page
                </button>
              </a>
              <button
                type="button"
                className="myButton"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Tools & platforms */}
      <div
        className="modal fade ffRoboto"
        id="figmaModal"
        tabIndex="-1"
        aria-labelledby="figmaModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-1 fs-5" id="figmaModalLabel">
                What is Figma?
              </h1>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body fs-4">
              Figma is a cloud-based design and prototyping tool used for
              creating user interfaces, wireframes, and interactive prototypes.
              It enables real-time collaboration, allowing multiple users to
              work on the same project simultaneously. With its intuitive
              interface, powerful design components, and plugins, Figma
              streamlines the UI/UX design process. Its browser-based nature
              eliminates the need for installations, making it accessible from
              anywhere. Figma is widely used by designers and developers for
              creating modern, responsive, and visually appealing digital
              experiences.
            </div>
            <div className="modal-footer">
              <a
                href="https://www.figma.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="myButton2">
                  Go To Page
                </button>
              </a>
              <button
                type="button"
                className="myButton"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade ffRoboto"
        id="githubModal"
        tabIndex="-1"
        aria-labelledby="githubModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-1 fs-5" id="githubModalLabel">
                What is Git & GitHub?
              </h1>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body fs-4">
              <p>
                Git is a distributed version control system that helps
                developers track changes in their code, collaborate efficiently,
                and manage different versions of a project. It enables
                branching, merging, and reverting changes, making teamwork more
                organized and error-free.
              </p>
              <p>
                GitHub, on the other hand, is a cloud-based platform built on
                Git, providing a collaborative environment for hosting, sharing,
                and managing code repositories. It offers features like pull
                requests, issue tracking, and CI/CD integrations, making it an
                essential tool for open-source projects and professional
                software development.
              </p>
            </div>
            <div className="modal-footer">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="myButton2">
                  Go To Page
                </button>
              </a>
              <button
                type="button"
                className="myButton"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade ffRoboto"
        id="tsqlModal"
        tabIndex="-1"
        aria-labelledby="tsqlModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-1 fs-5" id="tsqlModalLabel">
                What is Transact-SQL?
              </h1>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body fs-4">
              Transact-SQL (T-SQL) is an extension of SQL (Structured Query
              Language) used primarily in Microsoft SQL Server. It includes
              procedural programming features like variables, loops, and
              conditionals, allowing for more complex database operations beyond
              standard SQL queries. T-SQL enables the creation of stored
              procedures, triggers, and functions, improving performance and
              security in database management. It is widely used for handling
              transactions, data manipulation, and administrative tasks in
              enterprise-level applications.
            </div>
            <div className="modal-footer">
              <a
                href="https://learn.microsoft.com/en-us/sql/t-sql/tutorial-writing-transact-sql-statements?view=sql-server-ver16"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="myButton2">
                  Go To Page
                </button>
              </a>
              <button
                type="button"
                className="myButton"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade ffRoboto"
        id="jiraModal"
        tabIndex="-1"
        aria-labelledby="jiraModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-1 fs-5" id="jiraModalLabel">
                What is Jira?
              </h1>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body fs-4">
              Jira is a powerful project management and issue-tracking tool
              developed by Atlassian, widely used in software development and
              agile workflows. It helps teams plan, track, and manage projects
              with features like Scrum and Kanban boards, customizable
              workflows, and detailed reporting. Jira enables efficient
              collaboration, bug tracking, and sprint management, making it an
              essential tool for teams following Agile and DevOps methodologies.
              Its integrations with various development tools streamline the
              software development lifecycle.
            </div>
            <div className="modal-footer">
              <a
                href="https://www.atlassian.com/software/jira"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="myButton2">
                  Go To Page
                </button>
              </a>
              <button
                type="button"
                className="myButton"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-5 mb-0 opacity-25" />
    </div>
  );
};

export default Skills;
