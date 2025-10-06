import emailjs from '@emailjs/browser';

// EmailJS configuration with fallbacks
export const EMAILJS_CONFIG = {
  // Try environment variables first, then fallback to hardcoded values
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_y44tviu',
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_2ows93k',
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'xVRfyayMKOcPq8Oho',
};

// Check if configuration is properly set
export const isEmailJSConfigured = () => {
  return (
    EMAILJS_CONFIG.SERVICE_ID !== '' &&
    EMAILJS_CONFIG.TEMPLATE_ID !== '' &&
    EMAILJS_CONFIG.PUBLIC_KEY !== '' &&
    EMAILJS_CONFIG.SERVICE_ID.startsWith('service_') &&
    EMAILJS_CONFIG.TEMPLATE_ID.startsWith('template_') &&
    EMAILJS_CONFIG.PUBLIC_KEY.length > 10
  );
};

// Initialize EmailJS
export const initEmailJS = () => {
  if (EMAILJS_CONFIG.PUBLIC_KEY) {
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
  }
};

// Send email function
export const sendWaitlistEmail = async (formData: {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  country: string;
  message: string;
}) => {
  if (!isEmailJSConfigured()) {
    throw new Error(
      'EmailJS is not properly configured. Please contact the administrator or check the configuration.'
    );
  }

  const templateParams = {
    from_name: `${formData.firstName} ${formData.lastName}`,
    from_email: formData.email,
    phone_number: formData.phoneNumber,
    country: formData.country,
    message: formData.message,
    to_name: 'Book Launch Team', // This will be replaced by your EmailJS template
  };

  try {
    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      templateParams,
      EMAILJS_CONFIG.PUBLIC_KEY
    );
    
    return response;
  } catch (error) {
    console.error('EmailJS Error:', error);
    throw error;
  }
};
