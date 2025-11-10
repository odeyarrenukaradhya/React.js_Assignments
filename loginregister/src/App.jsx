import React, { useState } from 'react';
import NavLink from './NavLink';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';

export default function App() {
  const [activeTab, setActiveTab] = useState('login');

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center font-sans p-4">
      <div className="mb-8">
        <nav className="flex space-x-4">
          <NavLink tabName="login" activeTab={activeTab} setActiveTab={setActiveTab}>Login</NavLink>
          <NavLink tabName="register" activeTab={activeTab} setActiveTab={setActiveTab}>Register</NavLink>
        </nav>
      </div>

      <main className="w-full flex items-center justify-center">
        {activeTab === 'login' ? <LoginPage /> : <RegisterPage />}
      </main>
    </div>
  );
}
