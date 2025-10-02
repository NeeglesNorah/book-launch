import dsc9089Image from '../assets/images/DSC_9089.jpg'
import dsc9094Image from '../assets/images/DSC_9094.jpg'
import dsc9097Image from '../assets/images/DSC_9097.jpg'
import dsc9146Image from '../assets/images/DSC_9146.jpg'
import dsc9164Image from '../assets/images/DSC_9164.jpg'
import fus1646Image from '../assets/images/FUS_1646.jpg'
import dsc0016Image from '../assets/images/DSC_0016.jpg'
import dsc0017Image from '../assets/images/DSC_0017.jpg'

export const Case1 = () => {
  const images = [
    dsc9089Image,
    dsc9094Image,
    dsc9097Image,
    dsc9146Image,
    dsc9164Image,
    fus1646Image,
    dsc0016Image,
    dsc0017Image
  ];

  // Duplicate images for seamless infinite scroll
  const duplicatedImages = [...images, ...images];

  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10">
          <h2 className="text-xl md:text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular text-left">
            A Life of Impact & Inspiration
          </h2>
          <div className="relative w-full overflow-hidden">
            {/* Left fade gradient */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#314E34] to-transparent z-10 pointer-events-none"></div>
            
            {/* Right fade gradient */}
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#314E34] to-transparent z-10 pointer-events-none"></div>
            
            <div className="flex gap-6 animate-infinite-scroll">
              {duplicatedImages.map((image, index) => (
                <div 
                  className="flex-shrink-0 w-48 lg:w-64 xl:w-72" 
                  key={`${image}-${index}`}
                >
                  <div className="relative rounded-xl aspect-[4/5] overflow-hidden shadow-lg">
                    <img 
                      src={image} 
                      alt={`Partner ${index + 1}`}
                      className="w-full h-full object-cover fade-in-up"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
