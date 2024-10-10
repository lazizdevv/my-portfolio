import React from "react";

const projects = [
  {
    title: "Project 1",
    description: "A brief overview of Project 1. This includes technologies used and main features.",
    link: "https://your-project1-link.com",
    file: "/files/project1.zip",
    image: "https://picsum.photos/400/300?random=1", // Random online image
  },
  {
    title: "Project 2",
    description: "A brief overview of Project 2. This includes technologies used and main features.",
    link: "https://your-project2-link.com",
    file: null, // No file provided for this project
    image: "https://picsum.photos/400/300?random=2", // Random online image
  },
  {
    title: "Project 3",
    description: "A brief overview of Project 3. This includes technologies used and main features.",
    link: "https://your-project3-link.com",
    file: "/files/project3.zip",
    image: "https://picsum.photos/400/300?random=3", // Random online image
  },
];

const Portfolio = () => {
  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-300 min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-5xl font-bold text-center text-gray-800 mb-12">
          My Portfolio
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  {project.title}
                </h2>
                <p className="text-gray-600 mb-6">{project.description}</p>
                <div className="mt-auto">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-indigo-500 hover:bg-indigo-600 text-white text-center py-2 rounded-md transition-all duration-300 shadow-lg"
                  >
                    View Project
                  </a>
                  {project.file && (
                    <a
                      href={project.file}
                      download
                      className="block w-full bg-gray-500 hover:bg-gray-600 text-white text-center py-2 rounded-md mt-4 transition-all duration-300 shadow-lg"
                    >
                      Download Files
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
