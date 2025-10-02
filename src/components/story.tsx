// Icons replaced with inline SVGs
import dsc9089Image from '../assets/images/DSC_9089.jpg'

export const Feature7 = () => (
  <div 
    className="w-full pt-8 lg:pt-12 pb-20 lg:pb-40"
    style={{ backgroundColor: '#f1f1f1' }}
  >
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-10">
        <div className="flex gap-4 flex-col items-start">
          <div>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white text-gray-800">
              Key Themes
            </span>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left text-black">
              What You'll Discover
            </h2>
            <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-gray-600  text-left">
              A practical and spiritual guide to living healthy, staying relevant, and remaining impactful at every stage of life.
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid  lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <div className="h-full w-full rounded-md aspect-square lg:col-span-2 lg:row-span-2 relative overflow-hidden">
            <img 
              src={dsc9089Image} 
              alt="Feature showcase" 
              className="w-full h-full object-cover rounded-md"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-md"></div>
            <div className="absolute inset-0 p-6 flex justify-between flex-col z-10">
              <div className="w-8 h-8">
                <svg fill="none" stroke="white" viewBox="0 0 24 24" className="w-full h-full">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <h3 className="text-xl tracking-tight text-white drop-shadow-lg">Faith & Wellness</h3>
                <p className="text-gray-200 max-w-xs text-base drop-shadow-lg">
                  The spiritual foundation of living with health and purpose at every age.
                </p>
              </div>
            </div>
          </div>

          <div className="h-full rounded-md aspect-square p-6 flex justify-between flex-col" style={{ backgroundColor: '#fff' }}>
            <div className="w-8 h-8">
              <svg fill="none" stroke="white" viewBox="0 0 24 24" className="w-full h-full">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <h3 className="text-xl tracking-tight text-white">Fitness & Longevity</h3>
              <p className="text-gray-600 max-w-xs text-base">
                How physical exercise, even in older age, strengthens the body and mind.
              </p>
            </div>
          </div>

          <div className="bg-[#314E34] h-full rounded-md aspect-square p-6 flex justify-between flex-col">
            <div className="w-8 h-8">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <h3 className="text-xl tracking-tight">Mindset Shifts</h3>
              <p className="text-gray-300 max-w-xs text-base">
                Why ageing should be embraced, not feared, with joy and dignity.
              </p>
            </div>
          </div>

          <div className="h-full rounded-md aspect-square p-6 flex justify-between flex-col" style={{ backgroundColor: '#314E34' }}>
            <div className="w-8 h-8">
              <svg fill="none" stroke="white" viewBox="0 0 24 24" className="w-full h-full">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <h3 className="text-xl tracking-tight text-white">Pay supplier invoices</h3>
              <p className="text-gray-300 max-w-xs text-base">
                Our goal is to streamline SMB trade, making it easier and faster
                than ever.
              </p>
            </div>
          </div>

          <div className="bg-white h-full rounded-md aspect-square p-6 flex justify-between flex-col">
            <div className="w-8 h-8">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <h3 className="text-xl tracking-tight">Legacy & Impact</h3>
              <p className="text-gray-600 max-w-xs text-base">
                Living in a way that continues to bless others even in later years.
              </p>
            </div>
          </div>

          <div className="h-full rounded-md aspect-square p-6 flex justify-between flex-col" style={{ backgroundColor: '#314E34' }}>
            <div className="w-8 h-8">
              <svg fill="none" stroke="white" viewBox="0 0 24 24" className="w-full h-full">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <h3 className="text-xl tracking-tight text-white">God's Grace</h3>
              <p className="text-gray-300 max-w-xs text-base">
                Living with renewed strength through faith and divine purpose.
              </p>
            </div>
          </div>

          <div className="bg-white h-full rounded-md aspect-square p-6 flex justify-between flex-col">
            <div className="w-8 h-8">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <h3 className="text-xl tracking-tight">Purpose & Relevance</h3>
              <p className="text-gray-600 max-w-xs text-base">
                Staying relevant and impactful at every stage of life's journey.
              </p>
            </div>
          </div>

          <div className="h-full rounded-md p-6 flex justify-between flex-col lg:col-span-2" style={{ backgroundColor: '#314E34' }}>
            <div className="w-8 h-8">
              <svg fill="none" stroke="white" viewBox="0 0 24 24" className="w-full h-full">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <h3 className="text-xl tracking-tight text-white">Living Testimony</h3>
              <p className="text-gray-300 max-w-xs text-base">
                A real-life example of defying the odds of time with strength and vitality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);