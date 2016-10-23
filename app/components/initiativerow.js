import React from "react";
import {Table} from "react-bootstrap";

export default class IntiativeTableRow extends React.Component {
    render() {
        return (
            <div>
                <tr className="interaction-row" data-toggle="collapse" data-target={"#" + this.props.id}>
                    <td className="interaction-cell">{this.props.nameOfInitiative}</td>
                    <td className="interaction-cell">{this.props.dateRange}</td>
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
                                                {this.props.description}
                                            </p>
                                        </td>
                                        <td className="interaction-cell">
                                            <a href="#" className="btn btn-default btn-sm pull-right">Full Description</a>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </td>
                </tr>
            </div>
        );
    }
}
