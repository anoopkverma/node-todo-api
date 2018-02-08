const mongoose = require('mongoose');

// const url = 'mongodb://localhost:27017/TodoApp';
const url = 'mongodb://todoapp:rootapp@ds229388.mlab.com:29388/anoodb';

mongoose.Promise = global.Promise
mongoose.connect(url);

module.exports = mongoose;
