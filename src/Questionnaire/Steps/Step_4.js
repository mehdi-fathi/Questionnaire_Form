import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
        <div>
            <h2 class="fs-title">Question 4</h2>
            <h3 class="fs-subtitle">What do you consider your main weaknesses to be?</h3>
            <textarea class="form-control" name="CAT_Custom_4" id="CAT_Custom_4" rows="4" onkeydown="if(this.value.length>=4000)this.value=this.value.substring(0,3999);"></textarea>
        </div>
    );
  }
}

export default App;
