"use strict";
// getter and setter
// class Person {
//   constructor(private _name: string) {}
//   get name() {
//     return this._name + ' lee';
//   }
//   set name(name: string) {
//     const realName = name.split(' ')[0];
//     this._name = realName;
//   }
// }
// const person = new Person('dell');
// console.log(person.name);
// person.name = 'dell lee';
// console.log(person.name);
var Demo = /** @class */ (function () {
    function Demo(name) {
        this.name = name;
    }
    Demo.getInstance = function () {
        if (!this.instance) {
            this.instance = new Demo('dell lee');
        }
        return this.instance;
    };
    return Demo;
}());
var demo1 = Demo.getInstance();
var demo2 = Demo.getInstance();
console.log(demo1.name);
console.log(demo2.name);
