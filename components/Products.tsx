
import React, { useState, useMemo } from 'react';
import { MOCK_PRODUCTS } from '../constants';
import { Category, Product } from '../types';
import { ShoppingCart, Search, Loader2, ArrowLeftRight, Check, ImageOff } from 'lucide-react';

const ProductCard: React.FC<{ product: Product; onSelect: (p: Product) => void; onToggleComparison: (p: Product) => void; isComparing: boolean }> = ({ product, onSelect, onToggleComparison, isComparing }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  return (
    <div 
      className="bg-white dark:bg-gray-800 rounded-[2.5rem] overflow-hidden border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-2xl transition-all group cursor-pointer"
      onClick={() => onSelect(product)}
    >
      <div className="relative aspect-square overflow-hidden bg-gray-200 dark:bg-gray-950">
        {isLoading && !hasError && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-900 z-10">
            <Loader2 className="w-8 h-8 animate-spin text-blue-500 opacity-50" />
          </div>
        )}
        
        {hasError ? (
          <div className="flex flex-col items-center justify-center h-full text-gray-400 p-4 text-center">
            <ImageOff className="w-12 h-12 mb-2 opacity-20" />
            <span className="text-[10px] font-bold">Image Unavailable</span>
          </div>
        ) : (
          <img
            src={product.image}
            alt={product.name}
            className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
            onLoad={() => setIsLoading(false)}
            onError={() => {
              setHasError(true);
              setIsLoading(false);
            }}
          />
        )}

        {/* Overlay gradient for better text readability and aesthetics */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        <div className="absolute top-5 left-5 z-20">
          <button
            onClick={(e) => { e.stopPropagation(); onToggleComparison(product); }}
            className={`p-3 rounded-2xl transition-all backdrop-blur-md border shadow-xl ${isComparing ? 'bg-blue-600 border-blue-600 text-white' : 'bg-white/70 dark:bg-gray-900/70 border-white/20 text-gray-700 dark:text-gray-300'}`}
          >
            {isComparing ? <Check className="w-4 h-4" /> : <ArrowLeftRight className="w-4 h-4" />}
          </button>
        </div>
        
        {product.condition && (
          <div className="absolute top-5 right-5 z-20">
            <span className="bg-blue-600/90 backdrop-blur-md text-white px-4 py-1.5 rounded-xl text-xs font-black shadow-lg">
              {product.condition}
            </span>
          </div>
        )}
      </div>
      <div className="p-7 text-right">
        <div className="flex justify-between items-start mb-2">
           <span className="text-[10px] font-black bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-lg uppercase tracking-wider">{product.category}</span>
        </div>
        <h3 className="text-xl font-black text-gray-900 dark:text-white mb-2 line-clamp-1 group-hover:text-blue-600 transition-colors">{product.name}</h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-6 line-clamp-2 font-medium">{product.description}</p>
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-3xl font-black text-blue-600">{product.price.toLocaleString()}</span>
            <span className="text-[10px] text-gray-400 font-bold">جنيه مصري</span>
          </div>
          <div className="bg-gray-900 dark:bg-white p-4 rounded-2xl text-white dark:text-gray-900 shadow-lg group-hover:bg-blue-600 group-hover:text-white transition-all transform group-hover:-translate-y-1">
            <ShoppingCart className="w-6 h-6" />
          </div>
        </div>
      </div>
    </div>
  );
};

const Products: React.FC<{ title: string; limit?: number; categoryFilter?: Category; onSelectProduct: (p: Product) => void; onToggleComparison: (p: Product) => void; comparisonItems: Product[] }> = ({ title, limit, categoryFilter, onSelectProduct, onToggleComparison, comparisonItems }) => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filtered = useMemo(() => {
    let res = MOCK_PRODUCTS;
    if (categoryFilter) res = res.filter(p => p.category === categoryFilter);
    else res = res.filter(p => p.category === Category.NEW || p.category === Category.USED);
    if (searchTerm) res = res.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()));
    return limit ? res.slice(0, limit) : res;
  }, [categoryFilter, searchTerm, limit]);

  return (
    <section id="products" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
          <div className="text-right">
             <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-2">{title}</h2>
             <div className="w-12 h-1.5 bg-blue-600 rounded-full"></div>
          </div>
          <div className="relative w-full md:w-96">
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input 
              type="text" 
              placeholder="ابحث عن جهازك..." 
              value={searchTerm} 
              onChange={(e) => setSearchTerm(e.target.value)} 
              className="w-full bg-white dark:bg-gray-800 border-none rounded-2xl py-4 pr-12 text-right outline-none dark:text-white shadow-sm focus:ring-2 focus:ring-blue-500 transition-all font-bold" 
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filtered.map(p => <ProductCard key={p.id} product={p} onSelect={onSelectProduct} onToggleComparison={onToggleComparison} isComparing={comparisonItems.some(item => item.id === p.id)} />)}
        </div>
      </div>
    </section>
  );
};

export default Products;
