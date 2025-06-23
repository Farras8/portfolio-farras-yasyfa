import React from 'react';

interface SectionHeaderProps {
    title: string;
    subtitle: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle }) => (
  <div className="text-center mb-16">
    <h2 className="text-4xl md:text-5xl font-bold font-poppins text-gray-900">{title}</h2>
    <p className="text-lg text-gray-500 mt-3 max-w-2xl mx-auto">{subtitle}</p>
    <div className="w-20 h-1 bg-blue-500 mx-auto mt-6 rounded"></div>
  </div>
);

export default SectionHeader;
