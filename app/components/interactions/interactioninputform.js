import React from 'react';
import {FormGroup, InputGroup, FormControl, ControlLabel} from "react-bootstrap";
//import {getInteractionTemplate} from '../../server';

export default class InteractionInputForm extends React.Component {
    getTextareaType(value) {
        if ("otherAc" === value || "nonAc" === value) {
            return (
                <div>
                    <FormGroup controlId={"otherInput"} bsSize="large">
                        <ControlLabel>{"Please describe/list below the topics of your interaction (Study abroad, roommate conflict, RSOs/extracurricular activities etc.)"}</ControlLabel>
                        <FormControl onChange={(e) => this.setState({otherInput: e.target.value})} componentClass="textarea" placeholder={"Other"}/>
                    </FormGroup>
                </div>
            );
        } else if ("resourceRef" === value) {
            return (
                <div>
                    <FormGroup controlId={"referedInput"} bsSize="large">
                        <ControlLabel>{"Please include where students were referred (Learning Resource Center, CCPH, Dean of Students office etc.)."}</ControlLabel>
                        <FormControl onChange={(e) => this.setState({referedInput: e.target.value})} componentClass="textarea" placeholder={"Referal"}/>
                    </FormGroup>
                </div>
            );
        } else
            return (
                <div></div>
            );
        }

    render() {
        return (
            <div>
                <FormGroup controlId={"date"}>
                    <ControlLabel>{"Date of Interaction:"}</ControlLabel>
                    <FormControl type="date" value={this.props.initialData.date} onChange={(e) => {
                        e.preventDefault();
                        this.props.handleInputChange({
                            date: e.target.value,
                            resName: this.props.initialData.resName,
                            rmNum: this.props.initialData.rmNum,
                            location: this.props.initialData.location,
                            notes: this.props.initialData.notes,
                            hours: this.props.initialData.hours,
                            minutes: this.props.initialData.minutes,
                            otherInput: this.props.initialData.otherInput,
                            referedInput: this.props.referedInput,
                            mentoringReason: this.props.mentoringReason
                        })
                    }} placeholder={"Date"}/>
                </FormGroup>
            </div>
        );
    }
}
/*

handleTimeParse(e) {
e.preventDefault();
this.setState({
    hours: e.target.value + (this.state.minutes / 60)
});

//this.setState({hours:this.state.hours+(this.state.minutes/60)});
//this.setState({minutes:(this.state.minutes%60)});
}

timeIsValid() {
var hrs = parseInt(this.state.hours);
var mins = parseInt(this.state.minutes);
if (isNaN(hrs) || hrs < 0 || hrs > 12) {
    this.setState({timeState: 'error'});
} else if (isNaN(mins) || mins < 0 || mins > 59) {
    this.setState({timeState: 'error'});
} else {
    this.setState({timeState: ''});
}
}

                <FormGroup controlId={"resName"}>
                    <ControlLabel>{"Resident Name (First Name, Last Name):"}</ControlLabel>
                    <FormControl value={this.state.resName} onChange={(e) => this.setState({resName: e.target.value})} placeholder={"Resident Name"}/>
                </FormGroup>

                <FormGroup controlId={"rmNum"}>
                    <ControlLabel>{"Resident Room Number:"}</ControlLabel>
                    <FormControl value={this.state.rmNUm} onChange={(e) => this.setState({rmNum: e.target.value})} placeholder={"Room Number"}/>
                </FormGroup>

                <FormGroup controlId="locationSelect">
                    <ControlLabel>Where did the interaction take place?</ControlLabel>
                    <FormControl value={this.state.locationSelect} onChange={(e) => this.setState({locationSelect: e.target.value})} componentClass="select" placeholder="outofrasc">
                        <option value="rasc">In the Rasc</option>
                        <option value="mobRasc">Mobile RASCing</option>
                        <option value="outofrasc">Mentoring Hours Outside of RASC Hours</option>
                    </FormControl>
                </FormGroup>

                <FormGroup controlId={"timeResident"}>
                    <ControlLabel>{"About How Much Time Did you Spend with the resident?"}</ControlLabel>
                    <FormGroup validationState={this.state.timeState} controlId="hours">
                        <InputGroup bsSize="lg">
                            <FormControl value={this.state.hours} onChange={(e) => {
                                this.setState({hours: e.target.value});
                                this.timeIsValid();
                            }} placeholder="Hours"/>
                            <InputGroup.Addon>
                                :
                            </InputGroup.Addon>
                            <FormControl value={this.state.minutes} onChange={(e) => {
                                this.setState({minutes: e.target.value});
                                this.timeIsValid();
                            }} placeholder="Minutes"/>
                        </InputGroup>
                    </FormGroup>
                </FormGroup>

                <FormGroup onChange={(e) => this.setState({mentoringReason: e.target.value})} controlId="mentoringReason">
                    <ControlLabel>What is your primary reason for your mentoring session with this student?
                    </ControlLabel>
                    <FormControl value={this.state.mentoringReason} componentClass="select">
                        <option value="academicResearch">Academic Research
                        </option>
                        <option value="resourceRef">Campus Resource Referal</option>
                        <option value="commonRead">Common Read</option>
                        <option value="facultyEngagement">Faculty Engagement</option>
                        <option value="goalSetting">Goal Setting</option>
                        <option value="mcExploration">Major/Career Exploration</option>
                        <option value="writing">Paper/Essays</option>
                        <option value="registration">Registration and/or Spire</option>
                        <option value="timeManagement">Time Management or Organization</option>
                        <option value="otherAc">Other Academic topic not listed</option>
                        <option value="nonAc">Non-Academic</option>
                    </FormControl>
                </FormGroup>
                {this.getTextareaType(this.state.mentoringReason)}
                <FormGroup controlId={"notes"} bsSize="large">
                    <ControlLabel>{"Notes: Enter specific information documenting your mentoring session with this student. DO NOT ENTER CONFIDENTIAL INFORMATION."}</ControlLabel>
                    <FormControl value={this.state.notes} onChange={(e) => this.setState({notes: e.target.value})} componentClass="textarea" placeholder={"Notes"}/>
                </FormGroup>
            </div>
            */
