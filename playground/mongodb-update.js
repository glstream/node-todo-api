//var MongoClient = require('mongodb').MongoClient;
var {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (error, db) => {
      if (error) {
       return console.log('unable to connect to mongo db server');
    }
    console.log('connected to mongodb Server');

   // updating mongodb
//    db.collection('Todos').findOneAndUpdate({
//        _id: new ObjectID('58f2769004181f91aafbfc13')
//    }, {
//        $set: {
//            complete: true
//        }
//    }, {
//        returnOriginal: false
//    }).then((res)=> {
//        console.log(res);
//    })
//update Tonya to Grayson

   db.collection('Users').findOneAndUpdate({
       _id: new ObjectID('58f26e9037794f9e4768d9cd')
   }, {$set: {name: 'Grayson'}, $inc:{age:+5} }, {
       returnOriginal: false
   }).then((res)=> {
       console.log(res);
   })

    //db.close();

})

