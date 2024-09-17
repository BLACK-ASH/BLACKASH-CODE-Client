import React, { useState, useEffect } from 'react'

const ThemeSelector = () => {
    // Get the user's theme from localStorage or fallback to 'light' theme
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
const themes = ["cupcake", "dark","cyberpunk","retro"]

    useEffect(() => {
        // Apply the theme to the HTML tag
        document.documentElement.setAttribute('data-theme', theme);

        // Save the theme to localStorage
        localStorage.setItem('theme', theme);
    }, [theme]);

    // Function to switch theme
    const handleThemeChange = (newTheme) => {
        setTheme(newTheme);
    };
    return (
        <div onClick={(e) => handleThemeChange(e.target.value)} className="grid grid-cols-2 gap-2 ">
            {themes.map((item, index) => (
                <input
                    key={index}
                    type="radio"
                    id={item}
                    checked={theme === item}
                    name="theme-buttons"
                    className="btn theme-controller join-item"
                    aria-label={item}
                    value={item} />
            ))}
        </div>
    )
}

export default ThemeSelector