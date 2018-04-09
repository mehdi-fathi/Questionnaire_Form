import React from 'react'
import  StepOne  from "../Step_1";
import  StepTwo  from "../Step_2";
import  StepThree  from "../Step_3";
import  StepFour  from "../Step_4";
import  StepFive  from "../Step_5";
import  StepSix  from "../Step_6";
import  StepSeven  from "../Step_7";
import  StepEight  from "../Step_8";
import  StepNine  from "../Step_9";
import  StepTen  from "../Step_10";

const steps =
    [
        {name: "StepOne", component: <StepOne/>},
        {name: "StepTwo", component: <StepTwo/>},
        {name: "StepThree", component: <StepThree/>},
        {name: "StepFour", component: <StepFour/>},
        {name: "StepFive", component: <StepFive/>},
        {name: "StepSix", component: <StepSix/>},
        {name: "StepSeven", component: <StepSeven/>},
        {name: "StepEight", component: <StepEight/>},
        {name: "StepNine", component: <StepNine/>},
        {name: "StepTen", component: <StepTen/>},
    ];

export { steps }
