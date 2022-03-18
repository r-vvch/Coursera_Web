// Встроенный в Node.JS модуль для проверок
var assert = require('assert');

// Подключаем свою функцию
var normalizeHashTags = require('./index.js');
// console.log(normalizeHashTags([""]));
/*
assert.deepEqual(
    normalizeHashTags([""]),
    '',
    'Список ""' +
    ' содержит хэштеги ""'
);
*/

assert.deepEqual(
    normalizeHashTags(['web', 'coursera', 'JavaScript', 'Coursera', 'script', 'programming']),
    'web, coursera, javascript, script, programming',
    'Список "web, coursera, JavaScript, Coursera, script, programming"' +
    ' содержит хэштеги "web, coursera, javascript, script, programming"'
);

assert.deepEqual(
    normalizeHashTags([]),
    '',
    'Пустой массив должен возвращать пустую строку'
);

console.info('OK!');