import React, { useState, useEffect, useRef } from 'react';

// Untuk mengatasi masalah impor, logika hook sekarang berada di dalam file ini.
const useScrollAnimation = (threshold = 0.1) => {
    const ref = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [threshold]);

    return [ref, isVisible] as const;
};


interface AnimatedSectionProps {
    children: React.ReactNode;
    id: string;
    className?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, id, className = '' }) => {
    const [ref, isVisible] = useScrollAnimation();
    
    // FIX: Menghapus kelas 'group' dari sini untuk mencegah konflik hover
    return (
        <section ref={ref} id={id} className={`py-24 ${className} ${isVisible ? 'is-visible' : ''}`}>
            {children}
        </section>
    );
};

export default AnimatedSection;
