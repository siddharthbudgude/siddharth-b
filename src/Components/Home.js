import React from 'react';
import "./style.css";


import { useState } from 'react';
const projectsData = [
  { id: 1, emoji: '🛍️', bg: '#fef9ee', title: 'ShopEase – E-Commerce Platform', desc: 'Full-featured online store with cart, wishlist, product filters, and Razorpay payment integration.', tags: ['React', 'Bootstrap', 'Node.js'], live: '#', code: '#' },
  { id: 2, emoji: '📊', bg: '#f0f9ff', title: 'Analytics Dashboard', desc: 'Real-time sales & traffic dashboard with interactive charts, dark mode toggle, and CSV export.', tags: ['React', 'Chart.js', 'REST API'], live: '#', code: '#' },
  { id: 3, emoji: '🍕', bg: '#fff7ed', title: 'FoodieHub – Restaurant App', desc: 'Restaurant discovery and ordering app with geolocation, star ratings, and menu management.', tags: ['React', 'Google Maps API', 'CSS3'], live: '#', code: '#' },
  { id: 4, emoji: '💼', bg: '#f0fdf4', title: 'Corporate Landing Page', desc: 'High-conversion landing page for a fintech startup — animated sections, contact form, lead capture.', tags: ['HTML5', 'CSS3', 'JavaScript'], live: '#', code: '#' },
  { id: 5, emoji: '🗞️', bg: '#fdf4ff', title: 'Blog CMS – WordPress Theme', desc: 'Custom WordPress theme for a tech blog with SEO, dark mode toggle, and email subscription widget.', tags: ['WordPress', 'PHP', 'Custom CSS'], live: '#', code: '#' },
  { id: 6, emoji: '🎯', bg: '#fefce8', title: 'Task Manager App', desc: 'Kanban project management tool with drag-and-drop, labels, deadlines, and team collaboration features.', tags: ['React', 'LocalStorage', 'Tailwind CSS'], live: '#', code: '#' },
  { id: 7, emoji: '🏪', bg: '#fff1f2', title: 'Magento 2 Store – Fashion', desc: 'Custom Magento 2 theme for a fashion brand — lazy loading, size guide popup, and wishlist sync.', tags: ['Magento 2', 'PHP', 'jQuery'], live: '#', code: '#' },
  { id: 8, emoji: '🎨', bg: '#f0f9ff', title: 'Design Portfolio – Figma to Code', desc: 'Pixel-perfect conversion of a full Figma design system into a responsive React component library.', tags: ['Figma', 'React', 'CSS Modules'], live: '#', code: '#' },
  { id: 9, emoji: '🌐', bg: '#f0fdf4', title: 'Agency Website', desc: 'Multi-page digital agency site with scroll animations, parallax effects, and an interactive team section.', tags: ['HTML5', 'CSS3', 'JavaScript'], live: '#', code: '#' },
  { id: 10, emoji: '📱', bg: '#fefce8', title: 'Weather Forecast App', desc: 'Location-aware app with 7-day outlook, animated weather icons, °C/°F toggle, and local storage support.', tags: ['React', 'OpenWeather API', 'Tailwind'], live: '#', code: '#' },
];
const skillsData = [
  { id: 1, image: `${process.env.PUBLIC_URL}/images/html-logo.png`, name: 'HTML5', category: 'front-end' },
  { id: 2, image: `${process.env.PUBLIC_URL}/images/css-logo.png`, name: 'CSS3', category: 'front-end' },
  { id: 3, image: `${process.env.PUBLIC_URL}/images/javascript-logo.png`, name: 'JavaScript (ES6+)', category: 'front-end' },
  { id: 4, image: `${process.env.PUBLIC_URL}/images/react-logo.png`, name: 'React.js', category: 'front-end' },
  { id: 5, image: `${process.env.PUBLIC_URL}/images/jquery-logo.png`, name: 'Jquery', category: 'front-end' },
  { id: 6, image: `${process.env.PUBLIC_URL}/images/bootstrap-5-logo.png`, name: 'Bootstrap', category: 'front-end' },
  { id: 7, image: `${process.env.PUBLIC_URL}/images/tailwind-css-logo.png`, name: 'Tailwind CSS', category: 'front-end' },
  { id: 8, image: `${process.env.PUBLIC_URL}/images/figma-logo.png`, name: 'Figma', category: 'designing' },
  { id: 9, image: `${process.env.PUBLIC_URL}/images/canva-logo.png`, name: 'Canva', category: 'designing' },
  { id: 10, image: `${process.env.PUBLIC_URL}/images/wordpress-logo.png`, name: 'WordPress', category: 'cms' },
  { id: 11, image: `${process.env.PUBLIC_URL}/images/magento-logo.png`, name: 'Magento2', category: 'cms' },
  { id: 12, image: `${process.env.PUBLIC_URL}/images/github-logo.png`, name: 'Git Hub', category: 'version-control' },
];

const Skills = () => {
  const [filter, setFilter] = useState('all');

  const filteredSkills =
    filter === 'all'
      ? skillsData
      : skillsData.filter((skill) => skill.category === filter);

  const handleFilter = (category) => {
    setFilter(category);
  };

  return (
    <section id="skills" className='container'>
      <h2 className="mb-4 fw-bold fs-3">My Skills</h2>
      <div className="d-flex gap-3 mb-2 overflow-auto">
        <button onClick={() => handleFilter('all')} className="btn ">All</button>
        <button onClick={() => handleFilter('front-end')} className="btn">Front-end</button>
        <button onClick={() => handleFilter('version-control')} className="btn">Version-Control</button>
        <button onClick={() => handleFilter('designing')} className="btn">Designing</button>
        <button onClick={() => handleFilter('cms')} className="btn">CMS</button>
      </div>
      <div className='d-flex gap-3 py-3 align-items-center flex-wrap'>
        {filteredSkills.map((skill) => (
          <div
            key={skill.id}
            className='border p-3 rounded skil-item d-flex flex-column align-items-center gap-3'
          >
            <img
              src={skill.image}
              alt={skill.name}
              style={{ width: '50px', height: '50px', marginBottom: '5px', }}
            />
            <span className='Skill-name'>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};


const HeroSection = () => {
  return (
    <section className="hero-section text-center py-5 ">
      <p className="greeting">👋 My name is Siddharth and I am a</p>
      <h1 className="web-title">Web-Designer</h1>
      <h2 className="photo-title"> & Developer</h2>
      <p className="location">Based in Pune, Maharastra.</p>
      <div className="hero-buttons">
        <button className="btn btn-dark me-3 mb-4">Need a Designer</button>
        <button className="btn btn-outline-dark me-3 mb-4">Need a Developer</button>
        <a href='/Resume' className="resume-home btn">Chekout My Resume</a>
      </div>
    </section>
  );
};

export default function PortfolioPage() {
  return (
    <div className="bg-light min-vh-100">
      {/* Hero Section */}
      <HeroSection />
      <Skills />
      <section className="container py-5 text-center">
        <div className="row align-items-center">
          <div className="col-md-6 text-md-start">
            <h1 className="display-4 fw-bold">Crafting Digital Experiences</h1>
            <p className="lead">Creating impactful digital innovations through cutting-edge web development solutions.</p>
            <div className="mt-4">
              <a href="#contact" className="btn me-2">Contact Me</a>
              <a href="#projects" className="btn">View Projects</a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
  
        <section id="projects" className="pf-projects container">
          <div className="pf-projects-inner">
            <span className="pf-label">What I've Built</span>
            <h2 className="pf-title">Featured Projects</h2>
            <div className="pf-divider" />
            <div className="pf-projects-grid">
              {projectsData.map(p => (
                <div key={p.id} className="pf-proj-card">
                  <div className="pf-proj-thumb" style={{ background: p.bg }}>
                    <span>{p.emoji}</span>
                  </div>
                  <div className="pf-proj-body">
                    <div className="pf-proj-tags">
                      {p.tags.map(t => <span key={t} className="pf-proj-tag">{t}</span>)}
                    </div>
                    <h3 className="pf-proj-title">{p.title}</h3>
                    <p className="pf-proj-desc">{p.desc}</p>
                    <div className="pf-proj-links">
                      <a href={p.live} className="pf-proj-link">🔗 Live Demo</a>
                      <a href={p.code} className="pf-proj-link">💻 Source Code</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
    

      {/* Experience Section */}
      <section id="experience" className="py-5 bg-dark mb-5 ">
        <div className="container">
          <h2 className="fw-bold text-center mb-4 text-light">Experience & Education</h2>
          <div className="row">
            {[
              { title: 'Web Developer at Company A', date: '2021 - Present' },
              { title: 'Frontend Developer Intern at Company B', date: '2020 - 2021' },
            ].map((exp, index) => (
              <div key={index} className="col-md-6 mb-3">
                <div className="bg-white p-4 rounded shadow-sm">
                  <h5 className="fw-semibold mb-1">{exp.title}</h5>
                  <p className="text-muted mb-0">{exp.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}