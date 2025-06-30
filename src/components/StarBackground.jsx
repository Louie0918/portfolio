import { useEffect, useState } from 'react';

// id, size, x, y, opacity, animationDuration

export const StarBackground = () => {
    const [stars, setStars] = useState([]);
    const [isDarkMode, setIsDarkMode] = useState(
        document.documentElement.classList.contains('dark')
    );

    useEffect(() => { 
        createStar();

        // Listen for class changes on <html> to update star color dynamically
        const observer = new MutationObserver(() => {
            setIsDarkMode(document.documentElement.classList.contains('dark'));
        });
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

        return () => observer.disconnect();
    }, []); 

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
        {" "}
        {stars.map((star) => (
            <div key={star.id} className='star animate-pulse-subtle' style={{
                width: star.size + "px",
                height: star.size + "px",
                left: star.x + "%",
                top: star.y + "%",
                opacity: star.opacity,
                animationDuration: star.animationDuration + "s",
                background: isDarkMode ? "#fff" : "#000",
            }}/>
        ))}
    </div>
    );
};