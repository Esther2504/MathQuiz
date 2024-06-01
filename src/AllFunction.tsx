let checkAllAnswer = (guess: string, setNumber1: any, setNumber2: any, setNumber3: any, number1: number, number2: number, number3: number, setCorrect: any, correct: number, setLevel: any, level: number, operator: string, setOperator: any, setNewNumbersPlus: any, setNewNumbersMinus: any, setNewNumbersMultiply: any, setNewNumbersDivide: any) => {
  let answer;

  if (operator === '+') {
    answer = number1 + number2 + number3
  } else if (operator === '-') {
    answer = number1 - number2 - number3
  } else if (operator === '/') {
    answer = number1 / number2
  } else {
    if (number3 != 0) {
      answer = number1 * number2 * number3
    } else {
      answer = number1 * number2
    }
  }

  if (Number(guess) === answer) {
    setCorrect(correct + 1)

    let random = Math.round(Math.random() * 4);

    setNewNumbersAll(setNumber1, setNumber2, setNumber3, correct, setLevel, random, setOperator, setNewNumbersPlus, setNewNumbersMinus, setNewNumbersMultiply, setNewNumbersDivide);

    (document.getElementById('guess') as HTMLInputElement).value = ''
  }
}

export let setNewNumbersAll = (setNumber1: any, setNumber2: any, setNumber3: any, correct: number, setLevel: any, random: number, setOperator: any, setNewNumbersPlus: any, setNewNumbersMinus: any, setNewNumbersMultiply: any, setNewNumbersDivide: any) => {
  if (random == 1) {
    setOperator('+')
    setNewNumbersPlus(setNumber1, setNumber2, setNumber3, correct, setLevel)
  } else if (random == 2) {
    setOperator('-')
    setNewNumbersMinus(setNumber1, setNumber2, setNumber3, correct, setLevel)
  } else if (random == 3) {
    setOperator('*')
    setNewNumbersMultiply(setNumber1, setNumber2, setNumber3, correct, setLevel)
  } else {
    setOperator('/')
    setNewNumbersDivide(setNumber1, setNumber2, setNumber3, correct, setLevel)
  }
}

export default checkAllAnswer