"use strict";
// readonly
// class Person {
//   public readonly name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
// }
var teacher = {
    name: 'dell',
    teachingAge: 3
};
var student = {
    name: 'lee',
    age: 18
};
var getUserInfo = function (user) {
    console.log(user.name);
};
getUserInfo(teacher);
getUserInfo(student);
