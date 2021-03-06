import React, { Component}  from 'react';
import {setInput} from "../../Steps/fill_input";
import store from "../../../Services/Redux/store/index";

class Textarea extends Component {

    constructor(props) {
        super(props);
        let PreValue=setInput(store.getState().steps[this.props.counter]);

        this.state = {
            input: PreValue
        };
    }
    render(){
        return(
            <textarea class="form-control" ref="input" name="CAT_Custom_1"
                      id="input" rows="4"  defaultValue={this.state.input}>
            </textarea>
        );
    }
}

export default Textarea;
