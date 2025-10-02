// Icons replaced with inline SVGs
import boo2Image from '../assets/images/boo2.jpg'

export const Hero4 = () => (
  <div className="w-full pt-0 pb-0">
    <div className="w-full">
      <div className="grid grid-cols-1 gap-0 items-center md:grid-cols-2">
        <div className="flex gap-4 flex-col mt-8 px-4 md:order-2 sm:ml-6 sm:px-0 lg:ml-8">
       
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-lg tracking-tighter text-left font-regular text-white">
              Living & Ageing Gracefully by the Power of God
            </h1>
            <p className="text-xl leading-relaxed tracking-tight text-gray-300 max-w-md text-left">
              Discover the inspiring journey of an 85-year-old woman who has defied the odds of time, lived with strength and vitality, and continues to impact lives across generations. This is not just a book it is a living testimony of faith, health, and purpose.
            </p>
          </div>
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee whitespace-nowrap">
              <span className="text-sm md:text-base text-black font-medium bg-white rounded-full px-4 py-2 mr-4">Mother</span>
              <span className="text-sm md:text-base text-black font-medium bg-white rounded-full px-4 py-2 mr-4">Wife</span>
              <span className="text-sm md:text-base text-black font-medium bg-white rounded-full px-4 py-2 mr-4">Grandmother</span>
              <span className="text-sm md:text-base text-black font-medium bg-white rounded-full px-4 py-2 mr-4">Author</span>
              <span className="text-sm md:text-base text-black font-medium bg-white rounded-full px-4 py-2 mr-4">Reverend</span>
              <span className="text-sm md:text-base text-black font-medium bg-white rounded-full px-4 py-2 mr-4">Teacher</span>
              <span className="text-sm md:text-base text-black font-medium bg-white rounded-full px-4 py-2 mr-4">Mentor</span>
              <span className="text-sm md:text-base text-black font-medium bg-white rounded-full px-4 py-2 mr-4">Counselor</span>
              <span className="text-sm md:text-base text-black font-medium bg-white rounded-full px-4 py-2 mr-4">Friend</span>
              <span className="text-sm md:text-base text-black font-medium bg-white rounded-full px-4 py-2 mr-4">Aerobics Instructor</span>
              <span className="text-sm md:text-base text-black font-medium bg-white rounded-full px-4 py-2 mr-4">Fitness Leader</span>
              <span className="text-sm md:text-base text-black font-medium bg-white rounded-full px-4 py-2 mr-4">Wellness Coach</span>
              <span className="text-sm md:text-base text-black font-medium bg-white rounded-full px-4 py-2 mr-4">Health Advocate</span>
              <span className="text-sm md:text-base text-black font-medium bg-white rounded-full px-4 py-2 mr-4">Life Coach</span>
              <span className="text-sm md:text-base text-black font-medium bg-white rounded-full px-4 py-2 mr-4">Inspiration</span>
              <span className="text-sm md:text-base text-black font-medium bg-white rounded-full px-4 py-2 mr-4">Role Model</span>
              <span className="text-sm md:text-base text-black font-medium bg-white rounded-full px-4 py-2 mr-4">Leader</span>
              <span className="text-sm md:text-base text-black font-medium bg-white rounded-full px-4 py-2 mr-4">Speaker</span>
              <span className="text-sm md:text-base text-black font-medium bg-white rounded-full px-4 py-2 mr-4">Motivator</span>
              <span className="text-sm md:text-base text-black font-medium bg-white rounded-full px-4 py-2 mr-4">Encourager</span>
              <span className="text-sm md:text-base text-black font-medium bg-white rounded-full px-4 py-2 mr-4">Believer</span>
              <span className="text-sm md:text-base text-black font-medium bg-white rounded-full px-4 py-2 mr-4">Warrior</span>
              <span className="text-sm md:text-base text-black font-medium bg-white rounded-full px-4 py-2 mr-4">Champion</span>
              <span className="text-sm md:text-base text-black font-medium bg-white rounded-full px-4 py-2 mr-4">Survivor</span>
              <span className="text-sm md:text-base text-black font-medium bg-white rounded-full px-4 py-2 mr-4">Overcomer</span>            </div>
            <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-black to-transparent pointer-events-none"></div>
          </div>
        </div>
        <div className="aspect-square mt-8 md:order-1 md:mt-0">
          <img 
            src={boo2Image} 
            alt="Beautiful landscape" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  </div>
);