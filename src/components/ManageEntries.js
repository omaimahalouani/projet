import React, { useState, useEffect } from 'react';

function ManageEntries() {
  const [entries, setEntries] = useState([]);
  const [pageFilter, setPageFilter] = useState('Tous');
  const [formFilter, setFormFilter] = useState('Tous');
  const [dateFilter, setDateFilter] = useState('Toutes les dates');

  useEffect(() => {
    
  }, []);

  return (
    <div>
      <h2>Liste des soumissions des utilisateurs</h2>

      <div>
        <label>Page :</label>
        <select onChange={(e) => setPageFilter(e.target.value)}>
          <option value="Tous">Tous</option>
        </select>
      </div>

      <div>
        <label>Formulaire :</label>
        <select onChange={(e) => setFormFilter(e.target.value)}>
          <option value="Tous">Tous</option>
          
        </select>
      </div>

      <div>
        <label>Date de création :</label>
        <select onChange={(e) => setDateFilter(e.target.value)}>
          <option value="Toutes les dates">Toutes les dates</option>
         
        </select>
      </div>

      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Nom de la Page</th>
            <th>Formulaire</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry) => (
            <tr key={entry._id}>
              <td>{entry.creationDate}</td>
              <td>{entry.pageName}</td>
              <td>{entry.formName}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        
      </div>
    </div>
  );
}

export default ManageEntries;
