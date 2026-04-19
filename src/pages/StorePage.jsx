import React, { useState } from 'react';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import SectionHeader from '../components/SectionHeader';
import Badge from '../components/Badge';

const categories = ['All', 'Tops', 'Bottoms', 'Dresses', 'Outerwear'];
const sortOptions = ['Featured', 'Price: Low to High', 'Price: High to Low', 'Top Rated'];

export default function StorePage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [sortBy, setSortBy]               = useState('Featured');
  const [search, setSearch]               = useState('');

  const filtered = products
    .filter((p) => {
      const matchCat    = activeCategory === 'All' || p.category === activeCategory;
      const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) || p.brand.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchSearch;
    })
    .sort((a, b) => {
      if (sortBy === 'Price: Low to High')  return a.price - b.price;
      if (sortBy === 'Price: High to Low')  return b.price - a.price;
      if (sortBy === 'Top Rated')           return b.rating - a.rating;
      return 0;
    });

  return (
    <div className="pt-20 min-h-screen">
      {/* Header */}
      <div className="bg-white border-b border-warm-border px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-sage-50 border border-sage-200 rounded-full px-3 py-1 mb-3">
            <span className="w-1.5 h-1.5 bg-sage-500 rounded-full" />
            <span className="text-xs font-semibold text-sage-600">Demo Store Experience</span>
          </div>
          <SectionHeader
            label=""
            title="Shop with Smart Fit"
            subtitle="Every product has size recommendations and outfit suggestions built in. This is the experience your customers get."
          />

          {/* Search + Filter bar */}
          <div className="flex flex-col sm:flex-row gap-3 mt-4">
            <div className="relative flex-1">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search products or brands..."
                className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm bg-gray-50 focus:outline-none focus:border-sage-400 focus:ring-1 focus:ring-sage-200 transition"
              />
              {search && (
                <button onClick={() => setSearch('')} className="absolute right-3 top-1/2 -translate-y-1/2">
                  <X size={14} className="text-gray-400 hover:text-gray-600" />
                </button>
              )}
            </div>
            <div className="flex items-center gap-2">
              <SlidersHorizontal size={15} className="text-gray-400 shrink-0" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-200 rounded-xl text-sm px-3 py-2.5 bg-white focus:outline-none focus:border-sage-400 transition"
              >
                {sortOptions.map((o) => <option key={o}>{o}</option>)}
              </select>
            </div>
          </div>

          {/* Categories */}
          <div className="flex items-center gap-2 mt-4 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-sage-500 text-white shadow-sm'
                    : 'bg-white border border-gray-200 text-gray-600 hover:border-gray-300'
                }`}
              >
                {cat}
              </button>
            ))}
            {activeCategory !== 'All' && (
              <button
                onClick={() => setActiveCategory('All')}
                className="text-xs text-gray-400 hover:text-gray-600 flex items-center gap-1"
              >
                <X size={12} /> Clear
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-gray-500">{filtered.length} products</p>
          <Badge color="sage" dot>SmartFit enabled</Badge>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-24">
            <p className="text-gray-400 text-sm">No products match your search.</p>
            <button onClick={() => { setSearch(''); setActiveCategory('All'); }} className="mt-3 text-sm text-sage-500 hover:underline">
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
