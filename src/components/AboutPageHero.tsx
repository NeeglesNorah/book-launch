import aboutImage1 from '../assets/images/DSC_9004.jpg'
import aboutImage2 from '../assets/images/DSC_9018.jpg'
import aboutImage3 from '../assets/images/DSC_9031.jpg'
import aboutImage4 from '../assets/images/DSC_9034.jpg'
import noiseTexture from '../assets/icons/noise.svg'

const AboutPageHero = () => {
  const imageCards = [
    {
      id: 1,
      src: aboutImage1,
      position: 'top-10 left-20',
      rotation: '-8.51deg',
      glowColor: 'rgba(29, 103, 255, 0.32)'
    },
    {
      id: 2,
      src: aboutImage2,
      position: 'bottom-20 left-10',
      rotation: '0deg',
      glowColor: 'rgba(253, 213, 64, 0.32)'
    },
    {
      id: 3,
      src: aboutImage3,
      position: 'top-10 right-20',
      rotation: '0deg',
      glowColor: 'rgba(253, 213, 64, 0.32)'
    },
    {
      id: 4,
      src: aboutImage4,
      position: 'bottom-20 right-10',
      rotation: '-12.93deg',
      glowColor: 'rgba(29, 103, 255, 0.32)'
    }
  ]

  return (
    <section 
      className="relative flex items-start justify-center overflow-hidden pt-4 sm:pt-24 sm:items-center"
      style={{
        backgroundImage: `url(${noiseTexture})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Desktop Image Cards */}
      <div className="hidden lg:block">
        {imageCards.map((card) => (
          <div
            key={card.id}
            className={`absolute ${card.position} z-10`}
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
              alt={`About image ${card.id}`}
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
      ))}
      </div>

      {/* Mobile Image Cards - Framing the text */}
      <div className="block lg:hidden">
        {imageCards.map((card, index) => (
          <div
            key={card.id}
            className={`absolute z-10`}
            style={{
              display: 'flex',
              width: 'clamp(60px, 12vw, 80px)',
              height: 'clamp(60px, 12vw, 80px)',
              transform: `rotate(${card.rotation})`,
              padding: 'clamp(4px, 1vw, 6px)',
              alignItems: 'flex-start',
              gap: 'clamp(5px, 1vw, 8px)',
              flexShrink: 0,
              aspectRatio: '1/1',
              borderRadius: 'clamp(8px, 2vw, 12px)',
              border: '0.8px solid rgba(216, 216, 216, 0.05)',
              background: 'linear-gradient(135deg, rgba(248, 251, 255, 0.04) 0%, rgba(255, 255, 255, 0.00) 100%)',
              boxShadow: `0 0 8px 0 ${card.glowColor} inset, 8px 4px 16px 0 rgba(0, 0, 0, 0.08)`,
              backdropFilter: 'blur(10px)',
              // Position based on index for mobile layout
              top: index < 2 ? 'clamp(20px, 8vw, 40px)' : 'auto',
              bottom: index >= 2 ? 'clamp(20px, 8vw, 40px)' : 'auto',
              left: index % 2 === 0 ? 'clamp(10px, 4vw, 20px)' : 'auto',
              right: index % 2 === 1 ? 'clamp(10px, 4vw, 20px)' : 'auto'
            }}
          >
            <div
              style={{
                width: '100%',
                height: '100%',
                borderRadius: 'clamp(6px, 1.5vw, 10px)',
                overflow: 'hidden',
                position: 'relative'
              }}
            >
              <img
                src={card.src}
                alt={`About image ${card.id}`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  borderRadius: 'clamp(6px, 1.5vw, 10px)'
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
                  borderRadius: 'clamp(6px, 1.5vw, 10px)',
                  border: '0.5px dashed #5F5E5E',
                  pointerEvents: 'none',
                  boxSizing: 'border-box'
                }}
              />
            </div>
          </div>
        ))}
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 text-center px-4 sm:px-8 max-w-6xl mx-auto mt-16 sm:mt-0 pb-16 sm:pb-24">
        {/* Heading */}
        <p 
          style={{
            color: '#7A7A7A',
            fontFamily: 'Inter',
            fontSize: 'clamp(14px, 3vw, 16px)',
            fontStyle: 'normal',
            fontWeight: '500',
            marginBottom: '16px',
            textAlign: 'center'
          }}
        >
          ABOUT THE BOOK
        </p>
        
        {/* Main Heading */}
        <h1 className="mb-6 sm:mb-8 mt-0 sm:mt-4" style={{ textAlign: 'center' }}>
          <div 
            style={{
              color: '#FFF',
              textAlign: 'center',
              fontFamily: 'Inter, sans-serif',
              fontSize: 'clamp(28px, 7vw, 90.203px)',
              fontStyle: 'normal',
              fontWeight: '500',
              lineHeight: 'clamp(32px, 7vw, 88px)',
              letterSpacing: 'clamp(-2px, -1vw, -5px)',
              marginBottom: 'clamp(4px, 1vw, 8px)'
            }}
          >
            Compelling.
          </div>
          <div 
            style={{
              color: '#FFF',
              textAlign: 'center',
              fontFamily: 'Inter, sans-serif',
              fontSize: 'clamp(28px, 7vw, 90.203px)',
              fontStyle: 'normal',
              fontWeight: '500',
              lineHeight: 'clamp(32px, 7vw, 88px)',
              letterSpacing: 'clamp(-2px, -1vw, -5px)',
              marginBottom: 'clamp(4px, 1vw, 8px)'
            }}
          >
            Inspiring.
          </div>
          <div 
            style={{
              background: 'linear-gradient(90deg, #0049DE 59.13%, #FFF 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textAlign: 'center',
              fontFamily: 'Inter, sans-serif',
              fontSize: 'clamp(28px, 7vw, 90.203px)',
              fontStyle: 'normal',
              fontWeight: '500',
              lineHeight: 'clamp(32px, 7vw, 88px)',
              letterSpacing: 'clamp(-2px, -1vw, -5px)'
            }}
          >
            Transformative.
          </div>
        </h1>
      </div>
    </section>
  )
}

export default AboutPageHero