var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/ToDoApp');
//mongo db heroku
//mongodb://heroku_l8dsm8ts:n2unk9fd9tq2ao4mpf6k8t288b@ds161890.mlab.com:61890/heroku_l8dsm8ts

module.exports = {mongoose}