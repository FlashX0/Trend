
import React, { useState } from 'react';
import { BadgeCheck, ShieldCheck, Settings, ShoppingBag, RefreshCcw } from 'lucide-react';

const Services: React.FC = () => {
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  const services = [
    {
      title: 'بيع وشراء المستعمل',
      desc: 'نشتري جهازك القديم بأعلى سعر في السوق بعد فحص فني عادل وسريع. نوفر لك تشكيلة واسعة من أجهزة "كسر زيرو" مضمونة.',
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=800',
      icon: <RefreshCcw className="w-8 h-8" />,
      alt: 'Smartphones collection'
    },
    {
      title: 'مركز صيانة معتمد',
      desc: 'فريق متخصص لإصلاح كافة أعطال الهاردوير والسوفت وير بقطع غيار أصلية 100%. صيانة سريعة في أقل من 45 دقيقة.',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800',
      icon: <Settings className="w-8 h-8" />,
      alt: 'Phone repair'
    },
    {
      title: 'إكسسوارات مميزة',
      desc: 'أفخم الجرابات، سماعات أصلية، وشواحن معتمدة من أشهر الماركات العالمية لحماية هاتفك وزيادة أناقته.',
      image: 'https://images.unsplash.com/photo-1603919306384-993d5622818d?auto=format&fit=crop&q=80&w=800',
      icon: <ShoppingBag className="w-8 h-8" />,
      alt: 'Phone accessories'
    },
    {
      title: 'ضمان TREND الذهبي',
      desc: 'نقدم ضماناً فعلياً على الأجهزة المستعملة يصل لـ 6 أشهر. ثقتك هي رأس مالنا، لذا نضمن لك حق الاسترجاع الفوري.',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800',
      icon: <ShieldCheck className="w-8 h-8" />,
      alt: 'Guarantee and trust'
    }
  ];

  const handleImageError = (index: number) => {
    setImageErrors(prev => ({ ...prev, [index]: true }));
  };

  return (
    <section id="services" className="py-24 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 dark:text-blue-400 font-bold tracking-widest uppercase mb-2">خدماتنا</h2>
          <h3 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white">لماذا تختار TREND Store؟</h3>
          <div className="w-20 h-1.5 bg-blue-600 dark:bg-blue-400 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group rounded-[2.5rem] border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-500/50 transition-all hover:shadow-2xl overflow-hidden flex flex-col h-full bg-white dark:bg-gray-900/40"
            >
              <div className="relative h-56 overflow-hidden bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                {imageErrors[idx] ? (
                  <div className="flex flex-col items-center justify-center text-blue-600/30 dark:text-blue-400/20">
                    <div className="p-4 bg-gray-200 dark:bg-gray-700 rounded-full mb-2">
                       {service.icon}
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest opacity-50">IMAGE UNAVAILABLE</span>
                  </div>
                ) : (
                  <img 
                    src={service.image} 
                    alt={service.alt} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={() => handleImageError(idx)}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-4 right-4">
                   <div className="bg-blue-600 text-white p-2.5 rounded-xl shadow-lg border border-white/10 group-hover:scale-110 transition-transform">
                      <BadgeCheck className="w-5 h-5" />
                   </div>
                </div>
              </div>
              
              <div className="p-8 text-right flex flex-col flex-grow">
                <div className="flex items-center justify-end gap-3 mb-4">
                  <h4 className="text-xl font-black text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h4>
                  <div className="text-blue-600 dark:text-blue-400 opacity-20 group-hover:opacity-100 transition-opacity">
                    {/* Fixed: Use React.ReactElement<any> to resolve TypeScript overload mismatch for className prop */}
                    {React.cloneElement(service.icon as React.ReactElement<any>, { className: 'w-6 h-6' })}
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm md:text-base flex-grow font-medium">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
