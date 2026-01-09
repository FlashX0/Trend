
import React, { useState, useMemo } from 'react';
import { MOCK_PRODUCTS } from '../constants';
import { Category, Product } from '../types';
import { ShoppingCart, Search, Loader2, ArrowLeftRight } from 'lucide-react';

const Accessories: React.FC<{ onSelectProduct: (product: Product) => void }> = ({ onSelectProduct }) => {
  const [activeTab, setActiveTab] = useState('ALL');
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    let res = MOCK_PRODUCTS.filter(p => p.category === Category.ACCESSORIES || p.category === Category.CABLES);
    
    if (activeTab === 'CHARGERS') {
      res = res.filter(p => p.name.toLowerCase().includes('charger') || p.name.toLowerCase().includes('zolo') || p.name.toLowerCase().includes('nano'));
    } else if (activeTab === 'HEADPHONES') {
      res = res.filter(p => p.name.toLowerCase().includes('soundcore') || p.name.toLowerCase().includes('headphones') || p.name.toLowerCase().includes('liberty'));
    } else if (activeTab === 'CABLES') {
      res = res.filter(p => p.category === Category.CABLES || p.name.toLowerCase().includes('cable') || p.name.toLowerCase().includes('powerline'));
    }

    if (search) res = res.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));
    return res;
  }, [activeTab, search]);

  return (
    <section id="accessories" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 text-right">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 dark:text-white">إكسسوارات تريند الأصلية</h2>
          <p className="text-gray-500 font-bold text-lg">كل اللي جهازه محتاجه من أنكر وساوند كور، بضمان TREND الذهبي.</p>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto mt-6 rounded-full"></div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {[
            { id: 'ALL', label: 'الكل' },
            { id: 'CHARGERS', label: 'شواحن' },
            { id: 'HEADPHONES', label: 'سماعات' },
            { id: 'CABLES', label: 'كابلات' }
          ].map(tab => (
            <button 
              key={tab.id} 
              onClick={() => setActiveTab(tab.id)} 
              className={`px-10 py-4 rounded-2xl font-black transition-all shadow-md text-lg ${activeTab === tab.id ? 'bg-blue-600 text-white shadow-blue-500/40 translate-y-[-2px]' : 'bg-gray-100 dark:bg-gray-900 dark:text-gray-400 hover:bg-gray-200 hover:dark:bg-gray-700'}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filtered.map(item => (
            <div 
              key={item.id} 
              onClick={() => onSelectProduct(item)} 
              className="group bg-gray-50 dark:bg-gray-900 rounded-[2.5rem] overflow-hidden border border-transparent hover:border-blue-500/30 transition-all cursor-pointer shadow-sm hover:shadow-2xl"
            >
              <div className="aspect-square overflow-hidden bg-gray-200">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
              </div>
              <div className="p-7">
                <div className="flex justify-between items-start mb-2">
                   <span className="text-[10px] font-black bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-lg uppercase">{item.category}</span>
                </div>
                <h4 className="font-black text-xl dark:text-white mb-4 line-clamp-1 group-hover:text-blue-600 transition-colors">{item.name}</h4>
                <div className="flex items-center justify-between">
                   <div className="flex flex-col">
                     <span className="text-2xl font-black text-blue-600">{item.price.toLocaleString()}</span>
                     <span className="text-[10px] text-gray-400 font-bold uppercase">ج.م</span>
                   </div>
                   <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-lg group-hover:bg-blue-600 group-hover:text-white transition-all transform group-hover:-translate-y-1">
                    <ShoppingCart className="w-5 h-5" />
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accessories;
