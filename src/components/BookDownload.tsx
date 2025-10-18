import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

export const BookDownload = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState<'loading' | 'valid' | 'invalid' | 'used' | 'downloaded'>('loading');
  const [downloadStarted, setDownloadStarted] = useState(false);
  const token = searchParams.get('token');

  useEffect(() => {
    // The ONE valid token for your book
    const validToken = 'ChunuLegacy2025';
    
    // Validate token - must match exactly
    if (!token || token !== validToken) {
      setStatus('invalid');
      return;
    }

    // Check if book has been downloaded from this device
    const hasDownloaded = localStorage.getItem('ChunuLegacyBookDownloaded');
    if (hasDownloaded === 'true') {
      setStatus('used');
      return;
    }

    setStatus('valid');
  }, [token]);

  const handleDownload = () => {
    if (!token || status !== 'valid') return;

    // Mark that book has been downloaded from this device
    localStorage.setItem('ChunuLegacyBookDownloaded', 'true');

    // Start download
    setDownloadStarted(true);
    setStatus('downloaded');

    
    const bookUrl = '/Living-and-Ageing-Gracefully-Book.pdf';
  
    // Create a temporary link and trigger download
    const link = document.createElement('a');
    link.href = bookUrl;
    link.download = 'Living and Ageing Gracefully Book+.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Optional: Redirect to home page after download
    setTimeout(() => {
      navigate('/');
    }, 5000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12" style={{ backgroundColor: '#314E34' }}>
      <div className="w-full max-w-3xl">
        
        {/* Loading State */}
        {status === 'loading' && (
          <div className="text-center py-16">
            <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-white mx-auto mb-6"></div>
            <p className="text-white text-lg">Verifying your download link...</p>
          </div>
        )}

        {/* Invalid Link */}
        {status === 'invalid' && (
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full mb-6">
              <svg
                className="w-10 h-10"
                style={{ color: '#314E34' }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Invalid Link</h2>
            <p className="text-gray-200 text-lg mb-8 max-w-md mx-auto">
              This download link is not valid. Please check your purchase confirmation for the correct link.
            </p>
            <button
              onClick={() => navigate('/')}
              className="px-8 py-3 bg-white font-medium rounded-md transition-all hover:bg-gray-100"
              style={{ color: '#314E34' }}
            >
              Go to Homepage
            </button>
          </div>
        )}

        {/* Already Used */}
        {status === 'used' && (
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full mb-6">
              <svg
                className="w-10 h-10"
                style={{ color: '#314E34' }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Already Downloaded</h2>
            <p className="text-gray-200 text-lg mb-8 max-w-md mx-auto">
              You have already downloaded this book on this device. Each download link can only be used once for security purposes.
            </p>
            <p className="text-gray-300 text-sm mb-6">
              Need help? WhatsApp us at{' '}
              <a href="https://wa.me/2348139723327" target="_blank" rel="noopener noreferrer" className="text-white underline hover:no-underline">
                +234 813 972 3327
              </a>
            </p>
            <button
              onClick={() => navigate('/')}
              className="px-8 py-3 bg-white font-medium rounded-md transition-all hover:bg-gray-100"
              style={{ color: '#314E34' }}
            >
              Go to Homepage
            </button>
          </div>
        )}

        {/* Valid - Ready to Download */}
        {status === 'valid' && !downloadStarted && (
          <div className="text-center py-12">
            {/* Book Icon */}
            <div className="inline-flex items-center justify-center w-24 h-24 bg-white rounded-full mb-8">
              <svg
                className="w-12 h-12"
                style={{ color: '#314E34' }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>

            {/* Main Content */}
            <div className="mb-8">
              <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-medium bg-white mb-4" style={{ color: '#314E34' }}>
                Thank You for Your Purchase
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
                Living & Ageing Gracefully
              </h1>
              <p className="text-xl text-gray-200 mb-2">
                by the Power of God
              </p>
              <p className="text-gray-300 text-lg max-w-xl mx-auto">
                Your book is ready to download. Click the button below to get your copy.
              </p>
            </div>

            

            {/* Download Button */}
            <button
              onClick={handleDownload}
              className="px-10 py-4 bg-white font-bold text-lg rounded-md transition-all hover:bg-gray-100 transform hover:scale-105 inline-flex items-center gap-3 shadow-lg"
              style={{ color: '#314E34' }}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Download Your Book Now
            </button>

            {/* Important Notice */}
            <div className="bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg p-6 mb-8 max-w-xl mx-auto backdrop-blur-sm mt-8">
              <p className="text-black font-medium mb-2 flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                One-Time Download
              </p>
              <p className="text-black text-sm">
                This link can only be used once on this device. Make sure to save the book after downloading.
              </p>
            </div>
            

            {/* Support */}
            <div className="mt-8">
              <p className="text-gray-300 text-sm">
                Need help?{' '}
                <a href="https://wa.me/2348139723327" target="_blank" rel="noopener noreferrer" className="text-white underline hover:no-underline">
                  WhatsApp +234 813 972 3327
                </a>
              </p>
            </div>
          </div>
        )}

        {/* Downloaded Successfully */}
        {status === 'downloaded' && (
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-white rounded-full mb-8">
              <svg
                className="w-12 h-12"
                style={{ color: '#314E34' }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Download Started!</h2>
            <p className="text-white text-lg mb-4 max-w-md mx-auto">
              Your book is downloading now. Check your downloads folder.
            </p>
            <div className="bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg p-6 mb-8 max-w-xl mx-auto backdrop-blur-sm">
              <p className="text-white font-medium mb-2">✓ Download Complete</p>
              <p className="text-white text-sm mb-3">
                Make sure to save the file in a safe location on your device.
              </p>
              <p className="text-black text-xs">
                This download link has now been used and cannot be used again on this device.
              </p>
            </div>
            
            <p className="text-black mb-6">
              Redirecting you to the homepage in a moment...
            </p>
            
            <button
              onClick={() => navigate('/')}
              className="px-8 py-3 bg-white font-medium rounded-md transition-all hover:bg-gray-100"
              style={{ color: '#314E34' }}
            >
              Go to Homepage Now
            </button>

            <div className="mt-8">
                <p className="text-black text-sm">
                Questions?{' '}
                <a href="https://wa.me/2348139723327" target="_blank" rel="noopener noreferrer" className="text-white underline hover:no-underline">
                  WhatsApp +234 813 972 3327
                </a>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
