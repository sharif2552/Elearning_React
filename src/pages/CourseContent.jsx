import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaPlay, FaFileAlt, FaCheck, FaLock } from "react-icons/fa";
import Navbar from "../components/Navbar";

const CourseContent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [videos, setVideos] = useState([]);
  const [quizzes, setQuizzes] = useState([]);
  const [selectedContent, setSelectedContent] = useState(null);
  const [contentType, setContentType] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [progress, setProgress] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [quizScore, setQuizScore] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  useEffect(() => {
    const fetchCourseContent = async () => {
      try {
        setLoading(true);
        setError(null);

        const API_URL = "http://localhost:5000/api";
        console.log("Fetching course:", id);

        // Fetch course data
        const courseRes = await axios.get(`${API_URL}/courses/${id}`);
        console.log("Raw course response:", courseRes.data);

        // Handle different response formats
        let courseData;
        if (courseRes.data.success && courseRes.data.data) {
          courseData = courseRes.data.data;
        } else if (courseRes.data._id) {
          // Direct course object response
          courseData = courseRes.data;
        } else {
          throw new Error("Invalid course data format");
        }

        // Fetch videos and quizzes
        const [videosRes, quizzesRes] = await Promise.all([
          axios.get(`${API_URL}/videos/course/${id}`),
          axios.get(`${API_URL}/quizzes/course/${id}`),
        ]);

        // Handle videos response
        let videosData = [];
        if (videosRes.data.success && videosRes.data.data) {
          videosData = videosRes.data.data;
        } else if (Array.isArray(videosRes.data)) {
          videosData = videosRes.data;
        }

        // Handle quizzes response
        let quizzesData = [];
        if (quizzesRes.data.success && quizzesRes.data.data) {
          quizzesData = quizzesRes.data.data;
        } else if (Array.isArray(quizzesRes.data)) {
          quizzesData = quizzesRes.data;
        }

        // Set the state with the processed data
        setCourse(courseData);
        setVideos(videosData);
        setQuizzes(quizzesData);

        // Set dummy progress
        setProgress({
          videos: {},
          quizzes: {},
        });
      } catch (error) {
        console.error("Error fetching course content:", {
          message: error.message,
          response: error.response?.data,
          status: error.response?.status,
        });

        let errorMessage = "Failed to fetch course content";

        if (error.response) {
          if (error.response.status === 404) {
            errorMessage = "Course not found";
          } else if (error.response.data?.message) {
            errorMessage = error.response.data.message;
          }
        } else if (error.message === "Invalid course data format") {
          errorMessage = "Server returned invalid course data format";
        } else if (error.message.includes("Network Error")) {
          errorMessage =
            "Unable to connect to server. Please check your connection.";
        }

        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchCourseContent();
  }, [id]);

  const handleVideoClick = (video) => {
    setSelectedContent(video);
    setContentType("video");
    setQuizStarted(false);
    setQuizCompleted(false);
  };

  const handleQuizClick = (quiz) => {
    setSelectedContent(quiz);
    setContentType("quiz");
    setQuizStarted(false);
    setQuizCompleted(false);
  };

  const startQuiz = () => {
    setQuizStarted(true);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setQuizScore(0);
    setQuizCompleted(false);
  };

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    // Get the current question
    const currentQuestionData = selectedContent.questions[currentQuestion];

    // Get the correct answer index and the selected answer index
    const correctAnswerIndex = currentQuestionData.correctAnswer;
    const selectedAnswerIndex =
      currentQuestionData.options.indexOf(selectedAnswer);

    // Log for debugging
    console.log("Current Question:", currentQuestionData);
    console.log("Selected Answer:", selectedAnswer);
    console.log("Selected Answer Index:", selectedAnswerIndex);
    console.log("Correct Answer Index:", correctAnswerIndex);

    // Check if the selected answer index matches the correct answer index
    const isCorrect = selectedAnswerIndex === correctAnswerIndex;
    console.log("Is Correct:", isCorrect);

    if (isCorrect) {
      setQuizScore((prevScore) => prevScore + 1);
    }

    if (currentQuestion < selectedContent.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setQuizCompleted(true);
    }
  };

  const renderQuizContent = () => {
    if (!selectedContent) return null;

    if (!quizStarted) {
      return (
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {selectedContent.title}
          </h2>
          <p className="text-gray-600 mb-6">{selectedContent.description}</p>
          <div className="mb-4">
            <p className="text-sm text-gray-500">
              Passing Score: {selectedContent.passingScore}%
            </p>
            <p className="text-sm text-gray-500">
              Duration: {selectedContent.duration} minutes
            </p>
          </div>
          <button
            onClick={startQuiz}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Start Quiz
          </button>
        </div>
      );
    }

    if (quizCompleted) {
      const percentage = (quizScore / selectedContent.questions.length) * 100;
      const passed = percentage >= selectedContent.passingScore;

      return (
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Quiz Results
          </h2>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <p className="text-lg mb-4">
              Your score: {quizScore} out of {selectedContent.questions.length}
            </p>
            <p className="text-lg mb-4">Percentage: {percentage.toFixed(1)}%</p>
            <p
              className={`text-lg mb-4 font-semibold ${
                passed ? "text-green-600" : "text-red-600"
              }`}
            >
              {passed
                ? "Congratulations! You passed the quiz!"
                : "You did not pass the quiz. Please try again."}
            </p>
            <button
              onClick={startQuiz}
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Retake Quiz
            </button>
          </div>
        </div>
      );
    }

    const question = selectedContent.questions[currentQuestion];
    return (
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          {selectedContent.title}
        </h2>
        <div className="bg-white rounded-lg p-6 shadow-md">
          <div className="mb-4">
            <p className="text-lg font-medium mb-2">
              Question {currentQuestion + 1} of{" "}
              {selectedContent.questions.length}
            </p>
            <p className="text-gray-700">{question.question}</p>
          </div>
          <div className="space-y-3">
            {question.options.map((option, index) => (
              <div
                key={index}
                className={`p-3 rounded-lg cursor-pointer transition-colors ${
                  selectedAnswer === option
                    ? "bg-blue-100 border-2 border-blue-500"
                    : "bg-gray-50 hover:bg-gray-100 border-2 border-transparent"
                }`}
                onClick={() => handleAnswerSelect(option)}
              >
                {option}
              </div>
            ))}
          </div>
          <div className="mt-6">
            <button
              onClick={handleNextQuestion}
              disabled={!selectedAnswer}
              className={`w-full bg-blue-500 text-white px-6 py-2 rounded-lg transition-colors ${
                !selectedAnswer
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-blue-600"
              }`}
            >
              {currentQuestion === selectedContent.questions.length - 1
                ? "Finish Quiz"
                : "Next Question"}
            </button>
          </div>
        </div>
      </div>
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error || !course) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            {error || "Course not found"}
          </h2>
          <button
            onClick={() => navigate("/courses")}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Back to Courses
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mt-20 mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Course Header */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {course.name}
          </h1>
          <p className="text-gray-600">{course.description}</p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Sidebar - Course Content */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="p-4 border-b">
                <h2 className="text-lg font-semibold text-gray-900">
                  Course Content
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  {videos.length} videos • {quizzes.length} quizzes
                </p>
              </div>

              {/* Videos Section */}
              <div className="divide-y divide-gray-100">
                {videos.map((video, index) => (
                  <div
                    key={video._id}
                    className={`p-4 hover:bg-gray-50 cursor-pointer transition-colors ${
                      selectedContent?._id === video._id &&
                      contentType === "video"
                        ? "bg-blue-50"
                        : ""
                    }`}
                    onClick={() => handleVideoClick(video)}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        {progress.videos[video._id] ? (
                          <FaCheck className="h-4 w-4 text-green-600" />
                        ) : (
                          <FaPlay className="h-4 w-4 text-blue-600" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900">
                          {index + 1}. {video.title}
                        </p>
                        <p className="text-sm text-gray-500">
                          {video.duration} minutes
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quiz Section */}
              {quizzes.length > 0 && (
                <>
                  <div className="p-4 border-t border-b bg-gray-50">
                    <h3 className="text-md font-semibold text-gray-900">
                      Course Quizzes
                    </h3>
                  </div>
                  <div className="divide-y divide-gray-100">
                    {quizzes.map((quiz) => (
                      <div
                        key={quiz._id}
                        className={`p-4 hover:bg-gray-50 cursor-pointer transition-colors ${
                          selectedContent?._id === quiz._id &&
                          contentType === "quiz"
                            ? "bg-blue-50"
                            : ""
                        }`}
                        onClick={() => handleQuizClick(quiz)}
                      >
                        <div className="flex items-center space-x-3">
                          <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                            {progress.quizzes[quiz._id] ? (
                              <FaCheck className="h-4 w-4 text-green-600" />
                            ) : (
                              <FaFileAlt className="h-4 w-4 text-green-600" />
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900">
                              {quiz.title}
                            </p>
                            <p className="text-sm text-gray-500">
                              {quiz.questions.length} questions
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Right Side - Content Display */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              {contentType === "video" && selectedContent ? (
                <div className="aspect-w-16 aspect-h-9">
                  <video
                    src={selectedContent.videoUrl}
                    controls
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : contentType === "quiz" && selectedContent ? (
                renderQuizContent()
              ) : (
                <div className="aspect-w-16 aspect-h-9 bg-gray-100 flex items-center justify-center">
                  <div className="text-center">
                    <FaPlay className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500">
                      Select a video or quiz to start learning
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseContent;
