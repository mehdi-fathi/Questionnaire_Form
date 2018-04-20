// src/js/actions/index.js


import { ADD_VALUE,REMOVE_VALUE } from "../constants/action-types";
export const addSteps= steps => ({ type: ADD_VALUE, payload: steps });
export const removeStep= stepsNumber => ({ type: REMOVE_VALUE, payload: stepsNumber });
