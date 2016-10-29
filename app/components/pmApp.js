import React from 'react'
import PMHomePanel from './PMHomePanel';
import {Col, Row, Tab, Nav, NavItem} from 'react-bootstrap';

export default class PMApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 1
        }
    }
    handleSelect(e) {
        this.setState({activeTab: e.target.value});
    }
    render() {
        return (
            <Tab.Container defaultActiveKey={1}>
                <Row className="clearfix">
                    <Col lg={2}>
                        <Nav stacked eventKey={this.state.activeTab}>
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
                    </Col>
                    <Col lg={10}>
                        <Tab.Content animation>
                            <Tab.Pane eventKey={1}>
                                <PMHomePanel userID={1}/>
                            </Tab.Pane>
                            <Tab.Pane eventKey={2}>
                                <p>Interactions</p>
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
