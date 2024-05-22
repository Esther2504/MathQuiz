import React, { useEffect, useState } from 'react';
import './App.css';
// import All from './All';
import checkMultiplyAnswer from './MultiplyFunction';
import checkPlusAnswer from './PlusFunction';
import checkMinusAnswer from './MinusFunction';
import checkDivideAnswer from './DivideFunction';
import checkAllAnswer from './AllFunction';
import { setNewNumbersMultiply } from './MultiplyFunction';
import { setNewNumbersPlus } from './PlusFunction';
import { setNewNumbersMinus } from './MinusFunction';
import { setNewNumbersDivide } from './DivideFunction';
import { setNewNumbersAll } from './AllFunction';
import { setCommentRange } from 'typescript';

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
  const [correctPlus, setCorrectPlus] = useState(0)
  const [correctMinus, setCorrectMinus] = useState(0)
  const [correctMultiply, setCorrectMultiply] = useState(0)
  const [correctDivide, setCorrectDivide] = useState(0)
  const [correctAll, setCorrectAll] = useState(0)
  const [operator, setOperator] = useState('+')

  useEffect(() => {
    if (localStorage.getItem('pluslevel') != '0') {
      setCorrectPlus(Number(localStorage.getItem('pluslevel')))
    }
    if (localStorage.getItem('minuslevel') != '0') {
      setCorrectMinus(Number(localStorage.getItem('minuslevel')))
    }
    if (localStorage.getItem('multiplylevel') != '0') {
      setCorrectMultiply(Number(localStorage.getItem('multiplylevel')))
    }
    if (localStorage.getItem('dividelevel') != '0') {
      setCorrectDivide(Number(localStorage.getItem('dividelevel')))
    }
    if (localStorage.getItem('alllevel') != '0') {
      setCorrectAll(Number(localStorage.getItem('alllevel')))
    }
  }, [])

  useEffect(() => {
    if (correctPlus > 0) {
      localStorage.setItem('pluslevel', `${correctPlus}`)
    }
    setNewNumbersPlus(setNumber1, setNumber2, setNumber3, correctPlus, setPlusLevel)
  }, [correctPlus])

  useEffect(() => {
    if (correctMinus > 0) {
      localStorage.setItem('minuslevel', `${correctMinus}`)
    }
    setNewNumbersMinus(setNumber1, setNumber2, setNumber3, correctMinus, setMinusLevel)
  }, [correctMinus])
  
  useEffect(() => {
    if (correctMultiply > 0) {
      localStorage.setItem('multiplylevel', `${correctMultiply}`)
    }
    setNewNumbersMultiply(setNumber1, setNumber2, setNumber3, correctMultiply, setMultiplyLevel)
  }, [correctMultiply])

  useEffect(() => {
    if (correctDivide > 0) {
      localStorage.setItem('dividelevel', `${correctDivide}`)
    }
    setNewNumbersDivide(setNumber1, setNumber2, setNumber3, correctDivide, setDivideLevel)
  }, [correctDivide])

  useEffect(() => {
    if (correctAll > 0) {
      localStorage.setItem('alllevel', `${correctAll}`)
    }
    let random = Math.round(Math.random() * 4);

    setNewNumbersAll(setNumber1, setNumber2, setNumber3, correctAll, setAllLevel, random, setOperator, setNewNumbersPlus, setNewNumbersMinus, setNewNumbersMultiply, setNewNumbersDivide)
  }, [correctAll])
  
  const checkAnswer = (guess: string) => {
    if (type == 'plus') {
      checkPlusAnswer(guess, setNumber1, setNumber2, setNumber3, number1, number2, number3, setCorrectPlus, correctPlus, setPlusLevel, plusLevel)
    } else if (type == 'minus') {
      checkMinusAnswer(guess, setNumber1, setNumber2, setNumber3, number1, number2, number3, setCorrectMinus, correctMinus, setMinusLevel, minusLevel)
    } else if (type == 'multiply') {
      checkMultiplyAnswer(guess, setNumber1, setNumber2, setNumber3, number1, number2, number3, setCorrectMultiply, correctMultiply, setMultiplyLevel, multiplyLevel)
    } else if (type == 'divide') {
      checkDivideAnswer(guess, setNumber1, setNumber2, setNumber3, number1, number2, number3, setCorrectDivide, correctDivide, setDivideLevel, divideLevel)
    } else {
      checkAllAnswer(guess, setNumber1, setNumber2, setNumber3, number1, number2, number3, setCorrectAll, correctAll, setAllLevel, allLevel, operator, setOperator, setNewNumbersPlus, setNewNumbersMinus, setNewNumbersMultiply, setNewNumbersDivide)
    }
  }

// useEffect(() => {
// console.log(correctAll)
// }, [number1])

  return (
    <div className="App">
      <header className="App-header">
        <div className='content'>
          <div className='menu'>
            <button onClick={() => { setType('plus'); setNewNumbersPlus(setNumber1, setNumber2, setNumber3, correctPlus, setPlusLevel) }}>Plus</button>
            <button onClick={() => { setType('minus'); setNewNumbersMinus(setNumber1, setNumber2, setNumber3, correctMinus, setMinusLevel) }}>Minus</button>
            <button onClick={() => { setType('multiply'); setNewNumbersMultiply(setNumber1, setNumber2, setNumber3, correctMultiply, setMultiplyLevel) }}>Multiply</button>
            <button onClick={() => { setType('divide'); setNewNumbersDivide(setNumber1, setNumber2, setNumber3, correctDivide, setDivideLevel) }}>Divide</button>
            <button onClick={() => { setType('all'); setNewNumbersDivide(setNumber1, setNumber2, setNumber3, correctAll, setAllLevel) }}>All</button>
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
                  : 
                  <div>
                  <p>Level: {allLevel.toString()}</p>
                  <div>{number1} {operator} {number2} {number3 ? `x ${number3}` : null} =</div><input id="guess" type="number" onInput={(e) => checkAnswer((e.target as HTMLInputElement).value)}></input>
                </div>
          }
        </div>
      </header>
    </div>
  );
}

export default App;
