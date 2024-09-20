import React, { useState } from 'react';
import DataUploader from './components/DataUploader';
import DataVisualizer from './components/DataVisualizer';

function App() {
  const [data, setData] = useState([]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Job Application Tracker</h1>
      <DataUploader setData={setData} />
      {data.length > 0 && <DataVisualizer data={data} />}
    </div>
  );
}

export default App;