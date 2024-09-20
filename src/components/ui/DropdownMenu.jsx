import React from 'react';
import { Menu } from '@headlessui/react';

export function DropdownMenu({ children, className = '' }) {
  return (
    <Menu as="div" className={`relative inline-block text-left ${className}`}>
      {children}
    </Menu>
  );
}

export function DropdownMenuTrigger({ children, className = '' }) {
  return (
    <Menu.Button className={`inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700 ${className}`}>
      {children}
    </Menu.Button>
  );
}

export function DropdownMenuContent({ children, className = '' }) {
  return (
    <Menu.Items className={`origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-800 ${className}`}>
      <div className="py-1">
        {children}
      </div>
    </Menu.Items>
  );
}

export function DropdownMenuItem({ children, onClick }) {
  return (
    <Menu.Item>
      {({ active }) => (
        <button
          onClick={onClick}
          className={`${
            active ? 'bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white' : 'text-gray-700 dark:text-gray-300'
          } block w-full text-left px-4 py-2 text-sm`}
        >
          {children}
        </button>
      )}
    </Menu.Item>
  );
}