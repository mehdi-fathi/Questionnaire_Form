import React, { Component}  from 'react';
import {setInput} from "../Steps/Fill_Input";
import store from "../../Services/Redux/store";

class Textarea extends Component {


    constructor(props) {
        super(props);

        var PreValue=setInput(store.getState().steps[this.props.counter]);

        this.state = {
            input: PreValue
        };

    }
    render(){
        return(
            <textarea class="form-control" ref="input" name="CAT_Custom_1"
                      id="input" rows="4" onkeydown="">
                {this.state.input}
            </textarea>
        );
    }
}


export  default Textarea;
