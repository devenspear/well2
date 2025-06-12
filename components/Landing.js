import React from 'react';

const Landing = ({ onStart }) => {
  return (
    <div className="app-container">
      <div className="card fade-in" style={{ textAlign: 'center' }}>
        <div className="status-badge">
          ✨ Welcome
        </div>
        <h1 className="title">
          See where you stand.
        </h1>
        <h2 className="subtitle">
          Take your first step to better wellness.
        </h2>
        <button
          onClick={onStart}
          className="btn"
        >
          🚀 Start Your Wellness Snapshot
        </button>
        <p className="text-sm">
          A simple, confidential assessment to help you understand your wellness journey.
        </p>
      </div>
    </div>
  );
};

export default Landing; 