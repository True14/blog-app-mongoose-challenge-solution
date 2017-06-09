// You can just run this in the Node REPL
const {User} = require('./models');

User.hashPassword('test-password')
    .then(hash => console.log(hash));
