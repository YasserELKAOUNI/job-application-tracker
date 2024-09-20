// src/utils/exportUtils.js
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

// Export to CSV
export const exportToCSV = (data, filename = 'data.csv') => {
  const worksheet = XLSX.utils.json_to_sheet(data);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'JobApplications');
  XLSX.writeFile(workbook, filename);
};

// Export to Excel
export const exportToExcel = (data, filename = 'data.xlsx') => {
  const worksheet = XLSX.utils.json_to_sheet(data);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'JobApplications');
  XLSX.writeFile(workbook, filename);
};

// Export to PDF
export const exportToPDF = (data, filename = 'data.pdf') => {
  const doc = new jsPDF();
  doc.text('Job Applications', 14, 16);
  doc.autoTable({
    head: [['ID', 'Company', 'Position', 'Location', 'Salary', 'Date Applied', 'Status', 'Date de relance', 'Rappel de relance', 'Next Steps', 'Recruiter Contact', 'Tags', 'Notes']],
    body: data.map(job => [
      job.id,
      job.company,
      job.position,
      job.location,
      job.salary,
      job.dateApplied,
      job.status,
      job.dateDeRelance,
      job.rappelDeRelance ? 'Oui' : 'Non',
      job.nextSteps,
      job.recruiterContact,
      job.tags.join(', '),
      job.notes
    ]),
    startY: 20,
  });
  doc.save(filename);
};