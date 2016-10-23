import React from "react";
import InteractionRow from "./InteractionRow";
import {Table} from "react-bootstrap";

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
        <Table  hover responsive>
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
                  <InteractionRow date={interaction[0]} resident={interaction[1]} timeSpent={interaction[2]} topic={interaction[3]} inDepthInfo= {interaction[4]} id={_.uniqueId("drawer")} />
                );
              })
            }
        </Table>
        <button type="button" className="btn btn-primary btn-lg">Add Interaction +</button>


    </div>
        </div>
      );
  }
}
