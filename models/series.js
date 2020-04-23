const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Serie = new Schema({
    name: String,
    status: {
        type: String,
        enum: ['to-watch', 'watching', 'watched']
    },
    comments: [String]
});

const SerieModel = mongoose.model('Serie', Serie);

module.exports = SerieModel;