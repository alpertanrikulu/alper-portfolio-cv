import "./Contact.scss";
import BootstrapForm from "./BootstrapForm";
import Space from "../../animations/space/Space";

const Contact = () => {
  return (
    <>
      <div className="ffRoboto px-5 position-relative">
        <Space />
        <div style={{ height: "200px" }}></div>
        <div className="px-5" style={{ minHeight: "100vh" }}>
          <div className="row px-5 d-flex justify-content-between">
            <div className="col-12 col-xl-5 ">
              <div
                className="py-4 px-3 fs-4 d-flex flex-column justify-content-center"
                style={{
                  backgroundColor: "rgb(29, 38, 89)",
                  minHeight: "300px",
                }}
              >
                <div className="d-flex my-3">
                  <div>
                    <p className="mb-0 opacity-50" style={{ width: "150px" }}>
                      Phone:
                    </p>
                  </div>
                  <a
                    className="text-decoration-none text-reset opacity-100"
                    href="tel:+905555555555"
                  >
                    0555 555 555
                  </a>
                </div>
                <div className="d-flex my-3">
                  <div>
                    <p className="mb-0 opacity-50" style={{ width: "150px" }}>
                      Email:
                    </p>
                  </div>
                  <p className="mb-0">
                    <a
                      className="text-decoration-none text-reset opacity-100"
                      href="email:tanriklualper@gmail.com"
                      style={{ wordBreak: "break-all" }}
                    >
                      tanriklualper@gmail.com
                    </a>
                  </p>
                </div>
                <div className="d-flex my-3">
                  <div>
                    <p className="mb-0 opacity-50" style={{ width: "150px" }}>
                      Address:
                    </p>
                  </div>
                  <p className="mb-0">
                    <a
                      className="text-decoration-none text-reset opacity-100"
                      href="email:tanriklualper@gmail.com"
                    >
                      Osmangazi Mah. Kahraman SK. 15/1 Darica/Kocaeli
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-xl-7 py-3 mt-5 mt-xxl-0">
              <BootstrapForm />
            </div>
          </div>
        </div>
      </div>
      <div style={{ height: "150px" }}></div>
    </>
  );
};

export default Contact;
