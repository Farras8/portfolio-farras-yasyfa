import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Eye, Code } from 'lucide-react';
import { projects } from '../Data/ProjectData';
import Modal from './Modal';

//============== CUSTOM HOOK (Self-contained) ==============
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

//============== UI COMPONENTS (Self-contained) ==============
const AnimatedSection: React.FC<{
  children: React.ReactNode;
  id: string;
  className?: string;
}> = ({ children, id, className = '' }) => {
  const [ref, isVisible] = useScrollAnimation();
  return (
    <section
      ref={ref}
      id={id}
      className={`py-24 ${className} ${isVisible ? 'is-visible' : ''}`}
    >
      {children}
    </section>
  );
};

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

const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => (
  <div
    className={`bg-gray-800/50 border border-gray-700 rounded-xl shadow-lg hover:shadow-2xl hover:shadow-purple-500/10 hover:border-purple-500 transition-all duration-300 ease-in-out group backdrop-blur-sm ${className}`}
  >
    {children}
  </div>
);

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  href?: string;
  className?: string;
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary';
  icon?: React.ReactNode;
}
const Button: React.FC<ButtonProps> = ({
  children,
  to,
  href,
  className,
  onClick,
  type = 'button',
  variant = 'primary',
  icon,
}) => {
  const primaryClasses =
    'bg-blue-600 text-white hover:bg-blue-500 shadow-blue-500/20';
  const secondaryClasses =
    'bg-purple-600 text-white hover:bg-purple-500 shadow-purple-500/20';
  const baseClasses = `inline-flex items-center justify-center gap-2 px-7 py-3 text-base font-semibold rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 ${
    variant === 'primary' ? 'focus:ring-blue-400' : 'focus:ring-purple-400'
  }`;
  const content = (
    <>
      {children}
      {icon && <span className="ml-2">{icon}</span>}
    </>
  );
  if (to)
    return (
      <Link
        to={to}
        onClick={onClick}
        className={`${baseClasses} ${variant === 'primary' ? primaryClasses : secondaryClasses} ${className}`}
      >
        {content}
      </Link>
    );
  if (href)
    return (
      <a
        href={href}
        onClick={onClick}
        className={`${baseClasses} ${variant === 'primary' ? primaryClasses : secondaryClasses} ${className}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </a>
    );
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${baseClasses} ${variant === 'primary' ? primaryClasses : secondaryClasses} ${className}`}
    >
      {content}
    </button>
  );
};

//============== PROJECTS COMPONENT ==============
const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const limit = 6;
  const projectsToShow = showAll ? projects : projects.slice(0, limit);

  const handleViewLess = () => {
    setShowAll(false);
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleLiveUrlClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    liveUrl: string
  ) => {
    if (liveUrl === '' || liveUrl === '#') {
      e.preventDefault();
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <style>
        {`.font-orbitron { font-family: 'Orbitron', sans-serif; }.is-visible .child-animate {opacity: 1;transform: translateY(0);}.child-animate {opacity: 0;transform: translateY(30px);transition: opacity 0.6s cubic-bezier(0.645, 0.045, 0.355, 1), transform 0.6s cubic-bezier(0.645, 0.045, 0.355, 1);}`}
      </style>
      <AnimatedSection id="projects" className="bg-gray-900">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Projects"
            subtitle="A showcase of successfully projects."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsToShow.map((p, i) => (
              <div
                key={p.id}
                className="child-animate"
                style={{ transitionDelay: `${200 + i * 100}ms` }}
              >
                <Card className="overflow-hidden h-full flex flex-col border-gray-800">
                  <div className="relative overflow-hidden h-56">
                    <img
                      src={p.images[0] || 'https://placehold.co/600x400?text=Placeholder'}
                      alt={p.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a
                        href={p.liveUrl}
                        onClick={(e) => handleLiveUrlClick(e, p.liveUrl)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/80 rounded-full text-gray-800 hover:bg-white"
                      >
                        <Eye size={20} />
                      </a>
                      <a
                        href={p.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/80 rounded-full text-gray-800 hover:bg-white"
                      >
                        <Code size={20} />
                      </a>
                    </div>
                  </div>
                  <div className="p-6 flex-grow flex flex-col bg-gray-800/80">
                    <h3 className="text-xl font-orbitron font-bold text-white mb-2">
                      {p.title}
                    </h3>
                    <p className="text-gray-400 mb-4 flex-grow">{p.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {p.technologies?.map((tech) => (
                        <span
                          key={tech}
                          className="bg-blue-900/50 border border-blue-700 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <Button
                      to={`/projects/${p.id}`}
                      variant="primary"
                      className="mt-auto"
                    >
                      View Details
                    </Button>
                  </div>
                </Card>
              </div>
            ))}
          </div>
          {projects.length > limit && (
            <div
              className="text-center mt-12 child-animate"
              style={{ transitionDelay: `${200 + limit * 100}trems` }}
            >
              {showAll ? (
                <Button onClick={handleViewLess} variant="secondary">
                  View Less
                </Button>
              ) : (
                <Button
                  onClick={() => setShowAll(true)}
                  variant="secondary"
                >
                  View More Projects
                </Button>
              )}
            </div>
          )}
        </div>
      </AnimatedSection>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="No Deployment Available"
        message="Mohon maaf, tidak ada link deployment untuk proyek ini."
      />
    </>
  );
};

export default Projects;