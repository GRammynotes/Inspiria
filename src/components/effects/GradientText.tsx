import React from 'react';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  colors?: string[];
  animationSpeed?: number;
}

export const GradientText: React.FC<GradientTextProps> = ({
  children,
  className = '',
  colors = ['#00f5ff', '#bf00ff', '#ffcc00', '#00f5ff'],
  animationSpeed = 3,
}) => {
  const gradientStyle = {
    backgroundImage: `linear-gradient(90deg, ${colors.join(', ')})`,
    backgroundSize: '300% 100%',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    animation: `gradient-shift ${animationSpeed}s ease infinite`,
  };

  return (
    <span className={className} style={gradientStyle}>
      {children}
    </span>
  );
};

export default GradientText;
