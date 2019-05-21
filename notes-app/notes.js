const fs = require('fs');
const chalk = require('chalk');

const add = (title, body) => {
	const note = { title, body };
	let notes = getNotes();
	let duplicateNotes = notes.filter(note => note.title === title);

	if (duplicateNotes.length != 0) {
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

module.exports = { add, list, remove };
