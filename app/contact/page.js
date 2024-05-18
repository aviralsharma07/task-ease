import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-12">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">Contact Me</h1>
        <p className="text-gray-700 mb-4 text-lg text-center">You can reach out to me through the following platforms:</p>
        <div className="flex flex-col gap-4">
          <a href="https://github.com/aviralsharma07" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-lg">
            GitHub
          </a>
          <a href="https://twitter.com/_aviral07" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-lg">
            Twitter
          </a>
          <a href="https://linkedin.com/in/aviral07" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-lg">
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
