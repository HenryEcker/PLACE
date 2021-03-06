import React from 'react';
import InteractionProgressBar from "./interactions/InteractionProgressBar";
import InteractionTable from "./interactions/InteractionTable";
import InitiativeTable from "./initiatives/InitiativeTable";
import Pane from './Pane';

export default class PMHomePanel extends React.Component {
    render() {
        return (
            <div>
                <h1>
                    {"Welcome " + this.props.user.name + " - " + this.props.user.positionTitle + " " + this.props.user.loc}
                </h1>
                <Pane styleName="col-md-6">
                    <div>
                        <h1 className="column-header text-left">This Week</h1>
                        <div className="row">
                            {_.map(this.props.progress, function(value) {
                                return (
                                    <InteractionProgressBar key={value.title} progress={value} parseToHourMinuteForm={this.props.parseToHourMinuteForm}>
                                        {value.title}
                                    </InteractionProgressBar>
                                );
                            },this)}
                        </div>
                    </div>
                    <InitiativeTable/>
                </Pane>
                <Pane styleName="col-md-6">
                    {_.map((this.props.logs), function(type) {
                        return (
                            <InteractionTable
                              key={type.header}
                              userID={this.props.userID}
                              validationState={this.props.validationState}
                              openInteractions={this.props.openInteractions}
                              inputData={this.props.inputData}
                              handleInputChange={this.props.handleInputChange}
                              parseToHourMinuteForm={this.props.parseToHourMinuteForm}
                              handlePost={this.props.handlePost}
                              submitAction={this.props.refresh}
                              showButton={true}
                              className="modal-container" interactions={type.logs}>
                                {type.header}
                            </InteractionTable>
                        );
                    }, this)}
                </Pane>

            </div>
        );
    }
}
