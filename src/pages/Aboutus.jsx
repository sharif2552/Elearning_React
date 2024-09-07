import React from "react";
import Navbar from "../components/Navbar";

const AboutUs = () => {
  return (
    <div>
      <div className=" mb-32">
        <Navbar />
      </div>
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-5xl text-indigo-600 font-semibold tracking-wide uppercase">
              About Us
            </h2>
            <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:tracking-tight lg:text-5xl">
              Learn More About Our Mission
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
              We are dedicated to providing the best e-learning experience. Our
              mission is to empower students and educators through accessible
              and engaging educational content.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col bg-white shadow-xl rounded-lg p-8">
              <div className="flex-shrink-0">
                <img
                  className="h-12 w-12"
                  src="https://via.placeholder.com/150"
                  alt="Company Icon"
                />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-gray-900">
                Our Vision
              </h3>
              <p className="mt-4 text-lg text-gray-500">
                Our vision is to create a world where anyone, anywhere can
                transform their life through access to the world’s best learning
                experience.
              </p>
            </div>

            <div className="flex flex-col bg-white shadow-xl rounded-lg p-8">
              <div className="flex-shrink-0">
                <img
                  className="h-12 w-12"
                  src="https://via.placeholder.com/150"
                  alt="Company Icon"
                />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-gray-900">
                Our Values
              </h3>
              <p className="mt-4 text-lg text-gray-500">
                We believe in the power of education to change lives. Our values
                include a commitment to innovation, a passion for learning, and
                a dedication to excellence.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-3xl font-bold text-gray-900">Meet Our Team</h3>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
              Our team is composed of dedicated professionals committed to
              delivering the best educational content and support.
            </p>

            <div className="mt-12 grid gap-8 lg:grid-cols-3 lg:gap-16">
              <div className="flex flex-col items-center bg-white shadow-xl rounded-lg p-8">
                <img
                  className="h-24 w-24 rounded-full"
                  src="https://via.placeholder.com/150"
                  alt="Team Member"
                />
                <h4 className="mt-6 text-xl font-bold text-gray-900">
                  John Doe
                </h4>
                <p className="mt-2 text-lg text-gray-500">CEO</p>
              </div>

              <div className="flex flex-col items-center bg-white shadow-xl rounded-lg p-8">
                <img
                  className="h-24 w-24 rounded-full"
                  src="https://via.placeholder.com/150"
                  alt="Team Member"
                />
                <h4 className="mt-6 text-xl font-bold text-gray-900">
                  Jane Smith
                </h4>
                <p className="mt-2 text-lg text-gray-500">CTO</p>
              </div>

              <div className="flex flex-col items-center bg-white shadow-xl rounded-lg p-8">
                <img
                  className="h-24 w-24 rounded-full"
                  src="https://via.placeholder.com/150"
                  alt="Team Member"
                />
                <h4 className="mt-6 text-xl font-bold text-gray-900">
                  Sam Johnson
                </h4>
                <p className="mt-2 text-lg text-gray-500">COO</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
