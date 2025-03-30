import React from "react";
import "../../assets/css/Slide.css";
import { Link } from "react-router-dom";
import video from "/img/video1.mp4";
import video5 from "/img/video5.mp4";

export default function Slide() {
  return (
    <>
      <div
        id="carouselExampleControlsNoTouching"
        className="carousel slide"
        data-bs-touch="false"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="owl-carousel-item position-relative">
              {/* <video className="img-fluid" src="/my-img/vid-1.mp4" alt="" /> */}
              <video className="img-fluid" src={video} autoPlay loop muted />
              <div
                className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
                style={{ background: "rgba(24, 29, 56, .7)" }}
              >
                <div className="container">
                  <div className="row justify-content-start">
                    <div className="col-sm-10 col-lg-8">
                      <h6 className="text-primary text-uppercase mb-2 animated slideInDown">
                        Best Platform for Learnings
                      </h6>
                      <h1 className="display-4 text-white animated slideInDown">
                      🌟 Welcome to Rising Up 
                      </h1>
                      <p className="fs-5 text-white mb-4 pb-2">
                      Welcome to Rising Up, the ultimate e-learning platform for programming enthusiasts! 💻✨ Whether you're a beginner taking your first steps in coding or an expert looking to sharpen your skills, we've got you covered!{" "}
                      </p>
                      <Link
                        to=""
                        className="btn btn-primary py-md-3 px-md-3 me-4 animated slideInLeft z-5"
                      >
                        Read More
                      </Link>
                      <Link
                        to="/courses"
                        className="btn btn-primary py-md-3 px-md-4 animated slideInRight"
                      >
                        Enroll Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="owl-carousel-item position-relative">
            <video className="img-fluid" src={video5} autoPlay loop muted />
              <div
                className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
                style={{ background: "rgba(24, 29, 56, .7)" }}
              >
                <div className="container">
                  <div className="row justify-content-start">
                    <div className="col-sm-10 col-lg-8">
                      <h6 className="text-primary text-uppercase mb-2 animated slideInDown">
                        Best Platform for Learnings
                      </h6>
                      <h1 className="display-4 text-white animated slideInDown">
                        Get Educated Online From Your Home
                      </h1>
                      <p className="fs-5 text-white mb-4 pb-2">
                      "Level up your skills with eLearn! 🚀 Unlock knowledge, grow smarter, and achieve your goals—one course at a time. Start learning today! 📚✨"
                      </p>
                      <Link
                        to=""
                        className="btn btn-primary py-md-3 px-md-4 me-4 animated slideInLeft z-5"
                      >
                        Read More
                      </Link>
                      <Link
                        to="/courses"
                        className="btn btn-primary py-md-3 px-md-4 animated slideInRight"
                      >
                        Enroll Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControlsNoTouching"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControlsNoTouching"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
