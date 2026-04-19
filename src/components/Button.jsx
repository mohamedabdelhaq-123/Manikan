import React from 'react';
import { Link } from 'react-router-dom';

const variants = {
  primary:   'bg-sage-500 text-white hover:bg-sage-600 shadow-sm',
  secondary: 'bg-white text-gray-800 border border-gray-200 hover:border-gray-300 hover:bg-gray-50',
  outline:   'bg-transparent text-sage-600 border border-sage-500 hover:bg-sage-50',
  ghost:     'bg-transparent text-gray-600 hover:bg-gray-50',
  sand:      'bg-sand-500 text-white hover:bg-sand-600 shadow-sm',
};

const sizes = {
  sm:  'px-3.5 py-1.5 text-sm',
  md:  'px-5 py-2.5 text-sm',
  lg:  'px-7 py-3.5 text-base',
};

export default function Button({
  children,
  variant = 'primary',
  size    = 'md',
  to,
  href,
  onClick,
  disabled,
  className = '',
  icon,
  iconRight,
  fullWidth,
  type = 'button',
}) {
  const base = `inline-flex items-center justify-center gap-2 font-medium rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-sage-400 focus:ring-offset-2 ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${fullWidth ? 'w-full' : ''} ${className}`;

  const content = (
    <>
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
      {iconRight && <span className="shrink-0">{iconRight}</span>}
    </>
  );

  if (to)   return <Link to={to} className={base}>{content}</Link>;
  if (href)  return <a href={href} className={base} target="_blank" rel="noopener noreferrer">{content}</a>;
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={base}>
      {content}
    </button>
  );
}
