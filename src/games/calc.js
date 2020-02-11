import flow from '../index';
import getRandomNumber from '../utils';

const operators = ['+', '-', '*'];

const getOperator = () => {
  const length = operators.length - 1;
  const sign = getRandomNumber(0, length);
  return operators[sign];
};

const calculator = (sign, a, b) => {
  switch (sign) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      return null;
  }
};

// game's parameters
const getDataGame = () => {
  const firstOperand = getRandomNumber();
  const secondOperand = getRandomNumber();
  const operator = getOperator();
  const question = `${firstOperand} ${operator} ${secondOperand}`;
  const answer = calculator(operator, firstOperand, secondOperand);
  return [question, `${answer}`];
};

const description = 'What is the result of the expression?';

// game
export default () => (flow(getDataGame, description));
