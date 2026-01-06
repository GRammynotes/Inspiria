import './GradientText.css';

interface GradientTextProps {
    children: React.ReactNode;
    colors?: string[];
    direction?: string;
    animate?: boolean;
    className?: string;
}

const GradientText = ({
    children,
    colors = ['#FFD700', '#FFA500', '#FFD700'],
    direction = '90deg',
    animate = false,
    className = ''
}: GradientTextProps) => {
    const gradientStyle = {
        backgroundImage: `linear-gradient(${direction}, ${colors.join(', ')})`,
        animation: animate ? 'gradient-shift 3s ease infinite' : 'none'
    };

    return (
        <span className={`gradient-text ${className}`} style={gradientStyle}>
            {children}
        </span>
    );
};

export default GradientText;
