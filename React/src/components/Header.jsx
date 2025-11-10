import React from "react";
import Toggle from "./Toggle";

export default function Header({ sections }) {
  return (
    <header className="fixed w-full top-0 left-0 z-40 bg-white/70 backdrop-blur-md dark:bg-gray-900/60 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <a href="#home" className="font-semibold text-xl tracking-tight">
          Renukaradhya Odeyar CG
        </a>
        <nav className="hidden md:flex gap-6 items-center">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="hover:text-indigo-600 dark:hover:text-indigo-400 transition"
            >
              {s.label}
            </a>
          ))}
          <Toggle />
        </nav>
        {/* mobile menu */}
        <div className="md:hidden flex items-center gap-3">
          <Toggle />
          <button
            onClick={() => {
              const el = document.getElementById("mobile-nav");
              if (el) el.classList.toggle("hidden");
            }}
            aria-label="Open menu"
            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
      <div id="mobile-nav" className="md:hidden hidden px-4 pb-4">
        <div className="flex flex-col gap-3">
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="block py-2">
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
