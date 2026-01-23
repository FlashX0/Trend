
import React, { useState, useEffect, useCallback } from 'react';
import { X, Bell, Zap, Gift, Info, CheckCircle2 } from 'lucide-react';
import { AppNotification, Product } from '../types';
import { MOCK_PRODUCTS } from '../constants';

interface NotificationSystemProps {
  onNavigateToProduct: (product: Product) => void;
}

const NotificationSystem: React.FC<NotificationSystemProps> = ({ onNavigateToProduct }) => {
  const [activeNotification, setActiveNotification] = useState<AppNotification | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const triggerNotification = useCallback((notification: AppNotification) => {
    setActiveNotification(notification);
    setIsVisible(true);
    
    if (notification.duration !== 0) {
      setTimeout(() => {
        setIsVisible(false);
      }, notification.duration || 6000);
    }
  }, []);

  useEffect(() => {
    // محاكاة تنبيهات العروض العشوائية
    const deals = MOCK_PRODUCTS.filter(p => p.isDeal);
    
    const showRandomDeal = () => {
      if (deals.length === 0) return;
      
      const randomProduct = deals[Math.floor(Math.random() * deals.length)];
      triggerNotification({
        id: Math.random().toString(),
        title: 'عرض محدود! 🔥',
        message: `جهاز ${randomProduct.name} متوفر دلوقتي بسعر ${randomProduct.price.toLocaleString()} ج.م. ${randomProduct.dealText || ''}`,
        type: 'deal',
        productId: randomProduct.id,
        duration: 7000
      });
    };

    // التنبيه الأول بعد 10 ثواني
    const firstTimer = setTimeout(showRandomDeal, 10000);
    
    // تنبيهات دورية كل دقيقتين
    const interval = setInterval(showRandomDeal, 120000);

    return () => {
      clearTimeout(firstTimer);
      clearInterval(interval);
    };
  }, [triggerNotification]);

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsVisible(false);
  };

  const handleClick = () => {
    if (activeNotification?.productId) {
      const product = MOCK_PRODUCTS.find(p => p.id === activeNotification.productId);
      if (product) {
        onNavigateToProduct(product);
      }
    }
    setIsVisible(false);
  };

  if (!activeNotification) return null;

  return (
    <div 
      className={`fixed bottom-24 right-6 z-[65] w-[calc(100%-3rem)] sm:w-[380px] transition-all duration-500 transform ${
        isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'
      }`}
    >
      <div 
        onClick={handleClick}
        className="glass-effect dark:bg-gray-800/90 border border-white/20 dark:border-gray-700/50 rounded-[2rem] p-5 shadow-[0_20px_50px_rgba(0,0,0,0.1)] flex items-start gap-4 cursor-pointer hover:scale-[1.02] transition-transform group overflow-hidden relative"
      >
        {/* Progress bar background */}
        <div className="absolute bottom-0 right-0 h-1 bg-blue-500/20 w-full">
           <div className={`h-full bg-blue-500 transition-all duration-[7000ms] ease-linear ${isVisible ? 'w-full' : 'w-0'}`}></div>
        </div>

        <div className={`shrink-0 p-3 rounded-2xl ${
          activeNotification.type === 'deal' ? 'bg-orange-100 text-orange-600 dark:bg-orange-500/20 dark:text-orange-400' :
          activeNotification.type === 'success' ? 'bg-green-100 text-green-600 dark:bg-green-500/20 dark:text-green-400' :
          'bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400'
        }`}>
          {activeNotification.type === 'deal' ? <Zap className="w-6 h-6 fill-current" /> :
           activeNotification.type === 'success' ? <CheckCircle2 className="w-6 h-6" /> :
           <Bell className="w-6 h-6" />}
        </div>

        <div className="flex-1 text-right">
          <h4 className="font-black text-gray-900 dark:text-white mb-1">{activeNotification.title}</h4>
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed line-clamp-2">
            {activeNotification.message}
          </p>
        </div>

        <button 
          onClick={handleClose}
          className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full text-gray-400 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Floating background icon decoration */}
        <div className="absolute -right-4 -bottom-4 opacity-[0.03] rotate-12 group-hover:rotate-0 transition-transform duration-700 pointer-events-none">
          <Gift className="w-24 h-24" />
        </div>
      </div>
    </div>
  );
};

export default NotificationSystem;
