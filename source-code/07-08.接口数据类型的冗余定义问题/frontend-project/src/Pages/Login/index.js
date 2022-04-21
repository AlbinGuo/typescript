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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var request_1 = __importDefault(require("../../request"));
var qs_1 = __importDefault(require("qs"));
var antd_1 = require("antd");
var react_router_dom_1 = require("react-router-dom");
require("./style.css");
var LoginForm = /** @class */ (function (_super) {
    __extends(LoginForm, _super);
    function LoginForm() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isLogin: false
        };
        _this.handleSubmit = function (e) {
            e.preventDefault();
            _this.props.form.validateFields(function (err, values) {
                if (!err) {
                    request_1.default
                        .post('/api/login', qs_1.default.stringify({
                        password: values.password
                    }), {
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        }
                    })
                        .then(function (res) {
                        var data = res.data;
                        if (data) {
                            _this.setState({
                                isLogin: true
                            });
                        }
                        else {
                            antd_1.message.error('登陆失败');
                        }
                    });
                }
            });
        };
        return _this;
    }
    LoginForm.prototype.render = function () {
        var isLogin = this.state.isLogin;
        var getFieldDecorator = this.props.form.getFieldDecorator;
        return isLogin ? (<react_router_dom_1.Redirect to="/"/>) : (<div className="login-page">
        <antd_1.Form onSubmit={this.handleSubmit} className="login-form">
          <antd_1.Form.Item>
            {getFieldDecorator('password', {
                rules: [{ required: true, message: '请输入登陆密码' }]
            })(<antd_1.Input prefix={<antd_1.Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }}/>} type="password" placeholder="Password"/>)}
          </antd_1.Form.Item>
          <antd_1.Form.Item>
            <antd_1.Button type="primary" htmlType="submit">
              登陆
            </antd_1.Button>
          </antd_1.Form.Item>
        </antd_1.Form>
      </div>);
    };
    return LoginForm;
}(react_1.Component));
var WrappedLoginForm = antd_1.Form.create({
    name: 'login'
})(LoginForm);
exports.default = WrappedLoginForm;
