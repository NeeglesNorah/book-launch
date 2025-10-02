import aboutImage1 from '../assets/images/DSC_9049.jpg'
import aboutImage2 from '../assets/images/DSC_9065.jpg'
import aboutImage3 from '../assets/images/DSC_9089.jpg'

const MissionVision = () => {
  const missionImages = [
    {
      id: 1,
      src: aboutImage1,
      position: 'top-10 right-32',
      rotation: '-8.51deg',
      glowColor: 'rgba(29, 103, 255, 0.32)'
    },
    {
      id: 2,
      src: aboutImage2,
      position: 'top-10 right-0',
      rotation: '8deg',
      glowColor: 'rgba(253, 213, 64, 0.32)'
    },
    {
      id: 3,
      src: aboutImage3,
      position: 'bottom-[-10px] right-16',
      rotation: '0deg',
      glowColor: 'rgba(255, 99, 99, 0.32)'
    }
  ]

  const visionImages = [
    {
      id: 1,
      src: aboutImage1,
      position: 'bottom-10 left-30',
      rotation: '8.51deg',
      glowColor: 'rgba(29, 103, 255, 0.32)'
    },
    {
      id: 2,
      src: aboutImage2,
      position: 'bottom-10 left-0',
      rotation: '-8.51deg',
      glowColor: 'rgba(253, 213, 64, 0.32)'
    }
  ]

  const ImageCard = ({ card, className = "" }: { card: any, className?: string }) => (
    <div
      className={`absolute ${card.position} z-10 ${className}`}
      style={{
        display: 'flex',
        width: '120px',
        height: '120px',
        transform: `rotate(${card.rotation})`,
        padding: '8px',
        alignItems: 'flex-start',
        gap: '10px',
        flexShrink: 0,
        aspectRatio: '1/1',
        borderRadius: '12px',
        border: '0.8px solid rgba(216, 216, 216, 0.05)',
        background: 'linear-gradient(135deg, rgba(248, 251, 255, 0.04) 0%, rgba(255, 255, 255, 0.00) 100%)',
        boxShadow: `0 0 8px 0 ${card.glowColor} inset, 8px 4px 16px 0 rgba(0, 0, 0, 0.08)`,
        backdropFilter: 'blur(10px)'
      }}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          borderRadius: '10px',
          overflow: 'hidden',
          position: 'relative'
        }}
      >
        <img
          src={card.src}
          alt={`Mission vision image ${card.id}`}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            borderRadius: '10px'
          }}
        />
        {/* Dashed border overlay */}
        <div
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            borderRadius: '10px',
            border: '0.5px dashed #5F5E5E',
            pointerEvents: 'none',
            boxSizing: 'border-box'
          }}
        />
      </div>
    </div>
  )

  return (
    <section 
      className="relative py-24 px-4 sm:px-6 lg:px-8 "
     
    >
      <div className="max-w-7xl mx-auto">
        {/* Mission Section */}
        <div className="relative mb-16">
          {/* Mission Images - Right Side */}
          <div className="hidden lg:block">
            {missionImages.map((card) => (
              <ImageCard key={card.id} card={card} />
            ))}
          </div>

          {/* Mission Content - Left Side */}
          <div className="lg:max-w-[876px]">
            <p 
              style={{
                color: '#7A7A7A',
                fontFamily: 'Inter',
                fontSize: 'clamp(14px, 4vw, 16px)',
                fontStyle: 'normal',
                fontWeight: '500',
                lineHeight: '132%',
                letterSpacing: '-0.32px',
                marginBottom: '16px'
              }}
            >
              ABOUT THE AUTHOR
            </p>
            
            <h2 
              style={{
                color: '#FFF',
                fontFamily: 'Inter',
                fontSize: 'clamp(18px, 6vw, 50px)',
                fontStyle: 'normal',
                fontWeight: '500',
                lineHeight: 'clamp(20px, 6vw, 56px)',
                letterSpacing: 'clamp(-0.4px, -0.2vw, -1.2px)',
                marginBottom: '0'
              }}
            >
              At 85 years old, she is a{' '}
              <span style={{ color: '#A6A6A6' }}>living example</span> of what it means to age gracefully
            </h2>
          </div>
        </div>

        {/* Mobile Images - Between Mission and Vision */}
        <div className="relative flex justify-center items-center  lg:hidden">
          <div className="relative w-56 h-56">
            {missionImages.map((card, index) => {
              const mobilePositions = [
                'top-0 left-0',
                'top-0 right-0',
                'top-20 left-1/2 transform -translate-x-1/2'
              ];
              return (
                <ImageCard 
                  key={`mobile-${card.id}`} 
                  card={{
                    ...card,
                    position: mobilePositions[index]
                  }}
                  
                />
              );
            })}
          </div>
        </div>

        {/* Vision Section */}
        <div className="relative">
          {/* Vision Images - Left Side */}
          <div className="hidden lg:block">
            {visionImages.map((card) => (
              <ImageCard key={card.id} card={card} />
            ))}
          </div>

          {/* Vision Content - Right Side */}
          <div className="lg:ml-auto lg:max-w-[876px] lg:text-right text-right">
            <p 
              style={{
                color: '#7A7A7A',
                fontFamily: 'Inter',
                fontSize: 'clamp(14px, 4vw, 16px)',
                fontStyle: 'normal',
                fontWeight: '500',
                lineHeight: '132%',
                letterSpacing: '-0.32px',
                marginBottom: '16px'
              }}
            >
              THE MESSAGE
            </p>
            
            <h2 
              style={{
                color: '#FFF',
                fontFamily: 'Inter',
                fontSize: 'clamp(18px, 6vw, 50px)',
                fontStyle: 'normal',
                fontWeight: '500',
                lineHeight: 'clamp(20px, 6vw, 56px)',
                letterSpacing: 'clamp(-0.4px, -0.2vw, -1.2px)',
                marginBottom: '0'
              }}
            >
              Ageing is not something to{' '}
              <span style={{ color: '#A6A6A6' }}>dread, but embrace</span> with joy and excitement
            </h2>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MissionVision
