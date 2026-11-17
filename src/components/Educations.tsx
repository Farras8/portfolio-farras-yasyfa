import { SectionReveal as AnimatedSection } from "./Controls";
import { SectionHeading as SectionHeader } from "./SystemUI";
// Education.tsx
import React from "react";

//============== UI COMPONENTS & HOOKS (SELF-CONTAINED) ==============
// --- Custom Hook for Scroll Animations ---

// --- AnimatedSection Component ---

// --- SectionHeader Component ---

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
      degree: "Undergraduate Student of Informatics Engineering",
      institution: "State Polytechnic of Jakarta",
      years: "Aug 2022 - Present",
      gpa: "3.69",
    },
    {
      degree: "Associate degree, Informatics Engineering",
      institution: "CEP – CCIT FTUI",
      years: "Aug 2022 - Aug 2024",
      gpa: "3.54",
    },
    {
      degree: "Cloud Computing Cohort",
      institution:
        "Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka",
      years: "Aug 2024 - Dec 2024",
    },
    {
      degree: "Front-End & Back-End Developer Cohort",
      institution: "Coding Camp powered by DBS Foundation",
      years: "Feb 2025 - Jul 2025",
    },
  ];

  return (
    <>
      <AnimatedSection id="educations" className="bg-gray-900">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Education"
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
