// backend/models/dataModel.js
const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  zodiacSign: String,
  personalityType: String,
  relevantValues: [String]
});

module.exports = mongoose.model('Data', dataSchema);
