import React, { useState, useEffect } from 'react'

const ThemeSelector = () => {
    // Get the user's theme from localStorage or fallback to 'light' theme
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

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
        <div onClick={(e) => handleThemeChange(e.target.value)} className="join join-horizontal">
            <input
                type="radio"
                name="theme-buttons"
                className="btn theme-controller join-item"
                aria-label="Light"
                value="light" />
            <input
                type="radio"
                name="theme-buttons"
                className="btn theme-controller join-item"
                aria-label="Cyberpunk"
                value="cyberpunk" />
            <input
                type="radio"
                name="theme-buttons"
                className="btn theme-controller join-item"
                aria-label="Dark"
                value="dark" />
            <input
                type="radio"
                name="theme-buttons"
                className="btn theme-controller join-item"
                aria-label="Retro"
                value="retro" />
        </div>
    )
}

export default ThemeSelector