import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-blue-200 dark:border-blue-800 mt-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Renukaradhya Odeyar CG. All rights reserved.
        </p>
        <div className="flex gap-4 mt-3 md:mt-0">
          <a href="https://github.com/odeyarrenukaradhya" aria-label="GitHub" className="hover:text-indigo-600">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/renukaradhya-odeyar-9b19a4250/" aria-label="LinkedIn" className="hover:text-indigo-600">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}
