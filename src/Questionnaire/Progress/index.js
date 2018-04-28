import React, { Component } from 'react';

class ProgressApp extends Component {

    constructor(props) {
        super(props);
    }

    renderSteps() {
        return this.props.steps.map((s, i)=> (
            <li className={ this.props.currentStep >= i ? 'active' : ''} key={i} value={s}>
            </li>

        ));
    }

    render() {
        return (

            <ul id="progressbar">
                    {this.renderSteps()}
            </ul>
        );
    }
}

export default ProgressApp;
