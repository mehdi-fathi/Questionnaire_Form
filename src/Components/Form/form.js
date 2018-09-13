import React, { Component } from 'react';
import ProgressContainer  from "../Progress/progressContainer";
import {addSteps} from "../../Services/Redux/actions/index";
import Buttoms from "../../Scenes/Form/Inputs/buttoms";
import {connect} from "react-redux";
import store from "../../Services/Redux/store";
import {buttom_attr} from "../../Scenes/Form/Inputs/buttom"
import Textarea from "../../Scenes/Form/Inputs/textarea";

const mapDispatchToProps = dispatch => {
    return {
        addSteps: steps => dispatch(addSteps(steps)),
    };
};

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showPreviousBtn: false,
            showNextBtn: true,
            selectState: 0
        };
        this.hidden = {
            display: "none"
        };

        // var instance=new buttom_attr();
        // You can set attr buttom at here
        // instance.setAttr(['sd']);
        //
        // console.log(instance.getAttr());

        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }
    setStep(input){
        this.setState({selectState:input})
    }
    checkValidation(bodyInput) {

        if(this.props.required(bodyInput.value)){
            bodyInput.style.borderColor="red";
            return false;
        }
        return true
    }
    next() {
        let body  = document.getElementById("input");
        if(this.checkValidation(body)){

            if(this.state.selectState<9){

                this.setStep(this.state.selectState+1);
                this.enablePreviousBtn(this.state.selectState+1);
            }
            body = body.value;
            const step = this.state.selectState;

            this.props.addSteps({body,step});// Add value state to redux

            if(this.state.selectState === 9){
                fetch('http://localhost/', {
                    headers: {
                        'Accept': 'application/json',
                        'header1': 'headerValue'
                    },
                    method: 'POST',
                    body: store.getState()
                })
            }
        }
    }
    enablePreviousBtn(input){
        // console.log(input);
        if(input >= 1){
            this.setState({showPreviousBtn:true})
        }else{
            this.setState({showPreviousBtn:false})
        }
    }
    previous() {
        console.log('Run p');
        this.setStep(this.state.selectState-1);
        this.enablePreviousBtn(this.state.selectState-1);
    }
    render() {
        return (
<div>
            <ProgressContainer currentStep={this.state.selectState} steps={this.props.steps}></ProgressContainer>
            <fieldset>
                    <div>
                        {this.props.steps[this.state.selectState].component}
                    </div>
                <Buttoms style={this.state.showPreviousBtn ? {} : this.hidden} pre={this.previous} next={this.next}
                        selectState={this.props.selectState}>
                </Buttoms>
            </fieldset>
</div>

        );
    }
}
const Form1 = connect(null, mapDispatchToProps)(Form);
export default Form1;
