import React from "react";
import Navbar from "../Pages/Navbar";
import Footer from "../Pages/Footer";
import { Link } from "react-router-dom";
import Coursestructure from "./Coursestructure";

export default function Fullstack() {
  const obj1 = {
    time: "0.1s",
    img: "/img/HTML.jpg",
    readlink: "https://en.wikipedia.org/wiki/html",
    join: "/courses/fullstack/html",
    // price: "Free for You",
    title: "HTML5 Tutorials",
    teachername: "Ramanand",
    review: 210,
    duration: "3.11 Hrs",
    totalstudent: "50",
  };

  const obj2 = {
    time: "0.3s",
    img: "/img/CSS.jpg",
    readlink: "https://en.wikipedia.org/wiki/css",
    join: "/courses/fullstack/css",
    // price: "Free for You",
    title: "CSS Tutorials",
    review: 237,
    teachername: "Ramanand",
    duration: "1.00 Hrs",
    totalstudent: "35",
  };

  const obj3 = {
    time: "0.5s",
    img: "/img/JavaScript.jpg",
    readlink: "https://en.wikipedia.org/wiki/javascript",
    join: "/courses/fullstack/javascript",
    // price: "Free for You",
    title: "JavaScript Tutorials",
    review: 174,
    teachername: "Ramanand",
    duration: "4.20 Hrs",
    totalstudent: "45",
  };

  const obj4 = {
    time: "0.7s",
    img: "/img/sql.jpg",
    readlink: "https://en.wikipedia.org/wiki/sql",
    join: "/courses/fullstack/sql",
    // price: "Free for You",
    title: "MySQL Tutorials",
    review: 123,
    teachername: "Ramanand",
    duration: "3.16 Hrs",
    totalstudent: "35",
  };

  const obj5 = {
    time: "0.1s",
    img: "/img/react.jpg",
    readlink:
      "https://en.wikipedia.org/wiki/Outline_of_web_design_and_web_development",
    join: "/courses/fullstack/react",
    // price: "Free for You",
    title: "React Js Tutorials",
    review: 34,
    teachername: "Ramanand",
    duration: "2.50 Hrs",
    totalstudent: "35",
  };

  const obj6 = {
    time: "0.3s",
    img: "/img/mongodb.jpg",
    readlink: "https://en.wikipedia.org/wiki/mongodb",
    join: "/courses/fullstack/mongodb",
    // price: "Free for You",
    title: "Mongodb Tutorials",
    review: 98,
    teachername: "Ramanand",
    duration: "1.50 Hrs",
    totalstudent: "35",
  };

  const obj7 = {
    time: "0.5s",
    img: "/img/express.jpg",
    readlink: "https://en.wikipedia.org/wiki/expressjs",
    join: "/courses/fullstack/express",
    // price: "Free for You",
    title: "Express Js Tutorials",
    review: 231,
    teachername: "Ramanand",
    duration: "1.30 Hrs",
    totalstudent: "35",
  };

  const obj8 = {
    time: "0.7s",
    img: "/img/nodejs.jpg",
    readlink: "https://en.wikipedia.org/wiki/nodejs",
    join: "/courses/fullstack/nodejs",
    // price: "Free for You",
    title: "Node JS Tutorials",
    review: 88,
    teachername: "Ramanand",
    duration: "1.50 Hrs",
    totalstudent: "35",
  };

  return (
    <>
      <Navbar />
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow>
            <h6 className="section-title bg-white text-center text-primary px-3">
              Courses
            </h6>
            <h1 className="mb-5">Full Stack Web Devlopment Courses</h1>
          </div>

          <div className="row g-4 justify-content-center">
            <Coursestructure data={obj1} />
            <Coursestructure data={obj2} />
            <Coursestructure data={obj3} />
            <Coursestructure data={obj5} />
            <Coursestructure data={obj8} />
            <Coursestructure data={obj4} />
            <Coursestructure data={obj6} />
            <Coursestructure data={obj7} />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
