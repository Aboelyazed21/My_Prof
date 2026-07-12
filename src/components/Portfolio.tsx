import React, { useState } from 'react';
import { FiEye, FiGithub, FiExternalLink, FiSearch, FiX } from 'react-icons/fi';
import { SiBehance } from 'react-icons/si';
import { useLanguage } from '../contexts/LanguageContext';
import { AnimatedSection } from './AnimatedSection';

// TypeScript Interfaces for the project structure
interface BilingualText {
  ar: string;
  en: string;
}

interface Project {
  id: number;
  title: BilingualText;
  description: BilingualText;
  image: string;
  category: string;
  tags: string[];
  challenges: { ar: string[]; en: string[] };
  date: BilingualText;
  links: { demo?: string; github?: string; behance?: string };
}

export const Portfolio: React.FC = () => {
  // Assuming useLanguage provides current language string ('ar' or 'en'). 
  // Adjust 'language' variable based on your actual context implementation.
  const { t, language = 'ar' } = useLanguage(); 
  const currentLang = language as 'ar' | 'en';

  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: { ar: 'آلة حاسبة ذكية', en: 'Smart Calculator' },
      description: { 
        ar: 'تطبيق ويب متكامل يضم آلة حاسبة عصرية تدعم العمليات الرياضية المعقدة وتحويل العملات في الوقت الفعلي.', 
        en: 'Build a sleek and modern all-in-one calculator web app supporting complex mathematical operations and real-time currency exchange.' 
      },
      image: 'https://m.media-amazon.com/images/I/61ZVu4vCZxL.jpg',
      category: 'webapp',
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      challenges: {
        ar: ['تطوير واجهة مستخدم بديهية وسهلة الاستخدام', 'ضمان دقة العمليات الحسابية المعقدة', 'تحسين الأداء للحسابات السريعة'],
        en: ['Developing an intuitive user interface', 'Ensuring calculation accuracy', 'Optimizing performance for fast calculations']
      },
      date: { ar: 'مايو 2024', en: 'May 2024' },
      links: { demo: 'https://aboelyazed21.github.io/calc/' }
    },
    {
      id: 2,
      title: { ar: 'متجر الأزياء العصرية', en: 'Modern Fashion Store' },
      description: { 
        ar: 'منصة تجارة إلكترونية متكاملة لبيع الأزياء النسائية والرجالية. تتميز بتصميم عصري ونظام دفع آمن.', 
        en: 'An integrated e-commerce platform for selling fashion. Features a modern design, user-friendly interface, and secure payment system.' 
      },
      image: 'https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'commercial',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
      challenges: {
        ar: ['تطوير نظام دفع آمن', 'تحسين أداء الموقع للتعامل مع آلاف المنتجات', 'تطوير نظام إدارة مخزون ذكي'],
        en: ['Developing a secure payment system', 'Optimizing site performance', 'Developing a smart inventory system']
      },
      date: { ar: 'مارس 2024', en: 'March 2024' },
      links: { demo: '#' }
    },
    {
      id: 3,
      title: { ar: 'منصة التعلم الذكي', en: 'Smart Learning Platform' },
      description: { 
        ar: 'منصة تعليمية تفاعلية تقدم دورات متخصصة في البرمجة والتصميم والتسويق الرقمي.', 
        en: 'An interactive e-learning platform offering specialized courses in programming, design, and digital marketing.' 
      },
      image: 'https://images.pexels.com/photos/159775/library-la-trobe-study-students-159775.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'education',
      tags: ['Vue.js', 'Laravel', 'MySQL', 'WebRTC'],
      challenges: {
        ar: ['تطوير نظام بث مباشر عالي الجودة للمحاضرات', 'إنشاء نظام تقييم ذكي يتكيف مع مستوى الطالب'],
        en: ['Developing a high-quality live streaming system', 'Creating an adaptive assessment system']
      },
      date: { ar: 'فبراير 2024', en: 'February 2024' },
      links: { demo: '#' }
    },
    {
      id: 4,
      title: { ar: 'نظام إدارة العيادات', en: 'Clinic Management System' },
      description: { 
        ar: 'نظام شامل لإدارة العيادات الطبية يشمل حجز المواعيد الإلكتروني وإدارة ملفات المرضى.', 
        en: 'A comprehensive system for managing medical clinics, including electronic appointment booking and digital patient records.' 
      },
      image: 'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'webapp',
      tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
      challenges: {
        ar: ['ضمان أمان وخصوصية البيانات الطبية الحساسة', 'تطوير نظام مواعيد ذكي يتجنب التعارض'],
        en: ['Ensuring security and privacy of sensitive medical data', 'Developing a smart non-conflicting appointment system']
      },
      date: { ar: 'يناير 2024', en: 'January 2024' },
      links: { demo: 'https://singular-sawine-0bc006.netlify.app' }
    },
    {
      id: 5,
      title: { ar: 'تطبيق توصيل الطعام', en: 'Food Delivery App' },
      description: { 
        ar: 'تطبيق متكامل لطلب وتوصيل الطعام يربط بين المطاعم والعملاء وسائقي التوصيل مع تتبع مباشر.', 
        en: 'An integrated food ordering and delivery app connecting restaurants, customers, and delivery drivers with live tracking.' 
      },
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'webapp',
      tags: ['React Native', 'Express.js', 'MongoDB', 'Socket.io'],
      challenges: {
        ar: ['تطوير نظام تتبع مباشر للطلبات باستخدام GPS', 'إنشاء خوارزمية ذكية لتوزيع الطلبات'],
        en: ['Developing live order tracking using GPS', 'Creating a smart algorithm for distributing orders']
      },
      date: { ar: 'ديسمبر 2023', en: 'December 2023' },
      links: { demo: 'https://aboelyazed21.github.io/Food/' }
    },
    {
      id: 6,
      title: { ar: 'سكن الطلاب - Housing-Student', en: 'Housing-Student' },
      description: { 
        ar: 'منصة مخصصة لسكن الطلاب توفر واجهة سهلة للبحث عن شقق وسكن جامعي مع خرائط تفاعلية.', 
        en: 'A dedicated platform for student housing providing an easy-to-use interface to search for apartments and dorms.' 
      },
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'personal',
      tags: ['HTML', 'CSS', 'JavaScript', 'GitHub Pages'],
      challenges: {
        ar: ['تصميم واجهة مخصصة للطلاب سهلة التصفح', 'توفير عرض مرئي واضح لمواقع السكن'],
        en: ['Designing an easy-to-navigate UI tailored for students', 'Providing clear visual displays of housing locations']
      },
      date: { ar: 'يوليو 2025', en: 'July 2025' },
      links: { demo: 'https://aboelyazed21.github.io/Housing-Student/' }
    },
    {
      id: 7,
      title: { ar: 'تطبيق السينما', en: 'Cinema-App' },
      description: { 
        ar: 'موقع مخصص لعشاق الأفلام يوفر واجهة سهلة لعرض أحدث الأفلام ومشاهدة التريلر.', 
        en: 'A movie lover\'s platform offering an easy interface to view the latest movies and watch trailers.' 
      },
      image: 'https://pbs.twimg.com/profile_images/1663973372194340865/DLJfYqQe_400x400.jpg',
      category: 'entertainment',
      tags: ['React', 'TailwindCSS', 'Vite'],
      challenges: {
        ar: ['تصميم واجهة جذابة تشبه منصات البث الشهيرة', 'استخدام API لعرض بيانات الأفلام بشكل ديناميكي'],
        en: ['Designing an attractive UI similar to popular streaming platforms', 'Using an API to display movie data dynamically']
      },
      date: { ar: 'أغسطس 2025', en: 'August 2025' },
      links: { demo: 'https://aboelyazed21.github.io/Films/' }
    },
    {
      id: 8,
      title: { ar: 'موقع جيم ونادي رياضي', en: 'Gym & Fitness Center Website' },
      description: { 
        ar: 'موقع متكامل لنادي رياضي يتيح للعملاء شراء الاشتراكات وحجز الجلسات.', 
        en: 'An integrated gym website allowing clients to purchase memberships and book sessions.' 
      },
      image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'sports',
      tags: ['React', 'Tailwind CSS', 'Node.js', 'MongoDB'],
      challenges: {
        ar: ['إدارة الجداول الزمنية والتعارض في حصص التدريب', 'توفير نظام دفع إلكتروني آمن'],
        en: ['Managing class schedules and resolving booking conflicts', 'Providing a fast and secure online payment system']
      },
      date: { ar: 'نوفمبر 2024', en: 'November 2024' },
      links: { demo: '#' }
    },
    {
      id: 9,
      title: { ar: 'لوحة تحليل البيانات', en: 'Data Analysis Dashboard' },
      description: { 
        ar: 'لوحة تحكم قوية لتحويل البيانات المعقدة إلى رسوم بيانية لدعم اتخاذ القرارات الذكية.', 
        en: 'A powerful dashboard transforming complex data into easy-to-understand charts for smart decision-making.' 
      },
      image: 'https://academy.hsoub.com/uploads/monthly_2023_03/111834371_.png.4b125c47b07835db2a8b2fa2ae3eda1a.png',
      category: 'data-analysis',
      tags: ['Python', 'Pandas', 'React', 'Recharts', 'FastAPI'],
      challenges: {
        ar: ['التعامل مع مجموعات بيانات ضخمة دون التأثير على الأداء', 'تصميم رسوم بيانية تفاعلية دقيقة'],
        en: ['Handling massive datasets without performance hits', 'Designing accurate interactive charts']
      },
      date: { ar: 'سبتمبر 2024', en: 'September 2024' },
      links: { demo: 'https://aboelyazed21.github.io/datapro-analytics/' }
    },
    {
      id: 10,
      title: { ar: 'مساعد BioGPT الذكي', en: 'BioGPT Assistant AI' },
      description: { 
        ar: 'شات بوت متخصص في المعلوماتية الحيوية لمساعدة الباحثين في تحليل تسلسلات الحمض النووي.', 
        en: 'An AI chatbot specialized in Bioinformatics to assist researchers in analyzing DNA sequences.' 
      },
      image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'ai',
      tags: ['OpenAI API', 'Python', 'React', 'BioPython'],
      challenges: {
        ar: ['ربط واجهة الدردشة بأدوات التحليل البيولوجي المعقدة', 'ضمان الاستجابة السريعة للمستخدم'],
        en: ['Connecting chat interface with complex biological tools', 'Ensuring rapid response times for users']
      },
      date: { ar: 'أكتوبر 2025', en: 'October 2025' },
      links: { demo: '#' }
    },
    {
      id: 11,
      title: { ar: 'التعرف على الأرقام بخط اليد', en: 'Handwritten Digit Recognition' },
      description: { 
        ar: 'نموذج تعلم عميق للتعرف على الأرقام المكتوبة بخط اليد بدقة عالية.', 
        en: 'A Deep Learning model to recognize handwritten digits with high accuracy.' 
      },
      image: 'https://images.pexels.com/photos/17483868/pexels-photo-17483868.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'ai',
      tags: ['Python', 'TensorFlow', 'Keras', 'OpenCV'],
      challenges: {
        ar: ['تجنب مشكلة التجهيز الزائد (Overfitting)', 'تحقيق نسبة دقة تتجاوز 98%'],
        en: ['Avoiding model overfitting', 'Achieving over 98% accuracy']
      },
      date: { ar: 'أبريل 2026', en: 'April 2026' },
      links: { github: 'https://github.com/Aboelyazed21/Handwritten-Digit-Recognition' }
    },
    {
      id: 12,
      title: { ar: 'مدونة التقنية والإبداع', en: 'Tech & Creativity Blog' },
      description: { 
        ar: 'منصة تدوين احترافية مع نظام إدارة محتوى متكامل ودعم التصنيفات والوسوم.', 
        en: 'A professional blogging platform with a complete CMS, categories, and tags support.' 
      },
      image: 'https://images.pexels.com/photos/261949/pexels-photo-261949.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'blog',
      tags: ['React', 'Node.js', 'MongoDB', 'Firebase'],
      challenges: {
        ar: ['تطوير نظام إدارة محتوى ديناميكي', 'إنشاء نظام تعليقات آمن'],
        en: ['Developing a dynamic CMS', 'Creating a secure comment system']
      },
      date: { ar: 'مايو 2024', en: 'May 2024' },
      links: { github: 'https://github.com/Aboelyazed21/Koaraaa333' }
    },
    {
      id: 13,
      title: { ar: 'تطبيق مباريات كرة القدم', en: 'Live Football Matches App' },
      description: { 
        ar: 'تطبيق ويب لسحب وعرض بيانات ونتائج مباريات كرة القدم بشكل مباشر.', 
        en: 'A web application fetching and displaying live football matches and scores.' 
      },
      image: 'https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'sports',
      tags: ['HTML', 'CSS', 'JavaScript'],
      challenges: {
        ar: ['الاتصال بـ API خارجية لسحب البيانات', 'التعامل مع البيانات المباشرة وتحديث الواجهة'],
        en: ['Connecting to an external API', 'Handling live data and updating the UI']
      },
      date: { ar: 'يونيو 2026', en: 'June 2026' },
      links: { github: 'https://github.com/Aboelyazed21/Koaraaa333' }
    },
    {
      id: 14,
      title: { ar: 'درع الأمن السيبراني', en: 'Cyber Security Shield' },
      description: { 
        ar: 'أداة ويب لفحص الروابط المشبوهة وتحليل نصوص الإيميلات للوقاية من الهجمات السيبرانية.', 
        en: 'A web tool for scanning suspicious URLs and analyzing phishing emails to prevent cyber attacks.' 
      },
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'webapp',
      tags: ['HTML', 'CSS', 'JavaScript', 'Python API'],
      challenges: {
        ar: ['بناء واجهة مستخدم متجاوبة', 'الاتصال بسيرفر بايثون خارجي لتحليل البيانات'],
        en: ['Building a responsive UI', 'Connecting to an external Python server for data analysis']
      },
      date: { ar: 'يوليو 2026', en: 'July 2026' },
      links: { demo: 'https://aboelyazed21.github.io/CybersecuirteDedection' }
    }
  ];

  const filters = [
    { key: 'all', label: t('all') || (currentLang === 'ar' ? 'الكل' : 'All') },
    { key: 'commercial', label: t('commercial-sites') || (currentLang === 'ar' ? 'مواقع تجارية' : 'E-commerce') },
    { key: 'webapp', label: t('web-apps') || (currentLang === 'ar' ? 'تطبيقات ويب' : 'Web Apps') },
    { key: 'personal', label: t('personal-sites') || (currentLang === 'ar' ? 'مواقع شخصية' : 'Personal') },
    { key: 'education', label: t('edu-platforms') || (currentLang === 'ar' ? 'تعليمية' : 'Education') },
    { key: 'entertainment', label: t('entertainment-sites') || (currentLang === 'ar' ? 'ترفيهية' : 'Entertainment') },
    { key: 'sports', label: t('sports-sites') || (currentLang === 'ar' ? 'رياضية' : 'Sports') },
    { key: 'data-analysis', label: t('data-analysis-sites') || (currentLang === 'ar' ? 'تحليل بيانات' : 'Data Analysis') },
    { key: 'ai', label: t('ai-apps') || (currentLang === 'ar' ? 'ذكاء اصطناعي' : 'AI') },
    { key: 'blog', label: t('blog') || (currentLang === 'ar' ? 'مدونات' : 'Blogs') }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = activeFilter === 'all' || project.category === activeFilter;
    const matchesSearch = project.title[currentLang].toLowerCase().includes(searchQuery.toLowerCase()) || 
                          project.description[currentLang].toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="portfolio" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Section Header */}
        <AnimatedSection animation="fadeIn">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
              {t('portfolioTitle') || (currentLang === 'ar' ? 'معرض الأعمال' : 'Portfolio')}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t('portfolioDescription') || (currentLang === 'ar' ? 'استكشف مجموعة من المشاريع المميزة التي قمنا بتطويرها' : 'Explore a collection of our outstanding projects')}
            </p>
          </div>
        </AnimatedSection>

        {/* Search Bar */}
        <AnimatedSection animation="slideUp" delay={100}>
          <div className="max-w-md mx-auto mb-10 relative">
            <input 
              type="text" 
              placeholder={currentLang === 'ar' ? 'ابحث عن مشروع...' : 'Search for a project...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-12 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 dark:text-white rounded-xl focus:ring-2 focus:ring-blue-500 transition-all duration-300"
            />
            <div className={`absolute top-1/2 transform -translate-y-1/2 ${currentLang === 'ar' ? 'right-4' : 'left-4'}`}>
              <FiSearch className="text-gray-400 text-xl" />
            </div>
          </div>
        </AnimatedSection>

        {/* Filter Buttons */}
        <AnimatedSection animation="slideUp" delay={200}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                  activeFilter === filter.key
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <AnimatedSection 
              key={project.id} 
              animation="scaleUp" 
              delay={index * 50}
            >
              <div 
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group cursor-pointer border border-gray-100 dark:border-gray-700 transform hover:-translate-y-2"
                onClick={() => setSelectedProject(project)}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden h-56 bg-gray-200 dark:bg-gray-700">
                  <img
                    src={project.image}
                    alt={project.title[currentLang]}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-medium px-4 py-2 bg-blue-600/80 rounded-lg backdrop-blur-sm">
                      {currentLang === 'ar' ? 'عرض التفاصيل' : 'View Details'}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {project.title[currentLang]}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed line-clamp-2">
                    {project.description[currentLang]}
                  </p>
                  
                  {/* Tags Preview */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 px-3 py-1 rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-3 py-1 rounded-full font-medium">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Load More / View More */}
        {filteredProjects.length > 0 && (
          <AnimatedSection animation="fadeIn" delay={300}>
            <div className="text-center mt-16">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-medium">
                {t('loadMore') || (currentLang === 'ar' ? 'تحميل المزيد من المشاريع' : 'Load More Projects')}
              </button>
            </div>
          </AnimatedSection>
        )}

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12 text-gray-500 dark:text-gray-400">
            {currentLang === 'ar' ? 'لم يتم العثور على مشاريع تطابق بحثك.' : 'No projects found matching your search.'}
          </div>
        )}
      </div>

      {/* Project Modal Overlay */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity">
          <div className="bg-white dark:bg-gray-800 rounded-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-200 dark:border-gray-700 relative animate-scaleIn">
            
            {/* Modal Header */}
            <div className="sticky top-0 z-10 flex items-center justify-between p-6 border-b border-gray-100 dark:border-gray-700 bg-white/95 dark:bg-gray-800/95 backdrop-blur-md">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {selectedProject.title[currentLang]}
              </h2>
              <button 
                onClick={() => setSelectedProject(null)}
                className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
              >
                <FiX size={24} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column (Image & Links) */}
              <div>
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title[currentLang]} 
                  className="w-full rounded-xl shadow-lg mb-6"
                />
                <div className="flex gap-4">
                  {selectedProject.links.demo && selectedProject.links.demo !== '#' && (
                    <a 
                      href={selectedProject.links.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-medium hover:opacity-90 transition-opacity"
                    >
                      <FiExternalLink /> {currentLang === 'ar' ? 'زيارة الموقع' : 'Visit Site'}
                    </a>
                  )}
                  {selectedProject.links.github && (
                    <a 
                      href={selectedProject.links.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-xl font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    >
                      <FiGithub /> GitHub
                    </a>
                  )}
                </div>
              </div>

              {/* Right Column (Details) */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    {currentLang === 'ar' ? 'وصف المشروع' : 'Project Description'}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {selectedProject.description[currentLang]}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    {currentLang === 'ar' ? 'التقنيات المستخدمة' : 'Technologies Used'}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1.5 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-lg text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    {currentLang === 'ar' ? 'التحديات والحلول' : 'Challenges & Solutions'}
                  </h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    {selectedProject.challenges[currentLang].map((challenge, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 shrink-0"></div>
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {currentLang === 'ar' ? 'تاريخ التنفيذ' : 'Implementation Date'}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {selectedProject.date[currentLang]}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};