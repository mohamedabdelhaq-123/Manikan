import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Twitter, Linkedin, Instagram } from 'lucide-react';

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
    <footer className="bg-forest-950 mt-0">
      {/* Top gradient accent */}
      <div className="h-1 bg-gradient-to-r from-forest-500 via-gold-400 to-forest-500" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">

          {/* Brand — wordmark only */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-5 group w-fit">
              <div className="w-10 h-10 rounded-xl bg-forest-700 flex items-center justify-center group-hover:bg-forest-600 transition-colors">
                <span className="font-display text-white text-xl font-bold leading-none">M</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display text-xl font-semibold text-white tracking-wider">MANIKAN</span>
                <span className="text-[9px] tracking-[0.22em] text-forest-400 uppercase font-medium">Virtual Tailoring</span>
              </div>
            </Link>

            <p className="text-sm text-forest-300 leading-relaxed max-w-xs mb-6">
              Helping fashion brands reduce returns, improve fit accuracy, and deliver
              a smarter shopping experience — for every body, every style.
            </p>

            <div className="flex items-center gap-4">
              {[
                { icon: Mail,      href: 'mailto:hello@manikan.io',  label: 'Email' },
                { icon: Twitter,   href: '#',                        label: 'Twitter' },
                { icon: Linkedin,  href: '#',                        label: 'LinkedIn' },
                { icon: Instagram, href: '#',                        label: 'Instagram' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-xl bg-forest-800 flex items-center justify-center text-forest-400 hover:text-white hover:bg-forest-700 transition-all border border-forest-700"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-sm font-semibold text-white mb-4 tracking-wide">{section}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-sm text-forest-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-forest-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-forest-500">© 2026 Manikan Technologies. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <p className="text-xs text-forest-600">Built for the pitch — mock data only.</p>
            <div className="flex items-center gap-1.5 text-xs text-forest-500">
              <span className="w-1.5 h-1.5 bg-forest-500 rounded-full animate-pulse" />
              AI-Powered Sizing for Everyone
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
