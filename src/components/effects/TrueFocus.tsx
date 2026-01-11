import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import './TrueFocus.css';

interface TrueFocusProps {
    sentence?: string;
    manualMode?: boolean;
    blurAmount?: number;
    borderColor?: string;
    glowColor?: string;
    animationDuration?: number;
    pauseBetweenAnimations?: number;
    items?: string[]; // Allow passing direct items array
    onIndexChange?: (index: number) => void;
    defaultIndex?: number;
}

const TrueFocus = ({
    sentence = 'True Focus',
    manualMode = false,
    blurAmount = 5,
    borderColor = 'green',
    glowColor = 'rgba(0, 255, 0, 0.6)',
    animationDuration = 0.5,
    pauseBetweenAnimations = 1,
    items,
    onIndexChange,
    defaultIndex = 0
}: TrueFocusProps) => {
    // Use provided items or split sentence
    const words = items || sentence.split(' ');
    const [currentIndex, setCurrentIndex] = useState<number | null>(defaultIndex);
    const [lastActiveIndex, setLastActiveIndex] = useState<number | null>(defaultIndex);
    const containerRef = useRef<HTMLDivElement>(null);
    const wordRefs = useRef<(HTMLElement | null)[]>([]);
    const [focusRect, setFocusRect] = useState({ x: 0, y: 0, width: 0, height: 0 });

    useEffect(() => {
        if (!manualMode) {
            const interval = setInterval(
                () => {
                    setCurrentIndex(prev => {
                        const next = (prev === null ? 0 : prev + 1) % words.length;
                        return next;
                    });
                },
                (animationDuration + pauseBetweenAnimations) * 1000
            );

            return () => clearInterval(interval);
        }
    }, [manualMode, animationDuration, pauseBetweenAnimations, words.length]);

    useEffect(() => {
        const updateRect = () => {
            if (currentIndex === null || currentIndex === -1) return;
            if (!wordRefs.current[currentIndex] || !containerRef.current) return;

            const parentRect = containerRef.current.getBoundingClientRect();
            const activeRect = wordRefs.current[currentIndex]?.getBoundingClientRect();

            if (activeRect) {
                setFocusRect({
                    x: activeRect.left - parentRect.left,
                    y: activeRect.top - parentRect.top,
                    width: activeRect.width,
                    height: activeRect.height
                });
            }
        };

        // Initial calculation
        updateRect();

        // Recalculate on any resize of the container
        const resizeObserver = new ResizeObserver(() => {
            updateRect();
        });

        if (containerRef.current) {
            resizeObserver.observe(containerRef.current);
        }

        // Font loading can shift layout
        document.fonts.ready.then(updateRect);

        // Window load and a small delay to catch any late layout shifts
        window.addEventListener('load', updateRect);
        const timer = setTimeout(updateRect, 100);

        return () => {
            resizeObserver.disconnect();
            window.removeEventListener('load', updateRect);
            clearTimeout(timer);
        };
    }, [currentIndex, words.length]);

    // Handle external index changes if controlled, or notify if internal changes
    useEffect(() => {
        if (currentIndex !== null && onIndexChange) {
            onIndexChange(currentIndex);
        }
    }, [currentIndex, onIndexChange]);

    const handleMouseEnter = (index: number) => {
        if (manualMode) {
            setLastActiveIndex(index);
            setCurrentIndex(index);
        }
    };

    const handleMouseLeave = () => {
        if (manualMode) {
            setCurrentIndex(lastActiveIndex);
        }
    };

    const handleFocus = (index: number) => {
        if (manualMode) {
            setLastActiveIndex(index);
            setCurrentIndex(index);
        }
    };

    return (
        <div className="focus-container" ref={containerRef} onMouseLeave={handleMouseLeave}>
            {words.map((word, index) => {
                const isActive = index === currentIndex;
                return (
                    <span
                        key={index}
                        ref={el => (wordRefs.current[index] = el)}
                        className={`focus-word ${manualMode ? 'manual' : ''} ${isActive && !manualMode ? 'active' : ''}`}
                        style={{
                            filter: manualMode
                                ? isActive
                                    ? `blur(0px)`
                                    : `blur(${blurAmount}px)`
                                : isActive
                                    ? `blur(0px)`
                                    : `blur(${blurAmount}px)`,
                            // @ts-ignore
                            '--border-color': borderColor,
                            '--glow-color': glowColor,
                            transition: `filter ${animationDuration}s cubic-bezier(0.4, 0, 0.2, 1), color ${animationDuration}s cubic-bezier(0.4, 0, 0.2, 1)`,
                            color: isActive ? '#fff' : '#6b7280' // Gray to White transition
                        }}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onClick={() => handleMouseEnter(index)} // Also support click
                        tabIndex={0}
                        onFocus={() => handleFocus(index)}
                    >
                        {word}
                    </span>
                );
            })}

            <motion.div
                className="focus-frame"
                animate={{
                    x: focusRect.x,
                    y: focusRect.y,
                    width: focusRect.width,
                    height: focusRect.height,
                    opacity: currentIndex !== null ? 1 : 0
                }}
                transition={{
                    duration: animationDuration
                }}
                style={{
                    // @ts-ignore
                    '--border-color': borderColor,
                    '--glow-color': glowColor
                }}
            >
                <span className="corner top-left"></span>
                <span className="corner top-right"></span>
                <span className="corner bottom-left"></span>
                <span className="corner bottom-right"></span>
            </motion.div>
        </div>
    );
};

export default TrueFocus;
