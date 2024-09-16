import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";

const CourseDetail = () => {
  const { id } = useParams(); // Get the course ID from the route
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/courses/${id}`
        );
        setCourse(response.data);
      } catch (error) {
        console.error("There was an error fetching the course details!", error);
      }
    };

    fetchCourse();
  }, [id]);

  if (!course) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg text-gray-500 animate-pulse">Loading...</p>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        {/* Course Heading Section */}
        <h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">
          {course.name}
        </h1>

        {/* Flex Container for Image and Details */}
        <div className="flex flex-col lg:flex-row justify-between items-start">
          {/* Course Image Section */}
          <div className="lg:w-2/5 w-full lg:pl-8">
            <img
              src={course.image}
              alt={course.name}
              className="w-full h-full object-contain rounded-lg shadow-lg"
            />
          </div>


          {/* Course Information Section */}
          <div className="lg:w-3/5 w-full bg-white shadow-lg rounded-lg p-6 mb-8 lg:mb-0">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Course Details
            </h2>

            {/* Description */}
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Description:</strong> {course.description}
            </p>

            {/* Instructor */}
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Instructor:</strong>{" "}
              <span className="text-blue-600">{course.instructor}</span>
            </p>

            {/* Duration */}
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Duration:</strong> {course.duration}
            </p>

            {/* Price */}
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Price:</strong>{" "}
              <span className="text-green-600 font-bold">${course.price}</span>
            </p>

            {/* Action Button */}
            <div className="text-center mt-8">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition duration-300 ease-in-out">
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
