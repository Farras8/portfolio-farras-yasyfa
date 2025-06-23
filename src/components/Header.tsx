import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    // If on the homepage, handle smooth scrolling
    if (location.pathname === '/') {
      e.preventDefault();
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }
    setMenuOpen(false);
  };

  const navLinks = [
    'Home',
    'About',
    'Educations',
    'Projects',
    'Certificate',
    'Skills',
    'Contact',
  ];

  return (
    <>
      <style>
        {`.font-orbitron { font-family: 'Orbitron', sans-serif; }`}
      </style>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-gray-900/80 shadow-lg shadow-purple-500/10 backdrop-blur-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">
          <Link
            to="/"
            onClick={(e) => handleNavClick(e, 'home')}
            className="text-xl sm:text-2xl font-bold font-orbitron text-gray-100"
          >
            FARRAS
          </Link>
          <nav className="hidden lg:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link}
                to={`/#${link.toLowerCase()}`}
                onClick={(e) => handleNavClick(e, link.toLowerCase())}
                className="text-gray-300 hover:text-blue-400 font-medium transition-colors duration-300 uppercase tracking-widest text-sm"
              >
                {link}
              </Link>
            ))}
          </nav>
          <div className="lg:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-300 focus:outline-none"
            >
              <svg
                className="w-6 h-6 sm:w-7 sm:h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    !menuOpen
                      ? 'M4 6h16M4 12h16m-7 6h7'
                      : 'M6 18L18 6M6 6l12 12'
                  }
                />
              </svg>
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="lg:hidden bg-gray-900/95 backdrop-blur-sm shadow-lg">
            {navLinks.map((link) => (
              <Link
                key={link}
                to={`/#${link.toLowerCase()}`}
                onClick={(e) => handleNavClick(e, link.toLowerCase())}
                className="block py-3 px-4 sm:px-6 text-center text-gray-300 hover:bg-purple-900/50 transition-colors duration-300 uppercase text-sm sm:text-base"
              >
                {link}
              </Link>
            ))}
          </div>
        )}
      </header>
    </>
  );
};

export default Header;