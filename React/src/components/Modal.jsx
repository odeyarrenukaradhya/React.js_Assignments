import React from "react";

export default function Modal({ item, onClose }) {
  if (!item) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div onClick={onClose} className="absolute inset-0 bg-black/40" />
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative bg-white dark:bg-gray-900 rounded-xl shadow-xl max-w-3xl w-full mx-4 overflow-hidden"
      >
        <div className="p-4 md:p-6">
          <div className="flex justify-between items-start">
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <button
              onClick={onClose}
              aria-label="Close"
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              ✕
            </button>
          </div>
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-48 object-cover rounded-lg mt-4"
          />
          <p className="mt-4 text-gray-700 dark:text-gray-300">
            {item.details}
          </p>
        </div>
      </motion.div>
    </div>
  );
}
