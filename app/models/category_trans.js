/*
This file define document schema for category translation
*/

'use strict'

let mongoose = require('mongoose');

// Create schema Category translation
const CategoryTransSchema = new mongoose.Schema({
  label: {
    type: String,
    require: true
  },
  lang: {
    type: String,
    require: true
  }
});

/* Export of Category Translation Schema */
module.exports = mongoose.model('CateogoryTrans', CategoryTransSchema);
