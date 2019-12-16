const fs = require('fs');
const chalk = require('chalk')

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
        saveNotes(notes);
        console.log(chalk.green.inverse("Note added successfully!"));
    }
    else {
        console.log(chalk.yellow.inverse("Note already exists!"));
    }
}

const saveNotes = function(notes) {
    fs.writeFileSync('data.json', JSON.stringify(notes));
}

const removeNote = function(title) {
    const notes = loadNotes();
    const remainingNotes = notes.filter(function(note) {
        return !(note.title === title);
    });

    if (notes.length !== remainingNotes.length) {
        saveNotes(remainingNotes);
        console.log(chalk.red.inverse('Note removed successfully!'));
    }
    else {
        console.log(chalk.yellow.inverse('Note doesn\'t exist!'));
    }
}

module.exports = {
    loadNotes: loadNotes,
    addNote: addNote,
    saveNotes: saveNotes,
    removeNote: removeNote
};