import React, { useState, useEffect, useRef } from 'react';
import "./style.css";
const projectsData = [
  { id: 1, title: 'MAISON — Luxury Boutique', desc: 'Luxury e-commerce store with cart, wishlist, product filters, category browsing, and a full checkout sidebar.', tags: ['HTML5', 'CSS3', 'JavaScript'], preview: `${process.env.PUBLIC_URL}/projects/ecommerce/index.html` },
  { id: 2, title: 'Prism — Data Dashboard', desc: 'Interactive analytics dashboard with real-time charts, KPI cards, revenue forecasting, and customer tables.', tags: ['HTML5', 'Chart.js', 'CSS3'], preview: `${process.env.PUBLIC_URL}/projects/data-dashboard/index.html` },
  { id: 3, title: 'PulseTrack — Fitness Tracker', desc: 'Fitness tracker with animated progress rings, workout logger, weekly charts, goals, and history.', tags: ['HTML5', 'CSS3', 'JavaScript'], preview: `${process.env.PUBLIC_URL}/projects/fitness-tracker/index.html` },
  { id: 4, title: 'CineVerse — Movie Discovery', desc: 'Movie discovery app with hero banner, genre filters, watchlist, search, and a dark/light theme toggle.', tags: ['HTML5', 'CSS3', 'JavaScript'], preview: `${process.env.PUBLIC_URL}/projects/movie-discovery/index.html` },
  { id: 5, title: 'Quizzly — Quiz App', desc: 'Interactive quiz app with categories, difficulty levels, countdown timer, scoring, and a leaderboard.', tags: ['HTML5', 'CSS3', 'JavaScript'], preview: `${process.env.PUBLIC_URL}/projects/quiz-app/index.html` },
  { id: 6, title: 'Savor — Recipe & Meal Planner', desc: 'Recipe discovery app with meal planner, saved recipes, shopping list generator, and ingredient search.', tags: ['HTML5', 'CSS3', 'JavaScript'], preview: `${process.env.PUBLIC_URL}/projects/recipe-app/index.html` },
  { id: 7, title: 'Job Board', desc: 'Job listing board with search, filters by role and location, and detailed job cards.', tags: ['HTML5', 'CSS3', 'JavaScript'], preview: `${process.env.PUBLIC_URL}/projects/job-board/index.html` },
  { id: 8, title: 'Stock Market Tracker', desc: 'Stock market UI with live-style price cards, charts, portfolio overview, and market trends.', tags: ['HTML5', 'CSS3', 'JavaScript'], preview: `${process.env.PUBLIC_URL}/projects/stock-market/index.html` },
  { id: 9, title: 'Personal Finance Tracker', desc: 'Budget tracker with income/expense logging, category breakdown charts, and monthly summaries.', tags: ['HTML5', 'CSS3', 'JavaScript'], preview: `${process.env.PUBLIC_URL}/projects/personal-finance-tracker/index.html` },
  { id: 10, title: 'Travel Planner', desc: 'Travel planning app with destination search, itinerary builder, and trip cost estimator.', tags: ['HTML5', 'CSS3', 'JavaScript'], preview: `${process.env.PUBLIC_URL}/projects/travel-planner/index.html` },
  { id: 11, title: 'Social Dashboard', desc: 'Social media analytics dashboard with follower stats, engagement metrics, and post performance.', tags: ['HTML5', 'CSS3', 'JavaScript'], preview: `${process.env.PUBLIC_URL}/projects/social-dashboard/index.html` },
  { id: 12, title: 'Developer Portfolio', desc: 'Clean developer portfolio template with project showcase, skills section, and contact form.', tags: ['HTML5', 'CSS3', 'JavaScript'], preview: `${process.env.PUBLIC_URL}/projects/portfolio/index.html` },
];
const skillsData = [
  { id: 1, image: `${process.env.PUBLIC_URL}/images/html-logo.png`, name: 'HTML5', category: 'front-end' },
  { id: 2, image: `${process.env.PUBLIC_URL}/images/CSS-Logo.png`, name: 'CSS3', category: 'front-end' },
  { id: 3, image: `${process.env.PUBLIC_URL}/images/JavaScript-Logo.png`, name: 'JavaScript (ES6+)', category: 'front-end' },
  { id: 4, image: `${process.env.PUBLIC_URL}/images/React-logo.png`, name: 'React.js', category: 'front-end' },
  { id: 5, image: `${process.env.PUBLIC_URL}/images/jquery-logo.png`, name: 'Jquery', category: 'front-end' },
  { id: 6, image: `${process.env.PUBLIC_URL}/images/bootstrap-5-logo.png`, name: 'Bootstrap', category: 'front-end' },
  { id: 7, image: `${process.env.PUBLIC_URL}/images/Tailwind-css-logo.png`, name: 'Tailwind CSS', category: 'front-end' },
  { id: 8, image: `${process.env.PUBLIC_URL}/images/Figma-Logo.png`, name: 'Figma', category: 'designing' },
  { id: 9, image: `${process.env.PUBLIC_URL}/images/canva-logo.png`, name: 'Canva', category: 'designing' },
  { id: 10, image: `${process.env.PUBLIC_URL}/images/WordPress-logo.png`, name: 'WordPress', category: 'cms' },
  { id: 11, image: `${process.env.PUBLIC_URL}/images/magento-logo.png`, name: 'Magento2', category: 'cms' },
  { id: 12, image: `${process.env.PUBLIC_URL}/images/GitHub-logo.png`, name: 'Git Hub', category: 'version-control' },
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


const educationData = [
  {
    year: '2017',
    icon: 'fa-book-open',
    title: 'SSC — Secondary School Certificate',
    place: 'Maharashtra Board',
    score: '71%',
    desc: 'Built a strong foundation in science, mathematics and analytical thinking that sparked my interest in technology and problem-solving.',
  },
  {
    year: '2019',
    icon: 'fa-award',
    title: 'HSC — Higher Secondary Certificate',
    place: 'Maharashtra Board · Maths Stream',
    score: '56.60%',
    desc: 'Specialised in Mathematics with Physics, Chemistry and Information Technology — preparing me for a technical higher education path.',
  },
  {
    year: '2023',
    icon: 'fa-graduation-cap',
    title: "Bachelor's Degree — Computer Science",
    place: 'Pune University',
    score: '8.5 CGPA',
    desc: 'Graduated with distinction. Focused on RDBMS, Java, Maths and software development. Developed strong problem-solving, teamwork and project management skills.',
  },
  {
    year: 'Present',
    icon: 'fa-user-graduate',
    title: "Master's Program — Computer Science",
    place: 'Pune University',
    score: 'Pursuing',
    desc: 'Exploring advanced concepts in web development, software engineering and real-world application design. Continuously evolving with the latest industry practices.',
  },
];

const experienceData = [
  {
    period: 'Mar 2023 – Aug 2023',
    role: 'UI Developer Intern',
    company: 'Coditron Technologies',
    tags: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'jQuery', 'Figma', 'WordPress', 'Git'],
    desc: 'Developed responsive UI components, assisted in building client websites and gained hands-on experience with design-to-code workflows.',
  },
  {
    period: 'Aug 2023 – Dec 2024',
    role: 'UI Designer',
    company: 'Coditron Technologies',
    tags: ['Figma', 'Canva', 'Tailwind CSS', 'React', 'Prototyping', 'Responsive Design', 'WordPress'],
    desc: 'Led UI/UX design for multiple client projects. Created design systems, app prototypes and pixel-perfect responsive interfaces.',
  },
  {
    period: 'Jan 2025 – Present',
    role: 'Web Developer',
    company: 'Coditron Technologies',
    tags: ['React', 'JavaScript', 'Tailwind CSS', 'Magento 2', 'WordPress', 'Figma', 'Git'],
    desc: 'Building full-featured web applications and e-commerce solutions. Responsible for frontend architecture, performance optimisation and client delivery.',
  },
];

const EduExperienceSection = () => {
  const [activeTab, setActiveTab] = useState('education');
  const itemRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.target.classList.toggle('edu-visible', e.isIntersecting)),
      { threshold: 0.15 }
    );
    itemRefs.current.forEach(el => el && observer.observe(el));
    return () => observer.disconnect();
  }, [activeTab]);

  return (
    <section id="edu-section" className="edu-section">
      <div className="container">
        <p className="edu-eyebrow">My Journey</p>
        <h2 className="edu-main-title">Education & Experience</h2>

        {/* tab switcher */}
        <div className="edu-tabs">
          <button
            className={`edu-tab${activeTab === 'education' ? ' edu-tab-active' : ''}`}
            onClick={() => setActiveTab('education')}
          >
            <i className="fa-solid fa-graduation-cap me-2" />
            Education
          </button>
          <button
            className={`edu-tab${activeTab === 'experience' ? ' edu-tab-active' : ''}`}
            onClick={() => setActiveTab('experience')}
          >
            <i className="fa-solid fa-briefcase me-2" />
            Experience
          </button>
        </div>

        {/* education timeline */}
        {activeTab === 'education' && (
          <div className="edu-timeline">
            {educationData.map((item, i) => (
              <div
                key={i}
                className="edu-item"
                ref={el => itemRefs.current[i] = el}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="edu-year-col">
                  <span className="edu-year-badge">{item.year}</span>
                </div>
                <div className="edu-line-col">
                  <div className="edu-dot"><i className={`fa-solid ${item.icon}`} /></div>
                  {i < educationData.length - 1 && <div className="edu-connector" />}
                </div>
                <div className="edu-card">
                  <div className="edu-card-header">
                    <div>
                      <h3 className="edu-card-title">{item.title}</h3>
                      <p className="edu-card-place">{item.place}</p>
                    </div>
                    <span className="edu-score-badge">{item.score}</span>
                  </div>
                  <p className="edu-card-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* experience timeline */}
        {activeTab === 'experience' && (
          <div className="edu-timeline">
            {experienceData.map((item, i) => (
              <div
                key={i}
                className="edu-item"
                ref={el => itemRefs.current[i] = el}
                style={{ transitionDelay: `${i * 0.12}s` }}
              >
                <div className="edu-year-col">
                  <span className="edu-year-badge exp-badge">{item.period}</span>
                </div>
                <div className="edu-line-col">
                  <div className="edu-dot exp-dot"><i className="fa-solid fa-briefcase" /></div>
                  {i < experienceData.length - 1 && <div className="edu-connector" />}
                </div>
                <div className="edu-card">
                  <div className="edu-card-header">
                    <div>
                      <h3 className="edu-card-title">{item.role}</h3>
                      <p className="edu-card-place">{item.company}</p>
                    </div>
                    <span className="edu-score-badge exp-badge">🏢 Full-time</span>
                  </div>
                  <p className="edu-card-desc">{item.desc}</p>
                  <div className="edu-tags">
                    {item.tags.map(t => <span key={t} className="edu-tag">{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

const HeroSection = () => {
  const canvasRef = useRef(null);
  const animRef   = useRef(null);
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping]       = useState(true);
  const roles = ['UI Designer', 'Frontend Developer', 'Web Developer', 'React Developer'];

  useEffect(() => {
    const word = roles[roleIndex];
    let t;
    if (typing) {
      if (displayed.length < word.length)
        t = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 80);
      else t = setTimeout(() => setTyping(false), 1600);
    } else {
      if (displayed.length > 0)
        t = setTimeout(() => setDisplayed(d => d.slice(0, -1)), 40);
      else { setRoleIndex(i => (i + 1) % roles.length); setTyping(true); }
    }
    return () => clearTimeout(t);
  }, [displayed, typing, roleIndex]); // eslint-disable-line

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let W, H;
    const resize = () => { W = canvas.width = canvas.offsetWidth; H = canvas.height = canvas.offsetHeight; };
    resize();
    window.addEventListener('resize', resize);
    const isMobile = window.innerWidth < 768;
    const COUNT = isMobile ? 20 : Math.min(50, Math.floor((window.innerWidth * window.innerHeight) / 16000));
    const pts = Array.from({ length: COUNT }, () => ({
      x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight,
      r: Math.random() * 1.6 + 0.6,
      vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3,
      a: Math.random() * 0.25 + 0.08,
    }));
    let mx = 9999, my = 9999;
    const onMove = e => { mx = e.clientX; my = e.clientY; };
    window.addEventListener('mousemove', onMove);
    const tick = () => {
      ctx.clearRect(0, 0, W, H);
      pts.forEach(p => {
        const dx = p.x - mx, dy = p.y - my, d = Math.sqrt(dx*dx+dy*dy);
        if (d < 80) { p.vx += (dx/d)*0.2; p.vy += (dy/d)*0.2; }
        p.vx *= 0.97; p.vy *= 0.97;
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
        ctx.fillStyle = `rgba(252,13,13,${p.a})`; ctx.fill();
      });
      for (let i = 0; i < pts.length; i++)
        for (let j = i+1; j < pts.length; j++) {
          const dx = pts[i].x-pts[j].x, dy = pts[i].y-pts[j].y, d = Math.sqrt(dx*dx+dy*dy);
          if (d < 100) {
            ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = `rgba(252,13,13,${0.07*(1-d/100)})`; ctx.lineWidth = 0.6; ctx.stroke();
          }
        }
      animRef.current = requestAnimationFrame(tick);
    };
    tick();
    return () => { cancelAnimationFrame(animRef.current); window.removeEventListener('mousemove', onMove); window.removeEventListener('resize', resize); };
  }, []);

  return (
    <section className="nh-wrap">
      <canvas ref={canvasRef} className="nh-canvas" />

      <div className="container">
        <div className="nh-grid">

          {/* LEFT */}
          <div className="nh-left">
            <div className="nh-avail">
              <span className="nh-dot" />
              Available for work
            </div>
            <h1 className="nh-heading">
              Hi, I'm<br />
              <span className="nh-name-solid">Siddharth </span>
              <span className="nh-name-outline">Budgude</span>
            </h1>
            <div className="nh-role-wrap">
              <span className="nh-role-pre">I'm a </span>
              <span className="nh-role-text">{displayed}</span>
              <span className="nh-cursor">|</span>
            </div>
            <p className="nh-bio">
              I craft clean, fast &amp; user-friendly digital experiences — from pixel-perfect UI designs to fully functional web apps. Based in Pune, Maharashtra.
            </p>
            <div className="nh-btns">
              <a href="#projects" className="nh-btn-primary">View My Work</a>
              <a href="#edu-section" className="nh-btn-ghost">My Journey</a>
              <a href="/resume" className="nh-btn-ghost">Resume</a>
            </div>
            <div className="nh-stats">
              <div className="nh-stat"><strong>2+</strong><span>Years Exp.</span></div>
              <div className="nh-stat-line" />
              <div className="nh-stat"><strong>12+</strong><span>Projects</span></div>
              <div className="nh-stat-line" />
              <div className="nh-stat"><strong>3+</strong><span>Clients</span></div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="nh-right">
            <div className="nh-photo-wrap">
              <div className="nh-ring-outer" />
              <div className="nh-ring-inner" />
              <img
                src={`${process.env.PUBLIC_URL}/images/sidd.png`}
                alt="Siddharth Budgude"
                className="nh-photo"
              />
              <div className="nh-chip nh-chip-top">
                <span>⚡</span><div><b>Fast Delivery</b><small>On-time, every time</small></div>
              </div>
              <div className="nh-chip nh-chip-bot">
                <span>🎨</span><div><b>Clean Design</b><small>Pixel-perfect UI</small></div>
              </div>
            </div>
            <div className="nh-tags">
              {['React','Figma','JavaScript','WordPress','Magento','UI/UX'].map(t => (
                <span key={t} className="nh-tag">{t}</span>
              ))}
            </div>
          </div>

        </div>
      </div>

      <div className="nh-scroll">
        <div className="nh-mouse"><div className="nh-mdot" /></div>
        <span>scroll</span>
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
      {/* Education & Experience */}
      <EduExperienceSection />

      {/* Projects Section */}
      <section id="projects" className="pf-projects container py-5">
        <div className="d-flex mb-4 justify-center align-items-center gap-3">
          <h2 className="fw-bold fs-3 text-nowrap">Featured Projects</h2>
          <span className="w-100 line-decor" />
        </div>
        <div className="pf-projects-grid">
          {projectsData.map(p => (
            <div key={p.id} className="pf-proj-card">
              <div className="pf-proj-thumb">
                <iframe loading="lazy"
                  src={p.preview}
                  title={p.title}
                  scrolling="no"
                  tabIndex="-1"
                  className="pf-proj-iframe"
                />
                <a
                  href={p.preview}
                  target="_blank"
                  rel="noreferrer"
                  className="pf-proj-overlay-link"
                  aria-label={`Open ${p.title}`}
                />
              </div>
              <div className="pf-proj-body">
                <div className="pf-proj-tags">
                  {p.tags.map(t => <span key={t} className="pf-proj-tag">{t}</span>)}
                </div>
                <h3 className="pf-proj-title">{p.title}</h3>
                <p className="pf-proj-desc">{p.desc}</p>
                <div className="pf-proj-links">
                  <a href={p.preview} target="_blank" rel="noreferrer" className="pf-proj-link">🔗 Live Demo</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    

    </div>
  );
}