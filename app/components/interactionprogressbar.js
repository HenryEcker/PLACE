import React from "react"

export default class InteractionProgressBar extends React.Component{
  render(){
    return (
          <div>
          <h2 className="progess-header"> {this.props.children} </h2>
          <div className="progress">
              <div className={"progress-bar"+ this.props.barType} role="progressbar" style={{width:this.props.percent+"%"}} aria-valuenow={this.props.percent} aria-valuemin="0" aria-valuemax="100">
                  <span style="color:black;">{this.props.percent}% Complete</span>
              </div>
              <div className="progress-bar" role="progressbar" style={"background-color:#A6A6A6;"+{width:(100-this.props.percent+"%")}}>
                  <span style="color:black;">{this.minutesLeft} Minutes Left</span>
              </div>
          </div>
          </div>
    );
  }
}
