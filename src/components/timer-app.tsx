import React = require('react');
import { TimerClock } from './timer-clock';
import { TimeControls } from './timer-controls';

interface TimeAppState {
    startTime:number,
    stopTime:number,
    timerInterval:number
}

export class TimerApp extends React.Component<{}, TimeAppState> {


    constructor(props) {
        super(props);

        this.state = {
            startTime : null,
            stopTime: null,
            timerInterval:null
        };
        this.startTimer = this.startTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
    }

    startTimer() {
        this.setState({
            startTime : Date.now(),
            stopTime : Date.now(),
            timerInterval: window.setInterval(() => {
                this.setState({stopTime:Date.now()} as TimeAppState)
            }, 50)
        });
    }

    stopTimer() {
        clearInterval(this.state.timerInterval);
        this.setState({
            timerInterval : null
        } as TimeAppState);
    }

    render(): JSX.Element | any {
        return <div className="container-fluid">
            <TimerClock current={this.state.stopTime - this.state.startTime}/>
            <TimeControls timerOn={!!this.state.timerInterval} start={this.startTimer} stop={this.stopTimer}/>
        </div>;
    }
}