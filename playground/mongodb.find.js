//var MongoClient = require('mongodb').MongoClient;
var {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (error, db) => {
      if (error) {
       return console.log('unable to connect to mongo db server');
    }

    console.log('connected to mongodb Server')

    // db.collection('Todos').find({
    //     _id: new ObjectID('58f04c7a9fc131583a76229e')
    // }).toArray().then((docs) => {
    //     console.log('ToDos:')
    //     console.log(JSON.stringify(docs, undefined, 2))
    // }, (err)=>{
    //     console.log('Coundt get toDos', err)
    // })
     db.collection('Users').find({name:'Grayson'}).toArray().then((docs) => {
    // console.log(`ToDos count:`, count)
        console.log(JSON.stringify(docs, undefined, 2))
        
    }, (err)=>{
        console.log('Coundt get toDos', err)
    })
    //db.close();

})

