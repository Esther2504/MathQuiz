let checkMinusAnswer = (guess: string, setNumber1: any, setNumber2: any, setNumber3: any, number1: number, number2: number, number3: number, setCorrect: any, correct: number, setLevel: any, level: number) => {
  let answer = number1 - number2

  if (Number(guess) === answer) {
    setCorrect(correct + 1)
    if (level === 1) {

      let newNumber1 = Math.round(Math.random() * 10);
      let newNumber2 = Math.round(Math.random() * 10);

      while (newNumber1 < newNumber2) {
        newNumber2 = Math.round(Math.random() * 10);
      }

      setNumber1(newNumber1)
      setNumber2(newNumber2)

      if (correct === 10) {
        setLevel(2)
      }

    } else if (level === 2) {

      let newNumber1 = Math.round(Math.random() * 50);
      let newNumber2 = Math.round(Math.random() * 50);

      while (newNumber1 < newNumber2) {
        newNumber2 = Math.round(Math.random() * 50);
      }

      setNumber1(newNumber1)
      setNumber2(newNumber2)

      if (correct === 20) {
        setLevel(3)
      }
    } else if (level === 3) {

      let newNumber1 = Math.round(Math.random() * 100);
      let newNumber2 = Math.round(Math.random() * 100);

      while (newNumber1 < newNumber2) {
        newNumber2 = Math.round(Math.random() * 100);
      }

      setNumber1(newNumber1)
      setNumber2(newNumber2)

      if (correct === 30) {
        setLevel(4)
      }
    } else if (level === 4) {

      let newNumber1 = Math.round(Math.random() * 500);
      let newNumber2 = Math.round(Math.random() * 500);

      while (newNumber1 < newNumber2) {
        newNumber2 = Math.round(Math.random() * 500);
      }

      setNumber1(newNumber1)
      setNumber2(newNumber2)

      if (correct === 40) {
        setLevel(5)
      }
    } else if (level === 5) {

      let newNumber1 = Math.round(Math.random() * 1000);
      let newNumber2 = Math.round(Math.random() * 1000);

      while (newNumber1 < newNumber2) {
        newNumber2 = Math.round(Math.random() * 1000);
      }

      setNumber1(newNumber1)
      setNumber2(newNumber2)

      if (correct === 50) {
        setLevel(6)
      }
    } else if (level === 6) {

      let newNumber1 = Math.round(Math.random() * 100);
      let newNumber2 = Math.round(Math.random() * 100);
      let newNumber3 = Math.round(Math.random() * 100);

      while ((newNumber3 - newNumber2 - newNumber1) < 0) {
        newNumber3 = Math.round(Math.random() * 100);
      }

      setNumber1(newNumber1)
      setNumber2(newNumber2)
      setNumber3(newNumber3)

      if (correct === 60) {
        setLevel(7)
      }
    } else if (level === 7) {

      let newNumber1 = Math.round(Math.random() * 500);
      let newNumber2 = Math.round(Math.random() * 500);
      let newNumber3 = Math.round(Math.random() * 500);

      while ((newNumber3 - newNumber2 - newNumber1) < 0) {
        newNumber3 = Math.round(Math.random() * 500);
      }

      setNumber1(newNumber1)
      setNumber2(newNumber2)
      setNumber3(newNumber3)

      if (correct === 70) {
        setLevel(8)
      }
    } else if (level === 8) {

      let newNumber1 = Math.round(Math.random() * 1000);
      let newNumber2 = Math.round(Math.random() * 1000);
      let newNumber3 = Math.round(Math.random() * 1000);

      while ((newNumber3 - newNumber2 - newNumber1) < 0) {
        newNumber3 = Math.round(Math.random() * 1000);
      }

      setNumber1(newNumber1)
      setNumber2(newNumber2)
      setNumber3(newNumber3)

      if (correct === 80) {
        setLevel(9)
      }
    } else if (level === 9) {

      let newNumber1 = Math.round(Math.random() * 5000);
      let newNumber2 = Math.round(Math.random() * 5000);
      let newNumber3 = Math.round(Math.random() * 5000);

      while ((newNumber3 - newNumber2 - newNumber1) < 0) {
        newNumber3 = Math.round(Math.random() * 5000);
      }

      setNumber1(newNumber1)
      setNumber2(newNumber2)
      setNumber3(newNumber3)

      if (correct === 90) {
        setLevel(10)
      }
    } else if (level === 10) {

      let newNumber1 = Math.round(Math.random() * 10000);
      let newNumber2 = Math.round(Math.random() * 10000);
      let newNumber3 = Math.round(Math.random() * 10000);

      while ((newNumber3 - newNumber2 - newNumber1) < 0) {
        newNumber3 = Math.round(Math.random() * 10000);
      }

      setNumber1(newNumber1)
      setNumber2(newNumber2)
      setNumber3(newNumber3)

      if (correct === 100) {
        alert('Congrats')
      }
    }
    (document.getElementById('guess') as HTMLInputElement).value = ''
  }
}

export default checkMinusAnswer