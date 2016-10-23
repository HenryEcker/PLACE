import React from "react"
import InteractionRow from "./InteractionRow"

export default class InteractionTable extends React.Component{
  render(){
      //Date Name TimeSpent Topic Details
      var interactions=[
        ["MM/DD/YY","Some Student","X hour Y minutes","TOPIC","They want to X. I told them Y."],
        ["MM/DD/YY", "Some Different Student", "Y Minutes", "TOPIC","They want to X. I told them Y."]
      ];
      return (
        <div>

        <h3 className="column-subtitle text-left">{this.props.children}</h3>
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
            {
              interactions.map((interaction)=>{
                return (
                  <InteractionRow date={interaction[0]} resident={interaction[1]} timeSpent={interaction[2]} topic={interaction[3]} id={_.uniqueId("drawer")}>
                    {interaction[4]}
                  </InteractionRow>
                );
              })
            }
        </table>
        <button type="button" className="btn btn-primary btn-lg">Add Interaction +</button>


    </div>
        </div>
      );
  }
}

/*
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
                            <th className="interaction-header">
                                Description
                            </th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="interaction-row">
                            <td className="interaction-cell">
                                <p>
                                    DATA
                                </p>
                            </td>
                            <td className="interaction-cell">
                                <a href="#" className="btn btn-default btn-sm">
                                    <i className="glyphicon glyphicon-cog"></i>
                                </a>
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
                            <th>
                                Description
                            </th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <p>
                                    DATA
                                </p>
                            </td>
                            <td>
                                <a href="#" className="btn btn-default btn-sm">
                                    <i className="glyphicon glyphicon-cog"></i>
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </td>
    </tr>
</tbody>
*/
