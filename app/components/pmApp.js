import React from 'react'
import PMHomePanel from './PMHomePanel';
import PMInteractionPanel from './PMInteractionPanel';
import {Col, Row, Tab, Nav, NavItem} from 'react-bootstrap';
import Pane from "./Pane";
import {postInteraction, getUser, getLogs, getRequirements, getProgress} from '../server';

export default class PMApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 1,
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
                date: null,
                resName: null,
                rmNum: null,
                notes: null,
                time: null,
                otherInput: null,
                referedInput: null
            },
            user: {},
            logs: {},
            progress: {},
            requirements: {}
        }
    }
    handleTabSelect(k) {
        this.setState({activeTab: k});
    }
    handleInputChange(update) {
        this.setState({inputData: update});
    }
    updateValState(k, v) {
        var update = this.state.validationState;
        update[k] = v;
        this.setState({validationState: update});
    }
    checkForm() {
        var hours = parseInt(this.state.inputData.hours);
        var minutes = parseInt(this.state.inputData.minutes);
        var okay = true;
        if (this.state.inputData.resName === "") {
            this.updateValState("resName", "error");
            okay = false;
        } else {
            this.updateValState("resName", null);
        }
        if (this.state.inputData.date === "") {
            this.updateValState("date", "error");
            okay = false;
        } else {
            this.updateValState("date", null);
        }
        if (this.state.inputData.rmNum === "") {
            this.updateValState("rmNum", "error");
            okay = false;
        } else {
            this.updateValState("rmNum", null);
        }
        if (this.state.inputData.notes === "") {
            this.updateValState("notes", "error");
            okay = false;
        } else {
            this.updateValState("notes", null);
        }
        if (this.state.inputData.mentoringReason === "Other Academic topic not listed" || this.state.inputData.mentoringReason === "Non-Academic") {
            if (this.state.inputData.otherInput === "") {
                this.updateValState("otherInput", "error");
                okay = false;
            } else {
                this.updateValState("otherInput", null);
            }
        }
        if (this.state.inputData.mentoringReason === "Campus Resource Referal") {
            if (this.state.inputData.referedInput === "") {
                this.updateValState("referedInput", "error");
                okay = false;
            } else {
                this.updateValState("referedInput", null);
            }
        }
        if (isNaN(hours) || hours < 0) {
            this.updateValState("time", "error");
            okay = false;
        }
        if (isNaN(minutes) || minutes < 0) {
            this.updateValState("time", "error");
            okay = false;
        }
        if (hours === 0 && minutes === 0) {
            this.updateValState("time", "error");
            okay = false;
        }
        return okay;
    }
    handlePost(e) {
        e.preventDefault();
        var timeSpent = (parseInt(this.state.inputData.hours) * 60) + parseInt(this.state.inputData.minutes);
        if (this.checkForm()) {
            postInteraction(this.props.userID, this.state.inputData.resName, this.state.inputData.loc, this.state.inputData.date, timeSpent, this.state.inputData.mentoringReason, this.state.inputData.notes);
            this.setState({
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
    clearForm(e){
      e.preventDefault();
      this.setState({
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
    }
    parseToHourMinuteForm(time) {
        var hours = Math.floor(parseInt(time) / 60);
        var minutes = parseInt(time) % 60;
        if (minutes === 0) {
            return hours + " Hours";
        } else if (hours === 0) {
            return minutes + " Minutes";
        } else {
            if (minutes < 10) {
                minutes = "0" + minutes;
            }
            return hours + " Hours " + minutes + " Minutes";
        }
    }
    openInteractions(e) {
        e.preventDefault();
        this.setState({activeTab: 2});
    }
    refresh() {
        getUser(this.props.userID, (value) => this.setState({user: value}));
        getLogs(this.props.userID, (value) => this.setState({logs: value}));
        getRequirements(this.props.userID, (value) => this.setState({requirements: value}));
        getProgress(this.props.userID, (value) => this.setState({progress: value}));
    }
    componentWillMount() {
        this.refresh();
    }

    render() {
        return (
            <Tab.Container id="navigation" defaultActiveKey={1} activeKey={this.state.activeTab} onSelect={(k)=>this.handleTabSelect(k)}>
                <Row className="clearfix">
                    <Col lg={2}>
                        <Pane styleName="">
                            <Nav stacked>
                                <NavItem eventKey={1}>
                                    Home
                                </NavItem>
                                <NavItem eventKey={2}>
                                    Interactions
                                </NavItem>
                                <NavItem eventKey={3}>
                                    Initiatives
                                </NavItem>
                                <NavItem eventKey={4}>
                                    Purchase Form
                                </NavItem>
                                <NavItem eventKey={5}>
                                    Resources
                                </NavItem>
                                <NavItem eventKey={6}>
                                    Feedback
                                </NavItem>
                            </Nav>
                        </Pane>
                    </Col>
                    <Col lg={10}>
                        <Tab.Content animation>
                            <Tab.Pane eventKey={1}>
                                <PMHomePanel userID={1}
                                  user={this.state.user}
                                  logs={this.state.logs}
                                  progress={this.state.progress}
                                  requirements={this.state.requirements}
                                  openInteractions={(e) => this.openInteractions(e)}
                                  parseToHourMinuteForm={(v) => this.parseToHourMinuteForm(v)}/>
                            </Tab.Pane>
                            <Tab.Pane eventKey={2}>
                                <PMInteractionPanel userID={1}
                                  user={this.state.user}
                                  logs={this.state.logs}
                                  progress={this.state.progress}
                                  requirements={this.state.requirements}
                                  openInteractions={(e) => this.openInteractions(e)}
                                  parseToHourMinuteForm={(v) => this.parseToHourMinuteForm(v)}
                                  validationState={this.state.validationState}
                                  inputData={this.state.inputData}
                                  handleInputChange={(v) => this.handleInputChange(v)}
                                  handlePost={(e) => this.handlePost(e)}
                                  clearForm={(e)=>this.clearForm(e)}/>
                            </Tab.Pane>
                            <Tab.Pane eventKey={3}>
                                <p>Initiatives</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey={4}>
                                <p>Purchase Form</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey={5}>
                                <p>Resources</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey={6}>
                                <p>Feedback</p>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        )
    }
}
