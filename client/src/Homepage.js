// Homepage.js
import React from "react";

const Homepage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex flex-col items-center justify-center p-6">
      
      {/* תמונה ראשית */}
      <img
        src="/mylogo.png" // החליפי לנתיב הנכון
        alt="Platform Illustration"
        className="w-64 md:w-96 mb-8 rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-500"
      />

      {/* כותרת ראשית */}
      <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 text-center mb-4">
        Welcome to Elite Platform
      </h1>

      {/* תיאור קצר */}
      <p className="text-lg md:text-2xl text-gray-700 text-center max-w-xl">
        Manage your tasks, posts, users, and photos easily and elegantly.
      </p>

    </div>
  );
};

export default Homepage;
