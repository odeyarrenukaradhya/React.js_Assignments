import React from 'react';

const InputField = ({ id, type, placeholder, value, onChange }) => (
  <div className="mb-4">
    <label htmlFor={id} className="sr-only">{placeholder}</label>
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
      required
    />
  </div>
);

export default InputField;
