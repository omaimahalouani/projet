// models/Page.js

const mongoose = require('mongoose');

const pageSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  link: {
    type: String,
    unique: true, 
    required: true,
  },
});

const Page = mongoose.model('Page', pageSchema);

module.exports = Page;
