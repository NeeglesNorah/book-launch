import { Light1Icon, Light2Icon } from '@/icons'
import { useState } from 'react'
import { FacebookIcon, WhatsAppIcon, LinkedInIcon } from '@/icons'

const Projects = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  
  const projects = [
    {
      title: "The Author's Story",
      description: "Meet the extraordinary 83-year-old woman who defies conventional aging through her unwavering faith, daily aerobics leadership, and inspiring journey that spans generations. From a simple newspaper article that captured hearts to becoming a beacon of hope for countless individuals, her story demonstrates that age is truly just a number when you possess unshakeable faith, maintain physical fitness, and cultivate the right mindset. Discover how one woman's determination to live with purpose has created ripples of positive change in her community and beyond.",
      image: Light1Icon
    },
    {
      title: "Key Book Insights",
      description: "Dive deep into the transformative principles that have kept this remarkable woman vibrant, relevant, and profoundly impactful at 83. Through her book, you'll uncover the secrets to maintaining physical vitality, mental sharpness, and spiritual strength throughout life's journey. Learn how faith becomes the foundation for resilience, how fitness becomes a form of worship, and how a positive mindset can completely revolutionize your approach to aging. These timeless insights offer practical wisdom for anyone seeking to live with grace, purpose, and unwavering determination at any stage of life.",
      image: Light2Icon
    }
  ]

  const socialLinks = {
    whatsapp: "https://wa.me/07049393818",
    facebook: "https://www.facebook.com/Mama.Chunu/",
    linkedin: "https://www.linkedin.com/in/oghalechunu"
  }

  return (
    <section 
      className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20"
      style={{
        background: 'linear-gradient(135deg, #f1f1f1 0%, #e8e8e8 50%, #f5f5f5 100%)',
        position: 'relative'
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Project Cards */}
        <div className="space-y-6 sm:space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="grid grid-cols-1 gap-6 items-center lg:grid-cols-2"
              style={{
                minHeight: 'clamp(300px, 50vw, 600px)',
                padding: 'clamp(20px, 4vw, 72px) clamp(16px, 3vw, 64px)',
                borderRadius: 'clamp(16px, 3vw, 32px)',
                border: '1px solid rgba(0, 0, 0, 0.08)',
                background: '#ffffff',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Text Content */}
              <div className={`flex flex-col justify-center ${index === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                {/* Project Title */}
                <h3
                  style={{
                    color: '#314E34',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: 'clamp(20px, 4vw, 48px)',
                    fontStyle: 'normal',
                    fontWeight: '500',
                    marginBottom: 'clamp(12px, 2vw, 16px)',
                    lineHeight: '1.2'
                  }}
                >
                  {project.title}
                </h3>

                {/* Project Description */}
                <p
                  style={{
                    color: '#606060',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: 'clamp(14px, 2.5vw, 22px)',
                    fontStyle: 'normal',
                    fontWeight: '500',
                    marginBottom: 'clamp(20px, 3vw, 24px)',
                    maxWidth: '100%',
                    lineHeight: '1.5'
                  }}
                >
                  {project.description}
                </p>

                {/* Learn More Button */}
                <div>
                  <button
                    className="w-full sm:w-auto"
                    style={{
                      backgroundColor: '#314E34',
                      color: '#ffffff',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: 'clamp(14px, 2vw, 16px)',
                      fontWeight: '500',
                      padding: 'clamp(10px, 2vw, 12px) clamp(20px, 4vw, 24px)',
                      borderRadius: '8px',
                      border: '1px solid #314E34',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#ffffff'
                      e.currentTarget.style.color = '#314E34'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#314E34'
                      e.currentTarget.style.color = '#ffffff'
                    }}
                    onClick={() => setIsPopupOpen(true)}
                  >
                    Learn more
                  </button>
                </div>
              </div>

              {/* Project Image */}
              <div className={`${index === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                <img 
                  src={project.image}
                  alt={`${project.title}`}
                  className="w-full h-48 sm:h-56 lg:h-full object-cover rounded-lg"
                  style={{
                    aspectRatio: '1 / 1'
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Social Links Popup */}
      {isPopupOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '20px'
          }}
          onClick={() => setIsPopupOpen(false)}
        >
          <div
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              borderRadius: '16px',
              padding: '32px',
              maxWidth: '400px',
              width: '100%',
              textAlign: 'center',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
         

            {/* Popup Title */}
            <h3
              style={{
                color: '#ffffff',
                fontFamily: 'Inter, sans-serif',
                fontSize: '24px',
                fontWeight: '700',
                marginBottom: '16px',
                marginTop: '8px',
                textShadow: '0 2px 8px rgba(0, 0, 0, 0.3), 0 1px 2px rgba(0, 0, 0, 0.5)'
              }}
            >
              Connect With Us
            </h3>

            {/* Popup Description */}
            <p
              style={{
                color: '#f0f0f0',
                fontFamily: 'Inter, sans-serif',
                fontSize: '16px',
                fontWeight: '500',
                marginBottom: '32px',
                lineHeight: '1.5',
                textShadow: '0 1px 4px rgba(0, 0, 0, 0.4), 0 1px 2px rgba(0, 0, 0, 0.6)'
              }}
            >
              Follow our journey and stay updated on the latest news about the book
            </p>

            {/* Social Links */}
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
              {/* WhatsApp */}
              <a
                href={socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '56px',
                  height: '56px',
                  backgroundColor: '#25D366',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 12px rgba(37, 211, 102, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(37, 211, 102, 0.4)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(37, 211, 102, 0.3)'
                }}
              >
                <WhatsAppIcon
                  style={{
                    width: '28px',
                    height: '28px',
                    fill: '#ffffff'
                  }}
                />
              </a>

              {/* Facebook */}
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '56px',
                  height: '56px',
                  backgroundColor: '#1877F2',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 12px rgba(24, 119, 242, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(24, 119, 242, 0.4)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(24, 119, 242, 0.3)'
                }}
              >
                <FacebookIcon
                  style={{
                    width: '28px',
                    height: '28px',
                    fill: '#ffffff'
                  }}
                />
              </a>

              {/* LinkedIn */}
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '56px',
                  height: '56px',
                  backgroundColor: '#0077B5',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 12px rgba(0, 119, 181, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 119, 181, 0.4)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 119, 181, 0.3)'
                }}
              >
                <LinkedInIcon
                  style={{
                    width: '28px',
                    height: '28px',
                    fill: '#ffffff'
                  }}
                />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Projects
