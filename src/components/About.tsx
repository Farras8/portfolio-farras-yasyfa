import React, { useEffect, useRef, useState } from 'react';

//============== UI COMPONENTS & HOOKS (SELF-CONTAINED) ==============
// To resolve pathing issues, necessary components and hooks are included directly.

// --- Custom Hook for Scroll Animations ---
const useScrollAnimation = (threshold = 0.1) => {
    const ref = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [threshold]);

    return [ref, isVisible] as const;
};

// --- AnimatedSection Component ---
interface AnimatedSectionProps {
    children: React.ReactNode;
    id: string;
    className?: string;
}
const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, id, className = '' }) => {
    const [ref, isVisible] = useScrollAnimation();
    return (
        <section ref={ref} id={id} className={`py-24 group ${className} ${isVisible ? 'is-visible' : ''}`}>
            {children}
        </section>
    );
};

// --- SectionHeader Component ---
const SectionHeader: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
  <div className="text-center mb-16 child-animate" style={{transitionDelay: '100ms'}}>
    <h2 className="text-4xl md:text-5xl font-bold font-orbitron text-gray-100 uppercase tracking-wider">{title}</h2>
    <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">{subtitle}</p>
    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6 rounded"></div>
  </div>
);


//============== ABOUT COMPONENT ==============

const About = () => (
    <AnimatedSection id="about" className="bg-gray-900/70 backdrop-blur-md">
      <div className="container mx-auto px-6">
          <SectionHeader title="About Me" subtitle="Behind the code, there's a mission." />
          <div className="grid md:grid-cols-5 gap-12 items-center">
              <div className="md:col-span-2 child-animate" style={{transitionDelay: '200ms'}}>
                  <div className="p-2 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-lg shadow-xl">
                    <div className="p-1 bg-gray-900 rounded-md">
                      <img src={`/Photo.jpg`} alt="Muhammad Farras" className="rounded-sm w-full object-cover"/>
                    </div>
                  </div>
              </div>
              <div className="md:col-span-3 text-lg text-gray-300 space-y-4 child-animate" style={{transitionDelay: '300ms'}}>
                  <h3 className="text-3xl font-orbitron font-bold text-white">Crafting Code, Building Futures.</h3>
                  <p>Hi, I’m Muhammad Farras Yasyfa, an undergraduate student majoring in Informatics Engineering at Politeknik Negeri Jakarta. My journey in tech is fueled by a deep passion for building — whether it’s crafting intuitive front-end experiences, architecting robust back-end systems, or scaling solutions through cloud infrastructure.</p>
                  <p>I see every project as an opportunity to grow, challenge myself, and refine my skills in both web development and cloud computing. I'm not just interested in writing code; I'm passionate about designing solutions that are clean, scalable, and meaningful to real users.</p>
                  <p>Whether it’s building APIs, designing UI, or deploying to the cloud — I aim to bridge the gap between idea and execution.</p>
              </div>
          </div>
      </div>
    </AnimatedSection>
);

// Wrapper for preview
const AboutPreview = () => (
    <>
      <style>{`.font-orbitron { font-family: 'Orbitron', sans-serif; }.group.is-visible .child-animate {opacity: 1;transform: translateY(0);}.child-animate {opacity: 0;transform: translateY(30px);transition: opacity 0.6s cubic-bezier(0.645, 0.045, 0.355, 1), transform 0.6s cubic-bezier(0.645, 0.045, 0.355, 1);}`}</style>
      <About />
    </>
);
export default AboutPreview;

