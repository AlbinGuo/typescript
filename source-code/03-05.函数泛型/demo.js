"use strict";
// 泛型 generic 泛指的类型
function join(first, second) {
    return "" + first + second;
}
function anotherJoin(first, second) {
    return first;
}
// T[]
function map(params) {
    return params;
}
// join<number, string>(1, '1');
// map<string>(['123']);
join(1, '1');
