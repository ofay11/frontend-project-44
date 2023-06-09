import startGameLoop from '../index.js';
import generateRandomInt from '../generateRandomInt.js';

const task = 'What is the result of the expression?';

const mathOperators = ['+', '-', '*'];

const calculate = (a, operator, b) => {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      throw new Error(`Calculation error. Unknown operator: ${operator}`);
  }
};

// generation of question and solutions
const generateQuestionSolution = () => {
  const randomMathOperator = mathOperators[generateRandomInt(0, mathOperators.length - 1)];
  const firstRandomNumber = generateRandomInt(1, 100);
  const secondRandomNumber = generateRandomInt(1, 100);

  const question = `${firstRandomNumber} ${randomMathOperator} ${secondRandomNumber}`;
  const solution = calculate(firstRandomNumber, randomMathOperator, secondRandomNumber);

  return [question, solution];
};

const startCalcGame = () => {
  startGameLoop(task, generateQuestionSolution);
};

export default startCalcGame;
