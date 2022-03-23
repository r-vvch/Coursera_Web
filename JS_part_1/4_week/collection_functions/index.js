/**
 * @param {Array} collection
 * @params {Function[]} – Функции для запроса
 * @returns {Array}
 */
function query(collection) {
    var operations = [].slice.call(arguments);
    var selectedFields = [];
    var filteredFields = {};
    var isSelected = false;
    var isFiltered = false;
    for (var i = 1; i < operations.length; i++) {
        if (operations[i][0] === 'select') {
            isSelected = true;
            if (selectedFields.length === 0) {
                selectedFields = operations[i][1];
            } else {
                var resultSelect = [];
                for (var j of selectedFields) {
                    if (operations[i][1].indexOf(j) !== -1) {
                        resultSelect.push(j);
                    }
                }
                selectedFields = resultSelect;
            }
        } else if (operations[i][0] === 'filterIn') {
            isFiltered = true;
            if (filteredFields === {} || Object.keys(filteredFields).indexOf(operations[i][1]) === -1) {
                filteredFields[operations[i][1]] = operations[i][2];
            } else {
                var resultFilter = [];
                var currentKey = operations[i][1];
                var filterValues_1 = filteredFields[currentKey];
                var filterValues_2 = operations[i][2];
                for (var k of filterValues_1) {
                    if (filterValues_2.indexOf(k) !== -1) {
                        resultFilter.push(k);
                    }
                }
                filteredFields[operations[i][1]] = resultFilter;
            }
        } else {
            console.log('Wrong command')
        }
    }

    if (selectedFields.length === 0 && isSelected || Object.keys(filteredFields).length === 0 && isFiltered) {
        return [];
    }

    // filtration
    var filteredCollection = [];
    if (Object.keys(filteredFields).length === 0) {
        filteredCollection = operations[0].slice();
    } else {
        for (var l = 0; l < operations[0].length; l++) {
            var currentObject = Object.assign({}, operations[0][l]);
            var counter = 0;
            for (var key in filteredFields) {
                if (Object.keys(currentObject).indexOf(key) !== -1) {
                    for (var value of filteredFields[key]) {
                        if (currentObject[key] === value) {
                            counter++;
                            break;
                        }
                    }
                }
            }
            if (counter === Object.keys(filteredFields).length) {
                filteredCollection.push(currentObject);
            }
        }
    }

    // selection
    var selectedCollection = [];
    if (selectedFields.length === 0) {
        selectedCollection = filteredCollection;
    } else {
        for (var element of filteredCollection) {
            var tempObject = {};
            for (var field in element) {
                if (selectedFields.indexOf(field) !== -1) {
                    tempObject[field] = element[field];
                }
            }
            selectedCollection.push(tempObject);
        }
    }

    return selectedCollection;
}

/**
 * @params {String[]}
 */
function select() {
    var fields = [].slice.call(arguments);
    return ['select', fields];
}

/**
 * @param {String} property – Свойство для фильтрации
 * @param {Array} values – Массив разрешённых значений
 */
function filterIn(property, values) {
    return ['filterIn',property, values]
}

module.exports = {
    query: query,
    select: select,
    filterIn: filterIn
};
