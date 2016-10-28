import React from 'react';
import {FormGroup, InputGroup, FormControl, ControlLabel} from "react-bootstrap";
//import {getInteractionTemplate} from '../../server';

export default class InteractionInputForm extends React.Component {
    getTextareaType(value) {
        if ("Other Academic topic not listed" === value || "Non-Academic" === value) {
            return (
                <div>
                    <FormGroup validationState={this.props.validationState.otherInput} controlId={"otherInput"} bsSize="large">
                        <ControlLabel>{"Please describe/list below the topics of your interaction (Study abroad, roommate conflict, RSOs/extracurricular activities etc.)"}</ControlLabel>
                        <FormControl onChange={(e) => {this.updateForm("otherInput",e)}} componentClass="textarea" placeholder={"Other"}/>
                        <FormControl.Feedback />
                    </FormGroup>
                </div>
            );
        } else if ("Campus Resource Referal" === value) {
            return (
                <div>
                    <FormGroup validationState={this.props.validationState.referedInput} controlId={"referedInput"} bsSize="large">
                        <ControlLabel>{"Please include where students were referred (Learning Resource Center, CCPH, Dean of Students office etc.)."}</ControlLabel>
                        <FormControl onChange={(e) => {this.updateForm("referedInput",e)}} componentClass="textarea" placeholder={"Referal"}/>
                        <FormControl.Feedback />
                    </FormGroup>
                </div>
            );
        } else
            return (
                <div></div>
            );
        }

    updateForm(k,e){
      e.preventDefault();
      var update = this.props.initialData;
      update[k] = e.target.value;
      this.props.handleInputChange(update);
    }

    render() {
        return (
            <div>
                <FormGroup validationState={this.props.validationState.date} controlId={"date"}>
                    <ControlLabel>{"Date of Interaction:"}</ControlLabel>
                    <FormControl type="date" value={this.props.initialData.date} onChange={(e) => {this.updateForm("date",e)}} placeholder={"Date"}/>
                    <FormControl.Feedback />
                </FormGroup>

                <FormGroup validationState={this.props.validationState.resName} controlId={"resName"}>
                    <ControlLabel>{"Resident Name (First Name, Last Name):"}</ControlLabel>
                    <FormControl value={this.props.initialData.resName} onChange={(e) => {this.updateForm("resName",e)}} placeholder={"Resident Name"}/>
                    <FormControl.Feedback />
                </FormGroup>

                <FormGroup validationState={this.props.validationState.time} controlId={"timeResident"}>
                    <ControlLabel>{"About How Much Time Did you Spend with the resident?"}</ControlLabel>
                    <FormGroup validationState={this.props.initialData.timeState} controlId="hours">
                        <InputGroup bsSize="lg">
                            <FormControl value={this.props.initialData.hours} onChange={(e) => {this.updateForm("hours",e)}} placeholder="Hours"/>
                            <InputGroup.Addon>
                                {" Hours  "}
                            </InputGroup.Addon>
                            <FormControl value={this.props.initialData.minutes} onChange={(e) => {this.updateForm("minutes",e)}} placeholder="Minutes"/>
                            <InputGroup.Addon>
                                {" Minutes  "}
                            </InputGroup.Addon>
                        </InputGroup>
                    </FormGroup>
                    <FormControl.Feedback />
                </FormGroup>

                <FormGroup validationState={this.props.validationState.rmNum} controlId={"rmNum"}>
                    <ControlLabel>{"Resident Room Number:"}</ControlLabel>
                    <FormControl value={this.props.initialData.rmNUm} onChange={(e) => {this.updateForm("rmNum",e)}} placeholder={"Room Number"}/>
                    <FormControl.Feedback />
                </FormGroup>

                <FormGroup controlId="locSelect">
                    <ControlLabel>Where did the interaction take place?</ControlLabel>
                    <FormControl value={this.props.initialData.loc} onChange={(e) => {this.updateForm("loc",e)}} componentClass="select">
                        <option value="mobrasc">Mobile RASCing</option>
                        <option value="rasc">In the Rasc</option>
                        <option value="outofrasc">Mentoring Hours Outside of RASC Hours</option>
                    </FormControl>
                </FormGroup>

                <FormGroup  controlId="mentoringReason">
                    <ControlLabel>What is your primary reason for your mentoring session with this student?
                    </ControlLabel>
                    <FormControl onChange={(e) => {this.updateForm("mentoringReason",e)}} value={this.props.initialData.mentoringReason} componentClass="select">
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

                {this.getTextareaType(this.props.initialData.mentoringReason)}

                <FormGroup validationState={this.props.validationState.notes} controlId={"notes"} bsSize="large">
                    <ControlLabel>{"Notes: Enter specific information documenting your mentoring session with this student. DO NOT ENTER CONFIDENTIAL INFORMATION."}</ControlLabel>
                    <FormControl value={this.props.initialData.notes} onChange={(e) => {this.updateForm("notes",e)}} componentClass="textarea" placeholder={"Notes"}/>
                    <FormControl.Feedback />
                </FormGroup>
            </div>
        );
    }
}
/*
*/
