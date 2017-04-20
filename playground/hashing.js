const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

var data = {
    id:10
};


var token = jwt.sign(data, '123abc');


var decoded = jwt.verify(token, '123abc');

console.log(token);
console.log(`decoded: ${JSON.stringify(decoded).toString()}`)
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