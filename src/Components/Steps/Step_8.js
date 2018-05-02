import React, { Component } from 'react';
import Textarea from "../../Scenes/Inputs/textarea"

class App extends Component {
  render() {
    return (
        <div>
            <h2 class="fs-title">Question 8</h2>
            <h3 class="fs-subtitle">Are there any specific areas of compliance training that you need to complete?</h3>
            <Textarea counter={this.props.counter}></Textarea>
        </div>
    );
  }
}

export default App;
