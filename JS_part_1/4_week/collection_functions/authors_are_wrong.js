/**
 * @param {Array} collection
 * @params {Function[]} – Функции для запроса
 * @returns {Array}
 */
function query(collection) {
    var newCollection = [];
    var objectOfNewCollection;
    for (let i = 0, len = collection.length; i < len; i++) {
        objectOfNewCollection = Object.assign({}, collection[i]);
        newCollection.push(objectOfNewCollection);
    }
    if (arguments.length > 1) {
        var args = [].slice.call(arguments);
        return changeCollection(newCollection, args);
    } else {
        return newCollection;
    }
}

function changeCollection(fields, args){
    var resultFields = [];
    args.sort();
    for (let i = 0, len = fields.length; i < len; i++) {
        for (let j = 1, len = args.length; j < len; j++) {
            fields[i] = args[j](fields[i]);
            if(fields[i] === false) {
                break;
            }
        }
        if (fields[i] !== false) {
            resultFields.push(fields[i]);
        }
    }
    return resultFields;
}

/**
 * @params {String[]}
 */
function select() {
    var args = [].slice.call(arguments);
    return function(newCollection){
        var fieldsNew = {};
        for (let key in newCollection) {
            if (newCollection.hasOwnProperty(key)) {
                for (let i = 0, len = args.length; i < len; i++) {
                    if (key === args[i]) {
                        fieldsNew[key] = newCollection[key];
                    }
                }
            }
        }
        return fieldsNew;
    }
}


/**
 * @param {String} property – Свойство для фильтрации
 * @param {Array} values – Массив разрешённых значений
 */
function filterIn(property, values) {
    return function(newCollection) {
        var flag = false;
        for (let key in newCollection) {
            if (key === property) {
                for (let i = 0, len = values.length; i < len; i++) {
                    if (newCollection[key] === values[i]) {
                        flag = true;
                    }
                }
            }
        }
        if (flag === true) {
            return newCollection;
        } else {
            return false;
        }

    }
}

module.exports = {
    query: query,
    select: select,
    filterIn: filterIn,
    changeCollection: changeCollection
};
