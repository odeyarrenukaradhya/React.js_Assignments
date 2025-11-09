import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const buttonStyle = {
    position: 'fixed',
    top: '20px',
    right: '20px',
    zIndex: 1000,
    fontSize: '30px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '10px',
    borderRadius: '50%',
    transition: 'transform 0.2s',
    backgroundColor: theme === 'light' ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.1)',
  };

  return (
    <button onClick={toggleTheme} style={buttonStyle} title="Toggle Theme">
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
};