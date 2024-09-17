import React, { createContext, useEffect, useState } from 'react';

// Create a context to manage the theme
export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    // Load theme from localStorage, default to 'light'
    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

    // Apply the theme when the component mounts and whenever the theme changes
    useEffect(() => {
        if (theme) {
            document.documentElement.setAttribute('data-theme', theme);
            localStorage.setItem('theme', theme); // Save theme to localStorage
        }
    }, [theme]);

    // Method to change the theme
    const toggleTheme = (newTheme) => {
        setTheme(newTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
