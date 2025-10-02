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
              className="grid grid-cols-1 gap-6 items-center lg:grid-cols-2"
              style={{
                minHeight: 'clamp(300px, 50vw, 600px)',
                padding: 'clamp(20px, 4vw, 72px) clamp(16px, 3vw, 64px)',
                borderRadius: 'clamp(16px, 3vw, 32px)',
                border: '1px solid rgba(0, 0, 0, 0.08)',
                background: '#ffffff',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
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
    </section>
  )
}

export default Projects
