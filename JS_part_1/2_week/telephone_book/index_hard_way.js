// Телефонная книга
var phoneBook = [];

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
module.exports = function (command) {
    var book = phoneBook;
    var commands = command.split(' ');
    var commandName = commands[0];
    if (commandName === 'ADD') {
        var newName = commands[1];
        var newNumbers = commands[2].split(',');
        var id = 0;
        var isAdded = false;
        for (id = 0; id < book.length; id++) {
            if (newName === book[id].name) {
                book[id].numbers = book[id].numbers.concat(newNumbers);
                isAdded = true;
                break;
            }
        }
        if (isAdded === false) {
            book.push({name: newName, numbers: newNumbers});
        }
    } else if (commandName === 'REMOVE_PHONE') {
        var numberToDelete = commands[1];
        for (var i = 0; i < book.length; i++) {
            var numberBegin = book[i].numbers.indexOf(numberToDelete);
            if (numberBegin !== -1) {
                book[i].numbers = book[i].numbers.slice(numberBegin, 1);
            }
        }

    } else if (commandName === 'SHOW') {
        console.log('\[');
        for (var k = 0; k < book.length; k++) {
            process.stdout.write('\"' + book[k].name + ': ' + book[k].numbers[0]);
            if (book[k].numbers.length > 1) {
                for (var l = 1; l < book[k].numbers.length; l++) {
                    process.stdout.write(', ' + book[k].numbers[l]);
                }
            }
            if (book.length > 1) {
                process.stdout.write('\", ')
            } else {
                process.stdout.write('\"');
            }
        }
        console.log('\n\]')
    }

};
