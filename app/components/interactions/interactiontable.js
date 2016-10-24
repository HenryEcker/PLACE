import React from "react";
import InteractionRow from "./InteractionRow";
import {Button} from "react-bootstrap";
import {Table} from "react-bootstrap";

export default class InteractionTable extends React.Component {
    render() {
        return (
            <div>
                <h3 className="column-subtitle text-left">{this.props.children}</h3>
                <div className="row">
                    <Table hover responsive>
                        <thead>
                            <tr className="interaction-header-row">
                                <th className="interaction-header">Date</th>
                                <th className="interaction-header">Name</th>
                                <th className="interaction-header">Time</th>
                                <th className="interaction-header">Topic</th>
                            </tr>
                        </thead>
                        {
                          _.map(this.props.interactions,function(value){
                            return (<InteractionRow interaction={value} id={_.uniqueId("drawer")} key={_.uniqueId()}/>);
                          })
                        }
                    </Table>
                    <Button type="button" bsClass="btn-primary btn-lg">Add Interaction +</Button>
                </div>
            </div>
        );
    }
}
