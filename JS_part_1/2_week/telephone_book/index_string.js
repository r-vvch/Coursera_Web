// неправильно

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
            if (book[id].split(' ')[0].slice(0, -1) === newName) {
                for (var i = 0; i < newNumbers.length; i++) {
                    book[id] +=  ', ' + newNumbers[i];
                }
            }
            isAdded = true;
        }
        if (isAdded === false) {
            book.push(newName + ': ');
            for (var j = 0; j < newNumbers.length; j++) {
                book[book.length - 1] += newNumbers[j] + ', ';
            }
            book[book.length - 1] = book[book.length - 1].slice(0, -2);
        }

    } else if (commandName === 'REMOVE_PHONE') {
        var numberToDelete = commands[1];
        for (var k; k < book.length; k++) {
            var index = book[k].indexOf(numberToDelete)
            if (index !== -1) {
                var space_id = index;
                while (book[k][space_id] !== 0) {
                    space_id++;
                }
                book[k] = book[k].slice(0, index) + book[k].slice(space_id + 1);
            }
        }

    } else if (commandName === 'SHOW') {
        console.log(book);
    }

};
