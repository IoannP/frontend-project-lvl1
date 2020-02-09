import flow from '../index';
import getRandomNumber from '../utils';

const operators = ['+', '-', '*'];

const getOperator = () => {
  const length = operators.length - 1;
  const sign = getRandomNumber(0, length);
  return operators[sign];
};

// resulting function
const calculator = (operator, firstOperand, secondOperand) => {
  switch (operator) {
    case '+':
      return firstOperand + secondOperand;
    case '-':
      return firstOperand - secondOperand;
    case '*':
      return firstOperand * secondOperand;
    default:
      return null;
  }
};

// arguments of game
const getDataGame = () => {
  const numberOne = getRandomNumber(1, 100);
  const numberTwo = getRandomNumber(1, 100);
  const sign = getOperator();
  const question = `${numberOne} ${sign} ${numberTwo}`;
  const answer = calculator(sign, numberOne, numberTwo);
  return [question, `${answer}`];
};

const description = 'What is the result of the expression?';

// game
export default () => (flow(getDataGame, description));
