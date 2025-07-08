# Email Setup Guide

## Current Implementation

The wellness app now has **client-side PDF generation** with **email sharing capabilities**!

### ✅ What's Working Now

1. **PDF Download**: Users can download a detailed PDF report with their wellness scores and recommendations
2. **Email Sharing**: Users can share their results via their default email client

### 🚀 Enhanced Email Options

For professional email delivery with PDF attachments, you can set up EmailJS:

## Option 1: EmailJS Setup (Recommended)

1. **Sign up at [EmailJS.com](https://www.emailjs.com/)**
2. **Create an Email Service**:
   - Go to Email Services
   - Add Gmail, Outlook, or other email provider
   - Note your Service ID

3. **Create an Email Template**:
   - Go to Email Templates
   - Create a new template with variables:
     - `{{to_email}}` - recipient email
     - `{{user_name}}` - user's name/age
     - `{{overall_score}}` - wellness score
     - `{{assessment_date}}` - assessment date
   - Note your Template ID

4. **Get Your Public Key**:
   - Go to Account → API Keys
   - Copy your Public Key

5. **Update Configuration**:
   - Open `utils/emailService.js`
   - Replace the placeholder values:
     ```javascript
     const EMAILJS_CONFIG = {
       serviceId: 'YOUR_ACTUAL_SERVICE_ID',
       templateId: 'YOUR_ACTUAL_TEMPLATE_ID', 
       publicKey: 'YOUR_ACTUAL_PUBLIC_KEY'
     };
     ```

6. **Enable EmailJS in FinalCTA**:
   - In `components/FinalCTA.js`, replace `sendEmailFallback` with `sendWellnessReport`

## Option 2: Current Fallback (Working Now)

The app currently uses the browser's default email client:
- Opens user's email app (Gmail, Outlook, etc.)
- Pre-fills subject and body with wellness results
- User manually sends the email

## Features Included

### PDF Report Contains:
- ✅ User demographics
- ✅ Overall wellness score
- ✅ Individual category scores
- ✅ Personalized recommendations
- ✅ Wellness tips based on lowest score
- ✅ Professional formatting

### Email Features:
- ✅ PDF attachment capability
- ✅ Pre-filled email content
- ✅ User-friendly interface
- ✅ Loading states and error handling

## Testing

1. Complete the wellness assessment
2. On the final screen, try:
   - **Download PDF**: Should generate and download a PDF report
   - **Share with Friend**: Should open email client with pre-filled content

## Next Steps

1. Set up EmailJS for professional email delivery
2. Consider adding email validation
3. Add analytics to track PDF downloads and email shares
4. Consider adding social media sharing options 