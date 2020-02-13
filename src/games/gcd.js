import flow from '../index';
import getRandomNumber from '../utils';

const getGreatestCommonDivisor = (x, y) => (x ? getGreatestCommonDivisor(y % x, x) : y);

// game's parameters
const getDataGame = () => {
  const numberOne = getRandomNumber();
  const numberTwo = getRandomNumber();
  const question = `${numberOne} ${numberTwo}`;
  const answer = getGreatestCommonDivisor(numberOne, numberTwo);
  return [question, answer.toString()];
};

const description = 'Find the greatest common divisor of given numbers.';

// game
export default () => flow(getDataGame, description);
