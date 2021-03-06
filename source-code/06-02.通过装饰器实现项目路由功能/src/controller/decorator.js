"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = exports.controller = exports.router = void 0;
var express_1 = require("express");
exports.router = (0, express_1.Router)();
function controller(target) {
    for (var key in target.prototype) {
        var path = Reflect.getMetadata('path', target.prototype, key);
        var handler = target.prototype[key];
        if (path) {
            exports.router.get(path, handler);
        }
    }
}
exports.controller = controller;
function get(path) {
    return function (target, key) {
        Reflect.defineMetadata('path', path, target, key);
    };
}
exports.get = get;
