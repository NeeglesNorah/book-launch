// Import all images
import booImage from '../assets/images/boo.jpg'
import boo2Image from '../assets/images/boo2.jpg'
import bookImage from '../assets/images/book.jpg'
import book2Image from '../assets/images/book2.jpg'
import dsc0016Image from '../assets/images/DSC_0016.jpg'
import dsc0017Image from '../assets/images/DSC_0017.jpg'
import dsc0021Image from '../assets/images/DSC_0021.jpg'
import dsc0022Image from '../assets/images/DSC_0022.jpg'
import dsc0023Image from '../assets/images/DSC_0023.jpg'
import dsc0729Image from '../assets/images/DSC_0729.jpg'
import dsc0777Image from '../assets/images/DSC_0777.jpg'
import dsc0790Image from '../assets/images/DSC_0790.jpg'
import dsc0805Image from '../assets/images/DSC_0805.jpg'
import dsc9004Image from '../assets/images/DSC_9004.jpg'
import dsc9018Image from '../assets/images/DSC_9018.jpg'
import dsc9031Image from '../assets/images/DSC_9031.jpg'
import dsc9034Image from '../assets/images/DSC_9034.jpg'
import dsc9049Image from '../assets/images/DSC_9049.jpg'
import dsc9065Image from '../assets/images/DSC_9065.jpg'
import dsc9089Image from '../assets/images/DSC_9089.jpg'
import dsc9094Image from '../assets/images/DSC_9094.jpg'
import dsc9097Image from '../assets/images/DSC_9097.jpg'
import dsc9146Image from '../assets/images/DSC_9146.jpg'
import dsc9164Image from '../assets/images/DSC_9164.jpg'
import fus1646Image from '../assets/images/FUS_1646.jpg'
import mumGracefulImage from '../assets/images/Mum Graceful.jpg'
import mumImage from '../assets/images/MUM.jpg'
import mum1Image from '../assets/images/mum1.jpg'
import mum2Image from '../assets/images/mum2.jpg'

export const Case1 = () => {
  // Mix up DSC images with other images to avoid clustering
  const images = [
    // Start with some non-DSC images
    booImage,
    dsc0016Image,
    bookImage,
    dsc0017Image,
    mum1Image,
    dsc0021Image,
    boo2Image,
    dsc0022Image,
    mum2Image,
    dsc0023Image,
    book2Image,
    dsc0729Image,
    mumGracefulImage,
    dsc0777Image,
    fus1646Image,
    dsc0790Image,
    mumImage,
    dsc0805Image,
    // Continue mixing DSC images with others
    dsc9004Image,
    booImage,
    dsc9018Image,
    bookImage,
    dsc9031Image,
    mum1Image,
    dsc9034Image,
    boo2Image,
    dsc9049Image,
    mum2Image,
    dsc9065Image,
    book2Image,
    dsc9089Image,
    mumGracefulImage,
    dsc9094Image,
    fus1646Image,
    dsc9097Image,
    mumImage,
    dsc9146Image,
    booImage,
    dsc9164Image,
    bookImage
  ];

  // Create two copies for seamless infinite scroll
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
            
            <div className="flex gap-6 animate-infinite-scroll-fast" style={{ width: 'fit-content' }}>
              {duplicatedImages.map((image, index) => (
                <div 
                  className="flex-shrink-0" 
                  key={`${image}-${index}`}
                  style={{ 
                    width: '224px',
                    minWidth: '224px'
                  }}
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
