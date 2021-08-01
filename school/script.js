
      /* Input:
  --A number 
  -- arithmetic operator (+, -, *, or /)
  -- Another number 
  Processing: Check if the child's answer is correct 
  -- Output: Tell the child if the answer is correct or not. 

  * Output: Test Cases
Input   Output
7 + 3  10   Correct! Good job!
7.5 - 3  5  Incorrect! Try again!
5 * 3  15   Correct! Good job!
10 / 2.5  6 Incorrect! Try again!
  
   */
      function checkCorrectAnswer() {
          let number1 = parseFloat(document.getElementById('number1').value);
          
          let operator = document.getElementById('operator').value;
          
          let number2 = parseFloat(document.getElementById('number2').value);
          
          let MineAnswer = parseFloat(document.getElementById('MineAnswer').value); 
          
          let correctAnswer = parseFloat(eval(number1 + operator + number2)); 
          
          let result;

          if (correctAnswer == MineAnswer) {
              result = 'Correct! You did a good job';
          } else {
             result = 'Incorrect, try again';
          }

          document.getElementById('result').innerHTML = result; 
      }