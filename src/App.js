import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductList from './ProductList';

const App = () => {
  const [file, setFile] = useState(null);
  const [imports, setImports] = useState([]);

  useEffect(() => {
    const fetchImports = async () => {
      try {
        const response = await axios.get('http://localhost:3001/imports');
        setImports(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchImports();
  }, []);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleFileUpload = async () => {
    if (file) {
      const formData = new FormData();
      formData.append('file', file);

      try {
        await fetch(`${serverURL}/import`, {
          method: 'POST',
          body: formData,
        });

        setFile(null);
        window.location.reload();
      } catch (error) {
        console.error(error);
      }
    }
  };


  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-8">
        <div className="mb-4">
          <input type="file" onChange={handleFileChange} />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
            onClick={handleFileUpload}
          >
            Enviar Arquivo
          </button>
        </div>

        <ProductList json={imports} />
      </div>
    </div>
  );
};

export default App;
