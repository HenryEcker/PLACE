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
                            loc: this.props.initialData.loc,
                            notes: this.props.initialData.notes,
                            hours: this.props.initialData.hours,
                            minutes: this.props.initialData.minutes,
                            otherInput: this.props.initialData.otherInput,
                            referedInput: this.props.initialData.referedInput,
                            mentoringReason: this.props.initialData.mentoringReason
                        })
                    }} placeholder={"Date"}/>
                </FormGroup>

                <FormGroup controlId={"resName"}>
                    <ControlLabel>{"Resident Name (First Name, Last Name):"}</ControlLabel>
                    <FormControl value={this.props.initialData.resName} onChange={(e) => {
                        e.preventDefault();
                        this.props.handleInputChange({
                            date: this.props.initialData.date,
                            resName: e.target.value,
                            rmNum: this.props.initialData.rmNum,
                            loc: this.props.initialData.loc,
                            notes: this.props.initialData.notes,
                            hours: this.props.initialData.hours,
                            minutes: this.props.initialData.minutes,
                            otherInput: this.props.initialData.otherInput,
                            referedInput: this.props.initialData.referedInput,
                            mentoringReason: this.props.initialData.mentoringReason
                        })
                    }} placeholder={"Resident Name"}/>
                </FormGroup>

                <FormGroup controlId={"timeResident"}>
                    <ControlLabel>{"About How Much Time Did you Spend with the resident?"}</ControlLabel>
                    <FormGroup validationState={this.props.initialData.timeState} controlId="hours">
                        <InputGroup bsSize="lg">
                            <FormControl value={this.props.initialData.hours} onChange={(e) => {
                                e.preventDefault();
                                this.props.handleInputChange({
                                    date: this.props.initialData.date,
                                    resName: this.props.initialData.resName,
                                    rmNum: this.props.initialData.rmNum,
                                    loc: this.props.initialData.loc,
                                    notes: this.props.initialData.notes,
                                    hours: e.target.value,
                                    minutes: this.props.initialData.minutes,
                                    otherInput: this.props.initialData.otherInput,
                                    referedInput: this.props.initialData.referedInput,
                                    mentoringReason: this.props.initialData.mentoringReason
                                })
                            }} placeholder="Hours"/>
                            <InputGroup.Addon>
                                {" Hours  "}
                            </InputGroup.Addon>
                            <FormControl value={this.props.initialData.minutes} onChange={(e) => {
                                e.preventDefault();
                                this.props.handleInputChange({
                                    date: this.props.initialData.date,
                                    resName: this.props.initialData.resName,
                                    rmNum: this.props.initialData.rmNum,
                                    loc: this.props.initialData.loc,
                                    notes: this.props.initialData.notes,
                                    hours: this.props.initialData.hours,
                                    minutes: e.target.value,
                                    otherInput: this.props.initialData.otherInput,
                                    referedInput: this.props.initialData.referedInput,
                                    mentoringReason: this.props.initialData.mentoringReason
                                })
                            }} placeholder="Minutes"/>
                            <InputGroup.Addon>
                                {" Minutes  "}
                            </InputGroup.Addon>
                        </InputGroup>
                    </FormGroup>
                </FormGroup>

                <FormGroup controlId={"rmNum"}>
                    <ControlLabel>{"Resident Room Number:"}</ControlLabel>
                    <FormControl value={this.props.initialData.rmNUm} onChange={(e) => {
                        e.preventDefault();
                        this.props.handleInputChange({
                            date: this.props.initialData.date,
                            resName: this.props.initialData.resName,
                            rmNum: e.target.value,
                            loc: this.props.initialData.loc,
                            notes: this.props.initialData.notes,
                            hours: this.props.initialData.hours,
                            minutes: this.props.initialData.minutes,
                            otherInput: this.props.initialData.otherInput,
                            referedInput: this.props.initialData.referedInput,
                            mentoringReason: this.props.initialData.mentoringReason
                        })
                    }} placeholder={"Room Number"}/>
                </FormGroup>

                <FormGroup controlId="locSelect">
                    <ControlLabel>Where did the interaction take place?</ControlLabel>
                    <FormControl value={this.props.initialData.loc} onChange={(e) => {
                        e.preventDefault();
                        this.props.handleInputChange({
                            date: this.props.initialData.date,
                            resName: this.props.initialData.resName,
                            rmNum: this.props.initialData.rmNum,
                            loc: e.target.value,
                            notes: this.props.initialData.notes,
                            hours: this.props.initialData.hours,
                            minutes: this.props.initialData.minutes,
                            otherInput: this.props.initialData.otherInput,
                            referedInput: this.props.initialData.referedInput,
                            mentoringReason: this.props.initialData.mentoringReason
                        })
                    }} componentClass="select">
                        <option value="mobrasc">Mobile RASCing</option>
                        <option value="rasc">In the Rasc</option>
                        <option value="outofrasc">Mentoring Hours Outside of RASC Hours</option>
                    </FormControl>
                </FormGroup>

                <FormGroup  controlId="mentoringReason">
                    <ControlLabel>What is your primary reason for your mentoring session with this student?
                    </ControlLabel>
                    <FormControl onChange={(e) => {
                        e.preventDefault();
                        this.props.handleInputChange({
                            date: this.props.initialData.date,
                            resName: this.props.initialData.resName,
                            rmNum: this.props.initialData.rmNum,
                            loc: this.props.initialData.loc,
                            notes: this.props.initialData.notes,
                            hours: this.props.initialData.hours,
                            minutes: this.props.initialData.minutes,
                            otherInput: this.props.initialData.otherInput,
                            referedInput: this.props.initialData.referedInput,
                            mentoringReason: e.target.value
                        })
                    }} value={this.props.initialData.mentoringReason} componentClass="select">
                        <option value="Academic Research">Academic Research
                        </option>
                        <option value="Campus Resource Referal">Campus Resource Referal</option>
                        <option value="Common Read">Common Read</option>
                        <option value="Faculty Engagement">Faculty Engagement</option>
                        <option value="Goal Setting">Goal Setting</option>
                        <option value="Major/Career Exploration">Major/Career Exploration</option>
                        <option value="Paper/Essays">Paper/Essays</option>
                        <option value="Registration and/or Spire">Registration and/or Spire</option>
                        <option value="Time Management or Organization">Time Management or Organization</option>
                        <option value="Other Academic topic not listed">Other Academic topic not listed</option>
                        <option value="Non-Academic">Non-Academic</option>
                    </FormControl>
                </FormGroup>

                <FormGroup controlId={"notes"} bsSize="large">
                    <ControlLabel>{"Notes: Enter specific information documenting your mentoring session with this student. DO NOT ENTER CONFIDENTIAL INFORMATION."}</ControlLabel>
                    <FormControl value={this.props.initialData.notes} onChange={(e) => {
                        e.preventDefault();
                        this.props.handleInputChange({
                            date: this.props.initialData.date,
                            resName: this.props.initialData.resName,
                            rmNum: this.props.initialData.rmNum,
                            loc: this.props.initialData.loc,
                            notes: e.target.value,
                            hours: this.props.initialData.hours,
                            minutes: this.props.initialData.minutes,
                            otherInput: this.props.initialData.otherInput,
                            referedInput: this.props.initialData.referedInput,
                            mentoringReason: this.props.initialData.mentoringReason
                        })
                    }} componentClass="textarea" placeholder={"Notes"}/>
                </FormGroup>
            </div>
        );
    }
}
/*
{this.getTextareaType(this.state.mentoringReason)}
*/
