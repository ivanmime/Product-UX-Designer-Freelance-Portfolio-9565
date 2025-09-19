import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import WhatIDo from './components/WhatIDo';
import CaseStudies from './components/CaseStudies';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Contact from './components/Contact';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Hero />
          <WhatIDo />
          <CaseStudies />
          <Services />
          <Testimonials />
          <About />
          <Contact />
        </main>
        <FloatingWhatsApp />
      </div>
    </Router>
  );
}

export default App;