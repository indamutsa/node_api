var mongoose = require('mongoose');
const MONGODB_URI = 'mongodb://arsene:arsene1@ds021979.mlab.com:21979/udemy-api';
mongoose.Promise = global.Promise;
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

module.exports = { mongoose };
