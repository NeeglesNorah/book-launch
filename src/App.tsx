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

function App() {
  return (
    <Router>
      <div className="App relative">
       
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
       </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
