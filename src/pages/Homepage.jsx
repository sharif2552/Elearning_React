import React from "react";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import FooterComponent from "../components/FooterComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faGlobe,
  faHome,
  faBook,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import CyberSecurityImage from "../assets/img/CyberSecurity.jpg";
import DataScienceImage from "../assets/img/dataScience.jpg";
import ProgrammingImage from "../assets/img/programming.jpg";
import humanimg from "../assets/img/homepage/human.png";
import rectangle from "../assets/img/homepage/Rectangle1.png";
import rectangle2 from "../assets/img/homepage/Rectangle2.png";
import rectangle3 from "../assets/img/homepage/Rectangle3.png";
import rectangle4 from "../assets/img/homepage/Rectangle4.png";
import dumble from "../assets/img/category/dumble.png";
import lipstick from "../assets/img/category/lipstrick.png";
import bun from "../assets/img/category/bun.png";
import vaccine from "../assets/img/category/Vaccine.png";

const Homepage = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      {/* Part 1 */}
      <div className=" pt-20 py-8 px-6 lg:pt-28 lg:px-16  h-fit lg:h-[600px] w-full flex flex-col-reverse md:relative  bg-primary-replyBlue-600">
        <div className=" flex flex-col justify-center items-center lg:items-start h-56 lg:h-96">
          <div className=" bg-white max-w-fit p-1 px-4 rounded-lg">
            <h1>Never stop learning</h1>
          </div>
          <div className=" text-3xl md:text-6xl mt-5 font-bold text-secondary-replyGreen-900 md:w-1/2 ">
            <h1>Grow up your skills by online courses with Onlearning</h1>
          </div>
          <div className=" bg-secondary-replyOrange-900 mt-5 text-white w-fit rounded-md px-4 py-2 ">
            <button>Explore Path</button>
          </div>
        </div>
        <div className=" flex justify-center md:absolute  right-24 bottom-0">
          <img
            className=" w-72 h-auto lg:w-[600px] lg:h-auto"
            src={humanimg}
            alt="human"
          />
        </div>
      </div>
      {/* part 1 end */}

      {/* part 2 */}
      <div className=" part-2  pt-9">
        <div className="popular-courses flex justify-center font-poppins font-bold text-secondary-replyOrange-900 text-3xl">
          <h1>Popular Courses</h1>
        </div>

        <div className=" courses-name flex flex-wrap mt-7 mb-7 px-5  space-x-2 items-center justify-center">
          <div className=" border w-fit rounded-md px-3 py-1 hover:bg-secondary-replyGreen-900 hover:text-white font-light font-mono">
            {" "}
            All program
          </div>
          <div className=" border w-fit rounded-md px-3 py-1 hover:bg-secondary-replyGreen-900 hover:text-white font-light font-mono">
            {" "}
            Cyber Security
          </div>

          <div className=" border w-fit rounded-md px-3 py-1 hover:bg-secondary-replyGreen-900 hover:text-white font-light font-mono">
            {" "}
            Data Science
          </div>
          <div className=" border w-fit rounded-md px-3 py-1 hover:bg-secondary-replyGreen-900 hover:text-white font-light font-mono">
            {" "}
            Programming
          </div>
        </div>
        <div
          className=" course-details flex flex-wrap justify-center space-x-4 space-y-5 px-2
        "
        >
          {/* course 1 */}
          <div className="  w-80 mt-5">
            <img className=" w-full rounded-t-2xl" src={rectangle} alt="" />
            <div className=" px-4 pb-5 border">
              <h1 className=" text-secondary-replyGreen-900 text-xl font-bold mt-2">
                Product Management Basic - Course
              </h1>
              <p className=" my-2 font-raleway font-light text-secondary-textColor-900 text-sm">
                Product Management Masterclass, you will learn with Sarah
                Johnson - Head of Product Customer Platform Gojek Indonesia.
              </p>

              <div className=" flex flex-row justify-between">
                <div className=" text-secondary-replyOrange-900 text-2xl font-bold">
                  {" "}
                  $370
                </div>
                <div className=" bg-secondary-replyGreen-900 py-3 px-5 rounded-md text-white">
                  Enroll Now
                </div>
              </div>
            </div>
          </div>

          {/* course 2 */}
          <div className="  w-80">
            <img className=" w-full rounded-t-2xl" src={rectangle2} alt="" />
            <div className=" px-4 pb-5 border">
              <h1 className=" text-secondary-replyGreen-900 text-xl font-bold mt-2">
                BM Data Science Professional Certificate
              </h1>
              <p className=" my-2 font-raleway font-light text-secondary-textColor-900 text-sm">
                Product Management Masterclass, you will learn with Sarah
                Johnson - Head of Product Customer Platform Gojek Indonesia.
              </p>

              <div className=" flex flex-row justify-between">
                <div className=" text-secondary-replyOrange-900 text-2xl font-bold">
                  {" "}
                  $590
                </div>
                <div className=" bg-secondary-replyGreen-900 py-3 px-5 rounded-md text-white">
                  Enroll Now
                </div>
              </div>
            </div>
          </div>

          {/* course 3 */}
          <div className="  w-80 ">
            <img className=" w-full rounded-t-2xl" src={rectangle3} alt="" />
            <div className=" px-4 pb-5 border space-y-6">
              <h1 className=" text-secondary-replyGreen-900 text-xl font-bold mt-2">
                The Science of Well-Being
              </h1>
              <p className=" my-2 font-raleway font-light text-secondary-textColor-900 text-sm">
                Product Management Masterclass, you will learn with Sarah
                Johnson - Head of Product Customer Platform Gojek Indonesia.
              </p>

              <div className=" flex flex-row justify-between">
                <div className=" text-secondary-replyOrange-900 text-2xl font-bold">
                  {" "}
                  $568
                </div>
                <div className=" bg-secondary-replyGreen-900 py-3 px-5 rounded-md text-white">
                  Enroll Now
                </div>
              </div>
            </div>
          </div>

          {/* course 4 */}
          <div className="  w-80">
            <img className=" w-full rounded-t-2xl" src={rectangle4} alt="" />
            <div className=" px-4 pb-5 border">
              <h1 className=" text-secondary-replyGreen-900 text-xl font-bold mt-2">
                Python for Everybody Specialization
              </h1>
              <p className=" my-2 font-raleway font-light text-secondary-textColor-900 text-sm">
                Product Management Masterclass, you will learn with Sarah
                Johnson - Head of Product Customer Platform Gojek Indonesia.
              </p>

              <div className=" flex flex-row justify-between">
                <div className=" text-secondary-replyOrange-900 text-2xl font-bold">
                  {" "}
                  $987
                </div>
                <div className=" bg-secondary-replyGreen-900 py-3 px-5 rounded-md text-white">
                  Enroll Now
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* part 2 end*/}
      {/* part 3 */}
      <div className=" part3 mt-20">
        <div className="Courses-Category text-secondary-replyGreen-900 text-4xl text-center font-bold">
          Courses Category
        </div>

        <div className=" my-2 font-raleway font-light text-secondary-textColor-900 text-xl text-center px-20  py-10">
          <h1>
            {" "}
            Onlearing is one powerful online software suite that combines all
            the tools needed to run a successful school or office.
          </h1>
        </div>
        <div className=" px-6 flex flex-row justify-center flex-wrap my-2 space-x-5 space-y-5 ">
          {/* course Category 1 */}
          <div className=" w-80 border  flex flex-col items-center justify-center px-3 py-5 hover:bg-gray-100  transition duration-300 ease-in-out">
            <div className=" w-16 h-16 bg-sky-200 rounded-full ">
              <img
                className=" w-14 h-auto  lg:h-auto"
                src={lipstick}
                alt="human"
              />
            </div>

            <h1 className=" text-3xl text-secondary-replyGreen-900 my-3">
              Beauty
            </h1>
            <h2 className=" font-raleway font-light">
              {" "}
              One powerful online software suite that combines
            </h2>
            <h3 class="py-3 px-24 shadow-md my-5 text-secondary-replyGreen-900 hover:bg-secondary-replyOrange-900 hover:text-white rounded-full transition duration-300 ease-in-out">
              Explore more
            </h3>
          </div>

          {/* course Category 2 */}
          <div className=" w-80 border  flex flex-col items-center justify-center px-3 py-5 hover:bg-gray-100  transition duration-300 ease-in-out">
            <div className=" w-16 h-16 bg-sky-200 rounded-full ">
              <img
                className=" w-14 h-auto  lg:h-auto"
                src={vaccine}
                alt="human"
              />
            </div>

            <h1 className=" text-3xl text-secondary-replyGreen-900 my-3">
              medical
            </h1>
            <h2 className=" font-raleway font-light">
              {" "}
              One powerful online software suite that combines
            </h2>
            <h3 class="py-3 px-24 shadow-md my-5 text-secondary-replyGreen-900 hover:bg-secondary-replyOrange-900 hover:text-white rounded-full transition duration-300 ease-in-out">
              Explore more
            </h3>
          </div>

          {/* course category 3 */}
          <div className=" w-80 border  flex flex-col items-center justify-center px-3 py-5 hover:bg-gray-100  transition duration-300 ease-in-out">
            <div className=" w-16 h-16 bg-sky-200 rounded-full ">
              <img
                className=" w-14 h-auto  lg:h-auto"
                src={dumble}
                alt="human"
              />
            </div>

            <h1 className=" text-3xl text-secondary-replyGreen-900 my-3">
              sports
            </h1>
            <h2 className=" font-raleway font-light">
              {" "}
              One powerful online software suite that combines
            </h2>
            <h3 class="py-3 px-24 shadow-md my-5 text-secondary-replyGreen-900 hover:bg-secondary-replyOrange-900 hover:text-white rounded-full transition duration-300 ease-in-out">
              Explore more
            </h3>
          </div>

          {/* course cateogry 4 */}
          <div className=" w-80 border  flex flex-col items-center justify-center px-3 py-5 hover:bg-gray-100  transition duration-300 ease-in-out">
            <div className=" w-16 h-16 bg-sky-200 rounded-full ">
              <img className=" w-14 h-auto  lg:h-auto" src={bun} alt="human" />
            </div>

            <h1 className=" text-3xl text-secondary-replyGreen-900 my-3">
              Nutrition
            </h1>
            <h2 className=" font-raleway font-light">
              {" "}
              One powerful online software suite that combines
            </h2>
            <h3 class="py-3 px-24 shadow-md my-5 text-secondary-replyGreen-900 hover:bg-secondary-replyOrange-900 hover:text-white rounded-full transition duration-300 ease-in-out">
              Explore more
            </h3>
          </div>

          {/* course category 5 */}
          <div></div>
          <div></div>
        </div>
        <div className=" flex flex-row justify-center my-16">
          <div className=" border  w-fit rounded-xl border-secondary-replyGreen-900 px-7 py-3 text-secondary-replyGreen-900">
            View all
          </div>
        </div>
      </div>

      {/* part 3 end*/}

      <div className="mt-5">
        <FooterComponent />
      </div>
    </div>
  );
};

export default Homepage;
