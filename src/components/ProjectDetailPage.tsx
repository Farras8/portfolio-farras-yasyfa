import React, { useEffect, useRef, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Eye, Code, ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
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
      className={`py-12 sm:py-16 lg:py-24 ${className} ${isVisible ? 'is-visible' : ''}`}
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
    className="text-center mb-8 sm:mb-12 lg:mb-16 child-animate"
    style={{ transitionDelay: '100ms' }}
  >
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-orbitron text-gray-100 uppercase tracking-wider">
      {title}
    </h2>
    <p className="text-base sm:text-lg text-gray-400 mt-3 sm:mt-4 max-w-2xl mx-auto">
      {subtitle}
    </p>
    <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 sm:mt-6 rounded"></div>
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
  const baseClasses = `inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-semibold rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 ${
    variant === 'primary' ? 'focus:ring-blue-400' : 'focus:ring-purple-400'
  }`;
  const content = (
    <>
      {children}
      {icon && <span className="ml-1 sm:ml-2">{icon}</span>}
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

//============== IMAGE CAROUSEL COMPONENT ==============
const ImageCarousel: React.FC<{ images: string[]; title: string }> = ({
  images,
  title,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative aspect-[4/3] sm:aspect-video min-h-[200px] sm:min-h-[250px] lg:min-h-[300px]">
      <img
        src={images[currentIndex]}
        alt={`${title} screenshot ${currentIndex + 1}`}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
      {images.length > 1 && (
        <>
          <button
            onClick={prevImage}
            className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 p-1 sm:p-2 bg-white/80 rounded-full text-gray-800 hover:bg-white transition-colors"
          >
            <ChevronLeft size={16} className="sm:w-5 sm:h-5" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 p-1 sm:p-2 bg-white/80 rounded-full text-gray-800 hover:bg-white transition-colors"
          >
            <ChevronRight size={16} className="sm:w-5 sm:h-5" />
          </button>
          <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1 sm:space-x-2">
            {images.map((_, i) => (
              <div
                key={i}
                className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-colors ${
                  i === currentIndex ? 'bg-blue-500' : 'bg-gray-500'
                }`}
              ></div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

//============== PROJECT DETAIL COMPONENT ==============
const ProjectDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLiveUrlClick = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>
  ) => {
    if (project && (project.liveUrl === '' || project.liveUrl === '#')) {
      e.preventDefault();
      setIsModalOpen(true);
    }
  };

  if (!project) {
    return (
      <AnimatedSection id="not-found" className="bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <SectionHeader
            title="Project Not Found"
            subtitle="The dungeon you seek does not exist."
          />
          <div className="text-center">
            <Button to="/#projects" variant="primary">
              Return to Projects
            </Button>
          </div>
        </div>
      </AnimatedSection>
    );
  }

  return (
    <>
      <AnimatedSection id="project-detail" className="bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="mb-6 sm:mb-8 pt-10">
            <Button 
              to="/#projects"
              variant="secondary"
              icon={<ArrowLeft size={16} className="sm:w-5 sm:h-5" />}
            >
              Back to Projects
            </Button>
          </div>
          <SectionHeader title={project.title} subtitle={project.subtitle} />
          <Card className="overflow-hidden mb-6 sm:mb-8">
            <div className="flex flex-col">
              <div className="relative">
                <ImageCarousel images={project.images} title={project.title} />
                <div className="absolute top-2 sm:top-4 right-2 sm:right-4 flex space-x-1 sm:space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.liveUrl}
                    onClick={handleLiveUrlClick}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1 sm:p-2 bg-white/80 rounded-full text-gray-800 hover:bg-white"
                  >
                    <Eye size={16} className="sm:w-5 sm:h-5" />
                  </a>
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1 sm:p-2 bg-white/80 rounded-full text-gray-800 hover:bg-white"
                  >
                    <Code size={16} className="sm:w-5 sm:h-5" />
                  </a>
                </div>
              </div>
              <div className="p-4 sm:p-6 md:p-8 bg-gray-800/80">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-orbitron font-bold text-white mb-3 sm:mb-4">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6">
                  {project.longDescription}
                </p>
                <div className="flex flex-wrap gap-1 sm:gap-2 mb-4 sm:mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-900/50 border border-blue-700 text-blue-300 text-xs sm:text-sm font-semibold px-2 sm:px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0">
                  <Button
                    href={project.liveUrl}
                    variant="primary"
                    icon={<Eye size={16} className="sm:w-5 sm:h-5" />}
                    onClick={handleLiveUrlClick}
                  >
                    View Live
                  </Button>
                  <Button
                    href={project.codeUrl}
                    variant="secondary"
                    icon={<Code size={16} className="sm:w-5 sm:h-5" />}
                  >
                    View Code
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          {/* Features, My Job Desk, and Project Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <Card className="p-4 sm:p-6 md:p-8">
              <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">
                Key Features
              </h4>
              <ul className="list-disc list-inside text-gray-400 text-sm sm:text-base">
                {project.features.map((feature, i) => (
                  <li key={i} className="mb-2">
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
            <Card className="p-4 sm:p-6 md:p-8">
              <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">
                My Job Desk
              </h4>
              <ul className="list-disc list-inside text-gray-400 text-sm sm:text-base">
                {project.myJobDesk.map((myJobDesk, i) => (
                  <li key={i} className="mb-2">
                    {myJobDesk}
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          <Card className="p-4 sm:p-6 md:p-8 mt-6 sm:mt-8">
            <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">
              Project Details
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-gray-400 text-sm sm:text-base">
              <div>
                <p>
                  <strong>Duration:</strong> {project.duration}
                </p>
                <p>
                  <strong>Team:</strong> {project.team}
                </p>
              </div>
              <div>
                <p>
                  <strong>Status:</strong> {project.status}
                </p>
                <p>
                  <strong>Completion Date:</strong> {project.completionDate}
                </p>
              </div>
            </div>
          </Card>
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

export default ProjectDetailPage;