import React, { useEffect, useState } from 'react';
import './App.css';
import All from './All';
import checkMultiplyAnswer from './MultiplyFunction';
import checkPlusAnswer from './PlusFunction';
import checkMinusAnswer from './MinusFunction';
import checkDivideAnswer from './DivideFunction';

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
  checkMinusAnswer(guess, setNumber1, setNumber2, setNumber3, number1, number2, number3, setCorrect, correct, setMinusLevel, level)
} else if (type == 'multiply') {
  console.log(guess)
  checkMultiplyAnswer(guess, setNumber1, setNumber2, setNumber3, number1, number2, number3, setCorrect, correct, setMultiplyLevel, level)
} else {
  checkDivideAnswer(guess, setNumber1, setNumber2, setNumber3, number1, number2, number3, setCorrect, correct, setDivideLevel, level)
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
          : type == 'minus' ? 
          <div> 
          <p>Level: {minusLevel.toString()}</p>
          <div>{number1} - {number2} {number3 ? `- ${number3}` : null} =</div><input id="guess" type="number" onInput={(e) => checkAnswer((e.target as HTMLInputElement).value)}></input></div>
          : type == 'multiply' ? 
          <div>
          <p>Level: {multiplyLevel.toString()}</p>
          <div>{number1} x {number2} {number3 ? `x ${number3}` : null} =</div><input id="guess" type="number" onInput={(e) => checkAnswer((e.target as HTMLInputElement).value)}></input>
          </div>
          : type == 'divide' ? 
          <div>
          <p>Level: {divideLevel.toString()}</p>
          <div>{number1} / {number2} =</div><input id="guess" type="number" onInput={(e) => checkAnswer((e.target as HTMLInputElement).value)}></input>
          </div> 
          : <All />
       }
       </div>
      </header>
    </div>
  );
}

export default App;
