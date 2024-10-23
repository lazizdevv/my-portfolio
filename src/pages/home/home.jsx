import React from "react";
import { Card } from "../../components/card";

const projects = [
  // {
  //   title: "ToDo List in Next",
  //   description:
  //     "This is a todo list application built with Next.js, providing users with an easy way to manage tasks. The app includes a dark mode feature, allowing users to toggle between light and dark themes. It is fully responsive, adapting smoothly to various screen sizes. CRUD (Create, Read, Update, Delete) operations are handled on separate pages for a more organized experience. Data is stored in local storage, ensuring persistence even after reloading the app. Additionally, Zustand is used for state management, offering a lightweight and efficient solution for handling the app's state",
  //   link: "https://8-month-homework-2.vercel.app",
  //   file: null,
  //   image: "/src/assets/images/imageToDo.png", // Random online image
  // },
  // {
  //   title: "Project 2",
  //   description:
  //     "A brief overview of Project 2. This includes technologies used and main features.",
  //   link: "https://your-project2-link.com",
  //   file: null, // No file provided for this project
  //   image: "https://picsum.photos/400/300?random=2", // Random online image
  // },
  // {
  //   title: "Project 3",
  //   description:
  //     "A brief overview of Project 3. This includes technologies used and main features.",
  //   link: "https://your-project3-link.com",
  //   file: "/files/project3.zip",
  //   image: "https://picsum.photos/400/300?random=3", // Random online image
  // },
];

const Portfolio = () => {
  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-300 min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-5xl font-bold text-center text-gray-800 mb-12">
        my portfolio is coming soon...
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <Card key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
