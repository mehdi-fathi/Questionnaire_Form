
var PreValue='';
const setInput=function (value){

    if(typeof value !== "undefined"){
        PreValue=value.body;
        return PreValue;
    }
    return "";
};

export {setInput};
