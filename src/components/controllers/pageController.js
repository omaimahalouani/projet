const Page = require('../models/Page');


exports.assignFormToPage = async (req, res) => {
  try {
    const { formId, pageId } = req.body;

    
    const page = await Page.findById(pageId);

    if (!page) {
      return res.status(404).json({ message: 'Page non trouvée' });
    }

  
    page.form_id = formId;
    await page.save();

    res.status(200).json({ message: 'Formulaire attribué à la page avec succès' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de l\'attribution du formulaire à la page' });
  }
};
