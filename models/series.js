const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Comment = new Schema({
    author: {
        type: String,
        maxlength: 45
    },
    message: String
});

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
    comments: [Comment]
});

const SerieModel = mongoose.model('Serie', Serie);
const CommentModel = mongoose.model('Comment', Comment);

module.exports = {
    Series: SerieModel,
    Comment: CommentModel
};