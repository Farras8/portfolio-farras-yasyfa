import { SectionReveal as AnimatedSection } from "./Controls";
import { SectionHeading as SectionHeader } from "./SystemUI";
// Experience.tsx
import React from "react";

//============== UI COMPONENTS & HOOKS (SELF-CONTAINED) ==============
// --- Custom Hook for Scroll Animations ---

// --- AnimatedSection Component ---

// --- SectionHeader Component ---

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
        <h3 className="text-xl font-orbitron font-bold text-white">
          {position}
        </h3>
        <p className="text-blue-400 font-semibold mt-1 sm:mt-0">{period}</p>
      </div>
      <p className="text-lg text-gray-300 font-semibold mt-1">{company}</p>
      <ul className="mt-3 space-y-2">
        {responsibilities.map((responsibility, index) => (
          <li
            key={index}
            className="text-gray-400 text-sm leading-relaxed flex items-start"
          >
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
          style={{ transitionDelay: "200ms" }}
        >
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 backdrop-blur-sm hover:shadow-2xl hover:shadow-purple-500/10 hover:border-purple-500 transition-all duration-300 space-y-10">
            <ExperienceItem
              position="Web Developer"
              company="Pertamina Retail - Internship"
              period="Sep 2026 - Present"
              responsibilities={[
                "Developed and maintained web applications, primarily focusing on backend development with Express.js and ASP.NET.",
                "Built backend APIs for the Nitrogen Operations Dashboard and provided selected frontend fixes and integration support.",
                "Worked with PostgreSQL to support operational analytics and transaction reporting.",
                "Deployed web applications to Google Cloud Platform using Cloud Run.",
              ]}
            />
            <ExperienceItem
              position="Fullstack Web Developer"
              company="Durich Agro Persada - Internship"
              period="Apr 2026 - Present"
              responsibilities={[
                "Developed and maintained internal web systems using Go (Gin framework) and Laravel as primary backend technologies.",
                "Built and integrated RESTful APIs for various internal business processes and workflow automation.",
                "Contributed to frontend development using Next.js for internal web interfaces.",
                "Developed full-stack fund management workflows in Palm Fund Manager using Laravel, Vue.js, and Inertia.js.",
                "Developed the DSmart and Sensus API modules in collaboration with an external vendor, with targeted frontend support.",
                "Worked with PostgreSQL and MySQL databases across multiple projects.",
              ]}
            />
            <ExperienceItem
              position="Fullstack Web Developer"
              company="Dinas Kesehatan Depok - Internship"
              period="Aug 2025 - Present"
              responsibilities={[
                "Maintained and updated D'Simfoniku, a Laravel-based web application for environmental health inspections.",
                "Implemented new features and improvements requested by the Health Department.",
                "Performed bug fixes and system enhancements to ensure platform reliability.",
                "Migrated and redeployed the application to Domainesia hosting.",
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
