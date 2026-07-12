import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { SiBehance } from 'react-icons/si';
import { useLanguage } from '../contexts/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <button
              onClick={() => scrollToSection('home')}
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6 block hover:scale-105 transition-transform duration-300"
            >
              Aboelyazed Hatem
            </button>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
              {t('footerDescription')}
            </p>
            <div className="flex space-x-4">
              {[
                { Icon: FaLinkedin, href: '#', color: 'hover:text-blue-400' },
                { Icon: FaGithub, href: '#', color: 'hover:text-gray-300' },
                { Icon: FaTwitter, href: '#', color: 'hover:text-blue-400' },
                { Icon: SiBehance, href: '#', color: 'hover:text-blue-500' }
              ].map(({ Icon, href, color }, index) => (
                <a
                  key={index}
                  href={href}
                  className={`w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-gray-400 ${color} transition-all duration-300 transform hover:scale-110 hover:bg-gray-700`}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">{t('quickLinks')}</h3>
            <ul className="space-y-3">
              {[
                { key: 'home', id: 'home' },
                { key: 'skills', id: 'skills' },
                { key: 'portfolio', id: 'portfolio' },
                { key: 'contact', id: 'contact' }
              ].map(({ key, id }) => (
                <li key={key}>
                  <button
                    onClick={() => scrollToSection(id)}
                    className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform"
                  >
                    {t(key)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">{t('services')}</h3>
            <ul className="space-y-3">
              {[
                t('webDev'),
                t('mobileAppsService'),
                t('uiDesignService'),
                t('techConsulting')
              ].map((service, index) => (
                <li key={index}>
                  <span className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer hover:translate-x-1 transform block">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 Aboelyazed Hatem. {t('allRightsReserved')}
          </p>
          <div className="flex items-center space-x-6 space-x-reverse">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
              {t('privacyPolicy')}
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
              {t('termsConditions')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};