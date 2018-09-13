import React, {Component} from 'react'

var btn_attr =
        {
            "btn_pre" :{
                "value"     : "Previous",
                "className" : "previous action-button",
            },
            "btn_next" : {
                "value"     : "Next",
                "className" : "next action-button",
            }
        }
    ;

class buttom_attr extends Component {

    setAttr(arr) {

        btn_attr = arr;
    }
    getAttr() {

        return btn_attr;
    }

}

export { buttom_attr }