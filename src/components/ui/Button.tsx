import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  to?: string; // Changed from href to to
  href?: string; // Keep href for external links
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary';
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, to, href, className, onClick, type = 'button', variant = 'primary', icon }) => {
  const primaryClasses = "bg-blue-500 text-white hover:bg-blue-600 shadow-blue-200/50";
  const secondaryClasses = "bg-gray-700 text-white hover:bg-gray-800 shadow-gray-300/50";
  
  const baseClasses = `inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 ${variant === 'primary' ? 'focus:ring-blue-300' : 'focus:ring-gray-300'}`;

  const content = (
    <>
      {children}
      {icon && <span className="ml-2">{icon}</span>}
    </>
  );
  
  // Render Link if 'to' prop is provided (for internal navigation)
  if (to) {
    return (
      <Link to={to} onClick={onClick} className={`${baseClasses} ${variant === 'primary' ? primaryClasses : secondaryClasses} ${className}`}>
        {content}
      </Link>
    );
  }

  // Render a standard anchor tag if 'href' is provided (for external links)
  if (href) {
    return (
      <a href={href} onClick={onClick} className={`${baseClasses} ${variant === 'primary' ? primaryClasses : secondaryClasses} ${className}`} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }
  
  // Render a button if no link is provided
  return (
    <button onClick={onClick} type={type} className={`${baseClasses} ${variant === 'primary' ? primaryClasses : secondaryClasses} ${className}`}>
      {content}
    </button>
  );
};

export default Button;
