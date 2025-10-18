import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import About from '@/components/About'
import MissionVision from '@/components/MissionVision'
import Projects from '@/components/Projects'
import { WaitlistForm } from '@/components/waitlist'
import { Hero4 } from '@/components/hero'
import { Hero3 } from '@/components/heroo'

import { Case1 } from '@/components/slide'
import { Feature7 } from '@/components/story'

import { FAQ1 } from '@/components/faq'
import { CTA1 } from '@/components/cta'
import { PopupModal } from '@/components/PopupModal'
import { BookDownload } from '@/components/BookDownload'
import { useLocation } from 'react-router-dom'

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

function AppContent() {
  const location = useLocation()
  const isDownloadPage = location.pathname === '/download-book'

  return (
    <div className="App relative">
      {/* Only show popup on main pages, not on download page */}
      {!isDownloadPage && <PopupModal />}
      <div className="relative z-10">
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <div id="hero">
                <Hero3 />
                <Hero4 />
              </div>
              <div id="about">
                <CTA1 />
                <About />
                <MissionVision />
              </div>
              <div id="projects">
                <Projects />
                <Case1 />
                <Feature7 />
              </div>
              <div id="faq">
                <FAQ1 />
              </div>
              <div id="contact">
                <WaitlistForm />
              
              </div>
              <Footer />
            </>
          } />
          {/* Hidden route for book downloads - not linked anywhere on the site */}
          <Route path="/download-book" element={<BookDownload />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
