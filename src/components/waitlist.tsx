import { useState } from "react";

interface WaitlistFormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  company: string;
  message: string;
}

export const WaitlistForm = () => {
  const [formData, setFormData] = useState<WaitlistFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    company: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log("Waitlist form submitted:", formData);
    setIsSubmitted(true);
    setIsSubmitting(false);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        company: "",
        message: ""
      });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <div className="w-full py-20 lg:py-40">
        <div className="container max-w-6xl mx-auto">
          <div className="flex justify-center items-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">Thank you for joining our waitlist!</h3>
              <p className="text-gray-600">We'll be in touch soon with updates.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="w-full py-8 lg:py-12"
      style={{ backgroundColor: '#f1f1f1' }}
    >
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="flex flex-col gap-6 px-4 sm:px-0">
            <div className="flex flex-col gap-4">
              <div>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border border-gray-300 text-gray-800 bg-gray-100">
                  Join Waitlist
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-2xl sm:text-3xl md:text-5xl tracking-tighter max-w-xl text-left font-regular text-black">
                  Get Early Access
                </h4>
                <p className="text-base sm:text-lg leading-relaxed tracking-tight text-gray-600 max-w-sm text-left">
                  Be the first to receive your copy of "Living & Ageing Gracefully by the Power of God" 
                  and join our community of readers transforming their perspective on ageing.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-4 sm:gap-6 items-start text-left">
              <div className="w-4 h-4 mt-2 text-black flex-shrink-0">
                <svg fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-medium text-black text-sm sm:text-base">Early access</p>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Get your copy before the official launch date.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-4 sm:gap-6 items-start text-left">
              <div className="w-4 h-4 mt-2 text-black flex-shrink-0">
                <svg fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-medium text-black text-sm sm:text-base">Special pricing</p>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Enjoy exclusive pre-order pricing and bonus content.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-4 sm:gap-6 items-start text-left">
              <div className="w-4 h-4 mt-2 text-black flex-shrink-0">
                <svg fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-medium text-black text-sm sm:text-base">Author updates</p>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Receive personal insights and updates from the author.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full">
            <div className="w-full flex flex-col p-8 gap-6">
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-black mb-2">Pre-Order Your Copy</h3>
                <p className="text-gray-600">Fill out the form below to secure your copy</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name *
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent bg-white"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name *
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent bg-white"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent bg-white"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent bg-white"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

              

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-black text-black py-3 px-4 rounded-md font-medium  flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Joining...
                    </>
                  ) : (
                    <>
                      Pre-Order Now
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};