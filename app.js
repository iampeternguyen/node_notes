const fs = require('fs');

// fs.writeFileSync('notes.txt', 'My name is Peter.');

fs.appendFileSync('notes.txt', 'This is some new text.');
