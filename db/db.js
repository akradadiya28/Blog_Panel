const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://arpitradadiya:XABpNF2aHhD9wwyj@cluster0.8p5oc.mongodb.net/Blog_Data')
    .then(() => console.log('Connected to database'))
    .catch((err) => console.log(err));

module.exports = { mongoose }; 
