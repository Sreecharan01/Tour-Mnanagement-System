const mongoose = require('mongoose');

const settingsSchema = new mongoose.Schema({}, { strict: false, timestamps: true });

module.exports = mongoose.model('Settings', settingsSchema);
