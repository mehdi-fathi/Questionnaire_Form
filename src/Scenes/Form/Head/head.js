
import React, { Component}  from 'react';

class Head extends Component {

    render(){
    return(
        <div>
            <h2 class="fs-title">Question {this.props.counter+1}</h2>
            <h3 class="fs-subtitle">{this.props.question}</h3>
        </div>
    );
}
}

export default Head;
