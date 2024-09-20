// src/components/ui/Table.jsx
import React from 'react';

export function Table({ children }) {
  return (
    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
      {children}
    </table>
  );
}

export function TableHeader({ children }) {
  return (
    <thead className="bg-gray-50 dark:bg-gray-800">
      {children}
    </thead>
  );
}

export function TableBody({ children }) {
  return (
    <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
      {children}
    </tbody>
  );
}

export function TableRow({ children, className = '' }) {
  return (
    <tr className={className}>
      {children}
    </tr>
  );
}

export function TableHead({ children, className = '' }) {
  return (
    <th scope="col" className={`px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300 ${className}`}>
      {children}
    </th>
  );
}

export function TableCell({ children, className = '' }) {
  return (
    <td className={`px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100 ${className}`}>
      {children}
    </td>
  );
}