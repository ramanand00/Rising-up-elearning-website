import React from "react";

export default function Footer() {
  return (
    <>
      <div
        className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h4 className="text-white mb-3">Quick Link</h4>
              <a className="btn btn-link" href = "/about">
                About Us
              </a>
              <a className="btn btn-link" href = "/contact">
                Contact Us
              </a>
              <a className="btn btn-link" href = "/privacypolicy">
                Privacy Policy
              </a>
              <a className="btn btn-link" href = "/terms&condition">
                Terms &amp; Condition
              </a>
              <a className="btn btn-link" href = "/faq">
                FAQs &amp; Help
              </a>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-white mb-3">Contact</h4>
              <p className="mb-2">
                <i className="fa fa-map-marker-alt me-3" />
                Tokha-5, Kathmandu, Nepal
              </p>
              <p className="mb-2">
                <i className="fa fa-phone-alt me-3" />
                +977 9827399860
              </p>
              <p className="mb-2">
                <i className="fa fa-envelope me-3" />
                softriseup@gmail.com
              </p>
              <div className="d-flex pt-2">
                <a
                  className="btn btn-outline-light btn-social"
                  href="https://x.com/csit_ramanand"
                  target="_blank"
                >
                  <i className="fab fa-twitter" />
                </a>


                <a
                  className="btn btn-outline-light btn-social"
                  href="https://www.facebook.com/profile.php?id=100058685671028"
                  target="_blank"
                >
                  <i className="fab fa-facebook-f" />
                </a>


                <a
                  className="btn btn-outline-light btn-social"
                  href="https://github.com/ramanand00"
                  target="_blank"
                >
                  <i className="fab fa-github" />
                </a>


                <a
                  className="btn btn-outline-light btn-social"
                  href="https://www.linkedin.com/in/ramanand-mandal-24a124324/"
                  target="_blank"
                >
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-white mb-3">Gallery</h4>
              <div className="row g-2 pt-2">
                <div className="col-4">
                  <img
                    className="img-fluid bg-light p-1"
                    src="/My-img/course-1.jpg"
                    alt=""
                  />
                </div>
                <div className="col-4">
                  <img
                    className="img-fluid bg-light p-3"
                    src="/My-img/java.png"
                    alt=""
                  />
                </div>
                <div className="col-4">
                  <img
                    className="img-fluid bg-light p-1"
                    src="/My-img/course-3.webp"
                    alt=""
                  />
                </div>
                <div className="col-4">
                  <img
                    className="img-fluid bg-light p-3"
                    src="/My-img/java.png"
                    alt=""
                  />
                </div>
                <div className="col-4">
                  <img
                    className="img-fluid bg-light p-1"
                    src="/My-img/course-3.webp"
                    alt=""
                  />
                </div>
                <div className="col-4">
                  <img
                    className="img-fluid bg-light p-1"
                    src="/My-img/course-1.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-white mb-3">Newsletter</h4>
              {/* <p>
                This website is a Final Year project of IT Department DSCET,
                Chennai.
              </p> */}
              <div
                className="position-relative mx-auto"
                style={{ maxWidth: "400px" }}
              >
                <input
                  className="form-control border-0 w-100 py-3 ps-4 pe-5"
                  type="text"
                  placeholder="Your email"
                />
                <button
                  type="button"
                  className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
                >
                  SignUp
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                ©{" "} <strong>Rising-up</strong>
                {/* <a className="border-bottom" href>
                  Rising-up
                </a> */}
                , All Right Reserved. Designed By{" "} <strong>SoftRiseup</strong>
                {/* <a
                  className="border-bottom"
                  href="https://www.linkedin.com/in/Ramanand-kumar-mandal"
                  target="_blank"
                >
                  <strong>SoftRiseup</strong>
                </a> */}
                <br />
                <br />
              </div>
              <div className="col-md-6 text-center text-md-end">
                <div className="footer-menu">
                  <a href = "#">Home</a>
                  <a href = "#">Cookies</a>
                  <a href = "#">Help</a>
                  <a href = "#">FQAs</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
