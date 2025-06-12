import React from 'react';

const FinalCTA = ({ onRestart }) => {
  const [email, setEmail] = React.useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-md p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Keep Your Results
        </h2>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Get your results via email (optional)
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <button
            className="w-full bg-indigo-600 text-white py-3 px-6 rounded-xl hover:bg-indigo-700 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Download Results as PDF
          </button>

          <div className="flex flex-col space-y-4">
            <button
              onClick={onRestart}
              className="w-full bg-white text-indigo-600 py-3 px-6 rounded-xl border-2 border-indigo-600 hover:bg-indigo-50 transition-colors duration-200"
            >
              Try Again
            </button>
            <button
              className="w-full bg-white text-indigo-600 py-3 px-6 rounded-xl border-2 border-indigo-600 hover:bg-indigo-50 transition-colors duration-200"
            >
              Share With a Friend
            </button>
          </div>
        </div>

        <p className="mt-8 text-sm text-gray-500 text-center">
          Your privacy is important to us. We'll never share your information.
        </p>
      </div>
    </div>
  );
};

export default FinalCTA; 