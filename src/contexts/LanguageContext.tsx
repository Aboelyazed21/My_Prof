import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LanguageContextType {
  language: 'ar' | 'en';
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

const translations = {
  ar: {
    // Navigation
    home: 'Home',
    skills: 'Skills',
    portfolio: 'Portfolio',
    contact: 'Contact',
    contactMe: 'Contact Me',

    // Hero Section
    hello: 'م. أبواليزيد حاتم',
    heroDescription: 'مطور ومصمم مواقع محترف بخبرة تزيد عن عامين في إنشاء تجارب رقمية مبتكرة وعالية الأداء تجمع بين الإبداع والوظائف.',
    viewPortfolio: 'عرض الأعمال',

    // Skills Section
    skillsTitle: 'My Skills & Experience',
    skillsDescription: 'A diverse set of technical and creative skills acquired throughout my professional journey.',
    frontEndDev: 'Front-End Development',
    frontEndDesc: 'Advanced experience in HTML5, CSS3, JavaScript, and modern frameworks like React and Vue.js.',
    backEndDev: 'Back-End Development',
    backEndDesc: 'Building robust systems using Node.js, Express, PHP, and various databases.',
    uiDesign: 'UI Design',
    uiDesignDesc: 'Designing attractive and user-friendly interfaces with a strong focus on user experience.',
    technicalSkills: 'My Technical Skills',

    // Portfolio Section
    portfolioTitle: 'My Portfolio',
    portfolioDescription: 'A curated selection of projects I have developed and designed.',
    all: 'All',
    webDevelopment: 'Web Development',
    mobileApps: 'Mobile Applications',
    uiDesignCategory: 'UI Design',
    viewMore: 'View More Projects',

    // Projects
    ecommercePlatform: 'E-Commerce Platform',
    ecommerceDesc: 'A full-featured online shopping platform with secure payments and advanced inventory management.',
    foodDeliveryApp: 'Food Delivery App',
    foodDeliveryDesc: 'A food ordering and delivery app with real-time tracking and multiple payment options.',
    analyticsBoard: 'Analytics Dashboard',
    analyticsBoardDesc: 'A modern dashboard UI for displaying business intelligence and data analytics in a visual way.',
    educationalPlatform: 'Educational Platform',
    educationalDesc: 'A complete online learning platform with course management and interactive content.',
    fitnessApp: 'Fitness App',
    fitnessDesc: 'An app to track workouts and nutrition with advanced performance analytics.',
    bankingApp: 'Banking App',
    bankingDesc: 'UI design for a banking app with focus on usability and security.',

    // Contact Section
    contactTitle: 'Contact Me',
    contactDescription: 'Have a project to discuss? I am excited to hear your ideas and collaborate with you',
    sendMessage: 'Send Message',
    fullName: 'Full Name',
    email: 'Email',
    subject: 'Subject',
    message: 'Message',
    messageSubject: 'Message Subject',
    writeMessage: 'Write your message here...',
    sendMessageBtn: 'Send Message',
    contactInfo: 'Contact Information',
    emailLabel: 'Email',
    phone: 'Phone',
    location: 'Location',
    followMe: 'Follow Me',
    locationText: 'Riyadh, Saudi Arabia',

    // Footer
    footerDescription: 'Professional web developer and designer providing innovative and effective digital solutions for various projects.',
    quickLinks: 'Quick Links',
    services: 'Services',
    webDev: 'Web Development',
    mobileAppsService: 'Mobile Applications',
    uiDesignService: 'UI Design',
    techConsulting: 'Technical Consulting',
    allRightsReserved: 'All rights reserved.',
    privacyPolicy: 'Privacy Policy',
    termsConditions: 'Terms & Conditions'
  },
  en: {
    // Navigation
    home: 'Home',
    skills: 'Skills',
    portfolio: 'Portfolio',
    contact: 'Contact',
    contactMe: 'Contact Me',

    // Hero Section
    hello: "I'm Eng. Aboelyazed",
    heroDescription: 'Professional web developer and designer with over 2 years of experience in building innovative and high-performance digital experiences that combine creativity with functionality.',
    viewPortfolio: 'View Portfolio',

    // Skills Section
    skillsTitle: 'My Skills & Experience',
    skillsDescription: 'A diverse set of technical and creative skills acquired throughout my professional journey.',
    frontEndDev: 'Front-End Development',
    frontEndDesc: 'Advanced experience in HTML5, CSS3, JavaScript, and modern frameworks like React and Vue.js.',
    backEndDev: 'Back-End Development',
    backEndDesc: 'Building robust systems using Node.js, Express, PHP, and various databases.',
    uiDesign: 'UI Design',
    uiDesignDesc: 'Designing attractive and user-friendly interfaces with a strong focus on user experience.',
    technicalSkills: 'My Technical Skills',

    // Portfolio Section
    portfolioTitle: 'My Portfolio',
    portfolioDescription: 'A curated selection of projects I have developed and designed.',
    all: 'All',
    webDevelopment: 'Web Development',
    mobileApps: 'Mobile Applications',
    uiDesignCategory: 'UI Design',
    viewMore: 'View More Projects',

    // Projects
    ecommercePlatform: 'E-Commerce Platform',
    ecommerceDesc: 'A full-featured online shopping platform with secure payments and advanced inventory management.',
    foodDeliveryApp: 'Food Delivery App',
    foodDeliveryDesc: 'A food ordering and delivery app with real-time tracking and multiple payment options.',
    analyticsBoard: 'Analytics Dashboard',
    analyticsBoardDesc: 'A modern dashboard UI for displaying business intelligence and data analytics in a visual way.',
    educationalPlatform: 'Educational Platform',
    educationalDesc: 'A complete online learning platform with course management and interactive content.',
    fitnessApp: 'Fitness App',
    fitnessDesc: 'An app to track workouts and nutrition with advanced performance analytics.',
    bankingApp: 'Banking App',
    bankingDesc: 'UI design for a banking app with focus on usability and security.',

    // Contact Section
    contactTitle: 'Contact Me',
    contactDescription: 'Have a project to discuss? I am excited to hear your ideas and collaborate with you',
    sendMessage: 'Send Message',
    fullName: 'Full Name',
    email: 'Email',
    subject: 'Subject',
    message: 'Message',
    messageSubject: 'Message Subject',
    writeMessage: 'Write your message here...',
    sendMessageBtn: 'Send Message',
    contactInfo: 'Contact Information',
    emailLabel: 'Email',
    phone: 'Phone',
    location: 'Location',
    followMe: 'Follow Me',
    locationText: 'Riyadh, Saudi Arabia',

    // Footer
    footerDescription: 'Professional web developer and designer providing innovative and effective digital solutions for various projects.',
    quickLinks: 'Quick Links',
    services: 'Services',
    webDev: 'Web Development',
    mobileAppsService: 'Mobile Applications',
    uiDesignService: 'UI Design',
    techConsulting: 'Technical Consulting',
    allRightsReserved: 'All rights reserved.',
    privacyPolicy: 'Privacy Policy',
    termsConditions: 'Terms & Conditions'
  }
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<'ar' | 'en'>(() => {
    const saved = localStorage.getItem('language');
    return (saved as 'ar' | 'en') || 'ar';
  });

  const toggleLanguage = () => {
    const newLang = language === 'ar' ? 'en' : 'ar';
    setLanguage(newLang);
    localStorage.setItem('language', newLang);

    // Update document direction
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLang;
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  // Set initial direction
  React.useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
