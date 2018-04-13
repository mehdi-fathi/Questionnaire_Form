import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
        <div>
            <h2 class="fs-title">Question 8</h2>
            <h3 class="fs-subtitle">Are there any specific areas of compliance training that you need to complete?</h3>
            <textarea class="form-control" name="CAT_Custom_8" id="input" rows="4" onkeydown="if(this.value.length>=4000)this.value=this.value.substring(0,3999);"></textarea>
        </div>
    );
  }
}

export default App;
