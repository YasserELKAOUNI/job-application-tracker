// src/components/ui/Input.jsx
import React from 'react';

function Input({ className = '', ...props }) {
  return (
    <input
      className={`block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-500 dark:text-white sm:text-sm ${className}`}
      {...props}
    />
  );
}

export default Input;
