
import React from 'react';
import { Product } from '../types';
import { X, ArrowLeftRight, CheckCircle2, ShieldCheck, Smartphone, Cpu, Camera, Battery } from 'lucide-react';

interface ComparisonModalProps {
  items: Product[];
  onClose: () => void;
  onRemove: (product: Product) => void;
}

const ComparisonModal: React.FC<ComparisonModalProps> = ({ items, onClose, onRemove }) => {
  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-0 md:p-6 lg:p-12 animate-in fade-in duration-300">
      <div className="absolute inset-0 bg-black/95 backdrop-blur-xl" onClick={onClose}></div>
      
      <div className="relative bg-white dark:bg-gray-900 w-full max-w-7xl h-full md:h-auto md:max-h-[90vh] overflow-hidden rounded-none md:rounded-[3rem] shadow-2xl flex flex-col border border-gray-100 dark:border-gray-800 animate-in zoom-in duration-500">
        
        {/* Header */}
        <div className="p-6 md:p-10 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center bg-gray-50/50 dark:bg-gray-800/50">
          <div className="flex items-center gap-6">
            <div className="p-4 bg-blue-600 rounded-[1.5rem] text-white shadow-2xl shadow-blue-500/30">
              <ArrowLeftRight className="w-8 h-8" />
            </div>
            <div className="text-right">
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white leading-none mb-2">مقارنة المواصفات التفصيلية</h2>
              <p className="text-sm font-bold text-gray-500 uppercase tracking-[0.2em]">أجهزة TREND Store المختارة</p>
            </div>
          </div>
          <button onClick={onClose} className="p-4 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-2xl transition-all active:scale-90">
            <X className="w-8 h-8 text-gray-500 dark:text-gray-400" />
          </button>
        </div>

        {/* Comparison Table */}
        <div className="flex-1 overflow-auto p-4 md:p-10">
          <div className="min-w-[800px]">
            <table className="w-full text-right border-collapse table-fixed">
              <thead>
                <tr>
                  <th className="w-[200px] p-4"></th>
                  {items.map(item => (
                    <th key={item.id} className="p-6 text-center">
                      <div className="flex flex-col items-center gap-5">
                        <div className="relative group">
                          <img src={item.image} alt={item.name} className="h-44 object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.3)] group-hover:scale-105 transition-transform duration-500" />
                          <button 
                            onClick={() => onRemove(item)}
                            className="absolute -top-3 -left-3 bg-red-500 text-white rounded-full p-2 shadow-xl hover:scale-110 transition-transform z-10"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                        <div className="space-y-1">
                          <h3 className="font-black text-gray-900 dark:text-white text-xl leading-tight">{item.name}</h3>
                          <span className="text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest">{item.category}</span>
                        </div>
                      </div>
                    </th>
                  ))}
                  {[...Array(3 - items.length)].map((_, i) => (
                    <th key={i} className="p-6">
                      <div className="h-44 border-3 border-dashed border-gray-100 dark:border-gray-800 rounded-[2.5rem] flex items-center justify-center text-gray-300 font-black text-sm opacity-50">
                        جهاز إضافي
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                {/* Price Row */}
                <tr className="bg-blue-600/5 dark:bg-blue-400/5">
                  <td className="p-8 text-sm font-black text-blue-600 dark:text-blue-400">
                    <div className="flex items-center gap-3">
                      <span>السعر الحالي</span>
                    </div>
                  </td>
                  {items.map(item => (
                    <td key={item.id} className="p-8 text-center">
                      <div className="flex flex-col">
                        <span className="text-3xl font-black text-gray-900 dark:text-white">
                          {item.price.toLocaleString()}
                        </span>
                        <span className="text-xs font-bold text-gray-400">جنيه مصري</span>
                      </div>
                    </td>
                  ))}
                  {[...Array(3 - items.length)].map((_, i) => <td key={i} className="p-8"></td>)}
                </tr>

                {/* Technical Specs Rows */}
                {/* ونحن هنا نقوم بعرض المواصفات الكاملة */}
                <tr>
                  <td className="p-8 align-top">
                    <div className="flex items-center gap-3 text-gray-500 dark:text-gray-400 font-black text-sm">
                      <Smartphone className="w-5 h-5" />
                      المواصفات الكاملة
                    </div>
                  </td>
                  {items.map(item => (
                    <td key={item.id} className="p-8 align-top">
                      <ul className="space-y-4">
                        {item.specs?.map((spec, idx) => {
                          const [label, val] = spec.split(': ');
                          return (
                            <li key={idx} className="flex flex-col gap-1 border-b border-gray-50 dark:border-gray-800 pb-3 last:border-0">
                              <span className="text-[10px] font-black text-blue-500/60 uppercase tracking-widest">{label}</span>
                              <span className="text-xs font-bold text-gray-700 dark:text-gray-300 leading-relaxed">{val || label}</span>
                            </li>
                          );
                        })}
                      </ul>
                    </td>
                  ))}
                  {[...Array(3 - items.length)].map((_, i) => <td key={i} className="p-8"></td>)}
                </tr>

                {/* Condition & Box */}
                <tr className="bg-gray-50/50 dark:bg-gray-800/50">
                  <td className="p-8 text-sm font-black text-gray-500 dark:text-gray-400">الحالة والمرفقات</td>
                  {items.map(item => (
                    <td key={item.id} className="p-8 text-center space-y-4">
                      <div className="inline-block bg-green-500/10 text-green-600 px-4 py-2 rounded-xl text-xs font-black">
                        {item.condition || 'جديد'}
                      </div>
                      <div className="flex flex-wrap justify-center gap-2">
                        {item.boxContents?.slice(0, 3).map((content, idx) => (
                          <span key={idx} className="text-[10px] bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-700 px-2 py-1 rounded-lg text-gray-500">
                            {content}
                          </span>
                        ))}
                      </div>
                    </td>
                  ))}
                  {[...Array(3 - items.length)].map((_, i) => <td key={i} className="p-8"></td>)}
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer */}
        <div className="p-10 border-t border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/50 flex flex-col md:flex-row gap-8 items-center justify-between">
           <div className="flex items-center gap-4 text-green-600 dark:text-green-400">
             <ShieldCheck className="w-8 h-8" />
             <div className="text-right">
               <p className="font-black text-sm">ضمان TREND الذهبي</p>
               <p className="text-xs opacity-75">جميع الأجهزة مفحوصة تقنياً بالكامل</p>
             </div>
           </div>
           <button 
             onClick={onClose}
             className="w-full md:w-auto bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-12 py-5 rounded-[2rem] font-black text-lg shadow-2xl hover:scale-105 transition-transform"
           >
             إغلاق المقارنة
           </button>
        </div>
      </div>
    </div>
  );
};

export default ComparisonModal;
