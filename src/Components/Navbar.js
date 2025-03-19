import React, { useState } from 'react';
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className="navbar navbar-expand-lg bg-dark text-white fixed-top shadow-sm">
      <div className="container">
        {/* Logo Section */}
        <a className="navbar-brand d-flex align-items-center" href="/">
          <img
            src="/images/logo-t.png"
            alt="Company Logo"
            className="me-2" height="60"
          />
         
        </a>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded={!isNavCollapsed}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon bg-light"></span>
        </button>

        {/* Navbar Content */}
        <div className={`collapse navbar-collapse ${!isNavCollapsed ? 'show' : ''}`} id="navbarContent">
          {/* Navigation Links - Centered */}
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item mx-3">
              <Link to="/" className="nav-link active text-white" >Home</Link>
            </li>
            <li className="nav-item mx-3">
              <Link to="/about" className="nav-link text-white" >About</Link>
            </li>
            <li className="nav-item mx-3">
              <Link to="/careerpath" className="nav-link text-white" >Education</Link>
            </li>
            <li className="nav-item dropdown mx-3">
              <Link className="nav-link dropdown-toggle text-white"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false" to="/about" >
                  Services
                  </Link>
              <ul className="dropdown-menu">
                <li> <Link to="/calculator" className="dropdown-item" >Calculator</Link>
                </li>
                <li><Link to="/ticktacgame" className="dropdown-item" >Tictac Game</Link>
                </li>
                <li><hr className="dropdown-divider" /></li>
                <li> <Link to="/careerpath" className="dropdown-item" >Education</Link></li>
              </ul>
            </li>
            <li className="nav-item mx-3">
              <Link to="/portfolio" className="nav-link text-white" > Projects</Link>
            </li>
            <li className="nav-item mx-3 ">
              <Link to="/contact" className="nav-link text-white" >Contact</Link>
            </li>
          </ul>

          {/* Right-side Buttons */}
          <div className="d-flex gap-2">
            <button className="btn" type="button">
              <a className="nav-link" href="/contact">
                Connect With Me
              </a>
            </button>
            <button className="btn" type="button">
              Hire Me
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;