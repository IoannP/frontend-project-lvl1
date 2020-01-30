import safeEval from 'safe-eval';
import flow from '../../index';
import getRandomNumber from '../../utils';

// operation's creation
const operations = [' + ', ' - ', ' * '];

const picker = (operationsList) => {
  const length = operationsList.length - 1;
  const sign = getRandomNumber(0, length);
  return operationsList[sign];
};

const operationPicker = (numberOne, numberTwo) => `${numberOne}${picker(operations)}${numberTwo}`;

// resulting function
const calculation = (string) => (safeEval(string));

// arguments of game (rounds)
const rounds = [operationPicker(getRandomNumber(1, 100), getRandomNumber(1, 100)),
  operationPicker(getRandomNumber(1, 100), getRandomNumber(1, 100)),
  operationPicker(getRandomNumber(1, 100), getRandomNumber(1, 100))];

const leadIn = 'What is the result of the expression?';

// game
export default () => (flow(calculation, rounds, leadIn));
