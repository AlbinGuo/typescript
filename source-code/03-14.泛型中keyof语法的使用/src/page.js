"use strict";
// type NAME = 'name';
// key: 'name';
// Person['name'];
// type T = 'age'
// key: 'age'
// Person['age']
// type T = 'gender'
// key: 'gender'
// Person['gender']
var Teacher = /** @class */ (function () {
    function Teacher(info) {
        this.info = info;
    }
    Teacher.prototype.getInfo = function (key) {
        return this.info[key];
    };
    return Teacher;
}());
var teacher = new Teacher({
    name: 'dell',
    age: 18,
    gender: 'male'
});
var test = teacher.getInfo('name');
console.log(test);
