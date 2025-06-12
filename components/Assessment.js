import React from 'react';

const questions = [
  {
    id: 'energy',
    question: "How energetic do you feel throughout your average day?",
    category: "Body & Energy"
  },
  {
    id: 'movement',
    question: "How often do you engage in physical activity (e.g., walking, stretching)?",
    category: "Movement & Exercise"
  },
  {
    id: 'sleep',
    question: "How well-rested do you feel when you wake up?",
    category: "Sleep & Recovery"
  },
  {
    id: 'nutrition',
    question: "How would you rate your current eating and hydration habits?",
    category: "Nutrition & Hydration"
  },
  {
    id: 'mood',
    question: "How often do you feel mentally calm and emotionally balanced?",
    category: "Mind & Mood"
  },
  {
    id: 'purpose',
    question: "How connected do you feel to purpose, community, or goals?",
    category: "Purpose & Engagement"
  }
];

const Assessment = ({ onComplete, answers, setAnswers }) => {
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleSliderChange = (e) => {
    const { name, value } = e.target;
    setAnswers(prev => ({
      ...prev,
      [name]: parseInt(value)
    }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      onComplete();
    }
  };

  const currentQ = questions[currentQuestion];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-md p-8">
        <div className="mb-6">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Question {currentQuestion + 1} of {questions.length}</span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-sm font-medium text-indigo-600 mb-2">
            {currentQ.category}
          </h3>
          <h2 className="text-xl font-semibold text-gray-800">
            {currentQ.question}
          </h2>
        </div>

        <div className="mb-8">
          <input
            type="range"
            name={currentQ.id}
            min="0"
            max="10"
            value={answers[currentQ.id] || 5}
            onChange={handleSliderChange}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-sm text-gray-600 mt-2">
            <span>0</span>
            <span className="text-xl font-bold text-indigo-600">
              {answers[currentQ.id] || 5}
            </span>
            <span>10</span>
          </div>
        </div>

        <button
          onClick={handleNext}
          className="w-full bg-indigo-600 text-white py-3 px-6 rounded-xl hover:bg-indigo-700 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          {currentQuestion < questions.length - 1 ? 'Next Question' : 'See Results'}
        </button>
      </div>
    </div>
  );
};

export default Assessment; 