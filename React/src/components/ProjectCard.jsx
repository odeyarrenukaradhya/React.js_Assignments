import React from "react";

export default function ProjectCard({ project, onOpen }) {
  return (
    <div className="bg-white dark:bg-blue-800 rounded-2xl shadow-md overflow-hidden hover:scale-[1.01] transform transition">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold text-lg">{project.title}</h3>
        <p className="text-sm text-blue-600 dark:text-blue-300 mt-2">
          {project.short}
        </p>
        <div className="flex gap-2 mt-3 flex-wrap">
          {project.tech.map((t) => (
            <span key={t} className="text-xs px-2 py-1 border rounded-full">
              {t}
            </span>
          ))}
        </div>
        <div className="mt-4 flex items-center justify-between">
          <button
            onClick={() => onOpen(project)}
            className="text-sm px-3 py-2 rounded-lg border hover:bg-indigo-50 dark:hover:bg-indigo-900/40"
          >
            Details
          </button>
          <a href="#" className="text-sm text-indigo-600">
            Live →
          </a>
        </div>
      </div>
    </div>
  );
}
