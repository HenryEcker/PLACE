import React from 'react';
import InteractionProgressBar from "./InteractionProgressBar";
import InteractionTable from "./InteractionTable";
import InitiativeTable from "./InitiativeTable";

export default class HomePanel extends React.Component {
    render() {
        //Title Done Total
        var progressBarList = [
            [
                "Total Hours", 170, 450
            ],
            [
                "Rasc Hours", 110, 150
            ],
            ["Out of RASC Hours", 60, 300]
        ];
        function getPercent(minutesDone, totalMinutes) {
            return Math.floor((minutesDone / totalMinutes) * 100);
        }
        return (
            <div className="row">
                <h1>
                    Welcome Henry Ecker - Peer Mentor 4th Floor Dickinson
                </h1>
                <div className="col-md-6" id="RascInteractionPanel">
                    <div className="panel this-week-container">
                        <h1 className="column-header text-left">This Week</h1>
                        <div className="row">
                            {progressBarList.map((values) => {
                                return <InteractionProgressBar percent={getPercent(values[1], values[2])} minutesLeft={values[2] - values[1]}>
                                    {values[0]}</InteractionProgressBar>
                            })}
                        </div>
                    </div>
                    <div className="panel this-week-container">
                        <InitiativeTable/>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="panel this-week-container">
                        <InteractionTable >
                            RASC Interactions
                        </InteractionTable>
                    </div>
                    <div className="panel this-week-container">
                        <InteractionTable >
                            Out of RASC Interactions
                        </InteractionTable>
                    </div>
                </div>
            </div>
        );
    }
}
