import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminPanel = () => {
  const [courses, setCourses] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null); // To display the current image preview
  const [isEditing, setIsEditing] = useState(false); // To track whether we are editing a course
  const [currentCourseId, setCurrentCourseId] = useState(null); // ID of the course being edited

  // Function to fetch courses
  const fetchCourses = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/courses");
      setCourses(response.data);
    } catch (error) {
      console.error("There was an error fetching the courses!", error);
    }
  };

  // Fetch courses on component mount
  useEffect(() => {
    fetchCourses();
  }, []);

  // Function to handle adding or updating a course
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", price);

    // Only append image if a new image is selected
    if (image) {
      formData.append("image", image);
    }

    try {
      if (isEditing) {
        // If editing, send a PUT request to update the course
        await axios.put(
          `http://localhost:5000/api/courses/${currentCourseId}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        alert("Course updated successfully!");
      } else {
        // If adding a new course, send a POST request
        await axios.post("http://localhost:5000/api/courses", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        alert("Course added successfully!");
      }
      resetForm();
      fetchCourses(); // Refresh the courses list after adding/updating
    } catch (error) {
      console.error("There was an error submitting the course!", error);
    }
  };

  // Function to handle deleting a course
  const handleDelete = async (courseId) => {
    try {
      await axios.delete(`http://localhost:5000/api/courses/${courseId}`);
      setCourses(courses.filter((course) => course._id !== courseId));
      alert("Course deleted successfully");
    } catch (error) {
      console.error("There was an error deleting the course!", error);
    }
  };

  // Function to handle editing a course
  const handleEdit = (course) => {
    setName(course.name);
    setDescription(course.description);
    setPrice(course.price);
    setImagePreview(course.image); // Show current image preview
    setIsEditing(true);
    setCurrentCourseId(course._id);
  };

  // Function to reset the form
  const resetForm = () => {
    setName("");
    setDescription("");
    setPrice("");
    setImage(null);
    setImagePreview(null); // Reset the image preview
    setIsEditing(false);
    setCurrentCourseId(null);
  };

  // Handle image input change and set preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file)); // Show new image preview
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Admin Panel</h1>

      {/* Form to Add or Edit a Course */}
      <div className="flex items-center justify-center mb-12">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full max-w-lg"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">
            {isEditing ? "Edit Course" : "Add Course"}
          </h2>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="description"
            >
              Description:
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="price"
            >
              Price:
            </label>
            <input
              type="number"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="image"
            >
              Image:
            </label>
            {/* Display current image preview */}
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Current course"
                className="w-32 h-32 object-cover mb-4"
              />
            )}
            <input
              type="file"
              id="image"
              onChange={handleImageChange}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              {isEditing ? "Update Course" : "Add Course"}
            </button>
            {isEditing && (
              <button
                type="button"
                onClick={resetForm}
                className="ml-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Cancel Edit
              </button>
            )}
          </div>
        </form>
      </div>

      {/* List of Courses */}
      <div className=" text-5xl text-center text-blue-500 mb-10">
        <h2>List of Courses</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {courses.map((course) => (
          <div
            key={course._id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={course.image}
              alt={course.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{course.name}</h2>
              <p className="text-gray-700 mb-4">{course.description}</p>
              <p className="text-lg font-bold">${course.price}</p>
              <div className="flex justify-between">
                <button
                  onClick={() => handleEdit(course)}
                  className="bg-yellow-500 text-white px-4 py-2 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(course._id)}
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;
