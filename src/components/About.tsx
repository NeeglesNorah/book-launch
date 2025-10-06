import  { useState, useEffect, useRef } from 'react'

const About = () => {
  const [displayedText, setDisplayedText] = useState('')
  const [isVisible, setIsVisible] = useState(false)
  const [hasStarted, setHasStarted] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const fullText = "What started as a simple article in 2012 became a movement. An 83-year-old woman's journey of faith, fitness, and fearless living proving that age is just a number when you have God's grace and the right mindset."
  
  // Intersection Observer to detect when section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setIsVisible(true)
          setHasStarted(true)
        }
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [hasStarted])

  // Typewriter effect
  useEffect(() => {
    if (!isVisible) return

    let index = 0
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
      }
    }, 80) // Adjust speed here (lower = faster)
    
    return () => clearInterval(timer)
  }, [isVisible, fullText])

  const renderText = () => {
    return displayedText
  }

  return (
    <section 
      ref={sectionRef}
      className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20"
      style={{
        backgroundColor: '#Fff'
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div 
          className="text-center"
          style={{
            minHeight: 'clamp(200px, 40vw, 400px)', // Fixed height container
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            paddingTop: '2rem'
          }}
        >
          <p 
            style={{
              color: '#606060',
              fontFamily: 'Inter, sans-serif',
              fontSize: 'clamp(24px, 5vw, 48px)',
              fontStyle: 'normal',
              fontWeight: '500',
              lineHeight: 'clamp(32px, 6vw, 60px)',
              letterSpacing: 'clamp(-0.8px, -0.2vw, -1.5px)',
              margin: 0
            }}
          >
            {renderText()}
            {isVisible && <span className="animate-pulse">|</span>}
          </p>
        </div>
      </div>
    </section>
  )
}

export default About