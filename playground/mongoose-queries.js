const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo'); 
var {User} = require('./../server/models/user');

// var todo_id = '58f29eb64da367dad5a4d098'

var user_id = '58f38b08eb2090c3e22a3f6a'

// if (!ObjectID.isValid(id)) {
//     console.log("id is not valid");
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('todo', todo);
// });

// Todo.findById(id).then((todobyId) => {
//     if (!todobyId) {
//         return console.log("id not found");
//     }
//     console.log('todobyID', todobyId);
// }).catch((e) => console.log(e));


User.findById(user_id).then((userId) => {
    if (!userId) {
        return console.log('user not found');
    }
    console.log('user', userId);
}, (e) => console.log(e));
