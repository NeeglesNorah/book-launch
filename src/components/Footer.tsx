import { FacebookIcon, InstagramIcon, WhatsAppIcon, LinkedInIcon, LogoIcon } from '@/icons'

const Footer = () => {
  return (
    <section 
      className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20"
      style={{
        backgroundColor: '#314E34'
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Hero Text Section */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h1 
            className="text-center font-inter font-medium mb-4 sm:mb-6 lg:mb-4"
            style={{
              color: '#FFFFFF',
              fontSize: 'clamp(28px, 8vw, 68px)',
              lineHeight: 'clamp(36px, 10vw, 88px)',
              letterSpacing: 'clamp(-2px, -0.5vw, -5px)',
              fontStyle: 'normal'
            }}
          >
            Transform Your Life With{' '}
            <span 
              className="font-inter font-medium italic"
              style={{
                backgroundImage: 'linear-gradient(90deg, #FFFFFF 26.44%, #E5E5E5 100%)',
                backgroundSize: '100% 100%',
                backgroundRepeat: 'no-repeat',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontSize: 'clamp(28px, 8vw, 68px)',
                lineHeight: 'clamp(36px, 10vw, 88px)',
                letterSpacing: 'clamp(-2px, -0.5vw, -5px)'
              }}
            >
              Grace & Purpose .
            </span>
          </h1>

          {/* CTA Button */}
          <div className="flex justify-center">
            <a
              href="https://selar.com/livingandageingbook"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: '#FFFFFF',
                color: '#314E34',
                fontFamily: 'Inter, sans-serif',
                fontSize: '16px',
                fontWeight: '500',
                padding: '12px 24px',
                borderRadius: '8px',
                border: '1px solid #FFFFFF',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                textDecoration: 'none',
                display: 'inline-block'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#E5E5E5'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#FFFFFF'
              }}
            >
              Get the Book
            </a>
          </div>
        </div>

        {/* Dashed Border */}
         <div 
           className="mx-auto mb-8 sm:mb-12 lg:mb-16"
           style={{
             width: 'clamp(80%, 90%, 90%)',
             height: '1px',
             borderTop: '1px dashed #FFFFFF'
           }}
         />

        {/* Footer Content */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 sm:gap-8 lg:gap-0">
          {/* Logo */}
          <div className="order-1 lg:order-1 w-full lg:w-auto flex justify-center lg:justify-start">
            <img 
              src={LogoIcon} 
              alt="Logo" 
              style={{
                width: 'clamp(200px, 30vw, 300px)',
                height: 'clamp(60px, 12vw, 90px)',
                objectFit: 'contain'
              }}
            />
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 lg:gap-8 order-3 lg:order-2">
            <a 
              href="#about"
              style={{
                color: '#FFFFFF',
                fontFamily: 'Inter, sans-serif',
                fontStyle: 'normal',
                fontWeight: '500',
                fontSize: 'clamp(14px, 3vw, 18px)',
                lineHeight: '1.5',
                letterSpacing: 'clamp(-0.3px, -0.1vw, -0.36px)',
                textDecoration: 'none'
              }}
            >
              About the Book
            </a>
            <a 
              href="https://wa.me/+2347049393818"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#FFFFFF',
                fontFamily: 'Inter, sans-serif',
                fontStyle: 'normal',
                fontWeight: '500',
                fontSize: 'clamp(14px, 3vw, 18px)',
                lineHeight: '1.5',
                letterSpacing: 'clamp(-0.3px, -0.1vw, -0.36px)',
                textDecoration: 'none'
              }}
            >
              Contact
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-2 sm:gap-3 lg:gap-4 order-2 lg:order-3">
            <a 
              href="https://www.instagram.com/oghalechunu/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 md:w-8 md:h-8 flex items-center justify-center transition-transform hover:scale-110"
              style={{
                borderRadius: '8px',
                border: '1px solid #FFFFFF',
                flexShrink: 0,
                backgroundColor: '#FFFFFF'
              }}
            >
              <InstagramIcon 
                className="w-4 h-4 md:w-4 md:h-4"
                style={{
                  width: '18px',
                  height: '18px',
                  stroke: '#314E34',
                  fill: '#314E34'
                }}
              />
            </a>
            
            <a 
              href="https://www.facebook.com/Mama.Chunu/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 md:w-8 md:h-8 flex items-center justify-center transition-transform hover:scale-110"
              style={{
                borderRadius: '8px',
                border: '1px solid #FFFFFF',
                flexShrink: 0,
                backgroundColor: '#FFFFFF'
              }}
            >
              <FacebookIcon 
                className="w-4 h-4 md:w-4 md:h-4"
                style={{
                  width: '24px',
                  height: '24px',
                  stroke: '#314E34',
                  fill: '#314E34'
                }}
              />
            </a>
            
            <a 
              href="https://wa.me/07049393818"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 md:w-8 md:h-8 flex items-center justify-center transition-transform hover:scale-110"
              style={{
                borderRadius: '8px',
                border: '1px solid #FFFFFF',
                flexShrink: 0,
                backgroundColor: '#FFFFFF'
              }}
            >
              <WhatsAppIcon 
                className="w-4 h-4 md:w-4 md:h-4"
                style={{
                  width: '20px',
                  height: '20px',
                  stroke: '#314E34',
                  fill: '#314E34'
                }}
              />
            </a>
            
            <a 
              href="https://www.linkedin.com/in/oghalechunu"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 md:w-8 md:h-8 flex items-center justify-center transition-transform hover:scale-110"
              style={{
                borderRadius: '8px',
                border: '1px solid #FFFFFF',
                flexShrink: 0,
                backgroundColor: '#FFFFFF'
              }}
            >
              <LinkedInIcon 
                className="w-4 h-4 md:w-4 md:h-4"
                style={{
                  width: '20px',
                  height: '20px',
                  stroke: '#314E34',
                  fill: '#314E34'
                }}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
