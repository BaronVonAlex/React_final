// src/components/ThemeToggle.js
import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label="Toggle theme"
      style={{
        padding: '8px 16px',
        borderRadius: '20px',
        border: 'none',
        background: isDarkMode ? '#f8f9fa' : '#2d2d2d',
        color: isDarkMode ? '#2d2d2d' : '#f8f9fa',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        transition: 'all 0.3s ease'
      }}
    >
      {isDarkMode ? '🌞 Light' : '🌙 Dark'}
    </button>
  );
};

export default ThemeToggle;