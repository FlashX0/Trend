
import React from 'react';
import { Product } from '../types';
import { X, ArrowLeftRight, Plus } from 'lucide-react';

interface ComparisonBarProps {
  items: Product[];
  onRemove: (product: Product) => void;
  onCompare: () => void;
}

const ComparisonBar: React.FC<ComparisonBarProps> = ({ items, onRemove, onCompare }) => {
  if (items.length === 0) return null;

  const handleAddClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const element = document.getElementById('products');
    if (element) {
      // Scroll slightly higher to see the header
      const yOffset = -100; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[70] w-[95%] max-w-2xl animate-in slide-in-from-bottom-8 duration-500">
      <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-2xl border border-blue-100 dark:border-gray-700 rounded-[2.5rem] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] p-4 flex flex-col sm:flex-row items-center gap-4">
        
        {/* Selected Items List */}
        <div className="flex-1 flex items-center gap-3 overflow-x-auto no-scrollbar w-full">
          {items.map(item => (
            <div key={item.id} className="relative group shrink-0">
              <div className="w-14 h-14 bg-gray-50 dark:bg-gray-800 rounded-2xl p-2 border border-gray-100 dark:border-gray-700 group-hover:border-blue-500 transition-all overflow-hidden">
                <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
              </div>
              <button 
                onClick={(e) => { e.stopPropagation(); onRemove(item); }}
                className="absolute -top-2 -left-2 bg-red-500 text-white rounded-full p-1.5 shadow-lg hover:scale-110 transition-transform z-10"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
          ))}
          
          {items.length < 3 && (
            <button 
              onClick={handleAddClick}
              type="button"
              className="w-14 h-14 rounded-2xl border-2 border-dashed border-gray-200 dark:border-gray-700 flex items-center justify-center text-blue-500 hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all active:scale-90 cursor-pointer"
              title="أضف جهاز آخر للمقارنة"
            >
              <Plus className="w-6 h-6" />
            </button>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 shrink-0">
          <button 
            onClick={onCompare}
            disabled={items.length < 2}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-8 py-3.5 rounded-2xl font-black text-sm flex items-center gap-2 transition-all shadow-lg shadow-blue-500/20 active:scale-95"
          >
            <ArrowLeftRight className="w-4 h-4" />
            قارن الآن ({items.length})
          </button>
          
          <div className="hidden sm:block text-right pr-4 border-r border-gray-100 dark:border-gray-700">
             <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">المقارنة</p>
             <p className="text-xs font-bold text-gray-900 dark:text-white">أقصى 3 أجهزة</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonBar;
