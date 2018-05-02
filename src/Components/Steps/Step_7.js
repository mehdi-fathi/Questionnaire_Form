import React, { Component } from 'react';
import Textarea from "../../Scenes/Inputs/textarea"

class App extends Component {
  render() {
    return (
        <div>
            <h2 class="fs-title">Question 7</h2>
            <h3 class="fs-subtitle">In what areas would you like to improve your non-clinical skills?</h3>
            <Textarea counter={this.props.counter}></Textarea>
        </div>
    );
  }
}

export default App;
