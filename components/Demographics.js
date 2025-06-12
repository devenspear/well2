import React from 'react';

const Demographics = ({ onNext, formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="app-container">
      <div className="card fade-in">
        <div className="status-badge">
          👤 About You
        </div>
        <h2 className="title" style={{ textAlign: 'center' }}>
          Tell us about yourself
        </h2>
        <p className="text-sm" style={{ textAlign: 'center', marginBottom: '32px', marginTop: '8px' }}>
          This helps us provide personalized insights
        </p>
        
        <div className="form-group">
          <label className="form-label">
            Age Range
          </label>
          <select
            name="ageRange"
            value={formData.ageRange}
            onChange={handleChange}
            className="form-select"
            required
          >
            <option value="">Select your age range</option>
            <option value="50-59">50-59 years</option>
            <option value="60-69">60-69 years</option>
            <option value="70-79">70-79 years</option>
            <option value="80+">80+ years</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">
            Gender
          </label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="form-select"
            required
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
            <option value="prefer-not-to-say">Prefer not to say</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">
            Location (Optional)
          </label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="e.g., San Francisco, CA"
            className="form-input"
          />
        </div>

        <button
          onClick={onNext}
          disabled={!formData.ageRange || !formData.gender}
          className="btn"
        >
          Continue to Assessment →
        </button>
      </div>
    </div>
  );
};

export default Demographics; 