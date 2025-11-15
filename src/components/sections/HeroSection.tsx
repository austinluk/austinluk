import React from "react";
import { socialLinks } from "@/data/socialLinks";

const HeroSection = () => {
  return (
    <section id="hero" className="section section-hero">
      <div className="asymmetric-grid">
        <div className="grid-span-8 text-center md:text-left">
          <div className="fade-in-up mt-12 mb-12">
            <h1 className="text-display mb-32 md:mb-48">Hi! I&#39;m Austin!</h1>
          </div>
          <div
            className="fade-in-up mb-32 md:mb-48"
            style={{ animationDelay: "0.2s" }}
          >
            <p className="text-large max-w-l mx-auto md:mx-0">
              3rd year Computer Science Student @ UBC
            </p>
          </div>
          <div
            className="fade-in-up mt-10 md:mt-16"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="flex gap-10 justify-center md:justify-start">
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
        <div className="grid-span-4 flex justify-center md:justify-end">
          <div
            className="slide-in-right relative"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="geometric-shape shape-circle w-64 h-64 morph-border hidden md:block" />
            <div
              className="geometric-shape shape-square w-32 h-32 absolute top-20 right-20 hidden md:block"
              style={{ animationDelay: "2s" }}
            />
            <div
              className="relative z-10 fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <img
                src="/austinface2.jpeg"
                alt="Austin Luk"
                className="w-48 h-48 md:w-64 md:h-64 md:ml-12 rounded-xl object-cover border-2 border-accent/20 shadow-2xl hover:scale-105 hover:shadow-3xl transition-all duration-500 ease-out hover:border-accent/40"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
