document.addEventListener('DOMContentLoaded', () => {
    // Get references to the display and buttons
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('button');
  
    let currentInput = ''; // Stores the current input
    let operator = ''; // Stores the selected operator
    let firstOperand = ''; // Stores the first number
    let secondOperand = ''; // Stores the second number
  
    // Add event listeners to all buttons
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const value = button.textContent;
  
        // Clear the calculator
        if (value === 'C') {
          currentInput = '';
          operator = '';
          firstOperand = '';
          secondOperand = '';
          display.value = '';
        }
        // Calculate the result
        else if (value === '=') {
          if (firstOperand && operator && currentInput) {
            secondOperand = currentInput;
            const result = calculate(firstOperand, secondOperand, operator);
            display.value = result;
            currentInput = result;
            operator = '';
            firstOperand = '';
            secondOperand = '';
          }
        }
        // Handle operators
        else if (button.classList.contains('operators')) {
          if (currentInput) {
            firstOperand = currentInput;
            operator = value;
            currentInput = '';
          }
        }
        // Handle numbers and decimal point
        else {
          currentInput += value;
          display.value = currentInput;
        }
      });
    });
  
    // Function to perform calculations
    const calculate = (num1, num2, operator) => {
      num1 = parseFloat(num1);
      num2 = parseFloat(num2);
  
      switch (operator) {
        case '+':
          return num1 + num2;
        case '-':
          return num1 - num2;
        case '*':
          return num1 * num2;
        case '/':
          return num1 / num2;
        default:
          return 0;
      }
    };
  });