import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import html2pdf from "html2pdf.js";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

const ResumeBuilder = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, login } = useContext(AuthContext);
  const [step, setStep] = useState(1);
  const [showPreview, setShowPreview] = useState(false);
  const steps = [1, 2, 3, 4, 5, 6];
  const [resumeData, setResumeData] = useState({
    personalInfo: {
      fullName: "",
      email: "",
      phone: "",
      location: "",
      linkedin: "",
      summary: "",
    },
    education: [],
    experience: [],
    skills: [],
    projects: [],
    certifications: [],
  });

  const [newEducation, setNewEducation] = useState({
    institution: "",
    degree: "",
    field: "",
    startDate: "",
    endDate: "",
    description: "",
  });

  const [newExperience, setNewExperience] = useState({
    company: "",
    position: "",
    startDate: "",
    endDate: "",
    description: "",
  });

  const [newSkill, setNewSkill] = useState("");
  const [newProject, setNewProject] = useState({
    name: "",
    description: "",
    technologies: "",
    link: "",
  });

  const [newCertification, setNewCertification] = useState({
    name: "",
    issuer: "",
    date: "",
    link: "",
  });

  useEffect(() => {
    const checkAuth = async () => {
      // Check for token in URL
      const params = new URLSearchParams(location.search);
      const token = params.get("token");

      if (token) {
        // If token exists in URL, use it to login
        await login(token);
        // Remove token from URL without reloading
        window.history.replaceState({}, document.title, "/resume-builder");
      }
    };

    checkAuth();
  }, [location, login]);

  // If no user is authenticated, don't render the component
  if (!user) {
    return null; // This will trigger the ProtectedRoute to redirect to login
  }

  const handlePersonalInfoChange = (e) => {
    setResumeData({
      ...resumeData,
      personalInfo: {
        ...resumeData.personalInfo,
        [e.target.name]: e.target.value,
      },
    });
  };

  const addEducation = () => {
    setResumeData({
      ...resumeData,
      education: [...resumeData.education, newEducation],
    });
    setNewEducation({
      institution: "",
      degree: "",
      field: "",
      startDate: "",
      endDate: "",
      description: "",
    });
  };

  const addExperience = () => {
    setResumeData({
      ...resumeData,
      experience: [...resumeData.experience, newExperience],
    });
    setNewExperience({
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      description: "",
    });
  };

  const addSkill = () => {
    if (newSkill.trim()) {
      setResumeData({
        ...resumeData,
        skills: [...resumeData.skills, newSkill.trim()],
      });
      setNewSkill("");
    }
  };

  const addProject = () => {
    setResumeData({
      ...resumeData,
      projects: [...resumeData.projects, newProject],
    });
    setNewProject({
      name: "",
      description: "",
      technologies: "",
      link: "",
    });
  };

  const addCertification = () => {
    setResumeData({
      ...resumeData,
      certifications: [...resumeData.certifications, newCertification],
    });
    setNewCertification({
      name: "",
      issuer: "",
      date: "",
      link: "",
    });
  };

  const removeItem = (section, index) => {
    setResumeData({
      ...resumeData,
      [section]: resumeData[section].filter((_, i) => i !== index),
    });
  };

  const generateResume = () => {
    setShowPreview(true);
  };

  const downloadPDF = () => {
    const element = document.getElementById("resume-preview");
    const opt = {
      margin: [0.3, 0.3, 0.3, 0.3],
      filename: "my-resume.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };
    html2pdf().set(opt).from(element).save();
  };

  const loadDemoData = () => {
    setResumeData({
      personalInfo: {
        fullName: "John Smith",
        email: "john.smith@example.com",
        phone: "(555) 123-4567",
        location: "San Francisco, CA",
        linkedin: "https://linkedin.com/in/johnsmith",
        summary:
          "Full-stack developer with 3+ years of experience in React and Node.js. Passionate about building scalable applications and leading development teams.",
      },
      education: [
        {
          institution: "Stanford University",
          degree: "Master of Science",
          field: "Computer Science",
          startDate: "2018-09",
          endDate: "2020-06",
          description:
            "Specialized in Software Engineering. Graduated with honors.",
        },
      ],
      experience: [
        {
          company: "Tech Solutions Inc.",
          position: "Senior Software Engineer",
          startDate: "2020-07",
          endDate: "Present",
          description:
            "Lead development of enterprise web applications. Implemented CI/CD pipelines reducing deployment time by 40%. Architected microservices using Node.js and React.",
        },
        {
          company: "Innovate Tech",
          position: "Software Engineer",
          startDate: "2019-01",
          endDate: "2020-06",
          description:
            "Developed React-based web applications. Implemented automated testing reducing bug reports by 30%. Collaborated with UX designers.",
        },
      ],
      skills: [
        "JavaScript",
        "React",
        "Node.js",
        "Python",
        "AWS",
        "Docker",
        "MongoDB",
        "Git",
        "CI/CD",
        "RESTful APIs",
      ],
      projects: [
        {
          name: "E-Commerce Platform",
          description:
            "Full-stack e-commerce platform with real-time inventory management and payment processing.",
          technologies: "React, Node.js, MongoDB, AWS",
          link: "https://github.com/johnsmith/ecommerce-platform",
        },
      ],
      certifications: [
        {
          name: "AWS Certified Solutions Architect",
          issuer: "Amazon Web Services",
          date: "2022-06",
          link: "https://aws.amazon.com/certification/",
        },
      ],
    });
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold mb-4">Personal Information</h2>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={resumeData.personalInfo.fullName}
                onChange={handlePersonalInfoChange}
                className="p-2 border rounded"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={resumeData.personalInfo.email}
                onChange={handlePersonalInfoChange}
                className="p-2 border rounded"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={resumeData.personalInfo.phone}
                onChange={handlePersonalInfoChange}
                className="p-2 border rounded"
              />
              <input
                type="text"
                name="location"
                placeholder="Location"
                value={resumeData.personalInfo.location}
                onChange={handlePersonalInfoChange}
                className="p-2 border rounded"
              />
              <input
                type="url"
                name="linkedin"
                placeholder="LinkedIn URL"
                value={resumeData.personalInfo.linkedin}
                onChange={handlePersonalInfoChange}
                className="p-2 border rounded"
              />
            </div>
            <textarea
              name="summary"
              placeholder="Professional Summary"
              value={resumeData.personalInfo.summary}
              onChange={handlePersonalInfoChange}
              className="w-full p-2 border rounded h-32"
            />
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold mb-4">Education</h2>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Institution"
                value={newEducation.institution}
                onChange={(e) =>
                  setNewEducation({
                    ...newEducation,
                    institution: e.target.value,
                  })
                }
                className="p-2 border rounded"
              />
              <input
                type="text"
                placeholder="Degree"
                value={newEducation.degree}
                onChange={(e) =>
                  setNewEducation({ ...newEducation, degree: e.target.value })
                }
                className="p-2 border rounded"
              />
              <input
                type="text"
                placeholder="Field of Study"
                value={newEducation.field}
                onChange={(e) =>
                  setNewEducation({ ...newEducation, field: e.target.value })
                }
                className="p-2 border rounded"
              />
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="date"
                  placeholder="Start Date"
                  value={newEducation.startDate}
                  onChange={(e) =>
                    setNewEducation({
                      ...newEducation,
                      startDate: e.target.value,
                    })
                  }
                  className="p-2 border rounded"
                />
                <input
                  type="date"
                  placeholder="End Date"
                  value={newEducation.endDate}
                  onChange={(e) =>
                    setNewEducation({
                      ...newEducation,
                      endDate: e.target.value,
                    })
                  }
                  className="p-2 border rounded"
                />
              </div>
            </div>
            <textarea
              placeholder="Description"
              value={newEducation.description}
              onChange={(e) =>
                setNewEducation({
                  ...newEducation,
                  description: e.target.value,
                })
              }
              className="w-full p-2 border rounded h-32"
            />
            <button
              onClick={addEducation}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Add Education
            </button>

            {/* Display added education items */}
            <div className="mt-4 space-y-4">
              {resumeData.education.map((edu, index) => (
                <div key={index} className="border p-4 rounded">
                  <h3 className="font-bold">{edu.institution}</h3>
                  <p>
                    {edu.degree} in {edu.field}
                  </p>
                  <p>
                    {edu.startDate} - {edu.endDate}
                  </p>
                  <p>{edu.description}</p>
                  <button
                    onClick={() => removeItem("education", index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Company"
                value={newExperience.company}
                onChange={(e) =>
                  setNewExperience({
                    ...newExperience,
                    company: e.target.value,
                  })
                }
                className="p-2 border rounded"
              />
              <input
                type="text"
                placeholder="Position"
                value={newExperience.position}
                onChange={(e) =>
                  setNewExperience({
                    ...newExperience,
                    position: e.target.value,
                  })
                }
                className="p-2 border rounded"
              />
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="date"
                  placeholder="Start Date"
                  value={newExperience.startDate}
                  onChange={(e) =>
                    setNewExperience({
                      ...newExperience,
                      startDate: e.target.value,
                    })
                  }
                  className="p-2 border rounded"
                />
                <input
                  type="date"
                  placeholder="End Date"
                  value={newExperience.endDate}
                  onChange={(e) =>
                    setNewExperience({
                      ...newExperience,
                      endDate: e.target.value,
                    })
                  }
                  className="p-2 border rounded"
                />
              </div>
            </div>
            <textarea
              placeholder="Description"
              value={newExperience.description}
              onChange={(e) =>
                setNewExperience({
                  ...newExperience,
                  description: e.target.value,
                })
              }
              className="w-full p-2 border rounded h-32"
            />
            <button
              onClick={addExperience}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Add Experience
            </button>

            {/* Display added experience items */}
            <div className="mt-4 space-y-4">
              {resumeData.experience.map((exp, index) => (
                <div key={index} className="border p-4 rounded">
                  <h3 className="font-bold">{exp.company}</h3>
                  <p>{exp.position}</p>
                  <p>
                    {exp.startDate} - {exp.endDate}
                  </p>
                  <p>{exp.description}</p>
                  <button
                    onClick={() => removeItem("experience", index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold mb-4">Skills</h2>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Add a skill"
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                className="flex-1 p-2 border rounded"
              />
              <button
                onClick={addSkill}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Add
              </button>
            </div>

            {/* Display added skills */}
            <div className="mt-4 flex flex-wrap gap-2">
              {resumeData.skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-gray-100 px-3 py-1 rounded-full flex items-center"
                >
                  <span>{skill}</span>
                  <button
                    onClick={() => removeItem("skills", index)}
                    className="ml-2 text-red-500 hover:text-red-700"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold mb-4">Projects</h2>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Project Name"
                value={newProject.name}
                onChange={(e) =>
                  setNewProject({ ...newProject, name: e.target.value })
                }
                className="p-2 border rounded"
              />
              <input
                type="text"
                placeholder="Technologies Used"
                value={newProject.technologies}
                onChange={(e) =>
                  setNewProject({ ...newProject, technologies: e.target.value })
                }
                className="p-2 border rounded"
              />
              <input
                type="url"
                placeholder="Project Link"
                value={newProject.link}
                onChange={(e) =>
                  setNewProject({ ...newProject, link: e.target.value })
                }
                className="p-2 border rounded"
              />
            </div>
            <textarea
              placeholder="Project Description"
              value={newProject.description}
              onChange={(e) =>
                setNewProject({ ...newProject, description: e.target.value })
              }
              className="w-full p-2 border rounded h-32"
            />
            <button
              onClick={addProject}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Add Project
            </button>

            {/* Display added projects */}
            <div className="mt-4 space-y-4">
              {resumeData.projects.map((project, index) => (
                <div key={index} className="border p-4 rounded">
                  <h3 className="font-bold">{project.name}</h3>
                  <p>Technologies: {project.technologies}</p>
                  <p>{project.description}</p>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      View Project
                    </a>
                  )}
                  <button
                    onClick={() => removeItem("projects", index)}
                    className="block mt-2 text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </div>
        );

      case 6:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold mb-4">Certifications</h2>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Certification Name"
                value={newCertification.name}
                onChange={(e) =>
                  setNewCertification({
                    ...newCertification,
                    name: e.target.value,
                  })
                }
                className="p-2 border rounded"
              />
              <input
                type="text"
                placeholder="Issuing Organization"
                value={newCertification.issuer}
                onChange={(e) =>
                  setNewCertification({
                    ...newCertification,
                    issuer: e.target.value,
                  })
                }
                className="p-2 border rounded"
              />
              <input
                type="date"
                placeholder="Date Earned"
                value={newCertification.date}
                onChange={(e) =>
                  setNewCertification({
                    ...newCertification,
                    date: e.target.value,
                  })
                }
                className="p-2 border rounded"
              />
              <input
                type="url"
                placeholder="Certification Link"
                value={newCertification.link}
                onChange={(e) =>
                  setNewCertification({
                    ...newCertification,
                    link: e.target.value,
                  })
                }
                className="p-2 border rounded"
              />
            </div>
            <button
              onClick={addCertification}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Add Certification
            </button>

            {/* Display added certifications */}
            <div className="mt-4 space-y-4">
              {resumeData.certifications.map((cert, index) => (
                <div key={index} className="border p-4 rounded">
                  <h3 className="font-bold">{cert.name}</h3>
                  <p>Issued by: {cert.issuer}</p>
                  <p>Date: {cert.date}</p>
                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      View Certificate
                    </a>
                  )}
                  <button
                    onClick={() => removeItem("certifications", index)}
                    className="block mt-2 text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Resume Builder</h1>
        <button
          onClick={loadDemoData}
          className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition-colors"
        >
          Load Demo Data
        </button>
      </div>

      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          {steps.map((num) => (
            <div
              key={num}
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                num <= step ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
            >
              {num}
            </div>
          ))}
        </div>
        <div className="h-2 bg-gray-200 rounded">
          <div
            className="h-full bg-blue-500 rounded transition-all duration-300"
            style={{ width: `${((step - 1) / 5) * 100}%` }}
          />
        </div>
      </div>

      {/* Form content */}
      <div className="bg-white p-6 rounded-lg shadow-md">{renderStep()}</div>

      {/* Navigation buttons */}
      <div className="mt-6 flex justify-between">
        <button
          onClick={() => setStep(step - 1)}
          disabled={step === 1}
          className={`px-4 py-2 rounded ${
            step === 1
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-gray-500 text-white hover:bg-gray-600"
          }`}
        >
          Previous
        </button>
        {step < 6 ? (
          <button
            onClick={() => setStep(step + 1)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Next
          </button>
        ) : (
          <button
            onClick={generateResume}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Generate Resume
          </button>
        )}
      </div>

      {/* Resume Preview Modal */}
      {showPreview && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-11/12 max-w-4xl max-h-[90vh] flex flex-col">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-xl font-bold">Resume Preview</h2>
              <button
                onClick={() => setShowPreview(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="overflow-y-auto p-4 flex-grow">
              <ResumePreview data={resumeData} />
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t flex justify-end">
              <button
                onClick={downloadPDF}
                className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors"
              >
                Download PDF
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const ResumePreview = ({ data }) => {
  return (
    <div
      id="resume-preview"
      className="p-4 bg-white text-black rounded shadow-md max-w-2xl mx-auto font-sans"
    >
      {/* Header Section */}
      <div className="text-center border-b border-gray-300 pb-2 mb-3">
        <h1 className="text-3xl font-bold text-gray-800 mb-1">
          {data.personalInfo.fullName}
        </h1>
        <div className="flex justify-center items-center gap-3 text-gray-600 text-sm">
          <span>{data.personalInfo.email}</span>
          <span>•</span>
          <span>{data.personalInfo.phone}</span>
          <span>•</span>
          <span>{data.personalInfo.location}</span>
        </div>
        {data.personalInfo.linkedin && (
          <a
            href={data.personalInfo.linkedin}
            className="text-blue-600 hover:underline text-sm mt-1 inline-block"
          >
            LinkedIn Profile
          </a>
        )}
      </div>

      {/* Summary Section */}
      {data.personalInfo.summary && (
        <div className="mb-3">
          <h2 className="text-lg font-bold text-gray-800 border-b border-gray-300 pb-1 mb-2">
            Professional Summary
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed">
            {data.personalInfo.summary}
          </p>
        </div>
      )}

      {/* Experience Section */}
      {data.experience.length > 0 && (
        <div className="mb-3">
          <h2 className="text-lg font-bold text-gray-800 border-b border-gray-300 pb-1 mb-2">
            Professional Experience
          </h2>
          {data.experience.map((exp, i) => (
            <div key={i} className="mb-2">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-gray-800 text-sm">
                    {exp.position}
                  </h3>
                  <p className="text-gray-600 text-sm">{exp.company}</p>
                </div>
                <p className="text-gray-600 text-xs">
                  {exp.startDate} - {exp.endDate}
                </p>
              </div>
              <p className="text-gray-700 mt-1 text-sm leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Education Section */}
      {data.education.length > 0 && (
        <div className="mb-3">
          <h2 className="text-lg font-bold text-gray-800 border-b border-gray-300 pb-1 mb-2">
            Education
          </h2>
          {data.education.map((edu, i) => (
            <div key={i} className="mb-2">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-gray-800 text-sm">
                    {edu.institution}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {edu.degree} in {edu.field}
                  </p>
                </div>
                <p className="text-gray-600 text-xs">
                  {edu.startDate} - {edu.endDate}
                </p>
              </div>
              {edu.description && (
                <p className="text-gray-700 mt-1 text-sm leading-relaxed">
                  {edu.description}
                </p>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Skills Section */}
      {data.skills.length > 0 && (
        <div className="mb-3">
          <h2 className="text-lg font-bold text-gray-800 border-b border-gray-300 pb-1 mb-2">
            Skills
          </h2>
          <div className="flex flex-wrap gap-1">
            {data.skills.map((skill, i) => (
              <span
                key={i}
                className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full text-xs"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Projects Section */}
      {data.projects.length > 0 && (
        <div className="mb-3">
          <h2 className="text-lg font-bold text-gray-800 border-b border-gray-300 pb-1 mb-2">
            Projects
          </h2>
          {data.projects.map((project, i) => (
            <div key={i} className="mb-2">
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-gray-800 text-sm">
                  {project.name}
                </h3>
                {project.link && (
                  <a
                    href={project.link}
                    className="text-blue-600 hover:underline text-xs"
                  >
                    View Project
                  </a>
                )}
              </div>
              <p className="text-gray-700 mt-1 text-sm leading-relaxed">
                {project.description}
              </p>
              <p className="text-gray-600 mt-0.5 text-xs">
                <span className="font-semibold">Technologies:</span>{" "}
                {project.technologies}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Certifications Section */}
      {data.certifications.length > 0 && (
        <div className="mb-3">
          <h2 className="text-lg font-bold text-gray-800 border-b border-gray-300 pb-1 mb-2">
            Certifications
          </h2>
          {data.certifications.map((cert, i) => (
            <div key={i} className="mb-2">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-gray-800 text-sm">
                    {cert.name}
                  </h3>
                  <p className="text-gray-600 text-sm">{cert.issuer}</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-600 text-xs">{cert.date}</p>
                  {cert.link && (
                    <a
                      href={cert.link}
                      className="text-blue-600 hover:underline text-xs block"
                    >
                      View Certificate
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ResumeBuilder;
