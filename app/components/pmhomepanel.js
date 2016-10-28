import React from 'react';
import InteractionProgressBar from "./interactions/InteractionProgressBar";
import InteractionTable from "./interactions/InteractionTable";
import InitiativeTable from "./initiatives/InitiativeTable";
import Pane from './Pane';
import {getUser, getLogs, getRequirements} from '../server';

export default class PMHomePanel extends React.Component {

    getProgress(user) {
        var requirements = getRequirements(user);
        var progressDataUser = getUser(user);
        var progress = {
            total: {
                minutesDone: 0,
                title: "",
                minutesRequired: 0
            },
            rasc: {
                minutesDone: 0,
                title: "",
                minutesRequired: 0
            },
            outofrasc: {
                minutesDone: 0,
                title: "",
                minutesRequired: 0
            }
        };
        //Total Time
        progress.total.minutesDone = progressDataUser.progress.total.minutesDone;
        progress.total.title = requirements.total.title;
        progress.total.minutesRequired = requirements.total.minutes;
        //Rasc Hours
        progress.rasc.minutesDone = progressDataUser.progress.rasc.minutesDone;
        progress.rasc.title = requirements.rasc.title;
        progress.rasc.minutesRequired = requirements.rasc.minutes;
        //Out of Rasc
        progress.outofrasc.minutesDone = progressDataUser.progress.outofrasc.minutesDone;
        progress.outofrasc.title = requirements.outofrasc.title;
        progress.outofrasc.minutesRequired = requirements.outofrasc.minutes;
        return progress;
    }
    constructor(props) {
        super(props);
        this.state = {
            user: getUser(this.props.userID),
            logs: getLogs(this.props.userID),
            progress: this.getProgress(this.props.userID)
        }
    }
    refresh() {
        this.setState({
            user: getUser(this.props.userID),
            logs: getLogs(this.props.userID),
            progress: this.getProgress(this.props.userID)
        })
    }
    render() {
        return (
            <div className="row">
                <h1>
                    {"Welcome " + this.state.user.name + " - " + this.state.user.positionTitle + " " + this.state.user.location}
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
                            <InteractionTable className="modal-container" key={type.header} interactions={type.logs}>
                                {type.header}
                            </InteractionTable>
                        );
                    })}
                </Pane>

            </div>
        );
    }
}

/*

    {_.map((this.state.logs), function(type) {
        return (
            <InteractionTable className="modal-container" userID={this.props.userID} submitAction={this.refresh()} key={type.header} interactions={type.logs}>
                {type.header}
            </InteractionTable>
        );
    })}
*/
