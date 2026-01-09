
import React from 'react';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "أحمد علي",
    role: "عميل دائم",
    content: "بصراحة أفضل مكان في المعادي تشتري منه موبايل مستعمل وأنت مطمن. الجهاز كأنه جديد تماماً والضمان اللي بيقدموه بيدي ثقة كبيرة جداً.",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=200",
    rating: 5
  },
  {
    id: 2,
    name: "سارة محمود",
    role: "خدمة صيانة",
    content: "غيرت شاشة آيفون في المحل والخدمة كانت ممتازة وسريعة جداً. الشاشة أصلية والألوان ممتازة، والمهندسين هناك محترفين جداً وبيحترموا الخصوصية.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
    rating: 5
  },
  {
    id: 3,
    name: "محمد حسن",
    role: "بيع وتبديل",
    content: "بعت موبايلي القديم وأخدت أعلى سعر مقارنة بمحلات تانية كتير. اشتريت S24 Ultra من عندهم وساعدوني في نقل كل البيانات بكل سهولة.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900/50 transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 dark:text-blue-400 font-bold tracking-widest uppercase mb-2">ثقة عملائنا</h2>
          <h3 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-4">ماذا يقولون عن TREND Store؟</h3>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div 
              key={t.id} 
              className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 group relative border border-gray-100 dark:border-gray-700 hover:-translate-y-2"
            >
              <div className="absolute top-8 left-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-12 h-12 text-blue-600 dark:text-blue-400" />
              </div>
              
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={t.avatar} 
                  alt={t.name} 
                  className="w-16 h-16 rounded-2xl object-cover ring-4 ring-blue-50 dark:ring-gray-700 group-hover:ring-blue-500/30 transition-all"
                />
                <div className="text-right">
                  <h4 className="font-black text-gray-900 dark:text-white text-lg">{t.name}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-bold">{t.role}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4 justify-end">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-right font-medium italic">
                "{t.content}"
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-blue-600/10 dark:bg-blue-400/5 px-6 py-3 rounded-2xl border border-blue-100 dark:border-blue-900/30">
            <span className="text-blue-700 dark:text-blue-400 font-black">أكثر من 5000+ عميل سعيد في المعادي</span>
            <div className="flex -space-x-2 space-x-reverse">
              {[1,2,3,4].map(i => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800 bg-gray-200 overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="user" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
