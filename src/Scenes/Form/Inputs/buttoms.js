import React, { Component}  from 'react';
import {setInput} from "../../Steps/fill_input";
import store from "../../../Services/Redux/store/index";

class Buttoms extends Component {

    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div>
                <input type="button" style={this.props.style}
                                    name="previous" onClick={this.props.pre} className="previous action-button" value="Previous"/>

                <input type='button' ref="next1" id='next' onClick={this.props.next} name="next"
                       className="next action-button" value={this.props.selectState === 9 ? 'Submit' : 'Next'}/>
            </div>
        );
    }
}

export default Buttoms;
