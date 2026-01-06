import React, { useEffect, useState, useRef } from 'react';

interface BlurTextProps {
  children: string;
  className?: string;
  delay?: number;
  duration?: number;
}

export const BlurText: React.FC<BlurTextProps> = ({
  children,
  className = '',
  delay = 0,
  duration = 800,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <span
      ref={ref}
      className={className}
      style={{
        display: 'inline-block',
        filter: isVisible ? 'blur(0px)' : 'blur(10px)',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: `all ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`,
      }}
    >
      {children}
    </span>
  );
};

export default BlurText;
