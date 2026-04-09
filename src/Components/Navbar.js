import React, { useState } from 'react';
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className="navbar navbar-expand-lg bg-dark text-white fixed-top shadow-sm">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src={`${process.env.PUBLIC_URL}/images/Logo-t.png`}
            alt="Company Logo"
            className="me-2" height="60"
          />
        </Link>

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

        <div className={`collapse navbar-collapse ${!isNavCollapsed ? 'show' : ''}`} id="navbarContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item mx-3">
              <Link to="/" className="nav-link active text-white" onClick={() => setIsNavCollapsed(true)}>Home</Link>
            </li>
            <li className="nav-item mx-3">
              <Link to="/about" className="nav-link text-white" onClick={() => setIsNavCollapsed(true)}>About</Link>
            </li>
            <li className="nav-item mx-3">
              <Link to="/careerpath" className="nav-link text-white" onClick={() => setIsNavCollapsed(true)}>Education</Link>
            </li>
            <li className="nav-item mx-3">
              <Link to="/portfolio" className="nav-link text-white" onClick={() => setIsNavCollapsed(true)}>Portfolio</Link>
            </li>
            <li className="nav-item mx-3">
              <Link to="/contact" className="nav-link text-white" onClick={() => setIsNavCollapsed(true)}>Contact</Link>
            </li>
          </ul>

          <div className="d-flex gap-2 align-items-center">
            <Link to="/contact" className="btn btn-outline" onClick={() => setIsNavCollapsed(true)}>Connect With Me</Link>
            <button className="btn" type="button">Hire Me</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;