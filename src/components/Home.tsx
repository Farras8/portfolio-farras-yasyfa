// Home.tsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

//============== UI COMPONENT (SELF-CONTAINED) ==============
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

  if (to) {
    return (
      <Link
        to={to}
        onClick={onClick}
        className={`${baseClasses} ${variant === 'primary' ? primaryClasses : secondaryClasses} ${className}`}
      >
        {content}
      </Link>
    );
  }
  if (href) {
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
  }
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

//============== HOME COMPONENT ==============
const Home = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(120);
  const toRotate = ['Full-Stack Web Developer', 'UI/UX Designer', 'Cloud Engineer'];
  const period = 3000;

  const handleButtonClick = (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const ticker = setInterval(() => tick(), typingSpeed);
    return () => clearInterval(ticker);
  }, [text, isDeleting, typingSpeed]);

  const tick = () => {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];
    if (isDeleting) {
      setText((prev) => prev.substring(0, prev.length - 1));
      setTypingSpeed(60);
    } else {
      setText(fullText.substring(0, text.length + 1));
      setTypingSpeed(120);
    }
    if (!isDeleting && text === fullText) {
      setTypingSpeed(period);
      setIsDeleting(true);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setTypingSpeed(500);
    }
  };

  return (
    <>
      <style>
        {`.font-orbitron { font-family: 'Orbitron', sans-serif; }
          .typing-caret { border-right: 0.1em solid #3B82F6; animation: blink-caret 0.8s step-end infinite; }
          @keyframes blink-caret { from, to { border-color: transparent } 50% { border-color: #3B82F6; } }`}
      </style>
      <section
        id="home"
        className="min-h-screen w-full flex items-center justify-center p-4 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gray-900 -z-10"></div>
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'url(https://www.transparenttextures.com/patterns/carbon-fibre.png)',
          }}
        ></div>
        <div
          className="absolute inset-0 z-0 opacity-30"
          style={{
            backgroundImage: `
              radial-gradient(circle at 15% 20%, rgba(138, 43, 226, 0.2), transparent 40%),
              radial-gradient(circle at 85% 80%, rgba(59, 130, 246, 0.2), transparent 40%)
            `,
          }}
        ></div>
        <div className="text-center relative z-10 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-extrabold font-orbitron text-white mb-4 tracking-wider">
            MUHAMMAD FARRAS YASYFA
          </h1>
          <p
            className="text-xl md:text-2xl text-gray-300 mb-8 font-light"
            style={{ minHeight: '2.5rem' }}
          >
            <span className="text-purple-400">{'<'}</span>
            <span className="font-semibold text-blue-400">
              <span className="typing-caret">{text}</span>
            </span>
            <span className="text-purple-400">{'/>'}</span>
          </p>
          <p className="max-w-xl mx-auto text-gray-400 mb-10">
            Forging powerful digital solutions from complex challenges.
            Specializing in elegant, high-performance systems.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4">
            <Button
              to="#projects"
              onClick={(e) => handleButtonClick(e, 'projects')}
              icon={<ArrowRight size={18} />}
            >
              View My Projects
            </Button>
            <Button
              to="#contact"
              onClick={(e) => handleButtonClick(e, 'contact')}
              variant="secondary"
            >
              Download CV
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;