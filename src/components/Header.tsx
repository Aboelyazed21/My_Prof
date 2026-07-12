import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { useLanguage } from '../contexts/LanguageContext';
import { ThemeToggle } from './ThemeToggle';
import { LanguageToggle } from './LanguageToggle';

// تعريف عناصر القائمة (تم إضافة Gallery هنا)
const navItems = [
  { key: 'home', id: 'home' },
  { key: 'skills', id: 'skills' },
  { key: 'portfolio', id: 'portfolio' },
  { key: 'certifications', url: 'https://aboelyazed21.github.io/Certf/' },
  { key: 'gallery', url: 'https://aboelyazed21.github.io/Gallary/' },
  { key: 'contact', id: 'contact' }
];

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, language } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg' 
        : 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className={`flex items-center ${language === 'ar' ? 'order-3' : 'order-1'}`}>
          <button
            onClick={() => scrollToSection('home')}
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
          >
            Aboelyazed Hatem
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className={`hidden md:flex items-center space-x-8 ${language === 'ar' ? 'space-x-reverse order-2' : 'order-2'}`}>
          {navItems.map(({ key, id, url }) => {
            const commonClassName = "text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-300 relative group";
            
            if (url) {
              return (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={commonClassName}
                >
                  {t(key)}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              );
            }

            return (
              <button
                key={key}
                onClick={() => scrollToSection(id as string)}
                className={commonClassName}
              >
                {t(key)}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
            );
          })}
        </nav>

        {/* Control Buttons */}
        <div className={`flex items-center space-x-4 ${language === 'ar' ? 'space-x-reverse order-1' : 'order-3'}`}>
          <ThemeToggle />
          <LanguageToggle />
          
          <button
            onClick={() => scrollToSection('contact')}
            className="hidden sm:block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            {t('contactMe')}
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-300"
          >
            {isMobileMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${
        isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-white dark:bg-gray-900 shadow-lg mx-4 mb-4 rounded-lg py-4 px-6">
          <div className="flex flex-col space-y-4">
            {navItems.map(({ key, id, url }) => {
              const mobileClassName = "text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-300 text-left";

              if (url) {
                return (
                  <a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={mobileClassName}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t(key)}
                  </a>
                );
              }

              return (
                <button
                  key={key}
                  onClick={() => scrollToSection(id as string)}
                  className={mobileClassName}
                >
                  {t(key)}
                </button>
              );
            })}
            
            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 self-start mt-4"
            >
              {t('contactMe')}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};