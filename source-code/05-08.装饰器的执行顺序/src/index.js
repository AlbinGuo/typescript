"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
function showData(target) {
    for (var key in target.prototype) {
        var data = Reflect.getMetadata('data', target.prototype, key);
        console.log(data);
    }
}
function setData(dataKey, msg) {
    return function (target, key) {
        Reflect.defineMetadata(dataKey, msg, target, key);
    };
}
var User = /** @class */ (function () {
    function User() {
    }
    User.prototype.getName = function () { };
    User.prototype.getAge = function () { };
    __decorate([
        setData('data', 'age')
    ], User.prototype, "getName", null);
    __decorate([
        setData('data', 'age')
    ], User.prototype, "getAge", null);
    User = __decorate([
        showData
    ], User);
    return User;
}());
