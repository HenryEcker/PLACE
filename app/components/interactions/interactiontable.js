import React from "react";
import InteractionRow from "./InteractionRow";
import {Button, Table} from "react-bootstrap";
export default class InteractionTable extends React.Component {
    showButton(bool){
      if(bool){
        return(
            <Button bsClass="btn-primary btn-lg" bsSize="large" onClick={this.props.openInteractions}>
              Add Interaction +
          </Button>
        );
      } else {
        return (<div></div>);
      }
    }
    render() {
        return (
            <div>
                <h3 className="column-subtitle text-left">{this.props.children}</h3>
                <div className="row modal-container">
                    <Table hover responsive>
                        <thead>
                            <tr className="interaction-header-row">
                                <th className="interaction-header">Date</th>
                                <th className="interaction-header">Name</th>
                                <th className="interaction-header">Time</th>
                                <th className="interaction-header">Topic</th>
                            </tr>
                        </thead>
                        {_.map(this.props.interactions, function(value) {
                            return (<InteractionRow interaction={value} id={value._id} key={value._id} parseToHourMinuteForm={this.props.parseToHourMinuteForm}/>);
                        }, this)}
                    </Table>
                    {this.showButton(this.props.showButton)}
                </div>
            </div>
        );
    }
}
