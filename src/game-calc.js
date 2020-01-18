import safeEval from 'safe-eval';
import { flow, getRandomNumber } from './index';

const getExpression = (argument) => {
  if (getRandomNumber(1, 3) === 1) {
    return [argument.join(' + ')];
  }
  if (getRandomNumber(1, 3) === 2) {
    return [argument.join(' - ')];
  }
  return [argument.join(' * ')];
};

const calculation = (string) => (safeEval(string));

export default () => {
  flow(calculation,
    [getExpression([getRandomNumber(1, 100), getRandomNumber(1, 100)]),
      getExpression([getRandomNumber(1, 100), getRandomNumber(1, 100)]),
      getExpression([getRandomNumber(1, 100), getRandomNumber(1, 100)])],
    'What is the result of the expression?');
};
