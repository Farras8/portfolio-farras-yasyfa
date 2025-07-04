// Education.tsx
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

// --- Timeline Item Component ---
interface TimelineItemProps {
  degree: string;
  institution: string;
  years: string;
  gpa?: string;
  isLast?: boolean;
}
const TimelineItem: React.FC<TimelineItemProps> = ({
  degree,
  institution,
  years,
  gpa,
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
        <h3 className="text-xl font-orbitron font-bold text-white">{degree}</h3>
        <p className="text-blue-400 font-semibold mt-1 sm:mt-0">{years}</p>
      </div>
      <p className="text-lg text-gray-300 font-semibold mt-1">{institution}</p>
      {gpa && (
        <p className="text-purple-400 font-mono text-sm mt-2">GPA: {gpa}</p>
      )}
    </div>
  </div>
);

//============== EDUCATION COMPONENT ==============
const Education = () => {
  const educationHistory = [
    {
      degree: 'Undergraduate Student of Informatics Engineering',
      institution: 'State Polytechnic of Jakarta',
      years: 'Aug 2022 - Present',
      gpa: '3.69',
    },
    {
      degree: 'Associate degree, Informatics Engineering',
      institution: 'CEP – CCIT FTUI',
      years: 'Aug 2022 - Aug 2024',
      gpa: '3.54',
    },
    {
      degree: 'Cloud Computing Cohort',
      institution:
        'Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka',
      years: 'Aug 2024 - Des 2024',
    },
  ];

  return (
    <>
      <style>
        {`.font-orbitron { font-family: 'Orbitron', sans-serif; }
          .is-visible .child-animate {opacity: 1; transform: translateY(0);}
          .child-animate {opacity: 0; transform: translateY(30px); transition: opacity 0.6s cubic-bezier(0.645, 0.045, 0.355, 1), transform 0.6s cubic-bezier(0.645, 0.045, 0.355, 1);}`}
      </style>
      <AnimatedSection id="educations" className="bg-gray-900">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Educations"
            subtitle="My academic and training history."
          />
          <div className="max-w-3xl mx-auto space-y-12">
            {educationHistory.map((edu, i) => (
              <div
                key={i}
                className="child-animate"
                style={{ transitionDelay: `${200 + i * 150}ms` }}
              >
                <TimelineItem
                  degree={edu.degree}
                  institution={edu.institution}
                  years={edu.years}
                  gpa={edu.gpa}
                  isLast={i === educationHistory.length - 1}
                />
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </>
  );
};

export default Education;