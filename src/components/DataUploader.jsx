// src/components/DataUploader.jsx
import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import * as XLSX from 'xlsx';

const DataUploader = forwardRef(({ setData }, ref) => {
  const fileInputRef = useRef(null);

  useImperativeHandle(ref, () => ({
    triggerFileInput: () => {
      if (fileInputRef.current) {
        fileInputRef.current.click();
      }
    }
  }));

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (evt) => {
      try {
        const bstr = evt.target.result;
        const fileExtension = file.name.split('.').pop().toLowerCase();

        let jsonData;
        if (fileExtension === 'xlsx' || fileExtension === 'xls') {
          const workbook = XLSX.read(bstr, { type: 'binary' });
          const worksheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[worksheetName];
          jsonData = XLSX.utils.sheet_to_json(worksheet);
        } else if (fileExtension === 'csv') {
          const workbook = XLSX.read(bstr, { type: 'binary' });
          const worksheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[worksheetName];
          jsonData = XLSX.utils.sheet_to_json(worksheet);
        } else if (fileExtension === 'json') {
          jsonData = JSON.parse(bstr);
        } else {
          throw new Error('Unsupported file type');
        }

        const cleanedData = jsonData.map(item => ({
          Company: item.Company || 'Unknown',
          DateApplied: new Date(item.DateApplied),
          Status: item.Status || 'Unknown'
        }));

        setData(cleanedData);
        alert('Data imported successfully!');
      } catch (error) {
        console.error('Error parsing file:', error);
        alert('Failed to parse the file. Please ensure it is a valid Excel, CSV, or JSON file.');
      }
    };

    reader.onerror = () => {
      console.error('File reading has failed');
      alert('Failed to read the file. Please try again.');
    };

    reader.readAsBinaryString(file);
  };

  return (
    <input
      type="file"
      accept=".xlsx, .xls, .csv, .json"
      ref={fileInputRef}
      onChange={handleFileUpload}
      style={{ display: 'none' }}
    />
  );
});

export default DataUploader;