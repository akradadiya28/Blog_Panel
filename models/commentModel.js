const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    comment: { type: String, required: true },
    blog: { type: mongoose.Schema.Types.ObjectId, ref: 'blogs', required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true },
});

module.exports = mongoose.model('comments', commentSchema);