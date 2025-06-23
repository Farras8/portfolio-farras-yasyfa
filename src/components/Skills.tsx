import React, { useEffect, useRef, useState } from 'react';

//============== CUSTOM HOOK (Self-contained) ==============
// To resolve the import error, the hook's logic is now included directly.
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
        return () => { if (currentRef) observer.unobserve(currentRef); };
    }, [threshold]);

    return [ref, isVisible] as const;
};

//============== UI COMPONENTS (Self-contained) ==============
// To resolve import errors, these components are now included directly.
const AnimatedSection: React.FC<{ children: React.ReactNode; id: string; className?: string }> = ({ children, id, className = '' }) => {
    const [ref, isVisible] = useScrollAnimation();
    return <section ref={ref} id={id} className={`py-24 group ${className} ${isVisible ? 'is-visible' : ''}`}>{children}</section>;
};

const SectionHeader: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
  <div className="text-center mb-16 child-animate" style={{transitionDelay: '100ms'}}>
    <h2 className="text-4xl md:text-5xl font-bold font-orbitron text-gray-100 uppercase tracking-wider">{title}</h2>
    <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">{subtitle}</p>
    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6 rounded"></div>
  </div>
);


//============== SKILLS COMPONENT ==============
const Skills = () => {
    const skills = {
        "Frontend": ["React", "JavaScript (ES6+)", "TypeScript", "HTML5 & CSS3", "Tailwind CSS", "Kotlin"],
        "Backend": ["Node.js", "Express.js", "Python"],
        "Database": ["MYSQL", "Firebase"],
        "System & Tools": ["Git & GitHub", "Docker", "Figma", "Microsoft Office"]
    };

    return (
        <AnimatedSection id="skills" className="bg-gray-900/70 backdrop-blur-md">
            <div className="container mx-auto px-6">
                <SectionHeader title="Skills" subtitle="The skills and technologies I've mastered." />
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {Object.entries(skills).map(([category, list], catIndex) => (
                        <div key={category} className="child-animate" style={{ transitionDelay: `${200 + catIndex * 150}ms`}}>
                            <h3 className="text-xl font-orbitron font-semibold text-white mb-4 border-b-2 border-purple-500 pb-2">{category}</h3>
                            <ul className="space-y-3">
                                {list.map(skill => (<li key={skill} className="flex items-center text-gray-300"><svg className="w-4 h-4 mr-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>{skill}</li>))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </AnimatedSection>
    );
};

// Wrapper for preview
const SkillsPreview = () => (
    <>
      <style>{`.font-orbitron { font-family: 'Orbitron', sans-serif; }.group.is-visible .child-animate {opacity: 1;transform: translateY(0);}.child-animate {opacity: 0;transform: translateY(30px);transition: opacity 0.6s cubic-bezier(0.645, 0.045, 0.355, 1), transform 0.6s cubic-bezier(0.645, 0.045, 0.355, 1);}`}</style>
      <Skills />
    </>
);
export default SkillsPreview;
