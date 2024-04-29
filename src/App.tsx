import React, { useEffect, useState } from 'react';
import './App.css';
import Plus from './Plus';
import Minus from './Minus'
import Multiply from './Multiply';
import Divide from './Divide';
import All from './All';
import checkMultiplyAnswer from './MultiplyFunction';
import checkPlusAnswer from './PlusFunction';

function App() {
const [type, setType] = useState('plus')
const [plusLevel, setPlusLevel] = useState<number>(1)
const [minusLevel, setMinusLevel] = useState<number>(1)
const [multiplyLevel, setMultiplyLevel] = useState<number>(1)
const [divideLevel, setDivideLevel] = useState<number>(1)
const [allLevel, setAllLevel] = useState<number>(1)
const [number1, setNumber1] = useState(1)
const [number2, setNumber2] = useState(1)
const [number3, setNumber3] = useState(0)
const [guess, setGuess] = useState('')
const [level, setLevel] = useState(1)
const [correct, setCorrect] = useState(0)

const checkAnswer = (guess: string) => {

  
if (type == 'plus') {
  checkPlusAnswer(guess, setNumber1, setNumber2, setNumber3, number1, number2, number3, setCorrect, correct, setPlusLevel, level)
} else if (type == 'minus') {
  checkMultiplyAnswer(guess, setNumber1, setNumber2, setNumber3, number1, number2, number3, setCorrect, correct, setLevel, level)
} else if (type == 'multiply') {
  console.log(guess)
  checkMultiplyAnswer(guess, setNumber1, setNumber2, setNumber3, number1, number2, number3, setCorrect, correct, setMultiplyLevel, level)
} else {
  checkMultiplyAnswer(guess, setNumber1, setNumber2, setNumber3, number1, number2, number3, setCorrect, correct, setLevel, level)
}
}

// let currentDate = new Date
// console.log(currentDate.getSeconds())
// console.log(Date.now() / (1000 * 60 * 60 * 24))

// useEffect(() => {

// }, [])

  return (
    <div className="App">
      <header className="App-header">
        <div className='content'>
        <div className='menu'>
        <button onClick={() => setType('plus')}>Plus</button>
        <button onClick={() => setType('minus')}>Minus</button>
        <button onClick={() => setType('multiply')}>Multiply</button>
        <button onClick={() => setType('divide')}>Divide</button>
        <button onClick={() => setType('all')}>All</button>
        </div>
       {type == 'plus' ?
          <div> 
          <p>Level: {plusLevel.toString()}</p>
          <div>{number1} + {number2} {number3 ? `+ ${number3}` : null} =</div><input id="guess" type="number" onInput={(e) => checkAnswer((e.target as HTMLInputElement).value)}></input></div>
          : type == 'minus' ? <Minus /> 
          : type == 'multiply' ? <Multiply checkAnswer={checkAnswer} number1={number1} number2={number2} level={level} /> 
          : type == 'divide' ? <Divide /> 
          : <All />
       }
         {/* {type == 'plus' ?
      <div>{number1} + {number2} {number3 ? `+ ${number3}` : null} =</div><input id="guess" type="number" onInput={(e) => checkAnswer((e.target as HTMLInputElement).value)}></input></div> 
      : type == 'minus' ? <Minus /> : type == 'multiply' ? <Multiply /> : type == 'divide' ? <Divide /> : <All />
       } */}
       </div>
      </header>
    </div>
  );
}

export default App;
