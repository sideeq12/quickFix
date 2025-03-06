import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Homepage from './pages/homepage'
import About from './pages/aboutUs'
import Navbar from './components/navbar'
import Footer from './components/footer';
import Blog from './pages/Blog';
import Terms from './pages/terms';
import Privacy from './pages/privacy';
import FAQ from './pages/faq';
import Contact from './pages/contact';
import Events from './pages/events';

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />  
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/events" element={<Events />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
