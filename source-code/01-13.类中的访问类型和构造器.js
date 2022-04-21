"use strict";
// private, protected, public 访问类型
// public 允许我在类的内外被调用
// private 允许在类内被使用
// protected 允许在类内及继承的子类中使用
// class Person {
//   public name: string;
//   public sayHi() {
//     this.name;
//     console.log('hi');
//   }
//   private sayABC() {
//     this.name;
//   }
// }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// class Teacher extends Person {
//   public sayBye() {
//     this.sayHi();
//   }
// }
// const person = new Person();
// person.name = 'dell';
// console.log(person.name);
// person.sayHi();
// constructor
// class Person {
//   // 传统写法
//   // public name: string;
//   // constructor(name: string) {
//   //   this.name = name;
//   // }
//   // 简化写法
//   constructor(public name: string) {}
// }
// const person = new Person('dell');
// console.log(person.name);
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(age) {
        var _this = _super.call(this, 'dell') || this;
        _this.age = age;
        return _this;
    }
    return Teacher;
}(Person));
var teacher = new Teacher(28);
console.log(teacher.age);
console.log(teacher.name);
