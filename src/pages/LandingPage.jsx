import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, TrendingDown, Ruler, CalendarCheck, Shirt,
  BarChart3, ShieldCheck, Zap, Users, Star, ChevronRight,
  Package, RefreshCw, Frown, CheckCircle, Sparkles, Play,
} from 'lucide-react';
import Button from '../components/Button';
import { useLanguage } from '../contexts/LanguageContext';

// ─── Intersection Observer Hook ────────────────────────────────────────────
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

// ─── Animated Counter ───────────────────────────────────────────────────────
function Counter({ end, suffix = '', duration = 1800 }) {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView(0.3);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, end, duration]);
  return <span ref={ref}>{count}{suffix}</span>;
}

// ─── Data ──────────────────────────────────────────────────────────────────
const stats = [
  { value: 30,  suffix: '%',  label: 'of online fashion orders are returned' },
  { value: 70,  suffix: '%',  label: 'of returns are due to sizing issues' },
  { value: 42,  suffix: '%',  label: 'average return reduction with Manikan' },
];

const features = [
  {
    icon: Ruler,
    title: 'AI Size Recommendation',
    desc: 'Users enter their measurements once. Our model predicts the right size with confidence scoring across all brands.',
    color: 'forest',
    delay: 'stagger-1',
  },
  {
    icon: CalendarCheck,
    title: 'Event-Based Styling',
    desc: 'Connected to Google Calendar and global events, we recommend complete outfits tailored to the occasion.',
    color: 'gold',
    delay: 'stagger-2',
  },
  {
    icon: Shirt,
    title: 'Wardrobe Intelligence',
    desc: 'Users build a digital wardrobe. We show them what to wear from what they already own.',
    color: 'forest',
    delay: 'stagger-3',
  },
  {
    icon: BarChart3,
    title: 'Retailer Analytics',
    desc: 'Brands get data on fit preferences, return drivers, and popular size combos for smarter inventory decisions.',
    color: 'gold',
    delay: 'stagger-4',
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
  { num: '01', title: 'Add the widget',       desc: 'Embed our size & style widget on your product page with one line of code.',        icon: Package },
  { num: '02', title: 'Customers enter fit',  desc: 'Height, weight, and fit preference — takes 20 seconds. Done once, saved forever.', icon: Ruler },
  { num: '03', title: 'AI recommends size',   desc: "Our model predicts the right size with a confidence score, tailored to your brand's sizing.", icon: Zap },
  { num: '04', title: 'Style suggestions',    desc: 'Based on upcoming events and their wardrobe, we complete the look for them.',        icon: Sparkles },
];

const testimonials = [
  {
    quote: 'Our return rate dropped from 34% to 19% in the first month. The sizing confidence score is a game-changer for customer trust.',
    name: 'Dina M.',
    role: 'Head of E-Commerce, Forma Basics',
    avatar: 'DM',
    rating: 5,
  },
  {
    quote: "Men never used to bother with size tools — but with Manikan's confidence score, our male shoppers started trusting the recommendation immediately.",
    name: 'Yusuf A.',
    role: 'Founder, Thread & Co.',
    avatar: 'YA',
    rating: 5,
  },
];

const problems = [
  { icon: RefreshCw, title: '$500B in returns globally',  desc: 'Fashion has the highest return rate of any e-commerce category.' },
  { icon: Frown,     title: 'Shoppers guessing sizes',   desc: 'Different sizing charts per brand leads to frustration and cart abandonment.' },
  { icon: Package,   title: 'Wardrobe under-utilised',   desc: 'Most people wear only 20% of what they own. The rest goes to waste.' },
];

// ─── Section Wrapper with animation ────────────────────────────────────────
function AnimatedSection({ children, className = '' }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
    >
      {children}
    </div>
  );
}

// ─── Decorative ornament ────────────────────────────────────────────────────
function Ornament({ label }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="h-px flex-1 max-w-[40px] bg-gradient-to-r from-transparent to-gold-400" />
      <span className="text-xs font-semibold text-gold-600 uppercase tracking-[0.2em]">{label}</span>
      <div className="h-px flex-1 max-w-[40px] bg-gradient-to-l from-transparent to-gold-400" />
    </div>
  );
}

// ─── Component ─────────────────────────────────────────────────────────────
export default function LandingPage() {
  const { t } = useLanguage();

  const stats = [
    { value: 30, suffix: '%', label: t('stat_1_label') },
    { value: 70, suffix: '%', label: t('stat_2_label') },
    { value: 42, suffix: '%', label: t('stat_3_label') },
  ];

  const features = [
    { icon: Ruler,      title: t('feat_1_title'), desc: t('feat_1_desc'), delay: 'stagger-1' },
    { icon: CalendarCheck, title: t('feat_2_title'), desc: t('feat_2_desc'), delay: 'stagger-2' },
    { icon: Shirt,      title: t('feat_3_title'), desc: t('feat_3_desc'), delay: 'stagger-3' },
    { icon: BarChart3,  title: t('feat_4_title'), desc: t('feat_4_desc'), delay: 'stagger-4' },
  ];

  const benefits = [
    { icon: TrendingDown, label: t('ben_1'), audience: t('for_brands') },
    { icon: ShieldCheck,  label: t('ben_2'), audience: t('for_brands') },
    { icon: Zap,          label: t('ben_3'), audience: t('for_brands') },
    { icon: Users,        label: t('ben_4'), audience: t('for_shoppers') },
    { icon: Shirt,        label: t('ben_5'), audience: t('for_shoppers') },
    { icon: Star,         label: t('ben_6'), audience: t('for_shoppers') },
  ];

  const steps = [
    { num: '01', title: t('step_1_title'), desc: t('step_1_desc'), icon: Package },
    { num: '02', title: t('step_2_title'), desc: t('step_2_desc'), icon: Ruler },
    { num: '03', title: t('step_3_title'), desc: t('step_3_desc'), icon: Zap },
    { num: '04', title: t('step_4_title'), desc: t('step_4_desc'), icon: Sparkles },
  ];

  const problems = [
    { icon: RefreshCw, title: t('prob_1_title'), desc: t('prob_1_desc') },
    { icon: Frown,     title: t('prob_2_title'), desc: t('prob_2_desc') },
    { icon: Package,   title: t('prob_3_title'), desc: t('prob_3_desc') },
  ];

  const testimonials = [
    { quote: t('test_1_quote'), name: t('test_1_name'), role: t('test_1_role'), avatar: 'DM', rating: 5 },
    { quote: t('test_2_quote'), name: t('test_2_name'), role: t('test_2_role'), avatar: 'YA', rating: 5 },
  ];

  return (
    <div className="overflow-x-hidden bg-manikan-bg">

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative pt-36 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background design */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-forest-50 to-transparent rounded-full -translate-y-1/2 translate-x-1/3 opacity-70" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-gold-50 to-transparent rounded-full translate-y-1/3 -translate-x-1/4 opacity-60" />
          {/* Decorative dots */}
          <div className="absolute top-32 right-24 w-2 h-2 bg-gold-400 rounded-full animate-pulse-gold" />
          <div className="absolute top-64 right-48 w-1.5 h-1.5 bg-forest-300 rounded-full animate-float" style={{ animationDelay: '0.5s' }} />
          <div className="absolute bottom-20 right-20 w-2 h-2 bg-gold-300 rounded-full animate-pulse-gold" style={{ animationDelay: '1s' }} />
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left: text */}
            <div className="animate-fade-up">
              {/* Badge */}
              <div className="inline-flex items-center gap-2.5 bg-white border border-manikan-border rounded-full px-4 py-2 mb-8 shadow-soft">
                <span className="w-2 h-2 bg-gold-400 rounded-full animate-pulse-gold" />
                <span className="text-xs font-semibold text-gold-600 tracking-wide">{t('hero_badge')}</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-medium text-forest-900 leading-[1.06] text-balance mb-6">
                {t('hero_line1')}<br />
                <span className="shimmer-text">{t('hero_line2')}</span><br />
                {t('hero_line3')}
              </h1>

              <p className="text-base text-gray-500 leading-relaxed mb-10 max-w-lg">
                {t('hero_sub')}
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <Link
                  to="/store"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-forest-600 text-white text-sm font-medium rounded-xl hover:bg-forest-700 transition-all duration-300 shadow-card hover:shadow-lift btn-glow group"
                >
                  <Zap size={17} />
                  {t('hero_cta_demo')}
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/business"
                  className="inline-flex items-center gap-2 px-7 py-3.5 border border-manikan-border text-forest-700 text-sm font-medium rounded-xl hover:border-forest-300 hover:bg-forest-50 transition-all duration-300"
                >
                  {t('hero_cta_biz')}
                  <ChevronRight size={16} />
                </Link>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap gap-5 text-xs text-gray-400">
                {[t('hero_free'), t('hero_no_card'), t('hero_any_plat')].map((item) => (
                  <span key={item} className="flex items-center gap-1.5">
                    <CheckCircle size={12} className="text-forest-400" /> {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: gender-neutral stat visual */}
            <div className="relative hidden lg:flex items-center justify-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="relative w-80 h-80">
                {/* Background ring */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-forest-50 to-forest-100 border border-forest-200" />

                {/* Center M monogram */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-28 h-28 rounded-2xl bg-forest-700 flex items-center justify-center shadow-lift animate-glow-pulse">
                    <span className="font-display text-white text-6xl font-bold leading-none">M</span>
                  </div>
                </div>

                {/* Floating cards */}
                <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-card p-4 animate-float border border-manikan-border">
                  <p className="text-2xl font-display text-forest-600">94%</p>
                  <p className="text-xs text-gray-500">Fit accuracy</p>
                </div>
                <div className="absolute -bottom-4 -left-8 bg-white rounded-2xl shadow-card p-4 animate-float border border-manikan-border" style={{ animationDelay: '1s' }}>
                  <p className="text-2xl font-display text-forest-700">42%</p>
                  <p className="text-xs text-gray-500">Less returns</p>
                </div>
                <div className="absolute top-1/2 -right-14 bg-forest-700 rounded-2xl shadow-card p-3 animate-float" style={{ animationDelay: '0.5s' }}>
                  <Sparkles size={20} className="text-white" />
                  <p className="text-xs text-white/90 mt-1">AI Styled</p>
                </div>
                <div className="absolute -top-4 left-0 bg-white rounded-2xl shadow-card px-3 py-2 animate-float border border-manikan-border" style={{ animationDelay: '1.5s' }}>
                  <p className="text-xs font-medium text-forest-700">👔 Men &nbsp;·&nbsp; 👗 Women</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats row */}
          <AnimatedSection className="mt-20">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {stats.map((s, i) => (
                <div key={i} className={`bg-white rounded-2xl p-6 border border-manikan-border shadow-soft card-hover stagger-${i + 1} group`}>
                  <div className="flex items-center gap-2 mb-1.5">
                    <p className="text-4xl font-display text-gold-600">
                      <Counter end={s.value} suffix={s.suffix} />
                    </p>
                  </div>
                  <p className="text-sm text-gray-500">{s.label}</p>
                  <div className="mt-4 h-0.5 w-0 bg-gold-400 group-hover:w-full transition-all duration-500 rounded-full" />
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── PROBLEM ──────────────────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 section-pattern">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-14">
            <Ornament label={t('problem_label')} />
            <h2 className="text-4xl sm:text-5xl font-display text-forest-900 leading-tight mb-4">
              {t('problem_title')}
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
              {t('problem_sub')}
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {problems.map((p, i) => (
              <AnimatedSection key={i} className={`stagger-${i + 1}`}>
                <div className="bg-white rounded-2xl p-7 border border-manikan-border shadow-soft card-hover h-full group">
                  <div className="w-12 h-12 bg-gold-50 rounded-2xl flex items-center justify-center mb-5 border border-gold-200 group-hover:bg-gold-100 transition-colors">
                    <p.icon size={22} className="text-gold-600" />
                  </div>
                  <h3 className="font-display text-xl text-forest-900 mb-2">{p.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOLUTION / FEATURES ──────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-forest-900 relative overflow-hidden">
        {/* bg pattern */}
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <div className="absolute top-0 left-1/2 w-[500px] h-[500px] bg-gold-400 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-forest-300 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="max-w-7xl mx-auto relative">
          <AnimatedSection className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-10 bg-gold-400/60" />
              <span className="text-xs font-semibold text-gold-400 uppercase tracking-[0.2em]">{t('solution_label')}</span>
              <div className="h-px w-10 bg-gold-400/60" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-display text-white leading-tight mb-4">
              {t('solution_title')}
            </h2>
            <p className="text-forest-200 max-w-2xl mx-auto leading-relaxed">
              {t('solution_sub')}
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((f, i) => (
              <AnimatedSection key={i} className={f.delay}>
                <div className="bg-forest-800/70 backdrop-blur rounded-2xl p-6 border border-gold-400/20 card-hover h-full group hover:border-gold-400/50 transition-all">
                  {/* Solid Sand Tan icon — fully visible on dark bg */}
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 bg-gold-400 shadow-gold">
                    <f.icon size={22} className="text-forest-900" />
                  </div>
                  <h3 className="font-display text-lg text-white mb-2 group-hover:text-gold-300 transition-colors">{f.title}</h3>
                  <p className="text-sm text-forest-300 leading-relaxed">{f.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-14">
            <Ornament label={t('how_label')} />
            <h2 className="text-4xl sm:text-5xl font-display text-forest-900 leading-tight mb-4">
              {t('how_title')}
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
              {t('how_sub')}
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <AnimatedSection key={i} className={`stagger-${i + 1}`}>
                <div className="relative bg-white rounded-2xl p-6 border border-manikan-border shadow-soft card-hover h-full group">
                  {/* Connector */}
                  {i < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 -right-3 z-10">
                      <ChevronRight size={20} className="text-gold-400" />
                    </div>
                  )}
                  <div className="w-11 h-11 bg-gold-50 border border-gold-200 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-gold-500 transition-colors duration-300">
                    <step.icon size={20} className="text-gold-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-5xl font-display text-gold-100 font-bold block mb-3 leading-none">
                    {step.num}
                  </span>
                  <h3 className="font-semibold text-forest-900 mb-2 text-sm">{step.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── BENEFITS ─────────────────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-forest-600 to-forest-800 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-forest-300/10 rounded-full blur-2xl" />
        </div>

        <div className="max-w-7xl mx-auto relative">
          <AnimatedSection className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-10 bg-gold-400/60" />
              <span className="text-xs font-semibold text-gold-300 uppercase tracking-[0.2em]">{t('benefits_label')}</span>
              <div className="h-px w-10 bg-gold-400/60" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-display text-white leading-tight">
              {t('benefits_title')}
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((b, i) => (
              <AnimatedSection key={i} className={`stagger-${i + 1}`}>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 flex items-start gap-4 border border-white/15 card-hover group">
                  <div className="w-10 h-10 bg-gold-400 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-gold-300 transition-colors shadow-gold">
                    <b.icon size={18} className="text-forest-900" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gold-300 mb-1 tracking-wide">{b.audience}</p>
                    <p className="text-sm font-medium text-white leading-snug">{b.label}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 section-pattern">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-14">
            <Ornament label={t('testimonials_label')} />
            <h2 className="text-4xl sm:text-5xl font-display text-forest-900 leading-tight mb-4">
              {t('testimonials_title')}
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <AnimatedSection key={i} className={`stagger-${i + 1}`}>
                <div className="bg-white rounded-2xl p-8 border border-manikan-border shadow-soft card-hover relative overflow-hidden">
                  {/* Sand Tan top accent bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-400 via-gold-300 to-gold-400" />
                  {/* Tan quote mark */}
                  <div className="absolute top-4 right-6 font-display text-8xl text-gold-100 select-none leading-none">&ldquo;</div>

                  <div className="flex gap-0.5 mb-5">
                    {[...Array(t.rating)].map((_, j) => (
                      <Star key={j} size={15} className="text-gold-500 fill-gold-400" />
                    ))}
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-7 text-sm relative">&ldquo;{t.quote}&rdquo;</p>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center text-xs font-bold text-forest-900 shadow-gold">
                      {t.avatar}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-forest-900">{t.name}</p>
                      <p className="text-xs text-gray-400">{t.role}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <div className="relative bg-white rounded-3xl p-12 border border-manikan-border shadow-card overflow-hidden">
              {/* decorative top accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-forest-500 via-forest-300 to-forest-500" />

              {/* M monogram instead of logo */}
              <div className="w-16 h-16 rounded-2xl bg-forest-700 flex items-center justify-center mx-auto mb-6 shadow-soft">
                <span className="font-display text-white text-3xl font-bold leading-none">M</span>
              </div>

              <h2 className="text-4xl sm:text-5xl font-display text-forest-900 mb-4 leading-tight">
                {t('cta_title')}
              </h2>
              <p className="text-gray-500 mb-10 max-w-md mx-auto text-sm leading-relaxed">
                {t('cta_sub')}
              </p>

              <div className="flex flex-wrap justify-center gap-3 mb-8">
                <Link
                  to="/store"
                  className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-forest-600 text-white text-sm font-medium rounded-xl hover:bg-forest-700 transition-all shadow-card hover:shadow-lift btn-glow group"
                >
                  {t('cta_store')}
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/pricing"
                  className="inline-flex items-center gap-2 px-8 py-3.5 border border-manikan-border text-forest-700 text-sm font-medium rounded-xl hover:border-forest-300 hover:bg-forest-50 transition-all"
                >
                  {t('cta_pricing')}
                </Link>
              </div>

              <div className="flex flex-wrap justify-center gap-6 text-xs text-gray-400">
                {[t('cta_free'), t('cta_no_card'), t('cta_works')].map((item) => (
                  <span key={item} className="flex items-center gap-1.5">
                    <CheckCircle size={12} className="text-forest-400" /> {item}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
