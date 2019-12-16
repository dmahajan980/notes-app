const yargs = require('yargs');
const noteOperations = require('./notes.js');

// Add note
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'A title for note',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'A description for note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        console.log('Adding a new note...');
        noteOperations.addNote(argv.title, argv.body);
    }
});

// Remove note
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Title for note to be removed.',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        console.log('Removing the note...');
        noteOperations.removeNote(argv.title);
    }
})

yargs.command({
    command: 'list',
    describe: 'List the existing notes',
    handler: function() {
        console.log('Listing the notes!');
    }
})

yargs.command({
    command: 'read',
    describe: 'Read out notes',
    handler: function() {
        console.log('Reading notes!');
    }
})

yargs.parse();

// console.log(yargs.argv);

// yargs.version('1.0.1');
// console.log(yargs.argv)
// console.log(yargs.argv);

// const getNote = require('./notes.js');
// const chalk = require('chalk');

// console.log(getNote());

// console.log(chalk.rgb(0, 0, 0)("What"))

// const fs = require('fs');
// fs.writeFileSync('file.txt', 'This is first line.');
// fs.appendFileSync('file.txt', '\n This is second line.');