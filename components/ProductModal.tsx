
import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Package, Smartphone, ShoppingCart, ArrowLeftRight, ChevronRight, ChevronLeft, ImageOff, Loader2, Zap } from 'lucide-react';
import { Product, Category } from '../types';
import { STORE_INFO } from '../constants';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
  onToggleComparison?: (product: Product) => void;
  isComparing?: boolean;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose, onToggleComparison, isComparing }) => {
  const [activeImage, setActiveImage] = useState(0);
  const [imgError, setImgError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  // تجميع كافة الصور المتاحة للجهاز
  const images = React.useMemo(() => {
    const all = [product.image, ...(product.gallery || [])];
    return all.filter(url => url && (url.startsWith('http') || url.startsWith('data:')));
  }, [product.image, product.gallery]);

  useEffect(() => {
    setIsLoading(true);
    setImgError(false);
  }, [activeImage, product.id]);

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setActiveImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setActiveImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-4 lg:p-8 animate-in fade-in duration-300">
      <div 
        className="absolute inset-0 bg-black/95 backdrop-blur-2xl"
        onClick={onClose}
      ></div>
      
      <div className="relative bg-[#0a0a0b] text-white w-full max-w-7xl h-full md:h-[90vh] overflow-hidden rounded-none md:rounded-[3rem] shadow-[0_0_100px_rgba(0,0,0,1)] border border-white/5 flex flex-col md:flex-row animate-in zoom-in duration-500">
        
        {/* زر الإغلاق */}
        <button 
          onClick={onClose}
          className="absolute top-6 left-6 z-[150] p-3 bg-white/5 hover:bg-white/10 text-white rounded-2xl transition-all active:scale-90 border border-white/10"
        >
          <X className="w-6 h-6" />
        </button>

        {/* القسم الأيمن (النصوص والمواصفات) */}
        <div className="w-full md:w-[60%] flex flex-col h-full overflow-y-auto p-8 sm:p-12 lg:p-16 text-right order-2 md:order-1 scrollbar-thin scrollbar-thumb-white/10">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <span className="bg-blue-600/20 text-blue-400 px-4 py-1 rounded-full text-xs font-black border border-blue-500/20 uppercase tracking-widest">
                {product.category}
              </span>
              {product.category === Category.USED && product.batteryHealth && (
                <span className="bg-yellow-500/20 text-yellow-400 px-4 py-1 rounded-full text-xs font-black border border-yellow-500/20 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 fill-yellow-400" />
                  نسبة البطارية: {product.batteryHealth}
                </span>
              )}
            </div>
            
            {onToggleComparison && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onToggleComparison(product);
                }}
                className={`flex items-center gap-2 px-6 py-2 rounded-xl font-black text-sm transition-all border shadow-lg ${
                  isComparing 
                  ? 'bg-blue-600 border-blue-600 text-white' 
                  : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10'
                }`}
              >
                <ArrowLeftRight className="w-4 h-4" />
                {isComparing ? 'مضاف للمقارنة' : 'أضف للمقارنة'}
              </button>
            )}
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 tracking-tight leading-none bg-gradient-to-l from-white to-white/60 bg-clip-text text-transparent">
            {product.name}
          </h2>
          
          <p className="text-gray-400 text-lg mb-12 leading-relaxed max-w-2xl">
            {product.description}
          </p>

          <div className="space-y-16">
            {product.specs && product.specs.length > 0 && (
              <div>
                <div className="flex items-center gap-4 mb-8 border-r-4 border-blue-600 pr-4">
                   <h3 className="text-2xl font-black flex items-center gap-3">
                    المواصفات التقنية
                    <Smartphone className="w-6 h-6 text-blue-500" />
                  </h3>
                </div>
                <div className="grid grid-cols-1 gap-6">
                  {product.specs.map((spec, idx) => {
                    const [label, val] = spec.split(': ');
                    return (
                      <div key={idx} className="bg-white/5 p-4 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-all flex flex-col gap-1">
                        <span className="text-[10px] font-black text-blue-400/80 uppercase tracking-widest">{label}</span>
                        <span className="text-gray-200 font-bold text-sm leading-relaxed">{val || label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {product.boxContents && product.boxContents.length > 0 && (
              <div>
                <div className="flex items-center gap-4 mb-8 border-r-4 border-orange-600 pr-4">
                  <h3 className="text-2xl font-black flex items-center gap-3">
                    محتويات العلبة
                    <Package className="w-6 h-6 text-orange-500" />
                  </h3>
                </div>
                <div className="flex flex-wrap gap-4">
                  {product.boxContents.map((item, idx) => (
                    <div 
                      key={idx} 
                      className="bg-white/5 border border-white/10 px-6 py-3 rounded-2xl text-sm font-black text-gray-200 hover:border-orange-500/50 hover:bg-orange-500/5 transition-all"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="mt-20 pt-10 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-10">
            <div className="flex flex-col items-end">
              <span className="text-gray-500 text-xs font-black uppercase tracking-widest mb-2">السعر الحالي</span>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-black text-blue-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                  {product.price.toLocaleString()}
                </span>
                <span className="text-xl font-bold text-gray-500">ج.م</span>
              </div>
            </div>

            <a
              href={`https://wa.me/${STORE_INFO.phone.replace(/[^0-9]/g, '')}?text=أريد الاستفسار عن ${product.name}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-green-600 hover:bg-green-500 text-white px-12 py-6 rounded-[2rem] font-black text-xl flex items-center justify-center gap-4 shadow-[0_20px_40px_rgba(22,163,74,0.3)] transition-all hover:-translate-y-2 active:scale-95"
            >
              <span>طلب عبر واتساب</span>
              <ShoppingCart className="w-7 h-7" />
            </a>
          </div>
        </div>

        {/* القسم الأيسر (الألبوم وعرض الصور) */}
        <div className="w-full md:w-[40%] bg-[#0d0d0f] relative flex flex-col items-center justify-center p-8 lg:p-12 border-b md:border-b-0 md:border-r border-white/5 order-1 md:order-2">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-600/10 via-transparent to-transparent opacity-50"></div>
          
          {/* عرض الصورة الرئيسية */}
          <div className="relative w-full aspect-square flex items-center justify-center mb-8">
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <Loader2 className="w-12 h-12 text-blue-600 animate-spin" />
              </div>
            )}

            {imgError ? (
              <div className="text-center opacity-20">
                <ImageOff className="w-32 h-32 mx-auto mb-4" />
                <p className="font-black text-xl">الصورة غير متوفرة</p>
              </div>
            ) : (
              <>
                <img 
                  src={images[activeImage]} 
                  alt={product.name} 
                  className={`
                    max-w-[90%] max-h-[90%] object-contain drop-shadow-[0_35px_60px_rgba(0,0,0,0.8)]
                    transition-all duration-700 ease-out
                    ${isLoading ? 'scale-90 opacity-0' : 'scale-100 opacity-100'}
                  `}
                  onLoad={() => setIsLoading(false)}
                  onError={() => { setImgError(true); setIsLoading(false); }}
                />
                
                {/* أسهم التنقل - جعلها أكثر وضوحاً */}
                {images.length > 1 && (
                  <div className="absolute inset-x-[-20px] top-1/2 -translate-y-1/2 flex justify-between px-4 z-40 pointer-events-none">
                    <button 
                      onClick={prevImage}
                      className="pointer-events-auto p-4 bg-white/10 hover:bg-blue-600 text-white rounded-full transition-all border border-white/20 shadow-2xl active:scale-90"
                      aria-label="Previous image"
                    >
                      <ChevronRight className="w-8 h-8" />
                    </button>
                    <button 
                      onClick={nextImage}
                      className="pointer-events-auto p-4 bg-white/10 hover:bg-blue-600 text-white rounded-full transition-all border border-white/20 shadow-2xl active:scale-90"
                      aria-label="Next image"
                    >
                      <ChevronLeft className="w-8 h-8" />
                    </button>
                  </div>
                )}
              </>
            )}
          </div>

          {/* ألبوم الصور المصغرة */}
          {images.length > 1 && (
            <div className="w-full flex justify-center gap-4 overflow-x-auto py-6 no-scrollbar z-30">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`
                    w-20 h-20 rounded-2xl border-2 transition-all flex-shrink-0 overflow-hidden relative group
                    ${activeImage === idx ? 'border-blue-500 scale-110 shadow-lg shadow-blue-500/40 ring-4 ring-blue-500/20' : 'border-white/5 opacity-40 hover:opacity-100'}
                  `}
                >
                  <img src={img} className="w-full h-full object-cover" alt={`Gallery ${idx}`} />
                  {activeImage === idx && (
                    <div className="absolute inset-0 bg-blue-500/10 flex items-center justify-center">
                       <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    </div>
                  )}
                </button>
              ))}
            </div>
          )}

          {/* معلومات الحالة */}
          {product.condition && (
            <div className="mt-4 bg-blue-600/10 text-blue-400 px-6 py-2 rounded-2xl font-black text-sm border border-blue-500/20">
              {product.condition}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
