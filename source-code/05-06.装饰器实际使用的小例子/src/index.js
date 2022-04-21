"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var userInfo = undefined;
function catchError(msg) {
    return function (target, key, descriptor) {
        var fn = descriptor.value;
        descriptor.value = function () {
            try {
                fn();
            }
            catch (e) {
                console.log(msg);
            }
        };
    };
}
var Test = /** @class */ (function () {
    function Test() {
    }
    Test.prototype.getName = function () {
        return userInfo.name;
    };
    Test.prototype.getAge = function () {
        return userInfo.age;
    };
    Test.prototype.getGender = function () {
        return userInfo.gender;
    };
    __decorate([
        catchError('userInfo.name 不存在')
    ], Test.prototype, "getName", null);
    __decorate([
        catchError('userInfo.age 不存在')
    ], Test.prototype, "getAge", null);
    __decorate([
        catchError('userInfo.gender 不存在')
    ], Test.prototype, "getGender", null);
    return Test;
}());
var test = new Test();
test.getName();
test.getAge();
