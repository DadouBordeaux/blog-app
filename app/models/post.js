/*
This file define document schema for post
*/
'use strict'
let mongoose = require('mongoose');

/* Permalinks, beautiful urls */
let slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

// Create schema Post
const PostSchema = new mongoose.Schema({
    type: {
        type: String,
        require: true
    },
    lang:{
        type: String,
        require: true
    },
    title: {
        type: String,
        require: true
    },
    location: String,
    content: {
        type:String,
        require: true
    },
    excerpt: {
        type:String,
        require: true
    },
    img: {
        type: String,
        require: true
    },
    gallery: {
        type: Array,
        default: []
    },
    categories: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'category'
    }],
    visible: {
        type: Boolean,
        default: false
    },
    social_networks: {
        type: Boolean,
        default: true
    },
    comments: {
        type: Boolean,
        default: true
    },
    slug: {
        type: String,
        slug: "title",
        slug_padding_size: 2,
        unique: true
    }
},
{
    timestamps: true
});


/* Export of Post Schema */
module.exports = mongoose.model('Post', PostSchema);
