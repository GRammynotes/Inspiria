import React, { useState, useCallback } from 'react';

interface Spark {
  id: number;
  x: number;
  y: number;
  angle: number;
}

interface ClickSparkProps {
  children: React.ReactNode;
  sparkColor?: string;
  sparkSize?: number;
  sparkRadius?: number;
  sparkCount?: number;
  duration?: number;
}

export const ClickSpark: React.FC<ClickSparkProps> = ({
  children,
  sparkColor = '#ffcc00',
  sparkSize = 10,
  sparkRadius = 40,
  sparkCount = 8,
  duration = 500,
}) => {
  const [sparks, setSparks] = useState<Spark[]>([]);

  const handleClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newSparks: Spark[] = Array.from({ length: sparkCount }, (_, i) => ({
      id: Date.now() + i,
      x,
      y,
      angle: (360 / sparkCount) * i,
    }));

    setSparks(newSparks);

    setTimeout(() => {
      setSparks([]);
    }, duration);
  }, [sparkCount, duration]);

  return (
    <div className="relative inline-block" onClick={handleClick}>
      {children}
      {sparks.map((spark) => (
        <div
          key={spark.id}
          className="absolute pointer-events-none"
          style={{
            left: spark.x,
            top: spark.y,
            width: sparkSize,
            height: sparkSize,
            backgroundColor: sparkColor,
            borderRadius: '50%',
            transform: `translate(-50%, -50%)`,
            animation: `spark-fly ${duration}ms ease-out forwards`,
            '--spark-angle': `${spark.angle}deg`,
            '--spark-radius': `${sparkRadius}px`,
            boxShadow: `0 0 ${sparkSize}px ${sparkColor}`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
};

export default ClickSpark;
