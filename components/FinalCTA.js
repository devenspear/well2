import React from 'react';
import { generateWellnessPDF } from '../utils/pdfGenerator';
import { sendWellnessReport, sendEmailFallback } from '../utils/emailService';

const FinalCTA = ({ onRestart, formData, answers }) => {
  const [email, setEmail] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const [message, setMessage] = React.useState('');

  const handleDownloadPDF = async () => {
    setIsLoading(true);
    setMessage('');
    
    try {
      const doc = generateWellnessPDF(formData, answers);
      const pdfBlob = doc.output('blob');
      
      // Create download link
      const url = URL.createObjectURL(pdfBlob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `wellness-snapshot-${new Date().toISOString().split('T')[0]}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      
      setMessage('PDF downloaded successfully!');
    } catch (error) {
      console.error('PDF generation failed:', error);
      setMessage('Failed to generate PDF. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleShareWithFriend = () => {
    if (!email) {
      setMessage('Please enter an email address to share your results.');
      return;
    }
    
    setIsLoading(true);
    setMessage('');
    
    // For now, use the fallback email method
    // You can replace this with the EmailJS method once configured
    sendEmailFallback(email, formData, answers);
    setMessage('Email client opened! Please send the email manually.');
    setIsLoading(false);
  };

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
          <button 
            className="btn"
            onClick={handleDownloadPDF}
            disabled={isLoading}
          >
            {isLoading ? '⏳ Generating...' : '📄 Download PDF Report'}
          </button>
          
          <button
            onClick={onRestart}
            className="btn btn-secondary"
            disabled={isLoading}
          >
            🔄 Take Assessment Again
          </button>
          
          <button 
            className="btn btn-secondary"
            onClick={handleShareWithFriend}
            disabled={isLoading}
          >
            📤 Share with Friend
          </button>
        </div>

        {message && (
          <div style={{
            marginTop: '16px',
            padding: '12px',
            borderRadius: 'var(--radius)',
            background: message.includes('success') ? 'var(--success)' : 'var(--error)',
            color: 'white',
            textAlign: 'center',
            fontSize: '14px'
          }}>
            {message}
          </div>
        )}

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