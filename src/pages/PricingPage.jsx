import React, { useState } from 'react';
import { Check, HelpCircle, Zap, ArrowRight, Star } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';
import Badge from '../components/Badge';

const plans = [
  {
    name: 'Starter',
    price: 'Free',
    period: null,
    description: 'Try Manikan for up to 30 days. Full features, no card needed.',
    cta: 'Start Free Trial',
    icon: '🌱',
    features: [
      'Up to 500 size recommendations / month',
      'Size Finder widget (1 storefront)',
      'Basic fit analytics dashboard',
      'Email support',
      'Works with Shopify & WooCommerce',
    ],
  },
  {
    name: 'Growth',
    price: '799',
    period: 'month',
    description: 'For growing brands with serious return reduction goals.',
    cta: 'Start Free Trial',
    icon: '🚀',
    features: [
      'Up to 10,000 recommendations / month',
      'Multi-storefront widget (up to 3)',
      'Event-based styling suggestions',
      'Wardrobe integration module',
      'Full analytics & return driver reports',
      'Priority support + onboarding call',
      'Shopify, WooCommerce, Salla, Zid',
    ],
  },
  {
    name: 'Scale',
    price: '2,499',
    period: 'month',
    description: 'For established brands needing enterprise-grade performance.',
    cta: 'Contact Sales',
    icon: '🏆',
    features: [
      'Unlimited recommendations',
      'Unlimited storefronts',
      'Custom AI model per brand sizing',
      'Advanced visualisation (try-on)',
      'Dedicated account manager',
      'SLA-backed uptime (99.9%)',
      'Custom integrations & API access',
      'White-label widget option',
    ],
  },
];

const payPerUse = [
  { action: 'Size Recommendation', price: '0.15 EGP', unit: 'per request' },
  { action: 'Event Styling Query', price: '0.30 EGP', unit: 'per query' },
  { action: 'AI Visualisation',    price: '1.50 EGP', unit: 'per session' },
  { action: 'API Call (general)',  price: '0.05 EGP', unit: 'per call' },
];

const faqs = [
  {
    q: 'Is there a free trial?',
    a: 'Yes — the Starter plan is completely free for 30 days with full access to all features. No credit card required.',
  },
  {
    q: 'Can I switch between plans?',
    a: 'Absolutely. You can upgrade, downgrade, or switch to pay-per-use at any time from your dashboard.',
  },
  {
    q: 'What platforms does the widget support?',
    a: 'Manikan works with Shopify, WooCommerce, Salla, Zid, Magento, and any custom storefront via our JavaScript SDK.',
  },
  {
    q: 'Is our customer data safe?',
    a: 'Yes. Measurement data is encrypted and never shared. Photos used for visualisation are never stored. We are GDPR and PDPA compliant.',
  },
  {
    q: 'Do you offer custom pricing for large brands?',
    a: 'Yes. Contact our sales team for volume pricing, white-label options, and enterprise SLAs.',
  },
];

export default function PricingPage() {
  const [billing, setBilling] = useState('monthly');
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="pt-24 min-h-screen bg-manikan-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Header */}
        <div className="text-center mb-14">
          <SectionHeader
            label="Pricing"
            title="Simple, honest pricing."
            subtitle="Start free, scale as you grow. No hidden fees — just clear value for your brand."
            center
          />

          {/* Billing toggle */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <span className={`text-sm font-medium transition-colors ${billing === 'monthly' ? 'text-forest-800' : 'text-gray-400'}`}>Monthly</span>
            <button
              onClick={() => setBilling(billing === 'monthly' ? 'annual' : 'monthly')}
              className={`relative w-12 h-6 rounded-full transition-all duration-300 ${billing === 'annual' ? 'bg-forest-500' : 'bg-gray-200'}`}
            >
              <span className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform duration-300 ${billing === 'annual' ? 'translate-x-6' : ''}`} />
            </button>
            <span className={`text-sm font-medium transition-colors ${billing === 'annual' ? 'text-forest-800' : 'text-gray-400'}`}>
              Annual
              <Badge color="gold" className="ml-2 align-middle">Save 20%</Badge>
            </span>
          </div>
        </div>

        {/* Plan Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16 items-start">
          {plans.map((plan, i) => {
            const isHighlight = i === 1;
            const displayPrice = billing === 'annual' && plan.price !== 'Free'
              ? Math.round(parseInt(plan.price.replace(',', '')) * 0.8).toLocaleString()
              : plan.price;

            return (
              <div
                key={plan.name}
                className={`relative rounded-2xl p-7 flex flex-col transition-all duration-300 ${
                  isHighlight
                    ? 'bg-forest-800 text-white shadow-lift md:scale-[1.04] animate-glow-pulse'
                    : 'bg-white border border-manikan-border shadow-soft card-hover'
                }`}
              >
                {/* Gradient top on highlight */}
                {isHighlight && (
                  <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r from-forest-400 via-gold-400 to-forest-400" />
                )}

                {isHighlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="bg-gold-500 text-white text-xs font-semibold px-4 py-1 rounded-full shadow-gold flex items-center gap-1">
                      <Star size={10} fill="white" /> Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl">{plan.icon}</span>
                    <p className={`text-sm font-semibold tracking-wide ${isHighlight ? 'text-gold-300' : 'text-forest-600'}`}>{plan.name}</p>
                  </div>
                  <div className="flex items-end gap-1.5 mb-2">
                    {plan.price !== 'Free' && (
                      <span className={`text-sm ${isHighlight ? 'text-forest-300' : 'text-gray-400'}`}>EGP</span>
                    )}
                    <span className={`text-4xl font-display ${isHighlight ? 'text-white' : 'text-forest-900'}`}>{displayPrice}</span>
                    {plan.period && (
                      <span className={`text-sm mb-1 ${isHighlight ? 'text-forest-300' : 'text-gray-400'}`}>/ {plan.period}</span>
                    )}
                  </div>
                  <p className={`text-sm leading-relaxed ${isHighlight ? 'text-forest-200' : 'text-gray-500'}`}>{plan.description}</p>
                </div>

                <ul className="space-y-2.5 mb-7 flex-1">
                  {plan.features.map((feat, j) => (
                    <li key={j} className="flex items-start gap-2.5">
                      <Check size={14} className={`mt-0.5 shrink-0 ${isHighlight ? 'text-gold-300' : 'text-forest-500'}`} />
                      <span className={`text-sm ${isHighlight ? 'text-forest-100' : 'text-gray-600'}`}>{feat}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  to="/business"
                  variant={isHighlight ? 'gold' : 'primary'}
                  fullWidth
                  size="md"
                >
                  {plan.cta}
                </Button>
              </div>
            );
          })}
        </div>

        {/* Pay per use */}
        <div className="bg-white rounded-2xl border border-manikan-border shadow-soft p-7 mb-16">
          <div className="flex items-center gap-3 mb-5">
            <h2 className="font-display text-2xl text-forest-900">Pay-per-use model</h2>
            <Badge color="gold">Flexible</Badge>
          </div>
          <p className="text-sm text-gray-500 mb-6">
            Not ready for a monthly plan? Use Manikan on a per-request basis — perfect for low-volume stores or seasonal campaigns.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {payPerUse.map((item, i) => (
              <div key={i} className="bg-manikan-muted rounded-xl border border-manikan-border p-5 card-hover">
                <p className="text-xs text-gray-500 mb-2">{item.action}</p>
                <p className="text-xl font-display text-forest-700">{item.price}</p>
                <p className="text-xs text-gray-400 mt-1">{item.unit}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-4">Billed at end of each calendar month. Minimum charge: 50 EGP.</p>
        </div>

        {/* Comparison callout */}
        <div className="bg-forest-50 border border-forest-100 rounded-2xl p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-16">
          <div>
            <h3 className="font-display text-xl text-forest-800 mb-1">Need to compare plans in detail?</h3>
            <p className="text-sm text-forest-600">See the full feature matrix or book a 20-minute call with our team.</p>
          </div>
          <div className="flex gap-3 shrink-0">
            <Button variant="outline" size="sm">Full Comparison</Button>
            <Button size="sm" iconRight={<ArrowRight size={13} />}>Book a Demo</Button>
          </div>
        </div>

        {/* FAQ */}
        <SectionHeader label="FAQ" title="Common questions." center />
        <div className="max-w-2xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-xl border border-manikan-border shadow-soft overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-forest-50 transition-colors"
              >
                <span className="text-sm font-medium text-forest-900 flex items-center gap-2">
                  <HelpCircle size={14} className="text-gold-400 shrink-0" />
                  {faq.q}
                </span>
                <span className={`text-forest-400 text-lg leading-none transition-transform duration-300 ${openFaq === i ? 'rotate-45' : ''}`}>+</span>
              </button>
              {openFaq === i && (
                <div className="px-5 pb-5 animate-fade-in border-t border-manikan-border">
                  <p className="text-sm text-gray-500 leading-relaxed pt-4 pl-[22px]">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl border border-manikan-border shadow-card p-10 max-w-xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-forest-500 via-forest-300 to-forest-500" />
            <div className="w-14 h-14 rounded-xl bg-forest-700 flex items-center justify-center mx-auto mb-5 shadow-soft">
              <span className="font-display text-white text-2xl font-bold leading-none">M</span>
            </div>
            <h2 className="font-display text-3xl text-forest-900 mb-2">Get started today.</h2>
            <p className="text-sm text-gray-500 mb-7">Free for 30 days. No card. Cancel anytime.</p>
            <Button to="/business" size="lg" fullWidth>Start Free Trial</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
