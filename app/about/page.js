import React from "react";

const About = () => {
  return (
    <div className="max-h-screen bg-gray-100 flex flex-col items-center justify-center py-12">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">About TaskEase</h1>
        <p className="text-gray-700 mb-4 text-lg">Welcome to TaskEase, your go-to app for managing your daily tasks efficiently and effortlessly. Built with modern web technologies, TaskEase aims to streamline your task management process with ease.</p>
        <p className="text-gray-700 mb-4 text-lg">
          TaskEase leverages the power of <span className="font-semibold">Next.js</span> and <span className="font-semibold">MongoDB</span> to deliver a seamless experience. Whether you need to add new tasks, delete existing ones, or update their status, TaskEase has got you covered.
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4 text-lg">
          <li>Add new tasks easily.</li>
          <li>Delete tasks you no longer need.</li>
          <li>Update the status of your tasks to keep track of progress.</li>
        </ul>
        <p className="text-gray-700 text-lg">Start using TaskEase today and take control of your task management with simplicity and efficiency.</p>
      </div>
    </div>
  );
};

export default About;
