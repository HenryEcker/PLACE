import React from "react";
import InteractionRow from "./InteractionRow";
import InteractionInputForm from './InteractionInputForm';
import {Button, Table, Modal} from "react-bootstrap";
import {postInteraction} from '../../server';

export default class InteractionTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showInputForm: false,
            inputData: {
                date: "",
                resName: "",
                rmNum: "",
                loc: "mobrasc",
                notes: "",
                hours: 0,
                minutes: 0,
                otherInput: "",
                referedInput: "",
                mentoringReason: "academicResearch"
            },
            validationState: {
                date: "",
                resName: "",
                rmNum: "",
                loc: "",
                notes: "",
                hours: "",
                minutes: "",
                otherInput: "",
                referedInput: "",
                mentoringReason: ""
            }
        }
    }

    handleInputChange(update) {
        this.setState({inputData: update});
    }

    checkForm() {
        var hours = parseInt(this.state.inputData.hours);
        if (this.state.inputData.resName === "") {
            this.setState({
                validationState: {
                    date: 'error'
                }
            });
            return false;

        } else if (this.state.inputData.date === "") {
            return false;

        } else if (this.state.inputData.notes === "") {
            return false;

        } else if (hours < 0) {
                return false;
        } else {
          return true;
        }
    }

    handlePost(e) {
        e.preventDefault();
        var timeSpent = (parseInt(this.state.inputData.hours) * 60) + parseInt(this.state.inputData.minutes);
        if (this.checkForm()) {
            postInteraction(this.props.userID, this.state.inputData.resName, this.state.inputData.loc, this.state.inputData.date, timeSpent, this.state.inputData.mentoringReason, this.state.inputData.notes);
            this.setState({
                showInputForm: false,
                inputData: {
                    date: "",
                    resName: "",
                    rmNum: "",
                    loc: "rasc",
                    notes: "",
                    hours: 0,
                    minutes: 0,
                    otherInput: "",
                    referedInput: "",
                    mentoringReason: "Academic Research"
                }
            });
            this.props.submitAction();
        }
    }

    render() {
        let close = () => this.setState({showInputForm: false});
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
                            return (<InteractionRow interaction={value} id={value._id} key={value._id}/>);
                        })}
                    </Table>
                    <Button bsClass="btn-primary btn-lg" bsSize="large" onClick={() => this.setState({showInputForm: true})}>
                        Add Interaction +
                    </Button>
                    <Modal show={this.state.showInputForm} onHide={close} backdrop={'static'} aria-labelledby="interaction-inpu">
                        <Modal.Header closeButton>
                            <Modal.Title id="interaction-inpu">Log Your Interaction</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <InteractionInputForm handleInputChange={(v) => this.handleInputChange(v)} validationState={this.state.validationState} initialData={this.state.inputData}></InteractionInputForm>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={(e) => this.handlePost(e)}>
                                Submit</Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        );
    }
}
