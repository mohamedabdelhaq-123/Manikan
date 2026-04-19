import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Mail, Twitter, Linkedin } from 'lucide-react';

const footerLinks = {
  Product: [
    { label: 'Demo Store',    path: '/store' },
    { label: 'Size Finder',   path: '/size' },
    { label: 'Smart Styling', path: '/events' },
    { label: 'Wardrobe',      path: '/wardrobe' },
    { label: 'Visualization', path: '/visualize' },
  ],
  Business: [
    { label: 'For Retailers',  path: '/business' },
    { label: 'Pricing',        path: '/pricing' },
    { label: 'API & Widget',   path: '/business' },
    { label: 'Case Studies',   path: '/business' },
  ],
  Company: [
    { label: 'About',    path: '/' },
    { label: 'Blog',     path: '/' },
    { label: 'Careers',  path: '/' },
    { label: 'Contact',  path: '/' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-white border-t border-warm-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-sage-500 rounded-lg flex items-center justify-center">
                <Sparkles size={16} className="text-white" />
              </div>
              <span className="font-display text-lg text-gray-900">
                Smart<span className="text-sage-500">Fit</span>
              </span>
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              Helping fashion brands reduce returns, improve fit accuracy, and deliver a smarter shopping experience — for every body.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a href="mailto:hello@smartfit.io" className="text-gray-400 hover:text-sage-500 transition-colors">
                <Mail size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-sage-500 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-sage-500 transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-sm font-semibold text-gray-900 mb-3">{section}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-400">© 2026 SmartFit Technologies. All rights reserved.</p>
          <p className="text-xs text-gray-400">Built for the pitch — mock data only.</p>
        </div>
      </div>
    </footer>
  );
}
