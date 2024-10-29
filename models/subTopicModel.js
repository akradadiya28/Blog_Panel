const mongoose = require('mongoose');

const subTopicSchema = new mongoose.Schema({
    subTopic: { type: String, required: true },
    topic: { type: mongoose.Schema.Types.ObjectId, ref: 'topics', required: true }
});

module.exports = mongoose.model('subTopics', subTopicSchema);