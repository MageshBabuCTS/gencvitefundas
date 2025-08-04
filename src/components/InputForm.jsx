import { useState } from "react";


// Functional update : This uses the Object Spread Syntax. It takes all the key-value pairs from the previous values state object and copies them into this new object. 
// This is essential to preserve the values of all the other input fields that did not just change


function InputForm() {
const [inputs,setInputs] = useState({});

const handleChange = (event) => {
    const  name = event.target.name;
    const value = event.target.value;
     // Use functional update with object spread syntax
    // stateMap here will be the previous state object
    setInputs((stateMap) => ({...stateMap,[name]: value}))    
}
const handleSubmit = (event) => {
    event.preventDefault();
    const inpValues = inputs;
    console.log('Form Submitted with Values:\n\n' + JSON.stringify(inpValues, null, 2));
    alert('Form Submitted with Values:\n\n' + JSON.stringify(inpValues, null, 2));
}

return (
    <form onSubmit={handleSubmit}>
        <div>
            <label>
                Enter your  name : 
                <input type="text"  name="userName" value={inputs.userName || ''} 
                    onChange={handleChange} />
            </label>
        </div>
        <div>
            <label>
                Enter your  age : 
                <input type="text"  name="age" value={inputs.age || ''} 
                    onChange={handleChange} />
            </label>
        </div>
        <button type="submit" style={{border: '1px solid #ccc', padding: '6px', margin: '9px', 
            borderRadius: '8px', textAlign: 'center', color: 'blue'}}> Submit</button>
    </form>

);

}

export default InputForm;