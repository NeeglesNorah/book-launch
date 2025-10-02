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
      className="px-4 sm:px-6 lg:px-8 py-20"
      style={{
        backgroundColor: '#f1f1f1'
      }}
    >
      <div className="max-w-7xl mx-auto">
     

        {/* Project Cards */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row lg:items-center"
              style={{
                minHeight: 'clamp(600px, 70vw, 600px)',
                padding: 'clamp(24px, 6vw, 72px) clamp(16px, 4vw, 64px)',
                borderRadius: 'clamp(20px, 4vw, 32px)',
                border: '1px solid rgba(0, 0, 0, 0.08)',
                background: '#ffffff',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Content Section */}
              <div 
                className="flex-1 relative z-10 mb-6 lg:mb-0"
                style={{
                  marginLeft: index === 1 ? 'clamp(200px, 45vw, 500px)' : '0',
                  marginRight: index === 0 ? 'clamp(200px, 45vw, 500px)' : '0'
                }}
              >
                {/* Project Title */}
                <h3
                  style={{
                    color: '#314E34',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: 'clamp(28px, 6vw, 48px)',
                    fontStyle: 'normal',
                    fontWeight: '500',
                    marginBottom: '16px'
                  }}
                >
                  {project.title}
                </h3>

                {/* Project Description */}
                <p
                  style={{
                    color: '#606060',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: 'clamp(16px, 3vw, 22px)',
                    fontStyle: 'normal',
                    fontWeight: '500',
                    marginBottom: '24px',
                    maxWidth: '500px',
                    lineHeight: 'clamp(24px, 4vw, 32px)'
                  }}
                >
                  {project.description}
                </p>

                {/* Learn More Button */}
                <div>
                  <button
                    style={{
                      backgroundColor: '#314E34',
                      color: '#ffffff',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '16px',
                      fontWeight: '500',
                      padding: '12px 24px',
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

              {/* Project Image */}
              <div 
                style={{
                  position: 'absolute',
                  right: index === 0 ? '0' : 'auto',
                  left: index === 1 ? '0' : 'auto',
                  top: '0',
                  bottom: '0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: index === 0 ? 'flex-end' : 'flex-start',
                  zIndex: 2
                }}
              >
                <img 
                  src={project.image}
                  alt={`${project.title}`}
                  style={{
                    width: 'clamp(200px, 45vw, 500px)',
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
