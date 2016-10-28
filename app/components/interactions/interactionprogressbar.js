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

function getsbStyleForInfo(percent){
  if(percent<=35){
    return "danger";
  } else {
    return "info";
  }
}
function getPercent(minutesDone, requiredMinutes){
  return Math.floor(minutesDone/requiredMinutes*100);
}

export default class InteractionProgressBar extends React.Component {
    render() {
        return (
            <div>
                <h2 className="progess-header">
                    {this.props.children}
                </h2>
                <ProgressBar>
                    <ProgressBar now={getPercent(this.props.progress.minutesDone,this.props.progress.minutesRequired)} bsStyle={getsbStyle(getPercent(this.props.progress.minutesDone,this.props.progress.minutesRequired))} label={getPercent(this.props.progress.minutesDone,this.props.progress.minutesRequired) + "%"}/>
                    <ProgressBar now={100 - getPercent(this.props.progress.minutesDone,this.props.progress.minutesRequired)} bsStyle={getsbStyleForInfo(getPercent(this.props.progress.minutesDone,this.props.progress.minutesRequired))} label={(this.props.progress.minutesRequired - this.props.progress.minutesDone) + " Minutes Left"}/>
                </ProgressBar>
            </div>
        );
    }
}
