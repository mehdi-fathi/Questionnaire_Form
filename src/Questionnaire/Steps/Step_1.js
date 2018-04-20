import React, { Component } from 'react';
import { connect } from "react-redux";

import store from "../js/store/index";


 class App extends React.Component {

    constructor(props) {
        super(props);

        if(typeof store.getState().steps[0] != "undefined"){
            var s=store.getState().steps[0].body
        }


        this.state = {
            input: s
        };
        this.handelChangeInput = this.handelChangeInput.bind(this);

    }

    handelChangeInput(event){

    }

  render() {
    return (
        <div>
            <h2 class="fs-title">Question 1</h2>
            <h3 class="fs-subtitle">What do you consider your main strengths to be?</h3>
            <textarea class="form-control" ref="input" name="CAT_Custom_1"
                      id="input" onChange={this.handelChangeInput}
                      rows="4" onkeydown="if(this.value.length>=4000)this.value=this.value.substring(0,3999);">
                {this.state.input}
            </textarea>

        </div>
    );
  }
}

export default App;
