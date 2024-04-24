let checkMultiplyAnswer = (guess: string, setNumber1: any, setNumber2: any, setNumber3: any, number1: number, number2: number, number3: number, setCorrect: any, correct: number, setLevel: any, level: number) => {
    let answer;

      answer = number1 * number2

      if (Number(guess) === answer) {
        setCorrect(correct + 1)
        if (level === 1) {
          setNumber1(Math.round(Math.random() * 5))
          setNumber2(Math.round(Math.random() * 5))
          if (correct === 10) {
            setLevel(2)
          }
  
        } else if (level === 2) {
          setNumber1(Math.round(Math.random() * 10))
          setNumber2(Math.round(Math.random() * 10))
          setCorrect(correct + 1)
          if (correct === 20) {
            setLevel(3)
          }
        } else if (level === 3) {
          setNumber1(Math.round(Math.random() * 20))
          setNumber2(Math.round(Math.random() * 20))
          if (correct === 30) {
            setLevel(4)
          }
        } else if (level === 4) {
          setNumber1(Math.round(Math.random() * 50))
          setNumber2(Math.round(Math.random() * 50))
          if (correct === 40) {
            setLevel(5)
          }
        } else if (level === 5) {
          setNumber1(Math.round(Math.random() * 100))
          setNumber2(Math.round(Math.random() * 100))
          if (correct === 50) {
            setLevel(6)
          }
        } else if (level === 6) {
          setNumber1(Math.round(Math.random() * 20))
          setNumber2(Math.round(Math.random() * 20))
          setNumber3(Math.round(Math.random() * 20))
          if (correct === 60) {
            setLevel(7)
          }
        } else if (level === 7) {
          setNumber1(Math.round(Math.random() * 50))
          setNumber2(Math.round(Math.random() * 50))
          setNumber3(Math.round(Math.random() * 50))
          if (correct === 70) {
            setLevel(8)
          }
        } else if (level === 8) {
          setNumber1(Math.round(Math.random() * 100))
          setNumber2(Math.round(Math.random() * 100))
          setNumber3(Math.round(Math.random() * 100))
          if (correct === 80) {
            setLevel(9)
          }
        } else if (level === 9) {
          setNumber1(Math.round(Math.random() * 200))
          setNumber2(Math.round(Math.random() * 200))
          setNumber2(Math.round(Math.random() * 200))
          if (correct === 90) {
            setLevel(10)
          }
        } else if (level === 10) {
          setNumber1(Math.round(Math.random() * 500))
          setNumber2(Math.round(Math.random() * 500))
          setNumber3(Math.round(Math.random() * 500))
          if (correct === 100) {
            alert('Congrats')
          }
        }
        (document.getElementById('guess') as HTMLInputElement).value = ''
      }
    }

export default checkMultiplyAnswer