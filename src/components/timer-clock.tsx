import React = require('react');
import {utc} from 'moment';

interface TimerClockProps {
    current:number;
}

export class TimerClock extends React.Component<TimerClockProps, {}> {

    render(): JSX.Element | any {
        return <div className="row">
            <div className="col-md-4" />
            <div className="col-md-4 text-xs-center">
                <h2>{utc(this.props.current).format("HH:mm:ss.SSS")}</h2>
            </div>
            <div className="col-md-4" />
        </div>;
    }
}