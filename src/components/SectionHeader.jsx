import React from 'react';

export default function SectionHeader({ label, title, subtitle, center = false }) {
  return (
    <div className={`mb-10 ${center ? 'text-center' : ''}`}>
      {label && (
        <p className="text-sm font-semibold text-sage-500 uppercase tracking-widest mb-2">
          {label}
        </p>
      )}
      <h2 className="text-3xl sm:text-4xl text-gray-900 leading-tight text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3 text-gray-500 text-base leading-relaxed ${center ? 'max-w-xl mx-auto' : 'max-w-2xl'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
