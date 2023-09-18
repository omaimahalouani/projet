const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const formRoutes = require('./routes/formRoutes'); 
const pageRoutes = require('./routes/pageRoutes'); 
const entryRoutes = require('./routes/entryRoutes'); 

const app = express();
const port = process.env.PORT || 5000; 


app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/form', formRoutes);
app.use('/page', pageRoutes);
app.use('/entry', entryRoutes);
app.use('/api', require('./routes/entryRoutes'));


mongoose.connect('mongodb://localhost:27017/myappdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Erreur de connexion à la base de données :'));
db.once('open', () => {
  console.log('Connexion à la base de données réussie.');
});



