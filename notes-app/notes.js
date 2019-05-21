const fs = require('fs');

const add = (title, body) => {
	const note = { title, body };
	let notes = getNotes();
	let duplicateNotes = notes.filter(note => {
		return note.title === title;
	});

	if (duplicateNotes.length != 0) {
		console.log('Title taken!');
	} else {
		notes.push(note);
		save(notes);
		console.log('New note added.');
	}
};

const save = notes => {
	fs.writeFileSync('notes.json', JSON.stringify(notes));
};

const list = () => {
	let notes = getNotes();
	notes.forEach((note, index) => {
		console.log(`${index + 1}. ${note.title}\n${note.body}`);
	});
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

module.exports = { add, list };
