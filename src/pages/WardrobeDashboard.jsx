import React, { useState } from 'react';
import { Plus, Edit3, Shirt, Tag, Layers, ToggleLeft, ToggleRight } from 'lucide-react';
import { wardrobeItems, outfitCombinations, userProfile } from '../data/wardrobe';
import SectionHeader from '../components/SectionHeader';
import Badge from '../components/Badge';
import Button from '../components/Button';
import ConfidenceBar from '../components/ConfidenceBar';

const categories = ['All', 'Tops', 'Bottoms', 'Dresses', 'Outerwear'];

export default function WardrobeDashboard() {
  const [activeTab, setActiveTab]       = useState('wardrobe');
  const [activeCategory, setActiveCategory] = useState('All');
  const [useWardrobe, setUseWardrobe]   = useState(true);
  const [editProfile, setEditProfile]   = useState(false);

  const filtered = wardrobeItems.filter(
    (item) => activeCategory === 'All' || item.category === activeCategory
  );

  const getItemsByIds = (ids) => wardrobeItems.filter((w) => ids.includes(w.id));

  return (
    <div className="pt-24 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div>
            <p className="text-sm font-semibold text-sage-500 uppercase tracking-widest mb-1">Personal Dashboard</p>
            <h1 className="text-3xl text-gray-900">My Wardrobe</h1>
            <p className="text-gray-500 text-sm mt-1">Hi, {userProfile.name} — {wardrobeItems.length} items saved</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-white border border-warm-border rounded-xl px-4 py-2.5 shadow-soft">
              <span className="text-xs font-medium text-gray-600">Use wardrobe</span>
              <button onClick={() => setUseWardrobe(!useWardrobe)}>
                {useWardrobe
                  ? <ToggleRight size={22} className="text-sage-500" />
                  : <ToggleLeft size={22} className="text-gray-300" />}
              </button>
            </div>
            <Button size="sm" icon={<Plus size={14} />}>Add Item</Button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-1 bg-gray-100 rounded-xl p-1 mb-8 w-fit">
          {[
            { id: 'wardrobe', label: 'My Clothes', icon: Shirt },
            { id: 'outfits',  label: 'Outfit Combos', icon: Layers },
            { id: 'profile',  label: 'My Profile', icon: Tag },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <tab.icon size={14} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* === WARDROBE TAB === */}
        {activeTab === 'wardrobe' && (
          <div>
            {/* Category filter */}
            <div className="flex items-center gap-2 mb-6 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                    activeCategory === cat
                      ? 'bg-sage-500 text-white'
                      : 'bg-white border border-gray-200 text-gray-600 hover:border-gray-300'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Item grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {filtered.map((item) => (
                <div key={item.id} className="bg-white rounded-2xl border border-warm-border overflow-hidden shadow-soft group hover:shadow-card transition-all">
                  <div className="aspect-square overflow-hidden bg-gray-50 relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {useWardrobe && (
                      <div className="absolute top-2 right-2">
                        <span className="w-5 h-5 bg-sage-500 rounded-full flex items-center justify-center">
                          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                            <path d="M2 5L4 7L8 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-3">
                    <p className="text-xs font-medium text-gray-800 truncate">{item.name}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{item.color}</p>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {item.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} color="gray" className="text-[10px]">{tag}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
              ))}

              {/* Add placeholder */}
              <button className="bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 aspect-square flex flex-col items-center justify-center gap-2 hover:border-sage-300 hover:bg-sage-50 transition-all group">
                <div className="w-8 h-8 bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-sage-100 transition-colors">
                  <Plus size={16} className="text-gray-400 group-hover:text-sage-500" />
                </div>
                <p className="text-xs text-gray-400 group-hover:text-sage-500">Add item</p>
              </button>
            </div>
          </div>
        )}

        {/* === OUTFITS TAB === */}
        {activeTab === 'outfits' && (
          <div className="space-y-5">
            <p className="text-sm text-gray-500">
              SmartFit generates outfit combinations from your wardrobe. Toggle "Use wardrobe" to include these in styling suggestions.
            </p>
            {outfitCombinations.map((outfit) => {
              const items = getItemsByIds(outfit.items);
              return (
                <div key={outfit.id} className="bg-white rounded-2xl border border-warm-border shadow-soft p-5">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm">{outfit.name}</h3>
                      <p className="text-xs text-gray-400 mt-0.5">Occasion: {outfit.occasion}</p>
                    </div>
                    <Badge color="sage">{outfit.confidence}% match</Badge>
                  </div>
                  <ConfidenceBar value={outfit.confidence} color="sage" />
                  <div className="flex gap-3 mt-4">
                    {items.map((item) => (
                      <div key={item.id} className="flex flex-col items-center gap-1.5">
                        <div className="w-14 h-16 rounded-xl overflow-hidden bg-gray-50 border border-gray-100">
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                        </div>
                        <p className="text-[10px] text-gray-500 text-center leading-tight max-w-[56px] truncate">{item.name}</p>
                      </div>
                    ))}
                    <div className="flex flex-col items-center gap-1.5 justify-center">
                      <button className="w-14 h-16 rounded-xl bg-gray-50 border-2 border-dashed border-gray-200 flex items-center justify-center hover:border-sage-300 transition-colors">
                        <Plus size={14} className="text-gray-300" />
                      </button>
                      <p className="text-[10px] text-gray-400">Add piece</p>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-50 flex items-center justify-between">
                    <span className="text-xs text-gray-400">All items owned — no purchases needed</span>
                    <Button to="/events" size="sm" variant="outline">Style for event</Button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* === PROFILE TAB === */}
        {activeTab === 'profile' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Measurements */}
            <div className="bg-white rounded-2xl border border-warm-border shadow-soft p-6">
              <div className="flex items-center justify-between mb-5">
                <h3 className="font-semibold text-gray-900 text-sm">My Measurements</h3>
                <button
                  onClick={() => setEditProfile(!editProfile)}
                  className="text-xs text-sage-500 hover:text-sage-600 flex items-center gap-1 font-medium"
                >
                  <Edit3 size={12} /> {editProfile ? 'Save' : 'Edit'}
                </button>
              </div>
              <div className="space-y-4">
                {[
                  { label: 'Height', value: `${userProfile.height} cm` },
                  { label: 'Weight', value: `${userProfile.weight} kg` },
                  { label: 'Top Size', value: userProfile.topSize },
                  { label: 'Bottom Size', value: userProfile.bottomSize },
                  { label: 'Shoe Size', value: userProfile.shoeSize },
                  { label: 'Fit Preference', value: userProfile.fitPreference },
                ].map((row) => (
                  <div key={row.label} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
                    <span className="text-sm text-gray-500">{row.label}</span>
                    {editProfile
                      ? <input defaultValue={row.value} className="text-sm font-medium text-gray-900 text-right border-b border-sage-300 outline-none bg-transparent w-24" />
                      : <span className="text-sm font-medium text-gray-900">{row.value}</span>}
                  </div>
                ))}
              </div>
              <Button to="/size" variant="outline" fullWidth className="mt-5" size="sm">
                Recalculate from AI
              </Button>
            </div>

            {/* Preferences */}
            <div className="bg-white rounded-2xl border border-warm-border shadow-soft p-6">
              <h3 className="font-semibold text-gray-900 text-sm mb-5">Style Preferences</h3>
              <div className="mb-5">
                <p className="text-xs text-gray-500 mb-2 font-medium">Favourite Colours</p>
                <div className="flex flex-wrap gap-2">
                  {userProfile.favoriteColors.map((c) => (
                    <Badge key={c} color="sage">{c}</Badge>
                  ))}
                  <button className="text-xs text-gray-400 hover:text-sage-500 flex items-center gap-1">
                    <Plus size={10} /> Add
                  </button>
                </div>
              </div>
              <div className="mb-5">
                <p className="text-xs text-gray-500 mb-2 font-medium">Style Preferences</p>
                <div className="flex flex-wrap gap-2">
                  {userProfile.stylePreferences.map((s) => (
                    <Badge key={s} color="blue">{s}</Badge>
                  ))}
                  <button className="text-xs text-gray-400 hover:text-sage-500 flex items-center gap-1">
                    <Plus size={10} /> Add
                  </button>
                </div>
              </div>

              {/* Wardrobe Stats */}
              <div className="bg-sage-50 border border-sage-100 rounded-xl p-4 mt-5">
                <p className="text-xs font-semibold text-sage-700 mb-3">Wardrobe Stats</p>
                <div className="grid grid-cols-3 gap-3 text-center">
                  {[
                    { label: 'Total Items', value: wardrobeItems.length },
                    { label: 'Outfit Combos', value: outfitCombinations.length },
                    { label: 'Cost Saved', value: '~4K EGP' },
                  ].map((s, i) => (
                    <div key={i}>
                      <p className="text-lg font-display text-sage-600">{s.value}</p>
                      <p className="text-[10px] text-sage-500">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
