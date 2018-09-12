
import {createStore,applyMiddleware,compose } from "redux";
import rootReducer from "../reducers/index";
import { composeWithDevTools } from "redux-devtools-extension";
const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(...rootReducer),
    // other store enhancers if any
));
export default store;
