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
        {name: "StepOne", component: <StepOne counter={0} question={"What do you consider your main strengths to be?"}/>},
        {name: "StepTwo", component: <StepTwo counter={1} question={"What do your colleagues consider your main strengths to be?"}/>},
        {name: "StepThree", component: <StepThree counter={2} question={"What have been your main achievements?"}/>},
        {name: "StepFour", component: <StepFour counter={3} question={"What do you consider your main weaknesses to be?"}/>},
        {name: "StepFive", component: <StepFive counter={4} question={"What do your colleagues consider your main weaknesses to be?"}/>},
        {name: "StepSix", component: <StepSix counter={5} question={"In what areas would you like to improve your clinical skills?"}/>},
        {name: "StepSeven", component: <StepSeven counter={6} question={"In what areas would you like to improve your non-clinical skills?"}/>},
        {name: "StepEight", component: <StepEight counter={7} question={"Are there any specific areas of compliance training that you need to complete?"}/>},
        {name: "StepNine", component: <StepNine counter={8} question={"What postgraduate qualifications do you hold?"}/>},
        {name: "StepTen", component: <StepTen counter={9} question={"What postgraduate qualifications or training do you wish to obtain?"}/>},
    ];

export { steps }
