let checkMinusAnswer = (guess: string, setNumber1: any, setNumber2: any, setNumber3: any, number1: number, number2: number, number3: number, setCorrect: any, correct: number, setLevel: any, level: number) => {
  let answer = number1 - number2 - number3

  if (Number(guess) === answer) {
    setCorrect(correct + 1);

    setNewNumbersMinus(setNumber1, setNumber2, setNumber3, correct, setLevel);

    (document.getElementById('guess') as HTMLInputElement).value = ''
  }
}

export let setNewNumbersMinus = (setNumber1: any, setNumber2: any, setNumber3: any, correct: number, setLevel: any) => {
  if (correct < 9) {
    setLevel(1)
    let newNumber1 = Math.round(Math.random() * 20);
    let newNumber2 = Math.round(Math.random() * 10);

    while (newNumber1 < newNumber2) {
      newNumber2 = Math.round(Math.random() * 10);
    }

    setNumber1(newNumber1)
    setNumber2(newNumber2)
    setNumber3(0)
  } else if (correct < 19) {
    setLevel(2)
    let newNumber1 = Math.round(Math.random() * 50);
    let newNumber2 = Math.round(Math.random() * 50);

    while (newNumber1 < newNumber2) {
      newNumber2 = Math.round(Math.random() * 50);
    }

    setNumber1(newNumber1)
    setNumber2(newNumber2)
    setNumber3(0)
  } else if (correct < 29) {
    setLevel(3)
    let newNumber1 = Math.round(Math.random() * 100);
    let newNumber2 = Math.round(Math.random() * 100);

    while (newNumber1 < newNumber2) {
      newNumber2 = Math.round(Math.random() * 100);
    }

    setNumber1(newNumber1)
    setNumber2(newNumber2)
    setNumber3(0)
  } else if (correct < 39) {
    setLevel(4)
    let newNumber1 = Math.round(Math.random() * 500);
    let newNumber2 = Math.round(Math.random() * 500);

    while (newNumber1 < newNumber2) {
      newNumber2 = Math.round(Math.random() * 500);
    }

    setNumber1(newNumber1)
    setNumber2(newNumber2)
    setNumber3(0)
  } else if (correct < 49) {
    setLevel(5)

    let newNumber1 = Math.round(Math.random() * 1000);
    let newNumber2 = Math.round(Math.random() * 1000);

    while (newNumber1 < newNumber2) {
      newNumber2 = Math.round(Math.random() * 1000);
    }

    setNumber1(newNumber1)
    setNumber2(newNumber2)
    setNumber3(0)
  } else if (correct < 59) {
    setLevel(6)
    let newNumber1 = Math.round(Math.random() * 100);
    let newNumber2 = Math.round(Math.random() * 100);
    let newNumber3 = Math.round(Math.random() * 100);

    while ((newNumber3 - newNumber2 - newNumber1) < 0) {
      newNumber3 = Math.round(Math.random() * 100);
    }

    setNumber1(newNumber1)
    setNumber2(newNumber2)
    setNumber3(newNumber3)
  } else if (correct < 69) {
    setLevel(7)
    let newNumber1 = Math.round(Math.random() * 500);
    let newNumber2 = Math.round(Math.random() * 500);
    let newNumber3 = Math.round(Math.random() * 500);

    while ((newNumber3 - newNumber2 - newNumber1) < 0) {
      newNumber3 = Math.round(Math.random() * 500);
    }

    setNumber1(newNumber1)
    setNumber2(newNumber2)
    setNumber3(newNumber3)
  } else if (correct < 79) {
    setLevel(8)
    let newNumber1 = Math.round(Math.random() * 1000);
    let newNumber2 = Math.round(Math.random() * 1000);
    let newNumber3 = Math.round(Math.random() * 1000);

    while ((newNumber3 - newNumber2 - newNumber1) < 0) {
      newNumber3 = Math.round(Math.random() * 1000);
    }

    setNumber1(newNumber1)
    setNumber2(newNumber2)
    setNumber3(newNumber3)
  } else if (correct < 89) {
    setLevel(9)
    let newNumber1 = Math.round(Math.random() * 5000);
    let newNumber2 = Math.round(Math.random() * 5000);
    let newNumber3 = Math.round(Math.random() * 5000);

    while ((newNumber3 - newNumber2 - newNumber1) < 0) {
      newNumber3 = Math.round(Math.random() * 5000);
    }

    setNumber1(newNumber1)
    setNumber2(newNumber2)
    setNumber3(newNumber3)
  } else if (correct < 99) {
    setLevel(10)

    let newNumber1 = Math.round(Math.random() * 10000);
    let newNumber2 = Math.round(Math.random() * 10000);
    let newNumber3 = Math.round(Math.random() * 10000);

    while ((newNumber3 - newNumber2 - newNumber1) < 0) {
      newNumber3 = Math.round(Math.random() * 10000);
    }

    setNumber1(newNumber1)
    setNumber2(newNumber2)
    setNumber3(newNumber3)
  }
}

export default checkMinusAnswer