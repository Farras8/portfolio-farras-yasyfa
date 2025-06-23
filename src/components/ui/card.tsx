import React from 'react';

interface CardProps {
    children: React.ReactNode;
    className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => (
  <div className={`bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out group ${className}`}>
    {children}
  </div>
);

export default Card;
