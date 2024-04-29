import React, { useEffect } from 'react'
import { useState } from 'react'

interface Props {
  checkAnswer: any;
  number1: number;
  number2: number;
  level: number;
}

export default function Plus({checkAnswer, number1, number2, level}: Props) {
  // const [number1, setNumber1] = useState(1)
  // const [number2, setNumber2] = useState(1)
  const [number3, setNumber3] = useState<number>(0)
  const [guess, setGuess] = useState('')
  // const [level, setLevel] = useState<Number>(1)
  const [correct, setCorrect] = useState(0)

  // const checkAnswer = (guess: string) => {
     
  //     (document.getElementById('guess') as HTMLInputElement).value = ''
  //   }
  // }

  return (
    <div> 
      <p>Level: {level.toString()}</p>
      <div>{number1} + {number2} {number3 ? `+ ${number3}` : null} =</div><input id="guess" type="number" onInput={(e) => checkAnswer((e.target as HTMLInputElement).value)}></input></div>
  )
}
