import React from 'react';
import "./style.css";


import { useState } from 'react';

const skillsData = [
  {
    id: 1,
    image:`${process.env.PUBLIC_URL}/images/html-logo.png`,
    name: 'HTML5',
    category: 'front-end',
  },
  {
    id: 2,
    image:`${process.env.PUBLIC_URL}/images/css-logo.png`,
    name: 'CSS3',
    category: 'front-end',
  },
  {
    id: 3,
    image:`${process.env.PUBLIC_URL}/images/javascript-logo.png`,
    name: 'JavaScript (ES6+)',
    category: 'front-end',
  },
  {
    id: 4,
    image:`${process.env.PUBLIC_URL}/images/react-logo.png`,
    name: 'React.js',
    category: 'front-end',
  },
  {
    id: 5,
    image:`${process.env.PUBLIC_URL}/images/jquery-logo.png`,
    name: 'Jquery',
    category: 'front-end',
  },
  {
    id: 6,
    image:`${process.env.PUBLIC_URL}/images/bootstrap-5-logo.png`,
    name: 'Bootstrap',
    category: 'front-end',
  },
  {
    id: 7,
    image:`${process.env.PUBLIC_URL}/images/tailwind-css-logo.png`,
    name: 'Tailwind CSS',
    category: 'front-end',
  },
  {
    id: 8,
    image:`${process.env.PUBLIC_URL}/images/figma-logo.png`,
    name: 'Figma',
    category: 'designing',
  },
  {
    id: 9,
    image:`${process.env.PUBLIC_URL}/images/canva-logo.png`,
    name: 'Canva',
    category: 'designing',
  },
  {
    id: 10,
    image:`${process.env.PUBLIC_URL}/images/wordpress-logo.png`,
    name: 'WordPress',
    category: 'cms',
  },
  {
    id: 11,
    image:`${process.env.PUBLIC_URL}/images/magento-logo.png`,
    
    name: 'Magento2',
    category: 'cms',
  },
  {
    id: 12,
    image:`${process.env.PUBLIC_URL}/images/github-logo.png`,
    name: 'Git Hub',
    category: 'version-control',
  },
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
      <div className="d-flex gap-3 mb-2">
        <button onClick={() => handleFilter('all')} className="btn">All</button>
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
        <button className="btn btn-dark me-3">Need a Designer</button>
        <button className="btn btn-outline-dark me-3">Need a Developer</button>
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

      {/* Skills Section */}
      <section id="skills" className="py-5 bg-dark text-white">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">Skills & Technologies</h2>
          <div className="row row-cols-2 row-cols-md-4 g-3">
            {['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Bootstrap', 'Figma'].map((skill) => (
              <div key={skill} className="col">
                <div className="p-4 bg-white text-dark rounded shadow">
                  <h5 className="fw-semibold">{skill}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Projects Section */}
      <section id="projects" className="py-5">
        <div className="container">
          <h2 className="fw-bold text-center mb-4">Projects</h2>
          <div className="row g-4">
            {['Project 1', 'Project 2', 'Project 3', 'project4'].map((project, index) => (
              <div key={index} className="col-md-4">
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title fw-bold">{project}</h5>
                    <p className="card-text">A description of what the project entails and the technologies used.</p>
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
