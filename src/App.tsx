import React, { useState } from 'react';
import './App.css';

function App() {
const [number1, setNumber1] = useState(1)
const [number2, setNumber2] = useState(1)
const [number3, setNumber3] = useState(1)
const [operation, setOperation] = useState('+')
const [guess, setGuess] = useState('')
const [level, setLevel] = useState<Number>(1)
const [correctlevel1, setCorrectlevel1] = useState(0)

const operations = ['+', '-', 'x']

const checkAnswer = (guess: string) => {
  let answer;
  console.log(operation)
  if (operation === '+') {
    answer = number1 + number2
  } else if (operation === '-') {
    answer = number1 - number2
  } else if (operation === '/') {
    answer = number1 / number2
  } else {
    answer = number1 * number2
  }
  
if (Number(guess) === answer) {
  if (level === 1) {
    setNumber1(Math.round(Math.random() * 10))
    setNumber2(Math.round(Math.random() * 10))
    setOperation(operations[Math.round(Math.random() * 1)])
    setCorrectlevel1(correctlevel1 + 1)
    if (correctlevel1 === 10) {
      setLevel(2)
    }

  } else if (level === 2) {
    setOperation('x')
  }
  console.log('correct!')
 
  console.log(Math.round(Math.random() * 3))
  console.log(operation);
  (document.getElementById('guess') as HTMLInputElement).value = ''
}
  console.log(answer)
}

  return (
    <div className="App">
      <header className="App-header">
        <p>level: {level.toString()}</p>
        <div>{number1} {operation} {number2} =</div><input id="guess" type="number" onInput={(e) => checkAnswer((e.target as HTMLInputElement).value)}></input>
      </header>
    </div>
  );
}

export default App;
