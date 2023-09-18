const Entry = require('../models/Entry');


exports.submitForm = async (req, res) => {
  try {
    const { formId, userId, formData } = req.body;

    
    const entry = new Entry({ form_id: formId, user_id: userId, ...formData });
    await entry.save();

    res.status(200).json({ message: 'Formulaire soumis avec succès' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la soumission du formulaire' });
  }
};
