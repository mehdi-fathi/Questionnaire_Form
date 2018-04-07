import React, { Component } from 'react';

import Step_1  from "../Steps/Step_1";

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showPreviousBtn: false,
            showNextBtn: true,
            compState: 0,
        };
        this.hidden = {
            display: 'none'
        };

        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }
    setStep(input){
        this.setState({compState:input})
    }
    next() {
        console.log(this.props.steps.length);
        this.setStep(this.state.compState+1);
        this.enablePrevipusBtm(this.state.compState+1);
    }
    enablePrevipusBtm(input){
        console.log(input);
        if(input >= 1){
            this.setState({showPreviousBtn:true})
        }else{
            this.setState({showPreviousBtn:false})
        }
    }
    previous() {
        console.log(this.props.steps.length);
        this.setStep(this.state.compState-1);
        this.enablePrevipusBtm(this.state.compState-1);
    }
    render() {
        return (

            <fieldset>
                    <div>
                        {this.props.steps[this.state.compState].component}
                    </div>
                <input type="button" style={this.state.showPreviousBtn ? {} : this.hidden}
                       name="previous" onClick={this.previous} class="previous action-button" value="Previous" />
                <input type="button" onClick={this.next} name="next" class="next action-button" value="Next" />
            </fieldset>

        );
    }
}

export default Form;
