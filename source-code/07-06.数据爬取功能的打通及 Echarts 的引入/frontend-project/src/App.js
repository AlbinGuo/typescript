"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var Login_1 = __importDefault(require("./Pages/Login"));
var Home_1 = __importDefault(require("./Pages/Home"));
exports.default = (function () {
    return (<div>
      <react_router_dom_1.HashRouter>
        <react_router_dom_1.Switch>
          <react_router_dom_1.Route path="/" exact component={Home_1.default}/>
          <react_router_dom_1.Route path="/login" exact component={Login_1.default}/>
        </react_router_dom_1.Switch>
      </react_router_dom_1.HashRouter>
    </div>);
});
