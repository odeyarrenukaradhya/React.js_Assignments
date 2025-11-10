import React from 'react';

const FormContainer = ({ title, children }) => {
  return (
    <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">{title}</h2>
      {children}
    </div>
  );
};

export default FormContainer;
