// AssignForm.js
import React, { useState } from 'react';

const AssignForm = () => {
  const [formId, setFormId] = useState('');
  const [pageId, setPageId] = useState('');

  const handleAssign = () => {
    
    fetch('/api/assign-form-to-page', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ formId, pageId }),
    })
      .then((response) => response.json())
      .then((data) => {
        
        console.log(data.message);
      })
      .catch((error) => {
        console.error('Erreur:', error);
      });
  };

  return (
    <div>
      <h2>Assigner des formulaires à plusieurs pages</h2>
      <h3>Formulaire</h3>
      <div>
        <label>Formulaire:</label>
        <select onChange={(e) => setFormId(e.target.value)}>
          
           <option value="1">Formulaire 1</option> 
          <option value="2">Formulaire 2</option>
        </select>
      </div>
      <h3>Page</h3>
      <div>
        <label>Page:</label>
        <select onChange={(e) => setPageId(e.target.value)}>
          
          <option value="1">Page 1</option> 
          <option value="2">Page 2</option>
        </select>
      </div>
      <button onClick={handleAssign}>Attribuer</button>
    </div>
  );
};

export default AssignForm;
