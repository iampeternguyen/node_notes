const validator = require('validator');

const getNotes = require('./notes');

const msg = getNotes();
console.log(msg);

console.log(validator.isEmail('peter@github.com'));
console.log(validator.isEmail('github.com'));
console.log(validator.isURL('github.com'));
