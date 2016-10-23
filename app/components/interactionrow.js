import React from "react"

export default class InteractionRow extends React.Component{
  render(){
      //Date Name TimeSpent Topic Details
      var uId = this.props.id;
      return (
        <div>
            <tbody>
                  <tr className="interaction-row" data-toggle="collapse" data-target={"#"+uId}>
                    <td className="interaction-cell">{this.props.date}</td>
                    <td className="interaction-cell">{this.props.resident}</td>
                    <td className="interaction-cell">{this.props.timeSpent}</td>
                    <td className="interaction-cell">{this.props.topic}</td>
                    </tr>
                    <tr colSpan="12" className="interaction-row" data-toggle="collapse" data-target={"#"+uId}>
                        <td className="hiddenRow">
                            <div className="collapse" id={uId}>
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
                                                    {this.props.children}
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
            </tbody>
        </div>
      );
  }
}
