const _ = require('lodash')
const express = require('express');
const bodyParser = require('body-parser');

const {ObjectID} = require('mongodb');
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/Todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc)=>{
        res.send(doc)
            .status(200);
    }, (err) => {
        res.send(err)
            .status(400);
    });

});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }, (err) => {
        res.send(err)
            .status(400);
    });
})

// GET todos/i153h373234921 (id)

app.get('/todos/:todosId', (req, res) => {
    var todosId = req.params.todosId

    if (!ObjectID.isValid(todosId)) {
    return res.status(404).send();
    }

Todo.findById(todosId).then((todo) => {
    res.send({todo})
    console.log('todo', todo);
    }).catch((e) => {
        res.status(404).send()});
});

app.delete('/todos/:todosId', (req, res) => {
    var todosId = req.params.todosId
     if (!ObjectID.isValid(todosId)) {
    return res.status(404).send();
    }

    Todo.findByIdAndRemove(todosId).then((todo) => {
    if (!todo) {
        return res.status(404).send('Notodo to remove');
    }
    
    res
    .status(200)
    .send({todo})
    ;
    }).catch((e) => {
        res.status(404).send()});
})


app.patch('/todos/:todosId', (req, res) => {
    var todosId = req.params.todosId
    var body = _.pick(req.body, ['text', 'completed'])
    
    if (!ObjectID.isValid(todosId)) {
    return res.status(404).send();
    }

    if(_.isBoolean(body.completed) && body.completed){
        body.completedAt = new Date().getTime();
    } else {
        body.completed = false;
        body.completedAt = null;
    }
    Todo.findByIdAndUpdate(todosId, {$set: body}, {new: true}).then((todo)=>{
        if(!todo){
            return res.status(404).send();
        }
        res.send({todo});

    }).catch((e) => {
        res.status(400).send();
    })
});

//Users

app.get('/users', (req, res) => {
    User.find().then((users) => {
        res.send({users})
    }).catch((e) => {
        res.status(404).send()});
})

app.get('/user/:userId', (req, res) => {
    var userId = req.params.userId;

    if (!ObjectID.isValid(userId)) {
    return res.status(404).send();
    }
    
    User.findById(userId).then((user) => {
        res.send({user})
    }).catch((e) => {
        res.status(404).send()});

})

app.listen(port, ()=>{
    console.log(`server started on port ${port}`)
});

module.exports = {app};