const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


var password = '123abc!';

bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
        console.log(hash)
    })
})

var hashedPassword = '$2a$10$oTW2ZTXIikVn7uj36ObUVu4ISUZKWe3EhUhlTLiYwWjhqY2L7vefK'


bcrypt.compare(password, hashedPassword, (err, result) => {
    console.log(result);
})


// var data = {
//     id:10
// };


// var token = jwt.sign(data, '123abc');


// var decoded = jwt.verify(token, '123abc');

// console.log(token);
// var message = 'I am user number 3';

// var hash = SHA256(message).toString();

// var data = {
//     id: 4
// };

// var token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'someSecrec').toString()
// };

// var resultHash = SHA256(JSON.stringify(token.data) + 'someSecrect').toString();

//     if (resultHash === token.hash){
//         console.log('data was not changed');
//     } else {
//         console.log('data was changed dont trust');
//     }

// console.log(resultHash);
// console.log(token.hash);