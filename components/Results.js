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

const getScoreLevel = (score) => {
  if (score >= 8) return { text: 'Excellent', emoji: '🌟', color: '#10b981' };
  if (score >= 6) return { text: 'Good', emoji: '👍', color: '#06b6d4' };
  if (score >= 4) return { text: 'Fair', emoji: '⚖️', color: '#f59e0b' };
  return { text: 'Needs Focus', emoji: '💪', color: '#ef4444' };
};

const Results = ({ onNext, answers }) => {
  const recommendation = getRecommendation(answers);
  const averageScore = (Object.values(answers).reduce((a, b) => a + b, 0) / Object.values(answers).length).toFixed(1);
  const scoreLevel = getScoreLevel(parseFloat(averageScore));

  return (
    <div className="app-container">
      <div className="card fade-in">
        <div className="status-badge" style={{ background: scoreLevel.color }}>
          {scoreLevel.emoji} {scoreLevel.text}
        </div>
        <h2 className="title" style={{ textAlign: 'center' }}>
          Your Wellness Snapshot
        </h2>
        <p className="text-sm" style={{ textAlign: 'center', marginBottom: '24px', marginTop: '8px' }}>
          Here's how you're doing across all wellness areas
        </p>

        <div className="chart-container">
          <ChartComponent userScores={answers} />
        </div>

        <div className="results-section">
          <h3 className="results-title">
            📊 Your Overall Score
          </h3>
          <div className="results-score">
            Overall Wellness Score: <span className="score-highlight">{averageScore}/10</span>
          </div>
          <p className="results-text">
            💪 You're strong in <span style={{ fontWeight: '600', color: 'var(--primary)' }}>{recommendation.highest}</span>, 
            but consider focusing more on <span style={{ fontWeight: '600', color: 'var(--accent)' }}>{recommendation.lowest}</span> 
            to enhance your overall wellness journey.
          </p>
        </div>

        <button
          onClick={onNext}
          className="btn"
        >
          Get My Action Plan 📋
        </button>
      </div>
    </div>
  );
};

export default Results; 