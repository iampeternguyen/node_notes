const chalk = require('chalk');
const yargs = require('yargs');
const fs = require('fs');

const notes = require('./notes');

// customize yargs version
yargs.version('1.0.1');

// Create add command
yargs.command({
	command: 'add',
	describe: 'Add a new note',
	builder: {
		title: {
			describe: 'Note title',
			demandOption: true,
			type: 'string',
		},
		body: {
			describe: 'Body',
			demandOption: true,
			type: 'string',
		},
	},
	handler: argv => {
		notes.add(argv.title, argv.body);
	},
});

// Create remove command
yargs.command({
	command: 'remove',
	describe: 'Remove a new note',
	builder: {
		title: {
			describe: 'Note title',
			demandOption: true,
			type: 'string',
		},
	},
	handler: argv => {
		notes.remove(argv.title);
	},
});

// Create list command
yargs.command({
	command: 'list',
	describe: 'List all notes',
	handler: () => {
		notes.list();
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

yargs.parse();
