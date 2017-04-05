import React = require('react');
import {MouseEventHandler} from "react";

interface TimerControlsProps {
    start:MouseEventHandler<HTMLButtonElement>,
    stop:MouseEventHandler<HTMLButtonElement>,
    timerOn:boolean
}

export class TimeControls extends React.Component<TimerControlsProps, {}> {

    render(): JSX.Element | any {
        return <div className="row">
            <div className="col-xs-12 col-sm-6">
                <button disabled={this.props.timerOn} className="btn-primary" onClick={this.props.start}>Start</button>
            </div>
            <div className="col-xs-12 col-sm-6">
                <button className="btn-danger" onClick={this.props.stop}>Stop</button>
            </div>
        </div>;
    }
}