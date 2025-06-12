import React from 'react';
import ChartComponent from './ChartComponent';

const getRecommendation = (scores) => {
  const categories = {
    energy: 'Body & Energy',
    movement: 'Movement & Exercise',
    sleep: 'Sleep & Recovery',
    nutrition: 'Nutrition & Hydration',
    mood: 'Mind & Mood',
    purpose: 'Purpose & Engagement'
  };

  // Find the lowest scoring category
  const lowestScore = Math.min(...Object.values(scores));
  const lowestCategory = Object.entries(scores).find(([_, score]) => score === lowestScore)[0];

  // Find the highest scoring category
  const highestScore = Math.max(...Object.values(scores));
  const highestCategory = Object.entries(scores).find(([_, score]) => score === highestScore)[0];

  return {
    lowest: categories[lowestCategory],
    highest: categories[highestCategory]
  };
};

const Results = ({ onNext, answers }) => {
  const recommendation = getRecommendation(answers);
  const averageScore = (Object.values(answers).reduce((a, b) => a + b, 0) / Object.values(answers).length).toFixed(1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-md p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Your Wellness Snapshot
        </h2>

        <div className="mb-8">
          <ChartComponent userScores={answers} />
        </div>

        <div className="bg-indigo-50 rounded-xl p-6 mb-8">
          <h3 className="text-lg font-semibold text-indigo-800 mb-4">
            Your Results
          </h3>
          <p className="text-gray-700 mb-4">
            Overall Score: <span className="font-bold text-indigo-600">{averageScore}/10</span>
          </p>
          <p className="text-gray-700">
            You're strong in <span className="font-semibold">{recommendation.highest}</span>, 
            but consider focusing more on <span className="font-semibold">{recommendation.lowest}</span>.
          </p>
        </div>

        <button
          onClick={onNext}
          className="w-full bg-indigo-600 text-white py-3 px-6 rounded-xl hover:bg-indigo-700 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Results; 