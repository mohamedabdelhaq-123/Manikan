import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Store',     path: '/store' },
  { label: 'My Size',  path: '/size' },
  { label: 'Styling',  path: '/events' },
  { label: 'Wardrobe', path: '/wardrobe' },
  { label: 'Business', path: '/business' },
  { label: 'Pricing',  path: '/pricing' },
];

export default function Navbar() {
  const [open, setOpen]         = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location                = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  const isActive = (path) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass border-b border-manikan-border shadow-soft'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo — wordmark only */}
          <Link to="/" className="flex items-center gap-3 group shrink-0">
            {/* M monogram */}
            <div className="w-9 h-9 rounded-xl bg-forest-700 flex items-center justify-center shadow-soft group-hover:bg-forest-600 transition-colors">
              <span className="font-display text-white text-lg font-bold leading-none tracking-tight">M</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display text-xl font-semibold text-forest-900 group-hover:text-forest-700 transition-colors tracking-wider">
                MANIKAN
              </span>
              <span className="text-[9px] tracking-[0.22em] text-gray-400 uppercase font-medium">
                Virtual Tailoring
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 group ${
                  isActive(link.path)
                    ? 'text-forest-700'
                    : 'text-gray-600 hover:text-forest-700'
                }`}
              >
                {link.label}
                <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gold-500 rounded-full transition-all duration-300 ${
                  isActive(link.path) ? 'w-4/5' : 'w-0 group-hover:w-4/5'
                }`} />
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/store"
              className="px-4 py-2 text-sm font-medium text-gold-600 hover:text-gold-700 transition-colors"
            >
              Try Demo
            </Link>
            <Link
              to="/business"
              className="px-5 py-2.5 bg-gold-400 text-forest-900 text-sm font-semibold rounded-xl hover:bg-gold-500 transition-all duration-200 shadow-gold hover:shadow-md"
            >
              For Business
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2.5 rounded-xl text-forest-700 hover:bg-forest-50 transition-colors border border-manikan-border"
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden glass border-t border-manikan-border px-4 pb-5 pt-3 shadow-card animate-fade-in">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block px-4 py-3 rounded-xl text-sm font-medium mb-1 transition-all ${
                isActive(link.path)
                  ? 'bg-forest-50 text-forest-700 border border-forest-100'
                  : 'text-gray-700 hover:bg-forest-50 hover:text-forest-700'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-4 flex flex-col gap-2 pt-3 border-t border-manikan-border">
            <Link
              to="/store"
              className="w-full text-center px-4 py-2.5 border border-manikan-border rounded-xl text-sm font-medium text-forest-700 hover:bg-forest-50 transition-colors"
            >
              Try Demo
            </Link>
            <Link
              to="/business"
              className="w-full text-center px-4 py-2.5 bg-forest-700 text-white rounded-xl text-sm font-medium hover:bg-forest-800 transition-colors"
            >
              For Business
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
