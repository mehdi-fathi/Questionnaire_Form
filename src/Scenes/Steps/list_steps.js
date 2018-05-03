import React from 'react'
import  StepOne  from "../../Components/Steps/step_1";
import  StepTwo  from "../../Components/Steps/step_2";
import  StepThree  from "../../Components/Steps/step_3";
import  StepFour  from "../../Components/Steps/step_4";
import  StepFive  from "../../Components/Steps/step_5";
import  StepSix  from "../../Components/Steps/step_6";
import  StepSeven  from "../../Components/Steps/step_7";
import  StepEight  from "../../Components/Steps/step_8";
import  StepNine  from "../../Components/Steps/step_9";
import  StepTen  from "../../Components/Steps/step_10";

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
