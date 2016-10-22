import React from 'react'
import InteractionProgressBar from "./InteractionProgressBar"

export default class InteractionsPanel extends React.Component{
  render(){
    return(
          <div className="panel this-week-container">
              <h1 className="column-header text-left">This Week</h1>
              <div className="row">
                  <InteractionProgressBar percent="73" minutesLeft="40" barType="progress-bar-success"> RASC Hours</InteractionProgressBar>
                  <h2 className="progess-header"> RASC Hours </h2>
                  <div className="progress">
                      <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="73" aria-valuemin="0" aria-valuemax="100" style="width:73%">
                          <span style="color:black;">73% Complete</span>
                      </div>
                      <div className="progress-bar" role="progressbar" style="width:27%;background-color:#A6A6A6;">
                          <span style="color:black;">40 Minutes Left</span>
                      </div>
                  </div>
                  <h2 className="progess-header"> Out Of RASC Hours </h2>
                  <div className="progress">
                      <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width:20%">
                          <span style="color:black;">20% Complete</span>
                      </div>
                      <div className="progress-bar" role="progressbar" style="width:80%;background-color:#A6A6A6;">
                          <span style="color:black;">240 Minutes Left</span>
                      </div>
                  </div>
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
                          <tr  className="interaction-row" data-toggle="collapse" data-target="#demo1">
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
                          <tr  className="interaction-row" data-toggle="collapse" data-target="#demo2">
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
