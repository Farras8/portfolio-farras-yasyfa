import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

interface SocialIconsProps {
    className?: string;
}

const SocialIcons: React.FC<SocialIconsProps> = ({className = ''}) => (
    <div className={`flex justify-center space-x-5 ${className}`}>
        <a href="https://github.com/Farras8" aria-label="Github" className="text-gray-400 hover:text-blue-500 hover:scale-110 transition-all duration-300"><FaGithub size={24} /></a>
        <a href="https://www.linkedin.com/in/muhammad-farras-yasyfa-89a0b12a6" aria-label="LinkedIn" className="text-gray-400 hover:text-blue-500 hover:scale-110 transition-all duration-300"><FaLinkedin size={24} /></a>
        <a href="https://www.instagram.com/farrasyasyfa/" aria-label="Instagram" className="text-gray-400 hover:text-blue-500 hover:scale-110 transition-all duration-300"><FaInstagram size={24} /></a>
    </div>
);

export default SocialIcons;
