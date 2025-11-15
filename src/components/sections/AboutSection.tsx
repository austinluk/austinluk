import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="section section-about">
      <div className="asymmetric-grid">
        <div className="grid-span-2">
          <div className="scale-in">
            <div className="geometric-shape shape-triangle w-16 h-16 border-l-16 border-r-16 border-b-16 border-l-transparent border-r-transparent border-b-current" />
          </div>
        </div>
        <div className="grid-span-6">
          <div className="fade-in-up">
            <h2 className="text-hero mb-12">About Me</h2>
            <div className="space-y-6">
              <p className="text-body">
                I&#39;m a software engineer from Vancouver, BC.
              </p>
              <p className="text-body">
                I&#39;m a third year computer science student at the University of British Columbia studying Computer Science.
            </p>


            
            </div>
          </div>
        </div>
        <div className="grid-span-4">
          <div className="slide-in-right">
            <div className="text-small space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Core Skills</h3>
                <p>
                  Python, JavaScript/TypeScript, Java, C++, React, Next.js,
                  Node.js
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Technologies</h3>
                <p>PostgreSQL, MongoDB, Firebase, Docker, AWS, Vercel, Git</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Focus Areas</h3>
                <p>Software, AI/ML, Human-Computer Interaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
