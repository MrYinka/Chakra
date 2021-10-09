import React, {useState} from "react";

const loginInput = (validateValue) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [inputIsClicked, setInputIsClicked]  = useState(false);

    const valueIsValid = validateValue(enteredValue);
    const valueHasError = !valueIsValid && inputIsClicked;

    

    





    return <div>

    </div>;
};




export default loginInput;