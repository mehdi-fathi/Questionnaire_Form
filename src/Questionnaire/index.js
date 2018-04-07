import React, { Component } from 'react';
import Multi_Form  from "./Form/Multi_Form.js";
import ProgressApp  from "./Progress/index.js";

class App extends Component {
    render() {
        return (
            <div>
            <ProgressApp></ProgressApp>
            <Multi_Form></Multi_Form>
            </div>
        );
    }
}

export default App;
