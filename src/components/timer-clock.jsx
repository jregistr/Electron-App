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
var moment_1 = require("moment");
var TimerClock = (function (_super) {
    __extends(TimerClock, _super);
    function TimerClock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TimerClock.prototype.render = function () {
        return <div className="row">
            <div className="col-md-12 text-xs-center">
                <h2>{moment_1.utc(this.props.current)}</h2>
            </div>
        </div>;
    };
    return TimerClock;
}(React.Component));
exports.TimerClock = TimerClock;
