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
import studentid from "../assets/img/studentid/studentid.svg";
import img1 from "../assets/img/buttonimg/img1.png";
import img2 from "../assets/img/buttonimg/img2.png";
import img3 from "../assets/img/buttonimg/img3.png";
import training from "../assets/img/trainingimg/training.svg";
import redbg from "../assets/img/background/redbg.png";
import star from "../assets/img/gift-card/star.png";
import charecter from "../assets/img/background/char.png";
import pythonimg from "../assets/img/part 7/pythonimg.png"
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
          <div className=" w-80 border  flex flex-col items-center justify-center px-3 py-5 hover:bg-gray-100  transition duration-300 ease-in-out mt-5">
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
          <div className=" border  w-fit rounded-xl border-secondary-replyGreen-900 px-7 py-3 text-secondary-replyGreen-900 hover:bg-secondary-replyGreen-900 hover:text-white transition duration-300 ease-in-out">
            View all
          </div>
        </div>
      </div>
      {/* part 3 end*/}
      {/* part4 start */}
      <div className=" part4 relative lg:flex flex-row justify-between px-9 lg:px-36">
        <div className="  ">
          <h1 className=" absolute top-0 left-30 bg-gray-100 px-5 py-2 rounded-md">
            Benefits
          </h1>
          <h1 className=" pt-20 pb-20 text-secondary-replyGreen-900 text-4xl font-bold ">
            Get Student ID card
          </h1>
          <div className=" space-y-8 mb-16">
            <div>
              <div className=" lg:flex flex-row items-center space-x-3 space-y-3">
                <div className=" flex justify-center  ">
                  {" "}
                  <img className="  h-10 w-10" src={img1} alt="" />{" "}
                </div>

                {/* Adjust height and width as needed */}
                <h3 className="text-center">
                  TA’s and presenters can be moved to the front of the class.
                </h3>
              </div>
            </div>
            <div>
              <div className=" lg:flex flex-row items-center space-x-3 space-y-3">
                <div className=" flex justify-center  ">
                  {" "}
                  <img className="  h-10 w-10" src={img2} alt="" />{" "}
                </div>

                {/* Adjust height and width as needed */}
                <h3 className="text-center">
                  Teachers can easily see all students and class data at one
                  time.
                </h3>
              </div>
            </div>

            <div>
              <div className=" lg:flex flex-row items-center space-x-3 space-y-3">
                <div className=" flex justify-center  ">
                  {" "}
                  <img className="  h-10 w-10" src={img3} alt="" />{" "}
                </div>

                {/* Adjust height and width as needed */}
                <h3 className="text-center">
                  Teachers don’t get lost in the grid view and have a dedicated
                  Podium space.
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className=" ">
          <img className="  h-auto" src={studentid} alt="studentid" />
        </div>
      </div>
      {/* part 4 end */}
      {/* part 5  */}
      <div>
        <div className="lg:flex flex-row-reverse justify-between mt-20 px-10 lg:px-40 ">
          <div className="">
            <div className="text-center lg:text-left">
              <div className="bg-sky-100 px-5 py-2 rounded-lg inline-block">
                Training
              </div>
              <h1 className="text-secondary-replyOrange-900 font-bold font-raleway text-4xl mt-10 lg:mt-0">
                Staff training
              </h1>
            </div>
            <div className=" space-y-8 mb-16 mt-10">
              <div>
                <div className=" lg:flex flex-row items-center space-x-3 space-y-3">
                  <div className=" flex justify-center  ">
                    {" "}
                    <img className="  h-10 w-10" src={img1} alt="" />{" "}
                  </div>

                  {/* Adjust height and width as needed */}
                  <h3 className="text-center">
                    TA’s and presenters can be moved to the front of the class.
                  </h3>
                </div>
              </div>
              <div>
                <div className=" lg:flex flex-row items-center space-x-3 space-y-3">
                  <div className=" flex justify-center  ">
                    {" "}
                    <img className="  h-10 w-10" src={img2} alt="" />{" "}
                  </div>

                  {/* Adjust height and width as needed */}
                  <h3 className="text-center">
                    Teachers can easily see all students and class data at one
                    time.
                  </h3>
                </div>
              </div>

              <div>
                <div className=" lg:flex flex-row items-center space-x-3 space-y-3">
                  <div className=" flex justify-center  ">
                    {" "}
                    <img className="  h-10 w-10" src={img3} alt="" />{" "}
                  </div>

                  {/* Adjust height and width as needed */}
                  <h3 className="text-center">
                    Teachers don’t get lost in the grid view and have a
                    dedicated Podium space.
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <img src={training} alt="" />
          </div>
        </div>
      </div>
      {/* part 5 end  */}

      {/* part 6 */}
      <div className=" mt-20 flex justify-center">
        <div className=" bg-secondary-replyRed-900 w-4/5 py-10 px-10 rounded-xl">
          <div className=" lg:flex flex-row  ">
            <div className=" lg:w-2/3 flex flex-col justify-center">
              <h1 className=" text-white text-3xl lg:text-5xl font-bold">
                Why You should buy gift cards ?
              </h1>
              <div className=" mt-4">
                {" "}
                <div className=" flex flex-row  space-x-3 mt-5">
                  <img className=" h-5 w-5" src={star} alt="" />
                  <h2 className=" text-white">
                    Students don’t get lost in the grid view and have a
                    dedicated Podium space.
                  </h2>
                </div>
                <div className=" flex flex-row space-x-3 mt-5">
                  <img className=" h-5 w-5" src={star} alt="" />
                  <h2 className=" text-white">
                    Students don’t get lost in the grid view and have a
                    dedicated Podium space.
                  </h2>
                </div>
                <div className=" flex flex-row space-x-3 mt-5">
                  <img className=" h-5 w-5" src={star} alt="" />
                  <h2 className=" text-white">
                    Students don’t get lost in the grid view and have a
                    dedicated Podium space.
                  </h2>
                </div>
              </div>
            </div>
            <div className=" flex flex-row justify-center">
              <img src={charecter} alt="" />
            </div>
            <div></div>
          </div>
        </div>
      </div>

      {/* part 6 end */}
      {/* part 7 */}
      <div className=" part3 mt-20">
        <div className="Courses-Category text-secondary-replyGreen-900 text-4xl text-center font-bold">
          Exclusive Bundles
        </div>

        <div className=" my-2 font-raleway font-light text-secondary-textColor-900 text-xl text-center px-20  py-10">
          <h1>
            {" "}
            Onlearing is one powerful online software suite that combines all
            the tools needed to run a successful school or office.
          </h1>
        </div>
        <div className=" px-6 flex flex-row justify-center flex-wrap my-2 space-x-20 space-y-5 ">
          {/* course Category 1 */}
          <div className=" w-3/4 mt-5 lg:flex lg:flex-row">
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


        </div>
        <div className=" flex flex-row justify-center my-16">
          <div className=" border  w-fit rounded-xl border-secondary-replyGreen-900 px-7 py-3 text-secondary-replyGreen-900 hover:bg-secondary-replyGreen-900 hover:text-white transition duration-300 ease-in-out">
            View all
          </div>
        </div>
      </div>
      {/* part 7 end */}
      {/* carousel */}
      

      <div className="mt-5">
        <FooterComponent />
      </div>
    </div>
  );
};

export default Homepage;
