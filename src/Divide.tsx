import React from 'react'
import { useState } from 'react'

export default function Divide() {
const [number1, setNumber1] = useState(1)
const [number2, setNumber2] = useState(1)
const [number3, setNumber3] = useState<number>()
const [guess, setGuess] = useState('')
const [level, setLevel] = useState(10)
const [correct, setCorrect] = useState(0)

const checkAnswer = (guess: string) => {
  let answer;

  if (level > 6 && number3 != undefined) {
    answer = number1 / number2 / number3
  } else {
    answer = number1 / number2
  }

  console.log(answer)
  
    if (Number(guess) === answer) {
      setCorrect(correct + 1)
      setNumber()
    }
    
      if (Number(guess) === answer) {
      if (level === 1) {

       let newNumber1 = Math.round(Math.random() * 20);
       let newNumber2 = Math.round(Math.random() * 20);

       while (newNumber1 % newNumber2 != 0) {
        newNumber2 = Math.round(Math.random() * 20);
      }  

      setNumber1(newNumber1)
      setNumber2(newNumber2)

        if (correct === 10) {
          setLevel(2)
        }

      } else if (level === 2) {
        let newNumber1 = Math.round(Math.random() * 50);
        let newNumber2 = Math.round(Math.random() * 20);
 
        while (newNumber1 % newNumber2 != 0) {
         newNumber2 = Math.round(Math.random() * 10);
       }  
 
       setNumber1(newNumber1)
       setNumber2(newNumber2)
        if (correct === 20) {
          setLevel(3)
        }
      } else if (level === 3) {
        let newNumber1 = Math.round(Math.random() * 100);
        let newNumber2 = Math.round(Math.random() * 20);
 
        while (newNumber1 % newNumber2 != 0) {
         newNumber2 = Math.round(Math.random() * 10);
       }  
 
       setNumber1(newNumber1)
       setNumber2(newNumber2)
        if (correct === 30) {
          setLevel(4)
        }
      } else if (level === 4) {
        let newNumber1 = Math.round(Math.random() * 500);
        let newNumber2 = Math.round(Math.random() * 50);
 
        while (newNumber1 % newNumber2 != 0) {
         newNumber2 = Math.round(Math.random() * 50);
       }  
 
       setNumber1(newNumber1)
       setNumber2(newNumber2)
        if (correct === 40) {
          setLevel(5)
        }
      } else if (level === 5) {
        let newNumber1 = Math.round(Math.random() * 1000);
        let newNumber2 = Math.round(Math.random() * 100);
 
        while (newNumber1 % newNumber2 != 0) {
         newNumber2 = Math.round(Math.random() * 100);
       }  
 
       setNumber1(newNumber1)
       setNumber2(newNumber2)
        if (correct === 50) {
          setLevel(6)
        }
      } else if (level === 6) {
        let newNumber1 = Math.round(Math.random() * 100);
        let newNumber2 = Math.round(Math.random() * 20);
        let newNumber3 = Math.round(Math.random() * 20);
 
        while (newNumber1 % newNumber2 % newNumber3 != 0) {
         newNumber3 = Math.round(Math.random() * 20);
       }  
 
       setNumber1(newNumber1)
       setNumber2(newNumber2)
       setNumber3(newNumber3)

        if (correct === 60) {
          setLevel(7)
        }
      } else if (level === 7) {
        let newNumber1 = Math.round(Math.random() * 500);
        let newNumber2 = Math.round(Math.random() * 50);
        let newNumber3 = Math.round(Math.random() * 50);

        while (newNumber1 % newNumber2 % newNumber3 != 0) {
         newNumber3 = Math.round(Math.random() * 50);
       }  
 
       setNumber1(newNumber1)
       setNumber2(newNumber2)
       setNumber3(newNumber3)
        if (correct === 70) {
          setLevel(8)
        }
      } else if (level === 8) {
        let newNumber1 = Math.round(Math.random() * 1000);
        let newNumber2 = Math.round(Math.random() * 100);
        let newNumber3 = Math.round(Math.random() * 100);
 
        while (newNumber1 % newNumber2 % newNumber3 != 0) {
         newNumber3 = Math.round(Math.random() * 100);
       }  
 
       setNumber1(newNumber1)
       setNumber2(newNumber2)
       setNumber3(newNumber3)
        if (correct === 80) {
          setLevel(9)
        }
      } else if (level === 9) {
        let newNumber1 = Math.round(Math.random() * 5000);
        let newNumber2 = Math.round(Math.random() * 500);
        let newNumber3 = Math.round(Math.random() * 500);
 
        while (newNumber1 % newNumber2 % newNumber3 != 0) {
         newNumber3 = Math.round(Math.random() * 500);
       }  
 
       setNumber1(newNumber1)
       setNumber2(newNumber2)
       setNumber3(newNumber3)
        if (correct === 90) {
          setLevel(10)
        }
      } else if (level === 10) {
        let newNumber1 = Math.round(Math.random() * 10000);
        let newNumber2 = Math.round(Math.random() * 1000);
        let newNumber3 = Math.round(Math.random() * 1000);

        console.log(newNumber1 % newNumber2)
 
        while (newNumber1 % newNumber2 % newNumber3 != 0) {
          console.log('more than 0')
          console.log(answer)
         newNumber3 = Math.round(Math.random() * 1000);
       }  
 
       if (newNumber1 % newNumber2 % newNumber3 == 0) {
        console.log('test')
        setNumber1(newNumber1)
        setNumber2(newNumber2)
        setNumber3(newNumber3)
       }

        if (correct === 100) {
          alert('Congrats')
        }
      }
      (document.getElementById('guess') as HTMLInputElement).value = ''
    }
  }

  function setNumber() {
    setNumber1(Math.round(Math.random() * 10))
    setNumber2(Math.round(Math.random() * 10))
  }

  return (
    <div> <p>Level: {level.toString()}</p>
    <div>{number1} / {number2} {number3 ? `/ ${number3}` : null} =</div><input id="guess" type="number" onInput={(e) => checkAnswer((e.target as HTMLInputElement).value)}></input></div>
  )
}
