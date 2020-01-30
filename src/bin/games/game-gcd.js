import flow from '../../index';
import getRandomNumber from '../../utils';

const greatestCommonDivisor = (numbers) => {
  const stringToArray = numbers.split(' ');
  let firstNumber = stringToArray[0];
  let secondNumber = stringToArray[1];

  while (secondNumber) secondNumber = firstNumber % (firstNumber = secondNumber);
  return firstNumber;
};

// arguments of game (rounds)
const rounds = [`${getRandomNumber(1, 100)} ${getRandomNumber(1, 100)}`,
  `${getRandomNumber(1, 100)} ${getRandomNumber(1, 100)}`,
  `${getRandomNumber(1, 100)} ${getRandomNumber(1, 100)}`];

const leadIn = 'Find the greatest common divisor of given numbers.';

// game
export default () => (flow(greatestCommonDivisor, rounds, leadIn));
