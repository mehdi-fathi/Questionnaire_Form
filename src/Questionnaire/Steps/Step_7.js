import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
        <div>
            <h2 class="fs-title">Question 7</h2>
            <h3 class="fs-subtitle">In what areas would you like to improve your non-clinical skills?</h3>
            <textarea class="form-control" name="CAT_Custom_7" id="input" rows="4" onkeydown="if(this.value.length>=4000)this.value=this.value.substring(0,3999);"></textarea>
        </div>
    );
  }
}

export default App;
