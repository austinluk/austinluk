import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
  description: "Resume for Austin Luk.",
};

export default function ResumePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#000000",
        color: "#ffffff",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <header
        style={{
          padding: "0.9rem 1rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid rgba(255,255,255,0.15)",
        }}
      >
        <a href="/" style={{ color: "#ffffff", textDecoration: "none" }}>
          ← Back
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#ffffff", textDecoration: "none" }}
        >
          Open PDF
        </a>
      </header>

      <iframe
        title="Austin Luk Resume"
        src="/resume.pdf"
        style={{
          width: "100%",
          height: "calc(100vh - 58px)",
          border: "none",
          backgroundColor: "#000000",
        }}
      />
    </main>
  );
}