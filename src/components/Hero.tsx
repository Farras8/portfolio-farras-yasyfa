import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen pt-36 px-6 scroll-mt-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950/80 to-black/80 z-0"></div>
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-6 animate-pulse">
          Welcome to My Portfolio
        </h1>
        <p className="opacity-0 translate-y-10 transition-all duration-1000 ease-in-out animate-scroll text-xl md:text-2xl text-gray-300 mb-8">
          Showcasing my journey as a developer with innovative projects and skills.
        </p>
      </div>
    </section>
  );
};

export default Hero;