
import React from 'react';
import { STORE_INFO } from '../constants';
import { Smartphone } from 'lucide-react';

interface HeroProps {
  onNavigate: (id: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-br from-cyan-950 to-gray-900 pt-20 pb-36">
      <div className="absolute inset-0 opacity-25 pointer-events-none">
        <div className="absolute -left-20 -top-20 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px]"></div>
        <div className="absolute -right-20 -bottom-20 w-[500px] h-[500px] bg-cyan-400/10 rounded-full blur-[120px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-right">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-in fade-in slide-in-from-right duration-1000">
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 px-5 py-2.5 rounded-2xl text-sm font-black mb-8">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
              </span>
              تريند ستور المعادي - خيارك الأول للمستعمل والجديد
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.2] mb-8">
              بنشتري ونبيع <br />
              <span className="text-cyan-400">بأفضل سعر</span> في السوق
            </h1>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl leading-relaxed">
             مش بس بنبيع، إحنا بنشتري موبايلك القديم بأعلى قيمة عادلة. وبنوفرلك أجهزة "كسر زيرو" بضمان حقيقي وفحص شامل لأكتر من 50 نقطة فنية.
            </p>
            <div className="flex flex-col sm:flex-row-reverse gap-5 justify-start">
              <button
                onClick={() => onNavigate('used_products')}
                className="bg-cyan-500 text-white hover:bg-cyan-600 px-12 py-5 rounded-[2rem] text-xl font-black transition-all transform hover:-translate-y-1 shadow-2xl shadow-cyan-500/30 flex items-center justify-center cursor-pointer"
              >
                تصفح الأجهزة المتاحة
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="bg-white/5 backdrop-blur-md border border-white/10 text-white hover:bg-white/10 px-12 py-5 rounded-[2rem] text-xl font-black transition-all transform hover:-translate-y-1 flex items-center justify-center cursor-pointer"
              >
                تقييم وبيع جهازي
              </button>
            </div>
          </div>
          
          <div className="hidden lg:block relative animate-in fade-in slide-in-from-left duration-1000">
            <div className="relative z-10 p-2">
              <div className="absolute inset-0 bg-cyan-500 rounded-[3.5rem] rotate-3 opacity-20 blur-xl"></div>
              <img
                src="https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&q=80&w=800"
                alt="Premium Smartphones"
                className="relative rounded-[3rem] w-full shadow-2xl border-4 border-white/10 hover:rotate-1 transition-transform duration-700"
              />
              
              <div className="absolute -bottom-8 -right-8 bg-white p-5 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-gray-100 flex items-center gap-5 min-w-[260px]">
                <div className="bg-cyan-50 p-4 rounded-3xl flex items-center justify-center shadow-inner">
                  <Smartphone className="w-8 h-8 text-cyan-600" />
                </div>
                <div className="text-right">
                  <p className="text-gray-400 text-xs font-bold mb-1">متاح حالياً</p>
                  <p className="text-gray-900 font-black text-xl tracking-tight">أجهزة كسر زيرو</p>
                </div>
              </div>

              <div className="absolute top-10 -left-10 bg-white/10 backdrop-blur-xl p-4 rounded-3xl border border-white/20 text-white flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-bold text-sm">أفضل حالة تقنية</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
