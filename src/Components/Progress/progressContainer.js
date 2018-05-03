import React, { Component } from 'react';

import Progress from "./progress";

class ProgressContainer extends Component {
    render() {
        return (
            <Progress currentStep={this.props.currentStep} steps={this.props.steps}/>
        );
    }
}

export default ProgressContainer;
