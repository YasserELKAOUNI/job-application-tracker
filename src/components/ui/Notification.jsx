// src/components/ui/Notification.jsx
import React from 'react';
import { X } from 'lucide-react';
import Button from './Button';

function Notification({ message, onClose }) {
  return (
    <div className="fixed bottom-4 right-4 bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100 px-4 py-3 rounded shadow-lg flex items-center space-x-4">
      <span>{message}</span>
      <Button variant="ghost" onClick={onClose}>
        <X className="h-4 w-4" />
      </Button>
    </div>
  );
}

export default Notification;