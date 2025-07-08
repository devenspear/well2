import emailjs from '@emailjs/browser';

// EmailJS configuration
// You'll need to sign up at https://www.emailjs.com/ and get these IDs
const EMAILJS_CONFIG = {
  serviceId: 'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
  templateId: 'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
  publicKey: 'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
};

export const sendWellnessReport = async (email, formData, answers, pdfBlob) => {
  try {
    // Convert PDF blob to base64 for email attachment
    const reader = new FileReader();
    const pdfBase64 = await new Promise((resolve) => {
      reader.onload = () => {
        const base64 = reader.result.split(',')[1];
        resolve(base64);
      };
      reader.readAsDataURL(pdfBlob);
    });

    // Prepare email template parameters
    const templateParams = {
      to_email: email,
      user_name: formData.ageRange ? `User (${formData.ageRange})` : 'Wellness Snapshot User',
      overall_score: (Object.values(answers).reduce((a, b) => a + b, 0) / Object.values(answers).length).toFixed(1),
      assessment_date: new Date().toLocaleDateString(),
      pdf_attachment: pdfBase64
    };

    // Send email using EmailJS
    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      templateParams,
      EMAILJS_CONFIG.publicKey
    );

    return { success: true, message: 'Report sent successfully!' };
  } catch (error) {
    console.error('Email sending failed:', error);
    return { success: false, message: 'Failed to send email. Please try again.' };
  }
};

// Alternative: Simple email with mailto link (fallback)
export const sendEmailFallback = (email, formData, answers) => {
  const averageScore = (Object.values(answers).reduce((a, b) => a + b, 0) / Object.values(answers).length).toFixed(1);
  
  const subject = encodeURIComponent('My Wellness Snapshot Report');
  const body = encodeURIComponent(`
Hi there,

I just completed my wellness assessment and wanted to share my results with you.

My overall wellness score: ${averageScore}/10

Assessment Date: ${new Date().toLocaleDateString()}

Categories:
- Energy: ${answers.energy}/10
- Movement: ${answers.movement}/10  
- Sleep: ${answers.sleep}/10
- Nutrition: ${answers.nutrition}/10
- Mood: ${answers.mood}/10
- Purpose: ${answers.purpose}/10

Take your own assessment at: [Your Website URL]

Best regards,
${formData.ageRange ? `User (${formData.ageRange})` : 'Wellness Snapshot User'}
  `);

  const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;
  window.open(mailtoLink);
}; 