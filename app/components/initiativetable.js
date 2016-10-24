import React from "react";
import {Table} from "react-bootstrap";
import IntiativeTableRow from "./initiativerow";

export default class IntiativeTable extends React.Component {
    render() {
      var elements=[
        ["October Academic Bulletin Board","Sept. 25 - Oct. 1", "DATA"],
        ["Extended RASC Hours Mid-Terms","Oct. 16 - Oct. 22", "DATA"],
        ["October Faculty Chat","Oct. 9 - Oct. 27", "DATA"],
        ["Common Read Notcard Initiative","Oct. 1 - Oct. 31", "DATA"]
      ];
      return (
          < div > < h1 className = "column-header text-left" > This Month < /h1> < h3 className="column-subtitle text-left"> Initiatives < /h3 > <div className="row">
    <Table hover responsive>
        <thead>
            <tr className="interaction-row">
                <th className="interaction-header">Title</th >
                <th className="interaction-header">Date Range</th>
                < /tr></thead >
                {
                  elements.map((intiative)=>{
                    return (
                      <IntiativeTableRow nameOfInitiative={intiative[0]} dateRange={intiative[1]} description={intiative[2]} id={_.uniqueId("drawer")} />
                    );
                  })
                }
            </Table>
        </div >
    </div>
        );
    }
}
