import React from 'react'
import InteractionProgressBar from "./InteractionProgressBar"

export default class InteractionsPanel extends React.Component{
  render(){
    function getPercent(minutesDone, totalMinutes){
      return Math.floor((minutesDone/totalMinutes)*100);
    }
    return(
          <div className="panel this-week-container">
              <h1 className="column-header text-left">This Week</h1>
              <div className="row">
                <InteractionProgressBar percent={getPercent(170,450)} minutesLeft={450-170}> Total Hours</InteractionProgressBar>
                <InteractionProgressBar percent={getPercent(110,150)} minutesLeft={150-110}> RASC Hours</InteractionProgressBar>
                <InteractionProgressBar percent={getPercent(60,240)} minutesLeft={240-60}> Out of RASC Hours</InteractionProgressBar>
              </div>
              <h3 className="column-subtitle text-left">RASC Interactions</h3>
              <div className="row">

                  <table className="table interaction-table">
                      <thead>
                          <tr className="interaction-header-row">
                              <th className="interaction-header">Date</th>
                              <th className="interaction-header">Name</th>
                              <th className="interaction-header">Time</th>
                              <th className="interaction-header">Topic</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr className="interaction-row" data-toggle="collapse" data-target="#demo1">
                              <td className="interaction-cell">10/19/16</td>
                              <td className="interaction-cell">Jane Doe</td>
                              <td className="interaction-cell">1 hour 15 minutes</td>
                              <td className="interaction-cell">Career Exploration</td>
                          </tr>
                          <tr colSpan="2" className="interaction-row" data-toggle="collapse" data-target="#demo1">
                              <td className="hiddenRow">
                                  <div className="collapse" id="demo1">
                                      <table className="table interaction-table">
                                          <thead>
                                              <tr className="interaction-header-row">
                                                  <th className="interaction-header"> Description </th>
                                                  <th></th>
                                              </tr>
                                          </thead>
                                          <tbody>
                                              <tr className="interaction-row">
                                                  <td className="interaction-cell">
                                                      <p> DATA </p>
                                                  </td>
                                                  <td className="interaction-cell">
                                                      <a href="#" className="btn btn-default btn-sm">
                                                          <i className="glyphicon glyphicon-cog"></i></a>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </div>
                              </td>
                          </tr>
                          <tr className="interaction-row" data-toggle="collapse" data-target="#demo2">
                              <td className="interaction-cell">10/21/16</td>
                              <td className="interaction-cell">John Smith</td>
                              <td className="interaction-cell">35 minutes</td>
                              <td className="interaction-cell">Stress Management</td>
                          </tr>
                          <tr colSpan="12" className="interaction-row" data-toggle="collapse" data-target="#demo2">
                              <td className="hiddenRow">
                                  <div className="collapse" id="demo2">
                                      <table className="table interaction-table">
                                          <thead>
                                              <tr>
                                                  <th> Description </th>
                                                  <th></th>
                                              </tr>
                                          </thead>
                                          <tbody>
                                              <tr>
                                                  <td>
                                                      <p> DATA </p>
                                                  </td>
                                                  <td>
                                                      <a href="#" className="btn btn-default btn-sm">
                                                          <i className="glyphicon glyphicon-cog"></i></a>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </div>
                              </td>
                          </tr>
                      </tbody>
                  </table>
                  <button type="button" className="btn btn-primary btn-lg">Add Interaction +</button>
              </div>
              <h3 className="column-subtitle text-left">Out of RASC Interactions</h3>
              <div className="row">
                  <table className="table interaction-table">
                      <thead>
                          <tr className="interaction-header-row">
                              <th className="interaction-header">Date</th>
                              <th className="interaction-header">Name</th>
                              <th className="interaction-header">Time</th>
                              <th className="interaction-header">Topic</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr className="interaction-row">
                              <td className="interaction-cell">10/18/16</td>
                              <td className="interaction-cell">James Doe</td>
                              <td className="interaction-cell">15 minutes</td>
                              <td className="interaction-cell">Writing Center</td>
                          </tr>
                          <tr className="interaction-row">
                              <td className="interaction-cell">10/19/16</td>
                              <td className="interaction-cell">Tim Smith</td>
                              <td className="interaction-cell">45 minutes</td>
                              <td className="interaction-cell">Study Skills</td>
                          </tr>
                      </tbody>
                  </table>
                  <button type="button" className="btn btn-primary btn-lg">Add Interaction +</button>
              </div>
          </div>
    );
  }
}
