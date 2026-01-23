
import React from 'react';
import { Menu, X, MessageCircle, DollarSign, Moon, Sun } from 'lucide-react';
import { STORE_INFO } from '../constants';
import Logo from './Logo';

interface HeaderProps {
  onNavigate: (id: string) => void;
  activeSection: string;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, activeSection, isDarkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  // قائمة الروابط الكاملة (للموبايل)
  const allNavLinks = [
    { name: 'الرئيسية', id: 'hero' },
    { name: 'أجهزة جديدة', id: 'new_products' },
    { name: 'الأجهزة المستعملة', id: 'used_products' },
    { name: 'الإكسسوارات', id: 'accessories' },
    { name: 'الصيانة', id: 'services' },
    { name: 'اتصل بنا', id: 'contact' },
  ];

  // تصفية "الرئيسية" لنسخة الكمبيوتر فقط
  const desktopNavLinks = allNavLinks.filter(link => link.id !== 'hero');

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
    if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">
          
          {/* Logo Section - Clicking it scrolls to top */}
          <div className="flex items-center gap-6 xl:gap-10">
            <button 
              className="flex items-center cursor-pointer py-1 focus:outline-none transform active:scale-95 transition-transform shrink-0" 
              onClick={() => handleLinkClick('hero')}
              aria-label="TREND Store Home"
            >
              <Logo className="h-12 md:h-16 lg:h-20" inverted={isDarkMode} />
            </button>

            {/* Navigation Links - Desktop (Without Home) */}
            <div className="hidden lg:flex items-center gap-x-5 xl:gap-x-8">
              {desktopNavLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`font-black transition-all duration-300 text-sm xl:text-base relative group whitespace-nowrap py-2 ${
                    activeSection === link.id 
                      ? 'text-cyan-600 dark:text-cyan-400' 
                      : 'text-gray-500 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400'
                  }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-cyan-500 rounded-full transition-transform duration-300 ${activeSection === link.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-50'}`}></span>
                </button>
              ))}
            </div>
          </div>

          {/* Right Side Tools - Enhanced Spacing */}
          <div className="hidden lg:flex items-center">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleDarkMode}
              className={`p-3 rounded-2xl transition-all duration-500 hover:rotate-12 border ${
                isDarkMode 
                ? 'bg-gray-800 border-gray-700 text-yellow-400' 
                : 'bg-gray-50 border-gray-200 text-gray-700'
              }`}
            >
              <div className="theme-icon-animate">
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </div>
            </button>
            
            {/* Space between toggle and CTAs */}
            <div className="w-8 xl:w-12"></div>

            <div className="flex items-center gap-3">
              <a
                href={STORE_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 px-5 py-2.5 rounded-2xl font-black text-xs xl:text-sm flex items-center gap-2 hover:bg-black dark:hover:bg-white transition-all shadow-sm whitespace-nowrap"
              >
                <DollarSign className="w-4 h-4 text-cyan-500" />
                بيع موبايلك
              </a>
              <a
                href={STORE_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-cyan-500 text-white px-5 py-2.5 rounded-2xl font-black text-xs xl:text-sm flex items-center gap-2 hover:bg-cyan-600 transition-all shadow-lg whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4" />
                واتساب
              </a>
            </div>
          </div>

          {/* Mobile UI Controls */}
          <div className="lg:hidden flex items-center gap-3">
            <button
              onClick={toggleDarkMode}
              className={`p-2.5 rounded-xl transition-all ${
                isDarkMode ? 'bg-gray-800 text-yellow-400 border border-gray-700' : 'bg-gray-50 text-gray-600 border border-gray-200'
              }`}
            >
              <div className="theme-icon-animate">
                {isDarkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
              </div>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900 dark:text-white p-2"
            >
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer - Includes Home Button */}
      {isOpen && (
        <div className="lg:hidden bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-4 pb-12 space-y-2">
            {allNavLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`block w-full px-4 py-4 text-right font-black rounded-xl transition-all ${
                  activeSection === link.id 
                    ? 'bg-cyan-50 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400' 
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                }`}
              >
                {link.name}
              </button>
            ))}
            <div className="pt-8 flex flex-col gap-4 px-2">
              <a
                href={STORE_INFO.whatsapp}
                className="bg-gray-950 dark:bg-white text-white dark:text-gray-950 p-5 rounded-2xl font-black text-center shadow-xl"
              >
                بيع موبايلك الآن
              </a>
              <a
                href={STORE_INFO.whatsapp}
                className="bg-cyan-500 text-white p-5 rounded-2xl font-black text-center shadow-xl"
              >
                تواصل واتساب
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
