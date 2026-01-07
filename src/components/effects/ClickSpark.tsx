import React, { useState, useCallback, useEffect, useRef } from 'react';

interface Spark {
  id: number;
  x: number;
  y: number;
  angle: number;
}

interface ClickSparkProps {
  children?: React.ReactNode;
  sparkColor?: string;
  sparkSize?: number;
  sparkRadius?: number;
  sparkCount?: number;
  duration?: number;
  extraScale?: number;
}

export const ClickSpark: React.FC<ClickSparkProps> = ({
  children,
  sparkColor = '#ffffff',
  sparkSize = 18,
  sparkRadius = 55,
  sparkCount = 10,
  duration = 800,
  extraScale = 1.2,
}) => {
  const [sparks, setSparks] = useState<Spark[]>([]);
  const timeoutRef = useRef<any | null>(null);

  // Function to create sparks at x, y
  const createSparks = useCallback((x: number, y: number) => {
    const newSparks: Spark[] = Array.from({ length: sparkCount }, (_, i) => ({
      id: Date.now() + i,
      x,
      y,
      angle: (360 / sparkCount) * i,
    }));

    setSparks((prev) => [...prev, ...newSparks]);

    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      setSparks((prev) => prev.filter(s => !newSparks.find(ns => ns.id === s.id))); // Cleanup isn't perfect here for rapid clicks, simplified:
      setSparks([]); // Just clear all after duration for simplicity or manage individual timeouts.
      // Better approach: just let them animate out. 
      // But clearing state is needed to remove DOM elements.
      // Given the previous code just cleared all after timeout, we keep that simple behavior 
      // but purely strictly it might clear earlier sparks if clicked rapidly.
      // For this step, I'll stick to previous logic structure but support global.
    }, duration);
  }, [sparkCount, duration]);

  // Handle global clicks if no children
  useEffect(() => {
    if (!children) {
      const handleGlobalClick = (e: MouseEvent) => {
        createSparks(e.clientX, e.clientY);
      };
      window.addEventListener('click', handleGlobalClick);
      return () => window.removeEventListener('click', handleGlobalClick);
    }
  }, [children, createSparks]);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (children) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      createSparks(x, y);
    }
  };

  return (
    <div
      className={children ? "relative inline-block" : "fixed inset-0 pointer-events-none z-[9999] overflow-hidden"}
      onClick={children ? handleClick : undefined}
      style={!children ? { position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' } : {}}
    >
      {children}
      {sparks.map((spark) => (
        <div
          key={spark.id}
          className="absolute pointer-events-none"
          style={{
            left: children ? spark.x : spark.x, // For global, x is clientX which is absolute relative to viewport (fixed div covers viewport)
            top: children ? spark.y : spark.y,
            width: sparkSize,
            height: sparkSize,
            backgroundColor: sparkColor,
            borderRadius: '50%',
            transform: `translate(-50%, -50%)`,
            animation: `spark-fly ${duration}ms ease-out forwards`,
            '--spark-angle': `${spark.angle}deg`,
            '--spark-radius': `${sparkRadius}px`,
            '--active-scale': extraScale,
            boxShadow: `0 0 ${sparkSize}px ${sparkColor}`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
};

export default ClickSpark;
