import React from 'react';
import Pane from './Pane';
import InteractionInputForm from './interactions/InteractionInputForm';
import InteractionTable from "./interactions/InteractionTable";
import InteractionProgressBar from "./interactions/InteractionProgressBar";

export default class PMInteractionPanel extends React.Component {
    render() {
        return (
            <div>
                <Pane styleName="col-md-6">
                    <div>
                        <h1 className="column-header text-left">This Week</h1>
                        <div className="row">
                            {_.map(this.props.progress, function(value) {
                                return (
                                    <InteractionProgressBar key={value.title} progress={value} parseToHourMinuteForm={this.props.parseToHourMinuteForm}>
                                        {value.title}
                                    </InteractionProgressBar>
                                );
                            }, this)}
                        </div>
                    </div>
                    {_.map((this.props.logs), function(type) {
                        return (
                            <InteractionTable
                              key={type.header}
                              userID={this.props.userID}
                              validationState={this.props.validationState}
                              openInteractions={this.props.openInteractions}
                              inputData={this.props.inputData}
                              handleInputChange={this.props.handleInputChange}
                              parseToHourMinuteForm={this.props.parseToHourMinuteForm}
                              handlePost={this.props.handlePost}
                              submitAction={this.props.refresh}
                              showButton={false}
                              className="modal-container" interactions={type.logs}>
                                {type.header}
                            </InteractionTable>
                        );
                    }, this)}
                </Pane>
                <Pane styleName="col-md-6">
                    <InteractionInputForm handleInputChange={this.props.handleInputChange} validationState={this.props.validationState} initialData={this.props.inputData}></InteractionInputForm>
                </Pane>
            </div>
        );
    }
}

/*
<Modal show={this.state.showInputForm} onHide={close} backdrop={'static'} aria-labelledby="interaction-input">
    <Modal.Header closeButton>
        <Modal.Title id="interaction-input">Log Your Interaction</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <InteractionInputForm handleInputChange={this.props.handleInputChange} validationState={this.props.validationState} initialData={this.props.inputData}></InteractionInputForm>
    </Modal.Body>
    <Modal.Footer>
        <Button onClick={this.props.handlePost}>
            Submit</Button>
    </Modal.Footer>
</Modal>
*/
