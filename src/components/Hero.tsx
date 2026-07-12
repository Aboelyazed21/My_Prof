import React from 'react';
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { SiBehance } from 'react-icons/si';
import { useLanguage } from '../contexts/LanguageContext';
import { AnimatedSection } from './AnimatedSection';
import profileImage from '../assets/profile.jpg';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full blur-3xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="relative container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Content */}
          <div className="space-y-8">
            <AnimatedSection animation="slideUp" delay={200}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="block text-gray-800 dark:text-gray-200 mb-2">
                  {t('hello')}
                </span>
                {/* <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {t('name')}
                </span> */}
              </h1>
            </AnimatedSection>

            <AnimatedSection animation="slideUp" delay={400}>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">
                {t('heroDescription')}
              </p>
            </AnimatedSection>

            <AnimatedSection animation="slideUp" delay={600}>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => scrollToSection('portfolio')}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 font-medium"
                >
                  {t('viewPortfolio')}
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 transform hover:scale-105 font-medium"
                >
                  {t('contactMe')}
                </button>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slideUp" delay={800}>
              <div className="flex items-center gap-6 pt-8">
                {[
                  { Icon: FiLinkedin, href: '#', color: 'hover:text-blue-600' },
                  { Icon: FiGithub, href: '#', color: 'hover:text-gray-900 dark:hover:text-white' },
                  { Icon: FiTwitter, href: '#', color: 'hover:text-blue-400' },
                  { Icon: SiBehance, href: '#', color: 'hover:text-blue-500' }
                ].map(({ Icon, href, color }, index) => (
                  <a
                    key={index}
                    href={href}
                    className={`w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 ${color} transition-all duration-300 transform hover:scale-110 hover:shadow-lg`}
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Profile Image */}
          <AnimatedSection animation="scaleUp" delay={300} className="lg:order-first">
            <div className="relative">
              <div className="w-80 h-80 mx-auto relative">
                {/* Gradient border */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full animate-spin-slow z-10"></div>
                
                {/* Inner circle background */}
                <div className="absolute inset-2 bg-white dark:bg-gray-900 rounded-full z-20"></div>

                {/* Profile image */}
                <div className="absolute inset-4 rounded-full overflow-hidden z-30">
                  <img
                    src={profileImage}
                    alt="Aboelyazed Hatem"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg animate-bounce z-40">
                  2+
                </div>
                <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg animate-bounce delay-500 z-40">
                  Years
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
