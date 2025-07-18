import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AnnouncementBanner from './components/AnnouncementBanner.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'
import About from './pages/About.jsx'
import Enquiry from './contact/Enquiry.jsx'
import BookAppointment from './pages/BookAppointment.jsx'
// import Features from './pages/Features.jsx';

import CircularGallery from './pages/CircularGallery.jsx';
import SplashCursor from './pages/SplashCursor';
import CurvedLoop from './pages/CurvedLoop';
import FAQ from './pages/FAQ';
import OfferTime from './pages/OfferTime.jsx';
// import MagicBento from './pages/MagicBento';
import ProductGrid from './pages/ProductGrid';
import OfferBanner from './pages/OfferBanner.jsx';
import Testimonial from './pages/Testimonial';
import FeatureCards from './pages/FeatureCards.jsx';
import Mergo from './contact/Merge.jsx';

const App = () => {
  return (
    <div>
      <Router>
        <AnnouncementBanner />
        <Navbar />

        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home />


                  <div style={{ height: '600px', position: 'relative' }}>
                    <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02} />
                  </div>
                  <SplashCursor />

                  
                  <OfferTime />

                  {/* <MagicBento
                    textAutoHide={true}
                    enableStars={true}
                    enableSpotlight={true}
                    enableBorderGlow={true}
                    enableTilt={true}
                    enableMagnetism={true}
                    clickEffect={true}
                    spotlightRadius={300}
                    particleCount={12}
                    glowColor="132, 0, 255"
                  /> */}

                  <ProductGrid/>
                  <OfferBanner/>
                  <FeatureCards/>
                  {/* <CurvedLoop
                    marqueeText="Be ✦ Creative ✦ With ✦ React ✦ Bits ✦"
                    speed={3}
                    curveAmount={500}
                    direction="right"
                    interactive={true}
                    className="custom-text-style"
                  /> */}
                  <FAQ />
                  <Testimonial />



                </>
              }
            />
            <Route path="/mergo" element={<Mergo />} />
            <Route path="/about" element={<About />} />
            <Route path="/enquiry" element={<Enquiry />} />
            <Route path="/products" element={<ProductGrid />} />


            <Route path="/bookAppointment" element={<BookAppointment />} />
          </Routes>
        </main>

        <Footer />
      </Router>
    </div>
  )
}

export default App