import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';
import { Contact } from './Contact';

const PROFILE_PHOTO_URL = 'https://media.licdn.com/dms/image/v2/D5603AQF-DOnh39GOQA/profile-displayphoto-crop_800_800/B56ZjGwwCaG4AU-/0/1755681327461?e=1762992000&v=beta&t=braxIYO4wOz44u0gmjRiiZzKEDta9tW4AcvWup3BIcY'; 

export const Portfolio = () => {
  const { theme } = useContext(ThemeContext);

  const colors = {
    light: {
      background: '#f8f8f8',
      color: '#333333',
      headerBackground: '#eeeeee',
      borderColor: '#052a4fff',
    },
    dark: {
      background: '#282c34',
      color: '#ffffff',
      headerBackground: '#3c414a',
      borderColor: '#555555',
    },
  };

  const currentStyle = colors[theme];

  const portfolioStyle = {
    padding: '40px',
    width: '80%',
    maxWidth: '800px', 
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
    textAlign: 'center',
    backgroundColor: currentStyle.background,
    color: currentStyle.color,
    border: `1px solid ${currentStyle.borderColor}`,
    transition: 'background-color 0.3s, color 0.3s',
    fontFamily: 'Arial, sans-serif',
    margin: 'auto',
  };

  const headerStyle = {
    padding: '20px 0',
    backgroundColor: currentStyle.headerBackground,
    marginBottom: '20px',
    borderRadius: '8px',
    borderBottom: `2px solid ${currentStyle.borderColor}`,
  };
  
  const imageStyle = {
      width: '150px',
      height: '150px',
      borderRadius: '50%',
      objectFit: 'cover',
      border: `4px solid ${currentStyle.color}`,
      marginBottom: '15px',
  };

  const contentStyle = {
      textAlign: 'left',
      padding: '0 20px',
  };
  
  const h2Style = {
      color: theme === 'dark' ? '#9dd5ff' : '#007bff',
  };


  return (
    <div style={portfolioStyle}>
      <header style={headerStyle}>
        <img 
            src={PROFILE_PHOTO_URL} 
            alt="My Profile" 
            style={imageStyle} 
        />
        <h1 style={{...h2Style, fontSize: '2.5em'}}>Renukaradhya Odeyar C G</h1>
        <p style={{fontSize: '1.2em', fontStyle: 'italic'}}>Frontend Developer & UI/UX Designer</p>
      </header>

      <div style={contentStyle}>
          <h2 style={h2Style}>About Me</h2>
          <p>
              Hello! I'm a B.E. information science engineering student with a hands-on experience on HTML,CSS,JavaScript and Restful API's.passionate developer with a handson experience on building elegant and scalable web applications. 
              My journey involves working across the stack, from design to crafting engaging user interfaces. 
          </p>
          <center><p style={{marginTop: '20px'}}>
            Selected Theme is :<strong style={{color: theme === 'dark' ? '#ffcc00' : '#d83fc9ff'}}>{theme.toUpperCase()}</strong>
          </p></center>
      </div>

      <Contact /> 
    </div>
  );
};