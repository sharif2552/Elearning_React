import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState("courses");
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [videos, setVideos] = useState([]);
  const [quizzes, setQuizzes] = useState([]);

  // Course form states
  const [courseForm, setCourseForm] = useState({
    name: "",
    description: "",
    price: "",
    instructor: "",
    duration: "",
    image: null,
    imagePreview: null,
  });

  // Video form states
  const [videoForm, setVideoForm] = useState({
    title: "",
    description: "",
    videoFile: null,
    courseId: "",
  });

  // Quiz form states
  const [quizForm, setQuizForm] = useState({
    title: "",
    description: "",
    questions: [],
    courseId: "",
  });

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/courses");
      setCourses(response.data);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  const fetchVideos = async (courseId) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/videos/course/${courseId}`
      );
      setVideos(response.data.data);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  const fetchQuizzes = async (courseId) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/quizzes/course/${courseId}`
      );
      setQuizzes(response.data.data);
    } catch (error) {
      console.error("Error fetching quizzes:", error);
    }
  };

  const handleCourseSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(courseForm).forEach((key) => {
      if (key !== "imagePreview" && courseForm[key] !== null) {
        formData.append(key, courseForm[key]);
      }
    });

    try {
      if (courseForm._id) {
        await axios.put(
          `http://localhost:5000/api/courses/${courseForm._id}`,
          formData
        );
      } else {
        await axios.post("http://localhost:5000/api/courses", formData);
      }
      fetchCourses();
      resetCourseForm();
    } catch (error) {
      console.error("Error saving course:", error);
    }
  };

  const handleVideoSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", videoForm.title);
    formData.append("description", videoForm.description);
    formData.append("courseId", videoForm.courseId);
    formData.append("video", videoForm.videoFile);

    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please log in to upload videos");
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/videos/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      alert("Video uploaded successfully!");
      fetchVideos(videoForm.courseId);
      resetVideoForm();
    } catch (error) {
      console.error("Error saving video:", error);
      if (error.response?.status === 401) {
        alert("Your session has expired. Please log in again.");
      } else {
        alert("Error uploading video. Please try again.");
      }
    }
  };

  const handleQuizSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please log in to create quizzes");
      return;
    }

    try {
      // Transform the questions data to match the backend model
      const transformedQuestions = quizForm.questions.map((q) => ({
        question: q.text,
        options: q.options.map((opt) => opt.text),
        correctAnswer: q.options.findIndex((opt) => opt.isCorrect),
      }));

      const quizData = {
        title: quizForm.title,
        description: quizForm.description,
        courseId: quizForm.courseId,
        questions: transformedQuestions,
        duration: 30, // Default duration in minutes
        passingScore: 70, // Default passing score
      };

      await axios.post("http://localhost:5000/api/quizzes", quizData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert("Quiz created successfully!");
      fetchQuizzes(quizForm.courseId);
      resetQuizForm();
    } catch (error) {
      console.error("Error saving quiz:", error);
      if (error.response?.status === 401) {
        alert("Your session has expired. Please log in again.");
      } else {
        alert("Error creating quiz. Please try again.");
      }
    }
  };

  const handleDelete = async (courseId) => {
    try {
      await axios.delete(`http://localhost:5000/api/courses/${courseId}`);
      setCourses(courses.filter((course) => course._id !== courseId));
      alert("Course deleted successfully");
    } catch (error) {
      console.error("Error deleting course:", error);
      alert("Error deleting course");
    }
  };

  const handleDeleteVideo = async (videoId) => {
    try {
      await axios.delete(`http://localhost:5000/api/videos/${videoId}`);
      setVideos(videos.filter((video) => video._id !== videoId));
      alert("Video deleted successfully");
    } catch (error) {
      console.error("Error deleting video:", error);
      alert("Error deleting video");
    }
  };

  const handleDeleteQuiz = async (quizId) => {
    try {
      await axios.delete(`http://localhost:5000/api/quizzes/${quizId}`);
      setQuizzes(quizzes.filter((quiz) => quiz._id !== quizId));
      alert("Quiz deleted successfully");
    } catch (error) {
      console.error("Error deleting quiz:", error);
      alert("Error deleting quiz");
    }
  };

  const resetCourseForm = () => {
    setCourseForm({
      name: "",
      description: "",
      price: "",
      instructor: "",
      duration: "",
      image: null,
      imagePreview: null,
    });
  };

  const resetVideoForm = () => {
    setVideoForm({
      title: "",
      description: "",
      videoFile: null,
      courseId: "",
    });
  };

  const resetQuizForm = () => {
    setQuizForm({
      title: "",
      description: "",
      questions: [],
      courseId: "",
    });
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Admin Panel</h1>

      {/* Navigation Tabs */}
      <div className="flex border-b mb-8">
        <button
          className={`px-4 py-2 ${
            activeTab === "courses" ? "border-b-2 border-blue-500" : ""
          }`}
          onClick={() => setActiveTab("courses")}
        >
          Courses
        </button>
        <button
          className={`px-4 py-2 ${
            activeTab === "videos" ? "border-b-2 border-blue-500" : ""
          }`}
          onClick={() => setActiveTab("videos")}
        >
          Videos
        </button>
        <button
          className={`px-4 py-2 ${
            activeTab === "quizzes" ? "border-b-2 border-blue-500" : ""
          }`}
          onClick={() => setActiveTab("quizzes")}
        >
          Quizzes
        </button>
      </div>

      {/* Course Management */}
      {activeTab === "courses" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4">Add/Edit Course</h2>
            <form onSubmit={handleCourseSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  Course Name
                </label>
                <input
                  type="text"
                  value={courseForm.name}
                  onChange={(e) =>
                    setCourseForm({ ...courseForm, name: e.target.value })
                  }
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  Description
                </label>
                <textarea
                  value={courseForm.description}
                  onChange={(e) =>
                    setCourseForm({
                      ...courseForm,
                      description: e.target.value,
                    })
                  }
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Price</label>
                <input
                  type="number"
                  value={courseForm.price}
                  onChange={(e) =>
                    setCourseForm({ ...courseForm, price: e.target.value })
                  }
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  Instructor
                </label>
                <input
                  type="text"
                  value={courseForm.instructor}
                  onChange={(e) =>
                    setCourseForm({ ...courseForm, instructor: e.target.value })
                  }
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  Duration
                </label>
                <input
                  type="text"
                  value={courseForm.duration}
                  onChange={(e) =>
                    setCourseForm({ ...courseForm, duration: e.target.value })
                  }
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  Course Image
                </label>
                <input
                  type="file"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    setCourseForm({
                      ...courseForm,
                      image: file,
                      imagePreview: URL.createObjectURL(file),
                    });
                  }}
                  className="w-full p-2 border rounded"
                />
                {courseForm.imagePreview && (
                  <img
                    src={courseForm.imagePreview}
                    alt="Preview"
                    className="mt-2 w-32 h-32 object-cover"
                  />
                )}
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
              >
                {courseForm._id ? "Update Course" : "Add Course"}
              </button>
            </form>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4">Course List</h2>
            <div className="space-y-4">
              {courses.map((course) => (
                <div key={course._id} className="border p-4 rounded">
                  <h3 className="font-bold">{course.name}</h3>
                  <p className="text-sm text-gray-600">{course.description}</p>
                  <div className="mt-2 flex space-x-2">
                    <button
                      onClick={() => setCourseForm(course)}
                      className="text-blue-500 hover:text-blue-700"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(course._id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Video Management */}
      {activeTab === "videos" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4">Add Video</h2>
            <form onSubmit={handleVideoSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  Select Course
                </label>
                <select
                  value={videoForm.courseId}
                  onChange={(e) =>
                    setVideoForm({ ...videoForm, courseId: e.target.value })
                  }
                  className="w-full p-2 border rounded"
                  required
                >
                  <option value="">Select a course</option>
                  {courses.map((course) => (
                    <option key={course._id} value={course._id}>
                      {course.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  Video Title
                </label>
                <input
                  type="text"
                  value={videoForm.title}
                  onChange={(e) =>
                    setVideoForm({ ...videoForm, title: e.target.value })
                  }
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  Description
                </label>
                <textarea
                  value={videoForm.description}
                  onChange={(e) =>
                    setVideoForm({ ...videoForm, description: e.target.value })
                  }
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  Video File
                </label>
                <input
                  type="file"
                  onChange={(e) =>
                    setVideoForm({ ...videoForm, videoFile: e.target.files[0] })
                  }
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
              >
                Upload Video
              </button>
            </form>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4">Video List</h2>
            <div className="space-y-4">
              {videos.map((video) => (
                <div key={video._id} className="border p-4 rounded">
                  <h3 className="font-bold">{video.title}</h3>
                  <p className="text-sm text-gray-600">{video.description}</p>
                  <div className="mt-2 flex space-x-2">
                    <button
                      onClick={() => handleDeleteVideo(video._id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Quiz Management */}
      {activeTab === "quizzes" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4">Add Quiz</h2>
            <form onSubmit={handleQuizSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  Select Course
                </label>
                <select
                  value={quizForm.courseId}
                  onChange={(e) =>
                    setQuizForm({ ...quizForm, courseId: e.target.value })
                  }
                  className="w-full p-2 border rounded"
                  required
                >
                  <option value="">Select a course</option>
                  {courses.map((course) => (
                    <option key={course._id} value={course._id}>
                      {course.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  Quiz Title
                </label>
                <input
                  type="text"
                  value={quizForm.title}
                  onChange={(e) =>
                    setQuizForm({ ...quizForm, title: e.target.value })
                  }
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  Description
                </label>
                <textarea
                  value={quizForm.description}
                  onChange={(e) =>
                    setQuizForm({ ...quizForm, description: e.target.value })
                  }
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  Questions
                </label>
                {quizForm.questions.map((question, index) => (
                  <div key={index} className="mb-4 p-4 border rounded">
                    <input
                      type="text"
                      value={question.text}
                      onChange={(e) => {
                        const newQuestions = [...quizForm.questions];
                        newQuestions[index].text = e.target.value;
                        setQuizForm({ ...quizForm, questions: newQuestions });
                      }}
                      placeholder="Question text"
                      className="w-full p-2 border rounded mb-2"
                    />
                    {question.options.map((option, optionIndex) => (
                      <div key={optionIndex} className="flex items-center mb-2">
                        <input
                          type="text"
                          value={option.text}
                          onChange={(e) => {
                            const newQuestions = [...quizForm.questions];
                            newQuestions[index].options[optionIndex].text =
                              e.target.value;
                            setQuizForm({
                              ...quizForm,
                              questions: newQuestions,
                            });
                          }}
                          placeholder={`Option ${optionIndex + 1}`}
                          className="flex-1 p-2 border rounded mr-2"
                        />
                        <input
                          type="radio"
                          checked={option.isCorrect}
                          onChange={() => {
                            const newQuestions = [...quizForm.questions];
                            newQuestions[index].options.forEach((opt, i) => {
                              opt.isCorrect = i === optionIndex;
                            });
                            setQuizForm({
                              ...quizForm,
                              questions: newQuestions,
                            });
                          }}
                          className="mr-2"
                        />
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={() => {
                        const newQuestions = [...quizForm.questions];
                        newQuestions[index].options.push({
                          text: "",
                          isCorrect: false,
                        });
                        setQuizForm({ ...quizForm, questions: newQuestions });
                      }}
                      className="text-blue-500 hover:text-blue-700"
                    >
                      Add Option
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => {
                    setQuizForm({
                      ...quizForm,
                      questions: [
                        ...quizForm.questions,
                        {
                          text: "",
                          options: [{ text: "", isCorrect: false }],
                        },
                      ],
                    });
                  }}
                  className="text-blue-500 hover:text-blue-700"
                >
                  Add Question
                </button>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
              >
                Create Quiz
              </button>
            </form>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4">Quiz List</h2>
            <div className="space-y-4">
              {quizzes.map((quiz) => (
                <div key={quiz._id} className="border p-4 rounded">
                  <h3 className="font-bold">{quiz.title}</h3>
                  <p className="text-sm text-gray-600">{quiz.description}</p>
                  <div className="mt-2 flex space-x-2">
                    <button
                      onClick={() => handleDeleteQuiz(quiz._id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
