/**
 * MongoDB API Integration Utility
 * Replaces the placeholder Google Sheets integration.
 * All form submissions are sent to the Node.js/Express backend which
 * persists data to MongoDB Atlas (KTPOA cluster).
 */

export async function submitRegistration(
  formType: 'tpo' | 'industry' | 'student',
  data: Record<string, unknown>
): Promise<{ success: boolean; message: string }> {
  try {
    const response = await fetch(`/api/register/${formType}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (response.ok && result.success) {
      return { success: true, message: result.message };
    } else {
      return {
        success: false,
        message: result.message || 'Submission failed. Please try again.',
      };
    }
  } catch (error) {
    console.error('API submission error:', error);
    return {
      success: false,
      message: 'Network error — please check your connection and try again.',
    };
  }
}
