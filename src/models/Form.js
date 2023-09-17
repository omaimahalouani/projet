const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  name: String,
  Prenom: String,
  Age: Number,
  Societe: String,
  address: String,
  postalCode: String,
  city: String,
  telephone: String,
  email: String,
  dateDemande: Date,
  heureDemande: String,
  siteWeb: String,
  fichier: String, 
  sujetDemande: String,
  isMadameSelected: Boolean,
  isMonsieurSelected: Boolean,
  
});

const Form = mongoose.model('Form', formSchema);

module.exports = Form;
