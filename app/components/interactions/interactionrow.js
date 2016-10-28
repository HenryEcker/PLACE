import React from "react";
import {Table} from "react-bootstrap";


function parseToHourMinuteForm(time) {
    var hours = Math.floor(parseInt(time) / 60);
    var minutes = parseInt(time) % 60;
    if (minutes === 0) {
        return hours + " Hours";
    } else {
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        return hours + " Hours " + minutes + " Minutes";
    }
}

export default class InteractionRow extends React.Component {
    render() {
        {var timeString = parseToHourMinuteForm(this.props.interaction.timeSpent)}
        return (
            <tbody>
                <tr className="interaction-row" data-toggle="collapse" data-target={"#" + this.props.id}>
                    <td className="interaction-cell">{this.props.interaction.date}</td>
                    <td className="interaction-cell">{this.props.interaction.resident}</td>
                    <td className="interaction-cell">{timeString} Minutes</td>
                    <td className="interaction-cell">{this.props.interaction.topic}</td>
                </tr>
                <tr className="interaction-row" data-toggle="collapse" data-target={"#" + this.props.id}>
                    <td colSpan="12" className="hiddenRow">
                        <div className="collapse" id={this.props.id}>
                            <Table bsClass="table interaction-table">
                                <thead>
                                    <tr className="interaction-header-row">
                                        <th className="interaction-header">
                                            Notes:
                                        </th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="interaction-row">
                                        <td className="interaction-cell">
                                            <p>
                                                {this.props.interaction.inDepthInfo}
                                            </p>
                                        </td>
                                        <td className="interaction-cell">
                                            <a href="#" className="btn btn-default btn-sm pull-right">
                                                <i className="glyphicon glyphicon-cog"></i>
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </td>
                </tr>
            </tbody>
        );
    }
}
