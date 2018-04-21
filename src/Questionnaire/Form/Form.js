import React, { Component } from 'react';

import ProgressApp  from "../Progress/index.js";
import {required} from "../Validator/validation";

import { addSteps,removeStep } from "../js/actions/index";
import store from "../js/store/index";
import {connect} from "react-redux";

const mapDispatchToProps = dispatch => {
    return {
        addSteps: steps => dispatch(addSteps(steps)),
        removeStep: stepsNumber => dispatch(removeStep(stepsNumber)),
    };
};

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showPreviousBtn: false,
            showNextBtn: true,
            compState: 0,
            stepsValue:{}
        };
        this.hidden = {
            display: 'none'
        };

        console.log('run');
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);

        // const body  = '';
        // const step = this.state.compState;
        // // console.log(this.state.input);
        // // console.log(document.getElementById("input").value);
        //
        //
        // this.props.addSteps({body,step});
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

            this.setState({
                stepsValue: [...this.state.stepsValue ,document.getElementById("input").value]
            })

            const body  = document.getElementById("input").value;
            const step = this.state.compState;
            // console.log(this.state.input);
            // console.log(document.getElementById("input").value);


            this.props.addSteps({body,step});

            // console.log(...this.state.stepsValue); // it shows key of array
            if(this.state.compState<9){

                this.setStep(this.state.compState+1);
                this.enablePrevipusBtm(this.state.compState+1);
            }
        }
    }
    enablePrevipusBtm(input){
        // console.log(input);
        if(input >= 1){
            this.setState({showPreviousBtn:true})
        }else{
            this.setState({showPreviousBtn:false})
        }
    }
    previous() {
        this.setStep(this.state.compState-1);

        const body  = document.getElementById("input").value;
        const step = this.state.compState;

        this.props.removeStep(this.state.compState);

        this.state.stepsValue.splice(this.state.compState-1,this.state.compState);//it removes value step

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
                <input type="button" ref="next1" id='next'  onClick={this.next} name="next" class="next action-button" value={this.state.compState == 9 ? 'Submit' : 'Next'} />
            </fieldset>
</div>

        );
    }
}
const Form1 = connect(null, mapDispatchToProps)(Form);
export default Form1;
