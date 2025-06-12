import React from 'react';

const Landing = ({ onStart }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-md p-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          See where you stand.
        </h1>
        <h2 className="text-xl text-gray-600 mb-8">
          Take your first step to better wellness.
        </h2>
        <button
          onClick={onStart}
          className="w-full bg-indigo-600 text-white py-3 px-6 rounded-xl hover:bg-indigo-700 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          Start Your Wellness Snapshot
        </button>
        <p className="mt-6 text-sm text-gray-500">
          A simple, confidential assessment to help you understand your wellness journey.
        </p>
      </div>
    </div>
  );
};

export default Landing; 