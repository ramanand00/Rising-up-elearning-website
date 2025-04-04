import React from "react";
import Navbar from "../Pages/Navbar";
import Footer from "../Pages/Footer";
import Coursestructure from "./Coursestructure";

export default function Programming() {
  const obj1 = {
    time: "0.1s",
    img: "/My-img/java.png",
    readlink: "https://en.wikipedia.org/wiki/java",
    join: "/cources/programming/java",
    // price: "Free For You",
    review: 285,
    title: "Java Full Course",
    teachername: "Ramanand",
    duration: "4.50 Hrs",
    totalstudent: "145",
  };

  const obj2 = {
    time: "0.3s",
    img: "/img/Adv_java.jpg",
    readlink: "https://en.wikipedia.org/wiki/Advance java",
    join: "/cources/programming/advJava",
    // price: "Free For You",
    review: 156,
    title: "Advance Java",
    teachername: "Ramanand",
    duration: "4.13 Hrs",
    totalstudent: "75",
  };

  const obj3 = {
    time: "0.5s",
    img: "/img/JavaScript.jpg",
    readlink: "https://en.wikipedia.org/wiki/JavaScript",
    join: "/cources/programming/javascript",
    // price: "Free For You",
    review: 115,
    title: "JavaScript Tutorials",
    teachername: "Ramanand",
    duration: "4.50 Hrs",
    totalstudent: "135",
  };

  const obj4 = {
    time: "0.6s",
    img: "/img/nodejs.jpg",
    readlink: "https://en.wikipedia.org/wiki/nodejs",
    join: "/courses/mern/express",
    // price: "Free For You",
    review: 85,
    title: "Node JS Tutorials",
    teachername: "Ramanand",
    duration: "1.50 Hrs",
    totalstudent: "35",
  };
  return (
    <>
      <Navbar />
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">
              Courses
            </h6>
            <h1 className="mb-5">Programming Languages Tutorials</h1>
          </div>
          <div className="row g-4 justify-content-center">
            <Coursestructure data={obj1} />
            <Coursestructure data={obj2} />
            <Coursestructure data={obj3} />
            <Coursestructure data={obj4} />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
