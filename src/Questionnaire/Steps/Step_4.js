import React, { Component } from 'react';
import store from "../js/store";
import {setInput} from "./Fill_Input";

class App extends Component {
    constructor(props) {
        super(props);
        var PreValue=setInput(store.getState().steps[this.props.counter]);

        this.state = {
            input: PreValue
        };

    }
  render() {
    return (
        <div>
            <h2 class="fs-title">Question 4</h2>
            <h3 class="fs-subtitle">What do you consider your main weaknesses to be?</h3>
            <textarea class="form-control" name="CAT_Custom_4" id="input" rows="4" onkeydown="if(this.value.length>=4000)this.value=this.value.substring(0,3999);">
                {this.state.input}
            </textarea>
        </div>
    );
  }
}

export default App;
