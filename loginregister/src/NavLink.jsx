import React from 'react';

const NavLink = ({ tabName, activeTab, setActiveTab, children }) => {
  const isActive = activeTab === tabName;

  return (
    <button
      onClick={() => setActiveTab(tabName)}
      className={`px-4 py-2 text-lg font-semibold transition-colors duration-200 ${
        isActive ? 'text-blue-600' : 'text-gray-500 hover:text-blue-600'
      }`}
    >
      {children}
      {isActive && <div className="mt-1 h-1 bg-blue-600 rounded-full"></div>}
    </button>
  );
};

export default NavLink;
