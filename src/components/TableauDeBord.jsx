// src/components/TableauDeBord.jsx
import React, { useState, useRef, useEffect } from 'react';
import { Upload, Briefcase, Download, Settings, BarChart2, Search, ArrowLeft } from 'lucide-react';
import Button from './ui/Button';
import Input from './ui/Input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/Table';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/DropdownMenu';
import DataUploader from './DataUploader';
import SettingsModal from './ui/SettingsModal';
import PieChart from './ui/PieChart';
import LineChart from './ui/LineChart';
import ScatterPlot from './ui/ScatterPlot';
import Notification from './ui/Notification';

// Import export functions
import { exportToCSV, exportToExcel, exportToPDF } from '../utils/exportUtils';

function TableauDeBord() {
  const [jobApplications, setJobApplications] = useState([]);
  const [filter, setFilter] = useState('');
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [userPreferences, setUserPreferences] = useState({
    theme: 'light',
    notifications: 'all'
  });
  const [notifications, setNotifications] = useState([]);
  const [isVisualizationOpen, setIsVisualizationOpen] = useState(false);

  const dataUploaderRef = useRef(null);

  // Handle filtering based on multiple fields
  const filteredApplications = jobApplications.filter(job =>
    job.company.toLowerCase().includes(filter.toLowerCase()) ||
    job.position.toLowerCase().includes(filter.toLowerCase()) ||
    job.status.toLowerCase().includes(filter.toLowerCase()) ||
    job.tags.join(', ').toLowerCase().includes(filter.toLowerCase())
  );

  const handleJobUpdate = (id, field, value) => {
    setJobApplications(jobs => jobs.map(job =>
      job.id === id ? { ...job, [field]: value } : job
    ));
  };

  // Apply theme based on userPreferences
  useEffect(() => {
    if (userPreferences.theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    // Handle custom themes as needed
  }, [userPreferences.theme]);

  // Handle Notifications
  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    const dueApplications = jobApplications.filter(job =>
      job.rappelDeRelance &&
      job.dateDeRelance &&
      new Date(job.dateDeRelance).toISOString().split('T')[0] === today
    );

    if (dueApplications.length > 0) {
      const messages = dueApplications.map(job => `Rappel: Suivi pour ${job.company} (${job.position}) aujourd'hui.`);
      setNotifications(messages);
    }
  }, [jobApplications]);

  const closeNotification = (index) => {
    setNotifications(notifications.filter((_, i) => i !== index));
  };

  const handleImporterClick = () => {
    if (dataUploaderRef.current) {
      dataUploaderRef.current.triggerFileInput();
    }
  };

  const handleVisualisationClick = () => {
    setIsVisualizationOpen(true);
  };

  const handleReturnClick = () => {
    setIsVisualizationOpen(false);
  };

  return (
    <div className={`min-h-screen ${userPreferences.theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} font-sans`}>
      {/* Navigation Bar */}
      <nav className="border-b border-gray-100 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex space-x-8">
              {/* Import Button */}
              <Button
                variant="ghost"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium"
                onClick={handleImporterClick}
              >
                <Upload className="h-5 w-5 mr-2" />
                Importer
              </Button>
              {/* Emplois Button */}
              <Button
                variant="ghost"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium"
              >
                <Briefcase className="h-5 w-5 mr-2" />
                Emplois
              </Button>
              {/* Export Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Button
                    variant="ghost"
                    className="inline-flex items-center px-1 pt-1 text-sm font-medium"
                  >
                    <Download className="h-5 w-5 mr-2" />
                    Exporter
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={() => exportToCSV(jobApplications)}>Exporter en CSV</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => exportToPDF(jobApplications)}>Exporter en PDF</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => exportToExcel(jobApplications)}>Exporter en Excel</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              {/* Settings Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Button
                    variant="ghost"
                    className="inline-flex items-center px-1 pt-1 text-sm font-medium"
                    onClick={() => setIsSettingsOpen(true)}
                  >
                    <Settings className="h-5 w-5 mr-2" />
                    Paramètres
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={() => setIsSettingsOpen(true)}>Ouvrir les Paramètres</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              {/* Visualisation Button */}
              <Button
                variant="ghost"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium"
                onClick={handleVisualisationClick}
              >
                <BarChart2 className="h-5 w-5 mr-2" />
                Visualisation
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Settings Modal */}
      <SettingsModal
        isOpen={isSettingsOpen}
        closeModal={() => setIsSettingsOpen(false)}
        userPreferences={userPreferences}
        setUserPreferences={setUserPreferences}
        user={null} // Replace with actual user data if available
      />

      {/* Notifications */}
      {notifications.map((message, index) => (
        <Notification key={index} message={message} onClose={() => closeNotification(index)} />
      ))}

      {/* DataUploader Component (hidden) */}
      <DataUploader setData={setJobApplications} ref={dataUploaderRef} />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {isVisualizationOpen ? (
            <div className="flex flex-col space-y-4">
              {/* Return Button */}
              <div className="flex justify-end">
                <Button onClick={handleReturnClick} className="flex items-center">
                  <ArrowLeft className="h-5 w-5 mr-2" />
                  Retour
                </Button>
              </div>
              {/* Data Visualizations */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <PieChart data={jobApplications} />
                <LineChart data={jobApplications} />
                <ScatterPlot data={jobApplications} />
              </div>
            </div>
          ) : (
            <>
              {/* Header with Search */}
              <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">Tableau de Bord</h1>
                <div className="flex space-x-4">
                  <Input
                    type="text"
                    placeholder="Rechercher..."
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="max-w-xs"
                  />
                  <Button variant="outline">
                    <Search className="h-5 w-5 mr-2" />
                    Rechercher
                  </Button>
                </div>
              </div>

              {/* Data Visualizations */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <PieChart data={jobApplications} />
                <LineChart data={jobApplications} />
                <ScatterPlot data={jobApplications} />
              </div>

              {/* Editable Table */}
              <div className="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-lg mt-8">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Entreprise</TableHead>
                      <TableHead>Poste</TableHead>
                      <TableHead>Date de postulation</TableHead>
                      <TableHead>Statut</TableHead>
                      <TableHead>Date de relance</TableHead>
                      <TableHead>Rappel de relance</TableHead>
                      <TableHead>Prochaines étapes</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredApplications.map((job) => (
                      <TableRow key={job.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                        {/* Entreprise */}
                        <TableCell>
                          <input
                            type="text"
                            value={job.company}
                            onChange={(e) => handleJobUpdate(job.id, 'company', e.target.value)}
                            className="w-full bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md px-2 py-1 dark:text-gray-900"
                          />
                        </TableCell>
                        {/* Poste */}
                        <TableCell>
                          <input
                            type="text"
                            value={job.position}
                            onChange={(e) => handleJobUpdate(job.id, 'position', e.target.value)}
                            className="w-full bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md px-2 py-1 dark:text-gray-900"
                          />
                        </TableCell>
                        {/* Date de postulation */}
                        <TableCell>
                          <input
                            type="date"
                            value={job.dateApplied}
                            onChange={(e) => handleJobUpdate(job.id, 'dateApplied', e.target.value)}
                            className="w-full bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md px-2 py-1 dark:text-gray-900"
                          />
                        </TableCell>
                        {/* Statut */}
                        <TableCell>
                          <select
                            value={job.status}
                            onChange={(e) => handleJobUpdate(job.id, 'status', e.target.value)}
                            className={`text-sm font-medium rounded-full px-3 py-1 ${
                              job.status === 'Postulé' ? 'bg-green-100 text-green-800' :
                              job.status === 'Entretien' ? 'bg-blue-100 text-blue-800' :
                              job.status === 'Offre' ? 'bg-purple-100 text-purple-800' :
                              'bg-red-100 text-red-800'
                            }`}
                          >
                            <option value="Postulé">Postulé</option>
                            <option value="Entretien">Entretien</option>
                            <option value="Offre">Offre</option>
                            <option value="Refusé">Refusé</option>
                          </select>
                        </TableCell>
                        {/* Date de relance */}
                        <TableCell>
                          <input
                            type="date"
                            value={job.dateDeRelance}
                            onChange={(e) => handleJobUpdate(job.id, 'dateDeRelance', e.target.value)}
                            className="w-full bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md px-2 py-1 dark:text-gray-900"
                          />
                        </TableCell>
                        {/* Rappel de relance */}
                        <TableCell className="text-center">
                          <input
                            type="checkbox"
                            checked={job.rappelDeRelance}
                            onChange={(e) => handleJobUpdate(job.id, 'rappelDeRelance', e.target.checked)}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                          />
                        </TableCell>
                        {/* Prochaines étapes */}
                        <TableCell>
                          <input
                            type="text"
                            value={job.nextSteps}
                            onChange={(e) => handleJobUpdate(job.id, 'nextSteps', e.target.value)}
                            className="w-full bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md px-2 py-1 dark:text-gray-900"
                          />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                {/* Return Button */}
                <div className="p-4">
                  <Button onClick={() => window.history.back()} className="flex items-center">
                    <ArrowLeft className="h-5 w-5 mr-2" />
                    Retour
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      );
    }

    export default TableauDeBord;
