// src/components/ui/Button.jsx
import React from 'react';

function Button({ children, variant = 'default', className = '', ...props }) {
  let baseStyle = 'inline-flex items-center justify-center rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2';
  let variantStyle = '';

  switch (variant) {
    case 'ghost':
      variantStyle = 'bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300';
      break;
    case 'outline':
      variantStyle = 'border border-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300';
      break;
    case 'primary':
      variantStyle = 'bg-blue-600 hover:bg-blue-700 text-white';
      break;
    default:
      variantStyle = 'bg-gray-200 hover:bg-gray-300 text-gray-700';
  }

  return (
    <button className={`${baseStyle} ${variantStyle} ${className}`} {...props}>
      {children}
    </button>
  );
}

export default Button;