import React, { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { SiBehance } from 'react-icons/si';
import { useLanguage } from '../contexts/LanguageContext';
import { AnimatedSection } from './AnimatedSection';

export const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <AnimatedSection animation="fadeIn">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {t('contactTitle')}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t('contactDescription')}
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Form */}
          <AnimatedSection animation="slideLeft">
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                {t('sendMessage')}
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      {t('name')}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-300"
                      placeholder={t('fullName')}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      {t('email')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-300"
                      placeholder="example@domain.com"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    {t('subject')}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-300"
                    placeholder={t('messageSubject')}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    {t('message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-300 resize-none"
                    placeholder={t('writeMessage')}
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 font-medium flex items-center justify-center space-x-2"
                >
                  <FiSend />
                  <span>{t('sendMessageBtn')}</span>
                </button>
              </form>
            </div>
          </AnimatedSection>

          {/* Contact Information */}
          <div className="space-y-8">
            <AnimatedSection animation="slideRight">
              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                  {t('contactInfo')}
                </h3>

                <div className="space-y-6">
                  {[
                    {
                      icon: FiMail,
                      title: t('emailLabel'),
                      content: 'aboelyazed.hatem@example.com',
                      color: 'bg-blue-500'
                    },
                    {
                      icon: FiPhone,
                      title: t('phone'),
                      content: '+20 01060965014',
                      color: 'bg-green-500'
                    },
                    {
                      icon: FiMapPin,
                      title: t('location'),
                      content: 'Kafr El-Sheikh, Egypt',
                      color: 'bg-purple-500'
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4 space-x-reverse">
                      <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center text-white`}>
                        <item.icon size={20} />
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-1">
                          {item.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400">
                          {item.content}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                    {t('followMe')}
                  </h4>
                  <div className="flex space-x-4">
                    {[
                      { Icon: FaLinkedin, href: '#', color: 'hover:text-blue-600' },
                      { Icon: FaGithub, href: '#', color: 'hover:text-gray-900 dark:hover:text-white' },
                      { Icon: FaTwitter, href: '#', color: 'hover:text-blue-400' },
                      { Icon: SiBehance, href: '#', color: 'hover:text-blue-500' }
                    ].map(({ Icon, href, color }, index) => (
                      <a
                        key={index}
                        href={href}
                        className={`w-12 h-12 flex items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 ${color} transition-all duration-300 transform hover:scale-110 hover:shadow-lg`}
                      >
                        <Icon size={20} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Map Placeholder */}
            <AnimatedSection animation="slideRight" delay={200}>
              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden h-64">
                <div 
                  className="h-full w-full bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 flex items-center justify-center"
                >
                  <div className="text-center">
                    <FiMapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <p className="text-gray-600 dark:text-gray-400 font-medium">
                      Interactive Map
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};
