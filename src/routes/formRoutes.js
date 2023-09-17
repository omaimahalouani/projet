// formRoutes.js

const express = require('express');
const app = express();
const router = express.Router();
const Form = require('../models/Form'); 


router.post('/create', async (req, res) => {
  try {
    const newForm = new Form(req.body); 
    const savedForm = await newForm.save(); 
    res.json(savedForm); 
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la création du formulaire' });
  }
});


router.get('/list', async (req, res) => {
  try {
    const forms = await Form.find(); 
    res.json(forms); 
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des formulaires' });
  }
});


router.get('/read/:formId', async (req, res) => {
  try {
    const form = await Form.findById(req.params.formId);
    if (!form) {
      return res.status(404).json({ error: 'Formulaire non trouvé' });
    }
    res.json(form); 
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération du formulaire' });
  }
});

router.put('/update/:formId', async (req, res) => {
  try {
    const updatedForm = await Form.findByIdAndUpdate(
      req.params.formId,
      req.body,
      { new: true } 
    );

    if (!updatedForm) {
      return res.status(404).json({ error: 'Formulaire non trouvé' });
    }

    res.json(updatedForm); 
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la mise à jour du formulaire' });
  }
});

router.delete('/delete/:formId', async (req, res) => {
  try {
    const deletedForm = await Form.findByIdAndRemove(req.params.formId);

    if (!deletedForm) {
      return res.status(404).json({ error: 'Formulaire non trouvé' });
    }

    res.json({ message: 'Formulaire supprimé avec succès' });
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la suppression du formulaire' });
  }
});


router.delete('/delete/all', async (req, res) => {
  try {
    await Form.deleteMany({}); 

    res.json({ message: 'Tous les formulaires ont été supprimés avec succès' });
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la suppression de tous les formulaires' });
  }
});




module.exports = router; 
const PORT = process.env.PORT || 3000; 

app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});