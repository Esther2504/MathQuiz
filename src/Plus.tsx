import React, { useEffect } from 'react'
import { useState } from 'react'

export default function Plus() {
  const [number1, setNumber1] = useState(1)
  const [number2, setNumber2] = useState(1)
  const [number3, setNumber3] = useState<Number>()
  const [timer, setTimer] = useState()
  const [guess, setGuess] = useState('')
  const [level, setLevel] = useState<Number>(1)
  const [correct, setCorrect] = useState(0)

  const checkAnswer = (guess: string) => {
      let answer = number1 + number2

    if (Number(guess) === answer) {
      setCorrect(correct + 1)
      if (level === 1) {
        setNumber1(Math.round(Math.random() * 10))
        setNumber2(Math.round(Math.random() * 10))
        if (correct === 10) {
          setLevel(2)
        }

      } else if (level === 2) {
        setNumber1(Math.round(Math.random() * 50))
        setNumber2(Math.round(Math.random() * 50))
        setCorrect(correct + 1)
        if (correct === 20) {
          setLevel(3)
        }
      } else if (level === 3) {
        setNumber1(Math.round(Math.random() * 100))
        setNumber2(Math.round(Math.random() * 100))
        if (correct === 30) {
          setLevel(4)
        }
      } else if (level === 4) {
        setNumber1(Math.round(Math.random() * 500))
        setNumber2(Math.round(Math.random() * 500))
        if (correct === 40) {
          setLevel(5)
        }
      } else if (level === 5) {
        setNumber1(Math.round(Math.random() * 1000))
        setNumber2(Math.round(Math.random() * 1000))
        if (correct === 50) {
          setLevel(6)
        }
      } else if (level === 6) {
        setNumber1(Math.round(Math.random() * 100))
        setNumber2(Math.round(Math.random() * 100))
        setNumber3(Math.round(Math.random() * 100))
        if (correct === 60) {
          setLevel(7)
        }
      } else if (level === 7) {
       
        setNumber1(Math.round(Math.random() * 500))
        setNumber2(Math.round(Math.random() * 500))
        setNumber3(Math.round(Math.random() * 500))
        if (correct === 70) {
          setLevel(8)
        }
      } else if (level === 8) {
        setNumber1(Math.round(Math.random() * 1000))
        setNumber2(Math.round(Math.random() * 1000))
        setNumber3(Math.round(Math.random() * 1000))
        if (correct === 80) {
          setLevel(9)
        }
      } else if (level === 9) {
        setNumber1(Math.round(Math.random() * 5000))
        setNumber2(Math.round(Math.random() * 5000))
        setNumber3(Math.round(Math.random() * 5000))
        if (correct === 90) {
          setLevel(10)
        }
      } else if (level === 10) {
        setNumber1(Math.round(Math.random() * 10000))
        setNumber2(Math.round(Math.random() * 10000))
        setNumber3(Math.round(Math.random() * 10000))
        if (correct === 100) {
          alert('Congrats')
        }
      }
      (document.getElementById('guess') as HTMLInputElement).value = ''
    }
  }

  let date = new Date()

  setTimeout(() => {
// setTimer()

  }, 1000 * 60)

  useEffect(() => {
    console.log(date.getSeconds())
  }, [date.getSeconds()])

  return (
    <div> 
      <p>Timer: </p>
      <p>Level: {level.toString()}</p>
      <div>{number1} + {number2} {number3 ? `+ ${number3}` : null} =</div><input id="guess" type="number" onInput={(e) => checkAnswer((e.target as HTMLInputElement).value)}></input></div>
  )
}
