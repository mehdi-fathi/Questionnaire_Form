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
        {name: "StepOne", component: <StepOne counter={0}/>},
        {name: "StepTwo", component: <StepTwo counter={1}/>},
        {name: "StepThree", component: <StepThree counter={2}/>},
        {name: "StepFour", component: <StepFour counter={3}/>},
        {name: "StepFive", component: <StepFive counter={4}/>},
        {name: "StepSix", component: <StepSix counter={5}/>},
        {name: "StepSeven", component: <StepSeven counter={6}/>},
        {name: "StepEight", component: <StepEight counter={7}/>},
        {name: "StepNine", component: <StepNine counter={8}/>},
        {name: "StepTen", component: <StepTen counter={9}/>},
    ];

export { steps }
