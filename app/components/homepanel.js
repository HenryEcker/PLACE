import React from 'react';
import InteractionProgressBar from "./interactions/InteractionProgressBar";
import InteractionTable from "./interactions/InteractionTable";
import InitiativeTable from "./initiatives/InitiativeTable";
import Pane from './Pane';

export default class HomePanel extends React.Component {
    render() {
        return (
            <div className="row">
                <h1>
                    {"Welcome " + this.props.user.name + " - " + this.props.user.positionTitle + " " + this.props.user.location}
                </h1>
                <Pane>
                    <div>
                        <h1 className="column-header text-left">This Week</h1>
                        <div className="row">
                            {_.map(this.props.user.progress, function(value) {
                                return (
                                    <InteractionProgressBar key={_.uniqueId()} progress={value}>
                                        {value.title}
                                    </InteractionProgressBar>
                                );
                            })
}
                        </div>
                    </div>
                    <InitiativeTable/>
                </Pane>
                <Pane>
                  {
                    _.map((this.props.interactions), function(type){
                      return(<InteractionTable interactions={type.interactions}>
                          {type.header}
                      </InteractionTable>);
                    })
                  }
                </Pane>
            </div>
        );
    }
}

/*

  <InteractionTable interactions={this.props.interactions.rascInteractions.interactions}>
      {this.props.interactions.rascInteractions.header}
  </InteractionTable>
  <InteractionTable interactions={this.props.interactions.outOfRascInteractions}>
      {this.props.interactions.outOfRascInteractions.header}
  </InteractionTable>
*/
