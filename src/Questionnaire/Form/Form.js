import React, { Component } from 'react';

import ProgressApp  from "../Progress/index.js";
import {required} from "../Validator/validation";

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
    checkValidation() {

        if(this.props.required(document.getElementById("input").value)){
            document.getElementById("input").style.borderColor="red";
            return true;
        }
        return false
    }
    next() {
        if(!this.checkValidation()){

            this.setStep(this.state.compState+1);
            this.enablePrevipusBtm(this.state.compState+1);
        }
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
<div>
            <ProgressApp currentStep={this.state.compState} steps={this.props.steps}></ProgressApp>
            <fieldset>
                    <div>
                        {this.props.steps[this.state.compState].component}
                    </div>
                <input type="button" style={this.state.showPreviousBtn ? {} : this.hidden}
                       name="previous" onClick={this.previous} class="previous action-button" value="Previous" />
                <input type="button" ref="next1" id='next'  onClick={this.next} name="next" class="next action-button" value="Next" />
            </fieldset>
</div>

        );
    }
}

export default Form;
