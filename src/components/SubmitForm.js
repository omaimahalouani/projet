import React, { useState } from 'react';

const SubmitForm = () => {
  const [formData, setFormData] = useState({});
  const userId = 1; 
  const formId = 1; 

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    
    fetch('/api/submit-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ formId, userId, formData }),
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
      <h2>Submit Form</h2>
      <h3>Votre nom</h3>
      <div>
        <label>Nom:</label>
        <input type="text" name="name" onChange={handleInputChange} />
      </div>
      <h3>Votre Email</h3>
      <div>
        <label>Email:</label>
        <input type="email" name="email" onChange={handleInputChange} />
      </div>
      
      <button onClick={handleSubmit}>Soumettre</button>
    </div>
  );
};

export default SubmitForm;
