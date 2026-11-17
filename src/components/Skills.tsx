import { SectionReveal as AnimatedSection } from "./Controls";
import { SectionHeading as SectionHeader } from "./SystemUI";

const Skills = () => {
  const skills = {
    Frontend: [
      "NextJs",
      "React",
      "JavaScript (ES6+)",
      "TypeScript",
      "HTML5 & CSS3",
      "Tailwind CSS",
    ],
    Backend: ["Golang", "Node.js", "Express.js", "Python", "PHP", "Laravel"],
    Database: ["MySQL", "Firebase", "PostgreSQL"],
    "Tools & Mobile": [
      "Git & GitHub",
      "Docker",
      "Figma",
      "Microsoft Office",
      "Kotlin (Mobile)",
    ],
  };
  return (
    <AnimatedSection id="skills" className="bg-gray-900/70 backdrop-blur-md">
      <div className="container mx-auto px-6">
        <SectionHeader
          title="Skills"
          subtitle="The technologies I use to bring ideas to life."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, list], catIndex) => (
            <div
              key={category}
              className="child-animate"
              style={{ transitionDelay: `${200 + catIndex * 150}ms` }}
            >
              <h3 className="text-xl font-orbitron font-semibold text-white mb-4 border-b-2 border-purple-500 pb-2">
                {category}
              </h3>
              <ul className="space-y-3">
                {list.map((skill) => (
                  <li key={skill} className="flex items-center text-gray-300">
                    <svg
                      className="w-4 h-4 mr-3 text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

const SkillsPreview = () => (
  <>
    <Skills />
  </>
);
export default SkillsPreview;
