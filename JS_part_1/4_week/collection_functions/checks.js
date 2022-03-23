// Встроенный в Node.JS модуль для проверок
var assert = require('assert');

// Подключаем свою функцию
var lib = require('./index.js');

// Коллекция данных
var friends = [
    {
        name: 'Сэм',
        gender: 'Мужской',
        email: 'luisazamora@example.com',
        favoriteFruit: 'Картофель'
    },
    {
        name: 'Эмили',
        gender: 'Женский',
        email: 'example@example.com',
        favoriteFruit: 'Яблоко'
    },
    {
        name: 'Мэт',
        gender: 'Мужской',
        email: 'danamcgee@example.com',
        favoriteFruit: 'Яблоко'
    },
    {
        name: 'Брэд',
        gender: 'Мужской',
        email: 'newtonwilliams@example.com',
        favoriteFruit: 'Банан'
    },
    {
        name: 'Шерри',
        gender: 'Женский',
        email: 'danamcgee@example.com',
        favoriteFruit: 'Картофель'
    },
    {
        name: 'Керри',
        gender: 'Женский',
        email: 'danamcgee@example.com',
        favoriteFruit: 'Апельсин'
    },
    {
        name: 'Стелла',
        gender: 'Женский',
        email: 'waltersguzman@example.com',
        favoriteFruit: 'Картофель'
    }
];

// Выполняем выборку и фильтрацию с помощью нашего конструктора
var result = lib.query(
    friends,
    lib.select('name', 'gender', 'email'),
    lib.filterIn('favoriteFruit', ['Яблоко', 'Картофель'])
);

// Сравниваем полученный результат с ожидаемым
assert.deepEqual(result, [
    { name: 'Сэм', gender: 'Мужской', email: 'luisazamora@example.com' },
    { name: 'Эмили', gender: 'Женский', email: 'example@example.com' },
    { name: 'Мэт', gender: 'Мужской', email: 'danamcgee@example.com' },
    { name: 'Шерри', gender: 'Женский', email: 'danamcgee@example.com' },
    { name: 'Стелла', gender: 'Женский', email: 'waltersguzman@example.com' }
]);

console.info('1/13');

// Выполняем выборку и фильтрацию с помощью нашего конструктора
var result_1 = lib.query(
    friends,
    lib.select('name', 'gender', 'email'),
    lib.filterIn('favoriteFruit', ['Яблоко', 'Картофель']),
    lib.filterIn('favoriteFruit', ['Яблоко'])
);

// Сравниваем полученный результат с ожидаемым
assert.deepEqual(result_1, [
    { name: 'Эмили', gender: 'Женский', email: 'example@example.com' },
    { name: 'Мэт', gender: 'Мужской', email: 'danamcgee@example.com' },
]);

console.info('2/13');

var result_2 = lib.query(
    friends,
    lib.select('name', 'gender', 'email'),
    lib.select('name', 'email'),
    lib.filterIn('favoriteFruit', ['Яблоко', 'Картофель']),
    lib.filterIn('favoriteFruit', ['Яблоко'])
);

// Сравниваем полученный результат с ожидаемым
assert.deepEqual(result_2, [
    { name: 'Эмили', email: 'example@example.com' },
    { name: 'Мэт', email: 'danamcgee@example.com' },
]);

console.info('3/13');

var result_3 = lib.query(
    friends,
    lib.select('name', 'gender', 'email'),
    lib.select('name', 'email'),
    lib.filterIn('favoriteFruit', ['Яблоко', 'Картофель']),
    lib.filterIn('favoriteFruit', ['Яблоко']),
    lib.filterIn('name', ['Эмили'])
);

// Сравниваем полученный результат с ожидаемым
assert.deepEqual(result_3, [
    { name: 'Эмили', email: 'example@example.com' }
]);

console.info('4/13');

var result_4 = lib.query(
    friends,
    lib.select('name', 'gender', 'email'),
    lib.select('name', 'email', 'pet'),
    lib.filterIn('favoriteFruit', ['Яблоко', 'Картофель']),
    lib.filterIn('favoriteFruit', ['Яблоко']),
    lib.filterIn('name', ['Эмили'])
);

// Сравниваем полученный результат с ожидаемым
assert.deepEqual(result_4, [
    { name: 'Эмили', email: 'example@example.com' }
]);

console.info('5/13');

// Выполняем выборку и фильтрацию с помощью нашего конструктора
var result_5 = lib.query(
    friends,
    lib.select('name', 'gender', 'email'),
    lib.filterIn('favoriteFruit', ['Яблоко', 'Картофель']),
    lib.filterIn('favoriteFruit', ['Яблоко', 'Банан']),
);

// Сравниваем полученный результат с ожидаемым
assert.deepEqual(result_5, [
    { name: 'Эмили', gender: 'Женский', email: 'example@example.com' },
    { name: 'Мэт', gender: 'Мужской', email: 'danamcgee@example.com' },
]);

console.info('6/13');

// Выполняем выборку и фильтрацию с помощью нашего конструктора
var result_6 = lib.query(
    friends,
    lib.select('name', 'gender', 'email'),
    lib.filterIn('favoriteFruit', ['Яблоко', 'Картофель']),
    lib.filterIn('favoriteFruit', ['Яблоко', 'Банан']),
    lib.select('name'),
);

// Сравниваем полученный результат с ожидаемым
assert.deepEqual(result_6, [
    { name: 'Эмили'},
    { name: 'Мэт'}
]);

console.info('7/13');


// Выполняем выборку и фильтрацию с помощью нашего конструктора
var result_7 = lib.query(
    friends
);

// Сравниваем полученный результат с ожидаемым
assert.deepEqual(result_7,
    friends
);

console.info('8/13');


// Выполняем выборку и фильтрацию с помощью нашего конструктора
var result_8 = lib.query(
    friends,
    lib.select('name', 'gender', 'email'),
    lib.filterIn('favoriteFruit', ['Яблоко', 'Картофель']),
    lib.select('favoriteFruit')
);

// Сравниваем полученный результат с ожидаемым
assert.deepEqual(result_8, []);
// assert.deepEqual(result_8, [ {}, {}, {}, {}, {} ]);

console.info('9/13');


// Выполняем выборку и фильтрацию с помощью нашего конструктора
var result_9 = lib.query(
    friends,
    lib.select('name', 'gender', 'email'),
    lib.filterIn('favoriteFruit', ['Яблоко', 'Картофель']),
    lib.filterIn('favoriteFruit', ['Банан'])
);

// Сравниваем полученный результат с ожидаемым
assert.deepEqual(result_9, []);

console.info('10/13');


// Выполняем выборку и фильтрацию с помощью нашего конструктора
var result_10 = lib.query(
    friends,
    lib.select('name', 'gender', 'email'),
    lib.filterIn('favoriteFruit', ['Яблоко', 'Картофель']),
    lib.filterIn('favoriteFruit', ['Яблоко', 'Банан']),
    lib.filterIn('favoriteFruit', ['Фейхоа'])
);

// Сравниваем полученный результат с ожидаемым
assert.deepEqual(result_10, []);

console.info('11/13');


// Выполняем выборку и фильтрацию с помощью нашего конструктора
var result_11 = lib.query(
    friends,
    lib.filterIn('name', ['Сэм', 'Брэд', 'Стелла']),
    lib.filterIn('favoriteFruit', ['Яблоко', 'Картофель']),
    lib.filterIn('favoriteFruit', ['Картофель']),
    lib.filterIn('email', ['waltersguzman@example.com'])
);

// Сравниваем полученный результат с ожидаемым
assert.deepEqual(result_11, [
    {
        name: 'Стелла',
        gender: 'Женский',
        email: 'waltersguzman@example.com',
        favoriteFruit: 'Картофель'
    }
]);

console.info('12/13');

// Выполняем выборку и фильтрацию с помощью нашего конструктора
var result_12 = lib.query(
    friends,
    lib.select('name'),
    lib.select('name', 'gender', 'email')
);

// Сравниваем полученный результат с ожидаемым
assert.deepEqual(result_12, [
    {name: 'Сэм'},
    {name: 'Эмили'},
    {name: 'Мэт'},
    {name: 'Брэд'},
    {name: 'Шерри'},
    {name: 'Керри'},
    {name: 'Стелла'}
]);

console.info('13/13');

console.info('OK!');
