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
var Persona = /** @class */ (function () {
    function Persona(_name) {
        this._name = _name;
    }
    Persona.prototype.run = function () {
        return this._name;
    };
    return Persona;
}());
var Web = /** @class */ (function (_super) {
    __extends(Web, _super);
    function Web(name) {
        return _super.call(this, name) || this; /*初始化父类的构造函数*/
    }
    Web.prototype.work = function () {
        return this.name + '在工作';
    };
    return Web;
}(Persona));
var a = new Web('李雷');
console.log(a.run());
console.log(a.work());
var tupleFruit = ['aaaaaa', 'bbbbbbb', 111111];
var fruits = ['a', 'b', 11, 'cc'];
fruits.forEach(function (item) { return console.log('===item===', item); });
tupleFruit.forEach(function (item) { return console.log('===tupleFruit===', item); });
