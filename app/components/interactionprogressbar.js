import React from "react"
import { ProgressBar } from 'react-bootstrap';

export default class InteractionProgressBar extends React.Component{
  render(){
    function getsbStyle(percent){
      if(percent<=35) return "danger";
      if(percent<=70) return "warning";
      else return "success";
    }
      return (
            <div>
            <h2 className="progess-header"> {this.props.children} </h2>
            <ProgressBar>
              <ProgressBar now={this.props.percent} bsStyle={getsbStyle(this.props.percent)} label={this.props.percent+"%"}/>
              <ProgressBar now={100-this.props.percent} bsStyle="info" label={this.props.minutesLeft+" Minutes Left"}/>
            </ProgressBar>
            </div>
      );
  }
}
