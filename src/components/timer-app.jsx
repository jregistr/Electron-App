"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var timer_clock_1 = require("./timer-clock");
var timer_controls_1 = require("./timer-controls");
var TimerApp = (function (_super) {
    __extends(TimerApp, _super);
    function TimerApp(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            startTime: null,
            stopTime: null,
            timerInterval: null
        };
        _this.startTimer = _this.startTimer.bind(_this);
        _this.stopTimer = _this.stopTimer.bind(_this);
        return _this;
    }
    TimerApp.prototype.startTimer = function () {
        var _this = this;
        this.setState({
            startTime: Date.now(),
            stopTime: Date.now(),
            timerInterval: window.setInterval(function () {
                _this.setState({ stopTime: Date.now() });
            }, 50)
        });
    };
    TimerApp.prototype.stopTimer = function () {
        clearInterval(this.state.timerInterval);
        this.setState({
            timerInterval: null
        });
    };
    TimerApp.prototype.render = function () {
        return <div className="container-fluid">
            <timer_clock_1.TimerClock current={this.state.stopTime - this.state.stopTime}/>
            <timer_controls_1.TimeControls timerOn={!!this.state.timerInterval} start={this.startTimer} stop={this.stopTimer}/>
        </div>;
    };
    return TimerApp;
}(React.Component));
exports.TimerApp = TimerApp;
