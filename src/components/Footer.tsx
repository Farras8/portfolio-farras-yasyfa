// Footer.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Github, Instagram } from 'lucide-react';

// Komponen SocialIcons (Self-contained)
const SocialIcons: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`flex justify-center space-x-6 ${className}`}>
    <a
      href="https://github.com/Farras8"
      aria-label="Github"
      className="text-gray-400 hover:text-blue-400 hover:scale-110 transition-all duration-300"
    >
      <Github size={24} />
    </a>
    <a
      href="www.linkedin.com/in/muhammad-farras-yasyfa-89a0b12a6"
      aria-label="LinkedIn"
      className="text-gray-400 hover:text-blue-400 hover:scale-110 transition-all duration-300"
    >
      <Linkedin size={24} />
    </a>
    <a
      href="https://www.instagram.com/farrasyasyfa/"
      aria-label="Instagram"
      className="text-gray-400 hover:text-blue-400 hover:scale-110 transition-all duration-300"
    >
      <Instagram size={24} />
    </a>
  </div>
);

const Footer = () => (
  <>
    <style>{`.font-orbitron { font-family: 'Orbitron', sans-serif; }`}</style>
    <footer className="bg-gray-900 text-white py-8 border-t border-gray-800">
      <div className="container mx-auto px-6 text-center">
        <Link
          to="/"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('home')?.scrollIntoView({
              behavior: 'smooth',
            });
          }}
          className="text-xl font-orbitron font-bold mb-4 inline-block text-gray-200 hover:text-white"
        >
          FARRAS
        </Link>
        <p className="text-gray-400 max-w-md mx-auto mb-6">Arise.</p>
        <div className="mb-6">
          <SocialIcons />
        </div>
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Muhammad Farras. All rights reserved.
        </p>
      </div>
    </footer>
  </>
);

export default Footer;