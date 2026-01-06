import React, { useEffect, useRef } from 'react';

interface SplashCursorProps {
  color?: string;
  size?: number;
  opacity?: number;
}

export const SplashCursor: React.FC<SplashCursorProps> = ({
  color = 'rgba(191, 0, 255, 0.3)',
  size = 20,
  opacity = 0.5,
}) => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    const handleClick = (e: MouseEvent) => {
      const splash = document.createElement('div');
      splash.className = 'splash-effect';
      splash.style.left = `${e.clientX}px`;
      splash.style.top = `${e.clientY}px`;
      splash.style.backgroundColor = color;
      document.body.appendChild(splash);

      setTimeout(() => {
        splash.remove();
      }, 600);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
    };
  }, [color]);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full mix-blend-screen transition-transform duration-100"
        style={{
          width: size,
          height: size,
          backgroundColor: color,
          opacity,
          filter: `blur(${size / 4}px)`,
        }}
      />
      <style>{`
        .splash-effect {
          position: fixed;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          pointer-events: none;
          transform: translate(-50%, -50%);
          animation: splash-expand 0.6s ease-out forwards;
          z-index: 9998;
        }
        @keyframes splash-expand {
          0% {
            width: 10px;
            height: 10px;
            opacity: 0.8;
          }
          100% {
            width: 100px;
            height: 100px;
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
};

export default SplashCursor;
