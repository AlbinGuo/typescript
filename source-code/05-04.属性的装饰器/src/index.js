"use strict";
// function nameDecorator(target: any, key: string): any {
//   const descriptor: PropertyDescriptor = {
//     writable: false
//   };
//   return descriptor;
// }
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// test.name = 'dell lee';
// 修改的并不是实例上的 name， 而是原型上的 name
function nameDecorator(target, key) {
    target[key] = 'lee';
}
// name 放在实例上
var Test = /** @class */ (function () {
    function Test() {
        this.name = 'Dell';
    }
    __decorate([
        nameDecorator
    ], Test.prototype, "name", void 0);
    return Test;
}());
var test = new Test();
console.log(test.__proto__.name);
