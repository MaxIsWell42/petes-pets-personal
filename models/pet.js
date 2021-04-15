"use strict";

const mongoose = require('mongoose'),
        Schema = mongoose.Schema;

const PetSchema = new Schema({
    name: { type: String, required: true }
    , birthday: {type: String, required: true }
    , species: { type: String, required: true }
    , picUrl: { type: String }
    , picUrlSq: { type: String }
    , avatarUrl: { type: String, required: true }
    , favoriteFood: { type: String, required: true }
    , description: { type: String, minlength: 140, required: true }
}, {
    timestamps: true
});

const mongoosePaginate = require('mongoose-paginate');
PetSchema.index({ name: 'text', species: 'text', favoriteFood: 'text', description: 'text' }, {name: 'My text index', weights: {name: 10, species: 4, favoriteFood: 2, description: 1}});

mongoosePaginate.paginate.options = {
  limit: 3 // how many records on each page
};

PetSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Pet', PetSchema);
