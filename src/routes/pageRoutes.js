const express = require('express');
const router = express.Router();
const Page = require('../models/page'); 

router.post('/create', async (req, res) => {
  try {
    const newPage = new Page(req.body); 
    const savedPage = await newPage.save(); 
    res.json(savedPage); 
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la création de la page' });
  }
});



module.exports = router; 
