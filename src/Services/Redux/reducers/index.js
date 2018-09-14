import { ADD_VALUE,REMOVE_VALUE } from "../constants/action-types";
const initialState = {
    steps: [],
    stepsNumber: [],
};
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_VALUE:
            if(!state.steps[action.payload.step]){
                return { ...state, steps: [...state.steps, action.payload] };
            }else{
                state.steps[action.payload.step]=action.payload;
            }
        /* falls through */
        case REMOVE_VALUE:
            console.log(...state);
        /* falls through */
        default:
            return state;
        /* falls through : this comment for dosen't show error warnning jslint  */
    }
};
export default rootReducer;
