import { useState } from "react";

interface WaitlistFormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  country: string;
  company: string;
  message: string;
}

export const WaitlistForm = () => {
  const [formData, setFormData] = useState<WaitlistFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    country: "",
    company: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
        country: "",
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

                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                    Country *
                  </label>
                  <select
                    id="country"
                    name="country"
                    required
                    value={formData.country}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent bg-white text-gray-900"
                  >
                    <option value="">Select your country</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="GB">United Kingdom</option>
                    <option value="AU">Australia</option>
                    <option value="DE">Germany</option>
                    <option value="FR">France</option>
                    <option value="IT">Italy</option>
                    <option value="ES">Spain</option>
                    <option value="NL">Netherlands</option>
                    <option value="SE">Sweden</option>
                    <option value="NO">Norway</option>
                    <option value="DK">Denmark</option>
                    <option value="FI">Finland</option>
                    <option value="CH">Switzerland</option>
                    <option value="AT">Austria</option>
                    <option value="BE">Belgium</option>
                    <option value="IE">Ireland</option>
                    <option value="PT">Portugal</option>
                    <option value="GR">Greece</option>
                    <option value="PL">Poland</option>
                    <option value="CZ">Czech Republic</option>
                    <option value="HU">Hungary</option>
                    <option value="RO">Romania</option>
                    <option value="BG">Bulgaria</option>
                    <option value="HR">Croatia</option>
                    <option value="SI">Slovenia</option>
                    <option value="SK">Slovakia</option>
                    <option value="LT">Lithuania</option>
                    <option value="LV">Latvia</option>
                    <option value="EE">Estonia</option>
                    <option value="JP">Japan</option>
                    <option value="KR">South Korea</option>
                    <option value="CN">China</option>
                    <option value="IN">India</option>
                    <option value="SG">Singapore</option>
                    <option value="HK">Hong Kong</option>
                    <option value="TW">Taiwan</option>
                    <option value="TH">Thailand</option>
                    <option value="MY">Malaysia</option>
                    <option value="ID">Indonesia</option>
                    <option value="PH">Philippines</option>
                    <option value="VN">Vietnam</option>
                    <option value="BR">Brazil</option>
                    <option value="AR">Argentina</option>
                    <option value="MX">Mexico</option>
                    <option value="CL">Chile</option>
                    <option value="CO">Colombia</option>
                    <option value="PE">Peru</option>
                    <option value="ZA">South Africa</option>
                    <option value="NG">Nigeria</option>
                    <option value="KE">Kenya</option>
                    <option value="EG">Egypt</option>
                    <option value="MA">Morocco</option>
                    <option value="TN">Tunisia</option>
                    <option value="DZ">Algeria</option>
                    <option value="GH">Ghana</option>
                    <option value="ET">Ethiopia</option>
                    <option value="UG">Uganda</option>
                    <option value="TZ">Tanzania</option>
                    <option value="ZW">Zimbabwe</option>
                    <option value="BW">Botswana</option>
                    <option value="NA">Namibia</option>
                    <option value="ZM">Zambia</option>
                    <option value="MW">Malawi</option>
                    <option value="MZ">Mozambique</option>
                    <option value="AO">Angola</option>
                    <option value="CM">Cameroon</option>
                    <option value="CI">Côte d'Ivoire</option>
                    <option value="SN">Senegal</option>
                    <option value="ML">Mali</option>
                    <option value="BF">Burkina Faso</option>
                    <option value="NE">Niger</option>
                    <option value="TD">Chad</option>
                    <option value="SD">Sudan</option>
                    <option value="SS">South Sudan</option>
                    <option value="CF">Central African Republic</option>
                    <option value="CD">Democratic Republic of the Congo</option>
                    <option value="CG">Republic of the Congo</option>
                    <option value="GA">Gabon</option>
                    <option value="GQ">Equatorial Guinea</option>
                    <option value="ST">São Tomé and Príncipe</option>
                    <option value="GW">Guinea-Bissau</option>
                    <option value="GN">Guinea</option>
                    <option value="SL">Sierra Leone</option>
                    <option value="LR">Liberia</option>
                    <option value="TG">Togo</option>
                    <option value="BJ">Benin</option>
                    <option value="RW">Rwanda</option>
                    <option value="BI">Burundi</option>
                    <option value="DJ">Djibouti</option>
                    <option value="SO">Somalia</option>
                    <option value="ER">Eritrea</option>
                    <option value="LY">Libya</option>
                    <option value="OTHER">Other</option>
                  </select>
                </div>

              

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-4 rounded-md font-medium flex items-center justify-center gap-2"
                  style={{
                    backgroundColor: '#ffffff',
                    color: '#314E34',
                    border: '1px solid #e5e7eb'
                  }}
                  onMouseEnter={(e) => {
                    if (!isSubmitting) {
                      e.currentTarget.style.setProperty('background-color', '#f3f4f6', 'important');
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSubmitting) {
                      e.currentTarget.style.setProperty('background-color', '#ffffff', 'important');
                    }
                  }}
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