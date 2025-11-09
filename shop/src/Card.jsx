import React from 'react';

/**
 * 
 * @param {object} props 
 * @param {React.ReactNode} props.children 
 * @param {string} props.className 
 */
function Card({ children, className }) {

  const cardClassName = `card ${className || ''}`;

  return (
    <div className={cardClassName}>
      {children}
    </div>
  );
}

export default Card;