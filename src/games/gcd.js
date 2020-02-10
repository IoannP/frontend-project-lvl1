import flow from '../index';
import getRandomNumber from '../utils';

const getGreatestCommonDivisor = (firstNumber, secondNumber) => {
  let a = firstNumber;
  let b = secondNumber;
  while (b) b = a % (a = b);
  return a;
};

// game's parameters
const getDataGame = () => {
  const numberOne = getRandomNumber(1, 100);
  const numberTwo = getRandomNumber(1, 100);
  const question = `${numberOne} ${numberTwo}`;
  const answer = getGreatestCommonDivisor(numberOne, numberTwo);
  return [question, `${answer}`];
};

const description = 'Find the greatest common divisor of given numbers.';

// game
export default () => (flow(getDataGame, description));
