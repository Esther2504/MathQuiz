let checkPlusAnswer = (guess: string, setNumber1: any, setNumber2: any, setNumber3: any, number1: number, number2: number, number3: number, setCorrect: any, correct: number, setLevel: any, level: number) => {
  let answer = number1 + number2 + number3

  if (Number(guess) === answer) {
    setCorrect(correct + 1);

    setNewNumbersPlus(setNumber1, setNumber2, setNumber3, correct, setLevel);

    (document.getElementById('guess') as HTMLInputElement).value = ''
  }
}

export let setNewNumbersPlus = (setNumber1: any, setNumber2: any, setNumber3: any, correct: number, setLevel: any) => {
  if (correct < 9) {
    setLevel(1)
    setNumber1(Math.round(Math.random() * 10))
    setNumber2(Math.round(Math.random() * 10))
    setNumber3(0)
  } else if (correct < 19) {
    setLevel(2)
    setNumber1(Math.round(Math.random() * 50))
    setNumber2(Math.round(Math.random() * 50))
    setNumber3(0)
  } else if (correct < 29) {
    setLevel(3)
    setNumber1(Math.round(Math.random() * 100))
    setNumber2(Math.round(Math.random() * 100))
    setNumber3(0)
  } else if (correct < 39) {
    setLevel(4)
    setNumber1(Math.round(Math.random() * 500))
    setNumber2(Math.round(Math.random() * 500))
    setNumber3(0)
  } else if (correct < 49) {
    setLevel(5)
    setNumber1(Math.round(Math.random() * 1000))
    setNumber2(Math.round(Math.random() * 1000))
    setNumber3(0)
  } else if (correct < 59) {
    setLevel(6)
    setNumber1(Math.round(Math.random() * 100))
    setNumber2(Math.round(Math.random() * 100))
    setNumber3(Math.round(Math.random() * 100))
  } else if (correct < 69) {
    setLevel(7)
    setNumber1(Math.round(Math.random() * 500))
    setNumber2(Math.round(Math.random() * 500))
    setNumber3(Math.round(Math.random() * 500))
  } else if (correct < 79) {
    setLevel(8)
    setNumber1(Math.round(Math.random() * 1000))
    setNumber2(Math.round(Math.random() * 1000))
    setNumber3(Math.round(Math.random() * 1000))
  } else if (correct < 89) {
    setLevel(9)
    setNumber1(Math.round(Math.random() * 5000))
    setNumber2(Math.round(Math.random() * 5000))
    setNumber3(Math.round(Math.random() * 5000))
  } else if (correct < 99) {
    setLevel(10)
    setNumber1(Math.round(Math.random() * 10000))
    setNumber2(Math.round(Math.random() * 10000))
    setNumber3(Math.round(Math.random() * 10000))
  }
}

export default checkPlusAnswer