import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

const element=<h1>Welcome to React</h1>;

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

  render() {
    return (
        <div>
            <h2 class="fs-title">Question 1</h2>
            <h3 class="fs-subtitle">What do you consider your main strengths to be?</h3>
            <textarea class="form-control" name="CAT_Custom_1" id="CAT_Custom_1" rows="4" onkeydown="if(this.value.length>=4000)this.value=this.value.substring(0,3999);"></textarea>

        </div>
    );
  }
}

export default App;
