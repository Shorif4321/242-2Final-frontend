import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
        <img src="/logo.png" alt="Relive Logo" className="w-40 mb-6" />
        <h1 className="text-6xl font-bold text-teal-500 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-6 text-center max-w-md">
          Oops! The page you are looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 px-4 rounded-lg transition"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
