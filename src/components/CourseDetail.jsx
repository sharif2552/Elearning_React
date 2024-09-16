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
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div className="mb-32">
        <Navbar />
      </div>

      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold mb-8">{course.name}</h1>
        <img
          src={course.image}
          alt={course.name}
          className="w-full h-64 object-cover mb-6"
        />
        <p className="text-gray-700 mb-4">
          <strong>Description:</strong> {course.description}
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Instructor:</strong> {course.instructor}
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Duration:</strong> {course.duration}
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Price:</strong> ${course.price}
        </p>
      </div>
    </div>
  );
};

export default CourseDetail;
