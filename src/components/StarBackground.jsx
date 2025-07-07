import { useEffect, useState } from 'react';

// id, size, x, y, opacity, animationDuration

export const StarBackground = () => {
    const [stars, setStars] = useState([]);
    // Dummy state to force re-render on theme change
    const [/* themeVersion */, setThemeVersion] = useState(0);

    useEffect(() => { 
        createStar();

        // Re-create stars on resize (optional, for responsiveness)
        const handleResize = () => createStar();
        window.addEventListener('resize', handleResize);

        // MutationObserver to watch for theme changes
        const observer = new MutationObserver(() => {
            setThemeVersion(v => v + 1); // force re-render
        });
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

        return () => {
            window.removeEventListener('resize', handleResize);
            observer.disconnect();
        };
    }, []); 

    // Always get the current theme at render time
    const isDarkMode = document.documentElement.classList.contains('dark');

    const createStar = () => {
        const numberOfStars = Math.floor(
            (window.innerWidth * window.innerHeight) / 10000
        );
    
        const newStars = []

        for (let i = 0; i < numberOfStars; i++) {
            newStars.push({
                id: i,
                size: Math.random() * 3 + 1,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 4 + 2,
            });
        }

        setStars(newStars);
    };

    return (
        <div className='fixed inset-0 overflow-none pointer-events-none z-0'>
            {stars.map((star) => (
                <div
                    key={star.id}
                    className='star animate-pulse-subtle'
                    style={{
                        width: star.size + "px",
                        height: star.size + "px",
                        left: star.x + "%",
                        top: star.y + "%",
                        opacity: star.opacity,
                        animationDuration: star.animationDuration + "s",
                        // If dark mode, stars are white; if light mode, stars are black
                        background: isDarkMode ? "#fff" : "#000",
                    }}
                />
            ))}
        </div>
    );
};