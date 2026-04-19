import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, TrendingDown, Ruler, CalendarCheck, Shirt,
  BarChart3, ShieldCheck, Zap, Users, Star, ChevronRight,
  Package, RefreshCw, Frown, CheckCircle,
} from 'lucide-react';
import Button from '../components/Button';
import SectionHeader from '../components/SectionHeader';

const stats = [
  { value: '30%',  label: 'of online fashion orders are returned' },
  { value: '70%',  label: 'of returns are due to sizing issues' },
  { value: '2.3×', label: 'higher retention with accurate sizing' },
];

const features = [
  {
    icon: Ruler,
    title: 'AI Size Recommendation',
    desc: 'Users enter their measurements once. Our model predicts the right size with confidence scoring across all brands.',
    color: 'sage',
  },
  {
    icon: CalendarCheck,
    title: 'Event-Based Styling',
    desc: 'Connected to Google Calendar and global events, we recommend complete outfits tailored to the occasion.',
    color: 'blue',
  },
  {
    icon: Shirt,
    title: 'Wardrobe Intelligence',
    desc: 'Users build a digital wardrobe. We show them what to wear from what they already own — reducing impulse buys.',
    color: 'amber',
  },
  {
    icon: BarChart3,
    title: 'Retailer Analytics',
    desc: 'Brands get data on fit preferences, return drivers, and popular size combos to make smarter inventory decisions.',
    color: 'rose',
  },
];

const benefits = [
  { icon: TrendingDown, label: 'Reduce returns up to 42%',     audience: 'For Brands' },
  { icon: ShieldCheck,  label: 'Improve size accuracy to 94%', audience: 'For Brands' },
  { icon: Zap,          label: 'Increase conversion by 28%',   audience: 'For Brands' },
  { icon: Users,        label: 'Higher customer satisfaction', audience: 'For Shoppers' },
  { icon: Shirt,        label: 'Use existing wardrobe better', audience: 'For Shoppers' },
  { icon: Star,         label: 'Discover outfits for any event', audience: 'For Shoppers' },
];

const steps = [
  { num: '01', title: 'Add the widget',       desc: 'Embed our size & style widget on your product page with one line of code.' },
  { num: '02', title: 'Customers enter fit',  desc: 'Height, weight, and fit preference — takes 20 seconds. Done once, saved forever.' },
  { num: '03', title: 'AI recommends size',   desc: "Our model predicts the right size with a confidence score, tailored to your brand's sizing." },
  { num: '04', title: 'Style suggestions',    desc: 'Based on upcoming events and their wardrobe, we complete the look for them.' },
];

const testimonials = [
  {
    quote: 'Our return rate dropped from 34% to 19% in the first month. The sizing confidence score is a game-changer for customer trust.',
    name: 'Dina M.',
    role: 'Head of E-Commerce, Forma Basics',
    avatar: 'DM',
  },
  {
    quote: 'Customers are spending more per session because they\'re getting full outfit recommendations, not just a single item.',
    name: 'Yusuf A.',
    role: 'Founder, Thread & Co.',
    avatar: 'YA',
  },
];

const problems = [
  { icon: RefreshCw, title: '$500B in returns globally', desc: 'Fashion has the highest return rate of any e-commerce category.' },
  { icon: Frown,     title: 'Shoppers guessing sizes',  desc: 'Different sizing charts per brand leads to frustration and cart abandonment.' },
  { icon: Package,   title: 'Wardrobe under-utilised',  desc: 'Most people wear only 20% of what they own. The rest goes to waste.' },
];

export default function LandingPage() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-sage-50/60 to-warm-bg">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white border border-sage-200 rounded-full px-4 py-1.5 mb-6 shadow-soft">
              <span className="w-2 h-2 bg-sage-500 rounded-full animate-pulse" />
              <span className="text-xs font-semibold text-sage-700">AI-Powered Fashion Tech · Investor Demo</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl text-gray-900 leading-[1.08] text-balance mb-6">
              Reduce returns.<br />
              <span className="text-sage-500">Improve fit.</span><br />
              Smarter fashion.
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed mb-8 max-w-xl">
              SmartFit helps local and mid-tier fashion brands cut return rates, recommend the right size every time, and style customers for any occasion — all with one embeddable platform.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button to="/store" size="lg" icon={<Zap size={18} />}>
                Try the Demo
              </Button>
              <Button to="/business" size="lg" variant="secondary" iconRight={<ArrowRight size={16} />}>
                For Businesses
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {stats.map((s, i) => (
              <div key={i} className="bg-white rounded-2xl p-5 border border-warm-border shadow-soft">
                <p className="text-3xl font-display text-sage-500 mb-1">{s.value}</p>
                <p className="text-sm text-gray-500">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            label="The Problem"
            title="Fashion has a fit crisis."
            subtitle="Returns are expensive, size guessing is frustrating, and wardrobes are full of clothes no one wears. It's a problem for brands and shoppers alike."
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {problems.map((p, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-warm-border shadow-soft">
                <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center mb-4">
                  <p.icon size={20} className="text-red-400" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 text-base">{p.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution / Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            label="The Solution"
            title="One platform. Every fit, every occasion."
            subtitle="SmartFit integrates into any fashion brand's product page to guide shoppers from browse to the perfect outfit — with AI that understands their body, calendar, and wardrobe."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((f, i) => (
              <div key={i} className="rounded-2xl p-6 bg-warm-bg border border-warm-border hover:shadow-card transition-all duration-200 hover:-translate-y-0.5">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${
                  f.color === 'sage'  ? 'bg-sage-50' :
                  f.color === 'blue'  ? 'bg-blue-50' :
                  f.color === 'amber' ? 'bg-amber-50' : 'bg-rose-50'
                }`}>
                  <f.icon size={20} className={
                    f.color === 'sage'  ? 'text-sage-500' :
                    f.color === 'blue'  ? 'text-blue-500' :
                    f.color === 'amber' ? 'text-amber-500' : 'text-rose-500'
                  } />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 text-sm">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            label="How It Works"
            title="Up and running in minutes."
            subtitle="For retailers, integration is a single embed. For shoppers, it's a 20-second setup that unlocks a personalized fashion experience."
            center
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div key={i} className="relative">
                <div className="bg-white rounded-2xl p-6 border border-warm-border shadow-soft h-full">
                  <span className="text-4xl font-display text-sage-100 font-bold block mb-3">{step.num}</span>
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm">{step.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-3 z-10">
                    <ChevronRight size={20} className="text-sage-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-sage-500">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-sage-200 uppercase tracking-widest mb-2">Benefits</p>
            <h2 className="text-3xl sm:text-4xl text-white">Built for brands. Loved by shoppers.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((b, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 flex items-start gap-4 border border-white/20">
                <div className="w-9 h-9 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
                  <b.icon size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-sage-200 mb-0.5">{b.audience}</p>
                  <p className="text-sm font-medium text-white">{b.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader label="Early Results" title="Brands are already seeing impact." center />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-warm-bg rounded-2xl p-7 border border-warm-border">
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={14} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 text-sm">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-sage-100 flex items-center justify-center text-xs font-bold text-sage-700">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                    <p className="text-xs text-gray-400">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-white rounded-3xl p-10 border border-warm-border shadow-card">
            <h2 className="text-3xl sm:text-4xl text-gray-900 mb-3">Ready to see it in action?</h2>
            <p className="text-gray-500 mb-8 max-w-md mx-auto text-sm leading-relaxed">
              Explore the demo store, try the size recommender, or learn how to integrate SmartFit into your brand.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button to="/store" size="lg">Browse Demo Store</Button>
              <Button to="/pricing" size="lg" variant="secondary">View Pricing</Button>
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-5 text-xs text-gray-400">
              {['Free to try', 'No credit card', 'Works with any platform'].map((t) => (
                <span key={t} className="flex items-center gap-1.5">
                  <CheckCircle size={12} className="text-sage-400" /> {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
