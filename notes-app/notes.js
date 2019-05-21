const fs = require('fs');
const chalk = require('chalk');

const add = (title, body) => {
	const note = { title, body };
	let notes = getNotes();
	let duplicateNote = notes.find(note => note.title === title);

	if (duplicateNote) {
		console.log(chalk.red('Title taken!'));
	} else {
		notes.push(note);
		save(notes);
		console.log(chalk.green('New note added.'));
	}
};

const save = notes => {
	fs.writeFileSync('notes.json', JSON.stringify(notes));
};

const list = () => {
	let notes = getNotes();
	console.log(chalk.blue('Your Notes'));
	notes.forEach((note, index) => console.log(`${index + 1}. ${note.title}`));
};

const getNotes = () => {
	let notes;
	try {
		notes = JSON.parse(fs.readFileSync('notes.json').toString());
		return notes;
	} catch (err) {
		return [];
	}
};

const read = title => {
	let notes = getNotes();
	const note = notes.find(note => note.title === title);
	if (note) {
		console.log(chalk.white.inverse(note.title));
		console.log(note.body);
	} else {
		console.log(chalk.red('Note not found.'));
	}
};

const remove = title => {
	let notes = getNotes();
	updatedNotes = notes.filter(note => note.title !== title);

	if (updatedNotes.length === notes.length) {
		console.log(chalk.red('Title not found!'));
	} else {
		save(updatedNotes);
		console.log(chalk.green('Note deleted.'));
	}
};

module.exports = { add, list, remove, read };
