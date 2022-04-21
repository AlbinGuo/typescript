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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var antd_1 = require("antd");
require("./login.css");
var NormalLoginForm = /** @class */ (function (_super) {
    __extends(NormalLoginForm, _super);
    function NormalLoginForm() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleSubmit = function (e) {
            e.preventDefault();
            _this.props.form.validateFields(function (err, values) {
                if (!err) {
                    console.log('Received values of form: ', values);
                }
            });
        };
        return _this;
    }
    NormalLoginForm.prototype.render = function () {
        var getFieldDecorator = this.props.form.getFieldDecorator;
        return (<div className="login-page">
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
    return NormalLoginForm;
}(react_1.Component));
var WrappedNormalLoginForm = antd_1.Form.create({ name: 'normal_login' })(NormalLoginForm);
exports.default = WrappedNormalLoginForm;
