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
                location: "rasc",
                notes: "",
                hours: 0,
                minutes: 0,
                otherInput: "",
                referedInput: "",
                mentoringReason: ""
            }
        }
    }

    handleInputChange(update) {
        this.setState({inputData: update});
    }

    handlePost(e) {
        e.preventDefault();
        var timeSpent = (this.state.hours*60)+this.state.minutes;
        postInteraction(this.props.userID, this.state.resName, this.state.location, this.state.date, timeSpent, this.state.mentoringReason, this.state.notes);
        this.setState({
            showInputForm: false,
            inputData: {
                date: "",
                resName: "",
                rmNum: "",
                location: "rasc",
                notes: "",
                hours: 0,
                minutes: 0,
                otherInput: "",
                referedInput: "",
                mentoringReason: ""
            }
        });
        this.props.submitAction();
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
                            return (<InteractionRow interaction={value} id={_.uniqueId("drawer")} key={_.uniqueId()}/>);
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
                            <InteractionInputForm handleInputChange={this.handleInputChange} initialData={this.state.inputData}></InteractionInputForm>
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

/*
<Modal show={this.state.showInputForm} onHide={close} backdrop={'static'} aria-labelledby="interaction-inpu">
    <Modal.Header closeButton>
        <Modal.Title id="interaction-inpu">Log Your Interaction</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <InteractionInputForm></InteractionInputForm>
    </Modal.Body>
    <Modal.Footer>
        <Button onClick={()=>this.handlePost()}> Submit</Button>
    </Modal.Footer>
</Modal>
*/
