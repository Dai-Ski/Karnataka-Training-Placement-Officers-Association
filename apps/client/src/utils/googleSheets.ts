/**
 * Google Sheets Integration Utility
 * 
 * 📚 COMPLETE SETUP GUIDE: See /GOOGLE_SHEETS_QUICK_SETUP.md
 * 
 * QUICK INSTRUCTIONS:
 * 1. Create 4 Google Sheets (one for each form type)
 * 2. For each sheet: Extensions > Apps Script
 * 3. Paste the Apps Script code (see setup guide)
 * 4. Deploy as Web App (Execute as: Me, Access: Anyone)
 * 5. Copy each Web App URL
 * 6. Replace the placeholder URLs below with your actual URLs
 * 
 * ⚠️ IMPORTANT: You need 4 separate Web App URLs:
 *    - TPO Registration Sheet URL
 *    - Industry Registration Sheet URL
 *    - Student Registration Sheet URL
 *    - Contact Form Sheet URL
 */

// Replace these with your Google Apps Script Web App URLs
const GOOGLE_SHEETS_URLS = {
  tpo: 'YOUR_TPO_GOOGLE_APPS_SCRIPT_URL_HERE',
  industry: 'YOUR_INDUSTRY_GOOGLE_APPS_SCRIPT_URL_HERE',
  student: 'YOUR_STUDENT_GOOGLE_APPS_SCRIPT_URL_HERE',
  contact: 'YOUR_CONTACT_GOOGLE_APPS_SCRIPT_URL_HERE'
};

export async function submitToGoogleSheets(
  formType: 'tpo' | 'industry' | 'student' | 'contact',
  data: Record<string, any>
): Promise<{ success: boolean; message: string }> {
  const url = GOOGLE_SHEETS_URLS[formType];
  
  // If URL is not configured, show a warning but don't fail
  if (url.includes('YOUR_') || url.includes('_HERE')) {
    console.warn(`Google Sheets URL for ${formType} is not configured. Data:`, data);
    return {
      success: true,
      message: 'Form submitted successfully (Google Sheets not configured)'
    };
  }

  try {
    // Add timestamp
    const submissionData = {
      ...data,
      timestamp: new Date().toISOString()
    };

    const response = await fetch(url, {
      method: 'POST',
      mode: 'no-cors', // Required for Google Apps Script
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(submissionData)
    });

    // Note: With no-cors mode, we can't read the response
    // We assume success if no error was thrown
    return {
      success: true,
      message: 'Form submitted successfully to Google Sheets'
    };
  } catch (error) {
    console.error('Error submitting to Google Sheets:', error);
    return {
      success: false,
      message: 'Failed to submit to Google Sheets. Please try again.'
    };
  }
}
