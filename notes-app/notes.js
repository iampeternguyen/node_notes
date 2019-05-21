const fs = require('fs');

const add = (title, body) => {
	const note = { title, body };
	let notes = getNotes();

	notes.push(note);
	fs.writeFileSync('notes.json', JSON.stringify(notes));
};

const list = () => {
	let notes = getNotes();
	notes.forEach((note, index) => {
		console.log(`${index}. ${note.title}\n${note.body}`);
	});
};

const getNotes = () => {
	let notes;
	try {
		notes = JSON.parse(fs.readFileSync('notes.json').toString());
	} catch (err) {
		notes = [];
	}
	return notes;
};

module.exports = { add, list };
