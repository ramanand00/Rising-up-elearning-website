import React from "react";
import video from "/img/video7.mp4";

export default function About() {
  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div
              className="col-lg-6 wow fadeInUp"
              data-wow-delay="0.1s"
              style={{ minHeight: "400px" }}
            >
              <div className="position-relative h-100">
                <video className="img-fluid position-absolute w-100 h-100" src={video} autoPlay loop muted />
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
              <h6 className="section-title bg-white text-start text-primary pe-3">
                About Us
              </h6>
              <h1 className="mb-4">Welcome to RISING-UP </h1>
              <p className="mb-4">
              Unlock a world of possibilities with our interactive courses, expert instructors, and state-of-the-art learning tools. Whether you're a student, professional, or lifelong learner, our platform makes education flexible, engaging, and accessible from anywhere.

Join our thriving community and take your learning journey to new heights!{" "}
              </p>
              <p className="mb-4">
                Join our community of lifelong learners and discover the endless
                opportunities for growth and development.
              </p>
              <div className="row gy-2 gx-4 mb-4">
                <div className="col-sm-6">
                  <p className="mb-0">
                    {/* <i className="fa fa-arrow-right text-primary me-2" /> */}
                    ✅ Skilled Instructors
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    {/* <i className="fa fa-arrow-right text-primary me-2" /> */}
                    ✅ Online Classes
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    {/* <i className="fa fa-arrow-right text-primary me-2" /> */}
                    ✅ Engage in flexible
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    {/* <i className="fa fa-arrow-right text-primary me-2" /> */}
                    ✅ Supportive Community
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    {/* <i className="fa fa-arrow-right text-primary me-2" /> */}
                    ✅ high-quality learning.
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    {/* <i className="fa fa-arrow-right text-primary me-2" /> */}
                    ✅ International Certificate
                  </p>
                </div>
              </div>
              {/* <a className="btn btn-primary py-3 px-5 mt-2" href>Read More</a> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
