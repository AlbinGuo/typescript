"use strict";
// function add(first: number, second: number): number {
//   return first + second;
// }
// function sayHello(): void {
//   console.log('hello');
// }
// function errorEmitter(): never {
//   while(true) {}
// }
function add(_a) {
    var first = _a.first, second = _a.second;
    return first + second;
}
function getNumber(_a) {
    var first = _a.first;
    return first;
}
var total = add({ first: 1, second: 2 });
var count = getNumber({ first: 1 });
