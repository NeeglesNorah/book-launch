import { useState } from 'react'
import { LogoIcon, HamburgerIcon } from '@/icons'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  const navLinks = [
    { name: 'Home', sectionId: 'hero' },
    { name: 'About', sectionId: 'about' },
    { name: 'Preview', sectionId: 'projects' },
    { name: 'FAQ', sectionId: 'faq' },
    { name: 'Contact', sectionId: 'contact' }
  ]

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <nav 
        className="sticky top-0 z-50 flex items-center justify-between px-4 md:px-8 py-4 backdrop-blur-md" 
        style={{ 
          borderBottom: '0.5px solid rgba(255, 255, 255, 0.1)', 
          background: 'rgba(17, 17, 17, 0.3)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          minHeight: '80px',
          boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
        }}
      >
        {/* Logo - Left side */}
        <div className="flex items-center flex-shrink-0">
          <div onClick={() => scrollToSection('hero')} className="cursor-pointer">
            <img src={LogoIcon} alt="Logo" className="h-10 md:h-12 w-auto" style={{ transform: 'rotate(-90deg)' }} />
          </div>
        </div>
        
        {/* Desktop Navigation Links - Hidden on mobile */}
        <div className="hidden lg:flex items-center justify-center flex-1">
          <div className="flex items-center">
            {navLinks.map((link) => (
              <div
                key={link.name}
                onClick={() => scrollToSection(link.sectionId)}
                className="px-4 py-2 text-base font-medium transition-all duration-200 cursor-pointer text-white hover:text-gray-300"
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  color: '#FFFFFF',
                  fontSize: '16px',
                  fontWeight: '500'
                }}
              >
                {link.name}
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Preorder Button - Hidden on mobile */}
        <div className="hidden lg:flex items-center flex-shrink-0">
          <button 
            onClick={() => scrollToSection('contact')}
            className="px-4 py-2 rounded-md font-medium flex items-center gap-2 text-sm"
            style={{
              backgroundColor: '#ffffff',
              color: '#314E34',
              border: '1px solid #e5e7eb'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.setProperty('background-color', '#f3f4f6', 'important');
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.setProperty('background-color', '#ffffff', 'important');
            }}
          >
            Pre-Order Now
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Button - Visible only on mobile */}
        <div className="lg:hidden flex items-center">
          <div
            onClick={toggleMobileMenu}
            className="cursor-pointer"
            aria-label="Toggle mobile menu"
          >
            <HamburgerIcon className="h-6 w-6" />
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 z-50 h-full w-80 bg-gray-900 transform transition-transform duration-300 ease-in-out lg:hidden ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
      style={{
        background: 'rgba(17, 17, 17, 0.95)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderLeft: '0.5px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '-8px 0 32px 0 rgba(0, 0, 0, 0.37)'
      }}>
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-700">
            <div onClick={() => scrollToSection('hero')} className="cursor-pointer">
              <img src={LogoIcon} alt="Logo" className="h-10 w-auto" style={{ transform: 'rotate(-90deg)' }} />
            </div>
            <div
              onClick={closeMobileMenu}
              className="p-2 rounded-lg hover:bg-gray-800 transition-colors duration-200 cursor-pointer"
              aria-label="Close mobile menu"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
          </div>

          {/* Mobile Navigation Links */}
          <div className="flex-1 px-6 py-8">
            <div className="space-y-2">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  onClick={() => scrollToSection(link.sectionId)}
                  className="block px-4 py-3 text-lg font-medium transition-all duration-200 rounded-lg cursor-pointer text-white hover:text-gray-300 hover:bg-gray-800"
                  style={{
                    fontFamily: 'Poppins, sans-serif'
                  }}
                >
                  {link.name}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Navbar
