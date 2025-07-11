import jsPDF from 'jspdf';

export const generateWellnessPDF = (formData, answers) => {
  const doc = new jsPDF();
  
  // Calculate scores
  const averageScore = (Object.values(answers).reduce((a, b) => a + b, 0) / Object.values(answers).length).toFixed(1);
  const categories = {
    energy: 'Body & Energy',
    movement: 'Movement & Exercise', 
    sleep: 'Sleep & Recovery',
    nutrition: 'Nutrition & Hydration',
    mood: 'Mind & Mood',
    purpose: 'Purpose & Engagement'
  };

  // Find lowest and highest scoring categories
  const lowestScore = Math.min(...Object.values(answers));
  const lowestCategory = Object.entries(answers).find(([_, score]) => score === lowestScore)[0];
  const highestScore = Math.max(...Object.values(answers));
  const highestCategory = Object.entries(answers).find(([_, score]) => score === highestScore)[0];

  // Set font styles
  doc.setFontSize(24);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(99, 102, 241);
  doc.text('Wellness Snapshot Report', 105, 20, { align: 'center' });

  // Add date
  doc.setFontSize(12);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(100, 100, 100);
  doc.text(`Generated on: ${new Date().toLocaleDateString()}`, 105, 30, { align: 'center' });

  // Demographics section
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(0, 0, 0);
  doc.text('About You', 20, 50);

  doc.setFontSize(12);
  doc.setFont('helvetica', 'normal');
  doc.text(`Age Range: ${formData.ageRange || 'Not specified'}`, 20, 60);
  doc.text(`Gender: ${formData.gender || 'Not specified'}`, 20, 70);
  doc.text(`Location: ${formData.location || 'Not specified'}`, 20, 80);

  // Overall score
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text('Your Overall Wellness Score', 20, 100);
  
  doc.setFontSize(24);
  doc.setTextColor(99, 102, 241);
  doc.text(`${averageScore}/10`, 20, 115);

  // Individual scores
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(0, 0, 0);
  doc.text('Category Breakdown', 20, 140);

  let yPosition = 155;
  Object.entries(answers).forEach(([key, score]) => {
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    doc.text(`${categories[key]}: ${score}/10`, 20, yPosition);
    yPosition += 10;
  });

  // Recommendations
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text('Recommendations', 20, 200);

  doc.setFontSize(12);
  doc.setFont('helvetica', 'normal');
  doc.text(`💪 Your strongest area: ${categories[highestCategory]}`, 20, 215);
  doc.text(`🎯 Focus on improving: ${categories[lowestCategory]}`, 20, 225);

  // Add some wellness tips based on lowest score
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('Wellness Tips', 20, 245);

  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  
  const tips = {
    energy: [
      '• Get 7-9 hours of quality sleep',
      '• Stay hydrated throughout the day',
      '• Take short breaks every hour',
      '• Consider your caffeine intake'
    ],
    movement: [
      '• Start with 10-minute walks',
      '• Try gentle stretching exercises',
      '• Use stairs instead of elevators',
      '• Set a daily movement goal'
    ],
    sleep: [
      '• Establish a consistent bedtime',
      '• Create a relaxing bedtime routine',
      '• Keep your bedroom cool and dark',
      '• Avoid screens 1 hour before bed'
    ],
    nutrition: [
      '• Eat more whole foods',
      '• Stay hydrated with water',
      '• Plan your meals ahead',
      '• Listen to your hunger cues'
    ],
    mood: [
      '• Practice deep breathing exercises',
      '• Connect with friends and family',
      '• Try meditation or mindfulness',
      '• Spend time in nature'
    ],
    purpose: [
      '• Volunteer in your community',
      '• Learn a new skill or hobby',
      '• Set meaningful goals',
      '• Connect with like-minded people'
    ]
  };

  const currentTips = tips[lowestCategory] || tips.energy;
  currentTips.forEach((tip, index) => {
    doc.text(tip, 20, 260 + (index * 8));
  });

  // Footer
  doc.setFontSize(10);
  doc.setTextColor(100, 100, 100);
  doc.text('Generated by Wellness Snapshot - Take care of yourself!', 105, 280, { align: 'center' });

  return doc;
}; 