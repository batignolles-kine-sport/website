import { useEffect, useState, useRef, ReactNode } from 'react';

interface LazyFramerProps {
    children: ReactNode;
    rootMargin?: string;
    minHeight?: string;
}

export const LazyFramer: React.FC<LazyFramerProps> = ({
    children,
    rootMargin = '300px',
    minHeight = '400px'
}) => {
    const [shouldLoad, setShouldLoad] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShouldLoad(true);
                    observer.disconnect();
                }
            },
            {
                rootMargin, // Load content before it's visible (smoother UX)
                threshold: 0.01
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [rootMargin]);

    return (
        <div ref={ref} style={!shouldLoad ? { minHeight } : undefined}>
            {shouldLoad ? children : null}
        </div>
    );
};
