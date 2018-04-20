import { ADD_VALUE } from "../constants/action-types";
const initialState = {
    steps: []
};
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_VALUE:
            return { ...state, steps: [...state.steps, action.payload] };
        default:
            return state;
    }
};
export default rootReducer;
