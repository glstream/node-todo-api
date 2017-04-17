const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo'); 
var {User} = require('./../server/models/user');

Todo.remove({}).then((res) => {
    console.log(res);
})

// Todo.findByOneAndRemove()

Todo.findByIdAndRemove('58f52285ddb09725e4b0cf85').then((todo) => {
    console.log(todo);
})