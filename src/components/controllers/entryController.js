const Entry = require('../models/Entry'); 


exports.getEntries = async (req, res) => {
  try {
    const entries = await Entry.find(); 
    res.json(entries);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des soumissions' });
  }
};
