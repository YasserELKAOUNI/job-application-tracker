// src/components/ui/SettingsModal.jsx
import React from 'react';
import { Dialog } from '@headlessui/react';
import Button from './Button';

function SettingsModal({ isOpen, closeModal, userPreferences, setUserPreferences }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserPreferences(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    // Save preferences (possibly to localStorage or backend)
    alert('Settings saved successfully!');
    closeModal();
  };

  return (
    <Dialog open={isOpen} onClose={closeModal} className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4">
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
        <div className="bg-white dark:bg-gray-800 rounded max-w-md mx-auto p-6 z-20">
          <Dialog.Title className="text-lg font-bold mb-4 text-gray-900 dark:text-white">Paramètres</Dialog.Title>
          <div className="space-y-4">
            {/* Theme Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Thème</label>
              <select
                name="theme"
                value={userPreferences.theme}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm p-2 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300"
              >
                <option value="light">Clair</option>
                <option value="dark">Sombre</option>
                <option value="custom">Personnalisé</option>
              </select>
            </div>
            {/* Notification Preferences */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Notifications</label>
              <select
                name="notifications"
                value={userPreferences.notifications}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm p-2 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300"
              >
                <option value="all">Toutes</option>
                <option value="important">Importantes seulement</option>
                <option value="none">Aucune</option>
              </select>
            </div>
            {/* Account Management Placeholder */}
            <div>
              <Button onClick={() => alert('Gérer le Profil non implémenté.')}>Gérer le Profil</Button>
            </div>
          </div>
          <div className="mt-6 flex justify-end">
            <Button variant="outline" onClick={closeModal} className="mr-2">Annuler</Button>
            <Button onClick={handleSave}>Enregistrer</Button>
          </div>
        </div>
      </div>
    </Dialog>
  );
}

export default SettingsModal;