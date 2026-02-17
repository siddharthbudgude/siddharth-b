import React, { useState } from 'react';
import './Portfolio.css';

// Custom SVG Icons
const Icons = {
  Eye: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
      <circle cx="12" cy="12" r="3"></circle>
    </svg>
  ),
  Github: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  ),
  ExternalLink: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
      <polyline points="15 3 21 3 21 9"></polyline>
      <line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>
  ),
  Code: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="16 18 22 12 16 6"></polyline>
      <polyline points="8 6 2 12 8 18"></polyline>
    </svg>
  ),
  Palette: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="13.5" cy="6.5" r=".5"></circle>
      <circle cx="17.5" cy="10.5" r=".5"></circle>
      <circle cx="8.5" cy="7.5" r=".5"></circle>
      <circle cx="6.5" cy="12.5" r=".5"></circle>
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path>
    </svg>
  ),
  Sparkles: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 3l1.545 4.635L18.18 9.18l-4.635 1.545L12 15.36l-1.545-4.635L5.82 9.18l4.635-1.545z"></path>
      <path d="M8 3l.545 1.635L10.18 5.18l-1.635.545L8 7.36 7.455 5.725 5.82 5.18l1.635-.545z"></path>
      <path d="M18 17l.545 1.635L20.18 19.18l-1.635.545L18 21.36l-.545-1.635L15.82 19.18l1.635-.545z"></path>
    </svg>
  )
};

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'NeoBank Dashboard',
      category: 'design',
      type: 'UI/UX Design',
      description: 'Modern banking interface with real-time analytics and intuitive money management',
      image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: '#667eea',
      tech: ['Figma', 'Prototyping', 'Design System'],
      year: '2024'
    },
    {
      id: 2,
      title: 'Quantum Commerce',
      category: 'frontend',
      type: 'E-commerce Platform',
      description: 'High-performance React storefront with advanced filtering and seamless checkout',
      image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      color: '#f5576c',
      tech: ['React', 'TypeScript', 'Tailwind CSS'],
      year: '2024'
    },
    {
      id: 3,
      title: 'Aether Design System',
      category: 'design',
      type: 'Component Library',
      description: 'Comprehensive design system with 120+ components and dark mode support',
      image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      color: '#4facfe',
      tech: ['Figma', 'Tokens', 'Documentation'],
      year: '2023'
    },
    {
      id: 4,
      title: 'Pulse Analytics',
      category: 'frontend',
      type: 'Data Visualization',
      description: 'Interactive dashboard with real-time metrics and customizable chart components',
      image: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      color: '#43e97b',
      tech: ['React', 'D3.js', 'WebSocket'],
      year: '2024'
    },
    {
      id: 5,
      title: 'Lumina Portfolio',
      category: 'design',
      type: 'Brand Identity',
      description: 'Complete brand refresh including logo, color palette, and web presence',
      image: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      color: '#fa709a',
      tech: ['Illustrator', 'Brand Guidelines', 'Web Design'],
      year: '2023'
    },
    {
      id: 6,
      title: 'Nexus Social',
      category: 'frontend',
      type: 'Social Platform',
      description: 'Real-time messaging app with video calls, stories, and content feeds',
      image: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
      color: '#a8edea',
      tech: ['React', 'Firebase', 'WebRTC'],
      year: '2024'
    },
    {
      id: 7,
      title: 'Velocity Studio',
      category: 'design',
      type: 'Motion Design',
      description: 'Animated landing page with scroll-triggered effects and micro-interactions',
      image: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
      color: '#ff9a9e',
      tech: ['After Effects', 'Lottie', 'GSAP'],
      year: '2023'
    },
    {
      id: 8,
      title: 'Catalyst CMS',
      category: 'frontend',
      type: 'Content Management',
      description: 'Headless CMS with drag-and-drop builder and multi-language support',
      image: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
      color: '#fcb69f',
      tech: ['Next.js', 'GraphQL', 'Contentful'],
      year: '2024'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  const filters = [
    { id: 'all', label: 'All Work', icon: 'Sparkles' },
    { id: 'design', label: 'Design', icon: 'Palette' },
    { id: 'frontend', label: 'Frontend', icon: 'Code' }
  ];

  return (
    <div className="portfolio-container">
      {/* Hero Section */}
      <header className="portfolio-header">
        <div className="social-links">
          <a href="#" className="social-link">
            <Icons.Github />
          </a>
          <a href="#" className="social-link">
            <Icons.ExternalLink />
          </a>
        </div>

        <div className="hero-container">
          <div className="hero-content">
            <div className="orb orb-1"></div>
            <div className="orb orb-2"></div>
            
            <h1 className="hero-title">
              <span className="title-line">Creative</span>
              <span className="title-line gradient-text">Developer</span>
            </h1>
            
            <p className="hero-description">
              Crafting digital experiences that blend innovative design with cutting-edge frontend development. 
              Turning creative visions into pixel-perfect reality.
            </p>

            <div className="button-container">
              <button className="btn btn-primary">View Projects</button>
              <button className="btn btn-secondary">Get in Touch</button>
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <div className="mouse">
            <div className="mouse-dot"></div>
          </div>
        </div>
      </header>

      {/* Filter Section */}
      <section className="portfolio-section">
        <div className="section-container">
          <div className="section-header">
            <div>
              <h2 className="section-title">Selected Work</h2>
              <p className="section-subtitle">
                {filteredProjects.length} projects showcasing design & development excellence
              </p>
            </div>

            <div className="filter-container">
              {filters.map((filter) => {
                const Icon = Icons[filter.icon];
                return (
                  <button
                    key={filter.id}
                    onClick={() => setActiveFilter(filter.id)}
                    className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
                  >
                    <Icon />
                    {filter.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <article
                key={project.id}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                className={`project-card ${hoveredProject === project.id ? 'hovered' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image/Gradient */}
                <div 
                  className="project-image"
                  style={{ background: project.image }}
                >
                  <div className="image-overlay"></div>
                  
                  {/* Hover overlay */}
                  <div className="project-overlay">
                    <button className="overlay-btn overlay-btn-primary">
                      <Icons.Eye />
                    </button>
                    <button className="overlay-btn overlay-btn-secondary">
                      <Icons.ExternalLink />
                    </button>
                  </div>

                  {/* Year badge */}
                  <div className="year-badge">{project.year}</div>
                </div>

                {/* Project Info */}
                <div className="project-info">
                  <div className="project-type">
                    <span 
                      className="type-dot"
                      style={{ backgroundColor: project.color }}
                    ></span>
                    <span className="type-label">{project.type}</span>
                  </div>

                  <h3 className="project-title">{project.title}</h3>

                  <p className="project-description">{project.description}</p>

                  {/* Tech Stack */}
                  <div className="tech-stack">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                </div>

                {/* Decorative corner accent */}
                <div 
                  className="corner-accent"
                  style={{ 
                    background: `radial-gradient(circle at top right, ${project.color} 0%, transparent 70%)`
                  }}
                ></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <div className="cta-orb">
            <div className="cta-orb-gradient"></div>
          </div>
          
          <h2 className="cta-title">
            Let's Build Something<br />
            <span className="gradient-text">Extraordinary</span>
          </h2>
          
          <p className="cta-description">
            Have a project in mind? I'm always excited to collaborate on innovative ideas
            and create impactful digital experiences.
          </p>

          <button className="btn btn-cta">
            Start a Conversation
            <Icons.ExternalLink />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="portfolio-footer">
        <div className="footer-content">
          <p className="footer-text">© 2024 Creative Developer. All rights reserved.</p>
          <div className="footer-links">
            <a href="#" className="footer-link">Twitter</a>
            <a href="#" className="footer-link">LinkedIn</a>
            <a href="#" className="footer-link">Dribbble</a>
            <a href="#" className="footer-link">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}