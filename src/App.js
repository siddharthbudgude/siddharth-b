import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './Components/About';
import User from './Components/User';
import Successlogin from './Components/Successlogin';
import Calculator from './Components/Calculator';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Home from './Components/Home'; 
import Ticktacgame from './Components/Tictacgame';
import CareerPath from './Components/Careerpath';
import Contact from './Components/Contact';
import Resume from './Components/Resume';

export default function MyApp() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
        
        {/* Main content area with padding for fixed navbar */}
        <main className="flex-grow-1" style={{ marginTop: '80px'}}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/user" element={<User />} />
            <Route path="/successlogin" element={<Successlogin />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path='/ticktacgame' element={<Ticktacgame/>} />
            <Route path='/careerpath' element={<CareerPath />}/>
            <Route path='/contact' element={<Contact />} />
            <Route path='/resume' element={<Resume />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}