import React, { useContext } from 'react';
import { ThemeProvider } from './ThemeProvider';
import { Portfolio } from './components/Portfolio';
import { ThemeToggle } from './components/ThemeToggle';
import { ThemeContext } from './ThemeContext';

const AppContent = () => {
    const { theme } = useContext(ThemeContext);

    const appContainerStyle = {
        minHeight: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 20px',
        boxSizing: 'border-box',
        backgroundColor: theme === 'dark' ? '#121212' : '#ffffff', 
        transition: 'background-color 0.5s',
    };

    return (
        <div style={appContainerStyle}>
            <ThemeToggle />
            <Portfolio />
        </div>
    );
}

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;