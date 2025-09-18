// Experience.tsx
import React, { useState, useEffect, useRef } from 'react';

//============== UI COMPONENTS & HOOKS (SELF-CONTAINED) ==============
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
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
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
const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  id,
  className = '',
}) => {
  const [ref, isVisible] = useScrollAnimation();
  return (
    <section
      ref={ref}
      id={id}
      className={`py-24 group ${className} ${isVisible ? 'is-visible' : ''}`}
    >
      {children}
    </section>
  );
};

// --- SectionHeader Component ---
const SectionHeader: React.FC<{ title: string; subtitle: string }> = ({
  title,
  subtitle,
}) => (
  <div
    className="text-center mb-16 child-animate"
    style={{ transitionDelay: '100ms' }}
  >
    <h2 className="text-4xl md:text-5xl font-bold font-orbitron text-gray-100 uppercase tracking-wider">
      {title}
    </h2>
    <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">{subtitle}</p>
    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6 rounded"></div>
  </div>
);

// --- Experience Item Component ---
interface ExperienceItemProps {
  position: string;
  company: string;
  period: string;
  responsibilities: string[];
  isLast?: boolean;
}
const ExperienceItem: React.FC<ExperienceItemProps> = ({
  position,
  company,
  period,
  responsibilities,
  isLast = false,
}) => (
  <div className="relative pl-8 sm:pl-12">
    {!isLast && (
      <div className="absolute left-3.5 top-5 h-full w-px bg-gray-700"></div>
    )}
    <div className="absolute left-0 top-3 h-7 w-7 bg-gray-800 border-2 border-purple-500 rounded-full flex items-center justify-center">
      <div className="h-3 w-3 bg-blue-500 rounded-full"></div>
    </div>
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h3 className="text-xl font-orbitron font-bold text-white">{position}</h3>
        <p className="text-blue-400 font-semibold mt-1 sm:mt-0">{period}</p>
      </div>
      <p className="text-lg text-gray-300 font-semibold mt-1">{company}</p>
      <ul className="mt-3 space-y-2">
        {responsibilities.map((responsibility, index) => (
          <li key={index} className="text-gray-400 text-sm leading-relaxed flex items-start">
            <span className="text-purple-400 mr-2 mt-1">•</span>
            {responsibility}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

//============== MAIN COMPONENT ==============
const Experience = () => {
  return (
    <AnimatedSection id="experience" className="bg-gray-900">
      <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
        <SectionHeader
          title="Experience"
          subtitle="Professional journey and internship experiences that shaped my development skills"
        />
        <div
          className="max-w-4xl mx-auto child-animate"
          style={{ transitionDelay: '200ms' }}
        >
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 backdrop-blur-sm hover:shadow-2xl hover:shadow-purple-500/10 hover:border-purple-500 transition-all duration-300">
            <ExperienceItem
              position="Fullstack Web Developer"
              company="Dinas Kesehatan Depok - Internship"
              period="Aug 2025 - Present"
              responsibilities={[
                "Maintained and updated D'Simfoniku, a Laravel-based web application for environmental health inspections.",
                "Implemented new features and improvements requested by the Health Department.",
                "Performed bug fixes and system enhancements to ensure platform reliability.",
                "Migrated and redeployed the application to Domainesia hosting."
              ]}
              isLast={true}
            />
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Experience;