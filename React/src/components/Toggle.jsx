import React, { useEffect, useState } from "react";

export default function Toggle() {
  const [dark, setDark] = useState(() => {
    if (typeof window === "undefined") return false;
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (dark) root.classList.add("dark");
    else root.classList.remove("dark");
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <button
      onClick={() => setDark((d) => !d)}
      aria-label="Toggle dark mode"
      className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
    >
      {dark ? (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
        </svg>
      ) : (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6.76 4.84l-1.8-1.79L3.17 4.84l1.79 1.8L6.76 4.84zM1 13h3v-2H1v2zm10 8h2v-3h-2v3zM20.24 4.84l1.79 1.8 1.8-1.79-1.8-1.8-1.79 1.79zM23 11v2h-3v-2h3zM4.84 17.24l-1.79 1.79 1.79 1.79 1.8-1.79-1.8-1.79zM17.24 19.16l1.79 1.79 1.8-1.79-1.8-1.8-1.79 1.8zM12 5a7 7 0 100 14 7 7 0 000-14z" />
        </svg>
      )}
    </button>
  );
}
