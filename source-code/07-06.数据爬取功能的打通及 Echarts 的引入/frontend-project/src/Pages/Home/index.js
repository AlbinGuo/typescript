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
var react_router_dom_1 = require("react-router-dom");
var antd_1 = require("antd");
var echarts_for_react_1 = __importDefault(require("echarts-for-react"));
var axios_1 = __importDefault(require("axios"));
require("./style.css");
var Home = /** @class */ (function (_super) {
    __extends(Home, _super);
    function Home() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            loaded: false,
            isLogin: true
        };
        _this.handleLogoutClick = function () {
            axios_1.default.get('/api/logout').then(function (res) {
                var _a;
                if ((_a = res.data) === null || _a === void 0 ? void 0 : _a.data) {
                    _this.setState({
                        isLogin: false
                    });
                }
                else {
                    antd_1.message.error('退出失败');
                }
            });
        };
        _this.handleCrowllerClick = function () {
            axios_1.default.get('/api/getData').then(function (res) {
                var _a;
                if ((_a = res.data) === null || _a === void 0 ? void 0 : _a.data) {
                    antd_1.message.success('爬取成功');
                }
                else {
                    antd_1.message.error('退出失败');
                }
            });
        };
        _this.getOption = function () {
            return {
                title: {
                    text: '折线图堆叠'
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                toolbox: {
                    feature: {
                        saveAsImage: {}
                    }
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        name: '邮件营销',
                        type: 'line',
                        stack: '总量',
                        data: [120, 132, 101, 134, 90, 230, 210]
                    },
                    {
                        name: '联盟广告',
                        type: 'line',
                        stack: '总量',
                        data: [220, 182, 191, 234, 290, 330, 310]
                    },
                    {
                        name: '视频广告',
                        type: 'line',
                        stack: '总量',
                        data: [150, 232, 201, 154, 190, 330, 410]
                    },
                    {
                        name: '直接访问',
                        type: 'line',
                        stack: '总量',
                        data: [320, 332, 301, 334, 390, 330, 320]
                    },
                    {
                        name: '搜索引擎',
                        type: 'line',
                        stack: '总量',
                        data: [820, 932, 901, 934, 1290, 1330, 1320]
                    }
                ]
            };
        };
        return _this;
    }
    Home.prototype.componentDidMount = function () {
        var _this = this;
        axios_1.default.get('/api/isLogin').then(function (res) {
            var _a;
            if (!((_a = res.data) === null || _a === void 0 ? void 0 : _a.data)) {
                _this.setState({
                    isLogin: false,
                    loaded: true
                });
            }
            else {
                _this.setState({
                    loaded: true
                });
            }
        });
    };
    Home.prototype.render = function () {
        var _a = this.state, isLogin = _a.isLogin, loaded = _a.loaded;
        if (isLogin) {
            if (loaded) {
                return (<div className="home-page">
            <div className="buttons">
              <antd_1.Button type="primary" style={{ marginRight: '25px' }} onClick={this.handleCrowllerClick}>
                爬取
              </antd_1.Button>
              <antd_1.Button type="primary" onClick={this.handleLogoutClick}>
                退出
              </antd_1.Button>
            </div>
            <echarts_for_react_1.default option={this.getOption()}/>
          </div>);
            }
            return null;
        }
        return <react_router_dom_1.Redirect to="/login"/>;
    };
    return Home;
}(react_1.Component));
exports.default = Home;
