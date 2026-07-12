import React, { ReactNode } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scaleUp' | 'blurReveal';
  delay?: number;
  duration?: number;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  animation = 'fadeIn',
  delay = 0,
  duration = 700 
}) => {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true
  });

  const getAnimationClasses = () => {
    // منحنى حركة انسيابي جداً (سريع في البداية ويهدأ في النهاية)
    const baseClass = 'transition-all ease-[cubic-bezier(0.22,1,0.36,1)]';
    
    if (!isIntersecting) {
      switch (animation) {
        case 'fadeIn':
          return `${baseClass} opacity-0 translate-y-4`;
          
        case 'slideUp':
          return `${baseClass} opacity-0 translate-y-12 blur-[4px]`;
          
        case 'slideLeft':
          return `${baseClass} opacity-0 translate-x-12 blur-[2px]`;
          
        case 'slideRight':
          return `${baseClass} opacity-0 -translate-x-12 blur-[2px]`;
          
        case 'scaleUp':
          return `${baseClass} opacity-0 scale-90 translate-y-4`;
          
        case 'blurReveal':
          return `${baseClass} opacity-0 blur-md scale-95`;
          
        default:
          return `${baseClass} opacity-0`;
      }
    }
    
    // الحالة النشطة (عند ظهور العنصر)
    return `${baseClass} opacity-100 translate-y-0 translate-x-0 scale-100 blur-0`;
  };

  return (
    <div
      ref={ref}
      className={`${getAnimationClasses()} ${className}`}
      style={{ 
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
        willChange: 'opacity, transform, filter'
      }}
    >
      {children}
    </div>
  );
};