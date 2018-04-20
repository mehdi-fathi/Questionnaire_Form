import { ADD_VALUE,REMOVE_VALUE } from "../constants/action-types";
import store from "../store";
const initialState = {
    steps: [],
    stepsNumber: [],
};
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_VALUE:

            console.log(action);
            console.log( action.payload.step);
            console.log( ...state);

            // return { ...state.steps,
            //     [action.payload.step]:action.payload
            // };
            // return { ...state, steps: [[...action.payload.step]: action.payload] };
            if(!state.steps[action.payload.step]){

                return { ...state, steps: [...state.steps, action.payload] };
            }else{
                state.steps[action.payload.step]=action.payload;
            }
        case REMOVE_VALUE:
            // state.steps.splice(1,2);
            console.log(...state);
        default:
            return state;
    }
};
export default rootReducer;
