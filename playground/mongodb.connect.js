//var MongoClient = require('mongodb').MongoClient;
var {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (error, db) => {


    if (error) {
       return console.log('unable to connect to mongo db server');
    }

    console.log('connected to mongodb Server')



    // db.collection('Todos').insertOne({
    //     text: 'Something created todo',
    //     completed: false
    // }, (err, result) => {
    //     if (err){
    //         return console.log('unable to insert Todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2))
    // })


//insert new doc into users collection (one user with name, age, location)

    db.collection('Users').insertOne({
        name: 'Grayson',
        age: 24,
        location: 'San Francisco'
    }, (err, result) => {
        if (err){
            return console.log('unable to add user' , err);
        }

        console.log(JSON.stringify(result.ops, undefined, 2))
    })
    db.close();

})

