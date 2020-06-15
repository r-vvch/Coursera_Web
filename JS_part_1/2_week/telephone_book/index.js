// неправильно

// Телефонная книга
var phoneBook = {};

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
        for (id = 0; id < Object.keys(phoneBook).length; id++) {
            if (newName === Object.keys(phoneBook)[id]) {
                var key = Object.keys(phoneBook)[id];
                phoneBook[key] = phoneBook[key].concat(newNumbers);
                isAdded = true;
                break;
            }
        }
        if (isAdded === false) {
            phoneBook[newName] = newNumbers;
        }
        // return phoneBook;
    } else if (commandName === 'REMOVE_PHONE') {
        var numberToDelete = commands[1];
        for (var i = 0; i < Object.keys(phoneBook).length; i++) {
            var key1 = Object.keys(phoneBook)[i];
            var numberBegin = phoneBook[key1].indexOf(numberToDelete);
            if (numberBegin !== -1) {
                phoneBook[key1].splice(numberBegin, 1);
                if (phoneBook[key1].length === 0) {
                    delete phoneBook[key1];
                }
                return true;
            }
        }
        return false;
    } else if (commandName === 'SHOW') {
        var names = Object.keys(phoneBook);
        names.sort();
        return names.map(function (name) {
            var phones = phoneBook[name];
            var output = name + ': ' + phones.join(', ');
            return output;
        });
    }

};
