
const crypto = require('crypto');


const hashPassword = crypto.createHash('sha512').update('1234').digest('hex');//(req.body.password + 10)
console.log(hashPassword)