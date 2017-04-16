var mongoose = require('mongoose');

var User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    age: {
        type:Number
    },
    email: {
        type: String,
        required: true
    }
});


// var newUser = new User({
//     name: 'Samule',
//     email: 'sam@aol.com'
// })

// newUser.save().then((doc) =>{
//     console.log('saved user');
// }, (err) => {
//     console.log('there was an error', err)
// })


module.exports = {User}