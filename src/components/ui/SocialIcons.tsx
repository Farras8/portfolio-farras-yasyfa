import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import { Linkedin, Github, Instagram } from 'lucide-react';

interface SocialIconsProps {
    className?: string;
}

const SocialIcons: React.FC<SocialIconsProps> = ({className = ''}) => (
    <div className={`flex justify-center space-x-5 ${className}`}>
        {/* Replace <a> with Link and href with to */}
        <Link to="https://github.com/Farras8" aria-label="Github" className="text-gray-400 hover:text-blue-500 hover:scale-110 transition-all duration-300"><Github size={24} /></Link>
        <Link to="www.linkedin.com/in/muhammad-farras-yasyfa-89a0b12a6" aria-label="LinkedIn" className="text-gray-400 hover:text-blue-500 hover:scale-110 transition-all duration-300"><Linkedin size={24} /></Link>
        <Link to="https://www.instagram.com/farrasyasyfa/" aria-label="Instagram" className="text-gray-400 hover:text-blue-500 hover:scale-110 transition-all duration-300"><Instagram size={24} /></Link>
    </div>
);

export default SocialIcons;
