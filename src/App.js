import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductList from './ProductList';

const App = () => {
  const [imports, setImports] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const serverURL = 'http://localhost:3001';

  useEffect(() => {
    const fetchImports = async () => {
      try {
        const response = await axios.get(`${serverURL}/imports`);
        setImports(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchImports();
  }, []);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setSelectedFiles(files);
  };

  const handleFileUpload = async () => {
    const uploadedImports = [];

    for (const file of selectedFiles) {
      if (file) {
        const formData = new FormData();
        formData.append('file', file);

        try {
          await fetch(`${serverURL}/import`, {
            method: 'POST',
            body: formData,
          });

          uploadedImports.push(file);

          if (uploadedImports.length === selectedFiles.length) {
            window.location.reload();
          }
        } catch (error) {
          console.error(error);
        }
      }
    }

    setSelectedFiles([]);
  };



  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-8">
        <div className="mb-4">
          <input type="file" multiple={true} onChange={handleFileChange} />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
            onClick={handleFileUpload}
          >
            Send file
          </button>
        </div>

        <ProductList json={imports} />
      </div>
    </div>
  );
};

export default App;
