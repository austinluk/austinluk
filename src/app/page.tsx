'use client';

import { ThemeProvider, useTheme } from '@/context/ThemeContext';
import { projects } from '@/data/projects';
import { experiences } from '@/data/experiences';

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button 
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      ) : (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
      )}
    </button>
  );
}

function PortfolioContent() {
  return (
    <>
      {/* Ambient Yellow Glow Background */}
      <div className="ambient-glow" />

      <div className="main-container">
        {/* Navigation */}
        <nav className="top-nav fade-in">
          <a href="#" className="nav-link active">Home</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#experience" className="nav-link">Experience</a>
          <ThemeToggle />
        </nav>

        {/* Hero Section */}
        <section className="hero-section">
          <div className="fade-in-delay-1">
            <h1 className="hero-name">Austin Luk</h1>
            <p className="hero-title">Software Engineer</p>
          </div>
          
          <div className="fade-in-delay-2">
            <p className="hero-bio">
              3rd year Computer Science student at <a href="https://ubc.ca" target="_blank" rel="noopener noreferrer">@UBC</a>. 
              Interested in full-stack development, AI/ML, and building products that make a difference.
            </p>
            <p className="hero-bio">
              When I&apos;m not coding, you can find me exploring Vancouver, playing basketball, or working on side projects.
            </p>
          </div>

          <div className="social-row fade-in-delay-3">
            <a href="https://github.com/austinluk" target="_blank" rel="noopener noreferrer" className="social-link">GitHub</a>
            <a href="https://linkedin.com/in/austinluk" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
            <a href="mailto:austin.luk@student.ubc.ca" className="social-link">Email</a>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="tech-section fade-in-delay-3">
          <p className="tech-label">Technologies I&apos;ve used:</p>
          <p className="tech-list">
            Python, JavaScript/TypeScript, React, Next.js, Node.js, Java, C++, PostgreSQL, MongoDB, Firebase, AWS, Docker, Git
          </p>
        </section>

        {/* Projects Section */}
        <section id="projects" className="projects-section">
          <div className="section-header">
            <h2 className="section-title">Projects</h2>
          </div>
          
          <div className="projects-grid">
            {projects.slice(0, 4).map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  {project.title === "ThenStep" && (
                    <img src="/Thenstep.png" alt={project.title} />
                  )}
                  {project.title === "Freddy the Freelancer" && (
                    <img src="/heyfreddy.png" alt={project.title} />
                  )}
                  {project.title === "Portfolio Website" && (
                    <img src="/Portfolio.png" alt={project.title} />
                  )}
                  {!["ThenStep", "Freddy the Freelancer", "Portfolio Website"].includes(project.title) && (
                    <span className="project-placeholder">📁</span>
                  )}
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-links">
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">Link</a>
                    )}
                    {project.demoUrl && (
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="project-link">Demo</a>
                    )}
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">GitHub</a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {projects.length > 4 && (
            <a href="#" className="see-more-link">See more</a>
          )}
        </section>

        {/* Experience Section */}
        <section id="experience" className="experience-section">
          <div className="section-header">
            <h2 className="section-title">Experience</h2>
          </div>
          
          <div className="experience-list">
            {experiences.map((exp, index) => (
              <div key={index} className="experience-item">
                <div className="experience-header">
                  <h3 className="experience-role">{exp.role}</h3>
                  <span className="experience-period">{exp.period}</span>
                </div>
                <p className="experience-company">{exp.company}</p>
                <p className="experience-description">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="site-footer">
          <p className="footer-text">&copy; {new Date().getFullYear()} Austin Luk</p>
        </footer>
      </div>
    </>
  );
}

export default function Home() {
  return (
    <ThemeProvider>
      <PortfolioContent />
    </ThemeProvider>
  );
}
