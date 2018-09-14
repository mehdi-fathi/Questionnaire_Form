import React, { Component}  from 'react';

import {buttom_attr} from "./buttom"

class Buttoms extends Component {

    constructor(props) {
        super(props);
        var instanceBtn=new buttom_attr();
        this.state = instanceBtn.getAttr();

        this.hidden = {
            display: "none"
        };
    }
    render(){
        return(
            <div>
                <input type="button" style={this.props.showPreBtn ? {} : this.hidden}
                                    onClick={this.props.pre}
                                    className={this.state.btn_pre.className}
                                    value={this.state.btn_pre.value}/>

                <input type='button' ref="next1" id='next' onClick={this.props.next}
                       className={this.state.btn_next.className}
                       value={this.props.selectState === 9 ? 'Submit' : this.state.btn_next.value}/>
            </div>
        );
    }
}

export default Buttoms;
