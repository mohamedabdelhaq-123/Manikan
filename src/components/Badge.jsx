import React from 'react';

const colors = {
  sage:   'bg-sage-50 text-sage-700 border-sage-100',
  sand:   'bg-amber-50 text-amber-700 border-amber-100',
  blue:   'bg-blue-50 text-blue-700 border-blue-100',
  rose:   'bg-rose-50 text-rose-700 border-rose-100',
  gray:   'bg-gray-100 text-gray-600 border-gray-200',
  green:  'bg-emerald-50 text-emerald-700 border-emerald-100',
  orange: 'bg-orange-50 text-orange-700 border-orange-100',
};

export default function Badge({ children, color = 'gray', className = '', dot }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium border ${colors[color] || colors.gray} ${className}`}
    >
      {dot && (
        <span className={`w-1.5 h-1.5 rounded-full ${
          color === 'sage' ? 'bg-sage-500' :
          color === 'sand' ? 'bg-amber-500' :
          color === 'blue' ? 'bg-blue-500' :
          color === 'rose' ? 'bg-rose-500' :
          color === 'green' ? 'bg-emerald-500' :
          color === 'orange' ? 'bg-orange-500' : 'bg-gray-400'
        }`} />
      )}
      {children}
    </span>
  );
}
