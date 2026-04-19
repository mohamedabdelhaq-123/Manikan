import React from 'react';

export default function ConfidenceBar({ value, label, color = 'sage' }) {
  const colors = {
    sage:  { bar: 'bg-sage-500',  text: 'text-sage-600',  bg: 'bg-sage-50' },
    amber: { bar: 'bg-amber-400', text: 'text-amber-600', bg: 'bg-amber-50' },
    blue:  { bar: 'bg-blue-500',  text: 'text-blue-600',  bg: 'bg-blue-50' },
  };
  const c = colors[color] || colors.sage;

  return (
    <div className="space-y-1">
      {label && (
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">{label}</span>
          <span className={`font-semibold ${c.text}`}>{value}%</span>
        </div>
      )}
      <div className={`h-2 rounded-full ${c.bg} overflow-hidden`}>
        <div
          className={`h-full rounded-full ${c.bar} transition-all duration-700`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}
