/*
This file define document schema for category
*/

'use strict'

let mongoose = require('mongoose');

// Create schema Category
const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  }
});

/* Export of Category Schema */
module.exports = mongoose.model('Cateogory', CategorySchema);
