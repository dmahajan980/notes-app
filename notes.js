const fs = require('fs');
const chalk = require('chalk')

const loadNotes = () => {
    try {
        const data = fs.readFileSync('./data.json').toString();
        return JSON.parse(data);
    } catch (e) {
        return [];
    }
}

const addNote = (title, body) => {
    const notes = loadNotes();
    const copyNote = notes.find(note => note.title === title)

    if (!copyNote) {
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

const saveNotes = notes => {
    fs.writeFileSync('data.json', JSON.stringify(notes));
}

const removeNote = title => {
    const notes = loadNotes();
    const remainingNotes = notes.filter(note => !(note.title === title));

    if (notes.length !== remainingNotes.length) {
        saveNotes(remainingNotes);
        console.log(chalk.red.inverse('Note removed successfully!'));
    }
    else {
        console.log(chalk.yellow.inverse('Note doesn\'t exist!'));
    }
}

const listNotes = () => {
    const notes = loadNotes();
    notes.forEach(note => {
        console.log(chalk.bold.cyan(note.title));
    });
}

const readNote = title => {
    const notes = loadNotes();
    const note = notes.find(note => note.title === title);

    if (note) {
        console.log(chalk.magenta.bold.inverse(note.title));
        console.log(note.body);
    }
    else {
        console.log(chalk.red.inverse('Note not found!'))
    }
}

module.exports = {
    loadNotes: loadNotes,
    addNote: addNote,
    saveNotes: saveNotes,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
};