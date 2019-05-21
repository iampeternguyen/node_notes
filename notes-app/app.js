const chalk = require('chalk');
const getNotes = require('./notes');

const command = process.argv[2];

if (command) {
	console.log(command);
}
