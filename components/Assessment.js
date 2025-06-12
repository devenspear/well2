import React from 'react';

const questions = [
  {
    id: 'energy',
    question: "How energetic do you feel throughout your average day?",
    category: "Body & Energy",
    emoji: "⚡"
  },
  {
    id: 'movement',
    question: "How often do you engage in physical activity (e.g., walking, stretching)?",
    category: "Movement & Exercise",
    emoji: "🏃‍♀️"
  },
  {
    id: 'sleep',
    question: "How well-rested do you feel when you wake up?",
    category: "Sleep & Recovery",
    emoji: "😴"
  },
  {
    id: 'nutrition',
    question: "How would you rate your current eating and hydration habits?",
    category: "Nutrition & Hydration",
    emoji: "🥗"
  },
  {
    id: 'mood',
    question: "How often do you feel mentally calm and emotionally balanced?",
    category: "Mind & Mood",
    emoji: "🧘‍♀️"
  },
  {
    id: 'purpose',
    question: "How connected do you feel to purpose, community, or goals?",
    category: "Purpose & Engagement",
    emoji: "🎯"
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
    <div className="app-container">
      <div className="card fade-in">
        <div className="progress-container">
          <div className="progress-info" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <span className="progress-text">Question {currentQuestion + 1} of {questions.length}</span>
            <span className="progress-text">{Math.round(progress)}% Complete</span>
          </div>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="question-section">
          <div className="question-category">
            {currentQ.emoji} {currentQ.category}
          </div>
          <h2 className="question-text">
            {currentQ.question}
          </h2>
        </div>

        <div className="slider-container">
          <input
            type="range"
            name={currentQ.id}
            min="0"
            max="10"
            value={answers[currentQ.id] || 5}
            onChange={handleSliderChange}
            className="slider"
          />
          <div className="slider-labels">
            <span className="slider-label">Not at all</span>
            <span className="slider-value">
              {answers[currentQ.id] || 5}
            </span>
            <span className="slider-label">Extremely</span>
          </div>
        </div>

        <button
          onClick={handleNext}
          className="btn"
        >
          {currentQuestion < questions.length - 1 ? 'Next Question →' : 'See My Results 🎉'}
        </button>
      </div>
    </div>
  );
};

export default Assessment; 