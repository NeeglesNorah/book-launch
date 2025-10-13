import missionImage from '../assets/images/mission.jpg'

const MissionVision = () => {
  return (
    <section className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* About the Author Section */}
        <div className="mb-20 md:mb-32">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Content */}
            <div className="order-2 lg:order-1">
              <div className="inline-block mb-4">
                <span className="text-sm font-semibold tracking-wider text-gray-400 uppercase">
                  Mama Chunu
                </span>
                <div className="h-0.5 w-16 bg-white mt-2"></div>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                At 83 years old, she is a{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-500">
                  living example
                </span>{' '}
                of what it means to age gracefully
              </h2>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                Through decades of faith, perseverance, and divine grace, she continues to inspire 
                generations with her vibrant energy, wisdom, and unwavering commitment to living life to the fullest.
              </p>
            </div>
            
            {/* Image */}
            <div className="order-1 lg:order-2 hidden lg:block">
              <div className="rounded-2xl shadow-2xl overflow-hidden">
                <img 
                  src={missionImage} 
                  alt="Mama Chunu"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>

        {/* The Message Section */}
        <div className="relative">
       
          <div className="pt-8 text-center max-w-4xl mx-auto">
            <div className="inline-block mb-6">
              <span className="text-sm font-semibold tracking-wider text-gray-400 uppercase">
                The Message
              </span>
              <div className="h-0.5 w-16 bg-white mt-2 mx-auto"></div>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
              Ageing is not something to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-500">
                dread, but embrace
              </span>{' '}
              with joy and excitement
            </h2>
            
            
            
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default MissionVision
