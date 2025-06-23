import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { allCertificates } from '../Data/CertificateData';

//============== UI COMPONENTS & HOOKS (SELF-CONTAINED) ==============
// --- Custom Hook untuk Animasi Gulir ---
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

// --- Komponen AnimatedSection ---
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
      className={`py-24 ${className} ${isVisible ? 'is-visible' : ''}`}
    >
      {children}
    </section>
  );
};

// --- Komponen SectionHeader ---
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

// --- Komponen Card ---
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

// --- Komponen Button ---
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

//============== CERTIFICATE COMPONENT ==============
const Certificate = () => {
  const [showAll, setShowAll] = useState(false);
  const limit = 3;
  const certificatesToShow = showAll ? allCertificates : allCertificates.slice(0, limit);

  const handleViewLess = () => {
    setShowAll(false);
    document.getElementById('certificate')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <style>
        {`.font-orbitron { font-family: 'Orbitron', sans-serif; }
          .is-visible .child-animate {opacity: 1; transform: translateY(0);}
          .child-animate {opacity: 0; transform: translateY(30px); transition: opacity 0.6s cubic-bezier(0.645, 0.045, 0.355, 1), transform 0.6s cubic-bezier(0.645, 0.045, 0.355, 1);}`}
      </style>
      <AnimatedSection id="certificate" className="bg-gray-900">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Artifacts & Runes"
            subtitle="Proof of my acquired power and knowledge."
          />
          <div className="grid lg:grid-cols-3 gap-8">
            {certificatesToShow.map((cert, i) => (
              <div
                key={i}
                className="child-animate"
                style={{ transitionDelay: `${200 + i * 100}ms` }}
              >
                <Card className="overflow-hidden h-full flex flex-col border-gray-800">
                  <div className="relative overflow-hidden">
                    <img
                      src={cert.previewImage}
                      alt={cert.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-70"></div>
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="font-bold text-xl text-white font-orbitron min-h-[56px]">
                      {cert.name}
                    </h3>
                    <p className="text-gray-500 mt-1 text-xs">
                      {`Achieved: ${cert.yearAchieve}${cert.yearEnd ? ` - Valid Until: ${cert.yearEnd}` : ''}`}
                    </p>
                    {cert.credentialId && (
                      <p className="text-xs text-blue-400 mt-4 font-mono bg-gray-900/50 px-2 py-1 rounded w-fit">
                        {cert.credentialId}
                      </p>
                    )}
                    <div className="mt-auto pt-4 border-t border-gray-700 mt-4">
                      <Button href={cert.url} className="w-full !py-2 !text-sm">
                        Inspect Artifact
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
          {allCertificates.length > limit && (
            <div
              className="text-center mt-12 child-animate"
              style={{ transitionDelay: '300ms' }}
            >
              {showAll ? (
                <Button onClick={handleViewLess} variant="secondary">
                  View Less
                </Button>
              ) : (
                <Button onClick={() => setShowAll(true)} variant="secondary">
                  Show All Artifacts
                </Button>
              )}
            </div>
          )}
        </div>
      </AnimatedSection>
    </>
  );
};

export default Certificate;