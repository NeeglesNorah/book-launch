import { Light1Icon, Light2Icon } from '@/icons'

const Projects = () => {
  
  const projects = [
    {
      title: "The Author's Story",
      description: "Meet the 85-year-old woman who leads aerobics, inspires generations, and proves that age is just a number when you have faith, fitness, and the right mindset. Her journey from a simple article to a life-changing book.",
      image: Light1Icon
    },
    {
      title: "Key Book Insights",
      description: "Discover the powerful principles that have kept this remarkable woman vibrant, relevant, and impactful at 85. Learn how faith, fitness, and a positive mindset can transform your approach to ageing.",
      image: Light2Icon
    }
  ]

  return (
    <section 
      className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20"
      style={{
        backgroundColor: '#f1f1f1'
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Project Cards */}
        <div className="space-y-6 sm:space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row lg:items-center"
              style={{
                minHeight: 'clamp(400px, 50vw, 600px)',
                padding: 'clamp(20px, 4vw, 72px) clamp(16px, 3vw, 64px)',
                borderRadius: 'clamp(16px, 3vw, 32px)',
                border: '1px solid rgba(0, 0, 0, 0.08)',
                background: '#ffffff',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Content Section */}
              <div 
                className="flex-1 relative z-10 mb-4 sm:mb-6 lg:mb-0"
                style={{
                  marginLeft: index === 1 ? 'clamp(0px, 0vw, 500px)' : '0',
                  marginRight: index === 0 ? 'clamp(0px, 0vw, 500px)' : '0'
                }}
              >
                {/* Project Title */}
                <h3
                  style={{
                    color: '#314E34',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: 'clamp(20px, 5vw, 48px)',
                    fontStyle: 'normal',
                    fontWeight: '500',
                    marginBottom: '12px sm:16px',
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
                    marginBottom: '20px sm:24px',
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
                  >
                    Learn more
                  </button>
                </div>
              </div>

              {/* Project Image - Mobile: Full width, Desktop: Absolute positioned */}
              <div 
                className="relative lg:absolute w-full lg:w-auto h-48 sm:h-56 lg:h-full mb-4 lg:mb-0"
                style={{
                  right: index === 0 ? '0' : 'auto',
                  left: index === 1 ? '0' : 'auto',
                  top: '0',
                  bottom: '0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 2
                }}
              >
                <img 
                  src={project.image}
                  alt={`${project.title}`}
                  className="w-full h-full object-cover rounded-lg lg:rounded-none"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderTopLeftRadius: index === 1 ? 'clamp(20px, 4vw, 32px)' : '0',
                    borderTopRightRadius: index === 0 ? 'clamp(20px, 4vw, 32px)' : '0',
                    borderBottomLeftRadius: index === 1 ? 'clamp(20px, 4vw, 32px)' : '0',
                    borderBottomRightRadius: index === 0 ? 'clamp(20px, 4vw, 32px)' : '0'
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
