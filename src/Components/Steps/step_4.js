import React, { Component } from 'react';
import Textarea from "../../Scenes/Inputs/textarea"

class App extends Component {
  render() {
    return (
        <div>
            <h2 class="fs-title">Question 4</h2>
            <h3 class="fs-subtitle">What do you consider your main weaknesses to be?</h3>
            <Textarea counter={this.props.counter}></Textarea>
        </div>
    );
  }
}

export default App;
