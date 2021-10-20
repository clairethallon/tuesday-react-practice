import { useState } from "react";

function Header() {
    // const[name, setName] = useState( null );

    const [numOne, setNumOne] = useState('');
    const [numTwo, setNumTwo] = useState('');
    const [buttonVal, setbuttonVal] = useState('');
    const [equals, setEquals] = useState('');

    const handleNumOne = (event) => {
        console.log('in handleNumOne:', event.target.value);
        setNumOne(event.target.value);
    }

    const handleNumTwo = (event) => {
        console.log('in handleNumTwo:', event.target.value);
        setNumTwo(event.target.value);
    }
    const handleOpButton = (event) => {
        console.log('in handleButton', event.target.value);
        setbuttonVal(event.target.value);

    }

    const handleEquationButton = () => {

        let firstNum = Number(numOne);
        let secondNum = Number(numTwo);
        console.log('in handleEquationButton', firstNum, secondNum);

        if (String(buttonVal) === '+') {
            let answer = ('= ' + (firstNum + secondNum))
            setEquals(answer);
            return;
        }
        else if (String(buttonVal) === '-') {
            let answer = ('= ' + (firstNum - secondNum))
            setEquals(answer);
            return;
        }
        else if (String(buttonVal) === '/') {
            let answer = ('= ' + (firstNum / secondNum))
            setEquals(answer);
            return;
        }
        else if (String(buttonVal) === '*') {
            let answer = ('= ' + (firstNum * secondNum))
            setEquals(answer);
            return;
        }

    }
    return (
        <div>
            <h1>Claire's Amazing Calc</h1>
            <input type="number" placeholder="enter a number" onChange={(event) => handleNumOne(event)} />
            <button value="*" onClick={(event) => handleOpButton(event)}>*</button>
            <button value="/" onClick={(event) => handleOpButton(event)}>/</button>
            <button value="+" onClick={(event) => handleOpButton(event)}>+</button>
            <button value="-" onClick={(event) => handleOpButton(event)}>-</button>
            <input type="number" placeholder="enter a number" onChange={(event) => handleNumTwo(event)} />
            <button button onClick={handleEquationButton}>=</button>
            <p>{numOne} {buttonVal} {numTwo} {equals}</p>
        </div >
    )
}

export default Header;