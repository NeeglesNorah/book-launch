import { useNavigate } from 'react-router-dom';

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12" style={{ backgroundColor: '#314E34' }}>
      <div className="w-full max-w-2xl text-center">
        {/* 404 Icon */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-32 h-32 bg-white rounded-full mb-6">
            <svg
              className="w-16 h-16"
              style={{ color: '#314E34' }}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          
          {/* 404 Text */}
          <h1 className="text-8xl md:text-9xl font-bold text-white mb-4 tracking-tight">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Page Not Found
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-md mx-auto">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <button
            onClick={() => navigate('/')}
            className="px-8 py-4 bg-white dark:bg-white font-bold text-lg rounded-md transition-all hover:bg-gray-100 dark:hover:bg-gray-100 transform hover:scale-105 shadow-lg"
            style={{ color: '#314E34', backgroundColor: '#ffffff' }}
          >
            Go to Homepage
          </button>
          
          <button
            onClick={() => navigate(-1)}
            className="px-8 py-4 border-2 border-white font-medium text-lg rounded-md transition-all hover:bg-white hover:bg-opacity-20"
            style={{ color: '#ffffff', backgroundColor: 'transparent' }}
          >
            Go Back
          </button>
        </div>

        {/* Helpful Links */}
        <div className="bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg p-6 max-w-md mx-auto backdrop-blur-sm">
          <p className="font-medium mb-3" style={{ color: '#ffffff' }}>You might be looking for:</p>
          <div className="space-y-2">
            <button
              onClick={() => navigate('/#about')}
              className="block w-full text-left transition-colors hover:opacity-80"
              style={{ color: '#e5e7eb' }}
            >
              → About the Book
            </button>
            <button
              onClick={() => navigate('/#projects')}
              className="block w-full text-left transition-colors hover:opacity-80"
              style={{ color: '#e5e7eb' }}
            >
              → Our Story
            </button>
            <button
              onClick={() => navigate('/#contact')}
              className="block w-full text-left transition-colors hover:opacity-80"
              style={{ color: '#e5e7eb' }}
            >
              → Contact Us
            </button>
          </div>
        </div>

        {/* Support */}
        <div className="mt-8">
          <p className="text-gray-300 text-sm">
            Need help?{' '}
            <a 
              href="https://wa.me/2348139723327" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white underline hover:no-underline"
            >
              WhatsApp +234 813 972 3327
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

