import React from 'react';
import { Code, Server, Palette } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { AnimatedSection } from './AnimatedSection';

export const Skills: React.FC = () => {
  const { t } = useLanguage();

  const skills = [
    {
      icon: Code,
      title: t('frontEndDev'),
      description: t('frontEndDesc'),
      color: 'bg-blue-500',
      bgColor: 'bg-blue-100 dark:bg-blue-900/20',
      items: [
        { name: 'HTML/CSS', level: 95 },
        { name: 'JavaScript', level: 90 },
        { name: 'React', level: 85 }
      ]
    },
    {
      icon: Server,
      title: t('backEndDev'),
      description: t('backEndDesc'),
      color: 'bg-green-500',
      bgColor: 'bg-green-100 dark:bg-green-900/20',
      items: [
        { name: 'Node.js', level: 88 },
        { name: 'PHP', level: 80 },
        { name: 'SQL/NoSQL', level: 85 }
      ]
    },
    {
      icon: Palette,
      title: t('uiDesign'),
      description: t('uiDesignDesc'),
      color: 'bg-purple-500',
      bgColor: 'bg-purple-100 dark:bg-purple-900/20',
      items: [
        { name: 'Figma', level: 92 },
        { name: 'Adobe XD', level: 85 },
        { name: 'UI/UX', level: 90 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-6">
        <AnimatedSection animation="fadeIn">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {t('skillsTitle')}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t('skillsDescription')}
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <AnimatedSection 
              key={index} 
              animation="slideUp" 
              delay={index * 200}
            >
              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 p-8 transform hover:-translate-y-2 group">
                
                {/* Icon */}
                <div className={`w-16 h-16 ${skill.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <skill.icon className={`w-8 h-8 ${skill.color.replace('bg-', 'text-')}`} />
                </div>

                {/* Title and Description */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {skill.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {skill.description}
                </p>

                {/* Skill Progress Bars */}
                <div className="space-y-4">
                  {skill.items.map((item, itemIndex) => (
                    <div key={itemIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {item.name}
                        </span>
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {item.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                          style={{ 
                            width: `${item.level}%`,
                            transitionDelay: `${(index * 200) + (itemIndex * 100)}ms`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Technical Skills Chart */}
        <AnimatedSection animation="fadeIn" delay={600}>
          <div className="mt-20">
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                {t('technicalSkills')}
              </h3>
              
              {/* Skills Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {[
                  { name: 'React', level: 90, color: 'from-blue-400 to-blue-600' },
                  { name: 'CSS', level: 85, color: 'from-green-400 to-green-600' },
                  { name: 'Node.js', level: 88, color: 'from-green-500 to-green-700' },
                  { name: 'HTML5', level: 80, color: 'from-purple-400 to-purple-600' },
                  { name: 'JS', level: 85, color: 'from-green-400 to-green-600' },
                  { name: 'Figma', level: 92, color: 'from-pink-400 to-pink-600' }
                ].map((skill, index) => (
                  <div key={index} className="text-center">
                    <div className="relative w-20 h-20 mx-auto mb-3">
                      <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="text-gray-200 dark:text-gray-700"
                          strokeDasharray="100, 100"
                        />
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          strokeWidth="2"
                          className={`bg-gradient-to-r ${skill.color}`}
                          style={{
                            stroke: `url(#gradient-${index})`,
                            strokeDasharray: `${skill.level}, 100`,
                            transition: 'stroke-dasharray 1s ease-out',
                            transitionDelay: `${index * 100}ms`
                          }}
                        />
                        <defs>
                          <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor={skill.color.split(' ')[1]} />
                            <stop offset="100%" stopColor={skill.color.split(' ')[3]} />
                          </linearGradient>
                        </defs>
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-sm font-bold text-gray-900 dark:text-white">
                          {skill.level}%
                        </span>
                      </div>
                    </div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};