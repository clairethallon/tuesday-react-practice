import { useState } from "react";

function Header() {
    // const[name, setName] = useState( null );

    const [numOne, setNumOne] = useState();
    const [numTwo, setNumTwo] = useState();
    const [buttonVal, setbuttonVal] = useState('');
    const [equals, setEquals] = useState('');

    const handleNumOne = (event) => {
        console.log('in onChange:', event.target.value);
        setNumOne(event.target.value);
    }

    const handleNumTwo = (event) => {
        console.log('in onChange:', event.target.value);
        setNumTwo(event.target.value);
    }
    const handleOpButton = (event) => {
        console.log('in handleButton', event.target.value);
        setbuttonVal(event.target.value);

    }
    const handleEquationButton = (numOne, buttonVal, numTwo) => {

        console.log('in handleEquationButton', numOne, buttonVal, numTwo);
        setEquals();

    }
    return (
        <div>
            <h1>Claire's Calc</h1>
            <input type="number" placeholder="enter a number" onChange={(event) => handleNumOne(event)} />
            <button value="*" onClick={(event) => handleOpButton(event)}>*</button>
            <button value="/" onClick={(event) => handleOpButton(event)}>/</button>
            <button value="+" onClick={(event) => handleOpButton(event)}>+</button>
            <button value="-" onClick={(event) => handleOpButton(event)}>-</button>
            <input type="number" placeholder="enter a number" onChange={(event) => handleNumTwo(event)} />
            <button button onClick={handleEquationButton}>=</button>
            <p>{numOne} {buttonVal} {numTwo} = {equals}</p>
        </div >
    )
}

export default Header;