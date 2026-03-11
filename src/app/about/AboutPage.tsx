"use client";

import { ThemeProvider, useTheme } from "@/context/ThemeContext";

const stack = [
  "TypeScript",
  "Python",
  "React",
  "Next.js",
  "Node.js",
  "PostgreSQL",
  "AWS",
  "Docker",
  "Java",
  "C++",
];

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

function AboutContent() {
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

          <section>
            <h1
              className="name fade-up fade-up-1"
              style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}
            >
              About Austin Luk
            </h1>

            <div className="fade-up fade-up-2" style={{ marginTop: "2rem" }}>
              <p className="bio" style={{ marginBottom: "1.5rem" }}>
                I&apos;m Austin Luk, a third-year Computer Science student at
                the University of British Columbia in Vancouver, BC. I&apos;m
                passionate about building software that solves real problems —
                from AI-powered teaching assistants to automation bots that
                connect people.
              </p>
              <p className="bio" style={{ marginBottom: "1.5rem" }}>
                My interests span full-stack development, machine learning, and
                developer tools. I enjoy taking an idea from zero to production
                and learning whatever&apos;s needed along the way.
              </p>
              <p className="bio" style={{ marginBottom: "1.5rem" }}>
                Outside of coding, you&apos;ll find me playing basketball,
                exploring Vancouver&apos;s trails, or tinkering with side
                projects.
              </p>
            </div>
          </section>

          <section className="section fade-up fade-up-3">
            <h2 className="section-label">Technologies</h2>
            <div className="stack">
              {stack.map((tech) => (
                <span key={tech} className="stack-item">
                  {tech}
                </span>
              ))}
            </div>
          </section>

          <section className="section fade-up fade-up-4">
            <h2 className="section-label">Links</h2>
            <div className="links" style={{ gap: "2rem" }}>
              <a
                href="https://github.com/austinluk"
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                GitHub ↗
              </a>
              <a
                href="https://linkedin.com/in/austinluk"
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                LinkedIn ↗
              </a>
              <a href="mailto:austin.luk@student.ubc.ca" className="link">
                Email ↗
              </a>
            </div>
          </section>

          <footer className="footer">© 2026 Austin Luk</footer>
        </div>
      </div>
    </>
  );
}

export default function AboutPage() {
  return (
    <ThemeProvider>
      <AboutContent />
    </ThemeProvider>
  );
}
