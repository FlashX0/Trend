
import React from 'react';
import { MapPin, Phone, MessageSquare, Clock, ExternalLink } from 'lucide-react';
import { STORE_INFO } from '../constants';

const Contact: React.FC = () => {
  const MAP_URL = "https://maps.app.goo.gl/NdD5Vq9TPj8Yc5da7";

  return (
    <section id="contact" className="py-24 bg-white dark:bg-gray-800 transition-colors duration-300 text-right">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="animate-in slide-in-from-right duration-700">
            <h2 className="text-blue-600 dark:text-blue-400 font-bold tracking-widest uppercase mb-2">تواصل معنا</h2>
            <h3 className="text-4xl font-black text-gray-900 dark:text-white mb-8">شرفنا بالزيارة في الفرع</h3>
            
            <div className="space-y-10">
              {/* العنوان */}
              <div className="flex flex-row-reverse gap-6 group">
                <div className="bg-blue-50 dark:bg-gray-700 p-5 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shrink-0 self-start shadow-sm group-hover:shadow-blue-500/50">
                  <MapPin className="w-8 h-8" />
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl font-black text-gray-900 dark:text-white mb-1">العنوان</h4>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-bold text-lg">{STORE_INFO.address}</p>
                </div>
              </div>
              
              {/* أرقام التليفون - تم تعديل الأيقونة لتصبح متساوية مع الباقي */}
              <div className="flex flex-row-reverse gap-6 group">
                <div className="bg-blue-50 dark:bg-gray-700 p-5 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shrink-0 self-start shadow-sm group-hover:shadow-blue-500/50">
                  <Phone className="w-8 h-8 transform group-hover:rotate-12 transition-transform" />
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl font-black text-gray-900 dark:text-white mb-3">أرقام التليفون</h4>
                  <div className="space-y-2">
                    <a href={`tel:${STORE_INFO.phone}`} className="block text-gray-600 dark:text-gray-300 text-2xl font-black hover:text-blue-600 dark:hover:text-blue-400 transition-colors tracking-widest">
                      {STORE_INFO.phone}
                    </a>
                    <a href={`tel:${STORE_INFO.phone2}`} className="block text-gray-600 dark:text-gray-300 text-2xl font-black hover:text-blue-600 dark:hover:text-blue-400 transition-colors tracking-widest">
                      {STORE_INFO.phone2}
                    </a>
                    <a href={`tel:${STORE_INFO.phone3}`} className="block text-gray-600 dark:text-gray-300 text-2xl font-black hover:text-blue-600 dark:hover:text-blue-400 transition-colors tracking-widest">
                      {STORE_INFO.phone3}
                    </a>
                  </div>
                </div>
              </div>

              {/* مواعيد العمل */}
              <div className="flex flex-row-reverse gap-6 group">
                <div className="bg-blue-50 dark:bg-gray-700 p-5 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shrink-0 self-start shadow-sm group-hover:shadow-blue-500/50">
                  <Clock className="w-8 h-8" />
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl font-black text-gray-900 dark:text-white mb-1">مواعيد العمل</h4>
                  <p className="text-gray-600 dark:text-gray-400 font-bold text-lg leading-relaxed">
                    يومياً من الساعة 12 ظهراً حتى 12 مساءً
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-8 bg-blue-900 dark:bg-cyan-950 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden text-right border border-white/5">
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
              <h4 className="text-2xl font-bold mb-4">عندك سؤال سريع؟</h4>
              <p className="text-blue-200 dark:text-cyan-200 mb-8 font-medium">كلمنا واتساب فوراً وهنرد عليك في أسرع وقت بخصوص الأسعار أو حجز قطع الغيار.</p>
              <a
                href={STORE_INFO.whatsapp}
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-2xl font-black text-lg transition-all shadow-xl hover:-translate-y-1 active:scale-95"
              >
                <MessageSquare className="w-6 h-6" />
                إرسال رسالة واتساب
              </a>
            </div>
          </div>

          {/* الخريطة المعنوية */}
          <div className="h-[600px] w-full bg-blue-50 dark:bg-gray-900 rounded-[3rem] overflow-hidden shadow-2xl relative group border-4 border-white dark:border-gray-700 animate-in slide-in-from-left duration-700">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#2563eb_1px,transparent_1px)] dark:bg-[radial-gradient(#0891b2_1px,transparent_1px)] [background-size:20px_20px]"></div>
            </div>
            
            <div className="absolute inset-0 flex items-center justify-center p-12 text-center">
               <div className="relative z-10">
                  <div className="bg-white dark:bg-gray-800 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform duration-500 border border-gray-100 dark:border-gray-700">
                    <MapPin className="w-12 h-12 text-blue-600 dark:text-cyan-400" />
                  </div>
                  <h4 className="text-3xl font-black text-gray-900 dark:text-white mb-2">موقع تريند ستور</h4>
                  <p className="text-gray-500 dark:text-gray-400 max-w-xs mx-auto mb-8 font-bold text-lg">
                    اضغط بالأسفل لفتح الموقع مباشرة على خرائط جوجل والوصول إلينا بسهولة
                  </p>
                  <a 
                    href={MAP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-blue-600 dark:bg-cyan-600 text-white px-10 py-5 rounded-[2rem] font-black text-xl shadow-xl hover:bg-blue-700 dark:hover:bg-cyan-700 transition-all transform hover:-translate-y-1 active:scale-95"
                  >
                    <span>فتح الموقع على الخريطة</span>
                    <ExternalLink className="w-6 h-6" />
                  </a>
               </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-blue-100/50 dark:from-cyan-900/30 to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
