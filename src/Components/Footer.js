import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white pt-5 pb-4">
      <div className="container">
        <div className="row">
          {/* About Company Section */}
          <div className="col-md-3 col-lg-3 col-xl-3  mb-4">
            <h6 className="text-uppercase fw-bold mb-4">
              <i className="fas fa-building me-2"></i>
              Siddharth Budgude
            </h6>
            <p>
            | Web Designer & Developer |
            </p>
            {/* Social Media Links */}
            <div className="mt-4">
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer" className="btn btn-outline-light btn-floating m-1">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer" className="btn btn-outline-light btn-floating m-1">
                <i class="fa-brands fa-github"></i>
              </a>
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer" className="btn btn-outline-light btn-floating m-1">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer" className="btn btn-outline-light btn-floating m-1">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          {/* Products Section */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Game</h6>
            <p>
              <a href="/calculator" className="text-white text-decoration-none">Calculator</a>
            </p>
            <p>
              <a href="/ticktacgame" className="text-white text-decoration-none">Ticktacgame</a>
            </p>
          </div>

          {/* Useful Links Section */}
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
            <p>
              <a href="/careerpath" className="text-white text-decoration-none">Education</a>
            </p>
            <p>
              <a href="/portfolio" className="text-white text-decoration-none">Portfolio</a>
            </p>
            <p>
              <a href="/Resume" className="text-white text-decoration-none">Resume</a>
            </p>
            <p>
              <a href="/contact" className="text-white text-decoration-none">Contact Us</a>
            </p>
          </div>

          {/* Contact Section */}
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
            <p>
              <i className="fas fa-home me-2"></i>
              Pune Maharashtra
            </p>
            <p>
              <i className="fas fa-envelope me-2"></i>
              siddharthbudgude5@gmail.com
            </p>
            <p>
              <i className="fas fa-phone me-2"></i>
              + 7507157652
            </p>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="row mt-4">
          <div className="col-12">
            <div className="bg-secondary bg-opacity-25 p-4 rounded">
              <h6 className="text-uppercase fw-bold mb-4 text-center">Subscribe to our newsletter</h6>
              <div className="input-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  aria-label="Enter your email"
                />
                <button className="btn btn-outline-light" type="button" onClick={handleClick} style={{background:'none', border:'none', cursor:'pointer'}}>
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="row mt-4">
          <div className="col-12 text-center border-top pt-4">
            <p>
              © {currentYear} Copyright:&nbsp;
              <span className="text-white text-decoration-none">
              Designed & Developed by Siddharth
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;