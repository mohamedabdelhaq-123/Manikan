import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import Badge from './Badge';

export default function ProductCard({ product }) {
  return (
    <Link
      to={`/store/${product.id}`}
      className="group block bg-white rounded-2xl overflow-hidden border border-warm-border hover:shadow-card transition-all duration-300 hover:-translate-y-0.5"
    >
      {/* Image */}
      <div className="aspect-[3/4] overflow-hidden bg-gray-50 relative">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 flex flex-wrap gap-1">
          {product.tags.slice(0, 1).map((tag) => (
            <Badge key={tag} color="sage" className="backdrop-blur-sm">{tag}</Badge>
          ))}
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <p className="text-xs text-gray-400 font-medium mb-0.5">{product.brand}</p>
        <h3 className="font-semibold text-gray-900 text-sm leading-snug mb-2 group-hover:text-sage-600 transition-colors">
          {product.name}
        </h3>
        <div className="flex items-center justify-between">
          <span className="text-base font-semibold text-gray-900">
            {product.price.toLocaleString()} <span className="text-xs text-gray-400 font-normal">{product.currency}</span>
          </span>
          <div className="flex items-center gap-1 text-amber-400">
            <Star size={12} fill="currentColor" />
            <span className="text-xs text-gray-500">{product.rating}</span>
            <span className="text-xs text-gray-400">({product.reviews})</span>
          </div>
        </div>
        <div className="flex items-center gap-1.5 mt-3">
          <span className="text-xs text-gray-400">Sizes:</span>
          <div className="flex gap-1">
            {product.sizes.slice(0, 4).map((s) => (
              <span key={s} className="text-xs px-1.5 py-0.5 bg-gray-50 border border-gray-100 rounded text-gray-600">
                {s}
              </span>
            ))}
            {product.sizes.length > 4 && (
              <span className="text-xs text-gray-400">+{product.sizes.length - 4}</span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
