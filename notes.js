const fs = require('fs');

const loadNotes = function() {
    try {
        const data = fs.readFileSync('./data.json').toString();
        return JSON.parse(data);
    } catch (e) {
        return [];
    }
}

const addNote = function(title, body) {
    const notes = loadNotes();
    const copyNotes = notes.filter(function(note) {
        return note.title === title;
    })

    if (!copyNotes.length) {
        const newNote = {
            title: title,
            body: body
        };
        notes.push(newNote);
        fs.writeFileSync('data.json', JSON.stringify(notes));
        console.log("Note successfully added!");
    }
    else {
        console.log("Note already exists!");
    }
}

module.exports = {
    loadNotes: loadNotes,
    addNote: addNote
};