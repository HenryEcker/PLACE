import React from 'react';
import InteractionProgressBar from "./interactions/InteractionProgressBar";
import InteractionTable from "./interactions/InteractionTable";
import InitiativeTable from "./initiatives/InitiativeTable";
import Pane from './Pane';
import {getUser, getLogs, getRequirements,getProgress} from '../server';

export default class PMHomePanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            logs: {},
            progress: {},
            requirements:{}
        }
    }
    refresh() {
        getUser(this.props.userID, (value) => this.setState({user: value}));
        getLogs(this.props.userID, (value) => this.setState({logs: value}));
        getRequirements(this.props.userID, (value)=>this.setState({requirements:value}));
        getProgress(this.props.userID,(value)=>this.setState({progress:value}));
    }
    componentWillMount(){
      this.refresh();
    }
    render() {
        return (
            <div className="col-lg-10">
                <h1>
                    {"Welcome " + this.state.user.name + " - " + this.state.user.positionTitle + " " + this.state.user.loc}
                </h1>
                <Pane>
                    <div>
                        <h1 className="column-header text-left">This Week</h1>
                        <div className="row">
                            {_.map(this.state.progress, function(value) {
                                return (
                                    <InteractionProgressBar key={value.title} progress={value}>
                                        {value.title}
                                    </InteractionProgressBar>
                                );
                            })}
                        </div>
                    </div>
                    <InitiativeTable/>
                </Pane>
                <Pane>
                    {_.map((this.state.logs), function(type) {
                        return (
                            <InteractionTable key={type.header} userID={this.props.userID} submitAction={() => this.refresh()} className="modal-container" interactions={type.logs}>
                                {type.header}
                            </InteractionTable>
                        );
                    }, this)}
                </Pane>

            </div>
        );
    }
}
