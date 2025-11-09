import React from 'react';

// Create a Context object with a default value (an object with 'theme' and 'toggleTheme' function)
export const ThemeContext = React.createContext({
  theme: 'light',
  toggleTheme: () => {},
});