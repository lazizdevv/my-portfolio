import React from "react";

export const Card = ({ project }) => {
  return (
    <>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-52 object-cover"
        />
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            {project.title}
          </h2>
          <p className="text-gray-600 mb-6 h-48 overflow-y-auto">{project.description}</p>
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
    </>
  );
};
