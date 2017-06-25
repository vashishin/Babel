'use strict';

var _templateObject = _taggedTemplateLiteral(['hello ', ''], ['hello ', '']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// Шаблонные строки

var name = 'Dmitriy';
var age = 25;

console.log('Меня зовут ' + name + ' мне ' + age + ' лет');
console.log('\u041C\u0435\u043D\u044F \u0437\u043E\u0432\u0443\u0442 ' + name + ' \u043C\u043D\u0435 ' + age + ' \u043B\u0435\u0442');

function sum(a, b) {

    console.log('' + (parseInt(a) + parseInt(b)));
}

sum('1', '22');

// строковые литералы

console.log(toUpp(_templateObject, name)); // toUpperCase

function toUpp(literals, val) {
    return literals[0].toUpperCase() + val.toUpperCase();
}