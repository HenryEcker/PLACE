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
function getPercent(minutesDone, requiredMinutes){
  return Math.floor(minutesDone/requiredMinutes*100);
}

export default class InteractionProgressBar extends React.Component {
    render() {
        var percent = getPercent(this.props.progress.minutesDone,this.props.progress.minutesRequired);
        var minutesLeft = this.props.progress.minutesRequired - this.props.progress.minutesDone;
        return (
            <div>
                <h2 className="progess-header">
                    {this.props.children}
                </h2>
                <ProgressBar>
                    <ProgressBar now={percent} bsStyle={getsbStyle(percent)} label={percent + "%"}/>
                    <ProgressBar now={100 - percent} bsStyle="info" label={minutesLeft + " Minutes Left"}/>
                </ProgressBar>
            </div>
        );
    }
}
