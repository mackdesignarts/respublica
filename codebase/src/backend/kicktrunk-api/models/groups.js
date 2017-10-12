var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/myappdatabase');

// TODO: remove ->
var data = require('../data/groups.json');
console.log("JSON data:");
console.log(data);
/*
var fs = require('fs');
var data = fs.readFile('../data/groups.json');
*/

var Schema = mongoose.Schema;

var groupSchema = new Schema({
    name: { type: String, required: true, unique: true },

    dateCreated: String,
    createdBy: String,
    active: Boolean,
    posts: [{
        id : String
    }],
    description: String,
    keywords: [String],
    members: [{
        id: String,
        status: String
    }],
    rank: Number,
    image: String

});
/*
var Groups = mongoose.Model("Groups", groupSchema);
*/
var Groups = data;
module.exports = Groups;