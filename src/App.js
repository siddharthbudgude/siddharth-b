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

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('App error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="flex-grow-1 d-flex align-items-center justify-content-center" style={{ marginTop: '80px', minHeight: '60vh' }}>
          <div className="text-center p-5">
            <h2>Something went wrong.</h2>
            <p>Please refresh the page or try a different route.</p>
            <details style={{ textAlign: 'left', fontSize: '0.9rem' }}>
              <summary>Error details (click to expand)</summary>
              <pre>{this.state.error?.message}</pre>
            </details>
          </div>
        </main>
      );
    }

    return this.props.children;
  }
}

export default function MyApp() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <ErrorBoundary>
        <main className="flex-grow-1" style={{ marginTop: '80px' }}>
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/careerpath" element={<CareerPath />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
        </ErrorBoundary>
        </main>
      </ErrorBoundary>
      <Footer />
    </div>
  );
}
