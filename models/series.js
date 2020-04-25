const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Serie = new Schema({
    name: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['to-watch', 'watching', 'watched'],
        required: true
    },
    comments: [String]
});

const SerieModel = mongoose.model('Serie', Serie);

module.exports = SerieModel;