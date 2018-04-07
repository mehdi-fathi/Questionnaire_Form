import React, { Component } from 'react';

const element=<h1>Welcome to React</h1>;

class App extends Component {
  render() {
    return (
        <div>
            <h2 class="fs-title">Question 2</h2>
            <h3 class="fs-subtitle">What do your colleagues consider your main strengths to be?</h3>
            <textarea class="form-control" name="CAT_Custom_2" id="CAT_Custom_2" rows="4" onkeydown="if(this.value.length>=4000)this.value=this.value.substring(0,3999);"></textarea>
        </div>
    );
  }
}

export default App;
