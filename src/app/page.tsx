'use client';

import { ThemeProvider, useTheme } from '@/context/ThemeContext';
import { projects } from '@/data/projects';
import { experiences } from '@/data/experiences';

const stack = [
  'TypeScript', 'Python', 'React', 'Next.js', 'Node.js', 
  'PostgreSQL', 'AWS', 'Docker', 'Java', 'C++'
];

function Toggle() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button className="toggle" onClick={toggleTheme} aria-label="Toggle theme">
      {theme === 'light' ? (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        </svg>
      )}
    </button>
  );
}

function Portfolio() {
  return (
    <>
      {/* Ambient Glow */}
      <div className="glow">
        <div className="glow-orb" />
        <div className="glow-orb" />
        <div className="glow-orb" />
      </div>

      <div className="page">
        <Toggle />
        
        {/* Hero */}
        <section className="hero">
          <div className="intro">
            <h1 className="name fade-up fade-up-1">Austin Luk</h1>
            <p className="title fade-up fade-up-2">
              CS @ <a href="https://ubc.ca" target="_blank" rel="noopener noreferrer">UBC</a> · Building things
            </p>
          </div>
          
          <p className="bio fade-up fade-up-3">
            Third year student interested in crafting software that matters. 
            Currently exploring full-stack development and machine learning.
          </p>
          
          <nav className="links fade-up fade-up-4">
            <a href="#work" className="link">Work</a>
            <a href="#projects" className="link">Projects</a>
            <a href="https://github.com/austinluk" target="_blank" rel="noopener noreferrer" className="link">GitHub</a>
            <a href="https://linkedin.com/in/austinluk" target="_blank" rel="noopener noreferrer" className="link">LinkedIn</a>
            <a href="mailto:austin.luk@student.ubc.ca" className="link">Email</a>
          </nav>
        </section>

        <div className="content">
          {/* Projects */}
          <section id="projects" className="section">
            <h2 className="section-label">Selected Projects</h2>
            <div className="projects">
              {projects.map((project) => (
                <div key={project.id} className="project">
                  <div>
                    <h3 className="project-name">{project.title}</h3>
                    <p className="project-desc">{project.subtitle}</p>
                    <div className="project-links">
                      {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                          Visit ↗
                        </a>
                      )}
                      {project.demoUrl && (
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                          Demo ↗
                        </a>
                      )}
                      {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                          Source ↗
                        </a>
                      )}
                    </div>
                  </div>
                  <span className="project-year">{project.year}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Experience */}
          <section id="work" className="section">
            <h2 className="section-label">Experience</h2>
            <div className="experiences">
              {experiences.map((exp, i) => (
                <div key={i} className="exp">
                  <div className="exp-header">
                    <h3 className="exp-role">{exp.role}</h3>
                    <span className="exp-period">{exp.period}</span>
                  </div>
                  <p className="exp-company">{exp.company}</p>
                  <p className="exp-desc">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Stack */}
          <section className="section">
            <h2 className="section-label">Technologies</h2>
            <div className="stack">
              {stack.map((tech) => (
                <span key={tech} className="stack-item">{tech}</span>
              ))}
            </div>
          </section>

          {/* Footer */}
          <footer className="footer">
            © {new Date().getFullYear()} Austin Luk
          </footer>
        </div>
      </div>
    </>
  );
}

export default function Home() {
  return (
    <ThemeProvider>
      <Portfolio />
    </ThemeProvider>
  );
}
