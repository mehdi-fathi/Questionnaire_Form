import store from "./store/index";
import { addSteps,removeStep } from "./actions/index";
window.store = store;
window.addSteps = addSteps;
window.removeStep = removeStep;
