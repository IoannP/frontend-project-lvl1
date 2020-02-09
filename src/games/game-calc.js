import flow from '../index';
import getRandomNumber from '../utils';

// operation's creation
const operations = [' + ', ' - ', ' * '];

const picker = (operationsList) => {
  const length = operationsList.length - 1;
  const sign = getRandomNumber(0, length);
  return operationsList[sign];
};

const operationPicker = (numberOne, numberTwo) => [numberOne, numberTwo].join(picker(operations));

// resulting function
const calculator = (operation) => {
  const toArray = operation.split(' ');
  const firstOperand = Number(toArray[0]);
  const secondOperand = Number(toArray[2]);
  const operator = toArray[1];
  let result;
  switch (operator) {
    case '+':
      result = `${firstOperand + secondOperand}`;
      break;
    case '-':
      result = `${firstOperand - secondOperand}`;
      break;
    case '*':
      result = `${firstOperand * secondOperand}`;
      break;
    default:
      break;
  }
  return result;
};

// arguments of game
const questions = [operationPicker(getRandomNumber(1, 100), getRandomNumber(1, 100)),
  operationPicker(getRandomNumber(1, 100), getRandomNumber(1, 100)),
  operationPicker(getRandomNumber(1, 100), getRandomNumber(1, 100))];

const answers = questions.map(calculator);

const leadIn = 'What is the result of the expression?';

// game
export default () => (flow(questions, answers, leadIn));
