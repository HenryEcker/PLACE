import React from "react"
import {ProgressBar} from 'react-bootstrap';

function getsbStyle(percent) {
    if (percent <= 35)
        return "danger";
    if (percent <= 70)
        return "warning";
    else
        return "success";
    }

function getsbStyleForInfo(percent) {
    if (percent == 0) {
        return "danger";
    } else {
        return "info";
    }
}

function getPercent(minutesDone, requiredMinutes) {
    var res = Math.floor(minutesDone / requiredMinutes * 100);
    if (res > 100) {
        return 100;
    } else {
        return res;
    }
}

export default class InteractionProgressBar extends React.Component {
    render() {
        {
            var percent = getPercent(this.props.progress.minutesDone, this.props.progress.minutesRequired);
            var doneString = percent + "% (" + (this.props.parseToHourMinuteForm(this.props.progress.minutesDone)) + ")";
            var toBeDoneString = (this.props.parseToHourMinuteForm(this.props.progress.minutesRequired - this.props.progress.minutesDone) + " Left");
        }
        return (
            <div>
                <h2 className="progess-header">
                    {this.props.children}
                </h2>
                <ProgressBar>
                    <ProgressBar now={percent} bsStyle={getsbStyle(percent)} label={doneString}/>
                    <ProgressBar now={100 - percent} bsStyle={getsbStyleForInfo(percent)} label={toBeDoneString}/>
                </ProgressBar>
            </div>
        );
    }
}
