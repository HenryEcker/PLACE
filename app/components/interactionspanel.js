import React from 'react'
import InteractionProgressBar from "./InteractionProgressBar"
import InteractionTable from "./InteractionTable"

export default class InteractionsPanel extends React.Component {
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
            <div className="panel this-week-container">
                <h1 className="column-header text-left">This Week</h1>
                <div className="row">
                    {progressBarList.map((values) => {
                        return <InteractionProgressBar percent={getPercent(values[1], values[2])} minutesLeft={values[2] - values[1]}>
                            {values[0]}</InteractionProgressBar>
                    })}
                </div>
                <InteractionTable > RASC Interactions </InteractionTable>
                <InteractionTable > Out of RASC Interactions </InteractionTable>
            </div>
        );
    }
}
