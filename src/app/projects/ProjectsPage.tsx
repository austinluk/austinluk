"use client";

import { ThemeProvider, useTheme } from "@/context/ThemeContext";
import { projects } from "@/data/projects";

function Toggle() {
  const { theme, toggleTheme, mounted } = useTheme();
  if (!mounted) return <button className="toggle" aria-label="Toggle theme" />;
  return (
    <button className="toggle" onClick={toggleTheme} aria-label="Toggle theme">
      {theme === "light" ? (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      ) : (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        </svg>
      )}
    </button>
  );
}

function ProjectsContent() {
  return (
    <>
      <div className="glow">
        <div className="glow-orb" />
        <div className="glow-orb" />
        <div className="glow-orb" />
      </div>

      <div className="page">
        <Toggle />

        <div className="content" style={{ paddingTop: "6rem" }}>
          <nav style={{ marginBottom: "3rem" }}>
            <div className="links">
              <a href="/" className="link">
                ← Home
              </a>
            </div>
          </nav>

          <h1
            className="name fade-up fade-up-1"
            style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}
          >
            Projects
          </h1>

          <p className="bio fade-up fade-up-2" style={{ marginTop: "1rem" }}>
            A selection of things Austin Luk has built — from AI teaching
            assistants to WhatsApp automation bots.
          </p>

          <section className="section fade-up fade-up-3">
            <div className="projects">
              {projects.map((project) => (
                <div key={project.id} className="project">
                  <div>
                    <h2 className="project-name">{project.title}</h2>
                    <p className="project-desc">{project.subtitle}</p>
                    <p
                      className="bio"
                      style={{ fontSize: "0.875rem", margin: "0.5rem 0" }}
                    >
                      {project.description}
                    </p>
                    <div className="project-links">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                        >
                          Visit ↗
                        </a>
                      )}
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                        >
                          Demo ↗
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                        >
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

          <footer className="footer">© 2026 Austin Luk</footer>
        </div>
      </div>
    </>
  );
}

export default function ProjectsPage() {
  return (
    <ThemeProvider>
      <ProjectsContent />
    </ThemeProvider>
  );
}
