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
var TimeControls = (function (_super) {
    __extends(TimeControls, _super);
    function TimeControls() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TimeControls.prototype.render = function () {
        return <div className="row">
            <div className="col-xs-12 col-sm-6">
                <button disabled={this.props.timerOn} className="btn-primary" onClick={this.props.start}>Start</button>
            </div>
            <div className="col-xs-12 col-sm-6">
                <button disabled={this.props.timerOn} className="btn-danger" onClick={this.props.stop}>Stop</button>
            </div>
        </div>;
    };
    return TimeControls;
}(React.Component));
exports.TimeControls = TimeControls;
