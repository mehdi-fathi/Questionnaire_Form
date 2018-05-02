import React, { Component } from 'react';
import Textarea from "../../Scenes/Inputs/textarea"

class App extends Component {
  render() {
    return (
        <div>
            <h2 class="fs-title">Question 10</h2>
            <h3 class="fs-subtitle">What postgraduate qualifications or training do you wish to obtain?</h3>
            <Textarea counter={this.props.counter}></Textarea>
        </div>
    );
  }
}

export default App;
