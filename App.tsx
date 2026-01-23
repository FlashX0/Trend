import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Products from './components/Products';
import Accessories from './components/Accessories';
import Contact from './components/Contact';
import ComparisonBar from './components/ComparisonBar';
import ComparisonModal from './components/ComparisonModal';
import NotificationSystem from './components/NotificationSystem';
import ProductModal from './components/ProductModal';
import Logo from './components/Logo';
import { STORE_INFO } from './constants';
import { Category, Product } from './types';
import { Facebook, Instagram, Phone, Wrench, Home, MessageSquare } from 'lucide-react';

const TiktokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z" />
  </svg>
);

const Footer: React.FC<{ onNavigate: (id: string) => void }> = ({ onNavigate }) => (
  <footer className="bg-gray-950 text-white py-20 border-t border-gray-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
        <div className="col-span-1 md:col-span-2 space-y-8">
          <Logo className="h-28 w-auto" inverted />
          <p className="text-gray-400 max-w-sm leading-relaxed text-lg text-right font-medium">
            وجهتك الأولى في المعادي لكل ما يخص الموبايلات. جودة، سعر، وأمانة هي شعارنا دائماً.
          </p>
          <div className="flex gap-5 justify-end md:justify-start flex-row-reverse">
            <a href={STORE_INFO.facebook} target="_blank" className="p-4 bg-gray-900 rounded-2xl hover:bg-blue-600 transition-all border border-white/5"><Facebook className="w-6 h-6" /></a>
            <a href={STORE_INFO.instagram} target="_blank" className="p-4 bg-gray-900 rounded-2xl hover:bg-pink-600 transition-all border border-white/5"><Instagram className="w-6 h-6" /></a>
            <a href={STORE_INFO.tiktok} target="_blank" className="p-4 bg-gray-900 rounded-2xl hover:bg-gray-700 transition-all border border-white/5"><TiktokIcon className="w-6 h-6" /></a>
          </div>
        </div>
        <div className="space-y-6 text-right">
          <h4 className="text-xl font-black border-r-4 border-blue-500 pr-4">روابط سريعة</h4>
          <ul className="space-y-4 text-gray-400 font-bold">
            <li><button onClick={() => onNavigate('hero')} className="hover:text-blue-400">الرئيسية</button></li>
            <li><button onClick={() => onNavigate('new_products')} className="hover:text-blue-400">أجهزة جديدة</button></li>
            <li><button onClick={() => onNavigate('used_products')} className="hover:text-blue-400">الأجهزة المستعملة</button></li>
            <li><button onClick={() => onNavigate('accessories')} className="hover:text-blue-400">الإكسسوارات</button></li>
            <li><button onClick={() => onNavigate('services')} className="hover:text-blue-400">الصيانة</button></li>
          </ul>
        </div>
        <div className="space-y-6 text-right">
          <h4 className="text-xl font-black border-r-4 border-blue-500 pr-4">تواصل مباشر</h4>
          <p className="text-gray-400 font-medium">{STORE_INFO.address}</p>
          <div className="flex flex-col items-end gap-2 text-blue-400 font-black">
            <a href={`tel:${STORE_INFO.phone}`}>{STORE_INFO.phone}</a>
            <a href={`tel:${STORE_INFO.phone2}`}>{STORE_INFO.phone2}</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

const HomeMaintenanceCTA: React.FC = () => (
  <section className="py-12 px-4">
    <div className="max-w-7xl mx-auto bg-gradient-to-l from-blue-700 to-indigo-800 rounded-[3rem] p-10 text-white shadow-2xl relative overflow-hidden">
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center text-right">
        <div>
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-xl text-sm font-black mb-4">
            <Home className="w-5 h-5" /> صيانة منزلية
          </div>
          <h2 className="text-4xl font-black mb-4">خدمة الصيانة لحد البيت!</h2>
          <p className="text-blue-100 mb-8 font-medium">فنيين تريند ستور هيجولك لحد عندك يصلحوا موبايلك في مكانك وبأعلى جودة.</p>
          <a href="https://wa.me/201147543787" target="_blank" className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-400 px-8 py-4 rounded-2xl font-black text-lg transition-all shadow-xl">
            <MessageSquare className="w-6 h-6" /> اطلب صيانة منزلية
          </a>
        </div>
        <div className="hidden lg:flex justify-center"><Wrench className="w-32 h-32 text-white/20 animate-pulse" /></div>
      </div>
    </div>
  </section>
);

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [comparisonItems, setComparisonItems] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showComparisonModal, setShowComparisonModal] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleComparison = (product: Product) => {
    setComparisonItems(prev => prev.find(p => p.id === product.id) ? prev.filter(p => p.id !== product.id) : prev.length < 3 ? [...prev, product] : prev);
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'new_products': return <Products title="أجهزة جديدة" categoryFilter={Category.NEW} onSelectProduct={setSelectedProduct} onToggleComparison={toggleComparison} comparisonItems={comparisonItems} />;
      case 'used_products': return <Products title="أجهزة مستعملة" categoryFilter={Category.USED} onSelectProduct={setSelectedProduct} onToggleComparison={toggleComparison} comparisonItems={comparisonItems} />;
      case 'accessories': return <Accessories onSelectProduct={setSelectedProduct} />;
      case 'services': return <> <Services /> <HomeMaintenanceCTA /> <Products title="صيانة" categoryFilter={Category.MAINTENANCE} onSelectProduct={setSelectedProduct} onToggleComparison={toggleComparison} comparisonItems={comparisonItems} /> </>;
      case 'contact': return <Contact />;
      default: return <> <Hero onNavigate={setActiveSection} /> <Services /> <Products title="أحدث العروض" limit={6} onSelectProduct={setSelectedProduct} onToggleComparison={toggleComparison} comparisonItems={comparisonItems} /> <Testimonials /> <Contact /> </>;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Header onNavigate={setActiveSection} activeSection={activeSection} isDarkMode={isDarkMode} toggleDarkMode={() => setIsDarkMode(!isDarkMode)} />
      <main className="flex-grow">{renderContent()}</main>
      <Footer onNavigate={setActiveSection} />
      <ComparisonBar items={comparisonItems} onRemove={toggleComparison} onCompare={() => setShowComparisonModal(true)} />
      {showComparisonModal && <ComparisonModal items={comparisonItems} onClose={() => setShowComparisonModal(false)} onRemove={toggleComparison} />}
      {selectedProduct && <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} onToggleComparison={toggleComparison} isComparing={comparisonItems.some(p => p.id === selectedProduct.id)} />}
      <NotificationSystem onNavigateToProduct={setSelectedProduct} />
    </div>
  );
};

export default App;