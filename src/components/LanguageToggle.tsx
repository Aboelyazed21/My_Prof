import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export const LanguageToggle: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="relative w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 font-bold text-sm"
      aria-label="Toggle language"
    >
      <span className="text-gray-700 dark:text-gray-300">
        {language === 'ar' ? 'EN' : 'عر'}
      </span>
    </button>
  );
};