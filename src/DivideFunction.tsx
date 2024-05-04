let checkDivideAnswer = (guess: string, setNumber1: any, setNumber2: any, setNumber3: any, number1: number, number2: number, number3: number, setCorrect: any, correct: number, setLevel: any, level: number) => {
    let answer = number1 / number2
  
      if (Number(guess) === answer) {
        setCorrect(correct + 1)
      if (level === 1) {
       let newNumber1 = Math.round(Math.random() * 30);
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
         newNumber2 = Math.round(Math.random() * 20);
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
         newNumber2 = Math.round(Math.random() * 20);
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
        let newNumber1 = Math.round(Math.random() * 2000);
        let newNumber2 = Math.round(Math.random() * 200);
 
        while (newNumber1 % newNumber2 != 0) {
          newNumber2 = Math.round(Math.random() * 200);
       }  
 
       setNumber1(newNumber1)
       setNumber2(newNumber2)

        if (correct === 60) {
          setLevel(7)
        }
      } else if (level === 7) {
        let newNumber1 = Math.round(Math.random() * 5000);
        let newNumber2 = Math.round(Math.random() * 500);

        while (newNumber1 % newNumber2 != 0) {
          newNumber2 = Math.round(Math.random() * 500);
       }  
 
       setNumber1(newNumber1)
       setNumber2(newNumber2)

        if (correct === 70) {
          setLevel(8)
        }
      } else if (level === 8) {
        let newNumber1 = Math.round(Math.random() * 10000);
        let newNumber2 = Math.round(Math.random() * 1000);
 
        while (newNumber1 % newNumber2 != 0) {
         newNumber2 = Math.round(Math.random() * 1000);
       }  
 
       setNumber1(newNumber1)
       setNumber2(newNumber2)

        if (correct === 80) {
          setLevel(9)
        }
      } else if (level === 9) {
        let newNumber1 = Math.round(Math.random() * 20000);
        let newNumber2 = Math.round(Math.random() * 2000);
 
        while (newNumber1 % newNumber2 != 0) {
          newNumber2 = Math.round(Math.random() * 2000);
       }  
 
       setNumber1(newNumber1)
       setNumber2(newNumber2)

        if (correct === 90) {
          setLevel(10)
        }
      } else if (level === 10) {
        let newNumber1 = Math.round(Math.random() * 50000);
        let newNumber2 = Math.round(Math.random() * 5000);

        console.log(newNumber1 % newNumber2)
 
        while (newNumber1 % newNumber2 != 0) {
          newNumber2 = Math.round(Math.random() * 5000);
       }  

        setNumber1(newNumber1)
        setNumber2(newNumber2)

        if (correct === 100) {
          alert('Congrats')
        }
      }
      (document.getElementById('guess') as HTMLInputElement).value = ''
    }
  }

export default checkDivideAnswer