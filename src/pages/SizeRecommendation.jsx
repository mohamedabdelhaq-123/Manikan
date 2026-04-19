import React, { useState } from 'react';
import { Ruler, ChevronRight, Info, RotateCcw, Zap } from 'lucide-react';
import Button from '../components/Button';
import SectionHeader from '../components/SectionHeader';
import ConfidenceBar from '../components/ConfidenceBar';
import Badge from '../components/Badge';

const fitOptions = [
  { value: 'slim',    label: 'Slim', desc: 'Fitted, close to body' },
  { value: 'regular', label: 'Regular', desc: 'Standard, comfortable fit' },
  { value: 'relaxed', label: 'Relaxed', desc: 'Loose, oversized feel' },
];

// Mock AI size logic
function computeSize({ height, weight, fit }) {
  const h = parseFloat(height);
  const w = parseFloat(weight);
  if (!h || !w) return null;

  const bmi = w / ((h / 100) ** 2);

  let baseTop = 'M';
  let baseBottom = 'M';
  let confidence = 88;

  if (bmi < 18.5)       { baseTop = 'XS'; baseBottom = 'XS'; confidence = 91; }
  else if (bmi < 21)    { baseTop = 'S';  baseBottom = 'S';  confidence = 93; }
  else if (bmi < 24)    { baseTop = 'M';  baseBottom = 'M';  confidence = 95; }
  else if (bmi < 27)    { baseTop = 'L';  baseBottom = 'L';  confidence = 92; }
  else if (bmi < 30)    { baseTop = 'XL'; baseBottom = 'XL'; confidence = 89; }
  else                   { baseTop = '2XL'; baseBottom = '2XL'; confidence = 86; }

  const sizeOrder = ['XS', 'S', 'M', 'L', 'XL', '2XL'];

  const shiftIndex = (base, shift) => {
    const idx = sizeOrder.indexOf(base);
    return sizeOrder[Math.max(0, Math.min(sizeOrder.length - 1, idx + shift))] || base;
  };

  const fitShift = fit === 'slim' ? -1 : fit === 'relaxed' ? 1 : 0;

  return {
    top:        shiftIndex(baseTop, fitShift),
    bottom:     shiftIndex(baseBottom, fitShift),
    confidence,
    fit,
    heightLabel: h < 160 ? 'Petite' : h < 170 ? 'Short' : h < 178 ? 'Regular' : 'Tall',
    tips: [
      fit === 'slim'    ? 'You prefer a fitted look — we sized down slightly for a cleaner silhouette.' : '',
      fit === 'relaxed' ? 'You prefer an oversized look — we sized up for that relaxed drape.' : '',
      fit === 'regular' ? 'Standard sizing applied. Perfect for everyday comfort.' : '',
      h < 162           ? 'For your height, consider petite or short-inseam options in trousers.' : '',
    ].filter(Boolean),
  };
}

const sizeGuide = [
  { size: 'XS', chest: '80-84', waist: '60-64', hip: '86-90' },
  { size: 'S',  chest: '85-89', waist: '65-69', hip: '91-95' },
  { size: 'M',  chest: '90-94', waist: '70-74', hip: '96-100' },
  { size: 'L',  chest: '95-99', waist: '75-79', hip: '101-105' },
  { size: 'XL', chest: '100-105', waist: '80-85', hip: '106-111' },
];

export default function SizeRecommendation() {
  const [form, setForm]     = useState({ height: '', weight: '', fit: 'regular' });
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (field, value) => setForm((f) => ({ ...f, [field]: value }));

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setResult(computeSize(form));
      setLoading(false);
    }, 1200);
  };

  const reset = () => { setForm({ height: '', weight: '', fit: 'regular' }); setResult(null); };

  const valid = form.height && form.weight && parseFloat(form.height) > 0 && parseFloat(form.weight) > 0;

  return (
    <div className="pt-24 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <SectionHeader
          label="AI Size Finder"
          title="Your perfect fit, calculated."
          subtitle="Enter your measurements once. We'll recommend your size across all brands in the store — with a confidence score to back it up."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Input Form */}
          <div className="bg-white rounded-2xl border border-warm-border shadow-soft p-7">
            <h3 className="font-semibold text-gray-900 mb-5 flex items-center gap-2">
              <Ruler size={18} className="text-sage-500" /> Your Measurements
            </h3>

            {/* Height */}
            <div className="mb-5">
              <label className="block text-sm font-medium text-gray-700 mb-2">Height (cm)</label>
              <input
                type="number"
                value={form.height}
                onChange={(e) => handleChange('height', e.target.value)}
                placeholder="e.g. 165"
                min="140"
                max="210"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-sage-400 focus:ring-1 focus:ring-sage-200 transition bg-gray-50"
              />
              {form.height && (parseFloat(form.height) < 140 || parseFloat(form.height) > 210) && (
                <p className="text-xs text-red-400 mt-1">Enter a valid height (140–210 cm)</p>
              )}
            </div>

            {/* Weight */}
            <div className="mb-5">
              <label className="block text-sm font-medium text-gray-700 mb-2">Weight (kg)</label>
              <input
                type="number"
                value={form.weight}
                onChange={(e) => handleChange('weight', e.target.value)}
                placeholder="e.g. 60"
                min="35"
                max="200"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-sage-400 focus:ring-1 focus:ring-sage-200 transition bg-gray-50"
              />
            </div>

            {/* Fit Preference */}
            <div className="mb-7">
              <label className="block text-sm font-medium text-gray-700 mb-2">Fit Preference</label>
              <div className="grid grid-cols-3 gap-2">
                {fitOptions.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => handleChange('fit', opt.value)}
                    className={`p-3 rounded-xl border text-center transition-all ${
                      form.fit === opt.value
                        ? 'border-sage-500 bg-sage-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <p className={`text-sm font-medium ${form.fit === opt.value ? 'text-sage-700' : 'text-gray-700'}`}>
                      {opt.label}
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5 leading-tight">{opt.desc}</p>
                  </button>
                ))}
              </div>
            </div>

            <Button
              onClick={handleSubmit}
              disabled={!valid || loading}
              fullWidth
              size="lg"
              icon={loading ? null : <Zap size={16} />}
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Analysing...
                </span>
              ) : 'Get My Size Recommendation'}
            </Button>

            {result && (
              <button onClick={reset} className="mt-3 w-full text-sm text-gray-400 hover:text-gray-600 flex items-center justify-center gap-1.5">
                <RotateCcw size={13} /> Start over
              </button>
            )}
          </div>

          {/* Result */}
          <div>
            {!result && !loading && (
              <div className="bg-warm-bg rounded-2xl border border-dashed border-gray-200 h-full min-h-[320px] flex flex-col items-center justify-center text-center p-8">
                <div className="w-14 h-14 bg-sage-50 rounded-2xl flex items-center justify-center mb-4">
                  <Ruler size={24} className="text-sage-400" />
                </div>
                <p className="text-gray-500 text-sm">Your size recommendation will appear here once you enter your measurements.</p>
              </div>
            )}

            {loading && (
              <div className="bg-white rounded-2xl border border-warm-border shadow-soft h-full min-h-[320px] flex flex-col items-center justify-center text-center p-8">
                <div className="w-14 h-14 bg-sage-50 rounded-2xl flex items-center justify-center mb-4 animate-pulse">
                  <Zap size={24} className="text-sage-400" />
                </div>
                <p className="text-sm text-gray-500">AI is analysing your measurements...</p>
                <div className="flex gap-1.5 mt-4">
                  {[0,1,2].map((i) => (
                    <div key={i} className="w-2 h-2 bg-sage-300 rounded-full animate-bounce" style={{ animationDelay: `${i * 0.15}s` }} />
                  ))}
                </div>
              </div>
            )}

            {result && (
              <div className="bg-white rounded-2xl border border-warm-border shadow-soft p-7 animate-scale-in">
                <div className="flex items-center justify-between mb-5">
                  <h3 className="font-semibold text-gray-900">Your Recommendation</h3>
                  <Badge color="sage" dot>AI Result</Badge>
                </div>

                {/* Size boxes */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {[
                    { label: 'Tops / Shirts', size: result.top },
                    { label: 'Bottoms / Trousers', size: result.bottom },
                  ].map((item) => (
                    <div key={item.label} className="bg-sage-50 border border-sage-100 rounded-xl p-4 text-center">
                      <p className="text-xs text-sage-600 font-medium mb-1">{item.label}</p>
                      <p className="text-4xl font-display text-sage-700">{item.size}</p>
                      <Badge color="gray" className="mt-2">{result.fit} fit</Badge>
                    </div>
                  ))}
                </div>

                {/* Confidence */}
                <div className="mb-5 space-y-2">
                  <ConfidenceBar value={result.confidence} label="Confidence Level" color="sage" />
                  <p className="text-xs text-gray-400 flex items-start gap-1">
                    <Info size={11} className="mt-0.5 shrink-0" />
                    Based on your body measurements and fit preference. Results may vary slightly by brand.
                  </p>
                </div>

                {/* Height label */}
                <div className="flex items-center gap-2 mb-5">
                  <Badge color="blue">{result.heightLabel} height</Badge>
                  <span className="text-xs text-gray-400">detected from {form.height} cm</span>
                </div>

                {/* Tips */}
                <div className="space-y-2">
                  {result.tips.map((tip, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-gray-600 bg-gray-50 rounded-lg p-2.5">
                      <ChevronRight size={12} className="text-sage-400 shrink-0 mt-0.5" />
                      {tip}
                    </div>
                  ))}
                </div>

                <Button to="/store" variant="outline" fullWidth className="mt-5">
                  Shop with My Size
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* Size Guide Table */}
        <div className="mt-10 bg-white rounded-2xl border border-warm-border shadow-soft p-6">
          <h3 className="font-semibold text-gray-900 mb-4 text-sm">Size Reference Guide (Women's — cm)</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left border-b border-gray-100">
                  <th className="pb-2 text-xs font-semibold text-gray-500 pr-6">Size</th>
                  <th className="pb-2 text-xs font-semibold text-gray-500 pr-6">Chest</th>
                  <th className="pb-2 text-xs font-semibold text-gray-500 pr-6">Waist</th>
                  <th className="pb-2 text-xs font-semibold text-gray-500">Hip</th>
                </tr>
              </thead>
              <tbody>
                {sizeGuide.map((row, i) => (
                  <tr key={i} className={`border-b border-gray-50 ${result && result.top === row.size ? 'bg-sage-50' : ''}`}>
                    <td className="py-2.5 pr-6">
                      <span className={`font-semibold ${result && result.top === row.size ? 'text-sage-600' : 'text-gray-700'}`}>
                        {row.size}
                        {result && result.top === row.size && <span className="ml-2 text-xs text-sage-500">← Your size</span>}
                      </span>
                    </td>
                    <td className="py-2.5 pr-6 text-gray-500">{row.chest}</td>
                    <td className="py-2.5 pr-6 text-gray-500">{row.waist}</td>
                    <td className="py-2.5 text-gray-500">{row.hip}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
