import { useState, useEffect } from 'react';
import booImage from '../assets/images/boo.jpg';

export const PopupModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show modal after a short delay for better UX on every page load
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Close modal if clicking the backdrop (not the modal content)
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn backdrop-blur-sm"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
      onClick={handleBackdropClick}
    >
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full overflow-hidden animate-slideUp">
        {/* Close button */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors duration-200"
          aria-label="Close modal"
        >
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Modal content */}
        <div className="grid md:grid-cols-2 gap-0">
          {/* Book image */}
          <div className="relative h-64 md:h-auto">
            <img 
              src={booImage} 
              alt="Living & Ageing Gracefully by the Power of God" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent md:hidden"></div>
          </div>

          {/* CTA Content */}
          <div className="p-8 md:p-10 flex flex-col justify-center">
             <div className="mb-6">
               <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white text-gray-800 border border-gray-300 shadow-sm">
                 Book Launch Event
               </span>
             </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Reserve Your Spot Now!
            </h2>
            
            <p className="text-gray-600 mb-6 text-base md:text-lg leading-relaxed">
              Join us for the official launch of "Living & Ageing Gracefully by the Power of God" and be part of this inspiring journey.
            </p>

           

            <a
              href="https://us06web.zoom.us/meeting/register/jiF0fbMjQl6IvdM4lk6FFg"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 px-6 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 text-base md:text-lg group no-underline"
              style={{ backgroundColor: '#314E34', color: 'white', textDecoration: 'none' }}
            >
              Reserve Your Spot
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>

            <p className="text-xs text-gray-500 text-center mt-4">
              Limited spots available - Register now to secure your place
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

