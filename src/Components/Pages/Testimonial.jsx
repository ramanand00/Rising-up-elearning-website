import React from "react";
import Header from "./Header";

export default function Testimonial() {
  return (
    <>
      <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          <div className="text-center">
            <h6 className="section-title bg-white text-center text-primary px-3">
              Testimonial
            </h6>
            <h1 className="mb-5">Our Students Say!</h1>
          </div>

          <div id="carouselExampleCaptions" className="carousel slide">
            <div className="carousel-inner position-relative">
              <div className="carousel-item active testimonial-item text-center">
                <img
                  className="border rounded-circle p-2 mx-auto mb-3"
                  src="/My-img/testimonial-1.jpg"
                  style={{ width: "80px", minHeight: "80px" }}
                  alt="..."
                />
                <h5 className="mb-0">Bibek Yadav </h5>
                <p>Student</p>
                <div className="testimonial-text bg-light text-center p-4">
                  <p className="mb-0">
                  "This platform has completely changed the way I learn. The user-friendly design, high-quality resources, and amazing community make it the best e-learning experience!"
                  </p>
                </div>
              </div>

              <div className="carousel-item text-center">
                <img
                  src="/My-img/testimonial-2.jpg"
                  className="d-block border rounded-circle p-2 mx-auto mb-3"
                  alt="..."
                  style={{ width: "80px", minHeight: "80px" }}
                />
                <h5 className="mb-0">Sandip Sah</h5>
                <p>Student</p>
                <div className="testimonial-text bg-light text-center p-4">
                  <p className="mb-0">
                  "The international certification is a huge plus! It adds great value to my resume and opens up global career opportunities."{" "}
                  </p>
                </div>
              </div>
              <div className="carousel-item text-center">
                <img
                  src="/My-img/testimonial-3.jpg"
                  className="d-block border rounded-circle p-2 mx-auto mb-3"
                  alt="..."
                  style={{ width: "80px", minHeight: "80px" }}
                />
                <h5 className="mb-0">Puskar Mandal</h5>
                <p>Student</p>
                <div className="testimonial-text bg-light text-center p-4">
                  <p className="mb-0">
                  "I love the flexibility of online classes! I can learn at my own pace, anytime and anywhere, without compromising my schedule."
                  </p>
                </div>
              </div>
              <div className="carousel-item text-center">
                <img
                  // src="/My-img/testimonial-4.jpg"
                  className="d-block border rounded-circle p-2 mx-auto mb-3"
                  alt="..."
                  style={{ width: "80px", minHeight: "80px" }}
                />
                <h5 className="mb-0">Grece Bhandari</h5>
                <p>Student</p>
                <div className="testimonial-text bg-light text-center p-4">
                  <p className="mb-0">
                  "This platform makes learning so easy and fun! The interactive courses and engaging content keep me motivated every day."{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="3"
                aria-label="Slide 4"
              ></button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
