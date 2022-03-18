// Телефонная книга
var phoneBook = {};

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
module.exports = function (command) {

    function addContact(name, phones) {
        if (name in phoneBook) {
            phoneBook[name] = phoneBook[name].concat(phones);
        } else {
            phoneBook[name] = phones;
        }
    }

    function removePhone(phone) {
        var nameNeeded;
        var names = Object.keys(phoneBook);
        var found = false;
        for (var j = 0; j < names.length; j++) {
            var name = names[j];
            if (phoneBook[name].indexOf(phone) !== -1) {
                nameNeeded = name;
                found = true;
                break;
            }
        }
        if (found === true) {
            var i = 0;
            while (i < phoneBook[nameNeeded].length) {
                if (phoneBook[nameNeeded][i] === phone) {
                    phoneBook[nameNeeded].splice(phoneBook[nameNeeded].indexOf(phone), 1)
                }
                i++;
            }
            if (phoneBook[nameNeeded].length === 0) {
                delete phoneBook[nameNeeded]
            }

            return true;
        } else {
            return false;
        }
    }

    function show() {
        var array = [];
        for (name in phoneBook) {
            var string = name + ": " + phoneBook[name].join(", ");
            array.push(string);
        }
        return array.sort();
    }

    if (command === 'SHOW') {
        return show();
    } else {
        var commandName = command.slice(0, command.indexOf(" "));
        var commandRest = command.slice(command.indexOf(" ") + 1);
        if (commandName === 'ADD') {
            var name = commandRest.slice(0, commandRest.indexOf(" "));
            var phonesString = commandRest.slice(commandRest.indexOf(" ") + 1);
            var phones = [];
            while (phonesString.indexOf(",") !== -1) {
                var currentPhone = phonesString.slice(0, phonesString.indexOf(",")).trim();
                phonesString = phonesString.slice(phonesString.indexOf(",") + 1);
                phones.push(currentPhone);
            }
            phones.push(phonesString);
            return addContact(name, phones);
        } else if (commandName === "REMOVE_PHONE") {
            return removePhone(commandRest);
        } else {
            return "Wrong command";
        }
    }
};
