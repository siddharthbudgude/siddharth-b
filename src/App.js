import React from 'react';
import './App.css';
import './fonts.css';
import { Routes, Route } from 'react-router-dom';
import About from './Components/About';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import CareerPath from './Components/Careerpath';
import Contact from './Components/Contact';
import Resume from './Components/Resume';
import Portfolio from './Components/Portfolio';

export default function MyApp() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <main className="flex-grow-1" style={{ marginTop: '80px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/careerpath" element={<CareerPath />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}