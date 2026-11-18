import { SectionReveal as AnimatedSection } from "./Controls";
import { SectionHeading as SectionHeader } from "./SystemUI";

const About = () => (
  <AnimatedSection id="about" className="bg-gray-900/70 backdrop-blur-md">
    <div className="container mx-auto px-6">
      <SectionHeader
        title="About Me"
        subtitle="Behind the code, there's a mission."
      />
      <div className="grid md:grid-cols-5 gap-12 items-center">
        <div
          className="md:col-span-2 child-animate"
          style={{ transitionDelay: "200ms" }}
        >
          <div className="p-2 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-lg shadow-xl">
            <div className="p-1 bg-gray-900 rounded-md">
              <img
                loading="lazy"
                src={`/optimized/Photo.webp`}
                alt="Muhammad Farras"
                className="rounded-sm w-full object-cover"
              />
            </div>
          </div>
        </div>
        <div
          className="md:col-span-3 text-lg text-gray-300 space-y-4 child-animate"
          style={{ transitionDelay: "300ms" }}
        >
          <h3 className="text-3xl font-orbitron font-bold text-white">
            Crafting Code, Building Futures.
          </h3>
          <p>
            I'm Muhammad Farras Yasyfa, an Informatics Engineering graduate from
            Politeknik Negeri Jakarta. I enjoy connecting intuitive frontend
            experiences with reliable backend systems and cloud infrastructure.
          </p>
          <p>
            Every project is an opportunity to learn, refine my craft, and turn
            an idea into something useful. My focus is building clean, scalable
            solutions that make sense for the people using them.
          </p>
        </div>
      </div>
    </div>
  </AnimatedSection>
);

const AboutPreview = () => (
  <>
    <About />
  </>
);
export default AboutPreview;
