import React from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";


import "../assets/css/homepage.css";
import "../assets/img/courses.jpg";
import aboutUs from "../assets/img/courses.jpg";
import CyberSecurity from "../assets/img/CyberSecurity.jpg";
import DataScience from "../assets/img/dataScience.jpg";
import programming from "../assets/img/programming.jpg";
import FooterComponent from "../components/FooterComponent";


const Homepage = () => {
  return (
    <div>
      <Navbar />

      <div className="flex flex-row justify-center">
        <Carousel />
      </div>

      <div className=" text-primary-replyBlue-600 flex flex-row flex-wrap justify-center space-y-5 m-5 space-x-5">
        <div className="w-80 text-primary-replyBlue-600 mt-5 border transition ease-in-out  delay-100 flex flex-col justify-start align-middle text-center py-5 px-4 hover:bg-primary-replyBlue-600 hover:text-white">
          <FontAwesomeIcon
            className=" text-primary-replyBlue-800"
            icon={faGraduationCap}
            size="4x"
          />
          <h1 className="">Online classes</h1>
          <p>
            Online classes are a form of distance learning that takes place over
            the internet. Online classes are typically based on a weekly
          </p>
        </div>
        <div className="w-80 text-primary-replyBlue-600 border transition ease-in-out  delay-100 flex flex-col justify-start align-middle text-center py-5 px-4 hover:bg-primary-replyBlue-600 hover:text-white">
          <FontAwesomeIcon
            className=" text-primary-replyBlue-800"
            icon={faGlobe}
            size="4x"
          />
          <h1>Education</h1>
          <p>
            Education is the process of facilitating learning, or the
            acquisition of knowledge, skills, values, morals, beliefs, and
            habits.
          </p>
        </div>
        <div className="w-80 text-primary-replyBlue-600 border transition ease-in-out  delay-100 flex flex-col justify-start align-middle text-center py-5 px-4 hover:bg-primary-replyBlue-600 hover:text-white">
          <FontAwesomeIcon
            className=" text-primary-replyBlue-800"
            icon={faHome}
            size="4x"
          />
          <h1>Home</h1>
          <p>
            Home is a place where you can feel safe and comfortable. It is a
            place where you can relax and be yourself.
          </p>
        </div>
        <div className="w-80 text-primary-replyBlue-600 border transition ease-in-out  delay-100 flex flex-col justify-start align-middle text-center py-5 px-4 hover:bg-primary-replyBlue-600 hover:text-white">
          <FontAwesomeIcon
            className=" text-primary-replyBlue-800"
            icon={faBook}
            size="4x"
          />
          <h1>Book Library</h1>
          <p>
            A library is a collection of materials, books or media that are
            easily accessible for use and not just for display purposes.
          </p>
        </div>
      </div>

      {/* end of our features section */}

      {/* About us section */}
      <div className="mx-5  mt-28 ">
        <img src={aboutUs} alt="img not found" />
        <h1 className=" mt-5 text-3xl text-secondary-replyOrange-900">
          About Us{" "}
        </h1>
        <h2 className=" mt-2 text-5xl text-primary-replyBlue-800  ">
          Welcome to Elearning
        </h2>
        <h3 className=" mt-7 text-xl ">
          Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
          diam amet diam et eos. Clita erat ipsum et lorem et sit
        </h3>
        <h3 className=" mt-7 text-xl">
          Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
          diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
          lorem sit clita duo justo magna dolore erat amet
        </h3>
        <div>
          <h3 className=" mt-7 text-2xl ">
            <span className="text-secondary-replyOrange-900 mr-3">
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
            this is the right arrow
          </h3>
          <h3 className=" mt-2 text-2xl ">
            <span className="text-secondary-replyOrange-900 mr-3">
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
            this is the right arrow
          </h3>
          <h3 className=" mt-2 text-2xl ">
            <span className="text-secondary-replyOrange-900 mr-3">
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
            this is the right arrow
          </h3>
          <h3 className=" mt-2 text-2xl ">
            <span className="text-secondary-replyOrange-900 mr-3">
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
            this is the right arrow
          </h3>
          <h3 className=" mt-2 text-2xl ">
            <span className="text-secondary-replyOrange-900 mr-3">
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
            this is the right arrow
          </h3>
        </div>
        <div className="flex flex-col bg-secondary-replyOrange-900 justify-center h-16 mt-5 w-36">
          <div>
            <h2 className=" text-center   text-white bg-secondary-replyOrange-900">
              Read More
            </h2>
          </div>
        </div>
      </div>

      {/* End of about us section */}

      {/* Courses Categories */}
      <div className=" mx-5 mt-28 space-y-12 ">
        <div>
          <h1 className="text-3xl text-secondary-replyOrange-900">
            Our Courses
          </h1>
          <h2 className="text-5xl text-primary-replyBlue-800  ">
            Choose Your Course
          </h2>
        </div>

        <div className="space-y-3">
          <div className="relative">
            <img src={CyberSecurity} alt="" />
            <h2 className="absolute top-0 right-0 text-white text-4xl  px-4 py-2">
              Cyber Security
            </h2>
          </div>
          <div className="relative">
            <img src={programming} alt="" />
            <h2 className="absolute top-0 right-0 text-white text-4xl  px-4 py-2">
              Cyber Security
            </h2>
          </div>
          <div className="relative">
            <img src={DataScience} alt="" />
            <h2 className="absolute top-0 right-0 text-white  text-4xl px-4 py-2">
              Cyber Security
            </h2>
          </div>
        </div>
      </div>

      {/* End of Courses Categories */}
      <div className=" mt-5">
        <FooterComponent />
      </div>
    </div>
  );
};

export default Homepage;
