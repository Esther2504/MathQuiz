import React, { useState } from 'react';
import './App.css';

function App() {
const [number1, setNumber1] = useState(1)
const [number2, setNumber2] = useState(1)
const [number3, setNumber3] = useState(1)
const [operation, setOperation] = useState('+')
const [level, setLevel] = useState('+')

const checkAnswer = (guess: string) => {
  let answer;
  if (operation == '+') {
    answer = number1 + number2
  } else if (operation == '-') {
    answer = number1 - number2
  } else if (operation == '/') {
    answer = number1 / number2
  } else {
    answer = number1 * number2
  }
  
if (Number(guess) == answer) {
  console.log('correct!')
  setNumber1(Math.round(Math.random() * 20))
  setNumber2(Math.round(Math.random() * 20))
}
  console.log(answer)
}

  return (
    <div className="App">
      <header className="App-header">
        <div>{number1} {operation} {number2} =</div><input type="number" onInput={(e) => checkAnswer((e.target as HTMLInputElement).value)}></input>
      </header>
    </div>
  );
}

export default App;
