"use strict";
// 基础类型, boolean, number, string, void, undfined, symbol, null
var count;
count = 123;
// 对象类型, {}, Class, function, []
var func = function (str) {
    return parseInt(str, 10);
};
var func1 = function (str) {
    return parseInt(str, 10);
};
var date = new Date();
var rawData = '{"name": "dell"}';
var newData = JSON.parse(rawData);
var temp = 123;
temp = '456';
