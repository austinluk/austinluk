import React from "react";
import { socialLinks } from "@/data/socialLinks";

const HeroSection = () => {
  return (
    <section id="hero" className="section section-hero">
      <div className="asymmetric-grid">
        <div className="grid-span-8">
          <div className="fade-in-up">
            <h1 className="text-display mb-32">
              Austin
              <br />
              Luk
            </h1>
          </div>
          <div className="fade-in-up mb-32" style={{ animationDelay: "0.2s" }}>
            <p className="text-large max-w-xl">
              3rd Computer Science Student @ UBC
            </p>
          </div>
          <div className="fade-in-up mt-10" style={{ animationDelay: "0.2s" }}>
            <div className="flex gap-10 mt-10">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target={link.name === "Resume" ? "_blank" : "_self"}
                  rel={
                    link.name === "Resume" ? "noopener noreferrer" : undefined
                  }
                  className="social-link p-3 mt-10 rounded-full hover:border-accent/40 hover:bg-accent/5 transition-all duration-300 group"
                  aria-label={link.ariaLabel}
                >
                  <div className="w-6 h-6 group-hover:scale-110 transition-transform duration-300">
                    {link.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="grid-span-4">
          <div className="slide-in-right" style={{ animationDelay: "0.2s" }}>
            <div className="geometric-shape shape-circle w-64 h-64 morph-border" />
            <div
              className="geometric-shape shape-square w-32 h-32 absolute top-20 right-20"
              style={{ animationDelay: "2s" }}
            />
          </div>
          <div
            className="relative z-10 fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <img
              src="/austinface2.jpeg"
              alt="Austin Luk"
              className="w-64 h-64 ml-12 rounded-xl object-cover border-2 border-accent/20 shadow-2xl hover:scale-105 hover:shadow-3xl transition-all duration-500 ease-out hover:border-accent/40"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
