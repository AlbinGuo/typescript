"use strict";
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
var Person1 = /** @class */ (function () {
    function Person1() {
        this.name = 'dell';
    }
    Person1.prototype.getName = function () {
        return this.name;
    };
    return Person1;
}());
var Teacher1 = /** @class */ (function (_super) {
    __extends(Teacher1, _super);
    function Teacher1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Teacher1.prototype.getTeacherName = function () {
        return 'Teacher';
    };
    Teacher1.prototype.getName = function () {
        return _super.prototype.getName.call(this) + 'lee';
    };
    return Teacher1;
}(Person1));
var teacher1 = new Teacher1();
console.log(teacher1.getName());
console.log(teacher1.getTeacherName());
