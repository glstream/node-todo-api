//var MongoClient = require('mongodb').MongoClient;
var {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (error, db) => {
      if (error) {
       return console.log('unable to connect to mongo db server');
    }
    console.log('connected to mongodb Server');

    //deleteMany
    // db.collection('Todos').deleteMany({text:'Get fish'}).then((success)=>{
    //     console.log(success);
    // })
    //deleteOne
    // db.collection('Todos').deleteOne({text: 'Get fish'}).then((result)=>{
    //     console.log(result);
    // })
    //find one and delete
// db.collection('Todos').findOneAndDelete({completed: false}).then((result)=>{
//     console.log(result);
// })
  
  //delete many graysons
//   db.collection('Users').deleteMany({name:'Grayson'}).then((res)=>{
//       console.log(res);
//   });

//delete samanatha

db.collection('Users').findOneAndDelete({
    _id: new ObjectID('58f26e62eb68c49e0c24cc11')
}).then((res) => {
    console.log(res);
})

    //db.close();

})

