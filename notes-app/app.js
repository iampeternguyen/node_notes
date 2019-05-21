const chalk = require('chalk');
const yargs = require('yargs');

const getNotes = require('./notes');

// customize yargs version
yargs.version('1.0.1');

// Create add command
yargs.command({
	command: 'add',
	describe: 'Add a new note',
	handler: () => {
		console.log('adding a new note');
	},
});

// Create remove command
yargs.command({
	command: 'remove',
	describe: 'Remove a new note',
	handler: () => {
		console.log('removing a new note');
	},
});

// Create list command
yargs.command({
	command: 'list',
	describe: 'List all notes',
	handler: () => {
		console.log('listing all notes');
	},
});

// Create read command
yargs.command({
	command: 'read',
	describe: 'Read a note. Specify title.',
	handler: () => {
		console.log('Reading note ____');
	},
});
// add, remove, read, list

console.log(yargs.argv);
