import React from 'react';

const FinalCTA = ({ onRestart }) => {
  const [email, setEmail] = React.useState('');

  return (
    <div className="app-container">
      <div className="card fade-in">
        <div className="status-badge">
          🎉 Complete
        </div>
        <h2 className="title" style={{ textAlign: 'center' }}>
          Keep Your Results
        </h2>
        <p className="text-sm" style={{ textAlign: 'center', marginBottom: '32px', marginTop: '8px' }}>
          Save your wellness snapshot and track your progress
        </p>

        <div className="form-group">
          <label className="form-label">
            📧 Get results via email (optional)
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="form-input"
          />
        </div>

        <div className="button-group">
          <button className="btn">
            📄 Download PDF Report
          </button>
          
          <button
            onClick={onRestart}
            className="btn btn-secondary"
          >
            🔄 Take Assessment Again
          </button>
          
          <button className="btn btn-secondary">
            📤 Share with Friend
          </button>
        </div>

        <div style={{ 
          textAlign: 'center', 
          marginTop: '24px',
          padding: '16px',
          background: 'var(--surface-elevated)',
          borderRadius: 'var(--radius)',
          border: '1px solid var(--border)'
        }}>
          <p className="text-xs">
            🔒 Your privacy is important to us. We'll never share your information.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FinalCTA; 