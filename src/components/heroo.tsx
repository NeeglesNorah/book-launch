import booImage from '../assets/images/boo.jpg'

export const Hero3 = () => (
  <div className="w-full pt-0 pb-0">
    <div className="w-full">
      <div className="grid grid-cols-1 gap-0 items-center lg:grid-cols-2">
        <div className="flex gap-4 flex-col mt-8 px-4 sm:ml-6 sm:px-0 lg:ml-8">
          <div>
            <span className="inline-flex items-center px-3 py-1 text-sm font-medium border border-white text-black bg-white">
              Book Launch
            </span>
          </div>
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-lg tracking-tighter text-left font-regular text-white">
              Ageing is Not a Curse, It's a Blessing
            </h1>
            <p className="text-xl leading-relaxed tracking-tight text-gray-300 max-w-md text-left">
              At 85, she leads aerobics, inspires generations, and proves that with God's grace, every year can be your best year yet.
            </p>
          </div>
          <div className="flex flex-row gap-4">
            <button className="px-6 py-3 border border-white text-white font-medium hover:bg-white hover:text-black transition-colors duration-200 flex items-center gap-4">
              Learn More 
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
            <button className="px-6 py-3 bg-white text-black font-medium hover:bg-gray-200 transition-colors duration-200 flex items-center gap-4">
              Pre-Order Book 
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </button>
          </div>
        </div>
        <div className="aspect-square bg-white mt-8 lg:mt-0">
          <img 
            src={booImage} 
            alt="Beautiful landscape" 
            className="w-full h-full object-cover "
          />
        </div>
      </div>
    </div>
  </div>
);